-- Add an explicit SELECT policy that blocks all public read access to schedule calls
-- This protects customer PII (names, emails, company information) from being harvested
CREATE POLICY "Block all public read access to schedule calls" 
ON public.schedule_calls 
FOR SELECT 
USING (false);

-- Comment explaining the security model:
-- INSERT: Anyone can submit schedule call requests (anonymous submissions allowed)
-- SELECT: Completely blocked - only database admins can view through Lovable Cloud backend
-- UPDATE/DELETE: Blocked by default (no policies = no access with RLS enabled)