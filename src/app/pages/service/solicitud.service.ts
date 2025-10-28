import { Injectable } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';

export interface Solicitud {
    idx?: number;
    solicitudID?: number;
    nombreCliente: string;
    estado: string;
    correoCliente: string;
    empresaOProyecto: string;
    telefono: string;
    tipoProyecto: string;
    presupuesto: string;
    tiempoEstimado: string;
    message: string;
    regEstado: boolean;
    regFechaCreacion?: string;
    regFechaUltimaModificacion?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SolicitudService {
    private tableName = 'SolicitudesProyectos';

    constructor(private supabaseService: SupabaseService) {}

    // Obtener todas las solicitudes
    async getSolicitudes(): Promise<Solicitud[]> {
        try {
            const { data, error } = await this.supabaseService.supabase.from(this.tableName).select('*').eq('regEstado', true).order('regFechaCreacion', { ascending: false });

            if (error) {
                console.error('Error fetching solicitudes:', error);
                throw error;
            }

            return data || [];
        } catch (error) {
            console.error('Error in getSolicitudes:', error);
            throw error;
        }
    }

    // Crear nueva solicitud
    async createSolicitud(solicitud: Omit<Solicitud, 'solicitudID' | 'regFechaCreacion' | 'regFechaUltimaModificacion'>): Promise<Solicitud> {
        try {
            const solicitudData = {
                ...solicitud,
                regEstado: true,
                regFechaCreacion: new Date().toISOString(),
                regFechaUltimaModificacion: new Date().toISOString()
            };

            const { data, error } = await this.supabaseService.supabase.from(this.tableName).insert([solicitudData]).select().single();

            if (error) {
                console.error('Error creating solicitud:', error);
                throw error;
            }

            return data;
        } catch (error) {
            console.error('Error in createSolicitud:', error);
            throw error;
        }
    }

    // Actualizar solicitud
    async updateSolicitud(id: number, solicitud: Partial<Solicitud>): Promise<Solicitud> {
        try {
            const updateData = {
                ...solicitud,
                regFechaUltimaModificacion: new Date().toISOString()
            };

            const { data, error } = await this.supabaseService.supabase.from(this.tableName).update(updateData).eq('solicitudID', id).select().single();

            if (error) {
                console.error('Error updating solicitud:', error);
                throw error;
            }

            return data;
        } catch (error) {
            console.error('Error in updateSolicitud:', error);
            throw error;
        }
    }

    // Eliminar solicitud (soft delete)
    async deleteSolicitud(id: number): Promise<void> {
        try {
            const { error } = await this.supabaseService.supabase
                .from(this.tableName)
                .update({
                    regEstado: false,
                    regFechaUltimaModificacion: new Date().toISOString()
                })
                .eq('solicitudID', id);

            if (error) {
                console.error('Error deleting solicitud:', error);
                throw error;
            }
        } catch (error) {
            console.error('Error in deleteSolicitud:', error);
            throw error;
        }
    }

    // Obtener solicitud por ID
    async getSolicitudById(id: number): Promise<Solicitud | null> {
        try {
            const { data, error } = await this.supabaseService.supabase.from(this.tableName).select('*').eq('solicitudID', id).eq('regEstado', true).single();

            if (error) {
                console.error('Error fetching solicitud by ID:', error);
                return null;
            }

            return data;
        } catch (error) {
            console.error('Error in getSolicitudById:', error);
            return null;
        }
    }

    // Eliminar múltiples solicitudes
    async deleteMultipleSolicitudes(ids: number[]): Promise<void> {
        try {
            const { error } = await this.supabaseService.supabase
                .from(this.tableName)
                .update({
                    regEstado: false,
                    regFechaUltimaModificacion: new Date().toISOString()
                })
                .in('solicitudID', ids);

            if (error) {
                console.error('Error deleting multiple solicitudes:', error);
                throw error;
            }
        } catch (error) {
            console.error('Error in deleteMultipleSolicitudes:', error);
            throw error;
        }
    }
}
