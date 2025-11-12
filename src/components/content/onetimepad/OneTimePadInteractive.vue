<template>
  <section id="interactive" class="mb-8 sm:mb-12">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
      <span>🎮</span>
      <span>Probiere es selbst aus!</span>
    </h2>

    <div class="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
      <!-- Mode Toggle -->
      <div class="flex justify-center gap-2 mb-6">
        <button
          :class="[
            'px-6 py-2 rounded-lg font-semibold transition-colors',
            otp.state.value.mode === 'encrypt'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
          @click="otp.state.value.mode = 'encrypt'"
        >
          🔒 Verschlüsseln
        </button>
        <button
          :class="[
            'px-6 py-2 rounded-lg font-semibold transition-colors',
            otp.state.value.mode === 'decrypt'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
          @click="otp.state.value.mode = 'decrypt'"
        >
          🔓 Entschlüsseln
        </button>
      </div>

      <!-- Encrypt Mode -->
      <div v-if="otp.state.value.mode === 'encrypt'" class="space-y-4">
        <!-- Plaintext Input -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">
            📝 Klartext (Nachricht):
          </label>
          <textarea
            v-model="otp.state.value.plaintext"
            class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none font-mono"
            rows="3"
            placeholder="Gib deine geheime Nachricht ein..."
          ></textarea>
          <p class="text-sm text-gray-500 mt-1">
            Länge: {{ otp.state.value.plaintext.length }} Zeichen
          </p>
        </div>

        <!-- Key Input -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2"> 🔑 Schlüssel: </label>
          <div class="flex gap-2 mb-2">
            <button
              class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold text-sm"
              @click="otp.generateKeyForText(false)"
            >
              🎲 Zufälligen Schlüssel generieren
            </button>
            <button
              class="px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500 transition-colors font-semibold text-sm"
              @click="otp.generateKeyForText(true)"
            >
              🔤 Nur Buchstaben
            </button>
          </div>
          <textarea
            v-model="otp.state.value.key"
            class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none font-mono"
            rows="3"
            placeholder="Gib einen Schlüssel ein oder generiere einen..."
          ></textarea>
          <p class="text-sm text-gray-500 mt-1">Länge: {{ otp.state.value.key.length }} Zeichen</p>
        </div>

        <!-- Encrypt Button -->
        <button
          :disabled="!otp.state.value.plaintext || !otp.state.value.key"
          class="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-bold text-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          @click="otp.encryptCurrent()"
        >
          🔒 Verschlüsseln
        </button>

        <!-- Ciphertext Output -->
        <div v-if="otp.state.value.ciphertext">
          <label class="block text-sm font-bold text-gray-700 mb-2">
            Geheimtext (verschlüsselt):
          </label>
          <div class="bg-gray-100 p-4 rounded-lg">
            <div class="font-mono text-sm break-all mb-3">
              {{ otp.state.value.ciphertext }}
            </div>
            <div class="border-t border-gray-300 pt-3">
              <p class="text-xs font-bold text-gray-600 mb-2">Als Hexadezimal (lesbar):</p>
              <div class="font-mono text-xs text-gray-700 break-all">
                {{ otp.stringToHex(otp.state.value.ciphertext) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decrypt Mode -->
      <div v-else class="space-y-4">
        <!-- Ciphertext Input -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Geheimtext: </label>
          <textarea
            v-model="otp.state.value.ciphertext"
            class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none font-mono"
            rows="3"
            placeholder="Füge den verschlüsselten Text ein..."
          ></textarea>
        </div>

        <!-- Key Input -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2"> 🔑 Schlüssel: </label>
          <textarea
            v-model="otp.state.value.key"
            class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none font-mono"
            rows="3"
            placeholder="Gib den Schlüssel ein..."
          ></textarea>
        </div>

        <!-- Decrypt Button -->
        <button
          :disabled="!otp.state.value.ciphertext || !otp.state.value.key"
          class="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-bold text-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          @click="otp.decryptCurrent()"
        >
          🔓 Entschlüsseln
        </button>

        <!-- Plaintext Output -->
        <div v-if="otp.state.value.plaintext && otp.state.value.mode === 'decrypt'">
          <label class="block text-sm font-bold text-gray-700 mb-2">
            📝 Entschlüsselter Text:
          </label>
          <div class="bg-green-50 p-4 rounded-lg border-2 border-green-300">
            <div class="font-mono text-sm break-all">
              {{ otp.state.value.plaintext }}
            </div>
          </div>
        </div>
      </div>

      <!-- Security Analysis -->
      <div v-if="otp.securityAnalysis.value.warnings.length > 0" class="mt-6">
        <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
          <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>⚠️</span>
            <span>Sicherheitsanalyse:</span>
          </h4>
          <ul class="space-y-1">
            <li
              v-for="(warning, index) in otp.securityAnalysis.value.warnings"
              :key="index"
              class="text-sm text-gray-700"
            >
              {{ warning }}
            </li>
          </ul>
        </div>
      </div>

      <div v-else-if="otp.state.value.key && otp.state.value.plaintext" class="mt-6">
        <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
          <p class="text-sm text-green-800 font-semibold flex items-center gap-2">
            <span>✅</span>
            <span
              >Perfekt! Die Konfiguration erfüllt alle Anforderungen für perfekte Sicherheit.</span
            >
          </p>
        </div>
      </div>

      <!-- Reset Button -->
      <button
        class="mt-4 w-full py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
        @click="otp.reset()"
      >
        🔄 Zurücksetzen
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useOneTimePad } from '@/composables/useOneTimePad';

const otp = useOneTimePad();
</script>
