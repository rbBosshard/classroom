<template>
  <section class="mb-1">
    <div class="p-6">
      <div class="bg-white border-2 border-purple-300 rounded-lg p-5 mb-6">
        <div class="bg-purple-100 rounded-lg p-4">
          <p class="text-purple-900 mb-2"><strong>Beispiel aus der Mathematik:</strong></p>
          <ul class="space-y-2 text-purple-800 ml-4">
            <li>✓ <strong>Einfach:</strong> 6529 × 8191 = ? (mit Taschenrechner in Sekunden)</li>
            <li>
              ✗ <strong>Schwierig:</strong> Was sind die Primfaktoren von 53'474'239? (kann sehr
              lange dauern)
            </li>
          </ul>
        </div>
      </div>

      <p class="text-yellow-900 mb-2"><strong> Beispiele aus dem Alltag:</strong></p>
      <p class="text-yellow-800 mb-2">
        <strong>Ist es eine Einwegfunktion oder funktioniert es in beide Richtungen?</strong>
      </p>
      <div class="space-y-4">
        <ExampleCard v-for="(example, index) in examples" :key="index" :example="example" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ExampleCard from './ExampleCard.vue';

interface Example {
  title: string;
  emoji: string;
  isOneWay: boolean;
  explanation: string;
}

const examples = ref<Example[]>([
  {
    title: 'Brief in Briefkasten werfen',
    emoji: '✉️',
    isOneWay: true,
    explanation: 'Brief einwerfen ist einfach, ihn wieder herauszuholen ohne Schlüssel unmöglich.',
  },
  {
    title: 'Kuchen backen',
    emoji: '🍰',
    isOneWay: true,
    explanation:
      'Kuchen backen ist machbar, ihn wieder in Mehl, Eier und Zucker zu zerlegen unmöglich.',
  },
  {
    title: 'Wasser gefrieren',
    emoji: '🧊',
    isOneWay: false,
    explanation:
      'Wasser wird zu Eis und Eis schmilzt wieder zu Wasser – beide Richtungen etwa gleich einfach.',
  },
  {
    title: 'Ei kochen',
    emoji: '🥚',
    isOneWay: true,
    explanation: 'Ein Ei kochen ist einfach, es wieder roh zu machen ist unmöglich.',
  },
]);
</script>
