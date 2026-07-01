create extension if not exists pgcrypto;

create table if not exists public.app_users (
  id uuid primary key references auth.users(id) on delete cascade,
  profile_id text not null,
  full_name text not null,
  role text not null check (role in ('admin', 'medium')),
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id text primary key,
  rank integer not null default 99,
  leader text not null default '',
  marker text not null default '✦',
  initials text not null default '',
  name text not null,
  spiritual_role text not null default 'Médium',
  permission_label text not null default 'Médium',
  obligation text not null default '',
  next_obligation text not null default '',
  responsibility text not null default '',
  notes text not null default '',
  about text not null default '',
  head_father text not null default '',
  head_mother text not null default '',
  photo_url text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text not null default 'Gira',
  event_date date not null,
  event_time time,
  place text not null default 'Terreiro',
  description text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.event_responses (
  event_id uuid not null references public.events(id) on delete cascade,
  profile_id text not null references public.profiles(id) on delete cascade,
  response text not null check (response in ('Vou', 'Não vou', 'Talvez')),
  updated_at timestamptz not null default now(),
  primary key (event_id, profile_id)
);

create table if not exists public.supply_lists (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_id uuid references public.events(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.supply_items (
  id uuid primary key default gen_random_uuid(),
  list_id uuid not null references public.supply_lists(id) on delete cascade,
  name text not null,
  assigned_to text references public.profiles(id) on delete set null,
  delivered boolean not null default false,
  delivery_photo_url text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.studies (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text not null check (type in ('Estudo', 'Entrega')),
  due_date date,
  description text not null default '',
  file_name text not null default '',
  file_url text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.study_submissions (
  id uuid primary key default gen_random_uuid(),
  study_id uuid not null references public.studies(id) on delete cascade,
  profile_id text not null references public.profiles(id) on delete cascade,
  response text not null default '',
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  unique (study_id, profile_id)
);

create table if not exists public.positive_feedback (
  id uuid primary key default gen_random_uuid(),
  to_profile_id text not null references public.profiles(id) on delete cascade,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.forum_topics (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  message text not null,
  author_profile_id text references public.profiles(id) on delete set null,
  anonymous boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.forum_replies (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.forum_topics(id) on delete cascade,
  message text not null,
  author_profile_id text references public.profiles(id) on delete set null,
  anonymous boolean not null default true,
  created_at timestamptz not null default now()
);

create or replace function public.current_profile_id()
returns text
language sql
security definer
set search_path = public
as $$
  select profile_id from public.app_users where id = auth.uid()
$$;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.app_users
    where id = auth.uid() and role = 'admin'
  )
$$;

alter table public.app_users enable row level security;
alter table public.profiles enable row level security;
alter table public.events enable row level security;
alter table public.event_responses enable row level security;
alter table public.supply_lists enable row level security;
alter table public.supply_items enable row level security;
alter table public.studies enable row level security;
alter table public.study_submissions enable row level security;
alter table public.positive_feedback enable row level security;
alter table public.forum_topics enable row level security;
alter table public.forum_replies enable row level security;

drop policy if exists "users can read their user row" on public.app_users;
drop policy if exists "admins manage user rows" on public.app_users;
drop policy if exists "authenticated users read profiles" on public.profiles;
drop policy if exists "admins manage profiles" on public.profiles;
drop policy if exists "members update own profile" on public.profiles;
drop policy if exists "authenticated users read events" on public.events;
drop policy if exists "admins manage events" on public.events;
drop policy if exists "authenticated users read event responses" on public.event_responses;
drop policy if exists "members manage own event responses" on public.event_responses;
drop policy if exists "authenticated users read supply lists" on public.supply_lists;
drop policy if exists "admins manage supply lists" on public.supply_lists;
drop policy if exists "authenticated users read supply items" on public.supply_items;
drop policy if exists "admins manage supply items" on public.supply_items;
drop policy if exists "members update assigned supply items" on public.supply_items;
drop policy if exists "authenticated users read studies" on public.studies;
drop policy if exists "admins manage studies" on public.studies;
drop policy if exists "members read own submissions" on public.study_submissions;
drop policy if exists "members manage own submissions" on public.study_submissions;
drop policy if exists "feedback visible to recipient and admins" on public.positive_feedback;
drop policy if exists "members create positive feedback" on public.positive_feedback;
drop policy if exists "authenticated users read forum topics" on public.forum_topics;
drop policy if exists "authenticated users create forum topics" on public.forum_topics;
drop policy if exists "admins manage forum topics" on public.forum_topics;
drop policy if exists "authenticated users read forum replies" on public.forum_replies;
drop policy if exists "authenticated users create forum replies" on public.forum_replies;
drop policy if exists "admins manage forum replies" on public.forum_replies;

create policy "users can read their user row" on public.app_users
  for select to authenticated using (id = auth.uid() or public.is_admin());

create policy "admins manage user rows" on public.app_users
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "authenticated users read profiles" on public.profiles
  for select to authenticated using (true);

create policy "admins manage profiles" on public.profiles
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "members update own profile" on public.profiles
  for update to authenticated
  using (id = public.current_profile_id())
  with check (id = public.current_profile_id());

create policy "authenticated users read events" on public.events
  for select to authenticated using (true);

create policy "admins manage events" on public.events
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "authenticated users read event responses" on public.event_responses
  for select to authenticated using (true);

create policy "members manage own event responses" on public.event_responses
  for all to authenticated
  using (profile_id = public.current_profile_id())
  with check (profile_id = public.current_profile_id());

create policy "authenticated users read supply lists" on public.supply_lists
  for select to authenticated using (true);

create policy "admins manage supply lists" on public.supply_lists
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "authenticated users read supply items" on public.supply_items
  for select to authenticated using (true);

create policy "admins manage supply items" on public.supply_items
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "members update assigned supply items" on public.supply_items
  for update to authenticated
  using (assigned_to = public.current_profile_id())
  with check (assigned_to = public.current_profile_id());

create policy "authenticated users read studies" on public.studies
  for select to authenticated using (true);

create policy "admins manage studies" on public.studies
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "members read own submissions" on public.study_submissions
  for select to authenticated using (profile_id = public.current_profile_id() or public.is_admin());

create policy "members manage own submissions" on public.study_submissions
  for all to authenticated
  using (profile_id = public.current_profile_id())
  with check (profile_id = public.current_profile_id());

create policy "feedback visible to recipient and admins" on public.positive_feedback
  for select to authenticated using (to_profile_id = public.current_profile_id() or public.is_admin());

create policy "members create positive feedback" on public.positive_feedback
  for insert to authenticated with check (true);

create policy "authenticated users read forum topics" on public.forum_topics
  for select to authenticated using (true);

create policy "authenticated users create forum topics" on public.forum_topics
  for insert to authenticated with check (true);

create policy "admins manage forum topics" on public.forum_topics
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "authenticated users read forum replies" on public.forum_replies
  for select to authenticated using (true);

create policy "authenticated users create forum replies" on public.forum_replies
  for insert to authenticated with check (true);

create policy "admins manage forum replies" on public.forum_replies
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

insert into public.profiles
  (id, rank, leader, marker, initials, name, spiritual_role, permission_label, obligation, next_obligation, responsibility, notes, about)
values
  ('thiago', 0, 'pai', '♛', 'TH', 'Thiago', 'Pai de santo', 'Administrador', 'Não se aplica', 'Sem previsão', 'Condução espiritual da casa', 'Pai de santo. Acesso total aos perfis, avaliações, calendário e listas.', 'Responsável espiritual pela casa.'),
  ('jaqueline', 0, 'mae', '♕', 'JQ', 'Jaqueline', 'Mãe pequena e capitã', 'Administrador', 'Não se aplica', 'Sem previsão', 'Projeto Terreirinho', 'Mãe pequena e capitã. Acesso total aos perfis e apoio na coordenação.', 'Apoio direto à condução espiritual e organização da corrente.'),
  ('claudemir', 1, '', '✦', 'CL', 'Claudemir', 'Pai Ogã', 'Coordenação', 'Ogã', 'Sem previsão', 'Obras, manutenção e limpeza', 'Pai Ogã. Perfil disponível para acompanhamento e registros internos.', ''),
  ('rita', 2, '', '✦', 'RT', 'Rita', 'Médium', 'Médium', 'Obrigação de faca', 'Camarinha', 'Projeto Terreirinho', 'Médium com obrigação de faca.', ''),
  ('marcela', 3, '', '✦', 'MC', 'Marcela', 'Médium', 'Médium', 'Obrigação de fogo', 'Obrigação de faca', 'Organização das obrigações', 'Médium com obrigação de fogo.', ''),
  ('priscila', 4, '', '✦', 'PR', 'Priscila', 'Médium de Orixalá', 'Médium', 'Orixalá', 'Obrigação de fogo', 'Estoque e controle de itens', 'Médium de Orixalá.', ''),
  ('monique', 5, '', '✦', 'MO', 'Monique', 'Médium de Orixalá', 'Médium', 'Orixalá', 'Obrigação de fogo', 'Calendário geral', 'Médium de Orixalá.', ''),
  ('kelly', 6, '', '✦', 'KL', 'Kelly', 'Médium', 'Médium', 'Obrigação de cabeça', 'Orixalá', 'Obras, manutenção e limpeza', 'Médium com obrigação de cabeça.', ''),
  ('vanessa', 7, '', '✦', 'VN', 'Vanessa', 'Médium', 'Médium', 'Obrigação de cabeça', 'Orixalá', 'Estoque e controle de itens', 'Médium com obrigação de cabeça.', ''),
  ('flavia', 8, '', '✦', 'FL', 'Flávia', 'Médium', 'Médium', 'Obrigação de cabeça', 'Orixalá', 'A definir', 'Médium cadastrada na hierarquia da corrente.', ''),
  ('larissa', 9, '', '✦', 'LS', 'Larissa', 'Médium', 'Administrador', 'Obrigação de cabeça', 'Orixalá', 'Consultas gerais do terreiro', 'Administradora responsável pela montagem do app. Acesso total aos perfis.', 'Escreva um pouco sobre sua caminhada, suas firmezas e seu desenvolvimento.'),
  ('luciana', 10, '', '✦', 'LC', 'Luciana', 'Preparando obrigação de cabeça', 'Médium', 'Mão de Pemba', 'Obrigação de cabeça', 'Obras, manutenção e limpeza', 'Em preparação para obrigação de cabeça.', '')
on conflict (id) do update set
  rank = excluded.rank,
  leader = excluded.leader,
  marker = excluded.marker,
  initials = excluded.initials,
  name = excluded.name,
  spiritual_role = excluded.spiritual_role,
  permission_label = excluded.permission_label,
  obligation = excluded.obligation,
  next_obligation = excluded.next_obligation,
  responsibility = excluded.responsibility,
  notes = excluded.notes,
  updated_at = now();
