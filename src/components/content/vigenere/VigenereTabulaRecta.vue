<template>
  <section id="intro" class="space-y-6 mb-12 scroll-mt-32">
    <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2">
      📚 Einführung
    </h3>

    <!-- Recap: Monoalphabetic Encryption Problem -->
    <div class="bg-red-50 border-l-4 border-red-400 p-4 sm:p-5 rounded-r">
      <h4 class="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
        <span>Rückblick: Das Problem der monoalphabetischen Verschlüsselung</span>
      </h4>
      <p class="text-gray-700 mb-3">
        Bei allen monoalphabetischen Verfahren (und damit auch der Ceasar-Verschlüsselung) wird jeder Buchstabe
        <em>immer gleich</em> verschlüsselt:
      </p>
      <p>
        <strong>Schwachstellen:</strong>
      </p>
      <div class="space-y-2 text-sm text-gray-700">
        <p v-for="(problem, index) in VIGENERE_TABULA_RECTA.monoalphabeticProblems" :key="'problem-' + index"
          class="flex items-start gap-2">
          <span class="text-red-500 font-bold">{{ problem.icon }}</span>
          <span v-html="problem.text"></span>
        </p>
      </div>
    </div>

    <!-- Transition: The Solution -->
    <div class="bg-gradient-to-r from-yellow-50 to-green-50 border-2 border-green-400 p-4 sm:p-5 rounded-lg">
      <h4 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span>💡</span>
        <span>Von monoalphabetisch zu polyalphabetisch</span>
      </h4>
      <p class="text-gray-700 mb-3">
        <strong>Die Idee von Blaise de Vigenère (16. Jahrhundert):</strong> Was wäre, wenn wir <em>mehrere</em>
        Caesar-Verschiebungen nacheinander verwenden?
      </p>
      <div class="space-y-2 text-sm text-gray-700">
        <p v-for="(advantage, index) in VIGENERE_TABULA_RECTA.polyalphabeticAdvantages" :key="'advantage-' + index"
          class="flex items-start gap-2">
          <span class="font-bold text-lg">{{ advantage.icon }}</span>
          <span v-html="advantage.text"></span>
        </p>
      </div>
      <div class="mt-3 p-3 bg-purple-50 border border-purple-200 rounded">
        <p class="text-sm text-gray-700" v-html="VIGENERE_TABULA_RECTA.historicalFact"></p>
      </div>
    </div>

    <!-- Tabula Recta -->
    <div>
      <h4 class="text-xl font-bold text-gray-800 mb-3">📊 Die Tabula Recta (Vigenère-Quadrat)</h4>
      <p class="text-gray-600 mb-4">
        Dies ist das Werkzeug für die Vigenère-Verschlüsselung. Jede Zeile ist eine Caesar-Verschiebung:
      </p>

      <div class="overflow-x-auto">
        <div class="inline-block min-w-full">
          <div class="flex text-xs sm:text-sm font-mono">
            <!-- Header row -->
            <div class="flex flex-col">
              <div class="w-8 h-8 flex items-center justify-center font-bold bg-blue-200 border border-gray-300"></div>
              <div v-for="letter in alphabet" :key="'row-header-' + letter"
                class="w-8 h-8 flex items-center justify-center font-bold bg-blue-100 border border-gray-300">
                {{ letter }}
              </div>
            </div>

            <!-- Column headers -->
            <div class="flex-1 overflow-x-auto">
              <div class="flex">
                <div v-for="letter in alphabet" :key="'col-header-' + letter"
                  class="w-8 h-8 flex items-center justify-center font-bold bg-blue-200 border border-gray-300">
                  {{ letter }}
                </div>
              </div>

              <!-- Tabula Recta Grid -->
              <div v-for="(row, rowIndex) in alphabet" :key="'row-' + row" class="flex">
                <div v-for="(_, colIndex) in alphabet" :key="'cell-' + rowIndex + '-' + colIndex" :class="[
                  'w-8 h-8 flex items-center justify-center border border-gray-300 transition-colors',
                  isHighlightedCell(rowIndex, colIndex)
                    ? 'bg-orange-300 font-bold scale-110 z-10'
                    : 'bg-white hover:bg-gray-300'
                ]">
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
            <select v-model="examplePlainChar" class="border border-gray-300 rounded px-3 py-1 bg-white">
              <option v-for="letter in alphabet" :key="'plain-' + letter" :value="letter">
                {{ letter }}
              </option>
            </select>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="font-semibold">Schlüssel-Buchstabe:</span>
            <select v-model="exampleKeyChar" class="border border-gray-300 rounded px-3 py-1 bg-white">
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
            💡 <strong>So liest du die Tabelle:</strong> Finde deinen Klartext-Buchstaben ({{ examplePlainChar }}) in
            der <em>obersten Zeile</em> und den Schlüssel-Buchstaben ({{ exampleKeyChar }}) in der <em>linken
              Spalte</em>. Wo sich beide treffen, steht der verschlüsselte Buchstabe!
          </p>
        </div>
      </div>
    </div>

    <!-- Guided Practice Mini-Quiz for the Tabula Recta -->
    <div class="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-4 sm:p-6">
      <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span>🎯 Übung: Teste dein Verständnis</span>
      </h4>
      <p class="text-gray-700 mb-4 text-sm">
        Vervollständige diese Verschlüsselungen mithilfe der Tabula Recta. Die drei Buchstaben ergeben ein deutsches
        Wort:
      </p>

      <div class="space-y-4">
        <div v-for="question in VIGENERE_TABULA_RECTA.practiceQuestions" :key="'practice-' + question.id"
          class="bg-white p-4 rounded-lg border border-gray-300">
          <p class="font-semibold text-gray-800 mb-2">
            {{ question.id }}. Klartext: <span class="font-mono text-blue-600">{{ question.plainChar }}</span> +
            Schlüssel: <span class="font-mono text-purple-600">{{ question.keyChar }}</span> = ?
          </p>
          <div class="flex flex-wrap gap-2 mb-2">
            <button v-for="option in question.options" :key="'q' + question.id + '-' + option"
              @click="checkPracticeAnswer(question.id, option)" :class="[
                'px-4 py-2 rounded-lg font-mono font-bold transition-all',
                getPracticeButtonClass(question.id, option)
              ]">
              {{ option }}
            </button>
          </div>
          <p v-if="practiceAnswers[question.id] === question.correctAnswer" class="text-green-700 text-sm mt-2"
            v-html="getPracticeFeedback(question.id)">
          </p>
          <p v-else-if="practiceAnswers[question.id] !== null && practiceAnswers[question.id] !== question.correctAnswer"
            class="text-red-700 text-sm mt-2">
            ❌ Falsch. Versuche es nochmal!
          </p>
        </div>

        <div v-if="allPracticeCorrect" class="bg-green-50 border-2 border-green-400 rounded-lg p-4 text-center">
          <p class="text-green-800 font-bold text-lg" v-html="VIGENERE_TABULA_RECTA.practiceSuccessMessage"></p>
          <p class="text-green-700 text-sm mt-1">Du bist bereit für das vollständige Beispiel unten.</p>
        </div>
      </div>
    </div>

    <!-- Example with Key -->
    <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
      <h4 class="font-bold text-gray-800 mb-3">📝 Vollständiges Beispiel mit Schlüsselwort "OLE"</h4>

      <!-- Table format -->
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
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">F</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">U</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">S</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">S</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">B</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">A</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">L</td>
              <td class="text-center px-2 py-2 font-bold text-blue-600 bg-blue-50">L</td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="text-gray-600 font-semibold py-2 pr-4">Schlüssel:</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">O</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">L</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">E</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">O</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">L</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">E</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">O</td>
              <td class="text-center px-2 py-2 font-bold text-purple-600 bg-purple-100">L</td>
            </tr>
            <tr class="border-t-2 border-gray-300">
              <td class="text-gray-600 font-semibold py-2 pr-4">Geheimtext:</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">T</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">F</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">W</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">G</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">M</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">E</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">Z</td>
              <td class="text-center px-2 py-2 font-bold text-orange-600 bg-orange-200 rounded">W</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-3 text-sm text-gray-600 bg-blue-50 p-3 rounded">
        <strong>💡 So funktioniert's:</strong><br>
        Der Schlüssel "OLE" (3 Buchstaben) wiederholt sich über den gesamten Text.<br>
        Jeder Buchstabe wird mit dem entsprechenden Schlüsselbuchstaben verschlüsselt:<br>
        F + O = T, U + L = F, S + E = W, S + O = G, B + L = M, A + E = E, L + O = Z, L + L = W
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useVigenereCipher } from '@/composables/useVigenereCipher';
import { VIGENERE_ALPHABET, VIGENERE_TABULA_RECTA } from '@/constants/vigenere';

