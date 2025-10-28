import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'highlights-widget',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
        <div id="highlights" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
            <div class="text-center">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">{{ 'portfolio.highlights.title' | translate }}</div>
                <span class="text-muted-color text-2xl">{{ 'portfolio.highlights.subtitle' | translate }}</span>
            </div>

            <div class="grid grid-cols-12 gap-4 my-20 pt-2 md:pt-20">
                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col text-center lg:text-left lg:items-start gap-4">
                    <div class="flex items-center justify-center bg-[#9c3506] self-center lg:self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <!-- <i class="pi pi-fw pi-desktop !text-3xl text-yellow-700"></i> -->
                        <img src="assets/png/brentec.png" class="w-7/12" alt="Brentec logo" style="filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));" />
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">{{ 'portfolio.highlights.brentec.title' | translate }}</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal mr-0 md:mr-2" style="max-width: 650px">
                        <strong>{{ 'portfolio.highlights.brentec.position' | translate }}</strong> ({{ 'portfolio.highlights.brentec.period' | translate }})<br>
                        {{ 'portfolio.highlights.brentec.description' | translate }}
                    </span>
                </div>

                <a href="https://brentec.mx/" target="_blank" class="flex justify-end order-1 sm:order-2 col-span-12 lg:col-span-6 bg-[#9c3506] p-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F24F05]" style="border-radius: 8px">
                    <img src="assets/png/mockup-desktop-brentec.png" class="w-11/12 transition-transform duration-300" alt="Brentec mockup" />
                </a>
            </div>

            <div class="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20">
                <a href="https://www.codyexpert.com/site/index.html" target="_blank" class="flex justify-center col-span-12 lg:col-span-6 bg-[#232745] p-0 order-1 lg:order-none transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2E9CFC]" style="border-radius: 8px">
                    <img src="assets/png/mockup-cody.png" class="w-11/12 transition-transform duration-300" alt="CodyExpert mockup" />
                </a>  

                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
                    <div class="flex items-center justify-center bg-[#232745] self-center lg:self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <!-- <i class="pi pi-fw pi-mobile !text-4xl text-purple-700"></i> -->
                        <img src="assets/png/Cody.png" class="w-7/12" alt="CodyExpert logo" />
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">{{ 'portfolio.highlights.codyexpert.title' | translate }}</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style="max-width: 650px">
                        <strong>{{ 'portfolio.highlights.codyexpert.position' | translate }}</strong> ({{ 'portfolio.highlights.codyexpert.period' | translate }})<br>
                        {{ 'portfolio.highlights.codyexpert.description' | translate }}<br><br>
                        <strong>{{ 'portfolio.highlights.codyexpert.projects.title' | translate }}</strong><br>
                        <strong>{{ 'portfolio.highlights.codyexpert.projects.visitplan.title' | translate }}</strong><br>
                        {{ 'portfolio.highlights.codyexpert.projects.visitplan.description' | translate }}<br><br>
                        <strong>{{ 'portfolio.highlights.codyexpert.projects.sopmex.title' | translate }}</strong><br>
                        {{ 'portfolio.highlights.codyexpert.projects.sopmex.description' | translate }}<br><br>
                        {{ 'portfolio.highlights.codyexpert.projects.conclusion' | translate }}
                    </span>
                </div>
            </div>
        </div>
    `
})
export class HighlightsWidget {}
