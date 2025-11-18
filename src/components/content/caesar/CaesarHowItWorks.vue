<template>
  <section class="mb-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 p-6 rounded-xl">
    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
      <span class="text-2xl">💡</span>
      So funktioniert die Caesar-Verschlüsselung
    </h3>
    
    <div class="grid md:grid-cols-2 gap-4 mb-4">
      <div 
        v-for="(step, index) in HOW_IT_WORKS_STEPS" 
        :key="index"
        class="bg-white p-4 rounded-lg shadow-sm"
      >
        <h4 class="font-semibold text-blue-700 mb-2 flex items-center gap-2">
          <span>{{ step.emoji }}</span> {{ step.title }}
        </h4>
        <p class="text-sm text-gray-700" v-html="step.description"></p>
      </div>
    </div>

    <div class="bg-blue-100 p-4 rounded-lg mt-4">
      <h4 class="font-semibold text-blue-900 mb-2">Sicherheit</h4>
      <p class="text-sm text-gray-800">
        Die Caesar-Verschlüsselung ist heute <strong>nicht mehr sicher</strong>, weil es nur 
        26 mögliche Schlüssel gibt. Ein Computer kann alle in Sekundenbruchteilen durchprobieren 
        (sogenannte "Brute-Force-Attacke"). Moderne Verschlüsselungen nutzen viel komplexere Methoden!
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Caesar How It Works Component
 * Explains the step-by-step process of Caesar cipher
 */

const HOW_IT_WORKS_STEPS = [
  {
    emoji: '1️⃣',
    title: 'Wähle einen Schlüssel',
    description: 'Der Schlüssel ist eine Zahl zwischen 0 und 25. Sie bestimmt, um wie viele Positionen jeder Buchstabe verschoben wird. Caesar nutzte meistens <strong>3</strong>.',
  },
  {
    emoji: '2️⃣',
    title: 'Verschiebe die Buchstaben',
    description: 'Jeder Buchstabe wird um die Anzahl des Schlüssels im Alphabet nach vorne verschoben. Beispiel: A + 3 = D',
  },
  {
    emoji: '3️⃣',
    title: 'Umgang mit Z',
    description: 'Wenn das Alphabet endet, beginnt es von vorne. <strong>Z + 3 = C</strong>. Das nennt man "modulare Arithmetik".',
  },
  {
    emoji: '4️⃣',
    title: 'Entschlüsselung',
    description: 'Zum Entschlüsseln verschiebst du einfach in die andere Richtung. Oder nutze <strong>26 - Schlüssel</strong> als neue Verschiebung.',
  },
] as const
</script>
