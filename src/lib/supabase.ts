// src/lib/supabase.ts

import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL!;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY!;

export const supabase = createClient(url, anon, {
    auth: {
        persistSession: true, // mantiene sesión en localStorage
        autoRefreshToken: true, // renueva tokens
        detectSessionInUrl: true, // recoge la sesión al volver de OAuth
    },
});
