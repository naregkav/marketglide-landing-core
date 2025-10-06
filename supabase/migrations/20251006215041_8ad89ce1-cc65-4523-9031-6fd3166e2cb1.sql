-- Ensure RLS is enabled on contact_submissions (it should already be, but let's be explicit)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop any existing permissive SELECT policies if they exist
DROP POLICY IF EXISTS "Anyone can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Public can view contact submissions" ON public.contact_submissions;

-- Explicitly block all SELECT access by default (RLS already does this, but being explicit)
-- Only authenticated users with specific roles should be able to view submissions
-- For now, we'll completely restrict SELECT access until admin authentication is implemented

-- Note: When you implement admin authentication, you'll need to add a policy like:
-- CREATE POLICY "Only admins can view contact submissions" 
-- ON public.contact_submissions 
-- FOR SELECT 
-- USING (public.has_role(auth.uid(), 'admin'));