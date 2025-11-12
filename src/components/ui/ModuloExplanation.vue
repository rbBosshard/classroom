<template>
    <div class="mb-8">
        <!-- Toggle Button -->
        <button @click="isOpen = !isOpen"
            class="flex items-center justify-between w-full bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 px-5 py-3 rounded-lg border border-blue-300 transition-all duration-300">
            <span class="font-semibold text-gray-800 text-lg flex items-center gap-2">
                🔢 Die Modulo-Rechnung (mod 26)
            </span>
            <span class="text-indigo-600 font-medium">
                {{ isOpen ? '▲ Verbergen' : '▼ Anzeigen' }}
            </span>
        </button>

        <!-- Collapsible Content -->
        <transition name="fade-slide">
            <div v-if="isOpen"
                class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-300 mt-4">
                <div class="space-y-4 text-gray-700">
                    <!-- Grundkonzept -->
                    <div class="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 class="font-semibold text-blue-800 mb-2">Was ist Modulo?</h4>
                        <p class="mb-3">
                            Die <strong>Modulo-Operation</strong> (geschrieben als <code>%</code> oder <code>mod</code>) gibt den Rest einer
                            Division zurück. In der Kryptographie verwenden wir <strong>mod 26</strong>, weil das
                            lateinische Alphabet 26 Buchstaben hat.
                        </p>
                        <div class="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                            <p class="font-medium">Beispiele:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1">
                                <li><code>27 mod 26 = 1</code> (27 ÷ 26 = 1 Rest 1)</li>
                                <li><code>52 mod 26 = 0</code> (52 ÷ 26 = 2 Rest 0)</li>
                                <li><code>30 mod 26 = 4</code> (30 ÷ 26 = 1 Rest 4)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Warum mod 26? -->
                    <div class="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 class="font-semibold text-blue-800 mb-2">Warum mod 26 beim Alphabet?</h4>
                        <p class="mb-3">Das Alphabet hat 26 Buchstaben (A-Z). Wir ordnen jedem Buchstaben eine Zahl zu:
                        </p>
                        <p class="text-sm text-gray-600">A=0, B=1, C=2, ... Y=24, Z=25</p>
                    </div>

                    <!-- Praktisches Beispiel -->
                    <div class="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 class="font-semibold text-blue-800 mb-2">Praktisches Beispiel: Über Z hinaus</h4>
                        <p class="mb-3">
                            Was passiert, wenn wir bei <strong>Z (25)</strong> sind und um 3 verschieben?
                        </p>
                        <div class="space-y-2 bg-indigo-50 p-3 rounded">
                            <p><strong>Berechnung:</strong></p>
                            <ol class="list-decimal list-inside space-y-1 ml-2">
                                <li>Z hat Position: <code>25</code></li>
                                <li>Verschiebung: <code>+3</code></li>
                                <li>Ergebnis: <code>25 + 3 = 28</code></li>
                                <li>Modulo anwenden: <code>28 mod 26 = 2</code></li>
                                <li>Position 2 ist: <strong>C</strong> ✓</li>
                            </ol>
                        </div>
                        <p class="mt-3 text-sm text-blue-800">
                            💡 Durch <code>mod 26</code> "wickeln" wir das Alphabet um sich selbst wie bei einer Uhr –
                            nach Z kommt wieder A!
                        </p>
                    </div>

                    <!-- Demo -->
                    <div class="bg-white p-4 rounded-lg border-2 border-indigo-300">
                        <h4 class="font-semibold text-indigo-800 mb-3">🎯 Demo</h4>
                        <div class="space-y-4">
                            <!-- Input -->
                            <div class="flex flex-wrap gap-4 items-end">
                                <div class="flex-1 min-w-[120px]">
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Buchstabe:</label>
                                    <select v-model="selectedLetter"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                                        <option v-for="letter in alphabet" :key="letter" :value="letter">
                                            {{ letter }}
                                        </option>
                                    </select>
                                </div>
                                <div class="flex-1 min-w-[120px]">
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Verschiebung:</label>
                                    <input v-model.number="shift" type="number" min="-50" max="50"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                                </div>
                            </div>

                            <!-- Calculation Display -->
                            <div
                                class="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-indigo-200">
                                <div class="space-y-2 font-mono text-sm sm:text-base">
                                    <div class="flex justify-between items-center">
                                        <span>Buchstabe <strong class="text-purple-600">{{ selectedLetter
                                        }}</strong></span>
                                        <span class="text-gray-600">=</span>
                                        <span class="text-purple-600 font-bold">{{ letterPosition }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span>Verschiebung</span>
                                        <span class="text-gray-600">=</span>
                                        <span class="text-indigo-600 font-bold">{{ shift }}</span>
                                    </div>
                                    <hr class="border-gray-300" />
                                    <div class="flex justify-between items-center">
                                        <span>Summe</span>
                                        <span class="text-gray-600">=</span>
                                        <span class="text-blue-600 font-bold">{{ letterPosition + shift }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span>mod 26</span>
                                        <span class="text-gray-600">=</span>
                                        <span class="text-green-600 font-bold">{{ moduloResult }}</span>
                                    </div>
                                    <hr class="border-gray-300" />
                                    <div class="flex justify-between items-center text-lg">
                                        <span class="font-semibold">Ergebnis</span>
                                        <span class="text-gray-600">=</span>
                                        <span class="text-green-700 font-bold text-xl">{{ resultLetter }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Visual Representation -->
                            <div class="bg-gray-50 p-3 rounded-lg">
                                <p class="text-sm text-gray-700 mb-2 font-medium">Visuelle Darstellung:</p>
                                <div class="flex items-center justify-center gap-2 text-lg sm:text-xl">
                                    <span class="px-4 py-2 bg-purple-100 rounded-lg font-bold">{{ selectedLetter
                                    }}</span>
                                    <span class="text-gray-500">+</span>
                                    <span class="px-4 py-2 bg-indigo-100 rounded-lg font-bold">{{ shift }}</span>
                                    <span class="text-gray-500">→</span>
                                    <span class="px-4 py-2 bg-green-100 rounded-lg font-bold text-green-700">{{
                                        resultLetter }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Wichtige Hinweise -->
                    <div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                        <h4 class="font-semibold text-amber-800 mb-2">💡 Wichtige Hinweise</h4>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li><strong>mod 26</strong> sorgt dafür, dass wir immer im Bereich 0-25 bleiben</li>
                            <li>Negative Verschiebungen funktionieren auch (z.B. -1 mod 26 = 25)</li>
                            <li>Diese Operation macht das Alphabet zu einem "Ring" – es hat kein Ende!</li>
                            <li>In der Programmierung: <code>(position + shift) % 26</code></li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Toggle
const isOpen = ref(false);

// State
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const selectedLetter = ref('A');
const shift = ref(3);

// Computed
const letterPosition = computed(() => selectedLetter.value.charCodeAt(0) - 65);
const moduloResult = computed(() => ((letterPosition.value + shift.value) % 26 + 26) % 26);
const resultLetter = computed(() => String.fromCharCode(moduloResult.value + 65));
</script>

<style scoped>
code {
    background-color: #e5e7eb;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
    font-family: 'Courier New', monospace;
    font-weight: 600;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
