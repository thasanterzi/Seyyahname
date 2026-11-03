import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ccxfhictchxctmnunsix.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjeGZoaWN0Y2h4Y3RtbnVuc2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2MzI4NjQsImV4cCI6MjEwOTIwODg2NH0.pkUxomNoDQzdLTB5qhZp-x5ROUhjYZ1SKgRUbEWGgKA'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)