<template>
  <section id="comparison" class="space-y-6 mb-12 scroll-mt-32">
    <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2">
      ⚖️ Caesar vs. Vigenère im Vergleich
    </h3>

    <div class="bg-purple-50 border-l-4 border-purple-300 p-4 rounded-r">
      <p class="text-gray-700">
        <strong>Warum ist Vigenère sicherer als Caesar?</strong> Lass uns dasselbe Wort mit beiden
        Methoden verschlüsseln und sehen, was passiert!
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
            min="0"
            max="25"
            class="w-full"
          />
          <div class="text-center font-mono text-lg font-bold text-blue-600">
            {{ comparisonCaesarShift }}
          </div>
        </div>

        <div class="bg-white rounded-lg p-3 space-y-2">
          <div class="font-mono text-center">
            <!-- Klartext in boxes -->
            <div class="text-sm text-gray-600 mb-1">Klartext:</div>
            <div class="flex justify-center gap-1 mb-1">
              <span
                v-for="(char, index) in comparisonText.split('')"
                :key="'caesar-plain-' + index"
                class="w-8 h-8 flex items-center justify-center bg-blue-100 border-2 border-blue-300 text-blue-800 rounded font-bold text-sm"
              >
                {{ char }}
              </span>
            </div>
            <!-- Klartext Index -->
            <div class="flex justify-center gap-1 mb-2">
              <span
                v-for="(char, index) in comparisonText.split('')"
                :key="'caesar-plain-idx-' + index"
                class="w-8 h-8 flex items-center justify-center bg-blue-50 border border-blue-200 text-blue-600 rounded font-mono text-xs"
              >
                {{ alphabet.indexOf(char) }}
              </span>
            </div>

            <!-- Key visualization - showing the key letter repeated -->
            <div class="text-sm text-gray-600 mb-1">Schlüssel wiederholt:</div>
            <div class="flex justify-center gap-1 mb-2">
              <span
                v-for="(_, index) in comparisonText.split('')"
                :key="'caesar-key-' + index"
                class="w-8 h-8 flex items-center justify-center bg-yellow-200 text-yellow-800 rounded font-bold text-sm"
              >
                {{ alphabet[comparisonCaesarShift % 26] }}
              </span>
            </div>

            <!-- Offset boxes -->
            <div class="flex justify-center gap-1 mb-2">
              <span
                v-for="(_, index) in comparisonText.split('')"
                :key="'caesar-offset-' + index"
                class="w-8 h-8 flex items-center justify-center bg-yellow-100 border border-yellow-300 text-yellow-800 rounded font-mono text-xs font-semibold"
              >
                {{ comparisonCaesarShift }}
              </span>
            </div>

            <!-- Geheimtext in boxes -->
            <div class="text-sm text-gray-600 mb-1">Geheimtext:</div>
            <div class="flex justify-center gap-1 mb-1">
              <span
                v-for="(char, index) in caesarEncrypt(comparisonText, comparisonCaesarShift).split(
                  ''
                )"
                :key="'caesar-cipher-' + index"
                class="w-8 h-8 flex items-center justify-center bg-orange-200 border-2 border-orange-400 text-orange-800 rounded font-bold text-sm"
              >
                {{ char }}
              </span>
            </div>
            <!-- Geheimtext Index -->
            <div class="flex justify-center gap-1 mb-2">
              <span
                v-for="(char, index) in caesarEncrypt(comparisonText, comparisonCaesarShift).split(
                  ''
                )"
                :key="'caesar-cipher-idx-' + index"
                class="w-8 h-8 flex items-center justify-center bg-orange-50 border border-orange-200 text-orange-600 rounded font-mono text-xs"
              >
                {{ alphabet.indexOf(char) }}
              </span>
            </div>
          </div>

          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="text-xs text-gray-600 bg-blue-50 p-2 rounded mt-3"
            v-html="VIGENERE_COMPARISON.caesarProblem"
          ></div>
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
            type="text"
            placeholder="z.B. OLE"
            maxlength="10"
            class="w-full border border-purple-300 rounded px-3 py-2 text-center font-mono text-lg font-bold bg-white"
            @input="
              comparisonVigenereKey = comparisonVigenereKey.toUpperCase().replace(/[^A-Z]/g, '')
            "
          />
        </div>

        <div class="bg-white rounded-lg p-3 space-y-2">
          <div class="font-mono text-center">
            <!-- Klartext in boxes -->
            <div class="text-sm text-gray-600 mb-1">Klartext:</div>
            <div class="flex justify-center gap-1 mb-1">
              <span
                v-for="(char, index) in comparisonText.split('')"
                :key="'vigenere-plain-' + index"
                class="w-8 h-8 flex items-center justify-center bg-blue-100 border-2 border-blue-300 text-blue-800 rounded font-bold text-sm"
              >
                {{ char }}
              </span>
            </div>
            <!-- Klartext Index -->
            <div class="flex justify-center gap-1 mb-2">
              <span
                v-for="(char, index) in comparisonText.split('')"
                :key="'vigenere-plain-idx-' + index"
                class="w-8 h-8 flex items-center justify-center bg-blue-50 border border-blue-200 text-blue-600 rounded font-mono text-xs"
              >
                {{ alphabet.indexOf(char) }}
              </span>
            </div>

            <!-- Key visualization with colors based on letter -->
            <div class="text-sm text-gray-600 mb-1">Schlüssel wiederholt:</div>
            <div class="flex justify-center gap-1 mb-2">
              <span
                v-for="(_, index) in comparisonText.split('')"
                :key="'vigenere-key-' + index"
                :class="[
                  'w-8 h-8 flex items-center justify-center rounded font-bold text-sm',
                  comparisonVigenereKey.length > 0
                    ? getColorClassByLetter(
                        comparisonVigenereKey[index % comparisonVigenereKey.length]
                      )
                    : 'bg-gray-200 text-gray-800',
                ]"
              >
                {{
                  comparisonVigenereKey.length > 0
                    ? comparisonVigenereKey[index % comparisonVigenereKey.length]
                    : '?'
                }}
              </span>
            </div>

            <!-- Offset boxes for Vigenère -->
            <div class="flex justify-center gap-1 mb-2">
              <span
                v-for="(_, index) in comparisonText.split('')"
                :key="'vigenere-offset-' + index"
                :class="[
                  'w-8 h-8 flex items-center justify-center border rounded font-mono text-xs font-semibold',
                  comparisonVigenereKey.length > 0
                    ? getColorClassByLetter(
                        comparisonVigenereKey[index % comparisonVigenereKey.length]
                      )
                    : 'bg-gray-100 border-gray-300 text-gray-800',
                ]"
              >
                {{
                  comparisonVigenereKey.length > 0
                    ? alphabet.indexOf(comparisonVigenereKey[index % comparisonVigenereKey.length])
                    : '?'
                }}
              </span>
            </div>

            <!-- Geheimtext in boxes -->
            <div class="text-sm text-gray-600 mb-1">Geheimtext:</div>
            <div class="flex justify-center gap-1 mb-1">
              <span
                v-for="(char, index) in (comparisonVigenereKey.length > 0
                  ? vigenereEncrypt(comparisonText, comparisonVigenereKey)
                  : '?????'
                ).split('')"
                :key="'vigenere-cipher-' + index"
                class="w-8 h-8 flex items-center justify-center bg-orange-200 border-2 border-orange-400 text-orange-800 rounded font-bold text-sm"
              >
                {{ char }}
              </span>
            </div>
            <!-- Geheimtext Index -->
            <div class="flex justify-center gap-1 mb-2">
              <span
                v-for="(char, index) in (comparisonVigenereKey.length > 0
                  ? vigenereEncrypt(comparisonText, comparisonVigenereKey)
                  : '?????'
                ).split('')"
                :key="'vigenere-cipher-idx-' + index"
                class="w-8 h-8 flex items-center justify-center bg-orange-50 border border-orange-200 text-orange-600 rounded font-mono text-xs"
              >
                {{ char === '?' ? '?' : alphabet.indexOf(char) }}
              </span>
            </div>
          </div>

          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="text-xs text-gray-600 bg-purple-50 p-2 rounded mt-3"
            v-html="VIGENERE_COMPARISON.vigenereAdvantage"
          ></div>
        </div>
      </div>
    </div>

    <!-- Input for longer text -->

    <div
      class="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-500 p-4 rounded-r"
    >
      <h4 class="font-bold text-gray-800 mb-2">
        🔬 Der entscheidende Unterschied: Häufigkeitsprofile
      </h4>
      <p class="text-gray-700 text-sm">
        Schauen wir uns an, wie die <strong>Buchstabenhäufigkeiten</strong> bei beiden
        Verschlüsselungen aussehen:
      </p>
    </div>

    <div class="bg-white border-2 border-gray-300 rounded-lg p-4">
      <label class="block text-sm font-semibold text-gray-700 mb-2">
        📝 Testtext für Häufigkeitsanalyse
      </label>
      <textarea
        v-model="analysisText"
        placeholder="Gib einen längeren Text ein (mindestens 100 Buchstaben empfohlen)..."
        rows="4"
        class="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-mono focus:ring-2 focus:ring-purple-500 bg-gray-50"
        @input="analysisText = analysisText.toUpperCase()"
      ></textarea>
      <div class="flex gap-4 mt-3 items-center">
        <span class="text-sm text-gray-600"> Buchstaben: {{ letterCount }} </span>
        <div class="flex items-center gap-2">
          <label class="text-sm font-semibold text-gray-700">Vigenère-Schlüssel für Analyse:</label>
          <input
            v-model="analysisVigenereKey"
            type="text"
            placeholder="z.B. KRYPTO"
            maxlength="15"
            class="border border-purple-300 rounded px-3 py-1 font-mono font-bold bg-white text-purple-800 focus:ring-2 focus:ring-purple-300 focus:outline-none"
            @input="analysisVigenereKey = analysisVigenereKey.toUpperCase().replace(/[^A-Z]/g, '')"
          />
        </div>
      </div>
    </div>

    <!-- Frequency Analysis Comparison -->
    <div v-if="letterCount >= 50" class="space-y-4">
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Caesar Frequency -->
        <div>
          <FrequencyChart
            :text="caesarEncryptedAnalysis"
            :title="`Monoalphabetisch: Caesar`"
            :show-reference="true"
            :reference-percentage="17.4"
            color-scheme="blue"
            explanation="<strong>⚠️ Problem:</strong> Das Häufigkeitsprofil bleibt erhalten! Man sieht deutliche Spitzen – nur verschoben. Ein Angreifer kann durch Vergleich mit dem erwarteten Profil den Schlüssel erraten."
          />
        </div>

        <!-- Vigenère Frequency -->
        <div>
          <FrequencyChart
            :text="vigenereEncryptedAnalysis"
            :title="`Polyalphabetisch: Vigenère`"
            :show-reference="false"
            color-scheme="purple"
            explanation="<strong>✅ Vorteil:</strong> Das Profil ist viel flacher und gleichmässiger verteilt! Die polyalphabetische Verschlüsselung verteilt die Buchstaben auf mehrere Positionen, was die typischen Muster verschleiert."
          />
        </div>
      </div>

      <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
        <h5 class="font-bold text-green-800 mb-2">💡 Wichtige Erkenntnis</h5>
        <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>
            <strong>Monoalphabetisch (z. B. Caesar):</strong> Hohe Varianz im Häufigkeitsprofil →
            Muster bleiben sichtbar
          </li>
          <li>
            <strong>Polyalphabetisch (z. B. Vigenère):</strong> Niedrige Varianz → Muster werden
            verwischt
          </li>
          <li>Dies macht Vigenère deutlich resistenter gegen einfache Häufigkeitsanalysen!</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useVigenereCipher } from '@/composables/useVigenereCipher';
