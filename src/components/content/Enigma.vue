<template>
  <div class="crypto-card p-4 sm:p-6 md:p-8">
    <!-- Header -->
    <EnigmaHeader />

    <!-- Learning Objectives -->
    <EnigmaLearningObjectives />

    <!-- Navigation Links -->
    <!-- sticky -->
    <nav class="mb-8 top-0 bg-white z-20 py-4 border-b-2 border-gray-200 shadow-sm">
      <div class="flex flex-wrap gap-2 justify-center">
        <a
          v-for="(section, index) in sections"
          :key="section.id"
          :href="'#' + section.id"
          :class="[
            'px-4 py-2 font-semibold transition-colors rounded-lg',
            'bg-gray-100 text-gray-500 hover:bg-gray-200',
          ]"
          @click="updateProgress(index)"
        >
          {{ section.icon }} {{ section.label }}
        </a>
      </div>
    </nav>

    <!-- Section 1: Einführung -->
    <EnigmaIntroduction />

    <!-- Section 4: Rotoren-->
    <EnigmaRotorPrinciple />

    <!-- Section 5: Steckerbrett -->
    <EnigmaPlugboard />

    <!-- Section 6: ENIGMA-Simulator -->
    <EnigmaSimulator />

    <!-- Section 7: Kryptoanalyse -->
    <EnigmaCryptanalysis />

    <!-- Section 8: Quiz -->
    <EnigmaQuiz />

    <!-- Sources -->
    <Sources :sources="ENIGMA_SOURCES" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EnigmaHeader from './enigma/EnigmaHeader.vue';
import EnigmaLearningObjectives from './enigma/EnigmaLearningObjectives.vue';
import EnigmaIntroduction from './enigma/EnigmaIntroduction.vue';
import EnigmaRotorPrinciple from './enigma/EnigmaRotorPrinciple.vue';
import EnigmaPlugboard from './enigma/EnigmaPlugboard.vue';
import EnigmaSimulator from './enigma/EnigmaSimulator.vue';
import EnigmaCryptanalysis from './enigma/EnigmaCryptanalysis.vue';
import EnigmaQuiz from './enigma/EnigmaQuiz.vue';
import Sources from '@/components/ui/Sources.vue';
import { ENIGMA_SECTIONS, ENIGMA_SOURCES } from '@/constants/enigma';

const sections = ENIGMA_SECTIONS;
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
