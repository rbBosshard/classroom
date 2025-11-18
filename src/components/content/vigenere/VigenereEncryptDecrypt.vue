<template>
  <section id="encrypt-decrypt" class="space-y-6 mb-12 scroll-mt-32">
    <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2">
      Ver- & Entschlüsseln mit Vigenère 
    </h3>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Encryption Section -->
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
          <h4 class="font-bold text-blue-800 mb-1">🔒 Verschlüsseln</h4>
        </div>

        <!-- Key Input -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            🔑 Schlüsselwort
          </label>
          <div class="relative">
            <input v-model="encryptKey" @input="encryptKey = encryptKey.toUpperCase().replace(/[^A-Z]/g, '')"
              type="text" :placeholder="VIGENERE_ENCRYPT_DECRYPT.placeholders.key"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-purple-50 text-purple-700 font-mono font-bold" />
            <button v-if="encryptKey" @click="copyToClipboard(encryptKey)"
              class="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-purple-200 rounded transition-colors"
              title="Schlüssel kopieren">
              📋
            </button>
          </div>
          <p class="text-sm text-gray-500 mt-1">
            {{ encryptKeyLengthText }}
          </p>
          <!-- Helpful tip for beginners -->
          <div
            v-if="encryptKey.length > 0 && encryptKey.length < VIGENERE_ENCRYPT_DECRYPT.keyLengthWarnings.short.threshold"
            class="mt-2 p-2 bg-yellow-50 border border-yellow-300 rounded text-xs text-yellow-800"
            v-html="VIGENERE_ENCRYPT_DECRYPT.keyLengthWarnings.short.message">
          </div>
          <div v-else-if="encryptKey.length >= VIGENERE_ENCRYPT_DECRYPT.keyLengthWarnings.good.threshold"
            class="mt-2 p-2 bg-green-50 border border-green-300 rounded text-xs text-green-800"
            v-html="VIGENERE_ENCRYPT_DECRYPT.keyLengthWarnings.good.message">
          </div>
        </div>

        <!-- Plaintext Input -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            📝 Klartext
          </label>
          <div class="relative">
            <textarea v-model="encryptPlaintext" @input="encryptPlaintext = encryptPlaintext.toUpperCase()"
              :placeholder="VIGENERE_ENCRYPT_DECRYPT.placeholders.plaintext" rows="4"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono bg-blue-50 text-blue-700 font-bold"></textarea>
            <button v-if="encryptPlaintext" @click="copyToClipboard(encryptPlaintext)"
              class="absolute right-2 top-2 p-2 hover:bg-blue-200 rounded transition-colors" title="Klartext kopieren">
              📋
            </button>
          </div>
        </div>

        <!-- Encrypted Output -->
        <div v-if="encryptKey.length > 0 && encryptPlaintext.length > 0">
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Geheimtext
          </label>
          <div class="relative bg-orange-50 border-2 border-orange-400 rounded-lg px-4 py-3">
            <p class="text-lg font-mono font-bold text-orange-700 pr-10 break-all">
              {{ vigenereEncrypt(encryptPlaintext, encryptKey) }}
            </p>
            <button @click="copyToClipboard(vigenereEncrypt(encryptPlaintext, encryptKey))"
              class="absolute right-2 top-2 p-2 hover:bg-orange-200 rounded transition-colors"
              title="Geheimtext kopieren">
              📋
            </button>
          </div>

          <!-- Step by Step -->
          <details class="mt-4">
            <summary class="cursor-pointer p-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-gray-700">
              📊 Schritt für Schritt anzeigen
            </summary>
            <div class="mt-2 p-4 bg-gray-50 rounded-lg">
              <div class="overflow-x-auto">
                <table class="min-w-full text-sm font-mono">
                  <thead>
                    <tr class="border-b-2 border-gray-300">
                      <th class="px-2 py-1 text-left">Pos</th>
                      <th class="px-2 py-1 text-left">Klartext</th>
                      <th class="px-2 py-1 text-left">Schlüssel</th>
                      <th class="px-2 py-1 text-left">Geheimtext</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(step, index) in getEncryptionSteps(encryptPlaintext, encryptKey)" :key="'step-' + index"
                      class="border-b border-gray-200 hover:bg-white">
                      <td class="px-2 py-1 text-gray-600">{{ index + 1 }}</td>
                      <td class="px-2 py-1 font-bold text-blue-600 bg-blue-50">{{ step.plainChar }}</td>
                      <td class="px-2 py-1 font-bold text-purple-600 bg-purple-50">{{ step.keyChar }}</td>
                      <td class="px-2 py-1 font-bold text-orange-600 bg-orange-50">{{ step.cipherChar }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </div>

        <div v-else class="text-center text-gray-500 py-8 bg-gray-50 rounded-lg">
          👆 Gib ein Schlüsselwort und einen Klartext ein
        </div>
      </div>

      <!-- Decryption Section -->
      <div class="space-y-4">
        <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r">
          <h4 class="font-bold text-green-800 mb-1">🔓 Entschlüsseln</h4>
        </div>

        <!-- Key Input -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            🔑 Schlüsselwort
          </label>
          <div class="relative">
            <input v-model="decryptKey" @input="decryptKey = decryptKey.toUpperCase().replace(/[^A-Z]/g, '')"
              type="text" :placeholder="VIGENERE_ENCRYPT_DECRYPT.placeholders.key"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-purple-50 text-purple-700 font-mono font-bold" />
            <button v-if="decryptKey" @click="copyToClipboard(decryptKey)"
              class="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-purple-200 rounded transition-colors"
              title="Schlüssel kopieren">
              📋
            </button>
          </div>
          <p class="text-sm text-gray-500 mt-1">
            {{ decryptKeyLengthText }}
          </p>
        </div>

        <!-- Ciphertext Input -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Geheimtext
          </label>
          <div class="relative">
            <textarea v-model="decryptCiphertext" @input="decryptCiphertext = decryptCiphertext.toUpperCase()"
              :placeholder="VIGENERE_ENCRYPT_DECRYPT.placeholders.ciphertext" rows="4"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 text-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-mono bg-orange-50 text-orange-700 font-bold"></textarea>
            <button v-if="decryptCiphertext" @click="copyToClipboard(decryptCiphertext)"
              class="absolute right-2 top-2 p-2 hover:bg-orange-200 rounded transition-colors"
              title="Geheimtext kopieren">
              📋
            </button>
          </div>
        </div>

        <!-- Decrypted Output -->
        <div v-if="decryptKey.length > 0 && decryptCiphertext.length > 0">
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            📝 Entschlüsselter Text
          </label>
          <div class="relative bg-blue-50 border-2 border-blue-400 rounded-lg px-4 py-3">
            <p class="text-lg font-mono font-bold text-blue-700 pr-10 break-all">
              {{ vigenereDecrypt(decryptCiphertext, decryptKey) }}
            </p>
            <button @click="copyToClipboard(vigenereDecrypt(decryptCiphertext, decryptKey))"
              class="absolute right-2 top-2 p-2 hover:bg-blue-200 rounded transition-colors"
              title="Entschlüsselten Text kopieren">
              📋
            </button>
          </div>
        </div>

        <div v-else class="text-center text-gray-500 py-8 bg-gray-50 rounded-lg">
          👆 Gib einen Schlüssel und einen Geheimtext ein
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useVigenereCipher } from '@/composables/useVigenereCipher';
import { VIGENERE_ENCRYPT_DECRYPT } from '@/constants/vigenere';

const { vigenereEncrypt, vigenereDecrypt, getEncryptionSteps } = useVigenereCipher();

const encryptKey = ref('');
const encryptPlaintext = ref('');
const decryptKey = ref('');
const decryptCiphertext = ref('');

// Computed properties für Textausgaben (verhindert Prettier-Probleme)
const encryptKeyLengthText = computed(() => {
  return encryptKey.value.length > 0
    ? `Schlüssellänge: ${encryptKey.value.length} Buchstaben`
    : 'Bitte Schlüsselwort eingeben';
});

const decryptKeyLengthText = computed(() => {
  return decryptKey.value.length > 0
    ? `Schlüssellänge: ${decryptKey.value.length} Buchstaben`
    : 'Bitte Schlüsselwort eingeben';
});

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    const alertBox = document.createElement('div');
    alertBox.textContent = 'In die Zwischenablage kopiert!';
    alertBox.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg opacity-80 z-50';
    document.body.appendChild(alertBox);
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 1000);
  }).catch(() => {
    alert('Fehler beim Kopieren. Bitte manuell kopieren.');
  });
}
</script>
