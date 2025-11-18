<template>
  <div class="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
    <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
      📚 Übungen (entferne jeweils die Leerzeichen)
    </h3>
    <div class="space-y-4">
      <!-- Übung 1 -->
      <div 
        class="bg-white p-4 rounded-lg border-2 transition-all duration-300" 
        :class="exercise1Status === 'correct' ? 'border-green-400' : 'border-gray-200'"
      >
        <p class="font-medium text-gray-800 mb-3">1. Verschlüssle "HALLOWELT" mit 3 Spalten</p>
        <div class="flex flex-wrap gap-3 items-end">
          <div class="flex-1 min-w-[200px]">
            <label class="block text-sm text-gray-600 mb-1">Deine Antwort:</label>
            <input
              v-model="exercise1Answer"
              @input="checkExercise1"
              type="text"
              placeholder="Geheimtext eingeben..."
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase font-mono"
              :class="getInputClass(exercise1Status)"
            />
          </div>
          <button
            @click="checkExercise1"
            class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors font-medium"
          >
            Prüfen
          </button>
        </div>
        
        <div v-if="exercise1Status === 'correct'" class="mt-3 p-3 bg-green-100 border border-green-400 rounded-lg flex items-center gap-2">
          <span class="text-xl">✅</span>
          <span class="text-green-800 font-medium">Richtig! Der Geheimtext ist "{{ EXERCISES.EXERCISE_1.answer }}"</span>
        </div>
        <div v-else-if="exercise1Status === 'incorrect'" class="mt-3 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
          <span class="text-xl">❌</span>
          <span class="text-red-800 font-medium">Noch nicht ganz. Tipp: Schreibe "HALLOWELT" in 3 Spalten und lies spaltenweise!</span>
        </div>
        
        <details class="mt-3 text-sm text-gray-600">
          <summary class="cursor-pointer hover:text-indigo-600 font-medium">💡 Hilfe anzeigen</summary>
          <div class="mt-2 p-3 bg-indigo-50 rounded">
            <pre class="font-mono text-xs">H A L
