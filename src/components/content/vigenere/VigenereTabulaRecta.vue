<template>
  <section id="intro" class="space-y-6 mb-12 scroll-mt-32">
    <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2">
      📚 Einführung & Tabula Recta
    </h3>

    <!-- Transition: The Solution -->
    <div
      class="bg-gradient-to-r from-yellow-50 to-green-50 border-2 border-green-400 p-4 sm:p-5 rounded-lg"
    >
      <h4 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span>💡</span>
        <span>Von monoalphabetisch zu polyalphabetisch</span>
      </h4>
      <p class="text-gray-700 mb-3">
        <strong>Die Idee von Blaise de Vigenère (16. Jahrhundert):</strong> Was wäre, wenn wir
        <em>mehrere</em>
        Caesar-Verschiebungen nacheinander verwenden?
      </p>
      <div class="space-y-2 text-sm text-gray-700">
        <p
          v-for="(advantage, index) in VIGENERE_TABULA_RECTA.polyalphabeticAdvantages"
          :key="'advantage-' + index"
          class="flex items-start gap-2"
        >
          <span class="font-bold text-lg">{{ advantage.icon }}</span>
          <span v-html="advantage.text"></span>
        </p>
      </div>
      <div class="mt-3 p-3 bg-purple-50 border border-purple-200 rounded">
        <p class="text-sm text-gray-700" v-html="VIGENERE_TABULA_RECTA.historicalFact"></p>
      </div>
    </div>

    <!-- Section 2: Caesar vs. Vigenère Comparison -->
    <VigenereComparison />

    <!-- Tabula Recta -->
    <div>
      <h4 class="text-xl font-bold text-gray-800 mb-3 pt-4">
        📊 Die Tabula Recta (Vigenère-Quadrat)
      </h4>
      <p class="text-gray-600 mb-4">
        Dies ist das Werkzeug für die Vigenère-Verschlüsselung. Jede Zeile ist eine
        Caesar-Verschiebung:
      </p>

      <div class="overflow-x-auto">
        <div class="inline-block min-w-full">
          <!-- Labels -->
          <div class="flex items-end mb-1 gap-1">
            <div class="text-xs font-bold text-gray-700 whitespace-nowrap pb-0.5">
              Schlüssel (Zeilen) →
            </div>
            <div class="flex-1 text-center">
              <span class="text-xs font-bold text-gray-700">Klartext (Spalten) ↓</span>
            </div>
          </div>

          <div class="flex text-xs sm:text-sm font-mono">
            <!-- Header row -->
            <div class="flex flex-col">
              <!-- Top-left corner cell -->
              <div
                class="w-8 h-8 flex items-center justify-center font-bold bg-gray-200 border border-gray-300"
              ></div>
              <!-- Row headers (Schlüssel) with highlighting -->
              <div
                v-for="(letter, index) in alphabet"
                :key="'row-header-' + letter"
                :class="[
                  'w-8 h-8 flex items-center justify-center font-bold border border-gray-300 transition-all cursor-pointer',
                  selectedRow === index
                    ? 'bg-purple-400 text-white scale-110 z-20'
                    : 'bg-purple-100 hover:bg-purple-200',
                ]"
                @click="handleRowHeaderClick(index)"
              >
                {{ letter }}
              </div>
            </div>

            <!-- Column headers and grid -->
            <div class="flex-1 overflow-x-auto">
              <!-- Column headers (Klartext) with highlighting -->
              <div class="flex">
                <div
                  v-for="(letter, index) in alphabet"
                  :key="'col-header-' + letter"
                  :class="[
                    'w-8 h-8 flex items-center justify-center font-bold border border-gray-300 transition-all cursor-pointer',
                    selectedCol === index
                      ? 'bg-blue-400 text-white scale-110 z-20'
                      : 'bg-blue-200 hover:bg-blue-300',
                  ]"
                  @click="handleColHeaderClick(index)"
                >
                  {{ letter }}
                </div>
              </div>

              <!-- Tabula Recta Grid -->
              <div v-for="(row, rowIndex) in alphabet" :key="'row-' + row" class="flex">
                <div
                  v-for="(_, colIndex) in alphabet"
                  :key="'cell-' + rowIndex + '-' + colIndex"
                  :class="[
                    'w-8 h-8 flex items-center justify-center border border-gray-300 transition-all cursor-pointer',
                    getCellClass(rowIndex, colIndex),
                  ]"
                  @click="handleCellClick(rowIndex, colIndex)"
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
              class="border-2 border-blue-400 rounded px-3 py-1 bg-blue-50 font-semibold text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
              class="border-2 border-purple-400 rounded px-3 py-1 bg-purple-50 font-semibold text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
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
            💡 <strong>So liest du die Tabelle:</strong> Finde deinen Klartext-Buchstaben ({{
              examplePlainChar
            }}) in der <em>obersten Zeile</em> und den Schlüssel-Buchstaben ({{ exampleKeyChar }})
            in der <em>linken Spalte</em>. Wo sich beide treffen, steht der verschlüsselte
            Buchstabe!
          </p>
        </div>
      </div>
    </div>

    <!-- Interactive Encryption Challenge -->
    <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
      <h4 class="font-bold text-gray-800 mb-3">
        🎯 Aufgabe 1: Verschlüssle "FUSSBALL" mit dem Schlüsselwort "OLE"
      </h4>

      <p class="text-gray-700 mb-4 text-sm">
        Nutze die Tabula Recta oben, um jeden Buchstaben zu verschlüsseln. Trage die
        Geheimtext-Buchstaben ein!
      </p>

      <!-- Table format with input fields -->
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
              <th class="text-center px-2 py-2 font-bold">7</th>
              <th class="text-center px-2 py-2 font-bold">8</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t-2 border-gray-200">
              <td class="text-gray-600 font-semibold py-2 pr-4">Klartext:</td>
              <td
                v-for="(char, index) in encryptionChallenge.plaintext"
                :key="'plain-' + index"
                class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50"
              >
                {{ char }}
              </td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="text-gray-600 font-semibold py-2 pr-4">Schlüssel:</td>
              <td
                v-for="(char, index) in encryptionChallenge.key"
                :key="'key-' + index"
                class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100"
              >
                {{ char }}
              </td>
            </tr>
            <tr class="border-t-2 border-gray-300">
              <td class="text-gray-600 font-semibold py-2 pr-4">Geheimtext:</td>
              <td
                v-for="(_, index) in encryptionChallenge.plaintext"
                :key="'cipher-' + index"
                class="text-center px-2 py-2"
              >
                <input
                  v-model="userCiphertext[index]"
                  type="text"
                  maxlength="1"
                  :class="[
                    'w-10 h-10 text-center font-bold uppercase border-2 rounded transition-all',
                    getCiphertextInputClass(index),
                  ]"
                  @input="handleCiphertextInput(index, $event)"
                  @keydown.backspace="handleBackspace(index, $event)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Feedback section -->
      <div v-if="showFeedback" class="mt-4">
        <div
          v-if="allCorrect"
          class="bg-green-50 border-2 border-green-400 rounded-lg p-4 text-center"
        >
          <p class="text-green-800 font-bold text-lg">
            🎉 Perfekt! Du hast alle Buchstaben richtig verschlüsselt!
          </p>
          <p class="text-green-700 text-sm mt-2">
            Der Geheimtext lautet: <span class="font-mono font-bold">TFWGMEZW</span>
          </p>
        </div>
        <div class="bg-blue-50 border border-blue-300 rounded-lg p-3">
          <p class="text-sm text-gray-700">
            <strong>💡 Tipp:</strong> Finde für jeden Buchstaben die richtige Zeile (Schlüssel) und
            Spalte (Klartext) in der Tabula Recta.
          </p>
          <p class="text-xs text-gray-600 mt-2">
            Beispiel: F (Klartext) + O (Schlüssel) = ? → Suche Zeile O und Spalte F
          </p>
        </div>
      </div>

      <div class="mt-4 flex gap-2">
        <button
          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          @click="checkEncryption"
        >
          ✓ Überprüfen
        </button>

        <button
          class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
          @click="resetEncryption"
        >
          ↻ Zurücksetzen
        </button>
      </div>
    </div>

    <!-- Interactive Decryption Challenge -->
    <div class="bg-pink-50 border border-pink-200 rounded-lg p-4">
      <h4 class="font-bold text-gray-800 mb-3">
        🔓 Aufgabe 2: Entschlüssle den Geheimtext "SIWTZC" mit dem Schlüsselwort "TOR"
      </h4>

      <p class="text-gray-700 mb-4 text-sm">
        Jetzt andersherum! Nutze die Tabula Recta, um den Geheimtext zu entschlüsseln. Suche in der
        Schlüsselzeile den Geheimtext-Buchstaben und schaue, welcher Klartext-Buchstabe darüber
        steht.
      </p>

      <!-- Table format with input fields for decryption -->
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
              <td class="text-gray-600 font-semibold py-2 pr-4">Geheimtext:</td>
              <td
                v-for="(char, index) in decryptionChallenge.ciphertext"
                :key="'cipher-' + index"
                class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-100"
              >
                {{ char }}
              </td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="text-gray-600 font-semibold py-2 pr-4">Schlüssel:</td>
              <td
                v-for="(char, index) in decryptionChallenge.key"
                :key="'dec-key-' + index"
                class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100"
              >
                {{ char }}
              </td>
            </tr>
            <tr class="border-t-2 border-gray-300">
              <td class="text-gray-600 font-semibold py-2 pr-4">Klartext:</td>
              <td
                v-for="(_, index) in decryptionChallenge.ciphertext"
                :key="'plain-' + index"
                class="text-center px-2 py-2"
              >
                <input
                  v-model="userPlaintext[index]"
                  type="text"
                  maxlength="1"
                  :class="[
                    'w-10 h-10 text-center font-bold uppercase border-2 rounded transition-all',
                    getPlaintextInputClass(index),
                  ]"
                  @input="handlePlaintextInput(index, $event)"
                  @keydown.backspace="handleDecryptionBackspace(index, $event)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Feedback section for decryption -->
      <div v-if="showDecryptionFeedback" class="mt-4">
        <div
          v-if="allDecryptionCorrect"
          class="bg-green-50 border-2 border-green-400 rounded-lg p-4 text-center"
        >
          <p class="text-green-800 font-bold text-lg">
            🎉 Ausgezeichnet! Du hast den Text perfekt entschlüsselt!
          </p>
          <p class="text-green-700 text-sm mt-2">
            Der Klartext lautet: <span class="font-mono font-bold">ZUFALL</span>
          </p>
        </div>
        <div v-else class="bg-blue-50 border border-blue-300 rounded-lg p-3">
          <p class="text-sm text-gray-700">
            <strong>💡 Tipp zum Entschlüsseln:</strong> Suche in der Zeile des Schlüsselbuchstabens
            nach dem Geheimtext-Buchstaben. Der Klartext steht in der obersten Zeile darüber!
          </p>
          <p class="text-xs text-gray-600 mt-2">
            Beispiel: S (Geheimtext) mit Schlüssel T → Suche S in Zeile T, schaue nach oben → Z
          </p>
        </div>
      </div>

      <div class="mt-4 flex gap-2">
        <button
          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          @click="checkDecryption"
        >
          ✓ Überprüfen
        </button>

        <button
          class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
          @click="resetDecryption"
        >
          ↻ Zurücksetzen
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useVigenereCipher } from '@/composables/useVigenereCipher';
import { VIGENERE_ALPHABET, VIGENERE_TABULA_RECTA } from '@/constants/vigenere';
import VigenereComparison from './VigenereComparison.vue';

