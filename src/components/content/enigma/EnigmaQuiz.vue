<template>
  <section id="quiz" class="mb-16 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <span class="text-4xl">✅</span>
      Quiz: ENIGMA
    </h2>

    <div class="space-y-6">
      <!-- Instructions -->
      <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <p class="text-gray-700">
          Teste dein Wissen über die ENIGMA-Maschine! Beantworte alle Fragen und überprüfe dein
          Verständnis.
        </p>
      </div>

      <!-- Questions -->
      <div
        v-for="(question, qIndex) in questions"
        :key="qIndex"
        class="bg-white rounded-lg shadow-lg border-2 p-6"
        :class="[
          answers[qIndex] === undefined
            ? 'border-gray-300'
            : answers[qIndex] === question.correctIndex
              ? 'border-green-500'
              : 'border-red-500',
        ]"
      >
        <div class="mb-4">
          <h3 class="text-lg font-bold text-gray-800 mb-2">
            Frage {{ qIndex + 1 }}: {{ question.question }}
          </h3>
        </div>

        <div class="space-y-3">
          <button
            v-for="(option, oIndex) in question.options"
            :key="oIndex"
            class="w-full text-left px-4 py-3 rounded-lg border-2 transition-all"
            :class="getOptionClass(qIndex, oIndex, question.correctIndex)"
            @click="selectAnswer(qIndex, oIndex)"
          >
            <span class="font-semibold">{{ String.fromCharCode(65 + oIndex) }})</span>
            {{ option }}
          </button>
        </div>

        <!-- Explanation -->
        <div
          v-if="answers[qIndex] !== undefined"
          class="mt-4 p-4 rounded-lg"
          :class="answers[qIndex] === question.correctIndex ? 'bg-green-50' : 'bg-red-50'"
        >
          <p
            class="text-sm font-semibold mb-2"
            :class="answers[qIndex] === question.correctIndex ? 'text-green-800' : 'text-red-800'"
          >
            {{ answers[qIndex] === question.correctIndex ? '✓ Richtig!' : '✗ Leider falsch!' }}
          </p>
          <p class="text-sm text-gray-700">{{ question.explanation }}</p>
        </div>
      </div>

      <!-- Score -->
      <div
        v-if="allAnswered"
        class="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg shadow-lg border-2 border-purple-300"
      >
        <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Dein Ergebnis</h3>
        <div class="text-center">
          <div class="text-6xl font-bold mb-4" :class="scoreColor">
            {{ correctAnswers }} / {{ questions.length }}
          </div>
          <p class="text-xl text-gray-700 mb-6">{{ scoreMessage }}</p>

          <div class="flex justify-center gap-4">
            <button
              class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-bold"
              @click="resetQuiz"
            >
              🔄 Quiz wiederholen
            </button>
          </div>
        </div>

        <!-- Achievement Badges -->
        <div v-if="correctAnswers === questions.length" class="mt-8 text-center">
          <div class="text-6xl mb-3">🏆</div>
          <p class="text-lg font-bold text-yellow-700">ENIGMA-Experte!</p>
          <p class="text-gray-600">Du hast alle Fragen richtig beantwortet!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ENIGMA_QUIZ_QUESTIONS } from '@/constants/enigma';

const questions = ENIGMA_QUIZ_QUESTIONS;
const answers = ref<(number | undefined)[]>(Array(questions.length).fill(undefined));

const correctAnswers = computed(() => {
  return answers.value.filter((answer, index) => answer === questions[index].correctIndex).length;
});

const allAnswered = computed(() => {
  return answers.value.every(answer => answer !== undefined);
});

const scoreColor = computed(() => {
  const percentage = (correctAnswers.value / questions.length) * 100;
  if (percentage === 100) return 'text-green-600';
  if (percentage >= 80) return 'text-blue-600';
  if (percentage >= 60) return 'text-yellow-600';
  return 'text-red-600';
});

const scoreMessage = computed(() => {
  const percentage = (correctAnswers.value / questions.length) * 100;
  if (percentage === 100) return 'Perfekt! Du hast die ENIGMA vollständig verstanden! 🎉';
  if (percentage >= 80) return 'Sehr gut! Du kennst dich mit ENIGMA aus! 👏';
  if (percentage >= 60) return 'Gut gemacht! Ein paar Themen solltest du nochmal wiederholen.';
  return 'Lies dir die Abschnitte nochmal durch und versuche es erneut!';
});

function selectAnswer(questionIndex: number, optionIndex: number) {
  answers.value[questionIndex] = optionIndex;
  // Trigger reactivity
  answers.value = [...answers.value];
}

function getOptionClass(qIndex: number, oIndex: number, correctIndex: number): string {
  const selected = answers.value[qIndex] === oIndex;
  const isCorrect = oIndex === correctIndex;
  const answered = answers.value[qIndex] !== undefined;

  if (!answered) {
    return selected
      ? 'border-blue-500 bg-blue-50'
      : 'border-gray-300 hover:border-blue-300 hover:bg-gray-50';
  }

  if (selected && isCorrect) {
    return 'border-green-500 bg-green-100';
  }

  if (selected && !isCorrect) {
    return 'border-red-500 bg-red-100';
  }

  if (isCorrect) {
    return 'border-green-500 bg-green-50';
  }

  return 'border-gray-300 bg-gray-50';
}

function resetQuiz() {
  answers.value = Array(questions.length).fill(undefined);
}
</script>
