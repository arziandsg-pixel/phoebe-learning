-- Chat history between a user and Phoebe
create table public.messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade not null,
  role text not null check (role in ('user', 'model')),
  content text not null,
  created_at timestamptz default now()
);

create index messages_user_id_created_at_idx
  on public.messages (user_id, created_at);

-- Enable Row Level Security
alter table public.messages enable row level security;

-- Policy: user hanya bisa baca/tulis pesan chat miliknya sendiri
create policy "Users can view own messages"
  on public.messages for select
  using (auth.uid() = user_id);

create policy "Users can insert own messages"
  on public.messages for insert
  with check (auth.uid() = user_id);