const { encryptChar, getVigenereChar } = useVigenereCipher();
const alphabet = VIGENERE_ALPHABET;

const examplePlainChar = ref('F');
const exampleKeyChar = ref('O');

// Tabula Recta click state
const selectedRow = ref<number | null>(alphabet.indexOf('O'));
const selectedCol = ref<number | null>(alphabet.indexOf('F'));

// Watch for changes in dropdowns to update table selection
watch(examplePlainChar, newVal => {
  selectedCol.value = alphabet.indexOf(newVal);
});

watch(exampleKeyChar, newVal => {
  selectedRow.value = alphabet.indexOf(newVal);
});

// Encryption challenge state
const encryptionChallenge = {
  plaintext: ['F', 'U', 'S', 'S', 'B', 'A', 'L', 'L'],
  key: ['O', 'L', 'E', 'O', 'L', 'E', 'O', 'L'],
  correctCiphertext: ['T', 'F', 'W', 'G', 'M', 'E', 'Z', 'W'],
};

const userCiphertext = ref<string[]>(new Array(encryptionChallenge.plaintext.length).fill(''));
const showFeedback = ref(false);
const checkedOnce = ref(false);

const allCorrect = computed(() => {
  if (!checkedOnce.value) return false;
  return encryptionChallenge.correctCiphertext.every(
    (char, index) => userCiphertext.value[index].toUpperCase() === char
  );
});

