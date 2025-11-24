<template>
  <section class="mb-4">
    <div
      class="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-6 border-2 border-blue-300 shadow-lg"
    >
      <details class="mb-2">
        <summary>
          <h2 class="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-2 cursor-pointer">
            <span>🎯</span>
            <span>Zusammenfassung: Asymmetrische Kryptographie</span>
          </h2>
        </summary>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <!-- Verschlüsselung -->
          <div class="bg-white rounded-lg p-5 shadow-md border-l-4 border-green-500">
            <div class="flex items-start gap-3 mb-3">
              <div class="text-3xl">🔐</div>
              <h3 class="text-xl font-semibold text-green-900">Verschlüsselung</h3>
            </div>
            <div class="text-sm space-y-2 text-gray-800">
              <div class="bg-green-50 rounded p-3">
                <p class="mb-1">
                  <strong>Alice verschlüsselt</strong> mit Bobs
                  <span class="font-semibold text-green-700">öffentlichem Schlüssel 🔓</span>
                </p>
                <p>
                  <strong>Bob entschlüsselt</strong> mit seinem
                  <span class="font-semibold text-green-700">privaten Schlüssel 🔐</span>
                </p>
              </div>
              <div class="bg-green-100 rounded p-3">
                <p class="text-green-800 font-semibold">✅ Löst das Schlüsselaustauschproblem</p>
                <p class="text-xs text-green-700 mt-1">
                  Kein gemeinsamer geheimer Schlüssel muss vorher ausgetauscht werden
                </p>
              </div>
            </div>
          </div>

          <!-- Digitale Signatur -->
          <div class="bg-white rounded-lg p-5 shadow-md border-l-4 border-purple-500">
            <div class="flex items-start gap-3 mb-3">
              <div class="text-3xl">✍️</div>
              <h3 class="text-xl font-semibold text-purple-900">Digitale Signatur</h3>
            </div>
            <div class="text-sm space-y-2 text-gray-800">
              <div class="bg-purple-50 rounded p-3">
                <p class="mb-1">
                  <strong>Alice signiert</strong> mit ihrem
                  <span class="font-semibold text-purple-700">privaten Schlüssel 🔐</span>
                </p>
                <p>
                  <strong>Bob verifiziert</strong> mit Alice'
                  <span class="font-semibold text-purple-700">öffentlichem Schlüssel 🔓</span>
                </p>
              </div>
              <div class="bg-purple-100 rounded p-3">
                <p class="text-purple-800 font-semibold">✅ Löst das Authentifizierungsproblem</p>
                <p class="text-xs text-purple-700 mt-1">
                  Beweist, dass die Nachricht wirklich von Alice stammt
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- PKI -->
        <div class="bg-white rounded-lg p-5 shadow-md border-l-4 border-blue-500">
          <div class="flex items-start gap-3 mb-3">
            <div class="text-3xl">🏛️</div>
            <h3 class="text-xl font-semibold text-blue-900">
              Public Key Infrastruktur (PKI) - Vertrauen
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
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
// Keine imports nötig für diese Komponente
</script>
