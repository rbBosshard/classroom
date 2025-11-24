<template>
  <section class="mb-12">
    <div class="bg-green-50 border-2 border-green-400 rounded-lg p-6">
      <h2 class="text-3xl font-bold text-green-900 mb-4">
        ✅ Die Lösung: (Asymmetrische) Public-Key-Kryptographie
      </h2>

      <h3 class="text-xl font-semibold text-green-900 mb-3">
        🎯 Ziel: Sichere Kommunikation ohne vorheriges geheimes Treffen
      </h3>

      <p class="text-lg text-green-800 mb-4">
        Bei der asymmetrischen Verschlüsselung generiert jeder Kommunikationsteilnehmer für sich
        selbst <strong>ein asymmetrisches Schlüsselpaar.</strong> Ein solches Schlüsselpaar besteht
        aus:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
        <div class="max-w-xs flex justify-center items-center">
          <img
            :src="keyPair"
            alt="Asymmetrisches Schlüsselpaar"
            class="w-full rounded-lg shadow-lg"
          />
        </div>

        <div class="flex flex-col justify-center">
          <ul class="space-y-4 text-green-800">
            <li class="flex items-start">
              <div class="mr-2 text-2xl">🔓</div>
              <div>
                <strong>Öffentlicher Schlüssel (Public Key):</strong> Dieser Schlüssel (offenes
                Schloss) ist nicht-geheim und kann frei über unsichere Verbindungen verschickt
                werden.
              </div>
            </li>
            <li class="flex items-start">
              <div class="mr-2 text-2xl">🔐</div>
              <div>
                <strong>Privater Schlüssel (Private Key):</strong> Dieser Schlüssel bleibt geheim
                auf dem eigenen Computer und wird niemals weitergegeben.
              </div>
            </li>
          </ul>
          <p class="mt-4 text-green-700 text-md">
            ⭐ <strong>Bonus:</strong> Wie in der Praxis z.B. ein <i>RSA</i>-Schlüsselpaar erzeugt
            wird, siehst du
            <a
              href="https://cryptotools.net/rsagen"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-800 underline font-semibold"
            >
              hier</a
            >.
          </p>
        </div>
      </div>

      <div class="bg-green-100 border-2 border-green-300 rounded-lg p-4 mb-4">
        <p class="text-green-800 mb-3">
          Das Schlüsselpaar ist mathematisch miteinander verbunden, aber es ist praktisch unmöglich,
          vom öffentlichen Schlüssel auf den privaten Schlüssel zu schliessen.
        </p>

        <h4 class="text-lg font-semibold text-green-900 mb-2">Was kann man damit machen?</h4>
        <p class="text-green-800 mb-3">
          <strong>Verschlüsselung:</strong> Was mit dem öffentlichen Schlüssel verschlüsselt wurde,
          kann nur mit dem zugehörigen privaten Schlüssel entschlüsselt werden.
        </p>
        <!-- Praxis-Hinweis -->
        <div class="bg-green-50 border-2 border-green-100 rounded-lg p-4 mt-2">
          <div class="flex items-start gap-3">
            <div>
              <h3 class="text-lg font-semibold text-green-900 mb-2">In der Praxis:</h3>
              <p class="text-green-800 text-md mb-2">
                <strong>Hybrid-Verschlüsselung:</strong> Asymmetrische Verschlüsselung wird oft nur
                zum Austausch eines symmetrischen Sitzungsschlüssels (session-key) verwendetDer
                Grund: Asymmetrische Verfahren sind viiiiiiiel langsamer, ermöglichen jedoch eine
                vertrauliche Kommunikation, ohne dass zuvor ein geheimer Schlüssel persönlich mit
                dem Kommunikationspartner ausgetauscht werden muss.
              </p>
              <p class="text-green-700 text-md italic">
                Beispiel: HTTPS verwendet zuerst asymmetrische Kryptographie (RSA/ECDHE) zum
                sicheren Austausch eines Session-Keys, dann symmetrische Verschlüsselung (AES) für
                die eigentliche Kommunikation.
              </p>
            </div>
          </div>
        </div>

        <p class="mt-4 text-green-700 text-md">
          💡 Asymmetrische Verschlüsselung mit dem öffentlichen Schlüssel ist nur
          <strong>eine</strong> Anwendung von Public-Key-Kryptographie. Was man sonst noch damit
          machen kann, kommt bald!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import keyPair from '@/assets/images/keyPair.png';
</script>
