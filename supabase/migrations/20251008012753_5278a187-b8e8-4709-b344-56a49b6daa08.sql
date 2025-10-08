-- Create waitlist submissions table
CREATE TABLE public.waitlist_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  source TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit to waitlist
CREATE POLICY "Anyone can submit to waitlist"
ON public.waitlist_submissions
FOR INSERT
WITH CHECK (true);

-- Block all public read access
CREATE POLICY "Block all public read access to waitlist"
ON public.waitlist_submissions
FOR SELECT
USING (false);

-- Create index for better query performance
CREATE INDEX idx_waitlist_source ON public.waitlist_submissions(source);
CREATE INDEX idx_waitlist_created_at ON public.waitlist_submissions(created_at DESC);