const { encryptChar, getVigenereChar } = useVigenereCipher();
const alphabet = VIGENERE_ALPHABET;

const examplePlainChar = ref('F');
const exampleKeyChar = ref('O');

// Practice questions state
const practiceAnswers = ref<{ [key: number]: string | null }>({
  1: null,
  2: null,
  3: null
});

// Get correct answers from constants
const correctAnswers: { [key: number]: string } = {};
VIGENERE_TABULA_RECTA.practiceQuestions.forEach(q => {
  correctAnswers[q.id] = q.correctAnswer;
});

const allPracticeCorrect = computed(() => {
  return VIGENERE_TABULA_RECTA.practiceQuestions.every(q =>
    practiceAnswers.value[q.id] === q.correctAnswer
  );
});

function checkPracticeAnswer(questionNum: number, answer: string) {
  practiceAnswers.value[questionNum] = answer;
}

function getPracticeFeedback(questionNum: number): string {
  const answer = practiceAnswers.value[questionNum];
  const question = VIGENERE_TABULA_RECTA.practiceQuestions.find(q => q.id === questionNum);

  if (!question) return '';

  return answer === question.correctAnswer
    ? question.feedbackCorrect
    : question.feedbackWrong;
}

function getPracticeButtonClass(questionNum: number, option: string): string {
  const answer = practiceAnswers.value[questionNum];
  const correct = correctAnswers[questionNum];

  if (answer === null) {
    return 'bg-white border-2 border-gray-300 hover:bg-purple-50 hover:border-purple-400 cursor-pointer';
  }

  // Nur die richtige Antwort grün zeigen, wenn sie auch angeklickt wurde
  if (option === correct && answer === correct) {
    return 'bg-green-500 text-white border-2 border-green-600 cursor-pointer hover:bg-green-600';
  }

  // Falsche Antwort rot zeigen
  if (option === answer && answer !== correct) {
    return 'bg-red-500 text-white border-2 border-red-600 cursor-pointer hover:bg-red-600';
  }

  // Alle anderen Buttons grau/inaktiv, aber weiterhin klickbar
  return 'bg-gray-100 text-gray-500 border-2 border-gray-200 cursor-pointer hover:bg-gray-200';
}

function isHighlightedCell(row: number, col: number): boolean {
  const plainIndex = alphabet.indexOf(examplePlainChar.value);
  const keyIndex = alphabet.indexOf(exampleKeyChar.value);
  return row === keyIndex && col === plainIndex;
}
</script>
