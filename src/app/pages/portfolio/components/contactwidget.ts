import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';

interface ContactForm {
    name: string;
    email: string;
    company: string;
    projectType: string;
    budget: string;
    timeline: string;
    message: string;
    phone: string;
}

@Component({
    selector: 'contact-widget',
    standalone: true,
    imports: [
        CommonModule, 
        FormsModule, 
        InputTextModule, 
        TextareaModule, 
        SelectModule, 
        ButtonModule, 
        MessageModule, 
        ToastModule, 
        RippleModule,
        DividerModule
    ],
    providers: [MessageService],
    template: `
        <div id="contact" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
            <div class="text-center mb-12">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-4 text-4xl">¿Trabajamos juntos?</div>
                <span class="text-muted-color text-2xl">Cuéntame sobre tu proyecto y creemos algo increíble</span>
            </div>

            <div class="grid grid-cols-12 gap-8 justify-center">
                <!-- Información de contacto -->
                <div class="col-span-12 lg:col-span-4">
                    <div class="card h-full flex flex-col justify-center p-6" style="border-radius: 15px; background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(156, 39, 176, 0.1))">
                        <div class="text-center mb-8">
                            <div class="flex items-center justify-center bg-primary mb-4 mx-auto" style="width: 4rem; height: 4rem; border-radius: 50%">
                                <i class="pi pi-envelope text-2xl text-white"></i>
                            </div>
                            <h3 class="text-surface-900 dark:text-surface-0 text-2xl font-semibold mb-2">Hablemos de tu proyecto</h3>
                            <p class="text-surface-600 dark:text-surface-200 text-lg">
                                Estoy listo para ayudarte a hacer realidad tus ideas. 
                                Desde desarrollo web hasta aplicaciones móviles, 
                                juntos podemos crear soluciones que marquen la diferencia.
                            </p>
                        </div>

                        <div class="space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-900" style="width: 2.5rem; height: 2.5rem; border-radius: 8px">
                                    <i class="pi pi-envelope text-cyan-600 dark:text-cyan-300"></i>
                                </div>
                                <div>
                                    <p class="text-surface-900 dark:text-surface-0 font-medium">Email</p>
                                    <p class="text-surface-600 dark:text-surface-200">mxrafael.solis&#64;gmail.com</p>
                                </div>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="flex items-center justify-center bg-green-100 dark:bg-green-900" style="width: 2.5rem; height: 2.5rem; border-radius: 8px">
                                    <i class="pi pi-whatsapp text-green-600 dark:text-green-300"></i>
                                </div>
                                <div>
                                    <p class="text-surface-900 dark:text-surface-0 font-medium">WhatsApp</p>
                                    <p class="text-surface-600 dark:text-surface-200">+52 999 958 3010</p>
                                </div>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-900" style="width: 2.5rem; height: 2.5rem; border-radius: 8px">
                                    <i class="pi pi-linkedin text-blue-600 dark:text-blue-300"></i>
                                </div>
                                <div>
                                    <p class="text-surface-900 dark:text-surface-0 font-medium">LinkedIn</p>
                                    <p class="text-surface-600 dark:text-surface-200">linkedin.com/in/rafaelxs</p>
                                </div>
                            </div>
                        </div>

                        <p-divider class="my-6"></p-divider> 

                        <div class="text-center">
                            <p class="text-surface-600 dark:text-surface-200 text-sm mb-4">
                                <i class="pi pi-clock mr-2"></i>
                                Tiempo de respuesta: 24 horas
                            </p>
                            <div class="flex justify-center gap-2">
                                <p-button 
                                    icon="pi pi-linkedin" 
                                    severity="secondary" 
                                    [text]="true" 
                                    [rounded]="true"
                                    (click)="openLink('https://www.linkedin.com/in/rafaelxs')"
                                    pTooltip="LinkedIn"
                                ></p-button>
                                <p-button 
                                    icon="pi pi-github" 
                                    severity="secondary" 
                                    [text]="true" 
                                    [rounded]="true"
                                    (click)="openLink('https://github.com/Rafaelx-ss')"
                                    pTooltip="GitHub"
                                ></p-button>
                                <p-button 
                                    icon="pi pi-whatsapp" 
                                    severity="secondary" 
                                    [text]="true" 
                                    [rounded]="true"
                                    (click)="openLink('https://wa.me/+529999583010')"
                                    pTooltip="WhatsApp"
                                ></p-button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Formulario -->
                <div class="col-span-12 lg:col-span-8">
                    <div class="card p-6" style="border-radius: 15px">
                        <form (ngSubmit)="onSubmit()" #form="ngForm" class="space-y-6">
                            <!-- Mensajes de error/success -->
                            <div *ngIf="formErrors.length > 0" class="space-y-2">
                                <p-message 
                                    *ngFor="let error of formErrors" 
                                    severity="error" 
                                    [text]="error"
                                    styleClass="w-full"
                                ></p-message>
                            </div>

                            <!-- Nombre y Email -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label for="name" class="text-surface-900 dark:text-surface-0 font-medium">
                                        Nombre completo *
                                    </label>
                                    <input 
                                        pInputText 
                                        id="name" 
                                        name="name"
                                        [(ngModel)]="contactForm.nombreCliente" 
                                        placeholder="Tu nombre completo"
                                        class="w-full"
                                        required
                                        #nameField="ngModel"
                                    />
                                    <p-message 
                                        *ngIf="nameField.invalid && nameField.touched" 
                                        severity="error" 
                                        text="El nombre es requerido"
                                        styleClass="w-full"
                                    ></p-message>
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="email" class="text-surface-900 dark:text-surface-0 font-medium">
                                        Correo electrónico *
                                    </label>
                                    <input 
                                        pInputText 
                                        id="email" 
                                        name="email"
                                        type="email"
                                        [(ngModel)]="contactForm.correoCliente" 
                                        placeholder="tu@email.com"
                                        class="w-full"
                                        required
                                        email
                                        #emailField="ngModel"
                                    /> 
                                    <p-message 
                                        *ngIf="emailField.invalid && emailField.touched" 
                                        severity="error" 
                                        [text]="emailField.errors?.['required'] ? 'El email es requerido' : 'Email inválido'"
                                        styleClass="w-full"
                                    ></p-message>
                                </div>
                            </div>

                            <!-- Empresa y Teléfono -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label for="company" class="text-surface-900 dark:text-surface-0 font-medium">
                                        Empresa / Proyecto
                                    </label>
                                    <input 
                                        pInputText 
                                        id="company" 
                                        name="company"
                                        [(ngModel)]="contactForm.empresaOProyecto" 
                                        placeholder="Nombre de tu empresa o proyecto"
                                        class="w-full"
                                    />
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="phone" class="text-surface-900 dark:text-surface-0 font-medium">
                                        Teléfono
                                    </label>
                                    <input 
                                        pInputText 
                                        id="phone" 
                                        name="phone"
                                        [(ngModel)]="contactForm.telefono" 
                                        placeholder="+52 999 123 4567"
                                        class="w-full"
                                    />
                                </div>
                            </div>

                            <!-- Tipo de proyecto y Presupuesto -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label for="projectType" class="text-surface-900 dark:text-surface-0 font-medium">
                                        Tipo de proyecto *
                                    </label>
                                    <p-select 
                                        id="projectType"
                                        name="projectType"
                                        [(ngModel)]="contactForm.tipoProyecto" 
                                        [options]="tipoProyecto" 
                                        optionLabel="label" 
                                        optionValue="value"
                                        placeholder="Selecciona el tipo de proyecto"
                                        class="w-full"
                                        required
                                        #projectTypeField="ngModel"
                                    ></p-select>
                                    <p-message 
                                        *ngIf="projectTypeField.invalid && projectTypeField.touched" 
                                        severity="error" 
                                        text="Selecciona un tipo de proyecto"
                                        styleClass="w-full"
                                    ></p-message>
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="budget" class="text-surface-900 dark:text-surface-0 font-medium">
                                        Presupuesto aproximado
                                    </label>
                                    <p-select 
                                        id="budget"
                                        name="budget"
                                        [(ngModel)]="contactForm.presupuesto" 
                                        [options]="budgetRanges" 
                                        optionLabel="label" 
                                        optionValue="value"
                                        placeholder="Selecciona tu presupuesto"
                                        class="w-full"
                                    ></p-select>
                                </div>
                            </div>

                            <!-- Timeline -->
                            <div class="flex flex-col gap-2">
                                <label for="timeline" class="text-surface-900 dark:text-surface-0 font-medium">
                                    ¿Cuándo necesitas el proyecto?
                                </label>
                                <p-select 
                                    id="timeline"
                                    name="timeline"
                                    [(ngModel)]="contactForm.tiempoEstimado" 
                                    [options]="timelineOptions" 
                                    optionLabel="label" 
                                    optionValue="value"
                                    placeholder="Selecciona el timeline"
                                    class="w-full"
                                ></p-select>
                            </div>

                            <!-- Mensaje -->
                            <div class="flex flex-col gap-2">
                                <label for="message" class="text-surface-900 dark:text-surface-0 font-medium">
                                    Cuéntame sobre tu proyecto *
                                </label>
                                <textarea 
                                    pTextarea 
                                    id="message" 
                                    name="message"
                                    [(ngModel)]="contactForm.message" 
                                    placeholder="Describe tu proyecto, objetivos, funcionalidades que necesitas, etc. Mientras más detalles me proporciones, mejor podré ayudarte."
                                    rows="6"
                                    class="w-full"
                                    required
                                    #messageField="ngModel"
                                ></textarea>
                                <p-message 
                                    *ngIf="messageField.invalid && messageField.touched" 
                                    severity="error" 
                                    text="Por favor describe tu proyecto"
                                    styleClass="w-full"
                                ></p-message>
                            </div>

                            <!-- Botón de envío -->
                            <div class="flex justify-center pt-4">
                                <p-button 
                                    type="submit"
                                    label="Enviar propuesta" 
                                    icon="pi pi-send"
                                    [loading]="isSubmitting"
                                    [disabled]="isSubmitting"
                                    styleClass="px-8 py-3 text-lg"
                                    pRipple
                                ></p-button>
                            </div>

                            <div class="text-center text-sm text-surface-500 dark:text-surface-400">
                                <i class="pi pi-shield mr-2"></i>
                                Tu información está segura y será utilizada únicamente para contactarte sobre tu proyecto.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <p-toast></p-toast>
    `
})
export class ContactWidget implements OnInit {
    contactForm: ContactForm = {
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        phone: ''
    };

