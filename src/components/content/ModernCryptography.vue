<template>
  <div class="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
    <ModernHeader />
    <BinaryXor />
    <OneTimePad />
    <ImageXor />
    <BlockCiphers />
  </div>
</template>

<script setup lang="ts">
/**
 * Modern Cryptography Component
 *
 * Behandelt moderne (symmetrische) Verschlüsselung:
 * - Einführung: Bits statt Buchstaben
 * - Coding vs. Verschlüsselung (interaktives Quiz)
 * - Binary XOR Operation (mit Übungen)
 * - One-Time-Pad (Brücke historisch zu modern)
 * - XOR Visualisierung mit Schwarz-Weiss Bildern
 * - Moderne Block Ciphers (AES)
 */

import ModernHeader from './modern/ModernHeader.vue';
import BinaryXor from './modern/BinaryXor.vue';
import OneTimePad from './modern/OneTimePad.vue';
import ImageXor from './modern/ImageXor.vue';
import BlockCiphers from './modern/BlockCiphers.vue';
</script>
