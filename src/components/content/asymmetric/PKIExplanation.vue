<template>
  <section class="mb-12">
    <div class="bg-green-50 border-2 border-green-400 rounded-lg p-6">
      <h2 class="text-3xl font-bold text-green-800 mb-4">
        ✅ Die Lösung: Public Key Infrastruktur (PKI)
      </h2>

      <!-- Die Ausgangslage -->
      <div class="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 mb-6">
        <h3 class="text-xl font-semibold text-blue-900 mb-3">🎭 Die Ausgangslage</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <div class="text-2xl">👩‍💻</div>
            <p class="text-blue-800">
              <strong>Alice</strong> ist eine Nutzerin, die mit ihrem Browser (z.B. Chrome, Firefox,
              Safari, Edge) sicher auf ihr E-Banking zugreifen möchte.
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="text-2xl">🏦</div>
            <p class="text-blue-800">
              <strong>Bob</strong> ist der Server von ubs.com, auf dem das E-Banking läuft.
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="text-2xl">❓</div>
            <p class="text-blue-800">
              <strong>Problem:</strong> Wie kann Alice sicher sein, dass der öffentliche Schlüssel,
              den sie vom UBS-Server erhält, wirklich zu UBS gehört und nicht von einem Angreifer
              stammt?
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg p-6 shadow-lg mb-6">
        <h3 class="text-2xl font-semibold text-green-900 mb-4">🏗️ Wie funktioniert PKI?</h3>
        <!-- PKI -->
        <div class="mb-4 bg-white rounded-lg p-5 shadow-md border-l-4 border-blue-500">
          <div class="flex items-start gap-3 mb-3">
            <div class="text-3xl">🏛️</div>
            <h3 class="text-xl font-semibold text-blue-900">
              Kurzversion: Public Key Infrastruktur (PKI) - Vertrauen
            </h3>
          </div>
          <div class="text-sm space-y-3 text-gray-800">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="bg-blue-50 rounded p-3">
                <p class="font-semibold text-blue-900 mb-1">Certificate Authorities (CAs)</p>
                <p class="text-xs text-blue-800">
                  Vertrauenswürdige Stellen (wie Trent), die Identitäten bestätigen
                </p>
              </div>
              <div class="bg-blue-50 rounded p-3">
                <p class="font-semibold text-blue-900 mb-1">Zertifikate</p>
                <p class="text-xs text-blue-800">
                  Verbinden öffentliche Schlüssel mit Identitäten (von CA signiert)
                </p>
              </div>
              <div class="bg-blue-50 rounded p-3">
                <p class="font-semibold text-blue-900 mb-1">Root of Trust</p>
                <p class="text-xs text-blue-800">
                  Root-CA-Zertifikate sind in Browser/OS vorinstalliert
                </p>
              </div>
            </div>
            <div class="bg-blue-100 rounded p-3">
              <p class="text-blue-800 font-semibold">✅ Verhindert Man-in-the-Middle-Angriffe</p>
              <p class="text-xs text-blue-700 mt-1">
                Angreifer können keine gültigen Zertifikate fälschen
              </p>
            </div>
          </div>
        </div>

        <!-- Analogie zu herkömmlichen Zertifikaten -->
        <CertificateAnalogy />

        <div class="space-y-5">
          <h3 class="text-xl font-semibold text-green-800 mt-8">
            Schritt-für-Schritt Erklärung der PKI mit Beispiel
          </h3>
          <!-- Schritt 1 -->
          <div class="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
            <div class="flex items-start gap-3">
              <div class="text-2xl font-bold text-green-700 min-w-[2rem]">1️⃣</div>
              <div class="flex-1">
                <h4 class="text-lg font-semibold text-green-900 mb-2">Zertifikat erhalten</h4>
                <p class="text-green-800 mb-3">
                  Bob (der Betreiber des UBS-Servers ubs.com) geht zu einer
                  <strong>vertrauenswürdigen dritten Stelle</strong>. Im Internet heissen diese
                  <strong>Zertifizierungsstellen</strong> oder auf Englisch:
                  <strong>Certificate Authorities (CAs)</strong> (z.B. Let's Encrypt, SwissSign,
                  DigiCert). Die CA überprüft Bobs Identität und stellt ein
                  <strong>digitales Zertifikat</strong> aus.
                </p>
                <details class="mt-3">
                  <summary class="cursor-pointer text-blue-700 font-semibold hover:underline">
                    📄 Was enthält ein Zertifikat?
                  </summary>
                  <div class="mt-3 bg-white rounded-lg p-4 shadow-sm">
                    <ul class="list-disc pl-6 space-y-2 text-green-800 text-sm">
                      <li>Bobs öffentlicher Schlüssel</li>
                      <li>Bobs Identität (Name, Domain, Organisation)</li>
                      <li>Gültigkeitsdauer (von wann bis wann)</li>
                      <li>Weitere Metadaten</li>
                      <li>
                        <strong class="text-green-900"> Digitale Signatur der CA! </strong>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <!-- Schritt 2 -->
          <div class="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
            <div class="flex items-start gap-3">
              <div class="text-2xl font-bold text-green-700 min-w-[2rem]">2️⃣</div>
              <div class="flex-1">
                <h4 class="text-lg font-semibold text-green-900 mb-2">Zertifikat weitergeben</h4>
                <p class="text-green-800">
                  Wenn Alice mit ihrem Browser ubs.com besucht, schickt Bob (der UBS-Server) nicht
                  nur seinen öffentlichen Schlüssel, sondern sein
                  <strong>Zertifikat</strong> (das von der CA signiert wurde) an Alice's Browser.
                </p>
              </div>
            </div>
          </div>

          <!-- Schritt 3 -->
          <div class="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
            <div class="flex items-start gap-3">
              <div class="text-2xl font-bold text-green-700 min-w-[2rem]">3️⃣</div>
              <div class="flex-1">
                <h4 class="text-lg font-semibold text-green-900 mb-2">Zertifikat verifizieren</h4>
                <p class="text-green-800 mb-3">
                  Alice's Browser prüft automatisch die <strong>CA-Signatur</strong> auf dem
                  Zertifikat mit dem <strong>öffentlichen Schlüssel der CA</strong>.
                </p>
                <details class="mt-3">
                  <summary class="cursor-pointer text-blue-700 font-semibold hover:underline">
                    🔑 Woher hat Alice's Browser den öffentlichen Schlüssel der CA?
                  </summary>
                  <div class="mt-3 bg-white rounded-lg p-4 shadow-sm">
                    <p class="text-green-800 mb-2">
                      CAs sind <strong>Root-CAs</strong>, deren öffentliche Schlüssel bereits in
                      deinem Browser/Betriebssystem vorinstalliert sind! Dies nennt man
                      <strong>"Root of Trust"</strong>.
                    </p>
                    <p class="text-sm italic text-green-700 mt-3">
                      💡 Tipp: In deinem Browser kannst du unter Einstellungen → Sicherheit →
                      Zertifikate alle vertrauenswürdigen CAs anschauen!
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <!-- Ergebnis -->
          <div class="bg-green-100 rounded-lg p-5 border-l-4 border-green-600">
            <div class="flex items-start gap-3">
              <div class="text-2xl min-w-[2rem]">✅</div>
              <div class="flex-1">
                <h4 class="text-lg font-semibold text-green-900 mb-2">Ergebnis</h4>
                <p class="text-green-800 mb-2">
                  Wenn die CA-Signatur gültig ist, weiss Alice's Browser:
                  <strong>Dieser öffentliche Schlüssel gehört wirklich zum UBS-Server!</strong>
                  Alice kann nun sicher mit ubs.com kommunizieren.
                </p>
              </div>
            </div>
          </div>
          <!-- Verständnisfrage nach Schritt 3 -->
          <div class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 my-4">
            <p class="font-semibold text-yellow-900 mb-2">🤔 Verständnisfrage:</p>
            <p class="text-yellow-800 mb-2">
              Was würde passieren, wenn Mallory versucht, ein gefälschtes Zertifikat mit ihrem
              eigenen Schlüssel zu erstellen?
            </p>
            <details>
              <summary class="cursor-pointer text-blue-600 text-sm hover:text-blue-800">
                💡 Antwort anzeigen
              </summary>
              <p class="mt-2 text-yellow-800 text-sm">
                Mallory kann das Zertifikat nicht mit der CA-Signatur versehen, weil Mallory den
                privaten Schlüssel der CA nicht besitzt. Der Browser würde die fehlende oder
                ungültige Signatur erkennen und eine Warnung anzeigen.
              </p>
            </details>
          </div>
        </div>
      </div>

      <!-- Vertrauenskette -->
      <div class="bg-blue-50 rounded-lg p-6 shadow-lg">
        <h3 class="text-xl font-semibold text-blue-900 mb-4">
          🔗 Die Vertrauenskette (Chain of Trust)
        </h3>
        <p class="text-blue-800 mb-4">
          In der Praxis gibt es oft mehrere Ebenen von Zertifizierungsstellen:
        </p>
        <div class="bg-white rounded-lg p-4">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-3 p-3 bg-blue-50 rounded">
              <div class="text-2xl">🏛️</div>
              <div>
                <strong class="text-blue-900">Root CA:</strong>
                <span class="text-blue-800 text-sm">
                  Höchste Vertrauensebene, vorinstalliert im Browser/OS
                </span>
              </div>
            </div>
            <div class="flex justify-center text-blue-400 text-2xl">↓</div>
            <div class="flex items-center gap-3 p-3 bg-blue-50 rounded">
              <div class="text-2xl">🏢</div>
              <div>
                <strong class="text-blue-900">Intermediate CA:</strong>
                <span class="text-blue-800 text-sm"> Zwischenebene, von Root CA signiert </span>
              </div>
            </div>
            <div class="flex justify-center text-blue-400 text-2xl">↓</div>
            <div class="flex items-center gap-3 p-3 bg-blue-50 rounded">
              <div class="text-2xl">🌐</div>
              <div>
                <strong class="text-blue-900">Server-Zertifikat:</strong>
                <span class="text-blue-800 text-sm">
                  Für spezifische Website, von Intermediate CA signiert
                </span>
              </div>
            </div>
          </div>
        </div>
        <p class="text-blue-700 text-md mt-4 italic">
          Diese Hierarchie ermöglicht es, das Root-CA-Zertifikat sicher offline zu halten, während
          Intermediate CAs die tägliche Arbeit erledigen.
        </p>
      </div>
    </div>
    <!-- Quiz-Fragen zum PKI-Konzept -->
    <div class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-5 mt-6">
      <h3 class="text-xl font-semibold text-yellow-900 mb-4 flex items-center gap-2">
        <span>✅</span>
        <span>Verständnis-Check PKI:</span>
      </h3>
      <div class="space-y-4">
        <div class="bg-white rounded-lg p-4">
          <p class="font-semibold text-yellow-900 mb-2">
            1. Was ist die Hauptaufgabe einer Certificate Authority (CA)?
          </p>
          <details class="mt-2">
            <summary class="cursor-pointer text-blue-600 text-sm hover:text-blue-800">
              💡 Antwort anzeigen
            </summary>
            <p class="mt-2 text-yellow-800 text-sm">
              Die CA überprüft die Identität eines Servers/einer Person und bestätigt durch ihre
              digitale Signatur: "Dieser öffentliche Schlüssel gehört wirklich zu dieser
              Domain/Person."
            </p>
          </details>
        </div>

        <div class="bg-white rounded-lg p-4">
          <p class="font-semibold text-yellow-900 mb-2">
            2. Warum ist die Vertrauenskette (Chain of Trust) wichtig?
          </p>
          <details class="mt-2">
            <summary class="cursor-pointer text-blue-600 text-sm hover:text-blue-800">
              💡 Antwort anzeigen
            </summary>
            <p class="mt-2 text-yellow-800 text-sm">
              Sie ermöglicht es, das Root-CA-Zertifikat (höchste Vertrauensebene) sicher offline zu
              halten, während Intermediate CAs die täglichen Zertifikate ausstellen. Dies erhöht die
              Sicherheit.
            </p>
          </details>
        </div>

        <div class="bg-white rounded-lg p-4">
          <p class="font-semibold text-yellow-900 mb-2">3. Mini-Szenario: Was passiert hier?</p>
          <p class="text-yellow-800 text-sm mb-2">
            Du besuchst "ubs.com", aber dein Browser zeigt eine Warnung: "Zertifikat nicht
            vertrauenswürdig". Welche möglichen Gründe gibt es?
          </p>
          <details class="mt-2">
            <summary class="cursor-pointer text-blue-600 text-sm hover:text-blue-800">
              💡 Mögliche Gründe anzeigen
            </summary>
            <div class="mt-2 text-yellow-800 text-sm space-y-1">
              <p>• Zertifikat ist abgelaufen</p>
              <p>• Zertifikat wurde von einer unbekannten CA ausgestellt</p>
              <p>• Man-in-the-Middle-Angriff (jemand gibt sich als UBS aus)</p>
              <p>• Zertifikat wurde für eine andere Domain ausgestellt</p>
            </div>
          </details>
        </div>

        <div class="bg-white rounded-lg p-4">
          <p class="font-semibold text-yellow-900 mb-2">4. Root of Trust</p>
          <p class="text-yellow-700 text-sm italic">
            Was wäre, wenn jemand den privaten Schlüssel einer Root-CA stehlen würde? Welche Folgen
            hätte das?
          </p>
          <details class="mt-2">
            <summary class="cursor-pointer text-blue-600 text-sm hover:text-blue-800">
              💡 Diskussionsgrundlage anzeigen
            </summary>
            <p class="mt-2 text-yellow-800 text-sm">
              Der Angreifer könnte beliebige gefälschte Zertifikate ausstellen, die von allen
              Browsern als vertrauenswürdig akzeptiert würden. Dies wäre eine Katastrophe für die
              Internet-Sicherheit! Deshalb werden Root-CAs meist offline gehalten (vorinstalliert im
              Browser oder Betriebssystem) und sind extrem geschützt.
            </p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CertificateAnalogy from './CertificateAnalogy.vue';
</script>
