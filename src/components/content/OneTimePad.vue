<template>
  <div class="crypto-card p-4 sm:p-6 md:p-8">
    <!-- Header -->
    <OneTimePadHeader />

    <!-- Learning Objectives -->
    <OneTimePadLearningObjectives />

    <!-- Navigation Links -->
    <nav class="mb-8 top-0 bg-white z-20 py-4 border-b-2 border-gray-200 shadow-sm">
      <div class="flex flex-wrap gap-2 justify-center">
        <a
          v-for="(section, index) in sections"
          :key="section.id"
          :href="'#' + section.id"
          :class="[
            'px-4 py-2 font-semibold transition-colors rounded-lg',
            index <= currentSectionIndex
              ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-600 hover:text-white'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200',
          ]"
          @click="updateProgress(index)"
        >
          {{ section.icon }} {{ section.label }}
        </a>
      </div>
    </nav>

    <!-- Sections -->
    <OneTimePadIntro />
    <OneTimePadHowItWorks />
    <OneTimePadInteractive />
    <OneTimePadPerfectSecrecy />
    <OneTimePadProblems />
    <OneTimePadQuiz />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OneTimePadHeader from './onetimepad/OneTimePadHeader.vue';
import OneTimePadLearningObjectives from './onetimepad/OneTimePadLearningObjectives.vue';
import OneTimePadIntro from './onetimepad/OneTimePadIntro.vue';
import OneTimePadHowItWorks from './onetimepad/OneTimePadHowItWorks.vue';
import OneTimePadInteractive from './onetimepad/OneTimePadInteractive.vue';
import OneTimePadPerfectSecrecy from './onetimepad/OneTimePadPerfectSecrecy.vue';
import OneTimePadProblems from './onetimepad/OneTimePadProblems.vue';
import OneTimePadQuiz from './onetimepad/OneTimePadQuiz.vue';
import { OTP_SECTIONS } from '@/constants/onetimepad';

const sections = OTP_SECTIONS;
const currentSectionIndex = ref(0);

function updateProgress(index: number) {
  if (index > currentSectionIndex.value) {
    currentSectionIndex.value = index;
  }
}
</script>

<style scoped>
.crypto-card {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
