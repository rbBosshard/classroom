<template>
  <div class="flex-1 w-full space-y-4">
    <!-- Mode Toggle -->
    <div class="flex justify-center mb-4">
      <div class="inline-flex rounded-lg border border-gray-300 bg-white p-1" role="group">
        <button
          v-for="modeOption in MODE_OPTIONS"
          :key="modeOption.value"
          @click="handleModeChange(modeOption.value)"
          :class="[
            'px-6 py-2 rounded-md font-semibold text-sm transition-all',
            mode === modeOption.value
              ? modeOption.activeClass
              : 'text-gray-600 hover:bg-gray-50'
          ]"
          :aria-pressed="mode === modeOption.value"
        >
          {{ modeOption.icon }} {{ modeOption.label }}
        </button>
      </div>
    </div>

    <template v-if="mode === 'encrypt'">
      <!-- Encryption Mode -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <span class="text-blue-600">📝</span>
          Klartext (Deine Nachricht):
        </label>
        <textarea
          :value="plainText"
          @input="handleInput($event, 'plainText')"
          placeholder="Schreibe hier deine geheime Nachricht..."
          class="w-full h-32 p-4 border-2 border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base transition-all"
        ></textarea>
        <div class="flex justify-between items-center mt-1">
          <p class="text-xs text-gray-500">
            Nur Buchstaben werden verschlüsselt
          </p>
          <p class="text-xs text-gray-500">
            {{ plainText.length }} Zeichen
          </p>
        </div>
      </div>

      <!-- Arrow -->
      <div class="text-center py-2">
        <div class="text-3xl">⬇️</div>
        <p class="text-xs text-gray-500 mt-1">Verschiebung: +{{ shift }}</p>
      </div>

      <!-- Encrypted Output -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <span class="text-purple-600">🔒</span>
          Geheimtext (Verschlüsselt):
        </label>
        <div class="relative">
          <textarea
            :value="encryptedText"
            readonly
            placeholder="Hier erscheint der verschlüsselte Text..."
            class="w-full h-32 p-4 bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg resize-none font-mono text-base tracking-wide"
          ></textarea>
          <button
            v-if="encryptedText"
            @click="copyToClipboard(encryptedText)"
            class="absolute top-3 right-3 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-all shadow-sm flex items-center gap-1"
          >
            📋 Kopieren
          </button>
        </div>
      </div>
    </template>

    <template v-else>
      <!-- Decryption Mode -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <span class="text-purple-600">🔒</span>
          Geheimtext (Verschlüsselt):
        </label>
        <textarea
          :value="encryptedInput"
          @input="handleInput($event, 'encryptedInput')"
          placeholder="Füge hier den verschlüsselten Text ein..."
          class="w-full h-32 p-4 border-2 border-purple-300 rounded-lg resize-none font-mono text-base tracking-wide focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
        ></textarea>
      </div>

      <!-- Arrow -->
      <div class="text-center py-2">
        <div class="text-3xl">⬇️</div>
        <p class="text-xs text-gray-500 mt-1">Verschiebung: -{{ shift }}</p>
      </div>

      <!-- Decrypted Output -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <span class="text-blue-600">📝</span>
          Klartext (Entschlüsselt):
        </label>
        <div class="relative">
          <textarea
            :value="decryptedText"
            readonly
            placeholder="Hier erscheint der entschlüsselte Text..."
            class="w-full h-32 p-4 bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-300 rounded-lg resize-none text-base"
          ></textarea>
          <button
            v-if="decryptedText"
            @click="copyToClipboard(decryptedText)"
            class="absolute top-3 right-3 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-all shadow-sm flex items-center gap-1"
          >
            📋 Kopieren
          </button>
        </div>
      </div>
    </template>

    <!-- Example Messages -->
    <div class="mt-4">
      <p class="text-sm font-semibold text-gray-600 mb-2">🎲 Beispiel-Nachrichten:</p>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="example in EXAMPLE_MESSAGES"
          :key="example"
          @click="handleExampleClick(example)"
          class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
          {{ example }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CIPHER_MODE, EXAMPLE_MESSAGES, type CipherMode } from '@/constants/caesar'

/**
 * Caesar Text Transform Component
 * Handles encryption/decryption text input and output
 */

interface Props {
  mode: CipherMode
  plainText: string
  encryptedText: string
  encryptedInput: string
  decryptedText: string
  shift: number
}

defineProps<Props>()

const emit = defineEmits<{
  'update:mode': [value: CipherMode]
  'update:plainText': [value: string]
  'update:encryptedInput': [value: string]
  useExample: [example: string]
}>()

const MODE_OPTIONS = [
  {
    value: CIPHER_MODE.ENCRYPT,
    label: 'Verschlüsseln',
    icon: '🔒',
    activeClass: 'bg-blue-600 text-white shadow',
  },
  {
    value: CIPHER_MODE.DECRYPT,
    label: 'Entschlüsseln',
    icon: '🔓',
    activeClass: 'bg-purple-600 text-white shadow',
  },
] as const

/**
 * Handle mode change
 */
function handleModeChange(newMode: CipherMode): void {
  emit('update:mode', newMode)
}

/**
 * Handle text input
 */
function handleInput(event: Event, field: 'plainText' | 'encryptedInput'): void {
  const value = (event.target as HTMLTextAreaElement).value
  if (field === 'plainText') {
    emit('update:plainText', value)
  } else {
    emit('update:encryptedInput', value)
  }
}

/**
 * Copy text to clipboard
 */
async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text)
  } catch (error) {
    console.error('Failed to copy text:', error)
  }
}

/**
 * Use example message
 */
function handleExampleClick(example: string): void {
  emit('useExample', example)
}
</script>
