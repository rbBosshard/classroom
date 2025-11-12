<template>
  <section id="intro" class="mb-8 sm:mb-12">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
      <span>📖</span>
      <span>Was ist das One-Time-Pad?</span>
    </h2>

    <div class="prose prose-sm sm:prose-lg max-w-none">
      <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-lg mb-6">
        <p class="text-base sm:text-lg text-gray-800 leading-relaxed">
          Das <strong>One-Time-Pad</strong> (OTP) ist die einzige Verschlüsselungsmethode, die
          <em>mathematisch beweisbar unknackbar</em> ist. Sie wurde 1917 von Gilbert Vernam
          entwickelt und später von Claude Shannon mathematisch als "perfekt sicher" bewiesen.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <!-- Geschichte -->
        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md border-t-4 border-purple-400">
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>📜</span>
            <span>Geschichte</span>
          </h3>
          <ul class="space-y-2 text-sm sm:text-base text-gray-700">
            <li><strong>1917:</strong> Gilbert Vernam erfindet das System</li>
            <li><strong>1949:</strong> Claude Shannon beweist die perfekte Sicherheit</li>
            <li><strong>Kalter Krieg:</strong> Nutzung durch Geheimdienste</li>
            <li><strong>Heute:</strong> In der Praxis selten verwendet</li>
          </ul>
        </div>

        <!-- Prinzip -->
        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md border-t-4 border-green-400">
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>💡</span>
            <span>Grundprinzip</span>
          </h3>
          <p class="text-sm sm:text-base text-gray-700 mb-3">
            Der Klartext wird mit einem <strong>vollständig zufälligen Schlüssel</strong>
            der gleichen Länge XOR-verknüpft:
          </p>
          <div class="bg-gray-100 p-3 rounded font-mono text-xs sm:text-sm">
            <div>Klartext ⊕ Schlüssel = Geheimtext</div>
            <div>Geheimtext ⊕ Schlüssel = Klartext</div>
          </div>
        </div>
      </div>

      <!-- Von Vigenère zu OTP -->
      <div
        class="bg-gradient-to-r from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg mb-6 border-l-4 border-purple-500"
      >
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>🔄</span>
          <span>Vom Vigenère-Chiffre zum One-Time-Pad</span>
        </h3>
        <p class="text-sm sm:text-base text-gray-700 mb-4">
          Du erinnerst dich an das Vigenère-Chiffre? Es verwendet einen sich wiederholenden
          Schlüssel. Das war seine Schwachstelle – durch den <strong>Kasiski-Test</strong> konnten
          wir die Schlüssellänge ermitteln und das Chiffre knacken.
        </p>
        <div class="bg-white p-4 rounded-lg mb-4">
          <p class="text-sm sm:text-base text-gray-700 mb-2"><strong>Vigenère Problem:</strong></p>
          <div class="font-mono text-xs sm:text-sm bg-gray-100 p-3 rounded mb-2">
            <div>Klartext: HELLOWORLD</div>
            <div>
              Schlüssel: <span class="text-red-600">KEY</span><span class="text-red-600">KEY</span
              ><span class="text-red-600">KEY</span><span class="text-red-600">K</span> ← wiederholt
              sich!
            </div>
          </div>
          <p class="text-sm text-gray-600">⚠️ Die Wiederholung ermöglicht Kryptoanalyse</p>
        </div>
        <div class="bg-white p-4 rounded-lg">
          <p class="text-sm sm:text-base text-gray-700 mb-2">
            <strong>One-Time-Pad Lösung:</strong>
          </p>
          <div class="font-mono text-xs sm:text-sm bg-gray-100 p-3 rounded mb-2">
            <div>Klartext: HELLOWORLD</div>
            <div>
              Schlüssel: <span class="text-green-600">XMCKPQRSTU</span> ← vollständig zufällig!
            </div>
          </div>
          <p class="text-sm text-gray-600">✅ Kein Muster, keine Wiederholung, unknackbar</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
