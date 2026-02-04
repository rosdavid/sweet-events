-- Run this in Supabase SQL Editor to add notes and status columns
-- for the dashboard requests management.

alter table public.contact_requests
  add column if not exists notes text,
  add column if not exists status text default 'nuevo';
