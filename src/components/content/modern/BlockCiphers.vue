<template>
  <section class="mb-8">
    <h3 class="text-xl font-bold text-gray-800 mb-4 mt-10">
      🔒 Moderne Block Ciphers (Blockverschlüsselung): AES
    </h3>

    <p class="pb-4">
      Auftrag: Lese die Theorie zur Blockverschlüsselung und beantworte am Schluss die Fragen.
    </p>

    <div class="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6 rounded-r">
      <p class="text-gray-700 mb-3">
        <strong>Von One-Time-Pad zu praktischer Verschlüsselung</strong>
      </p>

      <p class="text-gray-700 mb-3">
        One-Time-Pad ist unknackbar, aber unpraktisch. Moderne Verschlüsselungsverfahren wie
        <strong>AES (Advanced Encryption Standard)</strong> verwenden kurze Schlüssel (z.B. 256
        Bits) und können damit <strong>beliebig lange Nachrichten verschlüsseln</strong>. Sie sind
        zwar nicht mathematisch unknackbar wie OTP, aber in der Praxis sicher genug und lösen die
        Probleme von OTP:
      </p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white rounded-lg p-4">
          <h4 class="font-bold text-red-700 mb-2">❌ One-Time-Pad Problem</h4>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• Schlüssel muss genauso lang wie die Nachricht sein</li>
            <li>• Jeder Schlüssel nur 1x verwendbar</li>
            <li>• Für 1 GB Daten braucht man 1 GB Schlüssel</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg p-4">
          <h4 class="font-bold text-green-700 mb-2">✅ AES Lösung</h4>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• Kurzer Schlüssel (128-256 Bits = 16-32 Bytes)</li>
            <li>• Schlüssel wiederverwendbar</li>
            <li>• Für 1 GB Daten braucht man nur 16-32 Bytes Schlüssel</li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-lg p-4 mt-4 border-2 border-indigo-300">
        <h4 class="font-bold text-indigo-700 mb-3">
          🔑 Wie verschlüsselt AES lange Nachrichten mit kurzem Schlüssel?
        </h4>
        <p class="text-sm text-gray-700 mb-3">
          AES ist eine <strong>Blockverschlüsselung</strong>: Lange Nachrichten werden in kleine
          Blöcke aufgeteilt (je 128 Bit = 16 Bytes), und jeder Block wird einzeln mit dem gleichen
          Schlüssel verschlüsselt.
        </p>
        <div class="bg-gray-50 rounded p-3 font-mono text-xs">
          <p class="text-gray-600 mb-2">Beispiel: 48-Byte-Nachricht mit 16-Byte-Schlüssel:</p>
          <p class="text-blue-600">
            Nachricht: [Block 1: 16 Bytes] [Block 2: 16 Bytes] [Block 3: 16 Bytes]
          </p>
          <p class="text-green-600 mt-1">Schlüssel: [16 Bytes] → wird für alle Blöcke verwendet</p>
          <p class="text-purple-600 mt-2">Verschlüsselt: [Chiffre 1] [Chiffre 2] [Chiffre 3]</p>
        </div>
        <p class="text-sm text-gray-700 mt-3">
          <strong>Wichtig:</strong> Der gleiche Schlüssel wird mehrfach verwendet, aber durch
          zusätzliche Techniken (z.B. Modi wie CBC oder GCM mit Initialisierungsvektoren) bleibt die
          Verschlüsselung trotzdem sicher.
        </p>
      </div>
    </div>

    <!-- AES Overview -->
    <div class="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
      <h4 class="font-bold text-gray-800 mb-4">📚 Was ist AES?</h4>

      <div class="space-y-4">
        <div class="flex items-start gap-3">
          <span class="text-3xl">🏆</span>
          <div>
            <p class="font-medium text-gray-800">Weltweiter Standard</p>
            <p class="text-sm text-gray-600">
              AES wurde im Jahr 2001 zum offiziellen US-Standard und wird weltweit verwendet. Es
              ersetzte den alten DES-Standard.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <span class="text-3xl">📦</span>
          <div>
            <p class="font-medium text-gray-800">Block Cipher</p>
            <p class="text-sm text-gray-600">
              AES verarbeitet Daten in <strong>Blöcken von 128 Bit</strong> (16 Bytes). Jeder Block
              wird unabhängig verschlüsselt.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <span class="text-3xl">🔑</span>
          <div>
            <p class="font-medium text-gray-800">Schlüssellängen</p>
            <p class="text-sm text-gray-600">
              AES unterstützt drei Schlüssellängen: <strong>128, 192 oder 256 Bits</strong>. Längere
              Schlüssel = mehr Sicherheit, aber auch mehr Rechenaufwand.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <span class="text-3xl">🔄</span>
          <div>
            <p class="font-medium text-gray-800">Runden-Struktur</p>
            <p class="text-sm text-gray-600">
              AES verwendet mehrere "Runden" von Operationen (10, 12 oder 14 Runden je nach
              Schlüssellänge). Jede Runde mischt und verschlüsselt die Daten weiter.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Where is AES used -->
    <div class="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
      <h4 class="font-bold text-gray-800 mb-4">🌍 Wo wird AES verwendet?</h4>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-blue-50 rounded-lg p-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🌐</span>
            <h5 class="font-bold text-gray-800">HTTPS</h5>
          </div>
          <p class="text-sm text-gray-600">
            Sichere Websites verwenden AES, um Daten zwischen Browser und Server zu verschlüsseln.
          </p>
        </div>

        <div class="bg-green-50 rounded-lg p-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">📱</span>
            <h5 class="font-bold text-gray-800">WLAN</h5>
          </div>
          <p class="text-sm text-gray-600">
            Dein WLAN-Passwort schützt das Netzwerk mit AES-Verschlüsselung.
          </p>
        </div>

        <div class="bg-purple-50 rounded-lg p-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">💾</span>
            <h5 class="font-bold text-gray-800">Festplatten / USB-Sticks</h5>
          </div>
          <p class="text-sm text-gray-600">
            Verschlüsselte Festplatten (BitLocker, FileVault) nutzen AES zum Schutz deiner Daten.
          </p>
        </div>

        <div class="bg-yellow-50 rounded-lg p-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">💬</span>
            <h5 class="font-bold text-gray-800">Messaging Apps</h5>
          </div>
          <p class="text-sm text-gray-600">
            WhatsApp, Signal & Co. verwenden AES für Ende-zu-Ende-Verschlüsselung.
          </p>
        </div>

        <div class="bg-red-50 rounded-lg p-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🎮</span>
            <h5 class="font-bold text-gray-800">Online Gaming</h5>
          </div>
          <p class="text-sm text-gray-600">
            Deine Login-Daten und Spielstände werden mit AES geschützt.
          </p>
        </div>

        <div class="bg-indigo-50 rounded-lg p-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🏦</span>
            <h5 class="font-bold text-gray-800">Banking / E-Commerce</h5>
          </div>
          <p class="text-sm text-gray-600">
            Kreditkarten-Transaktionen und Online-Banking verwenden AES.
          </p>
        </div>
      </div>
    </div>

    <!-- How AES works (high level) -->
    <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
      <h4 class="font-bold text-gray-800 mb-4">⚙️ Wie funktioniert AES?</h4>

      <div class="space-y-4">
        <p class="text-gray-700">
          AES ist deutlich komplexer als Caesar oder Vigenère, aber das Grundprinzip ist ähnlich:
          <strong>Daten werden mit einem Schlüssel durchmischt und transformiert</strong>. AES-128
          nimmt nicht einzelne Bits, sondern immer 16 Bytes (128 Bits) auf einmal (darum
          Blockverschlüsselung). Diese 16 Bytes werden in einer 4x4-Matrix angeordnet, die als
          "State" bezeichnet wird. Dann werden mehrere Runden von Operationen durchgeführt, um den
          State zu verändern:
        </p>

        <div class="bg-gray-50 rounded-lg p-4">
          <h5 class="font-bold text-gray-800 mb-3">Die 4 Hauptoperationen in jeder Runde:</h5>

          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <div
                class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
              >
                1
              </div>
              <div>
                <p class="font-medium text-gray-800">SubBytes (Substitution)</p>
                <p class="text-sm text-gray-600">
                  Jedes Byte wird durch ein anderes ersetzt (ähnlich wie monoalphabetische
                  Substitution).
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
              >
                2
              </div>
              <div>
                <p class="font-medium text-gray-800">ShiftRows (Transposition)</p>
                <p class="text-sm text-gray-600">
                  Die Bytes werden in Zeilen verschoben (ähnlich wie Transposition)
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
              >
                3
              </div>
              <div>
                <p class="font-medium text-gray-800">MixColumns (Diffusion)</p>
                <p class="text-sm text-gray-600">
                  Die Spalten werden mathematisch vermischt für bessere Durchmischung
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
              >
                4
              </div>
              <div>
                <p class="font-medium text-gray-800">AddRoundKey (XOR mit Schlüssel)</p>
                <p class="text-sm text-gray-600">
                  Der Rundenschlüssel wird mit XOR auf die Daten angewendet
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p class="text-sm text-gray-700">
            <strong>🎯 Das Ziel:</strong> Nach 10-14 Runden sind die Daten so stark durchmischt,
            dass jedes Bit des Outputs von jedem Bit des Inputs und des Schlüssels abhängt. Das
            macht AES sehr sicher gegen Kryptoanalyse.
          </p>
        </div>

        <!-- AES Online Demo, add link -->
        <div class="bg-white p-4 rounded-lg border border-gray-200">
          <h5 class="font-bold text-gray-800 mb-2">
            🔗 Bonus: Weiterführende Links zur AES Verschlüsselung (Demos)
          </h5>
          <ul>
            <li>
              <p class="text-sm text-gray-600 mb-2">
                <a
                  href="https://jrvidal.github.io/aes-demo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 underline"
                >
                  1. Schritt-für-Schritt Visualisierung:
                </a>
                Jedes Byte entspricht einem Feld in der Matrix und ist hexadezimal codiert: Bytes
                0000000 - 1111111 entsprechen im Hexadezimalsystem: 00 - ff). Klicke auf der Seite
                auf
                <i>Random</i>, um ein Beispiel zu sehen.
              </p>
            </li>
            <li>
              <p class="text-sm text-gray-600">
                <a
                  href="https://www.youtube.com/watch?v=gP4PqVGudtg"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 underline"
                >
                  2. Detaillierte Erklärung der AES Verschlüsselung mit Animationen.
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Interactive Challenge -->
    <AESChallenge />
  </section>
</template>

<script setup lang="ts">
import AESChallenge from './AESChallenge.vue';

/**
 * Modern Block Ciphers and AES Component
 * High-level overview of AES as practical alternative to OTP
 */
</script>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
