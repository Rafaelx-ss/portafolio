<template>
  <div class="w-full">
    <div class="grid grid-cols-4 md:grid-cols-9 gap-4">
      <div
        v-for="(tech, index) in technologies"
        :key="tech.name"
        class="relative group"
      >
        <a
          :href="tech.link"
          target="_blank"
          :class="tech.colorShadow + ' mouse-pointer'"
        >
          <div
            :class="[
              'aspect-square rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden group-hover:border-zinc-700 transition-colors',
              tech.colorShadow
            ]"
          >
            <div
              :class="[`text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-300`]">
              <img v-if="tech.icon.endsWith('.svg') && !tech.imageError"  :src="tech.icon" :alt="tech.name.charAt(0)" @error="tech.imageError = true" class="w-8 h-8" />
              <span v-else>{{ tech.name.charAt(0) }}</span>
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300"
            />
            <div
              class="absolute bottom-2 left-0 right-0 text-center text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {{ tech.name }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const technologies = ref([
  { name: "Next.js", icon: "/nextjs.svg", color: "text-black", colorShadow: "group-hover:shadow-black", link: "https://nextjs.org", imageError: false },
  { name: "React", icon: "/react.svg", color: "text-cyan-400", colorShadow: "group-hover:shadow-cyan-400", link: "https://reactjs.org", imageError: false },
  { name: "TypeScript", icon: "/typescript.svg", color: "text-blue-500", colorShadow: "group-hover:shadow-blue-500", link: "https://www.typescriptlang.org", imageError: false },
  { name: "Tailwind", icon: "/tailwind.svg", color: "text-blue-500", colorShadow: "group-hover:shadow-blue-500", link: "https://tailwindcss.com", imageError: false },
  { name: "Vue", icon: "/vue.svg", color: "text-emerald-500", colorShadow: "group-hover:shadow-emerald-500", link: "https://vuejs.org", imageError: false },
  { name: "SQL", icon: "/mysql.svg", color: "text-blue-500", colorShadow: "group-hover:shadow-blue-500", link: "https://www.mysql.com", imageError: false },
  { name: "PHP", icon: "/php_dark.svg", color: "text-black", colorShadow: "group-hover:shadow-black", link: "https://www.php.net", imageError: false },
  { name: "Laravel", icon: "/laravel.svg", color: "text-red-500", colorShadow: "group-hover:shadow-red-500", link: "https://laravel.com", imageError: false },
  { name: "YII2", icon: "/yii2.svg", color: "text-green-500", colorShadow: "group-hover:shadow-green-500", link: "https://www.yiiframework.com", imageError: false },
])
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > div {
  animation: fadeInUp 0.3s ease-out forwards;
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
.grid > div:nth-child(5) { animation-delay: 0.5s; }
.grid > div:nth-child(6) { animation-delay: 0.6s; }
.grid > div:nth-child(7) { animation-delay: 0.7s; }
.grid > div:nth-child(8) { animation-delay: 0.8s; }
.grid > div:nth-child(9) { animation-delay: 0.9s; }

.group-hover\:shadow-black:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.group-hover\:shadow-cyan-400:hover {
  box-shadow: 0 4px 15px rgba(34, 211, 238, 0.5);
}

.group-hover\:shadow-blue-500:hover {
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.5);
}

.group-hover\:shadow-emerald-500:hover {
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.5);
}

.group-hover\:shadow-red-500:hover {
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.5);
}

.group-hover\:shadow-green-500:hover {
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.5);
}
</style>