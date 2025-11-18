<template>
  <section class="mb-8">
    <h3 class="text-xl font-bold text-gray-800 mb-4">🎲 One-Time-Pad (OTP)</h3>

    <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6 rounded-r">

      <p class="text-gray-700 mb-3">
        Das <strong>One-Time-Pad</strong> ist das einzige mathematisch beweisbar
        <strong>unknackbare</strong>
        Verschlüsselungsverfahren. Es verwendet die <strong>XOR</strong> Operation, um eine
        Nachricht mit einem
        <strong>zufälligen</strong>
        Schlüssel (One-Time-Pad) zu ver- und entschlüsseln.
      </p>
    </div>

    <!-- Security Requirements -->
    <div
      class="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6 mb-6 shadow-sm"
    >
      <h4 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span class="text-2xl">🔐</span>
        <span>Drei essenzielle Sicherheitsbedingungen für OTP</span>
      </h4>

      <div class="space-y-4">
        <div class="bg-white rounded-lg p-4 border-l-4 border-green-500 shadow-sm">
          <div class="flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">🎲</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">1. Echter Zufall</p>
              <p class="text-gray-700">
                Der Schlüssel muss <strong>vollständig zufällig</strong> sein - keine Muster, keine
                Vorhersagbarkeit!
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-sm">
          <div class="flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">📏</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">2. Schlüssel = Nachricht</p>
              <p class="text-gray-700">
                Der Schlüssel muss <strong>genau so lang</strong> wie die Nachricht sein.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg p-4 border-l-4 border-red-500 shadow-sm">
          <div class="flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">☝️</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">3. Nur EINMAL verwenden!</p>
              <p class="text-gray-700">
                Jeder Schlüssel darf <strong>nur für eine einzige Nachricht</strong> verwendet
                werden - wie der Name sagt!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
        <p class="text-sm text-green-800 font-medium text-center">
          Nur wenn <strong>ALLE drei Bedingungen</strong> erfüllt sind, ist die Verschlüsselung
          unknackbar!
        </p>
      </div>
    </div>

    <!-- Decryption Exercise -->
    <div class="bg-white border-2 border-blue-200 rounded-lg p-6 mt-6 mb-4">
      <h4 class="font-bold text-gray-800 mb-4">
        🎯 Aufgabe: Entschlüssle den Geheimtext mit dem One-Time Pad (XOR)
      </h4>

      <div class="space-y-6">
        <!-- Given: Encrypted + Key + Input all together -->

        <div class="font-mono bg-white p-4 rounded border border-gray-200 overflow-x-auto">
          <div class="flex flex-col items-center space-y-2 min-w-fit">
            <!-- Geheimtext Label -->
            <div class="text-sm text-gray-600 mb-1">
              Geheimtext (ASCII-codiertes, OTP-verschlüsseltes, 3 Buchstaben langes Wort):
            </div>

            <!-- Encrypted Bits -->
            <div class="flex gap-3">
              <div
                v-for="(encrypted, charIndex) in decryptTask.encrypted"
                :key="`enc-${charIndex}`"
                class="flex gap-1"
              >
                <span
                  v-for="(bit, i) in encrypted.split('')"
                  :key="i"
                  class="text-orange-600 font-bold text-lg w-6 text-center"
                  >{{ bit }}</span
                >
              </div>
            </div>

            <!-- XOR Label -->
            <div class="text-sm text-gray-600 mt-2 mb-1">Schlüssel (OTP):</div>

            <!-- OTP Key Bits -->
            <div class="flex gap-3">
              <div
                v-for="(key, charIndex) in decryptTask.key"
                :key="`key-${charIndex}`"
                class="flex gap-1"
              >
                <span
                  v-for="(bit, i) in key.split('')"
                  :key="i"
                  class="text-purple-600 font-bold text-lg w-6 text-center"
                  >{{ bit }}</span
                >
              </div>
            </div>

            <!-- Result Label -->
            <div class="text-sm text-gray-600 mb-1 pt-3">Ergebnis (Klartext ASCII-codiert):</div>

            <!-- Result Input -->
            <div class="flex gap-3">
              <div
                v-for="(encrypted, charIndex) in decryptTask.encrypted"
                :key="`input-${charIndex}`"
                class="flex gap-1"
              >
                <input
                  v-for="bitIndex in 8"
                  :key="bitIndex"
                  v-model="decryptAscii[charIndex][bitIndex - 1]"
                  type="text"
                  maxlength="1"
                  class="w-6 h-9 text-center font-bold text-lg border-2 rounded focus:outline-none focus:ring-2"
                  :class="getDecryptAsciiClass(charIndex, bitIndex - 1)"
                  @input="validateDecryptAscii(charIndex, bitIndex - 1)"
                />
              </div>
            </div>

            <!-- Text Verification -->
            <div v-if="isDecryptAsciiComplete" class="mt-4 pt-4 border-t border-gray-300">
              <div class="text-sm text-gray-600 mb-2">
                Klartext (Text) Schlage die ASCII Codierung z. B.
                <a
                  href="https://mint.gymburgdorf.ch/BitsAndBytes/encoding_text.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:text-blue-800 underline"
                  >hier</a
                >
                nach:
              </div>
              <div class="flex justify-center">
                <input
                  v-model="decryptedWord"
                  type="text"
                  maxlength="3"
                  placeholder="???"
                  class="px-4 py-2 text-lg font-bold border-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 uppercase text-center"
                  :class="getDecryptedWordClass()"
                  @input="validateDecryptedWord"
                />
              </div>
            </div>

            <!-- Success Message -->
            <transition name="fade">
              <div v-if="isDecryptedWordCorrect" class="mt-4">
                <div class="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                  <p class="font-bold text-green-800 text-center">
                    🎉 Perfekt! Das Wort ist "{{ decryptTask.plaintext }}"!
                  </p>
                  <p class="text-sm text-green-700 mt-2 text-center">
                    Du hast erfolgreich entschlüsselt und decodiert! 🔓
                  </p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

