import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { Solicitud, SolicitudService } from '../../service/solicitud.service';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from '../../../services/i18n.service';

interface ContactForm {
    nombreCliente: string;
    correoCliente: string;
    empresaOProyecto: string;
    tipoProyecto: string;
    presupuesto: string;
    tiempoEstimado: string;
    mensaje: string;
    telefono: string;
}

@Component({
    selector: 'contact-widget',
    standalone: true,
    imports: [CommonModule, FormsModule, InputTextModule, TextareaModule, SelectModule, ButtonModule, MessageModule, ToastModule, RippleModule, DividerModule, TranslateModule],
    providers: [MessageService, SolicitudService],
    template: `
        <div id="contact" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
            <div class="text-center mb-12">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-4 text-4xl">{{ 'portfolio.contact.title' | translate }}</div>
                <span class="text-muted-color text-2xl">{{ 'portfolio.contact.subtitle' | translate }}</span>
            </div>

            <div class="grid grid-cols-12 gap-8 justify-center">
                <!-- Información de contacto -->
                <div class="col-span-12 lg:col-span-4">
                    <div class="card h-full flex flex-col justify-center p-6" style="border-radius: 15px; background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(156, 39, 176, 0.1))">
                        <div class="text-center mb-8">
                            <img src="assets/png/RafaelSolis.png" alt="Rafael Solis" class="mb-8 w-16 shrink-0 mx-auto rounded-full cursor-pointer" />

                            <h3 class="text-surface-900 dark:text-surface-0 text-2xl font-semibold mb-2">{{ 'portfolio.contact.info.title' | translate }}</h3>
                            <p class="text-surface-600 dark:text-surface-200 text-lg">
                                {{ 'portfolio.contact.info.description' | translate }}
                            </p>
                        </div>

                        <div class="space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-900" style="width: 2.5rem; height: 2.5rem; border-radius: 8px">
                                    <i class="pi pi-envelope text-cyan-600 dark:text-cyan-300"></i>
                                </div>
                                <div>
                                    <p class="text-surface-900 dark:text-surface-0 font-medium mb-0">{{ 'portfolio.contact.email.title' | translate }}</p>
                                    <p class="text-surface-600 dark:text-surface-200">{{ 'portfolio.contact.email.value' | translate }}</p>
                                </div>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="flex items-center justify-center bg-green-100 dark:bg-green-900" style="width: 2.5rem; height: 2.5rem; border-radius: 8px">
                                    <i class="pi pi-whatsapp text-green-600 dark:text-green-300"></i>
                                </div>
                                <div>
                                    <p class="text-surface-900 dark:text-surface-0 font-medium mb-0"> {{ 'portfolio.contact.whatsapp.title' | translate }}</p>
                                    <p class="text-surface-600 dark:text-surface-200"> {{ 'portfolio.contact.whatsapp.value' | translate }}</p>
                                </div>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-900" style="width: 2.5rem; height: 2.5rem; border-radius: 8px">
                                    <i class="pi pi-linkedin text-blue-600 dark:text-blue-300"></i>
                                </div>
                                <div>
                                    <p class="text-surface-900 dark:text-surface-0 font-medium mb-0"> {{ 'portfolio.contact.linkedin.title' | translate }}</p>
                                    <p class="text-surface-600 dark:text-surface-200"> {{ 'portfolio.contact.linkedin.value' | translate }}</p>
                                </div>
                            </div>
                        </div>

                        <p-divider class="my-6"></p-divider>

                        <div class="text-center">
                            <p class="text-surface-600 dark:text-surface-200 text-sm mb-4">
                                <i class="pi pi-clock mr-2"></i>
                                {{ 'portfolio.contact.info.response_time' | translate }}
                            </p>
                            <div class="flex justify-center gap-2">
                                <p-button icon="pi pi-linkedin" severity="secondary" [text]="true" [rounded]="true" (click)="openLink('https://www.linkedin.com/in/rafaelxs')" pTooltip="LinkedIn"></p-button>
                                <p-button icon="pi pi-github" severity="secondary" [text]="true" [rounded]="true" (click)="openLink('https://github.com/Rafaelx-ss')" pTooltip="GitHub"></p-button>
                                <p-button icon="pi pi-instagram" severity="secondary" [text]="true" [rounded]="true" (click)="openLink('https://www.instagram.com/rafaelx.ss/')" pTooltip="Instagram"></p-button>
                                <p-button icon="pi pi-whatsapp" severity="secondary" [text]="true" [rounded]="true" (click)="openLink('https://wa.me/+529999583010')" pTooltip="WhatsApp"></p-button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Formulario -->
                <div class="col-span-12 lg:col-span-8">
                    <div class="card p-6" style="border-radius: 15px">
                        <!-- Estado de éxito -->
                        <div *ngIf="isSubmitted" class="text-center py-8">
                            <div class="mb-6">
                                <div class="flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4">
                                    <i class="pi pi-check text-4xl text-green-600 dark:text-green-300"></i>
                                </div>
                                <h3 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-2">{{ 'portfolio.contact.form.success.title' | translate }}</h3>
                                <p class="text-surface-600 dark:text-surface-200 text-lg">
                                    {{ 'portfolio.contact.form.success.message' | translate }}
                                </p>
                            </div>
                            <div class="flex justify-center gap-4">
                                <p-button [label]="'portfolio.contact.form.success.another' | translate" icon="pi pi-refresh" severity="secondary" [outlined]="true" (click)="resetForm()" pRipple> </p-button>
                            </div>
                        </div>

                        <!-- Formulario original -->
                        <form *ngIf="!isSubmitted" (ngSubmit)="onSubmit()" #form="ngForm" class="space-y-6">
                            <!-- Mensajes de error/success -->
                            <div *ngIf="formErrors.length > 0" class="space-y-2">
                                <p-message *ngFor="let error of formErrors" severity="error" [text]="error" styleClass="w-full"></p-message>
                            </div>

                            <!-- Nombre y Email -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label for="nombreCliente" class="text-surface-900 dark:text-surface-0 font-medium"> {{ 'portfolio.contact.form.name' | translate }}  * </label>
                                    <input pInputText id="nombreCliente" name="nombreCliente" [(ngModel)]="contactForm.nombreCliente" placeholder="{{ 'portfolio.contact.form.name.placeholder' | translate }}" class="w-full" required #nameField="ngModel" />
                                    <p-message *ngIf="nameField.invalid && nameField.touched" severity="error" text="{{ 'portfolio.contact.form.name.required' | translate }}" styleClass="w-full"></p-message>
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="correoCliente" class="text-surface-900 dark:text-surface-0 font-medium"> {{ 'portfolio.contact.form.email' | translate }}  * </label>
                                    <input pInputText id="correoCliente" name="correoCliente" type="email" [(ngModel)]="contactForm.correoCliente" placeholder="{{ 'portfolio.contact.form.email.placeholder' | translate }}" class="w-full" required email #correoClienteField="ngModel" />

                                    <p-message
                                        *ngIf="correoClienteField.invalid && correoClienteField.touched"
                                        severity="error"
                                        [text]="correoClienteField.errors?.['required'] ?  'El correo electrónico es requerido' : 'Correo electrónico inválido'"
                                        styleClass="w-full"
                                    ></p-message>
                                </div>
                            </div>

                            <!-- Empresa y Teléfono -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label for="empresaOProyecto" class="text-surface-900 dark:text-surface-0 font-medium"> {{ 'portfolio.contact.form.company' | translate }}  </label>
                                    <input pInputText id="empresaOProyecto" name="empresaOProyecto" [(ngModel)]="contactForm.empresaOProyecto" placeholder="{{ 'portfolio.contact.form.company.placeholder' | translate }}" class="w-full" />
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="telefono" class="text-surface-900 dark:text-surface-0 font-medium"> {{ 'portfolio.contact.form.phone' | translate }}  </label>
                                    <input pInputText id="telefono" name="telefono" [(ngModel)]="contactForm.telefono" placeholder="+52 999 123 4567" class="w-full" />
                                </div>
                            </div>

                            <!-- Tipo de proyecto y Presupuesto -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label for="tipoProyecto" class="text-surface-900 dark:text-surface-0 font-medium"> {{ 'portfolio.contact.form.projectType' | translate }}  * </label>
                                    <p-select
                                        id="tipoProyecto"
                                        name="tipoProyecto"
                                        [(ngModel)]="contactForm.tipoProyecto"
                                        [options]="tipoProyecto"
                                        optionLabel="label"
                                        optionValue="value"
                                        placeholder="{{ 'portfolio.contact.form.projectType.placeholder' | translate }}"
                                        class="w-full"
                                        required
                                        #tipoProyectoField="ngModel"
                                    ></p-select>
                                    <p-message *ngIf="tipoProyectoField.invalid && tipoProyectoField.touched" severity="error" text="{{ 'portfolio.contact.form.projectType.required' | translate }}" styleClass="w-full"></p-message>
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="presupuesto" class="text-surface-900 dark:text-surface-0 font-medium"> {{ 'portfolio.contact.form.budget' | translate }}  </label>
                                    <p-select id="presupuesto" name="presupuesto" [(ngModel)]="contactForm.presupuesto" [options]="presupuesto" optionLabel="label" optionValue="value" placeholder="{{ 'portfolio.contact.form.budget.placeholder' | translate }}" class="w-full"></p-select>
                                </div>
                            </div>

                            <!-- Timeline -->
                            <div class="flex flex-col gap-2">
                                <label for="tiempoEstimado" class="text-surface-900 dark:text-surface-0 font-medium"> {{ 'portfolio.contact.form.timeline' | translate }}  </label>
                                <p-select
                                    id="tiempoEstimado"
                                    name="tiempoEstimado"
                                    [(ngModel)]="contactForm.tiempoEstimado"
                                    [options]="tiempoEstimado"
                                    optionLabel="label"
                                    optionValue="value"
                                    placeholder="{{ 'portfolio.contact.form.timeline.placeholder' | translate }}"
                                    class="w-full"
                                ></p-select>
                            </div>

                            <!-- Mensaje -->
                            <div class="flex flex-col gap-2">
                                <label for="mensaje" class="text-surface-900 dark:text-surface-0 font-medium"> {{ 'portfolio.contact.form.message' | translate }}  * </label>
                                <textarea
                                    pTextarea
                                    id="mensaje"
                                    name="mensaje"
                                    [(ngModel)]="contactForm.mensaje"
                                    placeholder="{{ 'portfolio.contact.form.message.placeholder' | translate }}"
                                    rows="6"
                                    class="w-full"
                                    required
                                    #mensajeField="ngModel"
                                ></textarea>
                                <p-message *ngIf="mensajeField.invalid && mensajeField.touched" severity="error" text="{{ 'portfolio.contact.form.message.required' | translate }}" styleClass="w-full"></p-message>
                            </div>

                            <!-- Botón de envío -->
                            <div class="flex justify-center pt-4">
                                <p-button type="submit" label="{{ 'portfolio.contact.form.submit' | translate }} Enviar propuesta" icon="pi pi-send" [loading]="isSubmitting" [disabled]="isSubmitting" styleClass="px-8 py-3 text-lg" pRipple></p-button>
                            </div>

                            <div class="text-center text-sm text-surface-500 dark:text-surface-400">
                                <i class="pi pi-shield mr-2"></i>
                                {{ 'portfolio.contact.info.security' | translate }}
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
        nombreCliente: '',
        correoCliente: '',
        empresaOProyecto: '',
        tipoProyecto: '',
        presupuesto: '',
        tiempoEstimado: '',
        mensaje: '',
        telefono: ''
    };

    isSubmitting = false;
    formErrors: string[] = [];
    isSubmitted = false;

    tipoProyecto = [
        { label: 'Desarrollo Web', value: 'web' },
        { label: 'Aplicación Móvil', value: 'mobile' },
        { label: 'Desarrollo Backend/API', value: 'backend' },
        { label: 'E-commerce', value: 'ecommerce' },
        { label: 'Sistema de Gestión', value: 'management' },
        { label: 'Consultoría Técnica', value: 'consulting' },
        { label: 'Mantenimiento/Mejoras', value: 'maintenance' },
        { label: 'Otro', value: 'other' }
    ];

    presupuesto = [
        { label: 'Menos de $1,000 MXN', value: '0-1k' },
        { label: '$1,000 - $5,000 MXN', value: '1k-5k' },
        { label: '$5,000 - $10,000 MXN', value: '5k-10k' },
        { label: '$10,000 - $25,000 MXN', value: '10k-25k' },
        { label: '$25,000 MXN - $50,000 MXN', value: '25k-50k' },
        { label: 'Más de $50,000 MXN', value: '50k-plus' },
        { label: 'Por definir', value: 'por-definir' }
    ];

    tiempoEstimado = [
        { label: 'Urgente (1-2 semanas)', value: 'urgent' },
        { label: '1 mes', value: '1-month' },
        { label: '2-3 meses', value: '2-3-months' },
        { label: '3-6 meses', value: '3-6-months' },
        { label: 'Más de 6 meses', value: '6-plus-months' },
        { label: 'Flexible', value: 'flexible' }
    ];

    constructor(
        private messageService: MessageService,
        private solicitudService: SolicitudService,
        private i18nService: I18nService
    ) {}

    ngOnInit() {
        // Inicialización si es necesaria
    }

    async onSubmit() {
        this.formErrors = [];
        this.isSubmitting = true;

        // Validaciones adicionales
        if (!this.contactForm.nombreCliente.trim()) {
            this.formErrors.push('El nombre es requerido');
        }
        if (!this.contactForm.correoCliente.trim()) {
            this.formErrors.push('El email es requerido');
        }
        if (!this.contactForm.tipoProyecto) {
            this.formErrors.push('Selecciona un tipo de proyecto');
        }
        if (!this.contactForm.mensaje.trim()) {
            this.formErrors.push('Describe tu proyecto');
        }

        if (this.formErrors.length > 0) {
            this.isSubmitting = false;
            return;
        }

        // console.log('Contact form:', this.contactForm);

        await this.postSolicitudes(this.contactForm);

        // Simular envío (aquí integrarías con tu servicio de email)
        // setTimeout(() => {
        //     this.isSubmitting = false;
        //     this.showSuccessMessage();
        //     this.resetForm();
        // }, 2000);
    }

    async postSolicitudes(contactForm: ContactForm) {
        try {
            // Convertir ContactForm a Solicitud
            const solicitud: Solicitud = {
                nombreCliente: contactForm.nombreCliente,
                correoCliente: contactForm.correoCliente,
                empresaOProyecto: contactForm.empresaOProyecto,
                telefono: contactForm.telefono,
                tipoProyecto: contactForm.tipoProyecto,
                presupuesto: contactForm.presupuesto,
                tiempoEstimado: contactForm.tiempoEstimado,
                message: contactForm.mensaje,
                estado: 'pendiente',
                regEstado: true
            };

            const response = await this.solicitudService.createSolicitud(solicitud);
            this.messageService.add({
                severity: 'success',
                summary: '¡Mensaje enviado!',
                detail: 'Gracias por contactarme. Te responderé en las próximas 24 horas.',
                life: 5000
            });
            this.isSubmitted = true;
            this.isSubmitting = false;
        } catch (error) {
            console.error('Error creating solicitud:', error);
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Error al enviar el mensaje. Inténtalo de nuevo.',
                life: 5000
            });
            this.isSubmitting = false;
        }
    }

    resetForm() {
        this.contactForm = {
            nombreCliente: '',
            correoCliente: '',
            empresaOProyecto: '',
            tipoProyecto: '',
            presupuesto: '',
            tiempoEstimado: '',
            mensaje: '',
            telefono: ''
        };
        this.isSubmitted = false;
        this.formErrors = [];
        this.isSubmitting = false;
    }

    openLink(url: string) {
        window.open(url, '_blank');
    }
}
