<template>
  <section id="comparison" class="space-y-6 mb-12 scroll-mt-32">
    <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2">
      ⚖️ Caesar vs. Vigenère im Vergleich
    </h3>

    <div class="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 rounded-r">
      <p class="text-gray-700">
        <strong>Warum ist Vigenère sicherer als Caesar?</strong> Lass uns dasselbe Wort mit beiden Methoden verschlüsseln und sehen, was passiert!
      </p>
    </div>

    <!-- Interactive Comparison -->
    <div class="grid md:grid-cols-2 gap-4">
      <!-- Caesar Side -->
      <div class="bg-blue-50 border-2 border-blue-400 rounded-lg p-4">
        <h4 class="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
          🔵 Caesar-Verschlüsselung
          <span class="text-sm font-normal text-gray-600">(monoalphabetisch)</span>
        </h4>
        
        <div class="mb-3">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Verschiebung:</label>
          <input
            v-model.number="comparisonCaesarShift"
            type="range"
            min="1"
            max="25"
            class="w-full"
          />
          <div class="text-center font-mono text-lg font-bold text-blue-600">{{ comparisonCaesarShift }}</div>
        </div>

        <div class="bg-white rounded-lg p-3 space-y-2">
          <div class="font-mono text-center">
            <div class="text-sm text-gray-600 mb-1">Klartext:</div>
            <div class="text-xl font-bold text-blue-600 mb-2">{{ comparisonText }}</div>
            
            <!-- Key visualization -->
            <div class="text-sm text-gray-600 mb-1">Verschiebung:</div>
            <div class="flex justify-center gap-1 mb-2">
              <span
                v-for="(_, index) in comparisonText.split('')"
                :key="'caesar-key-' + index"
                class="bg-yellow-200 text-yellow-800 px-2 py-1 rounded font-bold text-sm"
              >
                +{{ comparisonCaesarShift }}
              </span>
            </div>

            <div class="text-sm text-gray-600 mb-1">Geheimtext:</div>
            <div class="text-xl font-bold text-orange-600">{{ caesarEncrypt(comparisonText, comparisonCaesarShift) }}</div>
          </div>

          <div class="text-xs text-gray-600 bg-blue-50 p-2 rounded mt-3">
            ⚠️ <strong>Problem:</strong> Gleiche Buchstabe wird immer <em>gleich</em> verschlüsselt.<br>
          </div>
        </div>
      </div>

      <!-- Vigenère Side -->
      <div class="bg-purple-50 border-2 border-purple-400 rounded-lg p-4">
        <h4 class="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
          🟣 Vigenère-Verschlüsselung
          <span class="text-sm font-normal text-gray-600">(polyalphabetisch)</span>
        </h4>
        
        <div class="mb-3">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Schlüsselwort:</label>
          <input
            v-model="comparisonVigenereKey"
            @input="comparisonVigenereKey = comparisonVigenereKey.toUpperCase().replace(/[^A-Z]/g, '')"
            type="text"
            placeholder="z.B. ABC"
            maxlength="10"
            class="w-full border border-purple-300 rounded px-3 py-2 text-center font-mono text-lg font-bold bg-white"
          />
        </div>

        <div class="bg-white rounded-lg p-3 space-y-2">
          <div class="font-mono text-center">
            <div class="text-sm text-gray-600 mb-1">Klartext:</div>
            <div class="text-xl font-bold text-blue-600 mb-2">{{ comparisonText }}</div>
            
            <!-- Key visualization with colors -->
            <div class="text-sm text-gray-600 mb-1">Schlüssel wiederholt:</div>
            <div class="flex justify-center gap-1 mb-2">
              <span
                v-for="(_, index) in comparisonText.split('')"
                :key="'vigenere-key-' + index"
                :class="getKeyColorClass(index, comparisonVigenereKey.length)"
                class="px-2 py-1 rounded font-bold text-sm"
              >
                {{ comparisonVigenereKey.length > 0 ? comparisonVigenereKey[index % comparisonVigenereKey.length] : '?' }}
              </span>
            </div>

            <div class="text-sm text-gray-600 mb-1">Geheimtext:</div>
            <div class="text-xl font-bold text-orange-600">
              {{ comparisonVigenereKey.length > 0 ? vigenereEncrypt(comparisonText, comparisonVigenereKey) : '?????' }}
            </div>
          </div>

          <div class="text-xs text-gray-600 bg-purple-50 p-2 rounded mt-3">
            ✅ <strong>Vorteil:</strong> Gleiche Buchstabe werden <em>unterschiedlich</em> verschlüsselt!<br>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useVigenereCipher } from '@/composables/useVigenereCipher';

const { caesarEncrypt, vigenereEncrypt, getKeyColorClass } = useVigenereCipher();

const comparisonText = ref('HAMMER');
const comparisonCaesarShift = ref(3);
const comparisonVigenereKey = ref('ABC');
</script>
