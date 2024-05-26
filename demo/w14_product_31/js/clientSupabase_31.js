const SUPABASE_URL = 'https://szbwskgtksqzkhaokhez.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6Yndza2d0a3NxemtoYW9raGV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjMwNjcsImV4cCI6MjAxMTk5OTA2N30.bUnXA78fO4W9Feozn-19qwgpOel9K7ekJnuToGkkWwc';

export const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
