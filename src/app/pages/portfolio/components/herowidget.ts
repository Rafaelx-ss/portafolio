import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'hero-widget',
    standalone: true,
    imports: [ButtonModule, RippleModule, DialogModule, CommonModule, TranslateModule],
    template: `
        <div
            id="hero"
            class="flex flex-col pt-6 px-4 lg:px-20 overflow-hidden"
            style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
        >
            <div class="mx-4 md:mx-20 mt-0 md:mt-6">
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                    <span class="font-light block">{{ 'portfolio.hero.title' | translate }}</span>
                    +{{ years }} {{ 'portfolio.hero.subtitle' | translate }}
                    <span class="font-light block">{{ 'portfolio.hero.subtitle2' | translate }}</span>
                </h1>
                <p class="font-normal text-lg md:text-2xl leading-normal md:mt-4 text-gray-700" style="max-width: 800px;">
                    {{ 'portfolio.hero.description' | translate }}
                </p>
            </div>
            <div class="flex justify-center md:justify-end mb-[100px] xl:mb-[40px] lg:mt-[100px] md:mt-[30px]">
                <div
                    class="w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 mt-0 lg:mt-[-100px] 
    grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-5"
                >
                    <a href="https://es.react.dev/" target="_blank" class="logo-container react-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/react_light.svg" alt="React" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">React</span>
                    </a>
                    <a href="https://www.php.net/" target="_blank" class="logo-container php-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/php.svg" alt="PHP" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">PHP</span>
                    </a>
                    <a href="https://laravel.com/" target="_blank" class="logo-container laravel-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/laravel.svg" alt="Laravel" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Laravel</span>
                    </a>
                    <a href="https://angular.io/" target="_blank" class="logo-container angular-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/angular.svg" alt="Angular" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Angular</span>
                    </a>
                    <a href="https://www.yiiframework.com/" target="_blank" class="logo-container yii-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/yii3.svg" alt="Yii" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Yii</span>
                    </a>
                    <a href="https://nextjs.org/" target="_blank" class="logo-container nextjs-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/nextjs_icon_dark.svg" alt="Next.js" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Next.js</span>
                    </a>
                    <a href="https://vuejs.org/" target="_blank" class="logo-container vue-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/vue.svg" alt="Vue" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Vue</span>
                    </a>
                    <a href="https://www.javascript.com/" target="_blank" class="logo-container javascript-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/javascript.svg" alt="JavaScript" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">JavaScript</span>
                    </a>
                    <a href="https://www.typescriptlang.org/" target="_blank" class="logo-container typescript-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/typescript.svg" alt="TypeScript" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">TypeScript</span>
                    </a>
                    <a href="https://reactnative.dev/" target="_blank" class="logo-container native-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/react-native-1.svg" alt="React Native" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">React Native</span>
                    </a>
                    <a href="https://www.expo.dev/" target="_blank" class="logo-container expo-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/expo.svg" alt="Expo" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Expo</span>
                    </a>
                    <a href="https://www.mysql.com/" target="_blank" class="logo-container mysql-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/mysql.svg" alt="MySQL" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">MySQL</span>
                    </a>
                    <a href="https://www.postgresql.org/" target="_blank" class="logo-container postgresql-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/postgresql.svg" alt="PostgreSQL" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">PostgreSQL</span>
                    </a>
                    <a href="https://www.sqlite.org/" target="_blank" class="logo-container sqlite-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/sqlite.svg" alt="SQLite" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">SQLite</span>
                    </a>
                    <a href="https://www.tailwindcss.com/" target="_blank" class="logo-container tailwind-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/tailwindcss.svg" alt="Tailwind CSS" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Tailwind CSS</span>
                    </a>
                    <a href="https://getbootstrap.com/" target="_blank" class="logo-container bootstrap-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/bootstrap.svg" alt="Bootstrap" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Bootstrap</span>
                    </a>
                    <a href="https://git-scm.com/" target="_blank" class="logo-container git-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/git.svg" alt="Git" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Git</span>
                    </a>
                    <a href="https://wordpress.org/" target="_blank" class="logo-container wordpress-logo flex flex-col justify-center items-center">
                        <img src="assets/svg/wordpress.svg" alt="WordPress" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">WordPress</span>
                    </a>
                </div>
            </div>
        </div>
    `
})
export class HeroWidget {
    currentYear = new Date().getFullYear();
    years = this.currentYear - 2022;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeroWidget],
    template: ` <hero-widget></hero-widget> `
})
export class App {}

bootstrapApplication(App);
