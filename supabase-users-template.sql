-- TECPB - modelo para vincular usuarios do Supabase aos perfis do app.
-- Primeiro crie os usuarios em Authentication > Users.
-- Depois copie o UUID de cada usuario e substitua os valores UUID_...

insert into public.app_users (id, profile_id, full_name, role)
values
  ('UUID_THIAGO', 'thiago', 'Thiago', 'admin'),
  ('UUID_JAQUELINE', 'jaqueline', 'Jaqueline', 'admin'),
  ('UUID_LARISSA', 'larissa', 'Larissa', 'admin'),
  ('UUID_CLAUDEMIR', 'claudemir', 'Claudemir', 'medium'),
  ('UUID_RITA', 'rita', 'Rita', 'medium'),
  ('UUID_MARCELA', 'marcela', 'Marcela', 'medium'),
  ('UUID_PRISCILA', 'priscila', 'Priscila', 'medium'),
  ('UUID_MONIQUE', 'monique', 'Monique', 'medium'),
  ('UUID_KELLY', 'kelly', 'Kelly', 'medium'),
  ('UUID_VANESSA', 'vanessa', 'Vanessa', 'medium'),
  ('UUID_FLAVIA', 'flavia', 'Flavia', 'medium'),
  ('UUID_LUCIANA', 'luciana', 'Luciana', 'medium')
on conflict (id) do update set
  profile_id = excluded.profile_id,
  full_name = excluded.full_name,
  role = excluded.role;