// Decryption challenge state
const decryptionChallenge = {
  ciphertext: ['S', 'I', 'W', 'T', 'Z', 'C'],
  key: ['T', 'O', 'R', 'T', 'O', 'R'],
  correctPlaintext: ['Z', 'U', 'F', 'A', 'L', 'L'],
};

const userPlaintext = ref<string[]>(new Array(decryptionChallenge.ciphertext.length).fill(''));
const showDecryptionFeedback = ref(false);
const checkedDecryptionOnce = ref(false);

const allDecryptionCorrect = computed(() => {
  if (!checkedDecryptionOnce.value) return false;
  return decryptionChallenge.correctPlaintext.every(
    (char, index) => userPlaintext.value[index].toUpperCase() === char
  );
});

function isHighlightedCell(row: number, col: number): boolean {
  const plainIndex = alphabet.indexOf(examplePlainChar.value);
  const keyIndex = alphabet.indexOf(exampleKeyChar.value);
  return row === keyIndex && col === plainIndex;
}

// Tabula Recta click handlers
function handleCellClick(rowIndex: number, colIndex: number): void {
  selectedRow.value = rowIndex;
  selectedCol.value = colIndex;
  // Sync with interactive example
  exampleKeyChar.value = alphabet[rowIndex];
  examplePlainChar.value = alphabet[colIndex];
}

