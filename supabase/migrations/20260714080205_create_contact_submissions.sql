/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — full name of the enquirer
  - `email` (text, not null) — contact email
  - `phone` (text, not null) — contact phone number
  - `project_type` (text, not null) — one of: Commercial, Residential, Project Management, Interior Fit-Out
  - `message` (text, not null) — project description from the enquirer
  - `lang` (text, default 'en') — submission language for context
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- INSERT only, scoped to `anon, authenticated` — public contact form with no sign-in.
- No SELECT/UPDATE/DELETE policies: submissions are write-only from the client; data is read from the Supabase dashboard.
- `TO anon, authenticated` is correct here because the contact form is intentionally public (no auth screen) and writes are open; the policy documents this.

3. Notes
- This is a no-auth marketing site. There is no sign-in screen, so anon-key inserts are required.
- The form validates required fields client-side before insert.
- Messages are intentionally write-only from the client surface.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  project_type text NOT NULL,
  message text NOT NULL,
  lang text NOT NULL DEFAULT 'en',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
