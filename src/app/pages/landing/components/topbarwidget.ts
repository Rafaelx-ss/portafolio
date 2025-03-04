import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../../../layout/service/layout.service';
import { CommonModule } from '@angular/common';
import { AppConfigurator } from '../../../layout/component/app.configurator';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'topbar-widget',
    standalone: true,
    imports: [RouterModule, CommonModule, ButtonModule, RippleModule, AppConfigurator, DialogModule, TooltipModule],
    template: `
        <a class="flex items-center flex-col w-96 " href="#">
            <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal">Rafael Solis</span>
        </a>

        <button class="lg:hidden p-2" (click)="toggleMenu()" aria-label="Menu">
            <i class="pi pi-bars"></i>
        </button>

        <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-50" [ngClass]="{'hidden': !menuVisible}" style="gap: 20px;">
            <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'home' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'features' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Tech Stack</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'highlights' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Experiencia</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'pricing' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Mis Servicios</span>
                    </a>
                </li>
                <li>
                    <p-dialog 
                        header="Contáctame" 
                        [(visible)]="display" 
                        [breakpoints]="{ '960px': '90vw', '640px': '95vw' }" 
                        [style]="{ width: '50vw', maxWidth: '650px', zIndex: '99999' }" 
                        [modal]="true" 
                        [dismissableMask]="true"
                        [draggable]="false"
                        [resizable]="false"
                        styleClass="contact-dialog"
                        [closeOnEscape]="true"
                    >
                        <div class="contact-modal-content">
                            <div class="contact-buttons-container">
                                <p-button 
                                    [label]="isCopied ? 'Email copiado!' : 'Copiar Email'" 
                                    icon="pi pi-copy" 
                                    [ngClass]="{'email-copied': isCopied, 'pulse-animation': isCopied}"
                                    styleClass="contact-button p-button-raised" 
                                    (click)="copyEmail()"
                                    pTooltip="mxrafael.solis@gmail.com"
                                    tooltipPosition="top"
                                ></p-button>
                                
                                <p-button 
                                    label="LinkedIn" 
                                    icon="pi pi-linkedin" 
                                    styleClass="contact-button p-button-raised p-button-secondary" 
                                    (click)="openLink('https://www.linkedin.com/in/rafaelxs')"
                                ></p-button>
                                
                                <p-button 
                                    label="GitHub" 
                                    icon="pi pi-github" 
                                    styleClass="contact-button p-button-raised p-button-success" 
                                    (click)="openLink('https://github.com/Rafaelx-ss')"
                                ></p-button>
                                
                                <p-button 
                                    label="Instagram" 
                                    icon="pi pi-instagram" 
                                    styleClass="contact-button p-button-raised p-button-info" 
                                    (click)="openLink('https://www.instagram.com/rafaelx.ss/')"
                                ></p-button>
                                
                                <p-button 
                                    label="WhatsApp" 
                                    icon="pi pi-whatsapp" 
                                    styleClass="contact-button p-button-raised p-button-warning" 
                                    (click)="openLink('https://wa.me/+529999583010')"
                                ></p-button>
                            </div>
                        </div>
                        <ng-template pTemplate="footer">
                            <p-button 
                                label="Cerrar" 
                                icon="pi pi-times" 
                                styleClass="p-button-text" 
                                (click)="close()"
                            ></p-button>
                        </ng-template>
                    </p-dialog>
                    <p-button 
                        label="Contáctame" 
                        icon="pi pi-envelope" 
                        styleClass="p-button-rounded p-button-raised" 
                        (click)="open()"
                    ></p-button>
                </li>
            </ul>

            <div *ngIf="menuVisible">
                <br>
            </div>


            <div class="layout-config-menu mr-20">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }" style="font-size: 1.2em;"></i>
                </button>
                <div class="relative" style="display: none;">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator style="display: none;" />
                </div>
            </div>

            <div *ngIf="menuVisible">
                <br>
            </div>
        
        </div>
    `
})
export class TopbarWidget {
    public layoutService: LayoutService;
    public showColorPicker: boolean = false;
    display: boolean = false;
    isCopied: boolean = false;
    menuVisible: boolean = false;
    copyTimeout: any;

    constructor(public router: Router, layoutService: LayoutService) {
        this.layoutService = layoutService;
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    onColorChange(event: Event) {
        const selectedColor = (event.target as HTMLSelectElement).value;
        this.layoutService.layoutConfig.update((state) => ({ ...state, primary: selectedColor }));
    }

    open() {
        this.display = true;
    }

    close() {
        this.display = false;
        // Resetear el estado de copiado cuando se cierra el modal
        if (this.isCopied) {
            this.isCopied = false;
            clearTimeout(this.copyTimeout);
        }
    }

    copyEmail() {
        const email = 'mxrafael.solis@gmail.com';
        navigator.clipboard.writeText(email);
        this.isCopied = true;
        
        // Limpiar cualquier timeout existente
        if (this.copyTimeout) {
            clearTimeout(this.copyTimeout);
        }
        
        // Resetear el estado después de 3 segundos
        this.copyTimeout = setTimeout(() => {
            this.isCopied = false;
        }, 3000);
    }

    openLink(url: string) {
        window.open(url, '_blank');
    }

    toggleMenu() {
        this.menuVisible = !this.menuVisible;
    }
}