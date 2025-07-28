import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kboqzrklqzjjhzadaeri.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtib3F6cmtscXpqamh6YWRhZXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMzM1NjcsImV4cCI6MjA2ODkwOTU2N30.Qc00pJhCqmXcaylf7qD1SoRvu4HAXqKQQR8-JXf0nzE';

export const supabase = createClient(supabaseUrl, supabaseKey);