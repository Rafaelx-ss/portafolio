<template>
  <section id="projects" class="py-20">
    <div class="flex items-center gap-2 mb-12">
      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 3H5C3.89 3 3 3.89 3 5V8H5V5H8V3ZM16 3H19C20.11 3 21 3.89 21 5V8H19V5H16V3ZM3 16V19C3 20.11 3.89 21 5 21H8V19H5V16H3ZM19 16V19H16V21H19C20.11 21 21 20.11 21 19V16H19Z"/>
      </svg>
      <h2 class="text-2xl font-bold">Proyectos</h2>
    </div>

    <div class="space-y-8">
      <div class="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
        <div class="flex items-center gap-4 mb-4">
          <div class="flex -space-x-1">
            <img src="/nextjs.svg" alt="Next.js" class="w-8 h-8 rounded-full bg-white/10 p-1">
            <img src="/tailwind.svg" alt="Tailwind CSS" class="w-8 h-8 rounded-full bg-white/10 p-1">
            <img src="/typescript.svg" alt="TypeScript" class="w-8 h-8 rounded-full bg-white/10 p-1">
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold">Take It!</h3>
            <p class="text-sm text-gray-400">Plataforma de gestión de eventos deportivos y recreativos</p>
          </div>
        </div>
        <p class="text-gray-300 mb-4">
          Desarrollo de una aplicación que permite la creación, promoción e inscripción de eventos en diversas áreas como deportes, música y videojuegos. La plataforma facilita la gestión completa de los eventos, incluyendo módulos para inscripción de participantes, seguimiento en tiempo real y difusión de resultados. Con un enfoque en la accesibilidad y conectividad, Take It! optimiza la organización de eventos y potencia la interacción entre los usuarios y los organizadores.
        </p>
        <div class="flex gap-4">
            <a href="https://github.com/Rafaelx-ss/TakeIt" class="text-sm text-gray-400 hover:text-white flex items-center gap-2" target="_blank">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
          <a href="#" class="text-sm text-gray-400 hover:text-white flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Preview
          </a>
        </div>
      </div>
    </div>
  </section>
</template>