function handleRowHeaderClick(rowIndex: number): void {
  if (selectedRow.value === rowIndex) {
    // Toggle off if clicking the same row
    selectedRow.value = null;
  } else {
    selectedRow.value = rowIndex;
    // Sync with interactive example
    exampleKeyChar.value = alphabet[rowIndex];
  }
}

function handleColHeaderClick(colIndex: number): void {
  if (selectedCol.value === colIndex) {
    // Toggle off if clicking the same column
    selectedCol.value = null;
  } else {
    selectedCol.value = colIndex;
    // Sync with interactive example
    examplePlainChar.value = alphabet[colIndex];
  }
}

function getCellClass(rowIndex: number, colIndex: number): string {
  const isSelected = selectedRow.value === rowIndex && selectedCol.value === colIndex;
  const isInSelectedRow = selectedRow.value === rowIndex && selectedCol.value !== null;
  const isInSelectedCol = selectedCol.value === colIndex && selectedRow.value !== null;
  const isHighlighted = isHighlightedCell(rowIndex, colIndex);

  if (isSelected) {
    return 'bg-orange-400 text-white font-bold scale-110 z-30 shadow-lg';
  }
  if (isInSelectedRow || isInSelectedCol) {
    return 'bg-orange-200 font-semibold z-20';
  }
  if (isHighlighted) {
    return 'bg-orange-300 font-bold scale-110 z-10';
  }
  return 'bg-white hover:bg-gray-200';
}

