import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://mvckcmjehajrdorcsnsl.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12Y2tjbWplaGFqcmRvcmNzbnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMDQyMTYsImV4cCI6MjA1MTg4MDIxNn0.FUTUrJJCQ7y1eecswQmaGW3ndJ4rj2iUY3t5Q8soKoY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
