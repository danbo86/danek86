

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_Transakcje_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_Transakcje_KEY
export const supabaseTransakcje = createClient(supabaseUrl, supabaseKey)
