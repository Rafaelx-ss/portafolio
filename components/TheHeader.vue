<template>
  <header class="fixed top-0 w-full z-50 backdrop-blur-md bg-dark/80 dark:bg-white/10 animate-slide-down">
    <nav class="max-w-3xl mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Rafael Solis
        </a>

        <!-- Menú Desktop -->
        <div class="hidden md:flex items-center space-x-6">
          <button
            v-for="item in menuItems"
            :key="item.path"
            @click="scrollToSection(item.path)"
            :class="[
              'text-sm transition-all duration-300 relative group',
              item.highlight ? 'text-yellow-400' : 'text-gray-400 hover:text-white dark:hover:text-gray-900'
            ]"
          >
            {{ item.name }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"
            ></span>
          </button>

          <!-- Botón Cambio de Tema -->
          <button @click="toggleDarkMode" class="text-gray-400 hover:text-white dark:hover:text-gray-900 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                v-if="isDarkMode"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>

        <!-- Menú Mobile -->
        <button @click="toggleMenu" class="md:hidden text-gray-400 hover:text-white dark:hover:text-gray-900 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menú Mobile -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-4">
        <button
          v-for="item in menuItems"
          :key="item.path"
          @click="scrollToSection(item.path); closeMenu()"
          :class="[
            'block text-sm transition-all duration-300',
            item.highlight ? 'text-yellow-400' : 'text-gray-400 hover:text-white dark:hover:text-gray-900'
          ]"
        >
          {{ item.name }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from '@/utils/useDarkMode'

// Menú y secciones
const menuItems = ref([
  { name: 'Home', path: '#hero', highlight: false },
  { name: 'Experiencia', path: '#experience', highlight: false },
  { name: 'Proyectos', path: '#projects', highlight: false },
  { name: 'Sobre mí', path: '#about', highlight: false },
  { name: 'Contacto', path: '#contact', highlight: false }
])

// Scroll dinámico
const setHighlight = (id) => {
  menuItems.value = menuItems.value.map(item => ({
    ...item,
    highlight: item.path === `#${id}`
  }))
}

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')
  const handleScroll = () => {
    let currentSection = null
    const offset = window.innerHeight * 0.3

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= offset && rect.bottom >= offset) {
        currentSection = section.id
      }
    })

    if (currentSection) setHighlight(currentSection)
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

// Modo oscuro
const { isDarkMode, toggleDarkMode } = useDarkMode()

// Control del menú móvil
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToSection = (id) => {
  const section = document.querySelector(id)
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  closeMenu()
}
</script>