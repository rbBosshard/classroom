<template>
  <section id="intro" class="space-y-6 mb-12 scroll-mt-32">
    <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2">
      📚 Einführung & Tabula Recta
    </h3>
    
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
      <h4 class="text-lg font-bold text-gray-800 mb-2">💡 Von Caesar zu Vigenère</h4>
      <p class="text-gray-700">
        Du kennst bereits die <strong>Caesar-Verschlüsselung</strong>, bei der jeder Buchstabe um die gleiche Anzahl verschoben wird. Das Problem: Sie ist leicht zu knacken durch <strong>Brute-Force-Attacke oder Häufigkeitsanalyse</strong>.
      </p>
      <p class="text-gray-700 mt-2">
        <strong>Vigenères Lösung:</strong> Verwende <em>mehrere</em> Verschiebungen! Ein Schlüsselwort bestimmt, welche Verschiebung für jeden Buchstaben verwendet wird.
      </p>
    </div>

    <!-- Tabula Recta -->
    <div>
      <h4 class="text-xl font-bold text-gray-800 mb-3">📊 Die Tabula Recta (Vigenère-Quadrat)</h4>
      <p class="text-gray-600 mb-4">
        Dies ist das Werkzeug für die Vigenère-Verschlüsselung. Jede Zeile ist eine Caesar-Verschiebung:
      </p>

      <div class="overflow-x-auto">
        <div class="inline-block min-w-full">
          <div class="flex text-xs sm:text-sm font-mono">
            <!-- Header row -->
            <div class="flex flex-col">
              <div class="w-8 h-8 flex items-center justify-center font-bold bg-blue-200 border border-gray-300"></div>
              <div
                v-for="letter in alphabet"
                :key="'row-header-' + letter"
                class="w-8 h-8 flex items-center justify-center font-bold bg-blue-100 border border-gray-300"
              >
                {{ letter }}
              </div>
            </div>

            <!-- Column headers -->
            <div class="flex-1 overflow-x-auto">
              <div class="flex">
                <div
                  v-for="letter in alphabet"
                  :key="'col-header-' + letter"
                  class="w-8 h-8 flex items-center justify-center font-bold bg-blue-200 border border-gray-300"
                >
                  {{ letter }}
                </div>
              </div>

              <!-- Tabula Recta Grid -->
              <div
                v-for="(row, rowIndex) in alphabet"
                :key="'row-' + row"
                class="flex"
              >
                <div
                  v-for="(_, colIndex) in alphabet"
                  :key="'cell-' + rowIndex + '-' + colIndex"
                  :class="[
                    'w-8 h-8 flex items-center justify-center border border-gray-300 transition-colors',
                    isHighlightedCell(rowIndex, colIndex)
                      ? 'bg-orange-300 font-bold scale-110 z-10'
                      : 'bg-white hover:bg-gray-50'
                  ]"
                >
                  {{ getVigenereChar(rowIndex, colIndex) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Example -->
      <div class="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
        <div class="space-y-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="font-semibold">Klartext-Buchstabe:</span>
            <select
              v-model="examplePlainChar"
              class="border border-gray-300 rounded px-3 py-1 bg-white"
            >
              <option v-for="letter in alphabet" :key="'plain-' + letter" :value="letter">
                {{ letter }}
              </option>
            </select>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="font-semibold">Schlüssel-Buchstabe:</span>
            <select
              v-model="exampleKeyChar"
              class="border border-gray-300 rounded px-3 py-1 bg-white"
            >
              <option v-for="letter in alphabet" :key="'key-' + letter" :value="letter">
                {{ letter }}
              </option>
            </select>
          </div>
          <div class="flex flex-wrap items-center gap-2 text-lg">
            <span class="font-semibold">→ Geheimtext-Buchstabe:</span>
            <span class="bg-orange-300 text-orange-800 font-bold px-4 py-2 rounded">
              {{ encryptChar(examplePlainChar, exampleKeyChar) }}
            </span>
          </div>
          <p class="text-sm text-gray-600 mt-2">
            💡 <strong>So liest du die Tabelle:</strong> Finde deinen Klartext-Buchstaben ({{ examplePlainChar }}) in der <em>obersten Zeile</em> und den Schlüssel-Buchstaben ({{ exampleKeyChar }}) in der <em>linken Spalte</em>. Wo sich beide treffen, steht der verschlüsselte Buchstabe!
          </p>
        </div>
      </div>
    </div>

    <!-- Example with Key -->
    <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
      <h4 class="font-bold text-gray-800 mb-3">📝 Vollständiges Beispiel</h4>
      
      <!-- Table format -->
      <div class="bg-white p-4 rounded-lg mb-4 overflow-x-auto">
        <table class="w-full font-mono text-base sm:text-lg border-collapse">
          <thead>
            <tr>
              <th class="text-left text-gray-600 font-semibold py-2 pr-4"></th>
              <th class="text-center px-2 py-2 font-bold">1</th>
              <th class="text-center px-2 py-2 font-bold">2</th>
              <th class="text-center px-2 py-2 font-bold">3</th>
              <th class="text-center px-2 py-2 font-bold">4</th>
              <th class="text-center px-2 py-2 font-bold">5</th>
              <th class="text-center px-2 py-2 font-bold">6</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t-2 border-gray-200">
              <td class="text-gray-600 font-semibold py-2 pr-4">Klartext:</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">F</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">U</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">S</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">S</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">B</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">A</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">L</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">L</td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="text-gray-600 font-semibold py-2 pr-4">Schlüssel:</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">O</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">L</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">E</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">O</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">L</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">E</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">O</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">L</td>
            </tr>
            <tr class="border-t-2 border-gray-300">
              <td class="text-gray-600 font-semibold py-2 pr-4">Geheimtext:</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">T</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">F</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">W</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">G</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">M</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">E</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">Z</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">W</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-3 text-sm text-gray-600 bg-blue-50 p-3 rounded">
        <strong>💡 So funktioniert's:</strong><br>
        Der Schlüssel "OLE" (3 Buchstaben) wiederholt sich über den gesamten Text.<br>
        Jeder Buchstabe wird mit dem entsprechenden Schlüsselbuchstaben verschlüsselt:<br>
        F + O = T, U + L = F, S + E = W, S + O = G, B + L = M, A + E = E, L + O = Z, L + L = W
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useVigenereCipher } from '@/composables/useVigenereCipher';
import { VIGENERE_ALPHABET } from '@/constants/vigenere';

const { encryptChar, getVigenereChar } = useVigenereCipher();
const alphabet = VIGENERE_ALPHABET;

const examplePlainChar = ref('F');
const exampleKeyChar = ref('O');

function isHighlightedCell(row: number, col: number): boolean {
  const plainIndex = alphabet.indexOf(examplePlainChar.value);
  const keyIndex = alphabet.indexOf(exampleKeyChar.value);
  return row === keyIndex && col === plainIndex;
}
</script>
