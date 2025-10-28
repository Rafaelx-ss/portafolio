import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { LayoutService } from '../../../layout/service/layout.service';
import { CommonModule } from '@angular/common';
import { AppConfigurator } from '../../../layout/component/app.configurator';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { I18nService } from '../../../services/i18n.service';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'topbar-widget',
    standalone: true,
    imports: [RouterModule, CommonModule, ButtonModule, RippleModule, AppConfigurator, DialogModule, TooltipModule, TranslateModule, SplitButtonModule, OverlayPanelModule],
    template: `
        <a class="flex items-center flex-col w-96 cursor-pointer text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal" (click)="scrollToSection('home')">
            <span>Rafael Solis</span>
        </a>

        <button class="lg:hidden p-2" (click)="toggleMenu()" aria-label="Menu">
            <i class="pi pi-bars"></i>
        </button>

        <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-50" [ngClass]="{ hidden: !menuVisible }" style="gap: 20px;">
            <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row gap-8">
                <li>
                    <a (click)="scrollToSection('home')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl cursor-pointer hover:underline">
                        <span>{{ 'portfolio.navigation.home' | translate }}</span>
                    </a>
                </li>
                <li>
                    <a (click)="scrollToSection('features')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl cursor-pointer hover:underline">
                        <span>{{ 'portfolio.navigation.tech_stack' | translate }}</span>
                    </a>
                </li>
                <li>
                    <a (click)="scrollToSection('highlights')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl cursor-pointer hover:underline">
                        <span>{{ 'portfolio.navigation.experience' | translate }}</span>
                    </a>
                </li>
                <li>
                    <a (click)="scrollToSection('pricing')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl cursor-pointer hover:underline ">
                        <span>{{ 'portfolio.navigation.services' | translate }}</span>
                    </a>
                </li>
                <li>
                    <p-dialog
                        header="{{ 'portfolio.navigation.contact_me' | translate }}"
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
                                    [ngClass]="{ 'email-copied': isCopied, 'pulse-animation': isCopied }"
                                    styleClass="contact-button p-button-raised"
                                    (click)="copyEmail()"
                                    pTooltip="mxrafael.solis@gmail.com"
                                    tooltipPosition="top"
                                ></p-button>

                                <p-button label="LinkedIn" icon="pi pi-linkedin" styleClass="contact-button p-button-raised p-button-secondary" (click)="openLink('https://www.linkedin.com/in/rafaelxs')"></p-button>

                                <p-button label="GitHub" icon="pi pi-github" styleClass="contact-button p-button-raised p-button-success" (click)="openLink('https://github.com/Rafaelx-ss')"></p-button>

                                <p-button label="Instagram" icon="pi pi-instagram" styleClass="contact-button p-button-raised p-button-info" (click)="openLink('https://www.instagram.com/rafaelx.ss/')"></p-button>

                                <p-button label="WhatsApp" icon="pi pi-whatsapp" styleClass="contact-button p-button-raised p-button-warning" (click)="openLink('https://wa.me/+529999583010')"></p-button>
                            </div>
                        </div>
                        <ng-template pTemplate="footer">
                            <p-button label="Cerrar" icon="pi pi-times" styleClass="p-button-text" (click)="close()"></p-button>
                        </ng-template>
                    </p-dialog>
                    <p-button label="{{ 'portfolio.navigation.contact_me' | translate }}" icon="pi pi-envelope" styleClass="p-button-rounded p-button-raised" (click)="open()"></p-button>
                </li>
            </ul>

            <div *ngIf="menuVisible">
                <br />
            </div>

            <div class="layout-config-menu mr-20 display-flex flex-row gap-2">
                <div class="relative" style="display: none;">
                    <button class="layout-topbar-action layout-topbar-action-highlight" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout">
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator style="display: none;" />
                </div>
                <!-- Selector de idioma mejorado -->
                <div class="language-selector mr-4 flex gap-2 items-center">
                    <!-- Versión desktop con SplitButton -->
                    <div class="hidden lg:block">
                        <p-splitbutton 
                            [label]="currentLanguageFlag" 
                            [model]="languageMenuItems" 
                            styleClass="language-split-button"
                            [style]="{ 'min-width': '60px' }"
                            (onClick)="changeLanguage(currentLanguage)"
                            severity="secondary"
                            [text]="true"
                            [outlined]="true">
                        </p-splitbutton>
                    </div>

                    <!-- Versión móvil con OverlayPanel -->
                    <div class="lg:hidden">
                        <button 
                            type="button" 
                            class="layout-topbar-action language-mobile-btn" 
                            (click)="languagePanel.toggle($event)"
                            pTooltip="Seleccionar idioma"
                            tooltipPosition="bottom">
                            <span class="text-lg">{{ currentLanguageFlag }}</span>
                        </button>
                        
                        <p-overlaypanel #languagePanel [style]="{ 'min-width': '200px' }">
                            <div class="language-panel-content">
                                <h4 class="text-lg font-semibold mb-3 text-center">Seleccionar Idioma</h4>
                                <div class="grid grid-cols-2 gap-2">
                                    <button 
                                        *ngFor="let lang of languages" 
                                        type="button" 
                                        class="language-option-btn" 
                                        [class.active]="lang.code === currentLanguage"
                                        (click)="changeLanguage(lang.code); languagePanel.hide()"
                                        pRipple>
                                        <span class="text-lg">{{ lang.flag }}</span>
                                        <span class="text-xs">{{ lang.name }}</span>
                                    </button>
                                </div>
                            </div>
                        </p-overlaypanel>
                    </div>

                    <button type="button" class="layout-topbar-action ml-2" (click)="toggleDarkMode()">
                        <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }" style="font-size: 1.2em;"></i>
                    </button>

                    <button type="button" class="login-action" (click)="router.navigate(['/auth/login'])">
                        <i class="pi pi-user ml-4" style="font-size: 1.2em; "></i>
                    </button>
                </div>
            </div>

            <div *ngIf="menuVisible">
                <br />
            </div>
        </div>
    `,
    styles: [
        `
            .language-split-button {
                @apply border-surface-300 dark:border-surface-600;
            }

            .language-split-button .p-splitbutton-defaultbutton {
                @apply text-lg font-medium;
            }

            .language-split-button .p-splitbutton-menubutton {
                @apply text-sm;
            }

            .language-split-button:hover {
                @apply border-primary bg-primary/5 dark:bg-primary/10;
            }

            .language-menu-item {
                @apply flex items-center gap-2 px-3 py-2;
            }

            .language-menu-item .flag {
                @apply text-lg;
            }

            .language-menu-item .name {
                @apply text-sm font-medium;
            }

            .language-menu-item .code {
                @apply text-xs text-surface-500 dark:text-surface-400 ml-auto;
            }

            .language-mobile-btn {
                @apply w-10 h-10 rounded-full border-2 border-transparent bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-all duration-300 flex items-center justify-center cursor-pointer;
            }

            .language-mobile-btn:hover {
                @apply scale-110 shadow-lg border-primary/20;
            }

            .language-panel-content {
                @apply p-4;
            }

            .language-option-btn {
                @apply flex flex-col items-center gap-1 p-3 rounded-lg border-2 border-transparent bg-surface-50 dark:bg-surface-800 hover:bg-surface-100 dark:hover:bg-surface-700 transition-all duration-300 cursor-pointer;
            }

            .language-option-btn.active {
                @apply border-primary bg-primary/10 dark:bg-primary/20;
            }

            .language-option-btn:hover {
                @apply scale-105 shadow-md;
            }

            .language-option-btn.active:hover {
                @apply border-primary/80;
            }
        `
    ]
})
export class TopbarWidget {
    public layoutService: LayoutService;
    public showColorPicker: boolean = false;
    display: boolean = false;
    isCopied: boolean = false;
    menuVisible: boolean = false;
    copyTimeout: any;
    languages: any[] = [];
    currentLanguage: string = 'es';
    currentLanguageFlag: string = '';
    languageMenuItems: MenuItem[] = [];

