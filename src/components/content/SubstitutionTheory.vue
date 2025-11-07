<template>
    <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
            <div class="flex items-center mb-4">
                <div>
                    <h1 class="text-3xl sm:text-4xl font-bold text-primary-900 mb-2">
                        Theorie: Substitutionsverschlüsselung
                    </h1>
                </div>
            </div>
        </div>

        <!-- Materials Section -->
        <MaterialList :materials="topic?.materials" />

        <!-- Was ist Substitution? -->
        <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
            <h2 class="text-2xl font-bold text-primary-900 mb-4 flex items-center">
                <span class="text-3xl mr-3">🔤</span>
                Was ist Substitution?
            </h2>
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed mb-4">
                    Bei der <strong>Substitutionsverschlüsselung</strong> werden Buchstaben durch andere Buchstaben,
                    Zahlen oder Symbole <strong>ersetzt</strong> (substituiert).
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                    <p class="text-blue-900 font-semibold">📌 Kernprinzip</p>
                    <p class="text-blue-800 mt-2">
                        Die <em>Position</em> der Zeichen bleibt gleich, nur die <em>Zeichen selbst</em> werden
                        ausgetauscht.
                    </p>
                </div>
            </div>
        </div>

        <!-- Weiter Button -->
        <div class="flex justify-center mt-8">
            <button @click="$emit('back')"
                class="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Zurück zur Übersicht
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import MaterialList from '../ui/MaterialList.vue'
import type { Topic } from '../../types/curriculum'

defineProps<{
    topic?: Topic | null
}>()
</script>

<style scoped>
.prose {
    max-width: none;
}
</style>
