import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { SupabaseService } from '../../services/supabase.service';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator, ToastModule],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <img src="assets/png/RafaelSolis.png" alt="Rafael Solis" class="mb-8 w-16 shrink-0 mx-auto rounded-full cursor-pointer" (click)="router.navigate(['/'])" />

                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Panel de control de Rafael Solis</div>
                            <span class="text-muted-color font-medium">¡Hola!, este es un apartado personal. :)</span>
                        </div>

                        <div>
                            <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Correo electrónico</label>
                            <input pInputText id="email1" type="text" placeholder="Email address" class="w-full md:w-[30rem] mb-8" [(ngModel)]="email" />

                            <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Contraseña</label>
                            <p-password id="password1" [(ngModel)]="password" placeholder="Contraseña" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false"></p-password>

                            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                                <div class="flex items-center">
                                    <p-checkbox [(ngModel)]="checked" id="rememberme1" binary class="mr-2"></p-checkbox>
                                    <label for="rememberme1">Recordarme</label>
                                </div>
                            </div>
                            <p-button label="Iniciar sesión" styleClass="w-full" (onClick)="onLogin()"></p-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p-toast />
    `,
    providers: [MessageService]
})
export class Login {
    email: string = '';
    password: string = '';
    checked: boolean = false;

    constructor(
        private authService: AuthService,
        public router: Router,
        private messageService: MessageService
    ) {}

    async onLogin() {
        try {
            // Validar campos requeridos
            if (!this.email || !this.password) {
                this.messageService.add({ 
                    severity: 'warn', 
                    summary: 'Campos requeridos', 
                    detail: 'Por favor, completa todos los campos' 
                });
                return;
            }

            const result = await this.authService.login(this.email, this.password);
            
            if (result.success) {
                this.messageService.add({ 
                    severity: 'success', 
                    summary: '¡Bienvenido!', 
                    detail: 'Has iniciado sesión correctamente' 
                });
                
                // Pequeño delay para que el usuario vea el mensaje de éxito
                setTimeout(() => {
                    this.router.navigate(['/dashboard']);
                }, 1000);
            } else {
                this.messageService.add({ 
                    severity: 'error', 
                    summary: 'Error de autenticación', 
                    detail: result.message || 'Credenciales incorrectas' 
                });
            }
        } catch (error) {
            console.error('Error en el login:', error);
            this.messageService.add({ 
                severity: 'error', 
                summary: 'Error del sistema', 
                detail: 'Ha ocurrido un error inesperado. Inténtalo de nuevo.' 
            });
        }
    }
}
