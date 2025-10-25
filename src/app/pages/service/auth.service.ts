import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from '../../services/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  
  constructor(private supabaseService: SupabaseService) {
    // Verificar si hay una sesión de Supabase al iniciar
    this.checkAuthStatus();
  }

  private async checkAuthStatus() {
    try {
      // Verificar si hay una sesión activa en Supabase
      const { data: { session } } = await this.supabaseService.supabase.auth.getSession();
      if (session) {
        this.isAuthenticated.next(true);
      } else {
        this.isAuthenticated.next(false);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      this.isAuthenticated.next(false);
    }
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const { data, error } = await this.supabaseService.supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.error('Login error:', error);
        return false;
      }

      if (data.session) {
        this.isAuthenticated.next(true);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  async register(name: string, email: string, password: string): Promise<boolean> {
    try {
      const { data, error } = await this.supabaseService.supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name
          }
        }
      });

      if (error) {
        console.error('Register error:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    }
  }

  async logout(): Promise<void> {
    try {
      const { error } = await this.supabaseService.supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error);
      }
      this.isAuthenticated.next(false);
    } catch (error) {
      console.error('Logout error:', error);
      this.isAuthenticated.next(false);
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated.value;
  }

  // Método para obtener el usuario actual
  async getCurrentUser() {
    try {
      const { data: { user } } = await this.supabaseService.supabase.auth.getUser();
      return user;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Método para obtener la sesión actual
  async getCurrentSession() {
    try {
      const { data: { session } } = await this.supabaseService.supabase.auth.getSession();
      return session;
    } catch (error) {
      console.error('Error getting current session:', error);
      return null;
    }
  }
}