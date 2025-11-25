<template>
  <section class="mb-12">
    <div class="bg-red-50 border-2 border-red-300 rounded-lg p-6">
      <h2 class="text-3xl font-bold text-red-800 mb-6">
        <a
          href="https://de.wikipedia.org/wiki/Schl%C3%BCsselaustauschprotokoll"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue-800 underline font-semibold"
        >
          Das Schlüsselaustauschproblem
        </a>
      </h2>

      <p class="text-lg text-red-800 mb-4">
        <strong>Symmetrische Verschlüsselung</strong> funktioniert hervorragend, wenn beide
        Kommunikationspartner (Alice und Bob) vorgängig schon einen
        <strong
          >gemeinsamen geheimen Schlüssel
          <img
            :src="secretKey"
            alt="🔑"
            style="display: inline; height: 1.2em; vertical-align: middle"
          />
        </strong>
        besitzen (Sitzungsschlüssel, engl. <i>session key</i>).
      </p>

      <details class="mt-4 mb-6">
        <summary class="cursor-pointer text-red-900 font-semibold hover:text-red-700 mb-2">
          Rückblick: Symmetrische Ver- und Entschlüsselung (z.B. Caesar, Vigenère, ENIGMA,
          One-Time-Pad, AES)
        </summary>
        <div class="mt-4 flex justify-center">
          <img
            :src="symmetricEncryption"
            alt="Symmetrische Verschlüsselung"
            class="max-w-2xl w-full shadow-lg rounded-lg"
          />
        </div>
      </details>

      <div class="bg-white border-2 border-yellow-300 rounded-lg p-4 mb-4">
        <p class="text-lg text-red-800">
          <i>
            Aber wie kommen Alice und Bob überhaupt im Voraus zu einem gemeinsamen geheimen
            Schlüssel
            <img
              :src="secretKey"
              alt="🔑"
              style="display: inline; height: 1.2em; vertical-align: middle"
            />, den sie für ihre verschlüsselte Kommunikation verwenden?
          </i>
          🤔
        </p>
      </div>

      <div class="bg-white rounded-lg p-4 border-2 border-orange-200 mt-4">
        <p class="text-red-900 font-semibold mb-2 text-lg">Das Dilemma (Paradox):</p>
        <div class="mt-6 mb-6 flex justify-center">
          <img
            :src="secureKeyWithAnotherKey"
            alt="Schlüsselverteilungsproblem: Wie schützt man den Schlüssel?"
            class="max-w-sm w-full rounded-lg shadow-lg"
          />
        </div>
        <p class="text-red-800 text-lg">
          <strong>Oder anders gesagt:</strong>
          <i>
            "Um eine verschlüsselte Nachricht zu senden, muss ich zuerst einen geheimen Schlüssel
            senden. Aber um den geheimen Schlüssel sicher zu senden, bräuchte ich...
            Verschlüsselung!"
          </i>
          🤨
        </p>
      </div>

      <!-- Verständnisfragen -->
      <div class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-5 mt-6">
        <h3 class="text-xl font-semibold text-yellow-900 mb-4 flex items-center gap-2">
          <span>🤔</span>
          <span>Verständnisfragen</span>
        </h3>
        <div class="space-y-4">
          <div class="bg-white rounded-lg p-4">
            <p class="font-semibold text-yellow-900 mb-2">
              1. Wann entsteht das Schlüsselaustauschproblem?
            </p>
            <details class="mt-2">
              <summary class="cursor-pointer text-blue-600 text-md hover:text-blue-800">
                💡 Antwort anzeigen
              </summary>
              <div class="mt-2 text-yellow-800 text-md">
                <p class="mb-3">
                  Wenn Alice und Bob sich nicht im Voraus persönlich treffen können und noch
                  <strong>keinen sicheren Kommunikationskanal</strong> etabliert haben, wird der
                  erforderliche Austausch des geheimen Schlüssels zu einer paradoxen
                  Herausforderung.
                </p>
                <div class="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                  <p class="text-blue-900 font-semibold mb-2">⚠️ Wichtig zu verstehen:</p>
                  <p class="text-blue-800">
                    Das Problem entsteht, wenn zwei Parteien zum
                    <strong>ersten Mal</strong> miteinander kommunizieren wollen und noch
                    <strong>keine gemeinsame Verschlüsselung</strong> haben. Sie können sich nicht
                    auf einen bereits existierenden sicheren Kanal verlassen, weil dieser eben noch
                    nicht existiert – das ist ja genau das Problem, das wir lösen müssen!
                  </p>
                </div>
              </div>
            </details>
          </div>

          <div class="bg-white rounded-lg p-4">
            <p class="font-semibold text-yellow-900 mb-2">
              2. Darf ich den geheimen Schlüssel nicht einfach Bob schicken?
            </p>
            <details class="mt-2">
              <summary class="cursor-pointer text-blue-600 text-md hover:text-blue-800">
                💡 Antwort anzeigen
              </summary>
              <div class="mt-2 text-yellow-800 text-md">
                <p class="text-lg text-red-800 mb-4 mt-4">
                  Nein! Ein geheimer Schlüssel
                  <img
                    :src="secretKey"
                    alt="🔑"
                    style="display: inline; height: 1.2em; vertical-align: middle"
                  />
                  bleibt nur geheim, wenn wir ihn nicht offen verschicken. Sonst kann Eve
                  <img
                    :src="eavesdropper"
                    alt="👂"
                    style="display: inline; height: 1.2em; vertical-align: middle"
                  />
                  (eavesdropper, die "Lauscherin") ihn unterwegs kopieren – und damit unsere gesamte
                  nachfolgende verschlüsselte Kommunikation aushebeln. Es braucht also eine andere
                  Methode, um den geheimen Schlüssel sicher auszutauschen.
                </p>

                <div class="mt-6 mb-6 flex justify-center">
                  <img
                    :src="keyExchangeWithEve"
                    alt="Schlüsselverteilungsproblem"
                    class="max-w-2xl w-full"
                  />
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import symmetricEncryption from '@/assets/images/symmetricEncryption.png';
import secretKey from '@/assets/images/secretKey.png';
import eavesdropper from '@/assets/images/eavesdropper.png';
import keyExchangeWithEve from '@/assets/images/keyExchangeWithEve.png';
import secureKeyWithAnotherKey from '@/assets/images/secureKeyWithAnotherKey.webp';
</script>
