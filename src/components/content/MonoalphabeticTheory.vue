<template>
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
      <div class="flex items-center mb-4">
        <span class="text-5xl mr-4">🎲</span>
        <div>
          <h1 class="text-3xl sm:text-4xl font-bold text-primary-900 mb-2">
            Zufällige Monoalphabetische Substitution
          </h1>
          <p class="text-lg text-gray-600">Sicherer als Caesar - aber trotzdem knackbar!</p>
        </div>
      </div>
    </div>

    <!-- Materials Section -->
    <MaterialList :materials="topic?.materials" />

    <!-- Was ist das? -->
    <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
      <h2 class="text-2xl font-bold text-primary-900 mb-4 flex items-center">
        Was ist zufällige monoalphabetische Substitution?
      </h2>
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-700 leading-relaxed mb-4">
          Bei der <strong>zufälligen monoalphabetischen Substitution</strong> wird jedem Buchstaben
          des Alphabets ein <strong>zufälliger anderer Buchstabe</strong> zugeordnet - nicht nur
          eine einfache Verschiebung wie bei Caesar.
        </p>

        <div class="bg-gray-50 rounded-lg p-6 my-6">
          <p class="font-semibold text-gray-900 mb-3">Beispiel eines zufälligen Alphabets:</p>
          <div class="font-mono text-sm space-y-2">
            <div class="bg-white p-3 rounded">
              <span class="text-blue-600 font-bold">Klartext-Alphabet:</span><br />
              <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
            </div>
            <div class="bg-white p-3 rounded">
              <span class="text-red-600 font-bold">Geheim-Alphabet:</span><br />
              <span>Q W E R T Y U I O P A S D F G H J K L Z X C V B N M</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-3">
            Jeder Buchstabe wird eindeutig einem anderen zugeordnet - aber nicht systematisch!
          </p>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p class="text-blue-900 font-semibold">💡 Vorteil gegenüber Caesar</p>
          <p class="text-blue-800 mt-2">
            Caesar hat nur <strong>25 mögliche Schlüssel</strong> (Verschiebungen 1-25). <br />
            Zufällige Substitution hat
            <strong
              >26! = 26 × 25 × 24 × ... × 3 × 2 × 1 = 403'291'461'126'605'635'584'000'000
              Möglichkeiten</strong
            >!
          </p>
        </div>
      </div>
    </div>

    <!-- Interaktiver Bereich -->
    <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
      <h2 class="text-2xl font-bold text-primary-900 mb-4 flex items-center">
        <span class="text-3xl mr-3">✍️</span>
        Probiere es selbst!
      </h2>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2"> Dein Text: </label>
          <input
            v-model="inputText"
            type="text"
            placeholder="Gib einen Text ein..."
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-lg uppercase"
            @input="encrypt"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Verschlüsselter Text:
          </label>
          <div
            class="w-full px-4 py-3 bg-red-50 border-2 border-red-300 rounded-lg text-lg font-mono min-h-[3rem] flex items-center"
          >
            {{ encryptedText || 'Verschlüsselter Text erscheint hier...' }}
          </div>
        </div>

        <button
          class="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          @click="generateNewKey"
        >
          🎲 Neues zufälliges Alphabet generieren
        </button>

        <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <p class="text-sm font-semibold text-purple-900 mb-2">
            Aktuelles Substitutions-Alphabet:
          </p>
          <div class="bg-white rounded p-3 font-mono text-xs overflow-x-auto">
            <div class="whitespace-nowrap">
              {{ displayKey }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Häufigkeitsanalyse -->
    <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
      <h2 class="text-2xl font-bold text-primary-900 mb-4 flex items-center">
        <span class="text-3xl mr-3">📊</span>
        Die Schwachstelle: Häufigkeitsanalyse
      </h2>

      <div class="space-y-4">
        <p class="text-gray-700 leading-relaxed">
          Obwohl es so viele mögliche Schlüssel gibt, ist diese Verschlüsselung
          <strong>nicht sicher</strong>! Der Grund: <strong>Häufigkeitsanalyse</strong>.
        </p>

        <div class="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
          <h3 class="font-bold text-orange-900 mb-3">Wie funktioniert Häufigkeitsanalyse?</h3>
          <ol class="space-y-3 text-orange-800">
            <li class="flex items-start">
              <span class="font-bold mr-2">1.</span>
              <span>Zähle, wie oft jeder Buchstabe im Geheimtext vorkommt</span>
            </li>
            <li class="flex items-start">
              <span class="font-bold mr-2">2.</span>
              <span>Vergleiche mit bekannten Häufigkeiten der Sprache (z.B. Deutsch)</span>
            </li>
            <li class="flex items-start">
              <span class="font-bold mr-2">3.</span>
              <span>Der häufigste Buchstabe ist <strong>E</strong> (17% im Deutschen)</span>
            </li>
            <li class="flex items-start">
              <span class="font-bold mr-2">4.</span>
              <span>Schau dir die nächst häufigsten Buchstaben an</span>
            </li>
            <li class="flex items-start">
              <span class="font-bold mr-2">5.</span>
              <span>Durch Probieren und Mustererkennung den Rest entschlüsseln</span>
            </li>
          </ol>
        </div>

        <div class="bg-blue-50 rounded-lg p-5">
          <h3 class="font-bold text-blue-900 mb-3">📈 Buchstabenhäufigkeit im Deutschen</h3>
          <p class="text-blue-800 mb-4">
            Jeder Buchstabe kommt in der deutschen Sprache unterschiedlich häufig vor. Das
            <strong>E</strong> ist mit ~17% der häufigste Buchstabe, gefolgt von
            <strong>N</strong> (~10%) und <strong>I</strong> (~8%).
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <a
              href="https://de.wikipedia.org/wiki/Buchstabenhäufigkeit"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-4 py-3 bg-white rounded-lg border-2 border-blue-300 text-blue-700 font-semibold hover:bg-blue-100 hover:border-blue-400 transition-all text-center"
            >
              <span>Häufigkeitstabelle Deutsch 🇩🇪 </span>
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Letter_frequency"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-4 py-3 bg-white rounded-lg border-2 border-blue-300 text-blue-700 font-semibold hover:bg-blue-100 hover:border-blue-400 transition-all text-center"
            >
              <span>Häufigkeitstabelle Englisch 🇬🇧</span>
            </a>
          </div>
          <p class="text-sm text-blue-700 mt-3">
            💡 Bei der Substitution wird zwar jeder Buchstabe durch einen anderen ersetzt, aber das
            <strong>Häufigkeitsmuster bleibt erhalten</strong> - der häufigste Buchstabe im
            Geheimtext entspricht wahrscheinlich dem <strong>E</strong> im Klartext!
          </p>
        </div>
      </div>
    </div>

    <!-- Interactive Frequency Analysis -->
    <FrequencyAnalysis />

    <!-- Sources -->
    <Sources :sources="MONOALPHABETIC_SOURCES" />

    <!-- Weiter Button -->
    <div class="flex justify-center mt-8">
      <button
        class="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        @click="$emit('back')"
      >
        Zurück zur Übersicht
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import MaterialList from '../ui/MaterialList.vue';
import FrequencyAnalysis from './monoalphabetic/FrequencyAnalysis.vue';
import Sources from '../ui/Sources.vue';
import { MONOALPHABETIC_SOURCES } from '@/constants/monoalphabetic';
import type { Topic } from '../../types/curriculum';

defineProps<{
  topic?: Topic | null;
}>();

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// State
const inputText = ref('');
const encryptedText = ref('');
const substitutionKey = ref<string[]>([]);

// Initialize with a random key
const generateNewKey = () => {
  const chars = ALPHABET.split('');
  // Fisher-Yates shuffle
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  substitutionKey.value = chars;
  encrypt();
};

// Display the key in a readable format
const displayKey = computed(() => {
  if (substitutionKey.value.length === 0) return '';
  return ALPHABET.split('')
    .map((char, i) => `${char}→${substitutionKey.value[i]}`)
    .join(' ');
});

// Encrypt the input text
const encrypt = () => {
  if (substitutionKey.value.length === 0) {
    generateNewKey();
    return;
  }

  const text = inputText.value.toUpperCase();
  let result = '';

  for (const char of text) {
    const index = ALPHABET.indexOf(char);
    if (index !== -1) {
      result += substitutionKey.value[index];
    } else {
      result += char; // Keep non-alphabetic characters
    }
  }

  encryptedText.value = result;
};

// Initialize
generateNewKey();
</script>

<style scoped>
.prose {
  max-width: none;
}

input:focus {
  outline: none;
}
</style>
