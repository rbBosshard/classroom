<template>
  <header class="mb-6 sm:mb-8">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
      🚀 Moderne Verschlüsselung
    </h2>

    <div
      class="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 sm:p-6 mb-4 sm:mb-6 rounded-r"
    >
      <p class="text-gray-800 text-lg pb-2">
        Im Gegensatz zu historischen Methoden (z. B. Skytale, Caesar, Vigenère oder Enigma) arbeiten
        <strong>moderne Verschlüsselungsverfahren</strong> nicht mehr mit einzelnen Buchstaben,
        sondern direkt mit <strong>Bits</strong>.
      </p>
      <p>
        Da sich sämtliche digitale Informationen in Bits codieren lassen, können moderne Verfahren
        beliebige Daten verschlüsseln – egal ob Text, Bilder, Videos oder andere Formate. Welche
        Bedeutung eine bestimmte Bitfolge hat, hängt allein von ihrer Codierung ab. Um zu verstehen,
        was moderne Verschlüsselung tatsächlich leistet, lohnt sich daher nochmals ein Blick auf den
        Unterschied zwischen Codierung und Verschlüsselung.
      </p>
    </div>

    <!-- Encoding vs Encryption Explanation -->
    <div class="bg-white rounded-lg p-4 sm:p-6 border-2 border-blue-200 mb-4">
      <h3 class="text-xl font-bold text-gray-800 mb-4">
        Codierung vs. Verschlüsselung – Was ist der Unterschied?
      </h3>

      <div class="grid md:grid-cols-2 gap-4">
        <!-- Encoding -->
        <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
          <h4 class="font-bold text-green-800 mb-2 flex items-center gap-2">
            <span>📝</span>
            <span>Codierung = Format ändern</span>
          </h4>
          <p class="text-gray-700 mb-3">
            <strong>Zweck:</strong> Information in ein anderes Format umwandeln, damit Computer sie
            effizient verarbeiten können.
          </p>

          <p class="text-gray-600 mt-3 text-sm">
            <strong>Jeder</strong> kann das zurückverwandeln – es ist
            <strong>kein Geheimnis</strong>!
          </p>
        </div>

        <!-- Encryption -->
        <div class="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <h4 class="font-bold text-orange-800 mb-2 flex items-center gap-2">
            <span>🔐</span>
            <span>Verschlüsselung = Geheimhaltung</span>
          </h4>
          <p class="text-gray-700 mb-3">
            <strong>Zweck:</strong> Information so verändern, dass nur jemand mit dem
            <strong>Schlüssel</strong> sie lesen kann.
          </p>

          <p class="text-gray-600 mt-3 text-sm">
            <strong>Nur mit dem Schlüssel</strong> kann man das Original wiederherstellen!
          </p>
        </div>
      </div>

      <!-- Process Flow Exercise -->
      <div
        class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 sm:p-6 border-2 border-indigo-300 mt-4"
      >
        <h4 class="font-bold text-indigo-900 mb-4 text-lg flex items-center gap-2">
          <span>🎯</span>
          <span>Aufgabe: Nachricht versenden - der komplette Prozess </span>
        </h4>

        <div class="bg-white rounded-lg p-4 mb-4 border-l-4 border-indigo-500">
          <p class="text-gray-700">
            <strong>Szenario:</strong> Alice möchte Bob eine geheime Nachricht über das Internet
            schicken.
          </p>
        </div>

        <p class="text-gray-700 mb-4">
          <strong>Klicke auf die Schritte, um sie in die richtige Reihenfolge zu bringen!</strong>
        </p>

        <!-- Available Steps (to click) -->
        <div v-if="availableSteps.length > 0" class="mb-6">
          <div class="bg-white rounded-lg p-4 border-2 border-gray-300">
            <h5 class="text-sm font-bold text-gray-600 mb-3">
              📦 Verfügbare Schritte (klicke zum Hinzufügen):
            </h5>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="step in availableSteps"
                :key="step.id"
                class="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all cursor-pointer shadow-sm hover:shadow-md"
                @click="addStepToSequence(step)"
              >
                <div class="flex items-center gap-2">
                  <span class="text-lg">{{ step.icon }}</span>
                  <div class="text-left">
                    <div class="font-semibold text-gray-800 text-sm">{{ step.title }}</div>
                    <div class="text-xs text-gray-600">{{ step.description }}</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Current Sequence -->
        <div class="bg-white rounded-lg p-4 border-2 border-indigo-400 mb-4">
          <h5 class="text-sm font-bold text-indigo-700 mb-3">🎯 Deine Reihenfolge:</h5>

          <div v-if="selectedSequence.length === 0" class="text-center py-8 text-gray-400">
            Noch keine Schritte ausgewählt. Klicke oben auf einen Schritt!
          </div>

          <div v-else class="space-y-2">
            <template v-for="(step, index) in selectedSequence" :key="`selected-${index}`">
              <div
                class="flex items-center gap-3 bg-gradient-to-r from-white to-gray-50 p-3 rounded-lg border-2"
                :class="getStepBorderClass(step)"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold"
                >
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <span class="text-lg">{{ step.icon }}</span>
                    <div class="font-semibold text-gray-800">{{ step.title }}</div>
                  </div>
                  <div class="text-sm text-gray-600">{{ step.description }}</div>
                </div>
                <button
                  class="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors flex items-center justify-center font-bold"
                  title="Entfernen"
                  @click="removeStepFromSequence(index)"
                >
                  ×
                </button>
              </div>

              <!-- Arrows between steps -->
              <div v-if="index < selectedSequence.length - 1" class="flex justify-center">
                <div class="text-2xl text-indigo-400">↓</div>
              </div>
            </template>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-center gap-3 mb-4">
          <button
            v-if="selectedSequence.length > 0"
            class="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
            @click="clearSequence"
          >
            🔄 Zurücksetzen
          </button>
          <button
            v-if="selectedSequence.length === 7"
            class="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
            @click="checkSequence"
          >
            ✓ Überprüfen
          </button>
        </div>

        <!-- Feedback -->
        <div v-if="showFeedback" class="mb-4">
          <div
            v-if="isSequenceCorrect"
            class="bg-green-100 border-2 border-green-500 rounded-lg p-4"
          >
            <p class="text-green-800 font-bold text-lg text-center mb-3">
              🎉 Perfekt! Alle Schritte sind in der richtigen Reihenfolge!
            </p>
          </div>
          <div v-else class="bg-red-100 border-2 border-red-500 rounded-lg p-4 text-center">
            <p class="text-red-800 font-semibold text-lg mb-2">❌ Noch nicht ganz richtig!</p>
            <p class="text-red-700 text-sm">Schau dir die Reihenfolge nochmal an.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-3 text-gray-700">
      <!-- XOR Introduction -->
      <div
        class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 sm:p-6 mt-4 border-2 border-yellow-400"
      >
        <h4 class="font-bold text-gray-800 mb-3 text-lg flex items-center gap-2">
          <span>⊕</span>
          <span>Die XOR-Operation – Das Herzstück moderner Verschlüsselung</span>
        </h4>

        <p class="text-gray-700 mb-4">
          Um Bits miteinander zu <strong>verknüpfen</strong> und zu verschlüsseln, verwenden moderne
          Verfahren die <strong>XOR-Operation</strong> (Symbol: ⊕). XOR steht für "Exclusive OR" und
          ist eine mathematisch logische Operation, die zwei Bits miteinander vergleicht:
        </p>

        <div class="bg-white rounded-lg p-4 mb-4 border-2 border-orange-300">
          <h5 class="font-bold text-gray-800 mb-3">XOR-Wahrheitstabelle:</h5>
          <div class="max-w-md mx-auto">
            <!-- Header Row -->
            <div class="flex items-center gap-3 mb-3">
              <div class="flex-1 font-bold text-center bg-gray-100 p-2 rounded">Bit A</div>
              <div class="flex-1 font-bold text-center bg-gray-100 p-2 rounded">Bit B</div>
              <div class="text-2xl text-gray-400 px-2">→</div>
              <div class="flex-1 font-bold text-center bg-orange-100 p-2 rounded">A ⊕ B</div>
            </div>

            <!-- Data Rows with arrows -->
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <div class="flex-1 text-center p-2 border rounded bg-white">0</div>
                <div class="flex-1 text-center p-2 border rounded bg-white">0</div>
                <div class="text-2xl text-orange-400 px-2">→</div>
                <div class="flex-1 text-center p-2 border rounded bg-orange-50 font-bold">0</div>
              </div>

              <div class="flex items-center gap-3">
                <div class="flex-1 text-center p-2 border rounded bg-white">0</div>
                <div class="flex-1 text-center p-2 border rounded bg-white">1</div>
                <div class="text-2xl text-orange-400 px-2">→</div>
                <div class="flex-1 text-center p-2 border rounded bg-orange-50 font-bold">1</div>
              </div>

              <div class="flex items-center gap-3">
                <div class="flex-1 text-center p-2 border rounded bg-white">1</div>
                <div class="flex-1 text-center p-2 border rounded bg-white">0</div>
                <div class="text-2xl text-orange-400 px-2">→</div>
                <div class="flex-1 text-center p-2 border rounded bg-orange-50 font-bold">1</div>
              </div>

              <div class="flex items-center gap-3">
                <div class="flex-1 text-center p-2 border rounded bg-white">1</div>
                <div class="flex-1 text-center p-2 border rounded bg-white">1</div>
                <div class="text-2xl text-orange-400 px-2">→</div>
                <div class="flex-1 text-center p-2 border rounded bg-orange-50 font-bold">0</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
          <p class="text-gray-700">
            <strong>Regel:</strong> XOR gibt <strong>1</strong> zurück, wenn die Bits
            <strong>unterschiedlich</strong> sind, und <strong>0</strong>, wenn sie
            <strong>gleich</strong> sind.
          </p>
        </div>
      </div>

      <!-- Interactive Example -->
      <div class="bg-white rounded-lg p-4 sm:p-6 mt-4 border-2 border-gray-200">
        <div class="flex items-center justify-between mb-4">
          <h4 class="font-bold text-gray-800">
            Beispiel: Verschlüsselung direkt auf Bits (Ascii-codierte Eingabe) anwenden
          </h4>
          <button
            class="px-3 py-1 bg-green-500 text-white text-xs rounded font-medium hover:bg-green-600 transition-colors"
            @click="generateNewKey"
          >
            🎲 Neuer Schlüssel
          </button>
        </div>

        <!-- Input -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Eingabe (max. 5 Zeichen):
          </label>
          <input
            v-model="userInput"
            type="text"
            maxlength="5"
            placeholder="z.B. Hallo"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            @input="handleInput"
          />
        </div>

        <!-- Binary Representation -->
        <div class="space-y-3">
          <!-- Plaintext -->
          <div class="bg-blue-50 rounded-lg p-2">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-medium text-gray-700">1. Eingabe (ASCII-codiert):</span>
              <span class="text-xs text-blue-600 font-semibold"
                >({{ keyBinary.replace(/\s/g, '').length / 8 }} Bytes)</span
              >
            </div>
            <p class="text-base sm:text-lg text-gray-800 font-mono break-all leading-relaxed">
              {{ plaintextBinary }}
            </p>
          </div>

          <!-- Key -->
          <div class="bg-purple-50 rounded-lg p-2">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-medium text-gray-700">2. Bit Schlüssel:</span>
              <span class="text-xs text-purple-600 font-semibold"
                >({{ keyBinary.replace(/\s/g, '').length / 8 }} Bytes)</span
              >
            </div>
            <p class="text-base sm:text-lg text-gray-800 font-mono break-all leading-relaxed">
              {{ keyBinary }}
            </p>
          </div>

          <!-- Encrypted -->
          <div class="bg-orange-50 rounded-lg p-2">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-medium text-gray-700">3. Verschlüsselt (XOR):</span>
              <span class="text-xs text-orange-600 font-semibold"
                >({{ keyBinary.replace(/\s/g, '').length / 8 }} Bytes)</span
              >
            </div>
            <p class="text-base sm:text-lg text-gray-800 font-mono break-all leading-relaxed">
              {{ encryptedBinary }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useBinaryXor } from '@/composables/useBinaryXor';