import { VIGENERE_COMPARISON } from '@/constants/vigenere';
import FrequencyChart from '@/components/ui/FrequencyChart.vue';

const { caesarEncrypt, vigenereEncrypt, getColorClassByLetter, alphabet } = useVigenereCipher();

const comparisonText = ref(VIGENERE_COMPARISON.defaultText);
const comparisonCaesarShift = ref(VIGENERE_COMPARISON.defaultCaesarShift);
const comparisonVigenereKey = ref(VIGENERE_COMPARISON.defaultVigenereKey);

// For frequency analysis
const analysisText = ref(
  'DIEEIGENSCHAFTENDERVIGENEREVERSCHLUESSELUNGMACHENSIESTARKERGEGENHAEUFIGKEITSANALYSENWEILGLEICHEBUCHSTABENUNTERSCHIEDLICHVERSCHLUESSELTWERDENKOENNENDASISTDERGROSSEUNTERSCHIEDZCAESARWOIMMERDIESELBEVERSCHIEBUNGVERWENDETWIRDBEIVIGENEREWERDENVIELEVERSCHIEBUNGENGENUTZTUNDDADURCHWIRDDASHAEUFIGKEITSPROFILFLACHANGLEICHMAESSIGERVERTEILTWASDIEKRYPTOANALYSEDEUTLICHERSCHWERT'
);
const analysisVigenereKey = ref('KRYPTO');

const letterCount = computed(() => {
  return analysisText.value.replace(/[^A-Z]/g, '').length;
});

const caesarEncryptedAnalysis = computed(() => {
  return caesarEncrypt(analysisText.value, comparisonCaesarShift.value);
});

const vigenereEncryptedAnalysis = computed(() => {
  return vigenereEncrypt(analysisText.value, analysisVigenereKey.value);
});
</script>
