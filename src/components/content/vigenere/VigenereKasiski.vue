<template>
  <section id="kasiski" class="space-y-6 mb-12 scroll-mt-32">
    <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2">
      🔬 Krypto-Analyse
    </h3>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
      <p class="text-gray-700">
        Jahrhundertelang galt Vigenère als unknackbar. Doch im 19. Jahrhundert entwickelten
        Kryptographen (Friedrich Kasiski oder Charles Babbage) Methoden, um auch diese
        Verschlüsselung zu brechen!
      </p>
    </div>

    <!-- The Problem with Vigenère -->
    <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
      <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>⚠️</span>
        Beobachtungen & Analyse
      </h3>
      <p class="text-gray-700 mb-4">
        In längeren Texten gibt es Wiederholungen von Buchstabenfolgen.
      </p>
      <div class="bg-white p-4 rounded overflow-x-auto mb-4">
        <!-- Position -->
        <div class="mb-3">
          <div class="text-gray-700 font-bold text-xs mb-1">Position:</div>
          <div class="flex gap-0.5 font-mono text-xs">
            <span
              v-for="(char, index) in examplePlaintext"
              :key="'pos-' + index"
              :class="[
                'text-gray-700 border border-gray-300 px-1 py-1 text-center w-[1.5rem] flex-shrink-0',
                getKeyPositionClass(index, 'gray'),
              ]"
              >{{ index }}</span
            >
          </div>
        </div>
        <!-- Klartext -->
        <div class="mb-3">
          <div class="text-purple-700 font-bold text-xs mb-1">Klartext:</div>
          <div class="flex gap-0.5 font-mono text-xs">
            <span
              v-for="(char, index) in examplePlaintext"
              :key="'plain-' + index"
              :class="[
                'text-purple-800 border border-purple-300 px-1.5 py-1 text-center min-w-[1.5rem] flex-shrink-0',
                getKeyPositionClass(index, 'purple'),
              ]"
              >{{ char }}</span
            >
          </div>
        </div>
        <!-- Schlüssel -->
        <div class="mb-3">
          <div class="text-blue-700 font-bold text-xs mb-1">Schlüssel:</div>
          <div class="flex gap-0.5 font-mono text-xs">
            <span
              v-for="(char, index) in examplePlaintext"
              :key="'key-' + index"
              :class="[
                'text-blue-800 border border-blue-300 px-1.5 py-1 text-center min-w-[1.5rem] flex-shrink-0',
                getKeyPositionClass(index, 'blue'),
              ]"
              >{{ exampleKey[index % exampleKey.length] }}</span
            >
          </div>
        </div>
        <!-- Geheimtext -->
        <div>
          <div class="text-red-700 font-bold text-xs mb-1">Geheimtext:</div>
          <div class="flex gap-0.5 font-mono text-xs">
            <span
              v-for="(char, index) in exampleCiphertext"
              :key="'cipher-' + index"
              :class="[
                'text-red-800 border border-red-300 px-1.5 py-1 text-center min-w-[1.5rem] flex-shrink-0',
                getKeyPositionClass(index, 'red'),
              ]"
              >{{ char }}</span
            >
          </div>
        </div>
      </div>
      <div class="space-y-3 text-gray-700">
        <p class="flex items-start gap-2">
          <span
            class="inline-block ml-2 px-2 py-0.5 bg-yellow-200 border border-yellow-600 rounded text-xs font-bold"
            >GELB</span
          >
          <span>
            Wiederholungen im Klartext (z.B. Trigramm "EIN") sind im Geheimtext
            <strong>nicht</strong> sichtbar, wenn sie an unterschiedlichen Positionen relativ zum
            Schlüssel auftreten.
          </span>
        </p>
        <p class="flex items-start gap-2">
          <span
            class="inline-block ml-2 px-2 py-0.5 bg-green-200 border border-green-600 rounded text-xs font-bold"
            >GRÜN</span
          >
          <span>
            Wiederholungen im Klartext (z.B. Trigramm "ESE") sind <strong>auch</strong> im
            Geheimtext sichtbar ("AGM"), wenn sie relativ zum Schlüssel an den gleichen Positionen
            auftreten.
          </span>
        </p>
        <p class="flex items-start gap-2">
          <span
            class="inline-block ml-2 px-2 py-0.5 bg-pink-200 border border-pink-600 rounded text-xs font-bold"
            >PINK</span
          >
          <span>
            Es kann Wiederholungen im Geheimtext (z.B. Trigramm "AAG") geben, die zufällig sind und
            an der Position im Klartext <strong>nicht</strong> vorkommen.
          </span>
        </p>
      </div>
    </div>

    <!-- Detailed Explanation Box -->
    <div
      class="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg p-6"
    >
      <h4 class="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
        <span>🎯</span> Wie funktioniert der Kasiski-Test?
      </h4>

      <div class="space-y-4 text-gray-700">
        <div class="bg-white rounded-lg p-4 border-l-4 border-purple-500">
          <h5 class="font-bold text-purple-700 mb-2">1️⃣ Schritt 1: Wiederholungen finden</h5>
          <p class="text-sm">
            Suche im Geheimtext nach sich wiederholenden Sequenzen von mindestens
            <strong>3 Buchstaben</strong> (Trigramme). Notiere dir die Positionen dieser
            Wiederholungen.
          </p>
        </div>

        <div class="bg-white rounded-lg p-4 border-l-4 border-blue-500">
          <h5 class="font-bold text-blue-700 mb-2">2️⃣ Schritt 2: Abstände messen</h5>
          <p class="text-sm">
            Wenn zum Beispiel "AGM" an Position 16 und 28 erscheint, ist der Abstand
            <strong>14 Buchstaben</strong>. Dieser Abstand sollte mit hoher Wahrscheinlichkeit ein
            <strong>Vielfaches der Schlüssellänge</strong> sein!
          </p>
        </div>

        <div class="bg-white rounded-lg p-4 border-l-4 border-green-500">
          <h5 class="font-bold text-green-700 mb-2">3️⃣ Schritt 3: Teiler berechnen</h5>
          <p class="text-sm">
            Wenn der Abstand 16 ist, könnte die Schlüssellänge sein: 2, 4, 8 oder 16. Wenn wir bei
            längeren Texten <strong>verschiedene Wiederholungen</strong> finden und die Teiler
            vergleichen, kristallisiert sich die wahrscheinlichste Schlüssellänge heraus.
          </p>
        </div>
      </div>
    </div>

    <!-- Step 1: Key Length -->
    <div class="bg-white border-2 border-gray-300 rounded-lg p-4">
      <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span class="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
          >1</span
        >
        Schlüssellänge finden (Kasiski-Test)
      </h4>
      <p class="text-gray-700 mb-3">
        Jetzt bist du dran! Der <strong>Kasiski-Test</strong> sucht nach sich wiederholenden
        Sequenzen im Geheimtext. Wenn dieselbe Wortgruppe im Klartext zweimal vorkommt und mit
        demselben Teil des Schlüssels verschlüsselt wird, entsteht die gleiche verschlüsselte
        Sequenz!
      </p>

      <!-- Interactive Kasiski -->
      <div class="mt-4">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <label class="text-sm font-semibold text-gray-700">
            🔍 Dieser Beispiel Geheimtext wurde mit dem Vigenère-Verfahren verschlüsselt, doch der
            verwendete Schlüssel ist nicht bekannt.
          </label>
          <div class="flex gap-2">
            <button
              class="text-xs bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg font-semibold transition-colors"
              @click="loadExampleFromPublicTextFile"
            >
              🎯 Beispiel laden
            </button>
          </div>
        </div>
        <div
          class="relative bg-orange-50 border-2 border-orange-300 rounded-lg p-4 font-mono text-sm leading-relaxed min-h-[8rem]"
        >
          <textarea
            v-model="crackCiphertext"
            placeholder="Gib einen längeren Geheimtext ein oder klicke auf Beispiel laden..."
            rows="6"
            class="w-full bg-transparent border-none outline-none resize-none text-orange-700 font-bold whitespace-pre-wrap break-words pr-10 p-0 m-0 leading-relaxed"
            style="font-family: inherit; font-size: inherit; line-height: inherit"
            @input="crackCiphertext = crackCiphertext.toUpperCase().replace(/[^A-Z]/g, '')"
          ></textarea>
          <button
            v-if="crackCiphertext"
            class="absolute right-3 top-3 p-2 hover:bg-orange-200 rounded transition-colors text-lg"
            title="Geheimtext kopieren"
            @click="copyToClipboard(crackCiphertext)"
          >
            📋
          </button>
        </div>

        <!-- Helpful hints based on text length -->
        <div
          v-if="textLengthHint"
          class="mt-2 p-3 border rounded text-sm"
          :class="{
            'bg-yellow-50 border-yellow-300 text-yellow-800': textLengthHint.type === 'warning',
            'bg-blue-50 border-blue-300 text-blue-800': textLengthHint.type === 'info',
            'bg-green-50 border-green-300 text-green-800': textLengthHint.type === 'success',
          }"
          v-html="textLengthHint.message"
        ></div>

        <!-- Highlighted Ciphertext Display -->
        <div v-if="kasiskiRepeats.length > 0" class="mt-4">
          <div class="flex items-center justify-between mb-2">
            <h5 class="font-bold text-gray-700">
              📍 Geheimtext mit markierten Doppelungen (alle Trigramm Wiederholungen):
            </h5>
            <div class="flex items-center gap-2">
              <button
                :disabled="currentRepeatIndex === 0"
                class="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm font-semibold"
                @click="previousRepeat"
              >
                ← Zurück
              </button>
              <span class="text-sm font-semibold text-gray-700">
                {{ currentRepeatIndex + 1 }} / {{ kasiskiRepeats.length }}
              </span>
              <button
                :disabled="currentRepeatIndex >= kasiskiRepeats.length - 1"
                class="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm font-semibold"
                @click="nextRepeat"
              >
                Weiter →
              </button>
            </div>
          </div>
          <div
            class="relative bg-white border-2 border-purple-300 rounded-lg p-4 font-mono text-sm leading-relaxed min-h-[8rem]"
          >
            <div class="whitespace-pre-wrap break-words pr-10">
              <span
                v-for="(char, index) in crackCiphertext"
                :key="'char-' + index"
                :class="getHighlightClass(index)"
                :title="getHighlightTooltip(index)"
                >{{ char }}</span
              >
            </div>
            <button
              class="absolute right-3 top-3 p-2 hover:bg-purple-200 rounded transition-colors text-lg"
              title="Geheimtext kopieren"
              @click="copyToClipboard(crackCiphertext)"
            >
              📋
            </button>
          </div>
          <div
            v-if="currentRepeat"
            class="mt-2 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-300 rounded-lg p-3"
          >
            <div class="flex items-center gap-3">
              <span
                class="bg-yellow-300 text-yellow-900 px-3 py-1 rounded font-mono font-bold text-lg border border-yellow-600"
              >
                {{ currentRepeat.sequence }}
              </span>
              <div class="text-sm text-gray-700">
                <p>
                  <strong>Vorkommen:</strong> {{ currentRepeat.positions.length }}× an Positionen
                  {{ currentRepeat.positions.join(', ') }}
                </p>
                <p><strong>Abstände:</strong> {{ currentRepeat.spacings.join(', ') }}</p>
                <p>
                  <strong>Mögliche Schlüssellängen: </strong>
                  <span class="font-mono font-semibold text-green-700">{{
                    currentRepeat.factors.join(', ')
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="crackCiphertext.length > 3" class="mt-4">
          <h5 class="font-bold text-gray-700 mb-2">
            🔍 Alle gefundenen Wiederholungen ({{ kasiskiRepeats.length }}):
          </h5>
          <div v-if="kasiskiRepeats.length > 0" class="space-y-2">
            <div class="max-h-40 overflow-y-auto space-y-1 bg-gray-50 rounded-lg p-2">
              <button
                v-for="(repeat, index) in kasiskiRepeats"
                :key="'repeat-' + index"
                :class="[
                  'w-full text-left px-3 py-2 rounded transition-colors text-sm',
                  currentRepeatIndex === index
                    ? 'bg-purple-500 text-white font-bold'
                    : 'bg-white hover:bg-purple-100 text-gray-700',
                ]"
                @click="currentRepeatIndex = index"
              >
                <span class="font-mono font-bold">{{ repeat.sequence }}</span>
                <span class="text-xs ml-2 opacity-80"
                  >({{ repeat.positions.length }}× gefunden)</span
                >
              </button>
            </div>

            <!-- Teiler-Tabelle -->
            <div class="bg-white border border-gray-300 rounded-lg p-3 mt-3 overflow-x-auto">
              <h6 class="font-bold text-gray-800 mb-2 text-sm">
                📊 Teiler-Übersicht (der Abstände zwischen Wiederholungen):
              </h6>
              <table class="w-full text-xs">
                <thead>
                  <tr class="border-b-2 border-gray-300">
                    <th class="text-left py-2 px-2 bg-gray-100 font-bold sticky left-0 z-10">
                      Trigramm
                    </th>
                    <th
                      v-for="divisor in allPossibleDivisors"
                      :key="'div-' + divisor"
                      :class="[
                        'text-center py-2 px-1 font-bold',
                        divisor === estimatedKeyLength ? 'bg-green-200' : 'bg-gray-50',
                      ]"
                    >
                      {{ divisor }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(repeat, index) in kasiskiRepeats"
                    :key="'row-' + index"
                    :class="[
                      'border-b border-gray-200 hover:bg-purple-50 cursor-pointer',
                      currentRepeatIndex === index ? 'bg-purple-100' : '',
                    ]"
                    @click="currentRepeatIndex = index"
                  >
                    <td class="py-2 px-2 font-mono font-bold sticky left-0 bg-white z-10">
                      {{ repeat.sequence }}
                    </td>
                    <td
                      v-for="divisor in allPossibleDivisors"
                      :key="'cell-' + index + '-' + divisor"
                      :class="[
                        'text-center py-2 px-1',
                        divisor === estimatedKeyLength ? 'bg-green-50' : '',
                      ]"
                    >
                      <span
                        v-if="repeat.factors.includes(divisor)"
                        class="text-green-600 font-bold text-base"
                        >✓</span
                      >
                    </td>
                  </tr>
                  <!-- Sum row -->
                  <tr class="border-t-2 border-gray-400 bg-gray-100 font-bold">
                    <td class="py-2 px-2 sticky left-0 bg-gray-100 z-10">Summe</td>
                    <td
                      v-for="divisor in allPossibleDivisors"
                      :key="'sum-' + divisor"
                      :class="[
                        'text-center py-2 px-1',
                        divisor === estimatedKeyLength ? 'bg-green-200 text-green-800' : '',
                      ]"
                    >
                      {{ countDivisorOccurrences(divisor) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="text-xs text-gray-600 mt-2">
                💡 Die grün markierte Spalte zeigt die wahrscheinlichste Schlüssellänge ({{
                  estimatedKeyLength
                }}), da sie sehr häufig als Teiler vorkommt.
              </p>
            </div>

            <div class="bg-green-50 border border-green-300 rounded-lg p-3 mt-3">
              <p class="font-bold text-green-800">
                Wahrscheinlichste Schlüssellänge: {{ estimatedKeyLength }}
              </p>
            </div>
          </div>
          <div v-else class="text-gray-500 text-sm">
            Keine signifikanten Wiederholungen gefunden. Versuche einen längeren Text oder einen
            Text mit mehr Wiederholungen.
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2: Frequency Analysis -->
    <div class="bg-white border-2 border-gray-300 rounded-lg p-4">
      <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span class="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
          >2</span
        >
        Häufigkeitsanalyse
      </h4>
      <p class="text-gray-700 mb-3">
        Sobald wir die Schlüssellänge kennen, können wir den Text in Gruppen aufteilen. Jede Gruppe
        wurde mit
        <em>demselben</em> Buchstaben verschlüsselt - das ist wie eine Caesar-Verschlüsselung!
      </p>

      <div v-if="crackCiphertext.length > 20 && estimatedKeyLength > 0" class="mt-4">
        <div class="mb-3">
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            📊 Vermutete Schlüssellänge: {{ estimatedKeyLength }}
          </label>
          <div class="flex gap-2 items-center">
            <button
              class="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              @click="analyzeFrequencies"
            >
              🔬 Häufigkeitsanalyse durchführen
            </button>
          </div>
        </div>

        <div v-if="frequencyResults.length > 0" class="space-y-4">
          <!-- Visual hint -->
          <div class="bg-blue-50 border border-blue-300 rounded-lg p-3 text-sm text-gray-700">
            <p class="mb-2">
              <strong>💡 Wichtig:</strong> Damit die Kryptoanalyse funktioniert, muss jede Position
              ein <strong>typisches Caesar-Muster</strong> mit klaren Spitzen aufweisen! Dann können
              wir einfach den häufigsten Geheimtextbuchstaben als verschlüsseltes "E" interpretieren
              und somit die Verschiebung (Schlüssel) rekonstruieren.
            </p>
            <p>
              Am Ende ist Vigenère nur eine Kombination von mehreren Caesar-Verschlüsselungen. Wenn
              wir die Schlüssellänge kennen, können wir jede einzelne durch Häufigkeitsanalyse
              knacken.
            </p>
          </div>

          <div
            v-for="(result, index) in frequencyResults"
            :key="'freq-' + index"
            class="bg-white border-2 border-gray-300 rounded-lg p-4"
          >
            <h5 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                >Position {{ index + 1 }}</span
              >
              <span class="text-sm font-normal text-gray-600"
                >(jeder {{ estimatedKeyLength }}. Buchstabe)</span
              >
            </h5>

            <!-- Mini frequency chart -->
            <FrequencyChart
              :text="result.groupText"
              :title="`Häufigkeiten für Position ${index + 1}`"
              :show-reference="true"
              :reference-percentage="17.4"
              color-scheme="purple"
            />

            <!-- Key findings -->
            <div class="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div class="bg-purple-50 border border-purple-200 rounded p-3">
                <p class="text-gray-600 mb-1">Häufigster Buchstabe:</p>
                <p class="font-mono font-bold text-purple-700 text-xl">{{ result.mostCommon }}</p>
              </div>
              <div class="bg-green-50 border border-green-200 rounded p-3">
                <p class="text-gray-600 mb-1">
                  Vermuteter Schlüsselbuchstabe (durch Kasiski-Test):
                </p>
                <p class="font-mono font-bold text-green-700 text-xl">{{ result.keyLetter }}</p>
                <p class="text-xs text-gray-500 mt-1">
                  (Annahme: {{ result.mostCommon }} = E verschlüsselt)
                </p>
              </div>
            </div>
          </div>

          <div
            class="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-4"
          >
            <h5 class="font-bold text-gray-800 mb-2">🔑 Rekonstruierter Schlüssel:</h5>
            <div
              class="relative bg-white rounded-lg border border-gray-300 p-4 min-h-[4rem] flex items-center"
            >
              <p class="font-mono text-2xl font-bold text-purple-700 pr-12 flex-1">
                {{ crackedKey }}
              </p>
              <button
                v-if="crackedKey"
                class="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded transition-colors text-lg"
                title="Schlüssel kopieren"
                @click="copyToClipboard(crackedKey)"
              >
                📋
              </button>
            </div>
          </div>

          <div v-if="crackedPlaintext" class="space-y-2">
            <h5 class="font-bold text-gray-800">📝 Entschlüsselter Text:</h5>

            <!-- Decrypted text with highlights -->
            <div
              class="relative bg-blue-50 border-2 border-blue-300 rounded-lg p-4 font-mono text-sm leading-relaxed min-h-[8rem]"
            >
              <div class="whitespace-pre-wrap break-words pr-10">
                <span
                  v-for="(char, index) in crackedPlaintext"
                  :key="'plain-' + index"
                  :class="getPlaintextHighlightClass(index)"
                  :title="getPlaintextHighlightTooltip(index)"
                  >{{ char }}</span
                >
              </div>
              <button
                class="absolute right-3 top-3 p-2 hover:bg-blue-200 rounded transition-colors text-lg"
                title="Klartext kopieren"
                @click="copyToClipboard(crackedPlaintext)"
              >
                📋
              </button>
            </div>

            <p class="text-sm text-gray-600">
              💡 Markierte Stellen zeigen, wo im Geheimtext Wiederholungen waren. Sieht das sinnvoll
              aus? Falls nicht, könnte die Schlüssellänge falsch sein oder der Text ist zu kurz für
              eine genaue Analyse.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useKasiskiTest } from '@/composables/useVigenereCipher';
import { VIGENERE_KASISKI } from '@/constants/vigenere';
import FrequencyChart from '@/components/ui/FrequencyChart.vue';

const {
  crackCiphertext,
  crackedKey,
  crackedPlaintext,
  frequencyResults,
  kasiskiRepeats,
  estimatedKeyLength,
  analyzeFrequencies,
  loadExampleFromPublicTextFile,
} = useKasiskiTest();

// Example data for demonstration
const exampleKey = 'WOIN';
const examplePlaintext = 'HABEEINENKLEINENESELIMSTALLGESEHEN';
const exampleCiphertext = 'DOJRAWVRJYTREBMAAGMYEAAGWZTTAGMUAB';

// Define special highlighting patterns
// ESE appears at positions 14-16 and 24-26 in plaintext -> AGM in ciphertext at same positions
// EIN appears at positions 5-7 and 15-17 in plaintext -> different in ciphertext
// AAG appears at positions 18-20 in ciphertext -> random coincidence

const highlightPatterns = {
  // Green: Plaintext repetition that IS visible in ciphertext (same key position)
  green: {
    plaintext: [
      { start: 16, end: 18, text: 'ESE' }, // First ESE
      { start: 28, end: 30, text: 'ESE' }, // Second ESE
    ],
    ciphertext: [
      { start: 16, end: 18, text: 'AGM' }, // First AGM
      { start: 28, end: 30, text: 'AGM' }, // Second AGM (this one overlaps with pink AAG)
    ],
  },
  // Yellow: Plaintext repetition that is NOT visible in ciphertext (different key position)
  yellow: {
    plaintext: [
      { start: 4, end: 6, text: 'EIN' }, // First EIN
      { start: 11, end: 13, text: 'EIN' }, // Second EIN
    ],
    ciphertext: [],
  },
  // Pink: Random ciphertext repetition that doesn't exist in plaintext
  pink: {
    plaintext: [],
    ciphertext: [
      { start: 21, end: 23, text: 'AAG' }, // First AAG
      { start: 15, end: 17, text: 'AAG' }, // Second AAG (overlaps with green AGM)
    ],
  },
};

// Function to get all matching patterns for a position (for overlaps)
const getAllMatchingPatterns = (index: number, rowType: 'plaintext' | 'ciphertext'): string[] => {
  const matches: string[] = [];

  // Check green patterns
  for (const pattern of highlightPatterns.green[rowType]) {
    if (index >= pattern.start && index <= pattern.end) {
      matches.push('green');
      break;
    }
  }

  // Check yellow patterns
  for (const pattern of highlightPatterns.yellow[rowType]) {
    if (index >= pattern.start && index <= pattern.end) {
      matches.push('yellow');
      break;
    }
  }

  // Check pink patterns
  for (const pattern of highlightPatterns.pink[rowType]) {
    if (index >= pattern.start && index <= pattern.end) {
      matches.push('pink');
      break;
    }
  }

  return matches;
};

// Function to get highlight class for special patterns (supports overlaps)
const getHighlightForPattern = (
  index: number,
  rowType: 'plaintext' | 'ciphertext'
): string | null => {
  const matches = getAllMatchingPatterns(index, rowType);

  if (matches.length === 0) {
    return null;
  }

  // Handle overlapping patterns with striped backgrounds
  if (matches.length > 1) {
    if (matches.includes('green') && matches.includes('pink')) {
      // Green + Pink overlap: use gradient or striped pattern
      return 'bg-gradient-to-br from-green-200 via-green-200 to-pink-200 border-purple-600 font-bold shadow-[inset_0_-2px_0_0_rgba(236,72,153,0.5)]';
    }
    // Add more overlap combinations if needed
  }

  // Single pattern
  if (matches.includes('green')) {
    return 'bg-green-200 border-green-600 font-bold';
  }
  if (matches.includes('yellow')) {
    return 'bg-yellow-200 border-yellow-600 font-bold';
  }
  if (matches.includes('pink')) {
    return 'bg-pink-200 border-pink-600 font-bold';
  }

  return null;
};

// Function to get alternating background colors based on key position
const getKeyPositionClass = (index: number, color: 'purple' | 'blue' | 'red' | 'gray'): string => {
  // Check for special highlighting first
  const rowType = color === 'purple' ? 'plaintext' : color === 'red' ? 'ciphertext' : null;
  if (rowType) {
    const highlight = getHighlightForPattern(index, rowType);
    if (highlight) {
      return highlight;
    }
  }

  // Alle Positionen mit gleichem Modulo 4 haben die gleiche Helligkeit
  const position = index % exampleKey.length;

  const colorClasses = {
    gray: [
      'bg-gray-100', // Position 0, 4, 8, 12... (W)
      'bg-gray-100', // Position 1, 5, 9, 13... (O)
      'bg-gray-100', // Position 2, 6, 10, 14... (I)
      'bg-gray-100', // Position 3, 7, 11, 15... (N)
    ],
    purple: [
      'bg-purple-100', // Position 0, 4, 8, 12... (W)
      'bg-purple-100', // Position 1, 5, 9, 13... (O)
      'bg-purple-100', // Position 2, 6, 10, 14... (I)
      'bg-purple-100', // Position 3, 7, 11, 15... (N)
    ],
    blue: [
      'bg-blue-100', // Position 0, 4, 8, 12... (W)
      'bg-blue-100', // Position 1, 5, 9, 13... (O)
      'bg-blue-100', // Position 2, 6, 10, 14... (I)
      'bg-blue-100', // Position 3, 7, 11, 15... (N)
    ],
    red: [
      'bg-red-100', // Position 0, 4, 8, 12... (W)
      'bg-red-100', // Position 1, 5, 9, 13... (O)
      'bg-red-100', // Position 2, 6, 10, 14... (I)
      'bg-red-100', // Position 3, 7, 11, 15... (N)
    ],
  };

  return colorClasses[color][position];
};

// Load example on component mount
onMounted(() => {
  loadExampleFromPublicTextFile();
});

// Current repeat navigation
const currentRepeatIndex = ref(0);

// Get current repeat
const currentRepeat = computed(() => {
  if (kasiskiRepeats.value.length === 0) {
    return null;
  }
  // Make sure index is valid
  const validIndex = Math.min(currentRepeatIndex.value, kasiskiRepeats.value.length - 1);
  return kasiskiRepeats.value[validIndex];
});

// Get all unique divisors from all repeats (sorted)
const allPossibleDivisors = computed(() => {
  const divisorsSet = new Set<number>();
  kasiskiRepeats.value.forEach(repeat => {
    repeat.factors.forEach(factor => divisorsSet.add(factor));
  });
  return Array.from(divisorsSet).sort((a, b) => a - b);
});

// Count how many times a divisor appears across all repeats
const countDivisorOccurrences = (divisor: number): number => {
  return kasiskiRepeats.value.filter(repeat => repeat.factors.includes(divisor)).length;
};

// Text length hint message
const textLengthHint = computed(() => {
  const length = crackCiphertext.value.length;
  const hints = VIGENERE_KASISKI.textLengthHints;

  if (length === 0) return null;

  if (length < hints.tooShort.threshold) {
    return {
      message: hints.tooShort.message.replace('{length}', length.toString()),
      type: 'warning',
    };
  } else if (length >= hints.short.thresholds[0] && length < hints.short.thresholds[1]) {
    return {
      message: hints.short.message.replace('{length}', length.toString()),
      type: 'info',
    };
  } else if (length >= hints.good.threshold) {
    return {
      message: hints.good.message.replace('{length}', length.toString()),
      type: 'success',
    };
  }

  return null;
});

// Navigation functions
function nextRepeat() {
  if (currentRepeatIndex.value < kasiskiRepeats.value.length - 1) {
    currentRepeatIndex.value++;
  }
}

function previousRepeat() {
  if (currentRepeatIndex.value > 0) {
    currentRepeatIndex.value--;
  }
}

// Function to get highlight class for a character at a specific index
const getHighlightClass = (index: number): string => {
  // Only highlight current repeat
  const repeat = currentRepeat.value;
  if (!repeat) return 'text-gray-700';

  for (const pos of repeat.positions) {
    if (index >= pos && index < pos + repeat.sequence.length) {
      return 'bg-yellow-300 text-yellow-900 border-b-2 border-yellow-600 font-bold';
    }
  }
  return 'text-gray-700';
};

// Function to get tooltip for a character at a specific index
const getHighlightTooltip = (index: number): string => {
  const repeat = currentRepeat.value;
  if (!repeat) return '';

  for (const pos of repeat.positions) {
    if (index >= pos && index < pos + repeat.sequence.length) {
      return `Wiederholung "${repeat.sequence}" (Position ${pos})`;
    }
  }
  return '';
};

// Function to get highlight class for plaintext (decrypted text)
const getPlaintextHighlightClass = (index: number): string => {
  // Highlight same positions as in ciphertext
  const repeat = currentRepeat.value;
  if (!repeat) return 'text-blue-700';

  for (const pos of repeat.positions) {
    if (index >= pos && index < pos + repeat.sequence.length) {
      return 'bg-green-300 text-green-900 border-b-2 border-green-600 font-bold';
    }
  }
  return 'text-blue-700';
};

// Function to get tooltip for plaintext
const getPlaintextHighlightTooltip = (index: number): string => {
  const repeat = currentRepeat.value;
  if (!repeat) return '';

  for (const pos of repeat.positions) {
    if (index >= pos && index < pos + repeat.sequence.length) {
      return `Diese Stelle war im Geheimtext "${repeat.sequence}" (Position ${pos})`;
    }
  }
  return '';
};

function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const alertBox = document.createElement('div');
      alertBox.textContent = 'In die Zwischenablage kopiert!';
      alertBox.className =
        'fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg opacity-80 z-50';
      document.body.appendChild(alertBox);
      setTimeout(() => {
        document.body.removeChild(alertBox);
      }, 1000);
    })
    .catch(() => {
      alert('Fehler beim Kopieren. Bitte manuell kopieren.');
    });
}
</script>
