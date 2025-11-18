<template>
  <div class="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
    <h4 class="font-bold text-gray-800 mb-4">🎯 AES Challenge: Teste dein Wissen!</h4>

    <div class="space-y-6">
      <!-- Challenge 1: Block Size -->
      <div class="bg-blue-50 rounded-lg p-4">
        <div class="flex items-start gap-3 mb-3">
          <span class="text-2xl">📦</span>
          <div class="flex-1">
            <h5 class="font-bold text-gray-800 mb-2">Block-Grösse</h5>
            <p class="text-sm text-gray-700 mb-3">
              Du möchtest "HELLO WORLD!" mit AES verschlüsseln. Wie viele 128-Bit Blöcke werden
              benötigt?
            </p>

            <div class="space-y-2">
              <label
                v-for="option in challenge1Options"
                :key="option.value"
                class="flex items-center gap-2 cursor-pointer"
              >
                <input
                  v-model="challenge1Answer"
                  type="radio"
                  :value="option.value"
                  class="w-4 h-4"
                />
                <span class="text-sm">{{ option.label }}</span>
              </label>
            </div>

            <button
              v-if="!challenge1Checked"
              :disabled="!challenge1Answer"
              class="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 text-sm"
              @click="checkChallenge1"
            >
              Antwort prüfen
            </button>

            <div
              v-if="challenge1Checked"
              :class="[
                'mt-3 p-3 rounded-lg',
                challenge1Correct
                  ? 'bg-green-100 border border-green-300'
                  : 'bg-red-100 border border-red-300',
              ]"
            >
              <p v-if="challenge1Correct" class="text-green-800 text-sm font-medium">
                ✅ Richtig! "HELLO WORLD!" hat 12 Bytes. Ein Block = 16 Bytes (128 Bit). Also wird 1
                Block benötigt (mit 4 Bytes Padding).
              </p>
              <p v-else class="text-red-800 text-sm font-medium">
                ❌ Nicht ganz. Tipp: 1 Block = 16 Bytes. Wie viele Bytes hat "HELLO WORLD!"?
              </p>
              <button class="mt-2 text-sm text-blue-600 underline" @click="resetChallenge1">
                Nochmal versuchen
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Challenge 2: Key Length vs Security -->
      <div class="bg-purple-50 rounded-lg p-4">
        <div class="flex items-start gap-3 mb-3">
          <span class="text-2xl">🔑</span>
          <div class="flex-1">
            <h5 class="font-bold text-gray-800 mb-2">Schlüssellänge & Sicherheit</h5>
            <p class="text-sm text-gray-700 mb-3">Warum ist AES-256 sicherer als AES-128?</p>

            <div class="space-y-2">
              <label
                v-for="option in challenge2Options"
                :key="option.value"
                class="flex items-start gap-2 cursor-pointer"
              >
                <input
                  v-model="challenge2Answer"
                  type="radio"
                  :value="option.value"
                  class="w-4 h-4 mt-1"
                />
                <span class="text-sm flex-1">{{ option.label }}</span>
              </label>
            </div>

            <button
              v-if="!challenge2Checked"
              :disabled="!challenge2Answer"
              class="mt-3 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 text-sm"
              @click="checkChallenge2"
            >
              Antwort prüfen
            </button>

            <div
              v-if="challenge2Checked"
              :class="[
                'mt-3 p-3 rounded-lg',
                challenge2Correct
                  ? 'bg-green-100 border border-green-300'
                  : 'bg-red-100 border border-red-300',
              ]"
            >
              <p v-if="challenge2Correct" class="text-green-800 text-sm font-medium">
                ✅ Genau! AES-256 hat 2¹²⁸ mal mehr mögliche Schlüssel als AES-128. Das macht
                Brute-Force-Angriffe praktisch unmöglich.
              </p>
              <p v-else class="text-red-800 text-sm font-medium">
                ❌ Nicht ganz richtig. Überlege: Was bedeutet ein längerer Schlüssel für die Anzahl
                möglicher Kombinationen?
              </p>
              <button class="mt-2 text-sm text-blue-600 underline" @click="resetChallenge2">
                Nochmal versuchen
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Challenge 3: OTP vs AES -->
      <div class="bg-green-50 rounded-lg p-4">
        <div class="flex items-start gap-3 mb-3">
          <span class="text-2xl">⚖️</span>
          <div class="flex-1">
            <h5 class="font-bold text-gray-800 mb-2">Praktischer Vergleich</h5>
            <p class="text-sm text-gray-700 mb-3">
              Du willst eine 1 GB Videodatei verschlüsseln. Welches Verfahren ist praktischer?
            </p>

            <div class="space-y-2">
              <label
                v-for="option in challenge3Options"
                :key="option.value"
                class="flex items-start gap-2 cursor-pointer"
              >
                <input
                  v-model="challenge3Answer"
                  type="radio"
                  :value="option.value"
                  class="w-4 h-4 mt-1"
                />
                <span class="text-sm flex-1">{{ option.label }}</span>
              </label>
            </div>

            <button
              v-if="!challenge3Checked"
              :disabled="!challenge3Answer"
              class="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 text-sm"
              @click="checkChallenge3"
            >
              Antwort prüfen
            </button>

            <div
              v-if="challenge3Checked"
              :class="[
                'mt-3 p-3 rounded-lg',
                challenge3Correct
                  ? 'bg-green-100 border border-green-300'
                  : 'bg-red-100 border border-red-300',
              ]"
            >
              <p v-if="challenge3Correct" class="text-green-800 text-sm font-medium">
                ✅ Richtig! AES braucht nur 32 Bytes für den Schlüssel, egal wie gross die Datei
                ist. OTP würde einen 1 GB Schlüssel benötigen!
              </p>
              <p v-else class="text-red-800 text-sm font-medium">
                ❌ Denk an die Schlüssellänge: OTP braucht einen Schlüssel so lang wie die
                Nachricht!
              </p>
              <button class="mt-2 text-sm text-blue-600 underline" @click="resetChallenge3">
                Nochmal versuchen
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Score Display -->
      <div v-if="totalScore > 0" class="bg-indigo-100 border-2 border-indigo-400 rounded-lg p-4">
        <div class="text-center">
          <p class="text-2xl font-bold text-indigo-800 mb-1">🏆 Score: {{ totalScore }} / 3</p>
          <p v-if="totalScore === 3" class="text-sm text-indigo-700">
            Perfekt! Du hast AES verstanden! 🎉
          </p>
          <p v-else class="text-sm text-indigo-700">
            Weiter so! Versuche alle Challenges zu lösen!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Challenge 1: Block Size
