-- Create schedule_calls table for form submissions
CREATE TABLE public.schedule_calls (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  company_name text NOT NULL,
  interest text NOT NULL,
  agreed_to_terms boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.schedule_calls ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit schedule calls (public form)
CREATE POLICY "Anyone can submit schedule calls"
  ON public.schedule_calls
  FOR INSERT
  TO anon
  WITH CHECK (true);