<template>
  <div class="crypto-card p-4 sm:p-6 md:p-8">
    <!-- Header -->
    <VigenereHeader />

    <!-- Navigation Links -->
    <nav class="mb-8 sticky top-0 bg-white z-20 py-4 border-b-2 border-gray-200 shadow-sm">
      <div class="flex flex-wrap gap-2 justify-center">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="'#' + section.id"
          class="px-4 py-2 font-semibold transition-colors rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-600 hover:text-white"
        >
          {{ section.icon }} {{ section.label }}
        </a>
      </div>
    </nav>

    <!-- Section 1: Tabula Recta -->
    <VigenereTabulaRecta />

    <!-- Section 2: Caesar vs. Vigenère Comparison -->
    <VigenereComparison />

    <!-- Section 3: Encrypt & Decrypt -->
    <VigenereEncryptDecrypt />

    <!-- Section 4: Kasiski Test -->
    <VigenereKasiski />
  </div>
</template>

<script setup lang="ts">
import VigenereHeader from './vigenere/VigenereHeader.vue';
import VigenereTabulaRecta from './vigenere/VigenereTabulaRecta.vue';
import VigenereComparison from './vigenere/VigenereComparison.vue';
import VigenereEncryptDecrypt from './vigenere/VigenereEncryptDecrypt.vue';
import VigenereKasiski from './vigenere/VigenereKasiski.vue';
import { VIGENERE_SECTIONS } from '@/constants/vigenere';

const sections = VIGENERE_SECTIONS;
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

details summary {
  list-style: none;
}

details summary::-webkit-details-marker {
  display: none;
}
</style>
