<template>
  <section id="kasiski" class="space-y-6 mb-12 scroll-mt-32">
    <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2">
      🔬 Kasiski-Test & Cryptanalyse
    </h3>
    
    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
      <p class="text-gray-700">
        Jahrhundertelang galt Vigenère als unknackbar. Doch im 19. Jahrhundert entwickelten Kryptographen (Charles Babbage, Friedrich Kasiski) Methoden, um auch diese Verschlüsselung zu brechen!
      </p>
    </div>

    <!-- Step 1: Key Length -->
    <div class="bg-white border-2 border-gray-300 rounded-lg p-4">
      <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span class="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
        Schlüssellänge finden (Kasiski-Test)
      </h4>
      <p class="text-gray-700 mb-3">
        Der <strong>Kasiski-Test</strong> sucht nach sich wiederholenden Sequenzen im Geheimtext. Wenn dieselbe Wortgruppe im Klartext zweimal vorkommt und mit demselben Teil des Schlüssels verschlüsselt wird, entsteht die gleiche verschlüsselte Sequenz!
      </p>

      <!-- Interactive Kasiski -->
      <div class="mt-4">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <label class="text-sm font-semibold text-gray-700">
            🔍 Geheimtext analysieren
          </label>
          <div class="flex gap-2">
            <button
              @click="loadExampleFromPublicTextFile"
              class="text-xs bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg font-semibold transition-colors"
            >
              🎯 Beispiel laden
            </button>
          </div>
        </div>
        <div class="relative">
          <textarea
            v-model="crackCiphertext"
            @input="crackCiphertext = crackCiphertext.toUpperCase().replace(/[^A-Z]/g, '')"
            placeholder="Gib einen längeren Geheimtext ein oder klicke auf Beispiel laden..."
            rows="4"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 text-sm font-mono focus:ring-2 focus:ring-purple-500 bg-orange-50 text-orange-700 font-bold"
          ></textarea>
          <button
            v-if="crackCiphertext"
            @click="copyToClipboard(crackCiphertext)"
            class="absolute right-2 top-2 p-2 hover:bg-orange-200 rounded transition-colors"
            title="Geheimtext kopieren"
          >
            📋
          </button>
        </div>

        <!-- Highlighted Ciphertext Display -->
        <div v-if="crackCiphertext.length > 20 && kasiskiRepeats.length > 0" class="mt-4">
          <div class="flex items-center justify-between mb-2">
            <h5 class="font-bold text-gray-700">📍 Geheimtext mit markierten Wiederholungen:</h5>
            <div class="flex items-center gap-2">
              <button
                @click="copyToClipboard(crackCiphertext)"
                class="px-2 py-1 hover:bg-gray-200 rounded transition-colors text-sm"
                title="Geheimtext kopieren"
              >
                📋
              </button>
              <button
                @click="previousRepeat"
                :disabled="currentRepeatIndex === 0"
                class="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm font-semibold"
              >
                ← Zurück
              </button>
              <span class="text-sm font-semibold text-gray-700">
                {{ currentRepeatIndex + 1 }} / {{ kasiskiRepeats.length }}
              </span>
              <button
                @click="nextRepeat"
                :disabled="currentRepeatIndex >= kasiskiRepeats.length - 1"
                class="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm font-semibold"
              >
                Weiter →
              </button>
            </div>
          </div>
          <div class="bg-white border-2 border-purple-300 rounded-lg p-4 font-mono text-sm leading-relaxed">
            <div class="whitespace-pre-wrap break-words">
              <span
                v-for="(char, index) in crackCiphertext"
                :key="'char-' + index"
                :class="getHighlightClass(index)"
                :title="getHighlightTooltip(index)"
              >{{ char }}</span>
            </div>
          </div>
          <div v-if="currentRepeat" class="mt-2 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-300 rounded-lg p-3">
            <div class="flex items-center gap-3">
              <span class="bg-yellow-300 text-yellow-900 px-3 py-1 rounded font-mono font-bold text-lg border border-yellow-600">
                {{ currentRepeat.sequence }}
              </span>
              <div class="text-sm text-gray-700">
                <p><strong>Vorkommen:</strong> {{ currentRepeat.positions.length }}× an Positionen {{ currentRepeat.positions.join(', ') }}</p>
                <p><strong>Abstände:</strong> {{ currentRepeat.spacings.join(', ') }}</p>
                <p><strong>Mögliche Schlüssellängen:</strong> <span class="font-mono font-semibold text-green-700">{{ currentRepeat.factors.join(', ') }}</span></p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="crackCiphertext.length > 20" class="mt-4">
          <h5 class="font-bold text-gray-700 mb-2">🔍 Alle gefundenen Wiederholungen ({{ kasiskiRepeats.length }}):</h5>
          <div v-if="kasiskiRepeats.length > 0" class="space-y-2">
            <div class="max-h-40 overflow-y-auto space-y-1 bg-gray-50 rounded-lg p-2">
              <button
                v-for="(repeat, index) in kasiskiRepeats"
                :key="'repeat-' + index"
                @click="currentRepeatIndex = index"
                :class="[
                  'w-full text-left px-3 py-2 rounded transition-colors text-sm',
                  currentRepeatIndex === index 
                    ? 'bg-purple-500 text-white font-bold' 
                    : 'bg-white hover:bg-purple-100 text-gray-700'
                ]"
              >
                <span class="font-mono font-bold">{{ repeat.sequence }}</span>
                <span class="text-xs ml-2 opacity-80">({{ repeat.positions.length }}× gefunden)</span>
              </button>
            </div>
            <div class="bg-green-50 border border-green-300 rounded-lg p-3 mt-3">
              <p class="font-bold text-green-800 mb-2">
                💡 Wahrscheinlichste Schlüssellänge: {{ estimatedKeyLength }}
              </p>
              <p class="text-xs text-gray-700">
                <strong>Erklärung:</strong> Diese Zahl erscheint als Teiler bei den meisten Wiederholungen.<br>
                Dies bedeutet, dass sich das Schlüsselwort wahrscheinlich alle {{ estimatedKeyLength }} Buchstaben wiederholt.
              </p>
            </div>
          </div>
          <div v-else class="text-gray-500 text-sm">
            Keine signifikanten Wiederholungen gefunden. Versuche einen längeren Text oder einen Text mit mehr Wiederholungen.
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2: Frequency Analysis -->
    <div class="bg-white border-2 border-gray-300 rounded-lg p-4">
      <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span class="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
        Häufigkeitsanalyse
      </h4>
      <p class="text-gray-700 mb-3">
        Sobald wir die Schlüssellänge kennen, können wir den Text in Gruppen aufteilen. Jede Gruppe wurde mit <em>demselben</em> Buchstaben verschlüsselt - das ist wie eine Caesar-Verschlüsselung!
      </p>

      <div v-if="crackCiphertext.length > 20 && estimatedKeyLength > 0" class="mt-4">
        <div class="mb-3">
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            📊 Vermutete Schlüssellänge: {{ estimatedKeyLength }}
          </label>
          <div class="flex gap-2 items-center">
            <button
              @click="analyzeFrequencies"
              class="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              🔬 Häufigkeitsanalyse durchführen
            </button>
          </div>
        </div>

        <div v-if="frequencyResults.length > 0" class="space-y-3">
          <div
            v-for="(result, index) in frequencyResults"
            :key="'freq-' + index"
            class="bg-gray-50 border border-gray-300 rounded p-3"
          >
            <h5 class="font-bold text-gray-700 mb-2">
              Position {{ index + 1 }} (jeder {{ estimatedKeyLength }}. Buchstabe)
            </h5>
            <div class="text-sm space-y-1">
              <p>
                <span class="text-gray-600">Häufigster Buchstabe:</span>
                <span class="font-mono font-bold text-purple-600 ml-2">{{ result.mostCommon }}</span>
              </p>
              <p>
                <span class="text-gray-600">Vermuteter Schlüsselbuchstabe:</span>
                <span class="font-mono font-bold text-green-600 ml-2">{{ result.keyLetter }}</span>
                <span class="text-xs text-gray-500 ml-2">(wenn {{ result.mostCommon }} = E verschlüsselt)</span>
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-4">
            <h5 class="font-bold text-gray-800 mb-2">🔑 Rekonstruierter Schlüssel:</h5>
            <div class="relative bg-white rounded p-3 mb-3">
              <p class="font-mono text-2xl font-bold text-purple-700 pr-10">
                {{ crackedKey }}
              </p>
              <button
                v-if="crackedKey"
                @click="copyToClipboard(crackedKey)"
                class="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded transition-colors"
                title="Schlüssel kopieren"
              >
                📋
              </button>
            </div>
            <button
              @click="applyCrackedKey"
              class="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              ✅ Schlüssel testen
            </button>
          </div>

          <div v-if="crackedPlaintext" class="bg-blue-50 border-2 border-blue-400 rounded-lg p-4">
            <div class="flex items-center justify-between mb-2">
              <h5 class="font-bold text-gray-800">📝 Entschlüsselter Text:</h5>
              <button
                @click="copyToClipboard(crackedPlaintext)"
                class="px-2 py-1 hover:bg-blue-200 rounded transition-colors text-sm"
                title="Klartext kopieren"
              >
                📋
              </button>
            </div>
            
            <!-- Decrypted text with highlights -->
            <div class="bg-white border-2 border-blue-300 rounded-lg p-4 font-mono text-sm leading-relaxed mb-4">
              <div class="whitespace-pre-wrap break-words">
                <span
                  v-for="(char, index) in crackedPlaintext"
                  :key="'plain-' + index"
                  :class="getPlaintextHighlightClass(index)"
                  :title="getPlaintextHighlightTooltip(index)"
                >{{ char }}</span>
              </div>
            </div>
            
            <p class="text-sm text-gray-600 mt-2">
              💡 Markierte Stellen zeigen, wo im Geheimtext Wiederholungen waren. Sieht das sinnvoll aus? Falls nicht, könnte die Schlüssellänge falsch sein oder der Text ist zu kurz für eine genaue Analyse.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Info Box -->
    <div class="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-4 rounded-r">
      <h4 class="font-bold text-gray-800 mb-2">🎓 Was lernen wir daraus?</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
        <li><strong>Vigenère ist knackbar</strong> - vor allem bei kurzen Schlüsseln oder langen Texten</li>
        <li><strong>Wiederholungen sind gefährlich</strong> - sie verraten die Struktur</li>
        <li><strong>Häufigkeitsanalyse funktioniert immer noch</strong> - nur komplexer</li>
        <li><strong>Je länger der Schlüssel, desto sicherer</strong> - aber auch schwerer zu merken!</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useKasiskiTest } from '@/composables/useVigenereCipher';

const {
  crackCiphertext,
  crackedKey,
  crackedPlaintext,
  frequencyResults,
  kasiskiRepeats,
  estimatedKeyLength,
  analyzeFrequencies,
  applyCrackedKey,
  loadExampleFromPublicTextFile
} = useKasiskiTest();

// Current repeat navigation
const currentRepeatIndex = ref(0);

// Get current repeat
const currentRepeat = computed(() => {
  if (kasiskiRepeats.value.length === 0) {
    return null;
  }
  // Make sure index is valid
  if (currentRepeatIndex.value >= kasiskiRepeats.value.length) {
    currentRepeatIndex.value = 0;
  }
  return kasiskiRepeats.value[currentRepeatIndex.value];
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
