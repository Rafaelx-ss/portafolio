
<template>
  <section class="min-h-[90vh] flex flex-col justify-center items-center text-center animate-fade-in">
    <div class="relative group mb-8 mt-5">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
      <div class="relative">
        <img 
          src="/avatar.webp" 
          alt="midudev" 
          class="w-32 h-32 rounded-full object-cover ring-2 ring-white/20"
        >
        <span class="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#1c8c3b]/20 text-[#3bba68] text-xs rounded-full whitespace-nowrap backdrop-blur-sm border border-[#3bba68]/20">
          Disponible para trabajar
        </span>
      </div>
    </div>

    <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
      Rafael
    </h1>
    <p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
      <Ty>Desarrollador de Software Multiplataforma</Ty> con <Ty>+2 años</Ty> de <Ty>experiencia</Ty>
      <br>Soy de Mérida, Yucatán, México. 🇲🇽
      <br>Especializado en <Ty>Frontend</Ty> y <Ty>Backend</Ty> con <Ty>JavaScript</Ty> y <Ty>PHP</Ty>.
    </p>

    <TechStack />
  </section>
  <div class=" flex flex-col items-center animate-bounce">
    <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>

</template>