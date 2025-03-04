import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'hero-widget',
    standalone: true,
    imports: [ButtonModule, RippleModule, DialogModule, CommonModule],
    template: `
        <div
            id="hero"
            class="flex flex-col pt-6 px-4 lg:px-20 overflow-hidden"
            style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
        >
            <div class="mx-4 md:mx-20 mt-0 md:mt-6">
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                    <span class="font-light block">Desarrollador de Software Multiplataforma con </span>
                    +2 años de experiencia en Frontend y Backend con 
                    <span class="font-light block">JavaScript y PHP.</span>
                </h1>
                <p class="font-normal text-lg md:text-2xl leading-normal md:mt-4 text-gray-700" style="max-width: 800px;">
                    Soy de Mérida, Yucatán, México 🇲🇽 y me especializo en construir soluciones eficientes con tecnologías modernas como Next.js, React, Yii2, Laravel y más.
                </p>
            </div>
            <div class="flex justify-center md:justify-end mb-[100px] xl:mb-[40px] lg:mt-[100px] md:mt-[30px]">
                <div class="w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 mt-0 lg:mt-[-100px] 
    grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-5">

                    <a href="https://es.react.dev/" target="_blank" class="logo-container react-logo flex flex-col justify-center items-center">
                        <img [src]="reactLight" alt="React" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">React</span>
                    </a>
                    <a href="https://www.php.net/" target="_blank" class="logo-container php-logo flex flex-col justify-center items-center">
                        <img [src]="php" alt="PHP" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">PHP</span>
                    </a>
                    <a href="https://laravel.com/" target="_blank" class="logo-container laravel-logo flex flex-col justify-center items-center">
                        <img [src]="laravel" alt="Laravel" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Laravel</span>
                    </a>
                    <a href="https://angular.io/" target="_blank" class="logo-container angular-logo flex flex-col justify-center items-center">
                        <img [src]="angular" alt="Angular" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Angular</span>
                    </a>
                    <a href="https://www.yiiframework.com/" target="_blank" class="logo-container yii-logo flex flex-col justify-center items-center">
                        <img [src]="yii" alt="Yii" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Yii</span>
                    </a>
                    <a href="https://nextjs.org/" target="_blank" class="logo-container nextjs-logo flex flex-col justify-center items-center">
                        <img [src]="nextjs" alt="Next.js" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Next.js</span>
                    </a>
                    <a href="https://vuejs.org/" target="_blank" class="logo-container vue-logo flex flex-col justify-center items-center">
                        <img [src]="vue" alt="Vue" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Vue</span>
                    </a>
                    <a href="https://www.javascript.com/" target="_blank" class="logo-container javascript-logo flex flex-col justify-center items-center">
                        <img [src]="javascript" alt="JavaScript" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">JavaScript</span>
                    </a>
                    <a href="https://www.typescriptlang.org/" target="_blank" class="logo-container typescript-logo flex flex-col justify-center items-center">
                        <img [src]="typescript" alt="TypeScript" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">TypeScript</span>
                    </a>
                    <a href="https://reactnative.dev/" target="_blank" class="logo-container native-logo flex flex-col justify-center items-center">
                        <img [src]="native" alt="React Native" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">React Native</span>
                    </a>
                    <a href="https://www.expo.dev/" target="_blank" class="logo-container expo-logo flex flex-col justify-center items-center">
                        <img [src]="expo" alt="Expo" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Expo</span>
                    </a>
                    <a href="https://www.mysql.com/" target="_blank" class="logo-container mysql-logo flex flex-col justify-center items-center">
                        <img [src]="mysql" alt="MySQL" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">MySQL</span>
                    </a>
                    <a href="https://www.postgresql.org/" target="_blank" class="logo-container postgresql-logo flex flex-col justify-center items-center">
                        <img [src]="postgresql" alt="PostgreSQL" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">PostgreSQL</span>
                    </a>
                    <a href="https://www.sqlite.org/" target="_blank" class="logo-container sqlite-logo flex flex-col justify-center items-center">
                        <img [src]="sqlite" alt="SQLite" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">SQLite</span>
                    </a>
                    <a href="https://www.tailwindcss.com/" target="_blank" class="logo-container tailwind-logo flex flex-col justify-center items-center">
                        <img [src]="tailwind" alt="Tailwind CSS" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Tailwind CSS</span>
                    </a>
                    <a href="https://getbootstrap.com/" target="_blank" class="logo-container bootstrap-logo flex flex-col justify-center items-center">
                        <img [src]="bootstrap" alt="Bootstrap" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Bootstrap</span>
                    </a>
                    <a href="https://git-scm.com/" target="_blank" class="logo-container git-logo flex flex-col justify-center items-center">
                        <img [src]="git" alt="Git" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">Git</span>
                    </a>                
                    <a href="https://wordpress.org/" target="_blank" class="logo-container wordpress-logo flex flex-col justify-center items-center">
                        <img [src]="wordpress" alt="WordPress" class="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto" />
                        <span class="logo-name">WordPress</span>
                    </a>
                </div>
            </div>
        </div>
    `
})
export class HeroWidget {
    reactLight = '/svg/react_light.svg';
    php = '/svg/php.svg';
    laravel = '/svg/laravel.svg';
    angular = '/svg/angular.svg';
    yii = '/svg/yii3.svg';
    nextjs = '/svg/nextjs_icon_dark.svg';
    vue = '/svg/vue.svg';
    sqlite = '/svg/sqlite.svg';
    postgresql = '/svg/postgresql.svg';
    mysql = '/svg/mysql.svg';
    git = '/svg/git.svg';
    expo = '/svg/expo.svg';
    javascript = '/svg/javascript.svg';
    typescript = '/svg/typescript.svg';
    tailwind = '/svg/tailwindcss.svg';
    bootstrap = '/svg/bootstrap.svg';
    native = '/svg/react-native-1.svg';
    wordpress = '/svg/wordpress.svg';
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeroWidget],
    template: `
        <hero-widget></hero-widget>
    `,
})
export class App {
    name = 'Angular';
}

bootstrapApplication(App);