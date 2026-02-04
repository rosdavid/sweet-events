import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin =
  url && serviceKey
    ? createClient(url, serviceKey, { auth: { persistSession: false } })
    : null;

export type ContactRequest = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  event_date: string | null;
  budget: string | null;
  message: string;
  created_at: string;
  notes?: string | null;
  status?: string | null;
};
