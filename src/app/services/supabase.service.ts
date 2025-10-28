import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    public supabase: SupabaseClient;

    constructor() {
        // Validar que las variables de entorno estén disponibles
        if (!environment.SUPABASE_URL || !environment.SUPABASE_ANON_KEY) {
            console.warn('Supabase environment variables not configured');
            // Crear un cliente mock para evitar errores
            this.supabase = createClient('https://mock.supabase.co', 'mock-key');
            return;
        }

        try {
            this.supabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_ANON_KEY, {
                auth: {
                    persistSession: false, // Evitar problemas con LockManager
                    autoRefreshToken: false
                }
            });
        } catch (error) {
            console.error('Error initializing Supabase client:', error);
            // Crear un cliente mock en caso de error
            this.supabase = createClient('https://mock.supabase.co', 'mock-key');
        }
    }
}
