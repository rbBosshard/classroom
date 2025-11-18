<script setup lang="ts">
import enigmaImgageColored from '@/assets/images/enigma_rotor.svg';
</script>

<template>
  <section id="rotors" class="mb-16 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <span class="text-4xl">⚙️</span>
      Die Rotoren
    </h2>

    <div class="space-y-8">
      <!-- Visual Rotor Explanation -->
      <div class="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
          Wie funktioniert ein Rotor?
        </h3>

        <div class="grid md:grid-cols-2 gap-8 items-center">
          <!-- Left: Simple Explanation -->
          <div class="space-y-4">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span class="text-2xl">💡</span>
                Grundidee
              </h4>
              <p class="text-gray-700 mb-3">
                Ein Rotor ist wie eine <strong>Caesar-Scheibe</strong>, aber mit fester, komplexer
                Verdrahtung. Jeder Eingangs-Buchstabe wird auf einen bestimmten Ausgangs-Buchstaben
                verdrahtet.
              </p>
              <div class="bg-orange-50 p-3 rounded text-sm">
                <p class="font-mono">Eingang: A B C D E F G...</p>
                <p class="font-mono text-orange-600">Verdrahtung</p>
                <p class="font-mono">Ausgang: E K M F L G D...</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span class="text-2xl">🔄</span>
                Rotation
              </h4>
              <p class="text-gray-700">
                Nach jedem Buchstaben dreht sich mindestens ein Rotor um eine Position. Dies ändert
                die Verschlüsselung für den nächsten Buchstaben!
              </p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="relative">
              <!-- Image -->
              <div class="overflow-hidden shadow-lg flex flex-col">
                <img
                  :src="enigmaImgageColored"
                  alt="ENIGMA Chiffriermaschine Schema"
                  class="w-full h-100 object-cover"
                />
                <p class="text-xs text-gray-500 text-center py-2"></p>
              </div>
            </div>
            <p class="text-center text-sm text-gray-600">
              Ein ENIGMA-Rotor mit interner Verdrahtung
            </p>
          </div>
        </div>
      </div>

      <!-- The Three Rotors -->
      <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
          Die drei Rotoren arbeiten zusammen
        </h3>

        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-yellow-50 p-4 rounded-lg text-center border-2 border-yellow-300">
            <div class="text-4xl mb-2">⚙️</div>
            <h4 class="font-bold text-yellow-700 mb-2">Linker Rotor</h4>
            <p class="text-sm text-gray-700 mb-2">Langsamer Rotor</p>
            <p class="text-xs text-gray-600">Dreht sich nach 26×26 Buchstaben</p>
          </div>

          <div class="bg-orange-50 p-4 rounded-lg text-center border-2 border-orange-300">
            <div class="text-4xl mb-2">⚙️</div>
            <h4 class="font-bold text-orange-700 mb-2">Mittlerer Rotor</h4>
            <p class="text-sm text-gray-700 mb-2">Mittlerer Rotor</p>
            <p class="text-xs text-gray-600">Dreht sich nach 26 Buchstaben</p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg text-center border-2 border-red-300">
            <div class="text-4xl mb-2">⚙️</div>
            <h4 class="font-bold text-red-700 mb-2">Rechter Rotor</h4>
            <p class="text-sm text-gray-700 mb-2">Schneller Rotor</p>
            <p class="text-xs text-gray-600">Dreht sich bei jedem Buchstaben</p>
          </div>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-800 mb-3">
            🔢 Beispiel-Sequenz (einfache Verdrahtung):
          </h4>
          <div class="font-mono text-sm space-y-1 overflow-x-auto">
            <div class="grid grid-cols-4 gap-2 font-bold mb-2 text-gray-600">
              <span>Buchstabenposition</span>
              <span>Links</span>
              <span>Mitte</span>
              <span>Rechts</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>1</span><span>A</span><span>A</span><span class="text-red-600">A → B</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>2</span><span>A</span><span>A</span><span class="text-red-600">B → C</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>...</span><span>...</span><span>...</span><span>...</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>26</span><span>A</span><span>A</span><span class="text-red-600">Z → A</span>
            </div>
            <div class="grid grid-cols-4 gap-2 bg-orange-100 rounded">
              <span>27</span><span>A</span><span class="text-orange-600">A → B</span
              ><span class="text-red-600">A → B</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>28</span><span>A</span><span>B</span><span class="text-red-600">B → C</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>...</span><span>...</span><span>...</span><span>...</span>
            </div>
            <div class="grid grid-cols-4 gap-2 bg-yellow-100 p-1 rounded">
              <span>676</span><span class="text-yellow-600">A → B</span
              ><span class="text-orange-600">Z → A</span><span class="text-red-600">Z → A</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>...</span><span>...</span><span>...</span><span>...</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>17575</span><span>Z</span><span>Z</span><span class="text-red-600">Y → Z</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>17576</span><span class="text-yellow-600">Z → A</span
              ><span class="text-orange-600">Z → A</span><span class="text-red-600">Z → A</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>1</span><span>A</span><span>A</span><span class="text-red-600">A → B</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <span>...</span>
            </div>
          </div>
        </div>
      </div>

      <!-- The Reflector -->
      <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>🪩</span>
          Der Reflektor
        </h3>
        <div class="space-y-4 text-gray-700">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-semibold mb-3">Was macht er?</h4>
              <ul class="space-y-2 text-sm">
                <li>• Lenkt den Strom zurück durch die Rotoren</li>
                <li>• Vertauscht Buchstabenpaare (z.B. A↔Y, B↔R)</li>
                <li>• Sorgt dafür, dass Ver- und Entschlüsselung identisch sind</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-semibold mb-3">Wichtige Eigenschaft!</h4>
              <p class="text-sm">
                Durch den Reflektor wird
                <strong>kein Buchstabe jemals auf sich selbst verschlüsselt</strong>. Wenn du A
                drückst, kann niemals A aufleuchten!
              </p>
              <p class="text-sm mt-2 text-purple-600 font-semibold">
                → Das war eine entscheidende Schwachstelle für die Kryptoanalyse!
              </p>
            </div>
          </div>

          <div class="bg-purple-100 p-4 rounded-lg mt-4">
            <h4 class="font-semibold mb-2">Signal-Weg:</h4>
            <div class="font-mono text-sm">
              Taste → Rotor 1 → Rotor 2 → Rotor 3 →
              <span class="text-purple-600 font-bold">Reflektor</span> → Rotor 3 → Rotor 2 → Rotor 1
              → Lampe
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
