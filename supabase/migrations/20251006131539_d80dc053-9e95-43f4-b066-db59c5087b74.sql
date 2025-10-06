-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create events table for community events
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_time TEXT,
  description TEXT,
  type TEXT DEFAULT 'roundtable',
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to view events
CREATE POLICY "Events are viewable by everyone" 
ON public.events 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_events_updated_at
BEFORE UPDATE ON public.events
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample events
INSERT INTO public.events (title, location, event_date, event_time, type, is_featured) VALUES
('London Fintech Roundtable', 'Canary Wharf', '2025-10-15', '6:00 PM', 'roundtable', true),
('NYC Investor Breakfast', 'Manhattan', '2025-10-22', '8:30 AM', 'breakfast', true),
('Dubai Family Office Summit', 'DIFC', '2025-11-05', '2:00 PM', 'summit', true),
('Singapore PE/VC Mixer', 'Marina Bay', '2025-11-18', '7:00 PM', 'mixer', false);