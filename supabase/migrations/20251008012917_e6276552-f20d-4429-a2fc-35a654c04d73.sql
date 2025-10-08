-- Add source column to schedule_calls table
ALTER TABLE public.schedule_calls
ADD COLUMN source TEXT NOT NULL DEFAULT 'unknown';

-- Create index for better query performance
CREATE INDEX idx_schedule_calls_source ON public.schedule_calls(source);