<template>
    <!-- <div :class="[
    'min-h-screen',
    'selection:bg-yellow-400/20',
    isDarkMode 
      ? 'bg-gradient-to-b from-gray-100 to-white text-gray-900'
      : 'bg-gradient-to-b from-dark to-dark-lighter text-white'
  ]"> -->
  <div class="min-h-screen bg-gradient-to-b from-dark to-dark-lighter text-white selection:bg-yellow-400/20">
    <TheHeader id="header" class="header-class" />
    <main class="max-w-full md:max-w-3xl mx-auto px-2 md:px-4">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { useDarkMode } from '@/utils/useDarkMode'
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TheFooter from '@/components/TheFooter.vue'

const { isDarkMode } = useDarkMode()

</script>

<style>
:root {
  scroll-behavior: smooth;
}

body {
  background-color: #0a0b14;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0a0b14;
}

::-webkit-scrollbar-thumb {
  background: #2d3548;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #3d4761;
}
</style>