const challenge1Options = [
  { value: 'a', label: '1 Block' },
  { value: 'b', label: '2 Blöcke' },
  { value: 'c', label: '12 Blöcke' },
];
const challenge1Answer = ref<string>('');
const challenge1Checked = ref(false);
const challenge1Correct = ref(false);

const checkChallenge1 = () => {
  challenge1Checked.value = true;
  challenge1Correct.value = challenge1Answer.value === 'a';
};

const resetChallenge1 = () => {
  challenge1Answer.value = '';
  challenge1Checked.value = false;
  challenge1Correct.value = false;
};

// Challenge 2: Key Length
const challenge2Options = [
  { value: 'a', label: 'AES-256 verschlüsselt in grösseren Blöcken' },
  { value: 'b', label: 'AES-256 ist schneller als AES-128' },
  { value: 'c', label: 'AES-256 hat mehr mögliche Schlüssel' },
  { value: 'd', label: 'AES-256 kann längere Nachrichten verschlüsseln' },
];
const challenge2Answer = ref<string>('');
const challenge2Checked = ref(false);
const challenge2Correct = ref(false);

const checkChallenge2 = () => {
  challenge2Checked.value = true;
  challenge2Correct.value = challenge2Answer.value === 'c';
};

const resetChallenge2 = () => {
  challenge2Answer.value = '';
  challenge2Checked.value = false;
  challenge2Correct.value = false;
};

// Challenge 3: OTP vs AES
const challenge3Options = [
  { value: 'a', label: 'One-Time-Pad (sicherer und praktischer)' },
  { value: 'b', label: 'AES (kurzer Schlüssel, wiederverwendbar)' },
  { value: 'c', label: 'Beide gleich gut geeignet' },
];
const challenge3Answer = ref<string>('');
const challenge3Checked = ref(false);
const challenge3Correct = ref(false);

const checkChallenge3 = () => {
  challenge3Checked.value = true;
  challenge3Correct.value = challenge3Answer.value === 'b';
};

const resetChallenge3 = () => {
  challenge3Answer.value = '';
  challenge3Checked.value = false;
  challenge3Correct.value = false;
};

// Total Score
const totalScore = computed(() => {
  let score = 0;
  if (challenge1Correct.value) score++;
  if (challenge2Correct.value) score++;
  if (challenge3Correct.value) score++;
  return score;
});
</script>
