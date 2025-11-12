<template>
  <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border-2 border-yellow-300">
    <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
      🍫 Toblerone-Aufgabe
    </h3>
    <div class="bg-white p-4 rounded-lg mb-4 border border-yellow-200">
      <p class="text-gray-700 mb-3">
        <strong>Aufgabe:</strong> Wickle einen Lederstreifen gedanklich um eine <strong>Toblerone</strong> anstatt um einen Holzstab.
      </p>
      <p class="text-gray-700 mb-2">
        Übermittle folgende Nachricht: <code class="bg-yellow-100 px-2 py-1 rounded font-bold text-lg">DIE PERSER KOMMEN</code>
      </p>
      <p class="text-sm text-gray-600">
        <em>Hinweis: Entferne dabei wie im Beispiel auch zuerst die Leerzeichen. Benutze das Raster, um das Aufwickeln des Lederbandes um die Toblerone zu simulieren.</em>
      </p>
    </div>

    <!-- Interaktive Toblerone-Übung -->
    <div class="bg-white p-4 rounded-lg border-2 border-yellow-300">
      <div class="mb-4 bg-blue-50 p-3 rounded-lg border border-blue-200 flex items-center gap-4">
        <div class="flex-shrink-0">
          <!-- Toblerone Bild -->
          <img 
            src="/images/toblerone.jpg" 
            alt="Toblerone" 
            class="w-20 h-20 object-contain rounded"
          />
        </div>
        <div class="flex-1">
          <p class="text-sm font-medium text-blue-900">
            ℹ️ Eine Toblerone hat <strong>3 Seiten</strong> (dreieckige Form). Fülle das 3×5 Raster aus, indem du die Nachricht <strong>zeilenweise</strong> einträgst!
          </p>
        </div>
      </div>

      <!-- Eingabefeld für Nachricht -->
      <div class="mb-4">
        <p class="text-sm font-medium text-gray-700 mb-2">
          Nachricht ohne Leerzeichen: <code class="bg-yellow-100 px-2 py-1 rounded">DIEPERSERKOMMEN</code>
        </p>
      </div>

      <!-- 3×5 Toblerone Grid - Editierbar -->
      <div class="overflow-x-auto mb-4">
        <div 
          class="grid gap-2 mb-3 mx-auto"
          style="grid-template-columns: repeat(3, minmax(60px, 70px)); max-width: 240px;"
        >
          <input
            v-for="(_cell, index) in userInput"
            :key="'input-' + index"
            v-model="userInput[index]"
            @input="validateGrid"
            type="text"
            maxlength="1"
            class="aspect-square w-full h-16 flex items-center justify-center text-2xl font-mono font-bold rounded border-2 text-center uppercase transition-all duration-300"
            :class="getCellClass(index)"
            placeholder=""
          />
        </div>
      </div>

      <!-- Feedback -->
      <div v-if="isComplete" class="mb-4">
        <div v-if="isCorrect" class="bg-green-100 border-2 border-green-500 p-4 rounded-lg">
          <p class="text-green-800 font-bold text-lg flex items-center gap-2">
            <span class="text-2xl">✅</span>
            Perfekt! Du hast das Skytale-Spalten-Transpositionsgitter richtig ausgefüllt!
          </p>
        </div>
        <div v-else class="bg-red-100 border-2 border-red-400 p-4 rounded-lg">
          <p class="text-red-800 font-medium flex items-center gap-2">
            <span class="text-2xl">❌</span>
            Noch nicht ganz richtig. Überprüfe deine Eingaben!
          </p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex gap-3 mb-4">
        <button
          @click="checkGrid"
          class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
        >
          🔍 Überprüfen
        </button>
        <button
          @click="resetGrid"
          class="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg transition-colors"
        >
          ↻ Zurücksetzen
        </button>
      </div>

      <!-- Verschlüsselter Text (nur sichtbar wenn korrekt) -->
      <div v-if="isCorrect" class="bg-green-50 p-4 rounded-lg border-2 border-green-300">
        <p class="text-sm font-medium text-gray-700 mb-2">
          Geheimtext (spaltenweise gelesen):
        </p>
        <div class="font-mono text-lg font-bold text-green-900 break-all">
          {{ correctCiphertext }}
        </div>
        <p class="text-xs text-gray-600 mt-2">
          So würde die Nachricht auf dem abgewickelten Lederstreifen aussehen!
        </p>
      </div>

      <!-- Hilfe -->
      <details class="mt-4">
        <summary class="cursor-pointer text-sm text-yellow-800 hover:text-yellow-900 font-medium">💡 Hilfe anzeigen</summary>
        <div class="mt-3 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
          <p class="text-sm text-gray-700 mb-2"><strong>Tipp:</strong></p>
          <ul class="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Schreibe die Nachricht <strong>DIEPERSERKOMMEN</strong> Buchstabe für Buchstabe</li>
            <li>Beginne <strong>links oben</strong> und gehe <strong>zeilenweise</strong> vor</li>
          </ul>
        </div>
      </details>
    </div>

    <!-- Denkfrage -->
    <div class="mt-4 bg-orange-100 p-4 rounded-lg border border-orange-300">
      <p class="text-sm font-medium text-orange-900 mb-2">
        🤔 <strong>Denkfrage:</strong> Wie könnte ein Feind den Geheimtext knacken (ohne den Schlüssel zu kennen)?
      </p>
      <details class="mt-2">
        <summary class="cursor-pointer text-sm text-orange-800 hover:text-orange-900 font-medium">Antwort anzeigen</summary>
        <div class="mt-2 text-sm text-orange-900 space-y-2">
          <p><strong>Brute-Force-Angriff:</strong></p>
          <ul class="list-disc list-inside ml-4 space-y-1">
            <li>Es gibt nur wenige mögliche Spaltenanzahlen (z.B. 2-10)</li>
            <li>Der Feind probiert einfach alle Möglichkeiten durch</li>
            <li>Wenn ein Text sinnvoll lesbar wird, hat er den richtigen Schlüssel gefunden</li>
            <li>Das dauert nur wenige Minuten!</li>
          </ul>
          <p class="mt-2 font-medium">➜ Deshalb ist die Skytale gegen moderne Angriffe nicht sicher!</p>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { TOBLERONE } from '@/constants/skytale';

