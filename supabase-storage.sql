-- TECPB - Storage para fotos e anexos.
-- Execute este arquivo no SQL Editor depois de executar supabase-schema.sql.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('profile-photos', 'profile-photos', true, 5242880, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "public read profile photos" on storage.objects;
drop policy if exists "authenticated upload profile photos" on storage.objects;
drop policy if exists "authenticated update profile photos" on storage.objects;

create policy "public read profile photos" on storage.objects
  for select
  using (bucket_id = 'profile-photos');

create policy "authenticated upload profile photos" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'profile-photos');

create policy "authenticated update profile photos" on storage.objects
  for update to authenticated
  using (bucket_id = 'profile-photos')
  with check (bucket_id = 'profile-photos');
