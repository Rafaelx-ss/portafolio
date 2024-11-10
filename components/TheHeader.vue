<template>
  <header class="fixed top-0 w-full z-50 backdrop-blur-md bg-dark/80 animate-slide-down">
    <nav class="max-w-3xl mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <a href="#" class="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Rafael Solis
        </a>
        <div class="flex items-center space-x-6">
          <NuxtLink v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path"
            :class="[
              'text-sm transition-all duration-300 relative group',
              item.highlight ? 'text-yellow-400' : 'text-gray-400 hover:text-white'
            ]">
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <button class="text-gray-400 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const menuItems = [
  { name: 'Experiencia', path: '#experience', highlight: true },
  { name: 'Proyectos', path: '#projects' },
  { name: 'Sobre mí', path: '#about' },
  { name: 'Contacto', path: '#contact' }
]
</script>