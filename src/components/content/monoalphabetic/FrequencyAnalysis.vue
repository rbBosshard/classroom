<template>
  <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
    <h2 class="text-2xl font-bold text-primary-900 mb-4 flex items-center">
      <span class="text-3xl mr-3">🔍</span>
      Häufigkeitsanalyse
    </h2>

    <p class="text-gray-700 mb-6">
      Knacke den verschlüsselten Text, indem du die Häufigkeiten der Buchstaben analysierst und
      schrittweise die richtige Zuordnung findest!
    </p>

    <!-- Language Selection -->
    <div class="mb-6">
      <div class="flex gap-2">
        <button
          :class="[
            'px-4 py-2 rounded-lg font-semibold transition-colors',
            language === 'german'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
          @click="switchLanguage('german')"
        >
          🇩🇪 Deutsch
        </button>
        <button
          :class="[
            'px-4 py-2 rounded-lg font-semibold transition-colors',
            language === 'english'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
          @click="switchLanguage('english')"
        >
          🇬🇧 English
        </button>
      </div>
    </div>

    <!-- Success Message -->
    <div
      v-if="isCorrect"
      class="mb-6 bg-green-100 border-2 border-green-500 rounded-lg p-4 animate-pulse"
    >
      <p class="text-green-800 font-bold text-center text-lg">
        🎉 Perfekt! Du hast den Code geknackt! 🎉
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-6">
      <!-- Left Column: Frequencies -->
      <div class="space-y-4">
        <!-- Cipher Frequencies -->
        <div class="bg-red-50 rounded-lg p-4 border-2 border-red-200">
          <h3 class="font-bold text-red-900 mb-3 flex items-center">
            <span class="text-xl mr-2">📊</span>
            Häufigkeit im Geheimtext
          </h3>
          <div class="space-y-1 max-h-80 overflow-y-auto">
            <div
              v-for="(freq, index) in cipherFrequencies.slice(0, 15)"
              :key="freq.letter"
              class="flex items-center gap-2"
            >
              <span class="text-xs text-gray-500 w-6 text-right">{{ index + 1 }}.</span>
              <span class="font-mono font-bold text-red-600 w-6">{{ freq.letter }}</span>
              <div class="flex-1 bg-white rounded overflow-hidden h-6">
                <div
                  :style="{
                    width: (freq.percentage / cipherFrequencies[0].percentage) * 100 + '%',
                  }"
                  class="bg-red-400 h-full transition-all duration-300 flex items-center justify-end pr-2"
                >
                  <span class="text-xs text-white font-semibold"
                    >{{ freq.percentage.toFixed(1) }}%</span
                  >
                </div>
              </div>
              <span class="text-xs text-gray-600 w-12">{{ freq.count }}×</span>
            </div>
          </div>
        </div>

        <!-- Reference Frequencies -->
        <div class="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
          <h3 class="font-bold text-blue-900 mb-3 flex items-center">
            <span class="text-xl mr-2">📈</span>
            Erwartete Häufigkeit ({{ language === 'german' ? 'Deutsch' : 'English' }})
          </h3>
          <div class="space-y-1 max-h-80 overflow-y-auto">
            <div
              v-for="(freq, index) in referenceFrequenciesArray.slice(0, 15)"
              :key="freq.letter"
              class="flex items-center gap-2"
            >
              <span class="text-xs text-gray-500 w-6 text-right">{{ index + 1 }}.</span>
              <span class="font-mono font-bold text-blue-600 w-6">{{ freq.letter }}</span>
              <div class="flex-1 bg-white rounded overflow-hidden h-6">
                <div
                  :style="{
                    width: (freq.percentage / referenceFrequenciesArray[0].percentage) * 100 + '%',
                  }"
                  class="bg-blue-400 h-full transition-all duration-300 flex items-center justify-end pr-2"
                >
                  <span class="text-xs text-white font-semibold"
                    >{{ freq.percentage.toFixed(1) }}%</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hint Button -->
        <div class="flex gap-2">
          <button
            class="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            @click="showHints = !showHints"
          >
            💡 {{ showHints ? 'Hinweis ausblenden' : 'Hinweis anzeigen' }}
          </button>
          <button
            class="px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            @click="showSolution"
          >
            🔓 Lösung
          </button>
          <button
            class="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
            @click="clearKey"
          >
            🗑️ Zurücksetzen
          </button>
        </div>

        <!-- Hint Display -->
        <div
          v-if="showHints && getHint()"
          class="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4"
        >
          <p class="font-bold text-yellow-900 mb-2">💡 Tipp:</p>
          <p class="text-yellow-800 text-sm">
            Der häufigste Buchstabe im Geheimtext ist
            <span class="font-mono font-bold text-red-600">{{ getHint()!.cipherLetter }}</span>
            ({{ getHint()!.cipherPercentage.toFixed(1) }}%).
            <br />
            Der häufigste Buchstabe im {{ language === 'german' ? 'Deutschen' : 'Englischen' }} ist
            <span class="font-mono font-bold text-blue-600">{{ getHint()!.plainLetter }}</span>
            (ca. {{ getHint()!.expectedPercentage.toFixed(1) }}%).
            <br />
            <span class="font-semibold">Probiere diese Zuordnung aus!</span>
          </p>
        </div>
      </div>

      <!-- Right Column: Text and Key Mapping -->
      <div class="space-y-4">
        <!-- Ciphertext -->
        <div class="bg-red-50 rounded-lg p-4 border-2 border-red-200">
          <h3 class="font-bold text-red-900 mb-2">🔒 Geheimtext</h3>
          <div
            class="bg-white rounded p-3 font-mono text-sm leading-relaxed max-h-60 overflow-y-auto border border-red-300"
          >
            {{ ciphertext }}
          </div>
        </div>

        <!-- Decrypted Text (with user key) -->
        <div class="bg-green-50 rounded-lg p-4 border-2 border-green-200">
          <h3 class="font-bold text-green-900 mb-2">📝 Deine Entschlüsselung</h3>
          <div
            class="bg-white rounded p-3 font-mono text-sm leading-relaxed max-h-60 overflow-y-auto border border-green-300"
          >
            <span
              v-if="decryptedText.replace(/[^A-Z]/g, '').length === 0"
              class="text-gray-400 italic"
            >
              Beginne mit der Entschlüsselung, indem du unten Buchstaben zuordnest...
            </span>
            <span v-else>{{ decryptedText }}</span>
          </div>
        </div>

        <!-- Key Mapping Interface -->
        <div class="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
          <h3 class="font-bold text-purple-900 mb-3">🔑 Schlüssel-Zuordnung</h3>
          <p class="text-xs text-purple-700 mb-3">
            Ordne jedem Geheimtext-Buchstaben einen Klartext-Buchstaben zu:
          </p>
          <div class="grid grid-cols-6 sm:grid-cols-8 gap-2 max-h-60 overflow-y-auto">
            <div
              v-for="letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')"
              :key="letter"
              class="flex flex-col items-center"
            >
              <div class="text-xs font-bold text-red-600 mb-1">
                {{ letter }}
              </div>
              <input
                :value="userKey[letter] || ''"
                :class="{
                  'bg-green-100 border-green-500':
                    userKey[letter] && userKey[letter] === (currentExample.key as any)[letter],
                  'bg-red-100 border-red-500':
                    userKey[letter] && userKey[letter] !== (currentExample.key as any)[letter],
                }"
                type="text"
                maxlength="1"
                class="w-8 h-8 text-center font-mono font-bold border-2 border-purple-300 rounded focus:border-purple-500 focus:outline-none uppercase"
                @input="setKeyMapping(letter, ($event.target as HTMLInputElement).value)"
              />
            </div>
          </div>
          <p class="text-xs text-gray-600 mt-3">
            💚 Grün = richtig | 💔 Rot = falsch | Weiss = noch nicht gesetzt
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFrequencyAnalysis } from '@/composables';

const {
  language,
  ciphertext,
  userKey,
  showHints,
  currentExample,
  cipherFrequencies,
  referenceFrequenciesArray,
  decryptedText,
  isCorrect,
  loadExample,
  setKeyMapping,
  clearKey,
  getHint,
  showSolution,
  switchLanguage,
} = useFrequencyAnalysis();

onMounted(() => {
  loadExample();
});
</script>

<style scoped>
/* Smooth scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Input animation */
input {
  transition: all 0.2s ease;
}

input:focus {
  transform: scale(1.1);
}
</style>
