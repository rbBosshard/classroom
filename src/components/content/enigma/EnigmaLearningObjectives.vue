<template>
  <section
    class="mb-12 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border-l-4 border-red-500"
  >
    <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
      <span class="text-3xl">🎯</span>
      Lernziele
    </h2>
    <div class="grid md:grid-cols-2 gap-4">
      <div
        v-for="(objective, index) in learningObjectives"
        :key="index"
        class="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <span class="text-2xl flex-shrink-0">{{ objective.icon }}</span>
        <div>
          <h3 class="font-semibold text-gray-800 mb-1">{{ objective.title }}</h3>
          <p class="text-sm text-gray-600">{{ objective.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const learningObjectives = [
  {
    icon: '⚙️',
    title: 'Rotor-Mechanik (Scrambler)',
    description: 'Lerne, wie Rotoren die Verschlüsselung bei jedem Buchstaben ändern',
  },
  {
    icon: '🔌',
    title: 'Steckerbrett-Funktion (Plugboard)',
    description: 'Erkenne die zusätzliche Sicherheitsebene durch das Steckerbrett',
  },
  {
    icon: '🖥️',
    title: 'Praktische Anwendung',
    description: 'Verschlüssle eigene Nachrichten mit einem ENIGMA-Simulator',
  },
  {
    icon: '🔍',
    title: 'Kryptoanalyse',
    description: 'Entdecke die Schwachstellen, die zum Knacken führten',
  },
  {
    icon: '📜',
    title: 'Historischer Kontext',
    description: 'Verstehe die Bedeutung von ENIGMA im 2. Weltkrieg',
  },
];
</script>
