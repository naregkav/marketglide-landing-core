-- Add an explicit SELECT policy that blocks all public read access
-- This makes it explicit that contact submissions cannot be read by anyone
-- except through direct database admin access
CREATE POLICY "Block all public read access to contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

-- Comment explaining the security model:
-- INSERT: Anyone can submit contact forms (anonymous submissions allowed)
-- SELECT: Completely blocked - only database admins can view through backend
-- UPDATE/DELETE: Blocked by default (no policies = no access with RLS enabled)