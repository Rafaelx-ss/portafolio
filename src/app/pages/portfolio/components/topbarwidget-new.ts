// import { Component } from '@angular/core';
// import { Router, RouterModule } from '@angular/router';
// import { RippleModule } from 'primeng/ripple';
// import { ButtonModule } from 'primeng/button';
// import { SplitButtonModule } from 'primeng/splitbutton';
// import { OverlayPanelModule } from 'primeng/overlaypanel';
// import { LayoutService } from '../../../layout/service/layout.service';
// import { CommonModule } from '@angular/common';
// import { AppConfigurator } from '../../../layout/component/app.configurator';
// import { DialogModule } from 'primeng/dialog';
// import { TooltipModule } from 'primeng/tooltip';
// import { I18nService } from '../../../services/i18n.service';
// import { TranslateModule } from '@ngx-translate/core';
// import { MenuItem } from 'primeng/api';

// @Component({
//     selector: 'topbar-widget',
//     standalone: true,
//     imports: [RouterModule, CommonModule, ButtonModule, RippleModule, AppConfigurator, DialogModule, TooltipModule, TranslateModule, SplitButtonModule, OverlayPanelModule],
//     template: `
//         <a class="flex items-center flex-col w-96 cursor-pointer text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal" (click)="scrollToSection('home')">
//             <span>Rafael Solis</span>
//         </a>

//         <button class="lg:hidden p-2" (click)="toggleMenu()" aria-label="Menu">
//             <i class="pi pi-bars"></i>
//         </button>

//         <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-50" [ngClass]="{ hidden: !menuVisible }" style="gap: 20px;">
//             <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row gap-8">
//                 <li>
//                     <a (click)="scrollToSection('home')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl cursor-pointer hover:underline">
//                         <span>{{ 'portfolio.navigation.home' | translate }}</span>
//                     </a>
//                 </li>
//                 <li>
//                     <a (click)="scrollToSection('features')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl cursor-pointer hover:underline">
//                         <span>{{ 'portfolio.navigation.tech_stack' | translate }}</span>
//                     </a>
//                 </li>
//                 <li>
//                     <a (click)="scrollToSection('highlights')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl cursor-pointer hover:underline">
//                         <span>{{ 'portfolio.navigation.experience' | translate }}</span>
//                     </a>
//                 </li>
//                 <li>
//                     <a (click)="scrollToSection('pricing')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl cursor-pointer hover:underline ">
//                         <span>{{ 'portfolio.navigation.services' | translate }}</span>
//                     </a>
//                 </li>
//                 <li>
//                     <a (click)="scrollToSection('contact')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl cursor-pointer hover:underline">
//                         <span>{{ 'portfolio.navigation.contact_me' | translate }}</span>
//                     </a>
//                 </li>
//             </ul>

//             <div class="flex items-center gap-4">
//                 <div class="flex items-center gap-2">
//                     <button type="button" class="layout-topbar-action" (click)="open()" pTooltip="Contacto" tooltipPosition="bottom">
//                         <i class="pi pi-envelope"></i>
//                     </button>

//                     <button type="button" class="layout-topbar-action" (click)="openLink('https://wa.me/529999583010')" pTooltip="WhatsApp" tooltipPosition="bottom">
//                         <i class="pi pi-whatsapp"></i>
//                     </button>

//                     <button type="button" class="layout-topbar-action" (click)="openLink('https://linkedin.com/in/rafaelxs')" pTooltip="LinkedIn" tooltipPosition="bottom">
//                         <i class="pi pi-linkedin"></i>
//                     </button>

//                     <app-configurator style="display: none;" />
//                 </div>
//                 <!-- Selector de idioma mejorado -->
//                 <div class="language-selector mr-4 flex gap-2 items-center">
//                     <!-- Versión desktop con SplitButton -->
//                     <div class="hidden lg:block">
//                         <p-splitbutton 
//                             [label]="currentLanguageFlag" 
//                             [model]="languageMenuItems" 
//                             styleClass="language-split-button"
//                             [style]="{ 'min-width': '60px' }"
//                             (onClick)="changeLanguage(currentLanguage)"
//                             severity="secondary"
//                             [text]="true"
//                             [outlined]="true">
//                         </p-splitbutton>
//                     </div>

//                     <!-- Versión móvil con OverlayPanel -->
//                     <div class="lg:hidden">
//                         <button 
//                             type="button" 
//                             class="layout-topbar-action language-mobile-btn" 
//                             (click)="languagePanel.toggle($event)"
//                             pTooltip="Seleccionar idioma"
//                             tooltipPosition="bottom">
//                             <span class="text-lg">{{ currentLanguageFlag }}</span>
//                         </button>
                        
//                         <p-overlaypanel #languagePanel [style]="{ 'min-width': '200px' }">
//                             <div class="language-panel-content">
//                                 <h4 class="text-lg font-semibold mb-3 text-center">Seleccionar Idioma</h4>
//                                 <div class="grid grid-cols-2 gap-2">
//                                     <button 
//                                         *ngFor="let lang of languages" 
//                                         type="button" 
//                                         class="language-option-btn" 
//                                         [class.active]="lang.code === currentLanguage"
//                                         (click)="changeLanguage(lang.code); languagePanel.hide()"
//                                         pRipple>
//                                         <span class="text-lg">{{ lang.flag }}</span>
//                                         <span class="text-xs">{{ lang.name }}</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </p-overlaypanel>
//                     </div>

//                     <button type="button" class="layout-topbar-action ml-2" (click)="toggleDarkMode()">
//                         <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }" style="font-size: 1.2em;"></i>
//                     </button>
//                 </div>
//             </div>

