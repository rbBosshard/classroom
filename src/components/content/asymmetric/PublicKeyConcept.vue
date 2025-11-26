<template>
  <section class="mb-12">
    <div class="bg-green-50 border-2 border-green-400 rounded-lg p-6">
      <h2 class="text-3xl font-bold text-green-900 mb-4">
        ✅ Die Lösung: Public-Key-Kryptographie
      </h2>

      <h3 class="text-xl font-semibold text-green-900 mb-4">
        💡 Die geniale Idee: Asymmetrische Schlüsselpaare
      </h3>

      <p class="text-lg text-green-800 mb-6">
        Jede Person generiert <strong>zwei mathematisch verbundene Schlüssel</strong>, die
        unterschiedliche Funktionen haben:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
        <div class="max-w-sm flex justify-center items-center">
          <img
            :src="keyPair"
            alt="Asymmetrisches Schlüsselpaar"
            class="w-full rounded-lg shadow-lg"
          />
        </div>

        <div class="flex flex-col justify-center">
          <ul class="space-y-5 text-green-800">
            <li class="flex items-start">
              <div>
                <strong class="text-lg">Öffentlicher Schlüssel (Public Key)</strong>
                <p class="mt-1">
                  Wird öffentlich verteilt und kann von jedem verwendet werden, um Nachrichten zu
                  verschlüsseln. Vergleichbar mit einem
                  <strong> Vorhängeschloss</strong>
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div>
                <strong class="text-lg">Privater Schlüssel (Private Key)</strong>
                <p class="mt-1">
                  Bleibt streng geheim beim Besitzer und wird niemals weitergegeben. Nur damit
                  können verschlüsselte Nachrichten gelesen werden – wie der
                  <strong>einzige Schlüssel zum Vorhängeschloss</strong>.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="mb-6 bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mt-6">
        <p class="text-yellow-900">
          <strong>⭐ Probier's aus:</strong> Wie in der Praxis ein RSA-Schlüsselpaar erzeugt wird,
          kannst du
          <a
            href="https://cryptotools.net/rsagen"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 hover:text-blue-800 underline font-semibold"
          >
            hier selbst ausprobieren</a
          >.
        </p>
      </div>

      <div class="border-2 border-green-300 rounded-lg p-4 mb-4">
        <h4 class="text-lg font-semibold text-green-900 mb-2">Die mathematische Magie dahinter</h4>
        <p class="text-green-800 mb-3">
          Die Verbindung zwischen öffentlichem und privatem Schlüssel beruht auf einer
          mathematischen <strong>Einwegfunktion</strong>:
        </p>
        <ul class="space-y-1 text-green-800 text-sm">
          <li>
            ✓ <strong>Vorwärts:</strong> Verschlüsseln mit dem öffentlichen Schlüssel ist einfach.
          </li>
          <li>
            ✗ <strong>Rückwärts:</strong> Entschlüsseln ist nur durch den Besitzer des privaten
            Schlüssels möglich – für alle anderen ist der Rückweg extrem schwierig.
          </li>
        </ul>

        <div
          class="flex items-center bg-green-200 border-l-4 border-green-500 rounded-md p-3 mb-2 mt-4"
        >
          <span class="mr-3 text-green-700 text-xl">🧮</span>
          <span class="text-green-900 font-semibold text-base">
            Grundlage: Mathematische Probleme, die selbst Supercomputer nicht schnell lösen
            können<br />
            <span class="text-green-800 font-normal"
              >(z.B. Primzahlen-Faktorisierung bei RSA, Diskreter Logarithmus bei ECDHE)</span
            >
          </span>
        </div>

        <OneWayFunctionExercise />
      </div>

      <p class="mt-6 text-green-700 text-md">
        💡 <strong>Hinweis:</strong> Verschlüsselung ist nur <strong>eine</strong> Anwendung von
        asymmetrischer Kryptographie – weitere wichtige Einsatzbereiche (z.B. digitale Signaturen)
        folgen!
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import keyPair from '@/assets/images/keyPair.png';
import OneWayFunctionExercise from './OneWayFunctionExercise.vue';
</script>