/**
 * Modern Cryptography Header Component
 * Displays introduction to modern bit-based encryption with live OTP example
 */

const { textToBinary, xorBinary, generateRandomKey } = useBinaryXor();

// User input
const userInput = ref('Hallo');

// Process Flow Exercise - Define all steps
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  borderClass: string;
}

const allSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Eingabe bei Alice',
    description: 'Alice schreibt ihre Nachricht',
    icon: '✍️',
    borderClass: 'border-blue-300',
  },
  {
    id: 2,
    title: 'Codierung',
    description: 'Alices Computer wandelt Text → Bits um',
    icon: '📝',
    borderClass: 'border-blue-300',
  },
  {
    id: 3,
    title: 'Verschlüsselung',
    description: 'Alice verschlüsselt mit Schlüssel',
    icon: '🔐',
    borderClass: 'border-blue-300',
  },
  {
    id: 4,
    title: 'Übermittlung',
    description: 'Nachricht geht durchs Internet zu Bob',
    icon: '📡',
    borderClass: 'border-blue-300',
  },
  {
    id: 5,
    title: 'Entschlüsselung',
    description: 'Bob entschlüsselt mit gleichem Schlüssel',
    icon: '🔓',
    borderClass: 'border-blue-300',
  },
  {
    id: 6,
    title: 'Decodierung',
    description: 'Bobs Computer wandelt Bits → Text um',
    icon: '📖',
    borderClass: 'border-blue-300',
  },
  {
    id: 7,
    title: 'Ausgabe bei Bob',
    description: 'Bob kann die Nachricht lesen! 🎉',
    icon: '🤓',
    borderClass: 'border-blue-300',
  },
];

