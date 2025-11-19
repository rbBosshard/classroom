<template>
  <section class="mb-8">
    <!-- XOR Exercises -->
    <div class="bg-white border-2 border-gray-200 rounded-lg p-4">
      <h4 class="font-bold text-gray-800 mb-4">🎯 XOR-Aufgabe</h4>

      <div class="space-y-6">
        <div
          v-for="(exercise, index) in exercises"
          :key="index"
          class="border border-gray-200 rounded-lg p-4"
        >
          <p class="text-gray-800 mb-4">
            {{ exercise.question }}
          </p>

          <!-- Vertical XOR Display -->
          <div class="overflow-x-auto">
            <div class="font-mono bg-gray-50 p-4 rounded inline-block min-w-fit">
              <div class="space-y-1">
                <!-- Input -->
                <div class="flex items-center gap-2">
                  <div class="flex gap-1">
                    <span
                      v-for="(bit, i) in exercise.input1.split('')"
                      :key="`bit1-${i}`"
                      class="text-blue-600 font-bold text-lg w-6 text-center"
                      >{{ bit }}</span
                    >
                  </div>
                </div>

                <!-- XOR Symbol -->
                <div class="flex items-center gap-2">
                  <div class="flex gap-1">
                    <span
                      v-for="(bit, i) in exercise.input2.split('')"
                      :key="`bit2-${i}`"
                      class="text-purple-600 font-bold text-lg w-6 text-center"
                      >{{ bit }}</span
                    >
                  </div>
                </div>

                <!-- Divider Line -->
                <div class="flex items-center gap-2">
                  <div class="flex gap-1">
                    <span
                      v-for="i in exercise.input1.length"
                      :key="`line-${i}`"
                      class="text-gray-400 text-lg w-6 text-center border-t border-gray-400"
                    ></span>
                  </div>
                </div>

                <!-- Result Input -->
                <div class="flex items-center gap-2">
                  <div class="flex gap-1">
                    <input
                      v-for="(_bit, i) in exercise.input1.length"
                      :key="`input-${i}`"
                      :ref="el => setInputRef(el, index, i)"
                      v-model="exerciseBitAnswers[index][i]"
                      type="text"
                      maxlength="1"
                      class="w-6 h-8 text-center font-bold text-lg border-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      :class="getBitInputClass(index, i)"
                      @input="validateBitInput(index, i)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Feedback -->
          <transition name="fade">
            <div v-if="isExerciseComplete(index)" class="mt-3">
              <div
                v-if="isExerciseCorrect(index)"
                class="bg-green-50 border-l-4 border-green-500 p-3 rounded text-sm"
              >
                <p class="font-medium text-green-800">✅ Perfekt! Alle Bits sind richtig!</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div
      class="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-4 mb-6 mt-4"
    >
      <h6 class="font-bold text-blue-700 mb-3">🎯 Warum ist XOR perfekt für Verschlüsselung?</h6>
      <div class="grid md:grid-cols-2 gap-3 text-sm">
        <div class="bg-white rounded p-2">
          <p class="font-medium text-gray-800">✓ Symmetrisch & umkehrbar</p>
          <p class="text-xs text-gray-600">
            Ver- & Entschlüsselung identisch (zweimal anwenden -> Original zurück)
          </p>
        </div>
        <div class="bg-white rounded p-2">
          <p class="font-medium text-gray-800">✓ Schnell & effizient</p>
          <p class="text-xs text-gray-600">Direkt in CPU-Hardware implementiert</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue';

/**
 * Binary XOR Interactive Component
 */

const exercises = [
  {
    question:
      'Berechne die XOR Operation zwischen Input-Bits und Schlüssel-Bits. Wenn alle deine Bits korrekt sind, leuchten sie grün.',
    input1: '01011000',
    input2: '10001101',
    answer: '11010101',
  },
];

// Initialize bit answers for each exercise
const exerciseBitAnswers = ref<string[][]>(exercises.map(ex => Array(ex.input1.length).fill('')));

// Refs for input elements
const inputRefs = ref<(HTMLInputElement | null)[][]>([]);
const setInputRef = (
  el: Element | ComponentPublicInstance | null,
  exerciseIndex: number,
  bitIndex: number
) => {
  if (!inputRefs.value[exerciseIndex]) {
    inputRefs.value[exerciseIndex] = [];
  }
  inputRefs.value[exerciseIndex][bitIndex] = el as HTMLInputElement | null;
};

// Validate single bit input (only allow 0 or 1)
const validateBitInput = (exerciseIndex: number, bitIndex: number) => {
  const value = exerciseBitAnswers.value[exerciseIndex][bitIndex];
  // Only allow 0, 1, or empty
  if (value !== '' && value !== '0' && value !== '1') {
    exerciseBitAnswers.value[exerciseIndex][bitIndex] = '';
    return;
  }

  // Auto-focus next input if valid input was entered
  if (value === '0' || value === '1') {
    const exerciseLength = exercises[exerciseIndex].input1.length;
    // Move to next bit if not at the end
    if (bitIndex < exerciseLength - 1) {
      inputRefs.value[exerciseIndex]?.[bitIndex + 1]?.focus();
    }
  }
};

// Check if bit at position is correct
const isBitCorrect = (exerciseIndex: number, bitIndex: number): boolean => {
  const userBit = exerciseBitAnswers.value[exerciseIndex][bitIndex];
  if (userBit === '') return false;

  const correctAnswer = exercises[exerciseIndex].answer;
  return userBit === correctAnswer[bitIndex];
};

// Get CSS class for bit input based on correctness
const getBitInputClass = (exerciseIndex: number, bitIndex: number): string => {
  const userBit = exerciseBitAnswers.value[exerciseIndex][bitIndex];

  if (userBit === '') {
    return 'border-gray-300 bg-white';
  }

  // Only show green if ALL bits are correct
  if (isExerciseComplete(exerciseIndex) && isExerciseCorrect(exerciseIndex)) {
    return 'border-green-500 bg-green-50 text-green-700';
  }

  // Show default styling if not all complete or some are wrong
  return 'border-gray-300 bg-white';
}; // Check if exercise is complete (all bits filled)
const isExerciseComplete = (exerciseIndex: number): boolean => {
  return exerciseBitAnswers.value[exerciseIndex].every(bit => bit !== '');
};

// Check if exercise is correct (all bits correct)
const isExerciseCorrect = (exerciseIndex: number): boolean => {
  if (!isExerciseComplete(exerciseIndex)) return false;

  return exerciseBitAnswers.value[exerciseIndex].every((_bit, i) => isBitCorrect(exerciseIndex, i));
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
