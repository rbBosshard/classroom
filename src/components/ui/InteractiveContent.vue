<template>
  <div class="interactive-content-container">
    <div v-if="content.title" class="content-title mb-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ content.title }}</h3>
    </div>

    <div
      v-if="content.type === 'iframe'"
      class="iframe-wrapper border border-gray-300 overflow-hidden"
      :style="{ height: content.height || '600px' }"
    >
      <iframe
        :src="content.url"
        :title="content.title || 'Interactive Content'"
        :allowfullscreen="content.allowFullscreen !== false"
        class="w-full h-full"
        frameborder="0"
        tabindex="-1"
        loading="lazy"
      />
    </div>

    <div
      v-else-if="content.type === 'h5p'"
      class="h5p-wrapper border border-gray-300 overflow-hidden"
      :style="{ height: content.height || '600px' }"
    >
      <iframe
        :src="content.url"
        :title="content.title || 'H5P Content'"
        :allowfullscreen="content.allowFullscreen !== false"
        class="w-full h-full"
        frameborder="0"
        allow="autoplay; fullscreen; encrypted-media"
        tabindex="-1"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InteractiveContent } from '@/types/bigdata';

interface Props {
  content: InteractiveContent;
}

defineProps<Props>();
</script>

<style scoped>
.interactive-content-container {
  margin-bottom: 2rem;
}

.iframe-wrapper,
.h5p-wrapper {
  background: #f9fafb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.content-title h3 {
  color: #1f2937;
}
</style>