// Shuffle steps for exercise
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const availableSteps = ref<ProcessStep[]>(shuffleArray(allSteps));
const selectedSequence = ref<ProcessStep[]>([]);
const showFeedback = ref(false);
const isSequenceCorrect = ref(false);

// Add step to sequence
const addStepToSequence = (step: ProcessStep) => {
  selectedSequence.value.push(step);
  availableSteps.value = availableSteps.value.filter(s => s.id !== step.id);
  showFeedback.value = false;
};

// Remove step from sequence
const removeStepFromSequence = (index: number) => {
  const removedStep = selectedSequence.value[index];
  selectedSequence.value.splice(index, 1);
  availableSteps.value.push(removedStep);
  showFeedback.value = false;
};

// Clear sequence
const clearSequence = () => {
  availableSteps.value = shuffleArray(allSteps);
  selectedSequence.value = [];
  showFeedback.value = false;
  isSequenceCorrect.value = false;
};

// Check if sequence is correct
const checkSequence = () => {
  showFeedback.value = true;
  isSequenceCorrect.value = selectedSequence.value.every((step, index) => step.id === index + 1);
};

// Get border class for step
const getStepBorderClass = (step: ProcessStep) => {
  return step.borderClass;
};

// Computed binary values
const plaintextBinary = computed(() => {
  const binary = textToBinary(userInput.value);
  return binary.match(/.{8}/g)?.join(' ') || binary;
});

const keyBinary = ref('');

const encryptedBinary = computed(() => {
  const plainBinary = textToBinary(userInput.value);
  const keyWithoutSpaces = keyBinary.value.replace(/\s/g, '');
  if (keyWithoutSpaces.length !== plainBinary.length) return '';

  const encrypted = xorBinary(plainBinary, keyWithoutSpaces);
  return encrypted.match(/.{8}/g)?.join(' ') || encrypted;
});

// Generate new random key
const generateNewKey = () => {
  const binaryLength = textToBinary(userInput.value).length;
  const key = generateRandomKey(binaryLength);
  keyBinary.value = key.match(/.{8}/g)?.join(' ') || key;
};

// Handle input change
const handleInput = () => {
  userInput.value = userInput.value.replace(/[^A-Za-z]/g, '');
  generateNewKey();
};

// Initialize on mount
onMounted(() => {
  generateNewKey();
});
</script>

<style scoped>
.font-mono {
  font-family: 'Courier New', Courier, monospace;
}
</style>
