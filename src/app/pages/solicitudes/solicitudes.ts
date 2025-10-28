import { Component, signal, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Solicitud, SolicitudService } from '../service/solicitud.service';
@Component({
    selector: 'app-solicitudes',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        ConfirmDialogModule
    ],
    providers: [MessageService, SolicitudService, ConfirmationService],
    template: `
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="Nueva Solicitud" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()" />
                <p-button severity="secondary" label="Eliminar" icon="pi pi-trash" outlined (onClick)="deleteSelectedSolicitudes()" [disabled]="!selectedSolicitudes || !selectedSolicitudes.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Exportar" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="solicitudes()"
            [rows]="10"
            [columns]="cols"
            [paginator]="true"
            [globalFilterFields]="['nombreCliente', 'empresaOProyecto', 'correoCliente', 'estado']"
            [tableStyle]="{ 'min-width': '75rem' }"
            [(selection)]="selectedSolicitudes"
            [rowHover]="true"
            dataKey="solicitudID"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Gestionar Solicitudes</h5>
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Buscar..." />
                    </p-iconfield>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th style="min-width: 8rem">ID</th>
                    <th pSortableColumn="nombreCliente" style="min-width:16rem">
                        Cliente
                        <p-sortIcon field="nombreCliente" />
                    </th>
                    <th pSortableColumn="empresaOProyecto" style="min-width:16rem">
                        Empresa/Proyecto
                        <p-sortIcon field="empresaOProyecto" />
                    </th>
                    <th pSortableColumn="tipoProyecto" style="min-width: 10rem">
                        Tipo
                        <p-sortIcon field="tipoProyecto" />
                    </th>
                    <th pSortableColumn="presupuesto" style="min-width: 8rem">
                        Presupuesto
                        <p-sortIcon field="presupuesto" />
                    </th>
                    <th pSortableColumn="estado" style="min-width: 12rem">
                        Estado
                        <p-sortIcon field="estado" />
                    </th>
                    <th style="min-width: 12rem"></th>
                </tr>
            </ng-template>
            <ng-template #body let-solicitud>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="solicitud" />
                    </td>
                    <td style="min-width: 8rem">{{ solicitud.solicitudID }}</td>
                    <td style="min-width: 16rem">{{ solicitud.nombreCliente }}</td>
                    <td style="min-width: 16rem">{{ solicitud.empresaOProyecto }}</td>
                    <td style="min-width: 10rem">{{ solicitud.tipoProyecto }}</td>
                    <td style="min-width: 8rem">$ {{ solicitud.presupuesto }}</td>
                    <td>
                        <p-tag [value]="solicitud.estado" [severity]="getSeverity(solicitud.estado)" />
                    </td>
                    <td>
                        <p-button icon="pi pi-pencil" class="mr-2" [rounded]="true" [outlined]="true" (click)="editSolicitud(solicitud)" />
                        <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteSolicitud(solicitud)" />
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <p-dialog [(visible)]="solicitudDialog" [style]="{ width: '600px' }" header="Detalles de la Solicitud" [modal]="true">
            <ng-template #content>
                <div class="flex flex-col gap-6">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-6">
                            <label for="nombreCliente" class="block font-bold mb-3">Nombre del Cliente</label>
                            <input type="text" pInputText id="nombreCliente" [(ngModel)]="solicitud.nombreCliente" required autofocus fluid />
                            <small class="text-red-500" *ngIf="submitted && !solicitud.nombreCliente">El nombre del cliente es requerido.</small>
                        </div>
                        <div class="col-span-6">
                            <label for="correoCliente" class="block font-bold mb-3">Correo Electrónico</label>
                            <input type="email" pInputText id="correoCliente" [(ngModel)]="solicitud.correoCliente" required fluid />
                            <small class="text-red-500" *ngIf="submitted && !solicitud.correoCliente">El correo es requerido.</small>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-6">
                            <label for="telefono" class="block font-bold mb-3">Teléfono</label>
                            <input type="tel" pInputText id="telefono" [(ngModel)]="solicitud.telefono" fluid />
                        </div>
                        <div class="col-span-6">
                            <label for="empresaOProyecto" class="block font-bold mb-3">Empresa/Proyecto</label>
                            <input type="text" pInputText id="empresaOProyecto" [(ngModel)]="solicitud.empresaOProyecto" fluid />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-6">
                            <label for="tipoProyecto" class="block font-bold mb-3">Tipo de Proyecto</label>
                            <p-select [(ngModel)]="solicitud.tipoProyecto" inputId="tipoProyecto" [options]="tiposProyecto" placeholder="Seleccionar tipo" fluid />
                        </div>
                        <div class="col-span-6">
                            <label for="estado" class="block font-bold mb-3">Estado</label>
                            <p-select [(ngModel)]="solicitud.estado" inputId="estado" [options]="statuses" optionLabel="label" optionValue="value" placeholder="Seleccionar estado" fluid />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-6">
                            <label for="presupuesto" class="block font-bold mb-3">Presupuesto</label>
                            <input type="text" pInputText id="presupuesto" [(ngModel)]="solicitud.presupuesto" placeholder="Ej: 1000" fluid />
                        </div>
                        <div class="col-span-6">
                            <label for="tiempoEstimado" class="block font-bold mb-3">Tiempo Estimado</label>
                            <input type="text" pInputText id="tiempoEstimado" [(ngModel)]="solicitud.tiempoEstimado" placeholder="Ej: 1-week" fluid />
                        </div>
                    </div>

                    <div>
                        <label for="message" class="block font-bold mb-3">Mensaje</label>
                        <textarea id="message" pTextarea [(ngModel)]="solicitud.message" rows="4" cols="20" fluid></textarea>
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Cancelar" icon="pi pi-times" text (click)="hideDialog()" />
                <p-button label="Guardar" icon="pi pi-check" (click)="saveSolicitud()" />
            </ng-template>
        </p-dialog>

        <p-confirmdialog [style]="{ width: '450px' }" />
    `
})
export class Solicitudes {
    solicitudDialog: boolean = false;

