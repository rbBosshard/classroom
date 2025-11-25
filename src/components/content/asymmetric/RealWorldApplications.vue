<template>
  <section class="mb-12">
    <div class="bg-indigo-50 border-2 border-indigo-400 rounded-lg p-6">
      <h2 class="text-3xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
        <span>🌍</span>
        <span>Anwendungsfälle in der Praxis</span>
      </h2>

      <p class="text-lg text-indigo-800 mb-6">
        Asymmetrische Kryptographie ist heute aus dem digitalen Leben nicht mehr wegzudenken.
        Verstehst du, wo und wie sie eingesetzt wird?
      </p>

      <!-- Interaktive Aufgabe -->
      <div class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-5 mb-6">
        <h3 class="text-xl font-semibold text-yellow-900 mb-3 flex items-center gap-2">
          <span>🎯</span>
          <span>Aufgabe: Technologie-Analyse</span>
        </h3>
        <p class="text-yellow-800 mb-4">
          Für jede der folgenden Technologien musst du herausfinden:
        </p>
        <ul class="list-disc pl-6 text-yellow-800 mb-4 space-y-1 text-sm">
          <li><strong>Wird asymmetrische Kryptographie verwendet?</strong> (Ja/Nein)</li>
          <li><strong>Wenn ja: Wofür genau?</strong> (Verschlüsselung, Signatur, beides?)</li>
          <li>
            <strong>Was wird konkret geschützt?</strong> (Nachrichten, Verbindung, Identität?)
          </li>
        </ul>
        <div class="bg-yellow-100 rounded p-3 text-sm">
          <p class="text-yellow-900">
            💡 <strong>Tipp:</strong> Überlege dir zuerst die Antwort, bevor du die Lösung
            aufklappst. Diskutiert in der Gruppe!
          </p>
        </div>
      </div>

      <div class="space-y-4">
        <!-- WhatsApp / Signal -->
        <div class="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-500">
          <div class="flex items-start gap-3 mb-3">
            <span class="text-2xl">💬</span>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">WhatsApp / Signal</h4>
              <p class="text-gray-700 text-sm mb-3">
                Diese Messenger-Apps werben mit "End-to-End-Verschlüsselung". Was bedeutet das
                technisch?
              </p>
              <details>
                <summary class="cursor-pointer text-blue-600 font-semibold hover:underline text-sm">
                  🔍 Analyse anzeigen
                </summary>
                <div class="mt-3 bg-green-50 rounded p-3 space-y-2 text-sm">
                  <p class="text-green-900">
                    <strong>✅ Asymmetrische Kryptographie: JA</strong>
                  </p>
                  <p class="text-green-800">
                    <strong>Wofür:</strong> Beim ersten Kontakt zwischen zwei Nutzern werden
                    öffentliche Schlüssel ausgetauscht (asymmetrisch). Danach wird ein symmetrischer
                    Sitzungsschlüssel etabliert.
                  </p>
                  <p class="text-green-800">
                    <strong>Geschützt:</strong> Nachrichten können nur von Sender und Empfänger
                    gelesen werden – nicht mal WhatsApp/Signal selbst kann mitlesen!
                  </p>
                  <p class="text-green-700 italic text-xs mt-2">
                    🔐 Signal Protocol nutzt: X3DH (Extended Triple Diffie-Hellman) für den
                    Schlüsselaustausch und Double Ratchet für Forward Secrecy
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <!-- HTTPS / Online Banking -->
        <div class="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500">
          <div class="flex items-start gap-3 mb-3">
            <span class="text-2xl">🏦</span>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">
                HTTPS / Online Banking (z.B. UBS, PostFinance)
              </h4>
              <p class="text-gray-700 text-sm mb-3">
                Das 🔒 in der Adresszeile zeigt: Die Verbindung ist sicher. Aber wie genau
                funktioniert das?
              </p>
              <details>
                <summary class="cursor-pointer text-blue-600 font-semibold hover:underline text-sm">
                  🔍 Analyse anzeigen
                </summary>
                <div class="mt-3 bg-blue-50 rounded p-3 space-y-2 text-sm">
                  <p class="text-blue-900">
                    <strong>✅ Asymmetrische Kryptographie: JA (beim TLS-Handshake)</strong>
                  </p>
                  <p class="text-blue-800">
                    <strong>Wofür:</strong>
                  </p>
                  <ul class="list-disc pl-6 text-blue-800 space-y-1">
                    <li>
                      <strong>PKI/Zertifikate:</strong> Der Server beweist seine Identität mit einem
                      Zertifikat (von CA signiert)
                    </li>
                    <li>
                      <strong>Schlüsselaustausch:</strong> Asymmetrische Kryptographie etabliert
                      einen symmetrischen Sitzungsschlüssel
                    </li>
                    <li>
                      <strong>Danach:</strong> Symmetrische Verschlüsselung für schnelle
                      Datenübertragung
                    </li>
                  </ul>
                  <p class="text-blue-800">
                    <strong>Geschützt:</strong> Niemand kann deine Verbindung mithören oder sich als
                    die Bank ausgeben (Man-in-the-Middle verhindert!)
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <!-- E-Mail -->
        <div class="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-500">
          <div class="flex items-start gap-3 mb-3">
            <span class="text-2xl">📧</span>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">
                E-Mail-Verschlüsselung (PGP/GPG)
              </h4>
              <p class="text-gray-700 text-sm mb-3">
                Normale E-Mails sind wie Postkarten – jeder kann mitlesen. Aber es gibt Lösungen...
              </p>
              <details>
                <summary class="cursor-pointer text-blue-600 font-semibold hover:underline text-sm">
                  🔍 Analyse anzeigen
                </summary>
                <div class="mt-3 bg-purple-50 rounded p-3 space-y-2 text-sm">
                  <p class="text-purple-900">
                    <strong>✅ Asymmetrische Kryptographie: JA (PGP/GPG)</strong>
                  </p>
                  <p class="text-purple-800">
                    <strong>Wofür:</strong>
                  </p>
                  <ul class="list-disc pl-6 text-purple-800 space-y-1">
                    <li>
                      <strong>Verschlüsselung:</strong> Alice verschlüsselt mit Bobs Public Key →
                      nur Bob kann lesen
                    </li>
                    <li>
                      <strong>Signatur:</strong> Alice signiert mit ihrem Private Key → Bob kann
                      Echtheit prüfen
                    </li>
                  </ul>
                  <p class="text-purple-800">
                    <strong>Beispiel:</strong> ProtonMail macht das automatisch!
                  </p>
                  <p class="text-purple-700 italic text-xs mt-2">
                    ⚠️ Problem: PGP ist komplex – deshalb nutzen es leider nur wenige Menschen
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <!-- Blockchain -->
        <div class="bg-white rounded-lg p-4 shadow-md border-l-4 border-orange-500">
          <div class="flex items-start gap-3 mb-3">
            <span class="text-2xl">₿</span>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">
                Blockchain / Kryptowährungen (Bitcoin, Ethereum)
              </h4>
              <p class="text-gray-700 text-sm mb-3">
                Wie kann man digitales Geld ohne Bank überweisen? Asymmetrische Kryptographie
                macht's möglich!
              </p>
              <details>
                <summary class="cursor-pointer text-blue-600 font-semibold hover:underline text-sm">
                  🔍 Analyse anzeigen
                </summary>
                <div class="mt-3 bg-orange-50 rounded p-3 space-y-2 text-sm">
                  <p class="text-orange-900">
                    <strong>✅ Asymmetrische Kryptographie: JA (zentral!)</strong>
                  </p>
                  <p class="text-orange-800">
                    <strong>Wofür:</strong>
                  </p>
                  <ul class="list-disc pl-6 text-orange-800 space-y-1">
                    <li>
                      <strong>Wallet = Schlüsselpaar:</strong> Deine Wallet-Adresse ist dein Public
                      Key, dein Private Key ist dein "Passwort"
                    </li>
                    <li>
                      <strong>Transaktion signieren:</strong> Mit deinem Private Key signierst du:
                      "Ich sende X coins an Adresse Y"
                    </li>
                    <li>
                      <strong>Verifizierung:</strong> Jeder kann mit deinem Public Key prüfen, dass
                      die Transaktion wirklich von dir stammt
                    </li>
                  </ul>
                  <p class="text-orange-800">
                    <strong>Geschützt:</strong> Niemand kann deine coins stehlen – ausser jemand
                    kommt an deinen Private Key!
                  </p>
                  <p class="text-orange-700 italic text-xs mt-2">
                    🔑 Deshalb gibt es den Spruch: "Not your keys, not your coins" – wer den Private
                    Key hat, besitzt die coins!
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <!-- SSH -->
        <div class="bg-white rounded-lg p-4 shadow-md border-l-4 border-red-500">
          <div class="flex items-start gap-3 mb-3">
            <span class="text-2xl">💻</span>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">
                SSH (Secure Shell) – Remote Server Login
              </h4>
              <p class="text-gray-700 text-sm mb-3">
                Entwickler und Admins verbinden sich täglich mit Servern. Wie geschieht das sicher?
              </p>
              <details>
                <summary class="cursor-pointer text-blue-600 font-semibold hover:underline text-sm">
                  🔍 Analyse anzeigen
                </summary>
                <div class="mt-3 bg-red-50 rounded p-3 space-y-2 text-sm">
                  <p class="text-red-900">
                    <strong>✅ Asymmetrische Kryptographie: JA</strong>
                  </p>
                  <p class="text-red-800">
                    <strong>Wofür:</strong>
                  </p>
                  <ul class="list-disc pl-6 text-red-800 space-y-1">
                    <li>
                      <strong>Authentifizierung:</strong> Statt Passwort nutzt man ein Schlüsselpaar
                      (SSH-Key)
                    </li>
                    <li>
                      <strong>Server-Identität:</strong> Der Server beweist seine Identität mit
                      seinem Public Key
                    </li>
                  </ul>
                  <p class="text-red-800">
                    <strong>Vorteil:</strong> Viel sicherer als Passwörter – kein Brute-Force
                    möglich!
                  </p>
                  <p class="text-red-700 italic text-xs mt-2">
                    💡 Wer GitHub nutzt, verwendet SSH-Keys für git push/pull!
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <!-- PDF Signatur -->
        <div class="bg-white rounded-lg p-4 shadow-md border-l-4 border-indigo-500">
          <div class="flex items-start gap-3 mb-3">
            <span class="text-2xl">📄</span>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Digital signierte Dokumente</h4>
              <p class="text-gray-700 text-sm mb-3">
                Verträge, Rechnungen, amtliche Dokumente – wie beweist man deren Echtheit digital?
              </p>
              <details>
                <summary class="cursor-pointer text-blue-600 font-semibold hover:underline text-sm">
                  🔍 Analyse anzeigen
                </summary>
                <div class="mt-3 bg-indigo-50 rounded p-3 space-y-2 text-sm">
                  <p class="text-indigo-900">
                    <strong>✅ Asymmetrische Kryptographie: JA (Digitale Signatur)</strong>
                  </p>
                  <p class="text-indigo-800">
                    <strong>Wofür:</strong>
                  </p>
                  <ul class="list-disc pl-6 text-indigo-800 space-y-1">
                    <li>
                      <strong>Signieren:</strong> Dokument wird mit Private Key des Unterzeichners
                      signiert
                    </li>
                    <li>
                      <strong>Verifizieren:</strong> Jeder kann mit dem Public Key (aus Zertifikat)
                      prüfen: Echt oder gefälscht?
                    </li>
                  </ul>
                  <p class="text-indigo-800">
                    <strong>Geschützt:</strong> Dokument kann nicht unbemerkt verändert werden,
                    Unterzeichner ist eindeutig identifizierbar
                  </p>
                  <p class="text-indigo-700 italic text-xs mt-2">
                    🇨🇭 In der Schweiz: SwissID ermöglicht rechtsgültige digitale Signaturen!
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      <!-- Reflexionsfragen -->
      <div class="bg-green-50 border-2 border-green-400 rounded-lg p-5 mt-6">
        <h3 class="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
          <span>🤔</span>
          <span>Diskussionsfragen für die Klasse:</span>
        </h3>
        <div class="space-y-3">
          <details class="bg-white rounded-lg p-4">
            <summary class="cursor-pointer text-green-800 font-semibold hover:text-green-600">
              Welche dieser Technologien nutzt du täglich, ohne es zu wissen?
            </summary>
            <p class="mt-2 text-green-700 text-sm">
              💡 Fast alle! Jede HTTPS-Website, WhatsApp, Online Banking – asymmetrische
              Kryptographie ist überall im Hintergrund aktiv.
            </p>
          </details>

          <details class="bg-white rounded-lg p-4">
            <summary class="cursor-pointer text-green-800 font-semibold hover:text-green-600">
              Warum wird oft asymmetrische UND symmetrische Kryptographie kombiniert?
            </summary>
            <p class="mt-2 text-green-700 text-sm">
              💡 Asymmetrisch ist rechenintensiv (langsam). Deshalb: Asymmetrisch für
              Schlüsselaustausch, dann symmetrisch für schnelle Datenübertragung. Best of both
              worlds!
            </p>
          </details>

          <details class="bg-white rounded-lg p-4">
            <summary class="cursor-pointer text-green-800 font-semibold hover:text-green-600">
              Was passiert, wenn dein Private Key gestohlen wird?
            </summary>
            <p class="mt-2 text-green-700 text-sm">
              💡 Katastrophe! Bei E-Mail: Angreifer kann sich als dich ausgeben. Bei Wallet: Dein
              Geld ist weg. Bei SSH: Zugriff auf Server. → Private Keys sind heilig – niemals
              weitergeben oder unsicher speichern!
            </p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
