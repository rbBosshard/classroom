<template>
  <div class="mentimeter-container bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
    <button
      class="w-full flex items-center justify-between text-left hover:bg-blue-100 transition-colors rounded-lg p-3 -m-3 mb-4"
      @click="isOpen = !isOpen"
    >
      <h3 class="text-lg font-semibold text-gray-800">
        📊 Selbsteinschätzung: Lernziele erreicht?
      </h3>
      <span class="text-2xl text-gray-600 transition-transform" :class="{ 'rotate-180': isOpen }">
        ▼
      </span>
    </button>

    <div v-show="isOpen" class="survey-content">
      <p class="text-sm text-gray-600 mb-4">
        Bewerten Sie für jedes Lernziel, wie gut Sie es erreicht haben:
      </p>

      <div v-if="mentimeterUrl" class="mentimeter-embed mb-4">
        <iframe
          :src="mentimeterUrl"
          title="Mentimeter Umfrage"
          class="w-full rounded border border-blue-300"
          style="height: 600px"
          frameborder="0"
          allow="fullscreen"
          tabindex="-1"
          loading="lazy"
        />
      </div>

      <div v-else class="manual-survey space-y-4">
        <div
          v-for="(objective, index) in learningObjectives"
          :key="index"
          class="bg-white border border-gray-200 rounded-lg p-4"
        >
          <p class="text-sm font-medium text-gray-800 mb-3">{{ objective }}</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="option in surveyOptions"
              :key="option.value"
              :class="[
                'px-4 py-2 rounded text-sm transition-colors',
                option.color,
                'hover:opacity-80',
              ]"
              @click="selectOption(index, option.value)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div class="text-center mt-6">
          <p class="text-xs text-gray-500 italic">
            Hinweis: Um die Umfrage für alle Schüler zu aktivieren, füge eine Mentimeter-URL hinzu.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  learningObjectives: string[];
  mentimeterUrl?: string;
}

defineProps<Props>();

const isOpen = ref(false);

const surveyOptions = [
  { label: '✅ Ja', value: 'yes', color: 'bg-green-500 text-white' },
  { label: '👍 Eher ja', value: 'mostly-yes', color: 'bg-green-300 text-gray-800' },
  { label: '👎 Eher nein', value: 'mostly-no', color: 'bg-red-300 text-gray-800' },
  { label: '❌ Nein', value: 'no', color: 'bg-red-500 text-white' },
];

const selectOption = (objectiveIndex: number, value: string) => {
  console.log(`Objective ${objectiveIndex} rated as: ${value}`);
  // In einer echten Implementation würde hier die Antwort gespeichert werden
};
</script>

<style scoped>
.mentimeter-embed {
  min-height: 500px;
}

.rotate-180 {
  transform: rotate(180deg);
}

.survey-content {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
