import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'pricing-widget',
    standalone: true,
    imports: [DividerModule, ButtonModule, RippleModule, TranslateModule, CommonModule],
    template: `
        <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
            <div class="text-center mb-6">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">{{ 'portfolio.pricing.title' | translate }}</div>
                <span class="text-muted-color text-2xl">{{ 'portfolio.pricing.subtitle' | translate }}</span>
            </div>

            <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">{{ 'portfolio.pricing.web.title' | translate }}</div>
                        <!-- <img src="https://primefaces.org/cdn/templates/sakai/landing/free.svg" class="w-10/12 mx-auto" alt="web development" /> -->
                        <img src="assets/svg/web.svg" class="w-6/12 mx-auto" alt="Mobile Development" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-2xl text-surface-600 dark:text-surface-200 text-center">{{ 'portfolio.pricing.web.subtitle' | translate }}</span>
                            </div>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2" *ngFor="let feature of webFeatures">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">{{ feature | translate }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">{{ 'portfolio.pricing.backend.title' | translate }}</div>
                        <!-- <img src="https://primefaces.org/cdn/templates/sakai/landing/startup.svg" class="w-10/12 mx-auto" alt="backend development" /> -->
                        <img src="assets/svg/server.svg" class="w-6/12 mx-auto" alt="backend development" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-2xl text-surface-600 dark:text-surface-200 text-center">{{ 'portfolio.pricing.backend.subtitle' | translate }}</span>
                            </div>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2" *ngFor="let feature of backendFeatures">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">{{ feature | translate }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">{{ 'portfolio.pricing.mobile.title' | translate }}</div>
                        <!-- <img src="https://primefaces.org/cdn/templates/sakai/landing/enterprise.svg" class="w-10/12 mx-auto" alt="mobile development" /> -->
                        <img src="assets/svg/mobile.svg" class="w-6/12 mx-auto" alt="mobile development" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-2xl text-surface-600 dark:text-surface-200 text-center">{{ 'portfolio.pricing.mobile.subtitle' | translate }}</span>
                            </div>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2" *ngFor="let feature of mobileFeatures">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">{{ feature | translate }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class PricingWidget {
    webFeatures = [
        'portfolio.pricing.web.features.0',
        'portfolio.pricing.web.features.1',
        'portfolio.pricing.web.features.2',
        'portfolio.pricing.web.features.3',
        'portfolio.pricing.web.features.4'
    ];

    backendFeatures = [
        'portfolio.pricing.backend.features.0',
        'portfolio.pricing.backend.features.1',
        'portfolio.pricing.backend.features.2',
        'portfolio.pricing.backend.features.3',
        'portfolio.pricing.backend.features.4'
    ];

    mobileFeatures = [
        'portfolio.pricing.mobile.features.0',
        'portfolio.pricing.mobile.features.1',
        'portfolio.pricing.mobile.features.2',
        'portfolio.pricing.mobile.features.3',
        'portfolio.pricing.mobile.features.4',
        'portfolio.pricing.mobile.features.5'
    ];
}