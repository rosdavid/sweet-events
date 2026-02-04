-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor)
-- to create the contact_requests table for the contact form.

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service text not null,
  event_date text,
  budget text,
  message text not null,
  created_at timestamptz not null default now()
);
