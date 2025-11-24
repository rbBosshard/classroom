<template>
  <section class="mb-12">
    <div class="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
      <h2 class="text-3xl font-bold text-blue-900 mb-4">
        🧩 Auftrag: Schlüsselaustausch (Session Key
        <img
          :src="secretKey"
          alt="🔑"
          style="display: inline; height: 1.2em; vertical-align: middle"
        />)
      </h2>

      <div class="bg-white rounded-lg p-6 shadow-lg mb-6">
        <h3 class="text-xl font-semibold text-blue-900 mb-3">🎭 Die Ausgangslage:</h3>

        <ul class="list-disc pl-6 text-blue-800 space-y-3">
          <li>
            Ihr seid zu <strong>dritt</strong>: Jemand spielt <strong>Alice</strong>, jemand spielt
            <strong>Bob</strong>, und eine Person ist <strong>Eve</strong>.
          </li>
          <li>
            Alice und Bob besitzen jeweils ein <strong>asymmetrisches Schlüsselpaar</strong>.
            <div class="mt-4 mb-4 flex justify-center">
              <img
                :src="keyPairs"
                alt="Asymmetrische Schlüsselpaare von Alice und Bob"
                class="max-w-sm w-full rounded-lg shadow-lg"
              />
            </div>
          </li>
          <li>
            Ihr habt eine <strong>Truhe </strong>
            <img
              :src="box"
              alt="📦"
              style="display: inline; height: 1.2em; vertical-align: middle"
            />, in die der <strong>geheime Schlüssel </strong>
            <img
              :src="secretKey"
              alt="🔑"
              style="display: inline; height: 1.2em; vertical-align: middle"
            />
            gelegt werden kann.
            <div class="mt-4 mb-4 flex justify-center">
              <img :src="keyInBox" alt="Schlüssel in Box" class="max-w-xs w-full rounded-lg" />
            </div>
          </li>
          <li>
            Die Truhe kann mit den öffentlichen Schlüsseln (Schlössern) von Alice und Bob
            verschlossen und nur mit den dazugehörigen privaten Schlüsseln wieder geöffnet werden.
          </li>
        </ul>
      </div>

      <div class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-6">
        <h3 class="text-xl font-semibold text-yellow-900 mb-2">🎯 Eure Aufgabe:</h3>
        <p class="text-yellow-900 mb-3">
          Findet eine Strategie, wie <strong>Alice</strong> und <strong>Bob</strong> den geheimen
          Schlüssel
          <img
            :src="secretKey"
            alt="🔑"
            style="display: inline; height: 1.2em; vertical-align: middle"
          />
          mit Public-Key-Verschlüsselung sicher austauschen können, sodass
          <strong>Eve</strong> ihn unterwegs <strong>NICHT</strong> herausnehmen kann.
        </p>
        <p class="text-yellow-800">
          <strong>Annahme:</strong> Der Schlüssel
          <img
            :src="secretKey"
            alt="🔑"
            style="display: inline; height: 1.2em; vertical-align: middle"
          />
          befindet sich zuerst bei Alice und muss Bob erreichen.
        </p>
        <div class="mt-8 flex justify-center">
          <img
            :src="goalKeyExchange"
            alt="Ziel des sicheren Schlüsselaustauschs"
            class="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>
      </div>

      <details class="bg-white rounded-lg p-6 shadow-lg">
        <summary class="cursor-pointer text-blue-900 font-semibold text-xl mb-4">
          💡 Mögliche Varianten des Schlüsselaustauschs (zum Diskutieren)
        </summary>

        <div class="space-y-6 mt-4">
          <!-- Variante 1 -->
          <div class="border-l-4 border-blue-400 pl-4">
            <h4 class="text-lg font-semibold text-blue-800 mb-3">Variante 1: Schloss von Bob</h4>
            <ol class="list-decimal pl-6 space-y-2 text-gray-800">
              <li>Bob sendet <strong>sein Schloss</strong> an Alice.</li>
              <li>
                Alice legt den geheimen Schlüssel in die Truhe und verschliesst sie mit
                <strong>Bobs Schloss</strong>, dann schickt sie die Truhe an Bob.
              </li>
              <li>Bob kann die Truhe öffnen und den geheimen Schlüssel entnehmen.</li>
            </ol>
            <div class="mt-4 flex justify-center">
              <img
                :src="exchange2"
                alt="Variante 1"
                class="max-w-2xl w-full rounded-lg shadow-md"
              />
            </div>
            <details class="mt-3 text-sm">
              <summary class="cursor-pointer font-semibold text-red-700">
                ⚠️ Problem anzeigen
              </summary>
              <div class="mt-2 bg-red-50 rounded p-3 text-red-800">
                <p class="mb-2">
                  <strong>Man-in-the-Middle-Angriff möglich:</strong> Wie weiss Alice, dass es
                  wirklich Bobs Schloss ist? Ein Angreifer wie "Mallory" könnte das Schloss
                  unterwegs austauschen.
                </p>
                <div class="mt-3 flex justify-center">
                  <img
                    :src="mitmWithMallory"
                    alt="Man-in-the-Middle Attack"
                    class="w-full rounded"
                  />
                </div>
              </div>
            </details>
          </div>

          <!-- Variante 2 -->
          <div class="border-l-4 border-green-400 pl-4">
            <h4 class="text-lg font-semibold text-green-800 mb-3">Variante 2: Zwei Schlösser</h4>
            <ol class="list-decimal pl-6 space-y-2 text-gray-800">
              <li>
                Alice legt den geheimen Schlüssel in die Truhe und verschliesst sie mit
                <strong>ihrem eigenen Schloss</strong>, dann schickt sie die Truhe an Bob.
              </li>
              <li>
                Bob kann die Truhe nicht öffnen, fügt <strong>sein eigenes Schloss</strong> hinzu
                und schickt sie zurück.
              </li>
              <li>
                Alice entfernt <strong>ihr Schloss</strong> und schickt die Truhe erneut an Bob.
              </li>
              <li>Bob kann nun die Truhe öffnen und den geheimen Schlüssel entnehmen.</li>
            </ol>
            <div class="mt-4 flex justify-center">
              <img
                :src="exchange1"
                alt="Variante 2"
                class="max-w-2xl w-full rounded-lg shadow-md"
              />
            </div>
            <details class="mt-3 text-sm">
              <summary class="cursor-pointer font-semibold text-red-700">
                ⚠️ Problem anzeigen
              </summary>
              <div class="mt-2 bg-red-50 rounded p-3 text-red-800">
                Im Grund dasselbe Problem wie vorher: Wie weiss Alice, dass es wirklich Bobs Schloss
                ist?
              </div>
            </details>
          </div>

          <!-- Variante 3 -->
          <div class="border-l-4 border-purple-400 pl-4">
            <h4 class="text-lg font-semibold text-purple-800 mb-3">
              Variante 3: Vertrauenswürdige Dritte Stelle (Trent)
            </h4>
            <ol class="list-decimal pl-6 space-y-2 text-gray-800">
              <li>
                Alice holt <strong>Bobs Schloss</strong> bei Trent, einer vertrauenswürdigen dritten
                Stelle (Trusted Entity). Trent verwaltet viele Schlösser und sorgt dafür, dass Alice
                wirklich das richtige Schloss bekommt.
              </li>
              <li>
                Alice legt den geheimen Schlüssel in die Truhe und verschliesst sie mit
                <strong>Bobs Schloss</strong>, dann schickt sie die Truhe an Bob.
              </li>
              <li>Bob kann die Truhe öffnen und den geheimen Schlüssel entnehmen.</li>
            </ol>
            <div class="mt-4 flex justify-center">
              <img
                :src="exchange3"
                alt="Variante 3"
                class="max-w-2xl w-full rounded-lg shadow-md"
              />
            </div>
            <details class="mt-3 text-sm">
              <summary class="cursor-pointer font-semibold text-orange-700">
                ⚠️ Einschränkung anzeigen
              </summary>
              <div class="mt-2 bg-orange-50 rounded p-3 text-orange-800">
                Alice weiss dank Trent, dass sie wirklich Bobs Schloss hat.
                <strong>Aber:</strong> Bob kann die Truhe zwar öffnen, aber woher weiss Bob, dass
                der Schlüssel wirklich von Alice stammt? Das bringt uns zum nächsten Thema:
                <strong>Authentifizierung</strong>.
              </div>
            </details>
          </div>
        </div>
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
import keyPairs from '@/assets/images/keyPairs.png';
import box from '@/assets/images/box.png';
import secretKey from '@/assets/images/secretKey.png';
import keyInBox from '@/assets/images/keyInBox.png';
import goalKeyExchange from '@/assets/images/goalKeyExchange.png';
import exchange1 from '@/assets/images/exchange1.png';
import exchange2 from '@/assets/images/exchange2.png';
import exchange3 from '@/assets/images/exchange3.png';
import mitmWithMallory from '@/assets/images/mitmWithMallory.png';
</script>