    constructor(
        public router: Router,
        layoutService: LayoutService,
        private i18nService: I18nService
    ) {
        this.layoutService = layoutService;
        this.languages = this.i18nService.getLanguages();
        this.currentLanguage = this.i18nService.getCurrentLanguage();
        this.updateLanguageDisplay();
        this.buildLanguageMenu();

        // Suscribirse a cambios de idioma
        this.i18nService.currentLanguage$.subscribe((lang) => {
            this.currentLanguage = lang;
            this.updateLanguageDisplay();
            this.buildLanguageMenu();
        });
    }

    // Método para scroll suave a secciones
    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            // Cerrar el menú móvil si está abierto
            this.menuVisible = false;

            // Scroll suave con offset para el header fijo
            const headerHeight = 80; // Ajusta según la altura de tu header
            const elementPosition = element.offsetTop - headerHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
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
        if (this.isCopied) {
            this.isCopied = false;
            clearTimeout(this.copyTimeout);
        }
    }

    copyEmail() {
        const email = 'mxrafael.solis@gmail.com';
        navigator.clipboard.writeText(email);
        this.isCopied = true;

        if (this.copyTimeout) {
            clearTimeout(this.copyTimeout);
        }

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

    changeLanguage(languageCode: string) {
        if (languageCode !== this.currentLanguage) {
            this.i18nService.setLanguage(languageCode);
        }
    }

    updateLanguageDisplay() {
        const currentLang = this.languages.find(lang => lang.code === this.currentLanguage);
        this.currentLanguageFlag = currentLang ? currentLang.flag : '🌐';
    }

    buildLanguageMenu() {
        this.languageMenuItems = this.languages
            .filter(lang => lang.code !== this.currentLanguage)
            .map(lang => ({
                label: `${lang.flag} ${lang.name}`,
                command: () => this.changeLanguage(lang.code),
                styleClass: 'language-menu-item'
            }));
    }
}