//             <div *ngIf="menuVisible">
//                 <br />
//             </div>
//         </div>

//         <!-- Dialog de contacto -->
//         <p-dialog 
//             header="Contacto" 
//             [(visible)]="display" 
//             [modal]="true" 
//             [style]="{ width: '450px' }" 
//             [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }"
//             [draggable]="false" 
//             [resizable]="false">
//             <div class="flex flex-col gap-4">
//                 <div class="flex items-center gap-3">
//                     <i class="pi pi-envelope text-primary text-xl"></i>
//                     <div>
//                         <p class="font-semibold text-surface-900 dark:text-surface-0">Correo electrónico</p>
//                         <p class="text-surface-600 dark:text-surface-400">{{ 'portfolio.contact.email.value' | translate }}</p>
//                     </div>
//                 </div>
                
//                 <div class="flex items-center gap-3">
//                     <i class="pi pi-whatsapp text-green-500 text-xl"></i>
//                     <div>
//                         <p class="font-semibold text-surface-900 dark:text-surface-0">WhatsApp</p>
//                         <p class="text-surface-600 dark:text-surface-400">{{ 'portfolio.contact.whatsapp.value' | translate }}</p>
//                     </div>
//                 </div>
                
//                 <div class="flex items-center gap-3">
//                     <i class="pi pi-linkedin text-blue-500 text-xl"></i>
//                     <div>
//                         <p class="font-semibold text-surface-900 dark:text-surface-0">LinkedIn</p>
//                         <p class="text-surface-600 dark:text-surface-400">{{ 'portfolio.contact.linkedin.value' | translate }}</p>
//                     </div>
//                 </div>
                
//                 <div class="flex gap-2 mt-4">
//                     <button 
//                         type="button" 
//                         class="flex-1 p-button p-button-outlined" 
//                         (click)="copyEmail()"
//                         [class.p-button-success]="isCopied">
//                         <i [ngClass]="isCopied ? 'pi pi-check' : 'pi pi-copy'"></i>
//                         <span>{{ isCopied ? 'Copiado!' : 'Copiar Email' }}</span>
//                     </button>
                    
//                     <button 
//                         type="button" 
//                         class="p-button p-button-outlined" 
//                         (click)="openLink('https://wa.me/529999583010')">
//                         <i class="pi pi-whatsapp"></i>
//                     </button>
                    
//                     <button 
//                         type="button" 
//                         class="p-button p-button-outlined" 
//                         (click)="openLink('https://linkedin.com/in/rafaelxs')">
//                         <i class="pi pi-linkedin"></i>
//                     </button>
//                 </div>
//             </div>
//         </p-dialog>
//     `
// })
// export class TopbarWidget {
//     public layoutService: LayoutService;
//     public showColorPicker: boolean = false;
//     display: boolean = false;
//     isCopied: boolean = false;
//     copyTimeout: any;
//     menuVisible: boolean = false;
//     languages: any[] = [];
//     currentLanguage: string = 'es';
//     currentLanguageFlag: string = '';
//     languageMenuItems: MenuItem[] = [];

//     constructor(
//         public router: Router,
//         layoutService: LayoutService,
//         private i18nService: I18nService
//     ) {
//         this.layoutService = layoutService;
//         this.languages = this.i18nService.getLanguages();
//         this.currentLanguage = this.i18nService.getCurrentLanguage();
//         this.updateLanguageDisplay();
//         this.buildLanguageMenu();

//         // Suscribirse a cambios de idioma
//         this.i18nService.currentLanguage$.subscribe((lang) => {
//             this.currentLanguage = lang;
//             this.updateLanguageDisplay();
//             this.buildLanguageMenu();
//         });
//     }

//     scrollToSection(sectionId: string) {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//         this.menuVisible = false;
//     }

//     toggleDarkMode() {
//         this.layoutService.toggleDarkMode();
//     }

//     onColorChange(event: Event) {
//         const selectedColor = (event.target as HTMLSelectElement).value;
//         this.layoutService.layoutConfig.update((state) => ({ ...state, primary: selectedColor }));
//     }

//     open() {
//         this.display = true;
//     }

//     close() {
//         this.display = false;
//         if (this.isCopied) {
//             this.isCopied = false;
//             clearTimeout(this.copyTimeout);
//         }
//     }

//     copyEmail() {
//         const email = 'mxrafael.solis@gmail.com';
//         navigator.clipboard.writeText(email);
//         this.isCopied = true;

//         if (this.copyTimeout) {
//             clearTimeout(this.copyTimeout);
//         }

//         this.copyTimeout = setTimeout(() => {
//             this.isCopied = false;
//         }, 3000);
//     }

//     openLink(url: string) {
//         window.open(url, '_blank');
//     }

//     toggleMenu() {
//         this.menuVisible = !this.menuVisible;
//     }

//     changeLanguage(languageCode: string) {
//         if (languageCode !== this.currentLanguage) {
//             this.i18nService.setLanguage(languageCode);
//         }
//     }

//     updateLanguageDisplay() {
//         const currentLang = this.languages.find(lang => lang.code === this.currentLanguage);
//         this.currentLanguageFlag = currentLang ? currentLang.flag : '🌐';
//     }

//     buildLanguageMenu() {
//         this.languageMenuItems = this.languages
//             .filter(lang => lang.code !== this.currentLanguage)
//             .map(lang => ({
//                 label: `${lang.flag} ${lang.name}`,
//                 command: () => this.changeLanguage(lang.code),
//                 styleClass: 'language-menu-item'
//             }));
//     }
// }
