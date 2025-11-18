<template>
  <div v-if="error" class="min-h-[400px] flex items-center justify-center p-4">
    <div class="max-w-md w-full">
      <div class="crypto-card p-6 sm:p-8 text-center">
        <!-- Error Icon -->
        <div class="mb-4">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
        </div>

        <!-- Error Message -->
        <h2 class="text-xl font-bold text-gray-900 mb-2">
          {{ errorTitle }}
        </h2>
        <p class="text-gray-600 mb-6">
          {{ errorMessage }}
        </p>

        <!-- Error Details (nur im Dev-Modus) -->
        <details v-if="isDev && error" class="text-left mb-6">
          <summary class="cursor-pointer text-sm text-gray-500 hover:text-gray-700 mb-2">
            🔍 Technische Details
          </summary>
          <div class="bg-gray-50 p-4 rounded-lg text-xs font-mono overflow-auto max-h-40">
            <p class="text-red-600 font-semibold mb-2">{{ error.message }}</p>
            <pre class="text-gray-700 whitespace-pre-wrap">{{ error.stack }}</pre>
          </div>
        </details>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            @click="retry"
            class="crypto-button"
          >
            🔄 Nochmal versuchen
          </button>
          <button 
            @click="goBack"
            class="px-5 py-2.5 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ← Zurück zur Übersicht
          </button>
        </div>
      </div>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const props = defineProps<{
  fallbackTitle?: string
  fallbackMessage?: string
}>()

const emit = defineEmits<{
  error: [error: Error]
  retry: []
  back: []
}>()

const error = ref<Error | null>(null)
const isDev = import.meta.env.DEV

const errorTitle = ref(props.fallbackTitle || 'Ups, etwas ist schiefgelaufen')
const errorMessage = ref(props.fallbackMessage || 'Dieser Inhalt konnte nicht geladen werden. Bitte versuche es erneut.')

// Vue's Error Handling
onErrorCaptured((err: Error) => {
  console.error('ErrorBoundary caught error:', err)
  error.value = err
  
  // Spezifische Error Messages
  if (err.message.includes('Failed to fetch')) {
    errorTitle.value = 'Verbindungsfehler'
    errorMessage.value = 'Die Inhalte konnten nicht geladen werden. Überprüfe deine Internetverbindung.'
  } else if (err.message.includes('not found') || err.message.includes('404')) {
    errorTitle.value = 'Inhalt nicht gefunden'
    errorMessage.value = 'Dieser Inhalt existiert nicht oder wurde verschoben.'
  } else if (err.message.includes('timeout')) {
    errorTitle.value = 'Zeitüberschreitung'
    errorMessage.value = 'Das Laden hat zu lange gedauert. Bitte versuche es erneut.'
  }
  
  emit('error', err)
  
  // Verhindere weitere Propagation
  return false
})

function retry() {
  error.value = null
  errorTitle.value = props.fallbackTitle || 'Ups, etwas ist schiefgelaufen'
  errorMessage.value = props.fallbackMessage || 'Dieser Inhalt konnte nicht geladen werden. Bitte versuche es erneut.'
  emit('retry')
}

function goBack() {
  error.value = null
  emit('back')
}

// Expose für programmatischen Zugriff
defineExpose({
  reset: () => { error.value = null }
})
</script>
