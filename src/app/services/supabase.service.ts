import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    public supabase: SupabaseClient;

    constructor() {
        console.log('SupabaseService', environment.SUPABASE_URL, 'SupabaseService', environment.SUPABASE_ANON_KEY);
        this.supabase = createClient(environment.SUPABASE_URL!, environment.SUPABASE_ANON_KEY!);
    }

    async login(email: string, password: string) {
        const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return data;
    }

    async register(email: string, password: string) {
        const { data, error } = await this.supabase.auth.signUp({ email, password });
        if (error) throw error;
        return data;
    }
}
