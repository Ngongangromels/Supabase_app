import { createClient } from '@supabase/supabase-js'   

const supabaseUrl = 'https://hozjxdjrgjlqwrjjmhun.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvemp4ZGpyZ2pscXdyamptaHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NTY2OTYsImV4cCI6MjAzODEzMjY5Nn0.YowQhW6HdGfCz_HwCnOTbtYPgUnHafd4CUolD97Xics' 
export const  supabase = createClient ( supabaseUrl , supabaseKey ) 