<template>
  <section id="quiz" class="space-y-6 mb-12 scroll-mt-32">
    <h3 class="text-2xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2">
      ✍️ Quiz: Überprüfe dein Wissen
    </h3>

    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
      <p class="text-gray-700">
        Teste, ob du die wichtigsten Konzepte der Vigenère-Verschlüsselung verstanden hast!
      </p>
    </div>

    <!-- Questions -->
    <div
      v-for="question in questions"
      :key="'question-' + question.id"
      class="bg-white border-2 border-gray-300 rounded-lg p-4 sm:p-6"
    >
      <div class="flex items-start gap-3 mb-4">
        <span
          class="bg-purple-600 text-white w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center font-bold"
        >
          {{ question.id }}
        </span>
        <div class="flex-1">
          <h4 class="font-bold text-gray-800 mb-3">
            {{ question.question }}
          </h4>
          <div class="space-y-2">
            <label
              v-for="(option, index) in question.options"
              :key="'q' + question.id + '-' + index"
              :class="[
                'block p-3 rounded-lg border-2 cursor-pointer transition-all',
                getOptionClass(question.id, index),
              ]"
              @click="selectAnswer(question.id, index)"
            >
              <input
                v-model="answers[question.id]"
                type="radio"
                :name="'question' + question.id"
                :value="index"
                class="mr-2"
              />
              <span>{{ option.text }}</span>
            </label>
          </div>
          <div
            v-if="answers[question.id] !== null && showResults"
            class="mt-3 p-3 rounded-lg"
            :class="
              answers[question.id] === question.correctAnswer
                ? 'bg-green-50 border border-green-300'
                : 'bg-red-50 border border-red-300'
            "
          >
            <p
              class="text-sm"
              :class="
                answers[question.id] === question.correctAnswer ? 'text-green-800' : 'text-red-800'
              "
            >
              {{
                answers[question.id] === question.correctAnswer
                  ? '✅ Richtig!'
                  : '❌ Leider falsch.'
              }}
              {{ question.explanation }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Check Answers Button -->
    <div class="flex flex-col items-center gap-3">
      <button
        :disabled="!allQuestionsAnswered"
        class="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg"
        @click="checkAnswers"
      >
        {{ showResults ? '🔄 Neu starten' : '✅ Antworten überprüfen' }}
      </button>
      <p v-if="!allQuestionsAnswered" class="text-sm text-gray-500">
        Beantworte alle Fragen, um das Ergebnis zu sehen
      </p>
    </div>

    <!-- Results Summary -->
    <div
      v-if="showResults"
      class="bg-gradient-to-r from-purple-50 to-blue-50 border-2 rounded-lg p-6"
    >
      <h4 class="text-xl font-bold text-gray-800 mb-3 text-center">
        {{ scoreResult.emoji }} {{ scoreResult.title }}
      </h4>
      <p class="text-center text-2xl font-bold text-purple-600 mb-2">
        {{ score }} von {{ questions.length }} Punkten
      </p>
      <div class="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          class="h-4 rounded-full transition-all duration-500"
          :class="
            score === questions.length
              ? 'bg-green-500'
              : score >= 2
                ? 'bg-yellow-500'
                : 'bg-red-500'
          "
          :style="{ width: (score / questions.length) * 100 + '%' }"
        ></div>
      </div>
      <p class="text-sm text-gray-600 text-center">
        {{ scoreResult.message }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { VIGENERE_QUIZ_QUESTIONS, VIGENERE_QUIZ_RESULTS } from '@/constants/vigenere';

// Extract questions data
const questions = VIGENERE_QUIZ_QUESTIONS;

// State
const answers = ref<{ [key: number]: number | null }>({
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
});

const showResults = ref(false);

// Computed
const allQuestionsAnswered = computed(() => {
  return (
    answers.value[1] !== null &&
    answers.value[2] !== null &&
    answers.value[3] !== null &&
    answers.value[4] !== null &&
    answers.value[5] !== null &&
    answers.value[6] !== null &&
    answers.value[7] !== null &&
    answers.value[8] !== null &&
    answers.value[9] !== null
  );
});

const score = computed(() => {
  if (!showResults.value) return 0;
  let points = 0;
  questions.forEach(q => {
    if (answers.value[q.id] === q.correctAnswer) points++;
  });
  return points;
});

const scoreResult = computed(() => {
  const s = score.value;
  if (s === VIGENERE_QUIZ_RESULTS.scores.perfect.threshold) {
    return VIGENERE_QUIZ_RESULTS.scores.perfect;
  } else if (s >= VIGENERE_QUIZ_RESULTS.scores.veryGood.threshold) {
    return VIGENERE_QUIZ_RESULTS.scores.veryGood;
  } else if (s >= VIGENERE_QUIZ_RESULTS.scores.good.threshold) {
    return VIGENERE_QUIZ_RESULTS.scores.good;
  }
  return VIGENERE_QUIZ_RESULTS.scores.needsImprovement;
});

// Methods
function selectAnswer(questionNum: number, optionIndex: number) {
  if (!showResults.value) {
    answers.value[questionNum] = optionIndex;
  }
}

function getOptionClass(questionNum: number, optionIndex: number): string {
  const selected = answers.value[questionNum] === optionIndex;
  const question = questions.find(q => q.id === questionNum);

  if (!question) return 'border-gray-300 bg-white';

  if (!showResults.value) {
    return selected
      ? 'border-purple-500 bg-purple-50'
      : 'border-gray-300 bg-white hover:border-purple-300 hover:bg-purple-25';
  }

  // After checking answers
  const isCorrect = optionIndex === question.correctAnswer;

  if (selected && isCorrect) {
    return 'border-green-500 bg-green-50';
  } else if (selected && !isCorrect) {
    return 'border-red-500 bg-red-50';
  } else if (isCorrect) {
    return 'border-green-500 bg-green-50';
  }

  return 'border-gray-300 bg-white opacity-60';
}

function checkAnswers() {
  if (showResults.value) {
    // Reset
    showResults.value = false;
    answers.value = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
    };
  } else {
    showResults.value = true;
  }
}
</script>
