<template>
  <figure :class="['image-with-credit', containerClass]">
    <!-- Image -->
    <div class="image-container">
      <img :src="src" :alt="alt" :class="['image', imageClass]" :loading="loading" />
    </div>

    <!-- Credit/Attribution -->
    <figcaption
      v-if="credit || license"
      class="image-credit"
      :class="{ 'credit-compact': compact }"
    >
      <div class="credit-content">
        <!-- Copyright/License -->
        <span v-if="license" class="license-badge" :title="license">
          {{ getLicenseBadge(license) }}
        </span>

        <!-- Credit Text -->
        <span v-if="credit" class="credit-text">
          {{ credit }}
        </span>

        <!-- Source Link -->
        <a
          v-if="sourceUrl"
          :href="sourceUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="credit-link"
          title="Quelle öffnen"
        >
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  alt: string;
  credit?: string; // z.B. "Foto: Max Mustermann"
  license?: string; // z.B. "CC BY-SA 4.0", "Public Domain", "Fair Use"
  sourceUrl?: string; // Link zur Originalquelle
  imageClass?: string; // Zusätzliche CSS-Klassen für das Bild
  containerClass?: string; // Zusätzliche CSS-Klassen für den Container
  compact?: boolean; // Kompakte Darstellung der Credit-Zeile
  loading?: 'lazy' | 'eager'; // Lazy loading Option
}

withDefaults(defineProps<Props>(), {
  imageClass: 'w-full h-auto',
  containerClass: '',
  compact: false,
  loading: 'lazy',
});

/**
 * Returns a short badge text for common licenses
 */
function getLicenseBadge(license: string): string {
  const lower = license.toLowerCase();

  if (lower.includes('public domain')) return '©️ Public Domain';
  if (lower.includes('cc by-sa')) return '©️ CC BY-SA';
  if (lower.includes('cc by')) return '©️ CC BY';
  if (lower.includes('cc0')) return '©️ CC0';
  if (lower.includes('fair use')) return '©️ Fair Use';
  if (lower.includes('eigene')) return '©️ Eigene Erstellung';

  return '©️ ' + license;
}
</script>

<style scoped>
.image-with-credit {
  position: relative;
}

.image-container {
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #f3f4f6;
}

.image {
  object-fit: cover;
}

.image-credit {
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: #f9fafb;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #4b5563;
  border: 1px solid #e5e7eb;
}

.credit-compact {
  margin-top: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 10px;
}

.credit-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.license-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  background-color: #e5e7eb;
  color: #374151;
  font-weight: 500;
  white-space: nowrap;
}

.credit-text {
  flex: 1;
  min-width: 0;
  font-style: italic;
}

.credit-link {
  color: #2563eb;
  transition: color 0.2s;
  display: inline-flex;
  align-items: center;
}

.credit-link:hover {
  color: #1e40af;
}

/* Hover effect for the whole figure */
.image-with-credit:hover .image-credit {
  background-color: #f3f4f6;
  border-color: #d1d5db;
}
</style>