L O W
E L T</pre>
            <p class="mt-2 text-xs">Lies spaltenweise: HLE (Spalte 1), AOL (Spalte 2), LWT (Spalte 3)</p>
          </div>
        </details>
      </div>

      <!-- Übung 2 -->
      <div 
        class="bg-white p-4 rounded-lg border-2 transition-all duration-300" 
        :class="exercise2Status === 'correct' ? 'border-green-400' : 'border-gray-200'"
      >
        <p class="font-medium text-gray-800 mb-3">2. Entschlüssle "WASASTESENTRLNNGDEKIU" mit 4 Spalten</p>
        <div class="flex flex-wrap gap-3 items-end">
          <div class="flex-1 min-w-[200px]">
            <label class="block text-sm text-gray-600 mb-1">Deine Antwort:</label>
            <input
              v-model="exercise2Answer"
              @input="checkExercise2"
              type="text"
              placeholder="Klartext eingeben..."
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase font-mono"
              :class="getInputClass(exercise2Status)"
            />
          </div>
          <button
            @click="checkExercise2"
            class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors font-medium"
          >
            Prüfen
          </button>
        </div>
        
        <div v-if="exercise2Status === 'correct'" class="mt-3 p-3 bg-green-100 border border-green-400 rounded-lg flex items-center gap-2">
          <span class="text-xl">✅</span>
          <span class="text-green-800 font-medium">Richtig! Der Klartext ist "WER DAS LESEN KANN IST GUT"</span>
        </div>
        <div v-else-if="exercise2Status === 'incorrect'" class="mt-3 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
          <span class="text-xl">❌</span>
          <span class="text-red-800 font-medium">Noch nicht ganz. Tipp: Schreibe den Geheimtext spaltenweise ins Gitter und lies zeilenweise!</span>
        </div>
        
        <details class="mt-3 text-sm text-gray-600">
          <summary class="cursor-pointer hover:text-indigo-600 font-medium">💡 Hilfe anzeigen</summary>
          <div class="mt-2 p-3 bg-indigo-50 rounded">
            <p class="text-xs mb-2">Länge: 21 Zeichen, 4 Spalten → 5 Zeilen</p>
            <p class="text-xs mb-2">Schreibe spaltenweise: WASAST (Spalte 1), ESENT (Spalte 2), RLNNG (Spalte 3), DEKIU (Spalte 4)</p>
            <p class="mt-2 text-xs">Dann lies zeilenweise</p>
          </div>
        </details>
      </div>

      <!-- Übung 3 -->
      <div 
        class="bg-white p-4 rounded-lg border-2 transition-all duration-300" 
        :class="exercise3Status === 'correct' ? 'border-green-400' : 'border-gray-200'"
      >
        <p class="font-medium text-gray-800 mb-3">3. Knacke "VVVEIINDCIII" (Tipp: 4 oder 5 Spalten)</p>
        <div class="flex flex-wrap gap-3 items-end">
          <div class="flex-1 min-w-[200px]">
            <label class="block text-sm text-gray-600 mb-1">Deine Antwort:</label>
            <input
              v-model="exercise3Answer"
              @input="checkExercise3"
              type="text"
              placeholder="Klartext eingeben..."
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase font-mono"
              :class="getInputClass(exercise3Status)"
            />
          </div>
          <button
            @click="checkExercise3"
            class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors font-medium"
          >
            Prüfen
          </button>
        </div>
        
        <div v-if="exercise3Status === 'correct'" class="mt-3 p-3 bg-green-100 border border-green-400 rounded-lg flex items-center gap-2">
          <span class="text-xl">✅</span>
          <span class="text-green-800 font-medium">Perfekt! Der Klartext ist "VENI VIDI VICI" (mit {{ EXERCISES.EXERCISE_3.columns }} Spalten)</span>
        </div>
        <div v-else-if="exercise3Status === 'incorrect'" class="mt-3 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
          <span class="text-xl">❌</span>
          <span class="text-red-800 font-medium">Noch nicht ganz. Tipp: Probiere es mit 4 Spalten!</span>
        </div>
        
        <details class="mt-3 text-sm text-gray-600">
          <summary class="cursor-pointer hover:text-indigo-600 font-medium">💡 Hilfe anzeigen</summary>
          <div class="mt-2 p-3 bg-indigo-50 rounded">
            <p class="text-xs mb-2">Mit 4 Spalten (12 Zeichen → 3 Zeilen):</p>
            <p class="text-xs mb-2">Schreibe spaltenweise</p>
            <p class="mt-2 text-xs">Lies zeilenweise</p>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { EXERCISES } from '@/constants/skytale';

// Exercise state
const exercise1Answer = ref('');
const exercise1Status = ref<'correct' | 'incorrect' | null>(null);
const exercise2Answer = ref('');
const exercise2Status = ref<'correct' | 'incorrect' | null>(null);
const exercise3Answer = ref('');
const exercise3Status = ref<'correct' | 'incorrect' | null>(null);

// Helper function for input styling
function getInputClass(status: 'correct' | 'incorrect' | null): string {
  if (status === 'correct') return 'border-green-500 bg-green-50';
  if (status === 'incorrect') return 'border-red-400 bg-red-50';
  return 'border-gray-300';
}

// Exercise methods
function checkExercise1() {
  const userAnswer = exercise1Answer.value.toUpperCase().replace(/\s+/g, '');
  exercise1Status.value = userAnswer === EXERCISES.EXERCISE_1.answer ? 'correct' : userAnswer ? 'incorrect' : null;
}

function checkExercise2() {
  const userAnswer = exercise2Answer.value.toUpperCase().replace(/\s+/g, '');
  exercise2Status.value = userAnswer === EXERCISES.EXERCISE_2.answer ? 'correct' : userAnswer ? 'incorrect' : null;
}

function checkExercise3() {
  const userAnswer = exercise3Answer.value.toUpperCase().replace(/\s+/g, '');
  exercise3Status.value = userAnswer === EXERCISES.EXERCISE_3.answer ? 'correct' : userAnswer ? 'incorrect' : null;
}
</script>
