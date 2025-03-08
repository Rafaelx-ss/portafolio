import { Component } from '@angular/core';

@Component({
    selector: 'highlights-widget',
    template: `
        <div id="highlights" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
            <div class="text-center">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Experiencia laboral</div>
                <span class="text-muted-color text-2xl">Tengo experiencia en el desarrollo de software a nivel internacional, construyendo plataformas de gestión para empresas como Grupo Modelo. Me apasiona crear soluciones eficientes, escalables y de alto rendimiento.</span>
            </div>

            <div class="grid grid-cols-12 gap-4 my-20 pt-2 md:pt-20">
                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col text-center lg:text-left lg:items-start gap-4">
                    <div class="flex items-center justify-center bg-[#9c3506] self-center lg:self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <!-- <i class="pi pi-fw pi-desktop !text-3xl text-yellow-700"></i> -->
                        <img src="assets/png/brentec.png" class="w-7/12" alt="Brentec logo" style="filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));" />
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Brentec Soluciones Tecnológicas</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal mr-0 md:mr-2" style="max-width: 650px">
                        <strong>Desarrollador de Software</strong> (Febrero 2025 - Actualidad)<br>
                        En mi rol como <strong>desarrollador de software</strong> en Brentec, lidero el desarrollo y mantenimiento de <strong>Bonobo</strong>, una plataforma esencial para la <strong>industria energética</strong>. Mis responsabilidades abarcan la <strong>implementación</strong> de nuevas funcionalidades, la <strong>optimización</strong> de procesos y la <strong>mejora</strong> del rendimiento, asegurando una experiencia de usuario fluida y eficiente. Además, integro Bonobo con <strong>sistemas empresariales</strong>, optimizo <strong>bases de datos</strong> y aplico <strong>estándares de seguridad</strong> y <strong>cumplimiento normativo</strong>, colaborando estrechamente con <strong>equipos multidisciplinarios</strong> para crear <strong>soluciones escalables</strong> y efectivas.
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
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">CodyExpert</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style="max-width: 650px">
                        <strong>Desarrollador Full-Stack</strong> (Enero 2024 - Febrero 2025)<br>
                        En CodyExpert, desarrollé soluciones tecnológicas personalizadas para la administración empresarial, enfocándome en la modernización de plataformas y aplicaciones web escalables.<br><br>
                        <strong>Proyectos destacados:</strong><br>
                        <strong>Visit Plan - Migración para Grupo Modelo:</strong><br>
                        Lideré la migración a una solución moderna con React y Azure, optimizando la gestión de visitas en todo México.<br><br>
                        <strong>SOPMEX - Gestión para Estaciones de Servicio:</strong><br>
                        Desarrollé una plataforma para la administración de gasolineras con PHP y Yii2, mejorando la operatividad y experiencia del usuario.<br><br>
                        Esta experiencia fortaleció mis habilidades en soluciones escalables y colaboración en proyectos estratégicos.
                    </span>
                </div>
            </div>
        </div>
    `
})
export class HighlightsWidget {}
