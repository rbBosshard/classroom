<template>
  <section class="mb-12">
    <div class="border-2 border-blue-400 rounded-lg p-6">
      <h2 class="text-3xl font-bold text-blue-900 mb-4">
        🧩 Auftrag: Schlüsselaustausch (Session Key
        <img
          :src="secretKey"
          alt="🔑"
          style="display: inline; height: 1.2em; vertical-align: middle"
        />)
      </h2>

      <div class="bg-white rounded-lg p-6 shadow-lg mb-6">
        <h3 class="text-xl font-semibold text-blue-900 mb-4">🎭 Die Ausgangslage:</h3>

        <div class="space-y-5">
          <div class="bg-blue-50 rounded-lg p-4">
            <p class="text-blue-900 font-semibold mb-2">Die (public-private) Schlüsselpaare:</p>
            <p class="text-blue-800 mb-3">
              Alice und Bob besitzen jeweils ein <strong>asymmetrisches Schlüsselpaar</strong>:
            </p>

            <div class="flex justify-center">
              <img
                :src="keyPairs"
                alt="Asymmetrische Schlüsselpaare von Alice und Bob"
                class="max-w-sm w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div class="bg-blue-50 rounded-lg p-4">
            <p class="text-blue-900 font-semibold mb-2">📦 Die Truhe:</p>
            <p class="text-blue-800 mb-3">
              Es gibt eine <strong>Truhe </strong>
              <img
                :src="box"
                alt="📦"
                style="display: inline; height: 1.2em; vertical-align: middle"
              />, in die der <strong>Session-Key </strong>
              <img
                :src="secretKey"
                alt="🔑"
                style="display: inline; height: 1.2em; vertical-align: middle"
              />
              gelegt werden kann, um ihn zwischen Alice und Bob auszutauschen.
            </p>

            <div class="flex justify-center">
              <img :src="keyInBox" alt="Schlüssel in Box" class="max-w-xs w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div class="border-2 border-yellow-400 rounded-lg p-5 mb-6">
        <h3 class="text-xl font-semibold text-yellow-900">🎯 Eure Aufgabe:</h3>

        <div class="rounded-lg p-4 mb-4">
          <p class="text-yellow-900 text-lg font-semibold mb-2">
            Analysiert die verschiedenen Strategien für den Schlüsselaustausch!
          </p>
          <p class="text-yellow-900">
            <strong>🎯 Ziel:</strong> Alice hat den geheimen Session-Key
            <img
              :src="secretKey"
              alt="🔑"
              style="display: inline; height: 1.2em; vertical-align: middle"
            />
            und muss ihn Bob sicher übermitteln, ohne dass Eve ihn in die Hände bekommt.
          </p>
        </div>

        <div class="mt-6 flex justify-center">
          <img
            :src="goalKeyExchange"
            alt="Ziel des sicheren Schlüsselaustauschs"
            class="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>
        <details class="bg-white rounded-lg p-6 shadow-lg mt-6">
          <summary class="cursor-pointer text-blue-900 font-semibold text-xl mb-4">
            💡 Mögliche Varianten des Schlüsselaustauschs (zum Analysieren & Diskutieren)
          </summary>

          <div class="space-y-6 mt-4">
            <!-- Variante 1 -->
            <div class="border-l-4 border-blue-400 pl-4">
              <h4 class="text-lg font-semibold text-blue-800 mb-3">Variante 1: "Bobs Schloss"</h4>
              <ol class="list-decimal pl-6 space-y-2 text-gray-800">
                <li>
                  Bob sendet <strong>sein öffentliches Schloss</strong> an Alice (Eve kann es sehen,
                  aber nicht benutzen)
                </li>
                <li>
                  Alice legt den geheimen Schlüssel in die Truhe, verschliesst sie mit
                  <strong>Bobs Schloss</strong> und schickt die Truhe an Bob
                </li>
                <li>
                  Bob öffnet die Truhe mit <strong>seinem privaten Schlüssel</strong> und entnimmt
                  den Session-Key
                  <img
                    :src="secretKey"
                    alt="🔑"
                    style="display: inline; height: 1.2em; vertical-align: middle"
                  />
                </li>
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
                  ⚠️ Sicherheitsproblem anzeigen
                </summary>
                <div class="mt-2 bg-red-50 rounded p-3 text-red-800">
                  <p class="mb-2">
                    <strong>Man-in-the-Middle-Angriff:</strong> Alice kann nicht sicher sein, dass
                    das empfangene Schloss wirklich von Bob stammt! Ein Angreifer "Mallory" könnte
                    unterwegs Bobs Schloss gegen sein eigenes austauschen. Alice würde dann
                    unwissentlich den Session-Key
                    <img
                      :src="secretKey"
                      alt="🔑"
                      style="display: inline; height: 1.2em; vertical-align: middle"
                    />
                    mit Mallorys Schloss verschlüsseln.
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
              <h4 class="text-lg font-semibold text-green-800 mb-3">
                Variante 2: "Doppelt verschlossen"
              </h4>
              <ol class="list-decimal pl-6 space-y-2 text-gray-800">
                <li>
                  Alice legt den Session-Key
                  <img
                    :src="secretKey"
                    alt="🔑"
                    style="display: inline; height: 1.2em; vertical-align: middle"
                  />
                  in die Truhe, verschliesst sie mit <strong>ihrem eigenen Schloss</strong> und
                  schickt sie an Bob
                </li>
                <li>
                  Bob kann die Truhe nicht öffnen (er hat nicht Alices privaten Schlüssel). Er fügt
                  <strong>sein eigenes Schloss</strong> hinzu → Truhe ist jetzt
                  <strong>doppelt verschlossen</strong> → und schickt sie zurück an Alice
                </li>
                <li>
                  Alice öffnet und entfernt <strong>ihr Schloss</strong> mit ihrem privaten
                  Schlüssel, schickt die Truhe erneut an Bob → Truhe ist jetzt nur noch mit Bobs
                  Schloss verschlossen
                </li>
                <li>
                  Bob öffnet die Truhe mit <strong>seinem privaten Schlüssel</strong> und entnimmt
                  den Session-Key
                  <img
                    :src="secretKey"
                    alt="🔑"
                    style="display: inline; height: 1.2em; vertical-align: middle"
                  />
                </li>
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
                  ⚠️ Sicherheitsproblem anzeigen
                </summary>
                <div class="mt-2 bg-red-50 rounded p-3 text-red-800">
                  <p class="mb-2">
                    <strong>Gleiches Problem:</strong> Wenn Bob sein Schloss hinzufügt, kann Alice
                    nicht verifizieren, dass es wirklich von Bob stammt. Mallory könnte Bobs Schloss
                    unterwegs gegen sein eigenes austauschen.
                  </p>
                  <p class="text-sm">
                    → Ohne Authentifizierung bleibt das Man-in-the-Middle-Risiko bestehen.
                  </p>
                </div>
              </details>
            </div>

            <!-- Variante 3 -->
            <div class="border-l-4 border-purple-400 pl-4">
              <h4 class="text-lg font-semibold text-purple-800 mb-3">
                Variante 3: "Vertrauenswürdige Instanz" (mit Trent)
              </h4>
              <ol class="list-decimal pl-6 space-y-2 text-gray-800">
                <li>
                  Alice holt sich <strong>Bobs öffentliches Schloss</strong> bei
                  <strong>Trent</strong> (Trusted Entity) ab. Trent ist eine vertrauenswürdige
                  Instanz, die öffentliche Schlüssel verwaltet und deren Echtheit garantiert.
                </li>
                <li>
                  Alice legt den Session-Key
                  <img
                    :src="secretKey"
                    alt="🔑"
                    style="display: inline; height: 1.2em; vertical-align: middle"
                  />
                  in die Truhe, verschliesst sie mit Schloss von Bob und schickt sie an Bob
                </li>
                <li>
                  Bob öffnet die Truhe mit <strong>seinem privaten Schlüssel</strong> und entnimmt
                  den Session-Key
                  <img
                    :src="secretKey"
                    alt="🔑"
                    style="display: inline; height: 1.2em; vertical-align: middle"
                  />
                </li>
              </ol>
              <div class="mt-4 flex justify-center">
                <img
                  :src="exchange3"
                  alt="Variante 3"
                  class="max-w-2xl w-full rounded-lg shadow-md"
                />
              </div>
              <details class="mt-3 text-sm">
                <summary class="cursor-pointer font-semibold text-green-700">
                  ✅ Lösung & verbleibendes Problem
                </summary>
                <div class="mt-2 bg-green-50 rounded p-3">
                  <p class="text-green-800 mb-2">
                    <strong>✓ Gelöst:</strong> Alice weiss dank Trent mit Sicherheit, dass sie
                    wirklich Bobs Schloss verwendet. Der Man-in-the-Middle-Angriff auf den
                    Session-Key
                    <img
                      :src="secretKey"
                      alt="🔑"
                      style="display: inline; height: 1.2em; vertical-align: middle"
                    />
                    ist verhindert!
                  </p>
                  <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                    <p class="text-orange-900 font-semibold mb-1">⚠️ Aber:</p>
                    <p class="text-orange-800">
                      Bob kann die Truhe öffnen, aber
                      <strong
                        >woher weiss Bob, dass der Session-Key
                        <img
                          :src="secretKey"
                          alt="🔑"
                          style="display: inline; height: 1.2em; vertical-align: middle"
                        />
                        wirklich von Alice stammt?</strong
                      >
                      Ein Angreifer könnte ebenfalls Bobs öffentliches Schloss bei Trent holen und
                      einen gefälschten Schlüssel schicken.
                    </p>
                    <p class="text-orange-700 text-sm mt-2">
                      → Das führt zum nächsten wichtigen Thema:
                      <strong>Authentifizierung und Digitale Signaturen</strong>!
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </details>
      </div>
      <!-- Praxis-Hinweis -->
      <div class="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 mt-4">
        <h4 class="text-lg font-semibold text-blue-900 mb-1">
          ⚡ Anwendung in der Praxis: Hybrid-Verschlüsselung
        </h4>
        <p class="text-blue-800 mb-3">
          Asymmetrische Verfahren sind <strong>rechenintensiv und langsam</strong>. Deshalb wird in
          der Praxis meist eine Kombination verwendet:
        </p>

        <div class="bg-blue-100 rounded p-4 mb-1">
          <p class="text-blue-900 font-semibold mb-2">Beispiel HTTPS:</p>
          <ol class="space-y-2 text-blue-800 ml-4 list-decimal">
            <li>
              <strong>Asymmetrisch</strong> (RSA/ECDHE): Sicherer Austausch eines zufälligen
              Session-Keys
            </li>
            <li>
              <strong>Symmetrisch</strong> (AES): Schnelle Verschlüsselung der gesamten
              Kommunikation mit dem Session-Key
            </li>
          </ol>
        </div>
      </div>
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
