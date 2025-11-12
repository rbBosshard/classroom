<template>
  <section id="problems" class="mb-8 sm:mb-12">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
      <span>⚠️</span>
      <span>Praktische Probleme</span>
    </h2>

    <div class="prose prose-sm sm:prose-lg max-w-none">
      <!-- Hauptproblem -->
      <div class="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 rounded-r-lg mb-6">
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>🚨</span>
          <span>Das Schlüsselverteilungsproblem</span>
        </h3>
        <p class="text-sm sm:text-base text-gray-700 mb-4">
          Das grösste Problem beim One-Time-Pad ist die <strong>Schlüsselverteilung</strong>. Stell
          dir vor:
        </p>
        <div class="bg-white p-4 rounded-lg mb-4">
          <p class="text-sm sm:text-base text-gray-700 mb-2">
            🎯 Du möchtest eine 1 MB grosse Datei verschlüsseln.
          </p>
          <p class="text-sm sm:text-base text-red-700 font-semibold">
            📦 Du benötigst einen 1 MB langen Schlüssel!
          </p>
          <p class="text-sm sm:text-base text-gray-700 mt-2">
            ❓ Wie überträgst du diesen Schlüssel sicher zum Empfänger?
          </p>
        </div>
        <div class="bg-amber-50 border border-amber-200 p-4 rounded-lg">
          <p class="text-sm sm:text-base text-amber-900 font-semibold">
            💡 Paradox: Wenn du einen sicheren Kanal hast, um den Schlüssel zu übertragen, warum
            nicht gleich die Nachricht über diesen Kanal senden?
          </p>
        </div>
      </div>

      <!-- Schlüssel-Wiederverwendung -->
      <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔄</span>
          <span>Katastrophale Folgen der Schlüssel-Wiederverwendung</span>
        </h3>

        <p class="text-sm sm:text-base text-gray-700 mb-4">
          Wenn derselbe Schlüssel für zwei verschiedene Nachrichten verwendet wird, kann ein
          Angreifer diese XOR-verknüpfen:
        </p>

        <div class="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-xs sm:text-sm">
          <div class="mb-2">C₁ = M₁ ⊕ K</div>
          <div class="mb-2">C₂ = M₂ ⊕ K</div>
          <div class="border-t border-gray-300 my-2 pt-2">
            <div class="text-red-600 font-bold">C₁ ⊕ C₂ = (M₁ ⊕ K) ⊕ (M₂ ⊕ K) = M₁ ⊕ M₂</div>
          </div>
          <div class="text-sm text-gray-600 mt-2">
            Der Schlüssel K fällt weg! Übrig bleibt nur die XOR-Verknüpfung der beiden Nachrichten.
          </div>
        </div>

        <div class="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
          <h4 class="font-bold text-red-900 mb-2">Historisches Beispiel: VENONA-Projekt</h4>
          <p class="text-sm text-gray-700 mb-3">
            Während des Kalten Kriegs verwendeten sowjetische Agenten versehentlich One-Time-Pad
            Schlüssel mehrfach. Die USA konnten dadurch im
            <strong>VENONA-Projekt</strong> tausende verschlüsselte Nachrichten entschlüsseln!
          </p>
          <p class="text-xs text-red-800 font-semibold">
            ⚠️ Ein einziger Fehler bei der Schlüsselverwaltung zerstört die perfekte Sicherheit
            komplett!
          </p>
        </div>
      </div>

      <!-- Echte Zufälligkeit -->
      <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🎲</span>
          <span>Das Problem der echten Zufälligkeit</span>
        </h3>

        <p class="text-sm sm:text-base text-gray-700 mb-4">
          Der Schlüssel muss <strong>wirklich zufällig</strong> sein – nicht nur pseudo-zufällig!
        </p>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h4 class="font-bold text-red-900 mb-2 flex items-center gap-2">
              <span>❌</span>
              <span>Pseudo-Zufall (UNSICHER)</span>
            </h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>• Math.random()</li>
              <li>• Zeitbasierte Seeds</li>
              <li>• Lineare Kongruenz</li>
              <li>• Muster-basierte Generatoren</li>
            </ul>
            <p class="text-xs text-red-700 mt-2 font-semibold">
              ⚠️ Vorhersagbar durch Algorithmus!
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h4 class="font-bold text-green-900 mb-2 flex items-center gap-2">
              <span>✅</span>
              <span>Echter Zufall (SICHER)</span>
            </h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>• Quanteneffekte</li>
              <li>• Radioaktiver Zerfall</li>
              <li>• Atmosphärisches Rauschen</li>
              <li>• Hardware-Zufallsgeneratoren</li>
            </ul>
            <p class="text-xs text-green-700 mt-2 font-semibold">✅ Nicht vorhersagbar!</p>
          </div>
        </div>
      </div>

      <!-- Praktische Anwendungen -->
      <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg">
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🌍</span>
          <span>Wo wird es heute noch verwendet?</span>
        </h3>

        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-bold text-gray-900 mb-2">
              🔴 Moskau-Washington Hotline (Kalter Krieg)
            </h4>
            <p class="text-sm text-gray-700">
              Die direkte Kommunikationslinie zwischen US-Präsident und sowjetischem Generalsekretär
              nutzte One-Time-Pad für absolute Sicherheit in Krisensituationen.
            </p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-bold text-gray-900 mb-2">🕵️ Geheimdienste</h4>
            <p class="text-sm text-gray-700">
              Für besonders kritische Nachrichten verwenden einige Geheimdienste noch heute
              One-Time-Pad, wenn die Schlüsselverteilung möglich ist (z.B. durch Kuriere).
            </p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-bold text-gray-900 mb-2">🚀 Weltraummissionen</h4>
            <p class="text-sm text-gray-700">
              Bei manchen Weltraummissionen wurden kritische Befehle mit OTP verschlüsselt, wobei
              Schlüssel vor dem Start übertragen wurden.
            </p>
          </div>
        </div>

        <div class="bg-blue-50 border-2 border-blue-300 p-4 rounded-lg mt-4">
          <p class="text-sm text-blue-900">
            <strong>Heute:</strong> Für die meisten Anwendungen ist One-Time-Pad zu unpraktisch.
            Stattdessen werden moderne Verschlüsselungsmethoden wie AES verwendet, die zwar nicht
            perfekt sicher sind, aber praktikabel und sehr stark.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
