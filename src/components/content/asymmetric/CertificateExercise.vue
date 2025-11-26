<template>
  <section class="mb-12">
    <div class="bg-white rounded-lg p-6 shadow-lg">
      <div class="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-5 mb-6">
        <div class="flex items-start gap-3">
          <div class="text-3xl">🎯</div>
          <div>
            <h2 class="text-2xl font-bold text-yellow-900 mb-2">
              HTTPS-Zertifikat - Deine Aufgabe:
            </h2>
            <p class="text-yellow-800">
              Untersuche ein echtes HTTPS-Zertifikat einer Website (z.B. https://www.ubs.com,
              https://www.postfinance.ch, https://www.srf.ch oder einer Website deiner Wahl) und
              beantworte die Fragen unten.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-blue-50 rounded-lg p-5 mb-6">
        <h3 class="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <span>📋</span>
          <span>Anleitung: So findest du das Zertifikat</span>
        </h3>
        <ol class="list-decimal pl-6 space-y-2 text-blue-800 text-sm">
          <li>
            Öffne eine Website mit HTTPS (z.B.
            <code class="bg-white px-2 py-1 rounded">https://www.ubs.com</code>)
          </li>
          <li>Klicke auf das <strong>Symbol</strong> links in der Adresszeile</li>
          <li>
            <strong>Chrome/Edge:</strong> Klicke auf "Verbindung ist sicher" → "Zertifikat ist
            gültig"<br />
            <strong>Firefox:</strong> Klicke auf "Weitere Informationen" → "Zertifikat anzeigen"<br />
            <strong>Safari:</strong> Klicke auf "Zertifikat anzeigen"
          </li>
          <li>Untersuche die Zertifikatsinformationen</li>
        </ol>
        <div class="mt-4 bg-blue-100 rounded p-3">
          <p class="text-blue-900 text-sm">
            <strong>💡 Hilfe benötigt?</strong> Suche online nach: "Wie kann ich in [Browser-Name]
            das Zertifikat einer Website anzeigen?"
          </p>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-gray-900 mb-4">📝 Fragen zum Zertifikat:</h3>

        <!-- Frage 1 -->
        <div class="bg-white border-2 border-blue-300 rounded-lg p-5 shadow-sm">
          <div class="flex items-start gap-3">
            <div class="text-xl font-bold text-blue-600 min-w-[2rem]">1.</div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-blue-900 mb-2">Zertifikatsinhaber</h4>
              <p class="text-blue-800 mb-2">Für wen wurde das Zertifikat ausgestellt?</p>
              <p class="text-gray-600 text-sm italic mb-3">
                🔍 Hinweis: Suche nach "Subject", "Common Name (CN)" oder "Ausgestellt für"
              </p>
              <div class="bg-gray-50 rounded p-3">
                <p class="text-sm text-gray-600">Beispiel-Antwort: CN = www.ubs.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Frage 2 -->
        <div class="bg-white border-2 border-green-300 rounded-lg p-5 shadow-sm">
          <div class="flex items-start gap-3">
            <div class="text-xl font-bold text-green-600 min-w-[2rem]">2.</div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-green-900 mb-2">Certificate Authority (CA)</h4>
              <p class="text-green-800 mb-2">Wer hat das Zertifikat ausgestellt?</p>
              <p class="text-gray-600 text-sm italic mb-3">
                🔍 Hinweis: Suche nach "Issuer", "Ausgestellt von" oder "Issued by"
              </p>
              <div class="bg-gray-50 rounded p-3">
                <p class="text-sm text-gray-600">
                  Bekannte CAs: DigiCert, Let's Encrypt, SwissSign, GlobalSign
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Frage 3 -->
        <div class="bg-white border-2 border-purple-300 rounded-lg p-5 shadow-sm">
          <div class="flex items-start gap-3">
            <div class="text-xl font-bold text-purple-600 min-w-[2rem]">3.</div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-purple-900 mb-2">Gültigkeitsdauer</h4>
              <p class="text-purple-800 mb-2">Von wann bis wann ist das Zertifikat gültig?</p>
              <p class="text-gray-600 text-sm italic mb-3">
                🔍 Hinweis: Suche nach "Valid from", "Valid to", "Gültig von" oder "Gültig bis"
              </p>
              <div class="bg-gray-50 rounded p-3">
                <p class="text-sm text-gray-600">Notiere: Gültig von ___ bis ___</p>
                <p class="text-xs text-gray-500 mt-1">
                  Info: Moderne Zertifikate sind typischerweise 1-2 Jahre gültig
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Frage 4 -->
        <div class="bg-white border-2 border-orange-300 rounded-lg p-5 shadow-sm">
          <div class="flex items-start gap-3">
            <div class="text-xl font-bold text-orange-600 min-w-[2rem]">4.</div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-orange-900 mb-2">Certificate Chain</h4>
              <p class="text-orange-800 mb-2">
                Wie viele Zertifikate sind in der Zertifikatskette?
              </p>
              <p class="text-gray-600 text-sm italic mb-3">
                🔍 Hinweis: Suche nach "Certification Path", "Certificate Hierarchy" oder
                "Zertifizierungspfad"
              </p>
              <div class="bg-gray-50 rounded p-3">
                <p class="text-sm text-gray-600 mb-2">Typische Struktur (3 Stufen):</p>
                <ul class="text-xs text-gray-600 list-disc pl-4 space-y-1">
                  <li>Root CA (oberste Ebene)</li>
                  <li>Intermediate CA (Zwischenebene)</li>
                  <li>Server-Zertifikat (Website)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Frage 5 -->
        <div class="bg-white border-2 border-red-300 rounded-lg p-5 shadow-sm">
          <div class="flex items-start gap-3">
            <div class="text-xl font-bold text-red-600 min-w-[2rem]">5.</div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-red-900 mb-2">Öffentlicher Schlüssel</h4>
              <p class="text-red-800 mb-2">
                Welcher Algorithmus und welche Schlüssellänge werden verwendet?
              </p>
              <p class="text-gray-600 text-sm italic mb-3">
                🔍 Hinweis: Suche nach "Zertifikatsignaturalgorithmus", "Public Key", "Subject Public Key Info" oder "Öffentlicher
                Schlüssel"
              </p>
              <div class="bg-gray-50 rounded p-3">
                <p class="text-sm text-gray-600 mb-2">Häufige Beispiele:</p>
                <ul class="text-xs text-gray-600 list-disc pl-4 space-y-1">
                  <li>RSA 2048 bit (Standard)</li>
                  <li>RSA 4096 bit (höhere Sicherheit)</li>
                  <li>ECC 256 bit (Elliptic Curve Cryptography)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Diskussionsfragen -->
      <div class="bg-green-50 border-2 border-green-400 rounded-lg p-5 mt-6">
        <h3 class="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>Diskussionsfragen für die Klasse:</span>
        </h3>
        <div class="space-y-3">
          <details class="bg-white rounded-lg p-4">
            <summary class="cursor-pointer text-green-800 font-semibold hover:text-green-600">
              <strong>Ablauf:</strong> Was passiert, wenn ein Zertifikat abgelaufen ist?
            </summary>
            <p class="mt-2 text-green-700 text-sm italic">
              💡 Der Browser warnt vor einer unsicheren Verbindung und empfiehlt, die Website nicht
              zu besuchen, da die Identität nicht mehr garantiert werden kann.
            </p>
          </details>

          <details class="bg-white rounded-lg p-4">
            <summary class="cursor-pointer text-green-800 font-semibold hover:text-green-600">
              <strong>Verschiedene CAs:</strong> Warum haben verschiedene Websites unterschiedliche
              CAs?
            </summary>
            <p class="mt-2 text-green-700 text-sm italic">
              💡 Unterschiedliche Faktoren spielen eine Rolle: Kosten (Let's Encrypt ist gratis),
              Vertrauenswürdigkeit, Geschwindigkeit der Ausstellung (automatisierter Prozess),
              zusätzliche Services und regionale Präferenzen.
            </p>
          </details>

          <details class="bg-white rounded-lg p-4">
            <summary class="cursor-pointer text-green-800 font-semibold hover:text-green-600">
              <strong>Root of Trust:</strong> Wie kommt die Root-CA in deinen Browser?
            </summary>
            <p class="mt-2 text-green-700 text-sm italic">
              💡 Root-CA-Zertifikate sind vorinstalliert im Betriebssystem oder Browser. Sie werden
              von vertrauenswürdigen Organisationen gepflegt und regelmässig aktualisiert.
            </p>
          </details>

          <details class="bg-white rounded-lg p-4">
            <summary class="cursor-pointer text-green-800 font-semibold hover:text-green-600">
              <strong>Sicherheit:</strong> Ist ein 2048-bit RSA-Schlüssel sicher genug?
            </summary>
            <p class="mt-2 text-green-700 text-sm italic">
              💡 Kurzantwort: Ja, für die nächsten Jahre ist 2048-bit RSA noch sicher. Ein 2048-Bit
              RSA-Schlüssel ist heute noch sicher genug für normale Anwendungen. Für besonders
              wichtige oder langfristig vertrauliche Daten sollte man aber 3072 oder 4096 Bit nutzen
              oder Elliptic Curve Cryptography (ECC). Im kommenden Post-Quantum-Zeitalter wären
              RSA-Schlüssel – egal wie lang – nicht mehr sicher, weil Quantencomputer sie
              theoretisch schnell brechen könnten. Deshalb entwickeln Forscher bereits
              post-quantenfeste Verfahren, die zukünftig RSA ablösen sollen.
            </p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Keine imports nötig für diese Komponente
</script>
