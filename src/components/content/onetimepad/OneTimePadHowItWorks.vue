<template>
  <section id="how-it-works" class="mb-8 sm:mb-12">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
      <span>⚙️</span>
      <span>Wie funktioniert es?</span>
    </h2>

    <!-- XOR-Operation -->
    <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
      <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span>🔢</span>
        <span>Die XOR-Operation (⊕)</span>
      </h3>

      <p class="text-sm sm:text-base text-gray-700 mb-4">
        Das One-Time-Pad verwendet die <strong>XOR-Operation</strong> (Exklusives Oder). Diese
        Operation hat eine wichtige Eigenschaft: Sie ist ihre eigene Umkehrung!
      </p>

      <!-- XOR Wahrheitstabelle -->
      <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <h4 class="font-bold text-gray-900 mb-3">XOR Wahrheitstabelle:</h4>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-300 text-center">
            <thead class="bg-gray-100">
              <tr>
                <th class="border border-gray-300 px-4 py-2 font-bold">A</th>
                <th class="border border-gray-300 px-4 py-2 font-bold">B</th>
                <th class="border border-gray-300 px-4 py-2 font-bold">A ⊕ B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">0</td>
                <td class="border border-gray-300 px-4 py-2">0</td>
                <td class="border border-gray-300 px-4 py-2 font-bold">0</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">0</td>
                <td class="border border-gray-300 px-4 py-2">1</td>
                <td class="border border-gray-300 px-4 py-2 font-bold text-green-600">1</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">1</td>
                <td class="border border-gray-300 px-4 py-2">0</td>
                <td class="border border-gray-300 px-4 py-2 font-bold text-green-600">1</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">1</td>
                <td class="border border-gray-300 px-4 py-2">1</td>
                <td class="border border-gray-300 px-4 py-2 font-bold">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-gray-600 mt-3">
          ✨ <strong>Regel:</strong> Nur wenn die Bits unterschiedlich sind, ist das Ergebnis 1
        </p>
      </div>

      <!-- Beispiel -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
        <h4 class="font-bold text-gray-900 mb-3">Verschlüsselungsbeispiel:</h4>
        <div class="space-y-2 font-mono text-xs sm:text-sm">
          <div class="bg-white p-3 rounded">
            <div class="text-gray-600 mb-1">Klartext (Buchstabe 'A' = 01000001):</div>
            <div class="text-lg font-bold">01000001</div>
          </div>
          <div class="bg-white p-3 rounded">
            <div class="text-gray-600 mb-1">Schlüssel (zufällig):</div>
            <div class="text-lg font-bold">11010110</div>
          </div>
          <div class="text-center text-2xl text-purple-600 font-bold">⊕</div>
          <div class="bg-white p-3 rounded">
            <div class="text-gray-600 mb-1">Geheimtext:</div>
            <div class="text-lg font-bold text-green-600">10010111</div>
          </div>
        </div>
        <p class="text-sm text-gray-600 mt-3">
          💡 <strong>Wichtig:</strong> Mit demselben Schlüssel XOR-verknüpft ergibt sich wieder der
          Klartext!
        </p>
      </div>
    </div>

    <!-- Anforderungen -->
    <div class="bg-amber-50 border-l-4 border-amber-400 p-4 sm:p-6 rounded-r-lg">
      <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span>⚠️</span>
        <span>Strikte Anforderungen für perfekte Sicherheit</span>
      </h3>
      <div class="space-y-3">
        <div
          v-for="(requirement, index) in OTP_KEY_REQUIREMENTS"
          :key="index"
          class="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm"
        >
          <span class="text-2xl flex-shrink-0">{{ index + 1 }}.</span>
          <p class="text-sm sm:text-base text-gray-700">{{ requirement }}</p>
        </div>
      </div>
      <div class="mt-4 bg-red-50 border border-red-200 p-3 rounded-lg">
        <p class="text-sm text-red-800 font-semibold">
          🚨 Wird auch nur EINE dieser Anforderungen verletzt, ist die perfekte Sicherheit nicht
          mehr gewährleistet!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { OTP_KEY_REQUIREMENTS } from '@/constants/onetimepad';
</script>