    isSubmitting = false;
    formErrors: string[] = [];

    projectTypes = [
        { label: 'Desarrollo Web', value: 'web' },
        { label: 'Aplicación Móvil', value: 'mobile' },
        { label: 'Desarrollo Backend/API', value: 'backend' },
        { label: 'E-commerce', value: 'ecommerce' },
        { label: 'Sistema de Gestión', value: 'management' },
        { label: 'Consultoría Técnica', value: 'consulting' },
        { label: 'Mantenimiento/Mejoras', value: 'maintenance' },
        { label: 'Otro', value: 'other' }
    ];

    budgetRanges = [
        { label: 'Menos de $5,000 USD', value: 'under-5k' },
        { label: '$5,000 - $10,000 USD', value: '5k-10k' },
        { label: '$10,000 - $25,000 USD', value: '10k-25k' },
        { label: '$25,000 - $50,000 USD', value: '25k-50k' },
        { label: 'Más de $50,000 USD', value: 'over-50k' },
        { label: 'Por definir', value: 'tbd' }
    ];

    timelineOptions = [
        { label: 'Urgente (1-2 semanas)', value: 'urgent' },
        { label: '1 mes', value: '1-month' },
        { label: '2-3 meses', value: '2-3-months' },
        { label: '3-6 meses', value: '3-6-months' },
        { label: 'Más de 6 meses', value: '6-plus-months' },
        { label: 'Flexible', value: 'flexible' }
    ];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        // Inicialización si es necesaria
    }

    onSubmit() {
        this.formErrors = [];
        this.isSubmitting = true;

        // Validaciones adicionales
        if (!this.contactForm.name.trim()) {
            this.formErrors.push('El nombre es requerido');
        }
        if (!this.contactForm.email.trim()) {
            this.formErrors.push('El email es requerido');
        }
        if (!this.contactForm.projectType) {
            this.formErrors.push('Selecciona un tipo de proyecto');
        }
        if (!this.contactForm.message.trim()) {
            this.formErrors.push('Describe tu proyecto');
        }

        if (this.formErrors.length > 0) {
            this.isSubmitting = false;
            return;
        }

        // Simular envío (aquí integrarías con tu servicio de email)
        setTimeout(() => {
            this.isSubmitting = false;
            this.showSuccessMessage();
            this.resetForm();
        }, 2000);
    }

    private showSuccessMessage() {
        this.messageService.add({
            severity: 'success',
            summary: '¡Mensaje enviado!',
            detail: 'Gracias por contactarme. Te responderé en las próximas 24 horas.',
            life: 5000
        });
    }

    private resetForm() {
        this.contactForm = {
            name: '',
            email: '',
            company: '',
            projectType: '',
            budget: '',
            timeline: '',
            message: '',
            phone: ''
        };
    }

    openLink(url: string) {
        window.open(url, '_blank');
    }
}
