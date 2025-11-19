<template>
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
      <div class="flex items-center mb-4">
        <span class="text-5xl mr-4">📚</span>
        <div>
          <h1 class="text-3xl sm:text-4xl font-bold text-primary-900 mb-2">
            Theorie: Transpositionsverschlüsselung
          </h1>
          <p class="text-lg text-gray-600">Verstehe die Grundlagen der Transposition</p>
        </div>
      </div>
    </div>

    <!-- Materials Section -->
    <MaterialList :materials="topic?.materials" />

    <!-- Was ist Transposition? -->
    <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
      <h2 class="text-2xl font-bold text-primary-900 mb-4 flex items-center">
        <span class="text-3xl mr-3">🔀</span>
        Was ist Transposition?
      </h2>
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-700 leading-relaxed mb-4">
          Bei der <strong>Transpositionsverschlüsselung</strong> werden die Buchstaben des Klartexts
          in ihrer <strong>Reihenfolge vertauscht</strong> (transponiert).
        </p>
        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <p class="text-green-900 font-semibold">📌 Kernprinzip</p>
          <p class="text-green-800 mt-2">
            Die <em>Zeichen selbst</em> bleiben gleich, nur ihre <em>Position</em> wird verändert.
          </p>
        </div>
      </div>
    </div>

    <!-- Sources -->
    <Sources :sources="SKYTALE_SOURCES" />

    <!-- Weiter Button -->
    <div class="flex justify-center mt-8">
      <button
        @click="$emit('back')"
        class="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
      >
        Zurück zur Übersicht
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MaterialList from '../ui/MaterialList.vue';
import Sources from '../ui/Sources.vue';
import { SKYTALE_SOURCES } from '@/constants/skytale';
import type { Topic } from '../../types/curriculum';

defineProps<{
  topic?: Topic | null;
}>();
</script>

<style scoped>
.prose {
  max-width: none;
}
</style>
