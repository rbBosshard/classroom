<template>
  <Transition name="slide-down">
    <div v-if="hasErrors && latestError" class="fixed top-4 right-4 z-50 max-w-md">
      <div :class="errorClasses" class="rounded-lg shadow-lg p-4 flex items-start gap-3">
        <!-- Icon -->
        <div class="flex-shrink-0 text-2xl">
          {{ errorIcon }}
        </div>

        <!-- Content -->
        <div class="flex-1 min-w-0">
          <h3 class="font-semibold text-sm mb-1">
            {{ errorTitle }}
          </h3>
          <p class="text-sm opacity-90">
            {{ getUserFriendlyMessage(latestError) }}
          </p>

          <!-- Context (in dev mode) -->
          <p v-if="isDev && latestError.context" class="text-xs mt-1 opacity-70 font-mono">
            Context: {{ latestError.context }}
          </p>
        </div>

        <!-- Close Button -->
        <button
          class="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Fehler schliessen"
          @click="dismissError"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useErrorHandling } from '@/composables/useErrorHandling';

const { hasErrors, latestError, clearError, getUserFriendlyMessage } = useErrorHandling();

const isDev = import.meta.env.DEV;

const errorClasses = computed(() => {
  if (!latestError.value) return '';

  const severityClasses = {
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-gray-900',
    info: 'bg-blue-500 text-white',
  };

  return severityClasses[latestError.value.severity];
});

const errorIcon = computed(() => {
  if (!latestError.value) return '❌';

  const icons = {
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
  };

  return icons[latestError.value.severity];
});

const errorTitle = computed(() => {
  if (!latestError.value) return 'Fehler';

  const titles = {
    error: 'Fehler',
    warning: 'Warnung',
    info: 'Information',
  };

  return titles[latestError.value.severity];
});

function dismissError() {
  if (latestError.value) {
    clearError(latestError.value.id);
  }
}

// Auto-dismiss after 5 seconds for non-errors
if (latestError.value && latestError.value.severity !== 'error') {
  setTimeout(() => {
    dismissError();
  }, 5000);
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