// Encryption challenge functions
function getCiphertextInputClass(index: number): string {
  const userInput = userCiphertext.value[index].toUpperCase();
  const correctChar = encryptionChallenge.correctCiphertext[index];

  if (!checkedOnce.value || userInput === '') {
    return 'border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200';
  }

  if (userInput === correctChar) {
    return 'border-green-500 bg-green-50 text-green-700';
  }

  return 'border-red-500 bg-red-50 text-red-700';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleCiphertextInput(index: number, event: any): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const input = event.target as any;
  const value = input.value.toUpperCase();

  // Only allow letters
  if (value && !/^[A-Z]$/.test(value)) {
    userCiphertext.value[index] = '';
    return;
  }

  userCiphertext.value[index] = value;

  // Auto-focus next input
  if (value && index < encryptionChallenge.plaintext.length - 1) {
    const nextInput = input.parentElement?.nextElementSibling?.querySelector('input');
    if (nextInput) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (nextInput as any).focus();
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleBackspace(index: number, event: any): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const input = event.target as any;

  // If input is empty and backspace is pressed, go to previous input
  if (input.value === '' && index > 0) {
    event.preventDefault();
    const prevInput = input.parentElement?.previousElementSibling?.querySelector('input');
    if (prevInput) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (prevInput as any).focus();
    }
  }
}

function checkEncryption(): void {
  checkedOnce.value = true;
  showFeedback.value = true;
}

function showEncryptionSolution(): void {
  userCiphertext.value = [...encryptionChallenge.correctCiphertext];
  checkedOnce.value = true;
  showFeedback.value = true;
}

function resetEncryption(): void {
  userCiphertext.value = new Array(encryptionChallenge.plaintext.length).fill('');
  showFeedback.value = false;
  checkedOnce.value = false;
}

// Decryption challenge functions
function getPlaintextInputClass(index: number): string {
  const userInput = userPlaintext.value[index].toUpperCase();
  const correctChar = decryptionChallenge.correctPlaintext[index];

  if (!checkedDecryptionOnce.value || userInput === '') {
    return 'border-gray-300 bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200';
  }

  if (userInput === correctChar) {
    return 'border-green-500 bg-green-50 text-green-700';
  }

  return 'border-red-500 bg-red-50 text-red-700';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handlePlaintextInput(index: number, event: any): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const input = event.target as any;
  const value = input.value.toUpperCase();

  // Only allow letters
  if (value && !/^[A-Z]$/.test(value)) {
    userPlaintext.value[index] = '';
    return;
  }

  userPlaintext.value[index] = value;

  // Auto-focus next input
  if (value && index < decryptionChallenge.ciphertext.length - 1) {
    const nextInput = input.parentElement?.nextElementSibling?.querySelector('input');
    if (nextInput) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (nextInput as any).focus();
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleDecryptionBackspace(index: number, event: any): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const input = event.target as any;

  // If input is empty and backspace is pressed, go to previous input
  if (input.value === '' && index > 0) {
    event.preventDefault();
    const prevInput = input.parentElement?.previousElementSibling?.querySelector('input');
    if (prevInput) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (prevInput as any).focus();
    }
  }
}

function checkDecryption(): void {
  checkedDecryptionOnce.value = true;
  showDecryptionFeedback.value = true;
}

function showDecryptionSolution(): void {
  userPlaintext.value = [...decryptionChallenge.correctPlaintext];
  checkedDecryptionOnce.value = true;
  showDecryptionFeedback.value = true;
}

function resetDecryption(): void {
  userPlaintext.value = new Array(decryptionChallenge.ciphertext.length).fill('');
  showDecryptionFeedback.value = false;
  checkedDecryptionOnce.value = false;
}
</script>
