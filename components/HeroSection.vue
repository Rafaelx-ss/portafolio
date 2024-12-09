<template>
  <section id="hero" class="min-h-screen flex flex-col justify-center items-center text-center animate-fade-in px-4 py-8 relative overflow-hidden">
    <div class="absolute inset-0 z-0"></div>
    <div class="relative z-10 max-w-4xl mx-auto">
      <div class="relative group mb-8 mt-5 inline-block">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div class="relative">
          <img 
            src="/avatar.webp" 
            alt="Rafael Solis" 
            class="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-4 ring-white/20"
          >
          <span class="absolute -bottom-3 sm:-bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 sm:px-4 sm:py-1.5 bg-[#1c8c3b]/20 text-[#3bba68] text-xs sm:text-sm font-medium rounded-full whitespace-nowrap backdrop-blur-sm border border-[#3bba68]/20">
            Disponible para trabajar
          </span>
        </div>
      </div>

    <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent name">
      Rafael
    </h1>
    <p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed about">
      <Ty>Desarrollador de Software Multiplataforma</Ty> con <Ty>+2 años</Ty> de <Ty>experiencia</Ty>
      <br>Soy de Mérida, Yucatán, México. 🇲🇽
      <br>Especializado en <Ty>Frontend</Ty> y <Ty>Backend</Ty> con <Ty>JavaScript</Ty> y <Ty>PHP</Ty>.
    </p>

      <TechStack />
    </div>
  
  </section>
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden div-row">
    <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
</div>

</template>

<script setup>
import Ty from './Ty.vue'
import TechStack from './TechStack.vue'
</script>

<style scoped>
@keyframes tilt {
  0%, 50%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(1deg);
  }
  75% {
    transform: rotate(-1deg);
  }
  
}
.animate-tilt {
  animation: tilt 10s infinite linear;
}

.div-row {
  display: none;
}

@media(min-width: 380px) {
  .div-row {
    display: block; 
  }
}

@media(max-width: 380px) {
  .name{
    font-size: 2rem;
  }

  .about{
    font-size: 1rem;
  }
}
</style>