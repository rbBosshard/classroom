<template>
  <section class="mb-12">
    <div class="bg-purple-50 border-2 border-purple-400 rounded-lg p-6">
      <h2 class="text-3xl font-bold text-purple-800 mb-4">
        <a
          href="https://de.wikipedia.org/wiki/Authentifizierung"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue-800 underline font-semibold"
        >
          Das Authentifizierungsproblem
        </a>
      </h2>

      <div class="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 mb-6">
        <p class="text-lg text-purple-900 mb-3">
          Das Schlüsselaustauschproblem können wir mit asymmetrischer Kryptographie lösen. Aber ein
          weiteres Problem bleibt:
          <strong>Wie können wir sicher sein, mit wem wir kommunizieren?</strong>
        </p>

        <details class="mt-4">
          <summary class="cursor-pointer text-purple-800 font-semibold hover:text-purple-600">
            💭 Im Internet wissen wir nie genau, mit wem wir es zu tun haben
          </summary>
          <div class="mt-4 mb-4 flex justify-center">
            <img
              :src="nobodyKnowsYouAreADog"
              alt="Nobody knows you are a dog"
              class="max-w-lg w-full shadow-lg rounded-lg"
            />
          </div>
        </details>
      </div>

      <!-- Denkaufgaben und Szenarien -->
      <div class="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
        <p class="font-semibold text-red-900 mb-2">⚠️ Wichtige Erkenntnis:</p>
        <p class="text-red-800 text-lg italic">
          Ein naiver Schlüsselaustausch allein reicht nicht! Wir brauchen auch
          <strong>Authentifizierung</strong> - die <strong>Gewissheit, mit wem</strong> wir
          kommunizieren.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import nobodyKnowsYouAreADog from '@/assets/images/nobodyKnowsYouAreADog.jpg';
</script>
