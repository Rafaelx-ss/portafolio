<template>
  <section id="experience" class="py-32 animate-slide-up">
    <div class="flex items-center gap-3 mb-16">
      <div class="p-3 bg-yellow-400/10 rounded-xl">
        <svg class="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4Z"/>
        </svg>
      </div>
      <h2 class="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Experiencia laboral
      </h2>
    </div>

    <div class="space-y-12">
      <div class="group">
        <div class="flex gap-6">
          <div class="relative">
            <div class="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            <div class="absolute top-4 bottom-0 left-2 w-px bg-gradient-to-b from-yellow-400/50 to-transparent -translate-x-1/2 group-last:hidden"></div>
          </div>
          <div class="flex-1 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <h3 class="text-xl font-bold text-yellow-400 mb-1">Visit Plan</h3>
            <p class="text-gray-400">Migración de plataforma</p>
            <p class="text-sm text-gray-500 mb-4">Actualmente...</p>
            <p class="text-gray-300 leading-relaxed">
              Encargado de la migración de Excelsfort a una solución moderna con React, Vite y Azure en el backend para Grupo Modelo.
              <br>Desarrollo de módulos para la planificación y gestión de visitas a establecimientos a nivel nacional en México, con funciones de administración de rutas, perfiles de usuario y carga de datos para un control eficiente en toda la plataforma.
            </p>
            <p class="text-sm text-gray-500 mb-4 mt-2">El código y la interfaz son privados, política del cliente...</p>
              <div class="flex gap-2 mt-4">
                <Badge src="/vitejs.svg" alt="React" text="Vite" />
                <Badge src="/react.svg" alt="React" text="React" />
                <Badge src="/typeScript.svg" alt="React" text="TypeScript" /> 
                <Badge src="/tailwind.svg" alt="React" text="Tailwind CSS" />
                <Badge src="/azure.svg" alt="React" text="Azure" />
                <Badge src="/postgresql.svg" alt="PostgreSQL" text="PostgreSQL" />

              </div>
          </div>
        </div>
      </div>

      <div class="group">
        <div class="flex gap-6">
          <div class="relative">
            <div class="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            <div class="absolute top-4 bottom-0 left-2 w-px bg-gradient-to-b from-yellow-400/50 to-transparent -translate-x-1/2 group-last:hidden"></div>
          </div>
          <div class="flex-1 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <h3 class="text-xl font-bold text-yellow-400 mb-1">SOPMEX</h3>
            <p class="text-gray-400">Software de gestión para estaciones de servicio</p>
            <p class="text-sm text-gray-500 mb-4">Junio - Noviembre 2024</p>
            <p class="text-gray-300 leading-relaxed">
              Desarrollo de una plataforma integral de gestión de gasolineras utilizando PHP y Yii2. 
              Implementación de módulos para la administración de usuarios, productos, servicios y carga de archivos, optimizando la eficiencia operativa. 
              Gestión avanzada de búsquedas y validaciones para una experiencia de usuario mejorada y un control preciso en cada aspecto de la operación.
            </p>
            <p class="text-sm text-gray-500 mb-4 mt-2">El código y la interfaz son privados, política del cliente...</p>
            <div class="flex gap-2 mt-4">
              <Badge src="/php_dark.svg" alt="React" text="PHP" />
              <Badge src="/yii2.svg" alt="Yii2" text="Yii2" />
              <Badge src="/bootstrap.svg" alt="Bootstrap" text="Bootstrap" /> 
              <Badge src="/mysql.svg" alt="MySQL" text="MySQL" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