    solicitudes = signal<any[]>([]);

    solicitud!: any;

    selectedSolicitudes!: any[] | null;

    submitted: boolean = false;

    statuses!: any[];
    tiposProyecto!: any[];

    @ViewChild('dt') dt!: Table;

    exportColumns!: any[];

    cols!: any[];

    constructor(
        private solicitudService: SolicitudService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    exportCSV() {
        this.dt.exportCSV();
    }

    ngOnInit() {
        this.loadSolicitudes();
    }

    async loadSolicitudes() {
        try {
            const data = await this.solicitudService.getSolicitudes();
            this.solicitudes.set(data);
        } catch (error) {
            console.error('Error loading solicitudes:', error);
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Error al cargar las solicitudes',
                life: 3000
            });
        }

        this.statuses = [
            { label: 'Pendiente', value: 'pendiente' },
            { label: 'En Proceso', value: 'en_proceso' },
            { label: 'Completado', value: 'completado' },
            { label: 'Cancelado', value: 'cancelado' }
        ];

        this.tiposProyecto = [
            { label: 'Desarrollo Web', value: 'web' },
            { label: 'Aplicación Móvil', value: 'mobile' },
            { label: 'Desarrollo Backend/API', value: 'backend' },
            { label: 'E-commerce', value: 'ecommerce' },
            { label: 'Sistema de Gestión', value: 'management' },
            { label: 'Consultoría Técnica', value: 'consulting' },
            { label: 'Mantenimiento/Mejoras', value: 'maintenance' },
            { label: 'Otro', value: 'other' }
        ];

        this.cols = [
            { field: 'solicitudID', header: 'ID', customExportHeader: 'Solicitud ID' },
            { field: 'nombreCliente', header: 'Cliente' },
            { field: 'empresaOProyecto', header: 'Empresa/Proyecto' },
            { field: 'tipoProyecto', header: 'Tipo' },
            { field: 'estado', header: 'Estado' },
            { field: 'presupuesto', header: 'Presupuesto' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    openNew() {
        this.solicitud = {
            nombreCliente: '',
            estado: 'pendiente',
            correoCliente: '',
            empresaOProyecto: '',
            telefono: '',
            tipoProyecto: '',
            presupuesto: '',
            tiempoEstimado: '',
            message: '',
            regEstado: true
        };
        this.submitted = false;
        this.solicitudDialog = true;
    }

    editSolicitud(solicitud: Solicitud) {
        this.solicitud = { ...solicitud };
        this.solicitudDialog = true;
    }

    async deleteSelectedSolicitudes() {
        this.confirmationService.confirm({
            message: '¿Estás seguro de que quieres eliminar las solicitudes seleccionadas?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                try {
                    const ids = this.selectedSolicitudes?.map((s) => s.solicitudID!).filter((id) => id !== undefined) || [];
                    await this.solicitudService.deleteMultipleSolicitudes(ids);

                    // Recargar la lista
                    await this.loadSolicitudes();

                    this.selectedSolicitudes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Solicitudes eliminadas',
                        life: 3000
                    });
                } catch (error) {
                    console.error('Error deleting solicitudes:', error);
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Error al eliminar las solicitudes',
                        life: 3000
                    });
                }
            }
        });
    }

    hideDialog() {
        this.solicitudDialog = false;
        this.submitted = false;
    }

    async deleteSolicitud(solicitud: any) {
        this.confirmationService.confirm({
            message: '¿Estás seguro de que quieres eliminar la solicitud de ' + solicitud.nombreCliente + '?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                try {
                    if (solicitud.solicitudID) {
                        await this.solicitudService.deleteSolicitud(solicitud.solicitudID);
                        await this.loadSolicitudes();

                        this.messageService.add({
                            severity: 'success',
                            summary: 'Éxito',
                            detail: 'Solicitud eliminada',
                            life: 3000
                        });
                    }
                } catch (error) {
                    console.error('Error deleting solicitud:', error);
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Error al eliminar la solicitud',
                        life: 3000
                    });
                }
            }
        });
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.solicitudes().length; i++) {
            if (this.solicitudes()[i].solicitudID === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    getSeverity(status: string) {
        switch (status) {
            case 'completado':
                return 'success';
            case 'en_proceso':
                return 'info';
            case 'pendiente':
                return 'warn';
            case 'cancelado':
                return 'danger';
            default:
                return 'info';
        }
    }

    async saveSolicitud() {
        this.submitted = true;

        if (this.solicitud.nombreCliente?.trim()) {
            try {
                if (this.solicitud.solicitudID) {
                    // Actualizar solicitud existente
                    await this.solicitudService.updateSolicitud(this.solicitud.solicitudID, this.solicitud);
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Solicitud actualizada',
                        life: 3000
                    });
                } else {
                    // Crear nueva solicitud
                    await this.solicitudService.createSolicitud(this.solicitud);
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Solicitud creada',
                        life: 3000
                    });
                }

                this.solicitudDialog = false;
                this.solicitud = {} as any;
                await this.loadSolicitudes();
            } catch (error) {
                console.error('Error saving solicitud:', error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al guardar la solicitud',
                    life: 3000
                });
            }
        }
    }
}
