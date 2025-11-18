<script setup lang="ts">
import EnigmaHistory from './EnigmaHistory.vue';

import enigmaImage from '@/assets/images/enigma_wikipedia.jpg';
import enigmaImgageColored from '@/assets/images/enigma_colored.webp';
import enigmaImgageCircuit from '@/assets/images/enigma_clear_circuit.jpg';
</script>

<template>
  <section id="intro" class="mb-16 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <span class="text-4xl">🎯</span>
      Einführung: Was ist die ENIGMA?
    </h2>

    <div class="prose max-w-none">
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <!-- Text -->
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p class="text-lg text-gray-700 leading-relaxed">
            Die <strong>ENIGMA</strong> war eine elektromechanische Rotor-Chiffriermaschine, die im
            2. Weltkrieg von der Wehrmacht zur Verschlüsselung ihrer Funksprüche genutzt wurde. Die
            ENIGMA galt lange als unknackbar – bis ein Team um Alan Turing ("Vater der Informatik")
            die Verschlüsselung brach. Dieser Erfolg der Alliierten spielte eine entscheidende Rolle
            im Informationskrieg und trug massgeblich zum Ausgang des Krieges bei.
          </p>
        </div>

        <!-- Image -->
        <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col">
          <img
            :src="enigmaImage"
            alt="ENIGMA Chiffriermaschine"
            class="w-full h-100 object-cover"
          />
          <p class="text-xs text-gray-500 text-center py-2 bg-gray-50">
            ENIGMA M3 Chiffriermaschine (Wehrmacht)
          </p>
        </div>
      </div>

      <EnigmaHistory />

      <div class="bg-gradient-to-r from-pink-50 to-green-50 p-8 rounded-lg mb-8">
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          Die Verschlüsselungsmaschine ENIGMA im Überblick
        </h3>
        <!-- Image -->
        <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col">
          <img
            :src="enigmaImgageColored"
            alt="ENIGMA Chiffriermaschine Schema"
            class="w-full h-100 object-cover"
          />
          <p class="text-xs text-gray-500 text-center py-2 bg-gray-50"></p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 mb-8 mt-4">
          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
            <div class="text-4xl mb-3">1. ⌨️</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Tastatur (Keyboard)</h3>
            <p class="text-gray-600">26 Tasten für das Alphabet. Beim Drücken einer Taste...</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
            <div class="text-4xl mb-3">2. ⚙️</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Rotoren (Rotors / Scramblers)</h3>
            <p class="text-gray-600">
              ...läuft elektrischer Strom durch 3-5 Rotoren, die sich
              <strong>nach jedem Buchstaben drehen</strong>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
            <div class="text-4xl mb-3">3. 🔌</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Steckerbrett (Plugboard)</h3>
            <p class="text-gray-600">
              Vor und nach den Rotoren wird der Strom durch das Steckerbrett geleitet, das
              Buchstabenpaare vertauscht und die Sicherheit erhöht.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
            <div class="text-4xl mb-3">4. 💡</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Lampenfeld (Lampboard)</h3>
            <p class="text-gray-600">
              Eine Lampe leuchtet auf und zeigt den verschlüsselten Buchstaben an.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-grey-50 border-l-4 border-grey-500 p-6 rounded-r-lg">
        <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span>💡</span>
          ENIGMA Signal-Weg (Stromkreis)
        </h3>
        <!-- Image -->
        <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col">
          <img :src="enigmaImgageCircuit" alt="ENIGMA Circuit" class="w-full h-100 object-cover" />
          <p class="text-xs text-gray-500 text-center py-2 bg-gray-50"></p>
        </div>

        <div class="space-y-2 mb-6">
          <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <span
              class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm"
              >1</span
            >
            <span class="font-semibold">Taste drücken auf dem Keyboard</span>
            <span class="ml-auto">z.B. E</span>
          </div>

          <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <span
              class="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm"
              >2</span
            >
            <span class="font-semibold">Steckerbrett (Plugboard) Eingang</span>
            <span class="ml-auto">E → J (falls mit Kabel verbunden)</span>
          </div>

          <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
            <span
              class="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm"
              >3</span
            >
            <span class="font-semibold">Durch Rotoren vorwärts</span>
            <span class="ml-auto">J → A → G → W</span>
          </div>

          <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
            <span
              class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm"
              >4</span
            >
            <span class="font-semibold">Reflektor</span>
            <span class="ml-auto">W → L</span>
          </div>

          <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
            <span
              class="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm"
              >5</span
            >
            <span class="font-semibold">Durch Rotoren rückwärts</span>
            <span class="ml-auto">L → R → T → O</span>
          </div>

          <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <span
              class="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm"
              >6</span
            >
            <span class="font-semibold">Steckerbrett (Ausgang)</span>
            <span class="ml-auto">O → O (Kein Kabel mit O verbunden)</span>
          </div>

          <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
            <span
              class="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm"
              >7</span
            >
            <span class="font-semibold">Lampe leuchtet</span>
            <span class="ml-auto">Buchstabe O leuchtet</span>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
        <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span>💡</span>
          Warum war ENIGMA so sicher?
        </h3>
        <p class="text-gray-700 mb-4">
          Die Wehrmacht-ENIGMA (M3) hatte etwa <strong>159.000.000.000.000.000.000</strong>
          (159 Trilliarden) mögliche Einstellungen (so viele Schlüssel):
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>
            3 Rotoren aus 5 auswählen:
            <code class="bg-yellow-100 px-2 py-1 rounded">60 Möglichkeiten</code>
          </li>
          <li>
            Rotorstellungen (AAA-ZZZ):
            <code class="bg-yellow-100 px-2 py-1 rounded">17.576 Möglichkeiten</code>
          </li>
          <li>
            Ringstellungen (schauen wir nicht an):
            <code class="bg-yellow-100 px-2 py-1 rounded">17.576 Möglichkeiten</code>
          </li>
          <li>
            Steckerbrett (10 Kabelpaare):
            <code class="bg-yellow-100 px-2 py-1 rounded">~150 Billionen Möglichkeiten</code>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prose {
  line-height: 1.75;
}

code {
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}
</style>
