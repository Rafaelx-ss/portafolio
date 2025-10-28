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

  async login(email: string, password: string): Promise<{success: boolean, message?: string}> {
    try {
      const { data, error } = await this.supabaseService.supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.error('Login error:', error);
        
        // Mapear errores específicos de Supabase a mensajes más amigables
        let errorMessage = 'Credenciales incorrectas';
        
        switch (error.message) {
          case 'Invalid login credentials':
            errorMessage = 'Email o contraseña incorrectos';
            break;
          case 'Email not confirmed':
            errorMessage = 'Por favor, confirma tu email antes de iniciar sesión';
            break;
          case 'Too many requests':
            errorMessage = 'Demasiados intentos. Espera un momento antes de intentar de nuevo';
            break;
          default:
            errorMessage = error.message || 'Error al iniciar sesión';
        }
        
        return { success: false, message: errorMessage };
      }

      if (data.session) {
        this.isAuthenticated.next(true);
        return { success: true };
      }
      
      return { success: false, message: 'No se pudo crear la sesión' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Error de conexión. Verifica tu internet' };
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
        throw new Error('Error al cerrar sesión');
      }
      this.isAuthenticated.next(false);
    } catch (error) {
      throw new Error('Error al cerrar sesión');
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