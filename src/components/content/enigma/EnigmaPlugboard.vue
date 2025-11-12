<template>
  <section id="plugboard" class="mb-16 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <span class="text-4xl">🔌</span>
      Das Steckerbrett (Plugboard)
    </h2>

    <div class="space-y-8">
      <!-- Introduction -->
      <div
        class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500"
      >
        <p class="text-lg text-gray-700 mb-4">
          Das Steckerbrett ist eine zusätzliche Verschlüsselungsebene
          <strong>vor und nach</strong> den Rotoren. Es vertauscht Buchstabenpaare – ähnlich wie ein
          einfacher Substitutions-Cipher, aber mit enormer Wirkung!
        </p>
        <div class="bg-white p-4 rounded-lg">
          <h3 class="font-semibold text-gray-800 mb-2">💡 Beispiel:</h3>
          <p class="text-gray-700">
            Wenn du A mit R verbindest: Jedes A wird zu R (und jedes R zu A),
            <strong>bevor</strong> der Strom durch die Rotoren läuft.
          </p>
        </div>
      </div>

      <!-- Properties -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            Regeln
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span>Maximal 10 Kabelpaare (20 Buchstaben)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span>Jeder Buchstabe kann nur einmal verwendet werden</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span>Vertauschung ist symmetrisch (A↔R bedeutet auch R↔A)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span>Unverbundene Buchstaben bleiben unverändert</span>
            </li>
          </ul>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            Sicherheitseffekt
          </h3>
          <div class="space-y-3 text-gray-700">
            <p>
              Das Steckerbrett erhöht die Anzahl möglicher Konfigurationen
              <strong>dramatisch</strong>:
            </p>
            <div class="bg-white p-3 rounded text-center">
              <p class="text-2xl font-bold text-yellow-700">≈ 150.000.000.000.000</p>
              <p class="text-sm">Möglichkeiten bei 10 Kabelpaaren</p>
            </div>
            <p class="text-sm">Das macht einen reinen Brute-Force-Angriff praktisch unmöglich!</p>
          </div>
        </div>
      </div>

      <!-- Historical Usage -->
      <div class="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          Historische Nutzung
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">Tägliche Einstellung</h4>
            <p class="text-gray-700 text-sm">
              Die Wehrmacht änderte die Steckerbrett-Konfiguration täglich. Die Einstellungen wurden
              in <strong>Codebüchern</strong> verteilt.
            </p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">Typische Konfiguration</h4>
            <p class="text-gray-700 text-sm mb-2">Meist wurden 10 Kabelpaare verwendet, z.B.:</p>
            <div class="font-mono text-xs bg-gray-50 p-2 rounded">
              AR GK OX HQ PS NJ CW DY EZ LM
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