const userInput = ref<string[]>(Array(TOBLERONE.GRID_SIZE).fill(''));
const validation = ref<(boolean | null)[]>(Array(TOBLERONE.GRID_SIZE).fill(null));

const isComplete = computed(() => {
  return userInput.value.every(cell => cell.trim() !== '');
});

const isCorrect = computed(() => {
  if (!isComplete.value) return false;
  const userAnswer = userInput.value.map(c => c.toUpperCase()).join('');
  return userAnswer === TOBLERONE.TEXT;
});

const correctCiphertext = computed(() => {
  // Lese spaltenweise
  let cipher = '';
  
  for (let col = 0; col < TOBLERONE.COLUMNS; col++) {
    for (let row = 0; row < TOBLERONE.ROWS; row++) {
      const index = row * TOBLERONE.COLUMNS + col;
      cipher += TOBLERONE.TEXT[index] || '';
    }
    cipher += ' ';
  }
  
  return cipher.trim();
});

function getCellClass(index: number): string {
  const val = validation.value[index];
  if (val === null) {
    return 'bg-white border-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200';
  }
  if (val === true) {
    return 'bg-green-100 border-green-500 text-green-800';
  }
  return 'bg-red-50 border-red-400 text-red-800';
}

function validateGrid() {
  userInput.value.forEach((cell, index) => {
    if (cell.trim() === '') {
      validation.value[index] = null;
    } else {
      const expectedChar = TOBLERONE.TEXT[index].toUpperCase();
      const userChar = cell.toUpperCase();
      validation.value[index] = userChar === expectedChar;
    }
  });
}

function checkGrid() {
  userInput.value.forEach((cell, index) => {
    const expectedChar = TOBLERONE.TEXT[index].toUpperCase();
    const userChar = cell.toUpperCase();
    validation.value[index] = userChar === expectedChar;
  });
}

function resetGrid() {
  userInput.value = Array(TOBLERONE.GRID_SIZE).fill('');
  validation.value = Array(TOBLERONE.GRID_SIZE).fill(null);
}
</script>

<style scoped>
code {
  background-color: #fef3c7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: monospace;
}
</style>
