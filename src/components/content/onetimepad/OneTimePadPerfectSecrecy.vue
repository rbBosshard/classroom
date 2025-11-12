<template>
  <section id="perfect-secrecy" class="mb-8 sm:mb-12">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
      <span>🔒</span>
      <span>Perfekte Sicherheit – Was bedeutet das?</span>
    </h2>

    <div class="prose prose-sm sm:prose-lg max-w-none">
      <!-- Shannon's Beweis -->
      <div
        class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg mb-6 border-l-4 border-blue-500"
      >
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>🎓</span>
          <span>Claude Shannon's Theorem (1949)</span>
        </h3>
        <p class="text-sm sm:text-base text-gray-700 mb-4">
          Der Mathematiker <strong>Claude Shannon</strong> bewies 1949, dass das One-Time-Pad
          <em>informationstheoretisch sicher</em> ist. Das bedeutet:
        </p>
        <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
          <p class="text-base font-semibold text-gray-900 mb-2">
            Ein Geheimtext liefert einem Angreifer <strong>keinerlei Information</strong> über den
            Klartext.
          </p>
          <p class="text-sm text-gray-600">
            Selbst mit unbegrenzter Rechenleistung und Zeit kann ein Angreifer den Klartext nicht
            ermitteln.
          </p>
        </div>
      </div>

      <!-- Warum unknackbar? -->
      <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🤔</span>
          <span>Warum ist es unknackbar?</span>
        </h3>

        <div class="bg-amber-50 p-4 rounded-lg mb-4">
          <h4 class="font-bold text-gray-900 mb-2">Beispiel:</h4>
          <p class="text-sm sm:text-base text-gray-700 mb-3">
            Angenommen, ein Angreifer fängt diesen verschlüsselten Text ab:
          </p>
          <div class="bg-white p-3 rounded font-mono text-xs sm:text-sm mb-3">
            Geheimtext: <span class="text-red-600 font-bold">X7#mK</span>
          </div>
          <p class="text-sm sm:text-base text-gray-700 mb-3">
            Was könnte die ursprüngliche Nachricht sein?
          </p>
        </div>

        <div class="space-y-3 mb-4">
          <div class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
            <div class="flex justify-between items-center">
              <span class="font-mono">Mit Schlüssel A:</span>
              <span class="font-bold text-green-700">"HELLO"</span>
            </div>
          </div>
          <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
            <div class="flex justify-between items-center">
              <span class="font-mono">Mit Schlüssel B:</span>
              <span class="font-bold text-blue-700">"WORLD"</span>
            </div>
          </div>
          <div class="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
            <div class="flex justify-between items-center">
              <span class="font-mono">Mit Schlüssel C:</span>
              <span class="font-bold text-purple-700">"PIZZA"</span>
            </div>
          </div>
          <div class="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400">
            <div class="flex justify-between items-center">
              <span class="font-mono">Mit Schlüssel D:</span>
              <span class="font-bold text-pink-700">"54321"</span>
            </div>
          </div>
        </div>

        <div class="bg-indigo-50 border-2 border-indigo-300 p-4 rounded-lg">
          <p class="text-sm sm:text-base text-indigo-900 font-semibold mb-2">
            ✨ Alle diese Nachrichten sind gleich wahrscheinlich!
          </p>
          <p class="text-sm text-indigo-800">
            Da der Schlüssel vollständig zufällig ist, gibt es keinen Weg zu bestimmen, welche die
            richtige Nachricht ist. Jeder mögliche Klartext derselben Länge ist mathematisch gleich
            wahrscheinlich.
          </p>
        </div>
      </div>

      <!-- Vergleich mit anderen Methoden -->
      <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>⚔️</span>
          <span>Vergleich: One-Time-Pad vs. andere Verschlüsselungen</span>
        </h3>

        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-300">
            <thead class="bg-gray-100">
              <tr>
                <th class="border border-gray-300 px-4 py-2 text-left">Methode</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Sicherheit</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Angriffsmöglichkeit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-semibold">Caesar</td>
                <td class="border border-gray-300 px-4 py-2">
                  <span class="px-2 py-1 bg-red-100 text-red-800 rounded text-xs"
                    >Sehr schwach</span
                  >
                </td>
                <td class="border border-gray-300 px-4 py-2 text-sm">
                  Brute-Force (25 Möglichkeiten)
                </td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-semibold">Vigenère</td>
                <td class="border border-gray-300 px-4 py-2">
                  <span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs"
                    >Mittel</span
                  >
                </td>
                <td class="border border-gray-300 px-4 py-2 text-sm">
                  Kasiski-Test, Frequenzanalyse
                </td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-semibold">Enigma</td>
                <td class="border border-gray-300 px-4 py-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs"
                    >Stark (für die Zeit)</span
                  >
                </td>
                <td class="border border-gray-300 px-4 py-2 text-sm">
                  Cribs, Bombe-Maschine, Fehler
                </td>
              </tr>
              <tr class="bg-green-50">
                <td class="border border-gray-300 px-4 py-2 font-bold">One-Time-Pad</td>
                <td class="border border-gray-300 px-4 py-2">
                  <span class="px-2 py-1 bg-green-500 text-white rounded text-xs font-bold"
                    >Perfekt unknackbar</span
                  >
                </td>
                <td class="border border-gray-300 px-4 py-2 text-sm font-semibold">
                  Keine! (bei korrekter Anwendung)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Vorteile -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>✅</span>
            <span>Vorteile</span>
          </h4>
          <ul class="space-y-2">
            <li
              v-for="(advantage, index) in OTP_ADVANTAGES"
              :key="index"
              class="text-sm text-gray-700 flex items-start gap-2"
            >
              <span class="text-green-600 flex-shrink-0">●</span>
              <span>{{ advantage }}</span>
            </li>
          </ul>
        </div>

        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>❌</span>
            <span>Nachteile</span>
          </h4>
          <ul class="space-y-2">
            <li
              v-for="(disadvantage, index) in OTP_DISADVANTAGES"
              :key="index"
              class="text-sm text-gray-700 flex items-start gap-2"
            >
              <span class="text-red-600 flex-shrink-0">●</span>
              <span>{{ disadvantage }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { OTP_ADVANTAGES, OTP_DISADVANTAGES } from '@/constants/onetimepad';
</script>
