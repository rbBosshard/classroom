<template>
  <div class="flex items-center justify-center" :class="containerClass">
    <div class="text-center">
      <!-- Spinner -->
      <div class="relative inline-flex items-center justify-center" :style="{ width: spinnerSize, height: spinnerSize }">
        <!-- Outer Ring -->
        <div class="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <!-- Animated Ring -->
        <div 
          class="absolute inset-0 rounded-full border-4 border-primary-600 border-t-transparent animate-spin"
          style="animation-duration: 0.8s;"
        ></div>
        <!-- Center Icon -->
        <div class="text-2xl">🔐</div>
      </div>

      <!-- Loading Text -->
      <p v-if="text" class="mt-4 text-gray-600 font-medium" :class="textClass">
        {{ text }}
      </p>

      <!-- Animated Dots -->
      <div v-if="showDots" class="mt-2 flex justify-center gap-1">
        <span 
          v-for="i in 3" 
          :key="i"
          class="w-2 h-2 bg-primary-600 rounded-full animate-bounce"
          :style="{ animationDelay: `${i * 0.15}s` }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  text?: string
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
  showDots?: boolean
}>(), {
  text: 'Lädt...',
  size: 'md',
  fullScreen: false,
  showDots: true,
})

const spinnerSize = computed(() => {
  switch (props.size) {
    case 'sm': return '32px'
    case 'md': return '48px'
    case 'lg': return '64px'
    default: return '48px'
  }
})

const containerClass = computed(() => {
  if (props.fullScreen) {
    return 'min-h-[400px] p-8'
  }
  return 'p-4'
})

const textClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-sm'
    case 'md': return 'text-base'
    case 'lg': return 'text-lg'
    default: return 'text-base'
  }
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}
</style>
