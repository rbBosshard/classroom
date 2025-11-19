<template>
  <section class="sources-section mt-12 pt-8 border-t-2 border-gray-200">
    <details class="sources-details" :open="defaultOpen">
      <summary class="sources-summary">
        <h2 class="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <span class="text-3xl">📚</span>
          <span>Quellen &amp; weiterführende Informationen</span>
          <svg
            class="chevron w-6 h-6 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </h2>
      </summary>

      <div class="space-y-4 mt-6">
        <div
          v-for="source in sources"
          :key="source.id"
          class="source-item bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
        >
          <div class="flex items-start gap-3">
            <!-- Source Type Icon -->
            <span class="text-2xl flex-shrink-0" :title="getSourceTypeLabel(source.type)">
              {{ getSourceIcon(source.type) }}
            </span>

            <!-- Source Content -->
            <div class="flex-1 min-w-0">
              <!-- Title (with link if URL exists) -->
              <h3 class="font-semibold text-gray-900 mb-1">
                <a
                  v-if="source.url"
                  :href="source.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                >
                  {{ source.title }}
                  <svg
                    class="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <span v-else>{{ source.title }}</span>
              </h3>

              <!-- Author & Year -->
              <p v-if="source.author || source.year" class="text-sm text-gray-600 mb-1">
                <span v-if="source.author">{{ source.author }}</span>
                <span v-if="source.author && source.year"> · </span>
                <span v-if="source.year">{{ source.year }}</span>
              </p>

              <!-- Description -->
              <p v-if="source.description" class="text-sm text-gray-700 mb-1">
                {{ source.description }}
              </p>

              <!-- License/Copyright Info -->
              <p v-if="source.license" class="text-xs text-gray-500 italic mt-1">
                <span class="font-medium">Lizenz:</span> {{ source.license }}
              </p>

              <!-- Image Path (for images) -->
              <p v-if="source.imagePath" class="text-xs text-gray-500 mt-1">
                <span class="font-medium">Bildpfad:</span>
                <code class="bg-gray-200 px-1 py-0.5 rounded">{{ source.imagePath }}</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </details>
  </section>
</template>

<script setup lang="ts">
import type { Source, SourceType } from '@/types/curriculum';

interface Props {
  sources: Source[];
  defaultOpen?: boolean; // Optional: Standardmäßig eingeklappt (false) oder ausgeklappt (true)
}

withDefaults(defineProps<Props>(), {
  defaultOpen: false,
});

/**
 * Returns an emoji icon based on the source type
 */
function getSourceIcon(type: SourceType): string {
  const icons: Record<SourceType, string> = {
    book: '📖',
    article: '📄',
    website: '🌐',
    video: '🎥',
    wikipedia: '📋',
    image: '🖼️',
    other: '📌',
  };
  return icons[type] || '📌';
}

/**
 * Returns a human-readable label for the source type
 */
function getSourceTypeLabel(type: SourceType): string {
  const labels: Record<SourceType, string> = {
    book: 'Buch',
    article: 'Artikel',
    website: 'Website',
    video: 'Video',
    wikipedia: 'Wikipedia',
    image: 'Bild',
    other: 'Andere Quelle',
  };
  return labels[type] || 'Andere Quelle';
}
</script>

<style scoped>
.sources-section {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.source-item {
  transition: all 0.2s ease;
}

.source-item:hover {
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Details/Summary Styling */
.sources-details summary {
  list-style: none;
  cursor: pointer;
  user-select: none;
}

.sources-details summary::-webkit-details-marker {
  display: none;
}

.sources-summary {
  transition: all 0.2s ease;
}

.sources-summary:hover {
  opacity: 0.8;
}

.sources-summary h2 {
  cursor: pointer;
}

/* Chevron Animation */
.sources-details[open] .chevron {
  transform: rotate(180deg);
}

.chevron {
  flex-shrink: 0;
  margin-left: auto;
}
</style>