/**
 * One-Time-Pad Interactive Component
 */

// ===== DECRYPTION EXERCISE =====
const decryptTask = {
  plaintext: 'Bob',
  encrypted: ['10010010', '00111110', '10011011'],
  key: ['11010000', '01010001', '10011001'],
};

// Calculate correct decrypted ASCII
const correctDecryptAscii = decryptTask.encrypted.map((enc, i) => {
  return enc
    .split('')
    .map((bit, j) => (bit === decryptTask.key[i][j] ? '0' : '1'))
    .join('');
});

// User inputs for decryption
const decryptAscii = ref<string[][]>(
  Array(3)
    .fill(null)
    .map(() => Array(8).fill(''))
);
const decryptedWord = ref('');

// Validate decrypt ASCII
const validateDecryptAscii = (charIndex: number, bitIndex: number) => {
  const value = decryptAscii.value[charIndex][bitIndex];
  if (value !== '' && value !== '0' && value !== '1') {
    decryptAscii.value[charIndex][bitIndex] = '';
  }
};

// Check if a byte (8 bits = 1 character) is complete
const isByteComplete = (charIndex: number): boolean => {
  return decryptAscii.value[charIndex].every(bit => bit !== '');
};

// Check if a byte is correct
const isByteCorrect = (charIndex: number): boolean => {
  if (!isByteComplete(charIndex)) return false;
  return decryptAscii.value[charIndex].every((bit, i) => bit === correctDecryptAscii[charIndex][i]);
};

// Get decrypt ASCII class
const getDecryptAsciiClass = (charIndex: number, bitIndex: number): string => {
  const userBit = decryptAscii.value[charIndex][bitIndex];
  if (userBit === '') return 'border-gray-300 bg-white';

  // Only show green if the entire byte (all 8 bits of this character) is complete and correct
  if (isByteComplete(charIndex) && isByteCorrect(charIndex)) {
    return 'border-green-500 bg-green-50 text-green-700';
  }

  // Otherwise show neutral
  return 'border-gray-300 bg-white';
};

// Check if decrypt ASCII is complete
const isDecryptAsciiComplete = computed(() => {
  return decryptAscii.value.every(row => row.every(bit => bit !== ''));
});

// Validate decrypted word
const validateDecryptedWord = () => {
  decryptedWord.value = decryptedWord.value.toUpperCase().replace(/[^A-Z]/g, '');
};

// Get decrypted word class
const getDecryptedWordClass = (): string => {
  if (decryptedWord.value === '') return 'border-gray-300';
  return decryptedWord.value === decryptTask.plaintext
    ? 'border-green-500 bg-green-50 text-green-700'
    : 'border-red-300 bg-red-50 text-red-700';
};

// Check if decrypted word is correct
const isDecryptedWordCorrect = computed(() => {
  return decryptedWord.value === decryptTask.plaintext;
});
</script>

<style scoped>
code {
  font-family: 'Courier New', Courier, monospace;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
