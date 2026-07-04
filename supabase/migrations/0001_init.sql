-- Users profile (extend dari auth.users Supabase)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  bio text,
  avatar text default '😊',
  xp integer default 0,
  streak integer default 0,
  words_learned integer default 0,
  lessons_finished integer default 0,
  chat_count integer default 0,
  levels jsonb default '[]',
  theme text default 'light',
  lang text default 'id',
  xp_target integer default 50,
  reminder boolean default false,
  onboarding_done boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Policy: user hanya bisa baca/ubah profile sendiri
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Auto-create profile saat user register
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', 'User'));
  return new;
end;
$$ language plpgsql security definer set search_path = public;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
