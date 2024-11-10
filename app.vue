<template>
  <div class="min-h-screen bg-gradient-to-b from-dark to-dark-lighter text-white selection:bg-yellow-400/20">
    <TheHeader id="header" className="header-class" />
    <main class="max-w-3xl mx-auto px-4">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import HeroSection from './components/HeroSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import AboutSection from './components/AboutSection.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    HeroSection,
    ExperienceSection,
    ProjectsSection,
    AboutSection,
    TheFooter
  }
}
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