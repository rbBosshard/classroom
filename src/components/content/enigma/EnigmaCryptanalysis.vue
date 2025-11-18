<template>
  <section id="cryptanalysis" class="mb-16 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <span class="text-4xl">🔍</span>
      Kryptoanalyse: Wie wurde ENIGMA geknackt?
    </h2>

    <div class="space-y-8">
      <!-- Introduction -->
      <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
        <p class="text-lg text-gray-700 mb-4">
          Trotz 159 Trilliarden möglicher Einstellungen wurde die ENIGMA geknackt. Der Schlüssel lag
          nicht in roher Rechenleistung, sondern in <strong>mathematischer Analyse</strong> und dem
          Ausnutzen von <strong>menschlichen Fehlern</strong>.
        </p>
      </div>

      <!-- Weaknesses -->
      <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
          Die Schwachstellen der ENIGMA
        </h3>

        <div class="space-y-6">
          <div
            v-for="(weakness, index) in weaknesses"
            :key="index"
            class="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border-l-4"
            :class="weakness.borderColor"
          >
            <div class="flex items-start gap-4">
              <div class="text-4xl flex-shrink-0">{{ weakness.icon }}</div>
              <div>
                <h4 class="text-xl font-bold text-gray-800 mb-2">{{ weakness.title }}</h4>
                <p class="text-gray-700 mb-3">{{ weakness.description }}</p>
                <div class="bg-white p-3 rounded text-sm text-gray-600">
                  <strong>Beispiel:</strong> {{ weakness.example }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Turing's Bombe -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span>💣</span>
          Die "Bombe" - Turings Maschine
        </h3>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="font-bold text-gray-800 mb-3 text-lg">Was war die "Bombe"?</h4>
            <p class="text-gray-700 mb-3">
              Die Bombe war eine elektromechanische Maschine, die Alan Turing und Gordon Welchman in
              Bletchley Park entwickelten. Sie nutzte <strong>Cribs</strong> (vermutete Klartexte)
              und das Prinzip der Nicht-Selbst-Verschlüsselung.
            </p>
            <div class="bg-blue-50 p-3 rounded text-sm">
              <p class="font-semibold mb-1">Funktionsweise:</p>
              <ul class="list-disc list-inside space-y-1 text-gray-600">
                <li>Simulierte mehrere ENIGMA-Maschinen parallel</li>
                <li>Testete systematisch mögliche Rotor-Einstellungen</li>
                <li>
                  Eliminierte unmögliche Konfigurationen (Rotor- und Steckbrett-Einstellungen)
                </li>
                <li>Reduzierte Suchraum dramatisch</li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="font-bold text-gray-800 mb-3 text-lg">Cribs nutzen</h4>
            <p class="text-gray-700 mb-3 text-sm">
              Die Alliierten wussten oft, welche Wörter in deutschen Nachrichten vorkommen würden:
            </p>
            <div class="space-y-2 text-sm">
              <div class="bg-indigo-50 p-2 rounded font-mono">
                <div class="text-gray-600">Geheimtext: ...GSTZZUGARLVYQGMYWMLU...</div>
                <div class="text-indigo-600">Vermutung: WETTERVORHERSAGE</div>
              </div>
              <p class="text-gray-600">
                Mit dieser Information konnte die Bombe prüfen: "Wenn G = W, dann muss S = E und T =
                T sein. Aber das ist unmöglich! Denk dran, dass Selbst-Verschlüsselung nie möglich
                ist mit ENIGMA! Darum kann diese Position z. B. ausgeschlossen werden."
              </p>
            </div>
            <div>
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="font-bold text-gray-800 mb-4">🔗 ENIGMA Crib Beispiel</h3>
                <a
                  href="https://www.101computing.net/enigma-crib/"
                  class="text-blue-600 hover:underline"
                  target="_blank"
                  >Crib Annahme im Klartext: "WETTERVORHERSAGE"</a
                >
              </div>
            </div>

            <div class="bg-green-50 p-4 rounded-lg mt-4">
              <p class="text-sm text-gray-700">
                <strong>💡 Fazit:</strong> Allein diese Eigenschaft eliminierte die meisten
                möglichen Positionen. Kombiniert mit anderen Techniken wurde der Suchraum schnell
                handhabbar!
              </p>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col">
          <img
            :src="enigmaBombe"
            alt="ENIGMA Bombe in Bletchley Park"
            class="w-full h-100 object-cover"
          />
          <p class="text-xs text-gray-500 text-center py-2 bg-gray-50">
            ENIGMA Bombe im Entschlüsselungszentrum Bletchley Park
          </p>
        </div>

        <div class="mt-6 bg-white p-4 rounded-lg">
          <p class="text-sm text-gray-600 italic">
            Eine einzelne Bombe konnte etwa 20 Minuten brauchen, um eine Nachricht zu knacken.
            Bletchley Park hatte am Ende des Krieges über 200 Bomben im Einsatz!
          </p>
        </div>
      </div>

      <!-- Impact -->
      <div
        class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500"
      >
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>🌟</span>
          Der Durchbruch und seine Bedeutung
        </h3>

        <div class="space-y-4 text-gray-700">
          <p class="text-lg">
            Das Knacken der ENIGMA war einer der grössten Erfolge der Kryptoanalyse und hatte
            weitreichende Konsequenzen:
          </p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold mb-2">⚔️ Militärisch</h4>
              <ul class="text-sm space-y-1 list-disc list-inside text-gray-600">
                <li>Verkürzung des Krieges um schätzungsweise 2-4 Jahre</li>
                <li>Rettung hunderttausender Leben</li>
                <li>Entscheidender Vorteil in Atlantikschlacht</li>
              </ul>
            </div>

            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold mb-2">💻 Wissenschaftlich</h4>
              <ul class="text-sm space-y-1 list-disc list-inside text-gray-600">
                <li>Grundlage für moderne Computer-Wissenschaft</li>
                <li>Entwicklung von Algorithmen und Kryptoanalyse</li>
                <li>Alan Turing: "Vater der Informatik"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import enigmaBombe from '@/assets/images/TuringBombeBletchleyPark.jpg';

const weaknesses = [
  {
    icon: '🔮',
    title: 'Vorhersagbare Nachrichtenanfänge',
    borderColor: 'border-orange-500',
    description:
      'Viele deutsche Nachrichten begannen mit vorhersagbaren Wörtern, sogennante Cribs (z.B. "WETTERBERICHT", "HEILHITLER" oder ein in standardisierter Gruss).',
    example:
      'Wetterberichte wurden täglich um dieselbe Zeit gesendet und begannen meist mit "WETTER". Das waren ideale "Cribs" (vermutete Klartexte).',
  },
  {
    icon: '🚫',
    title: 'Keine Selbst-Verschlüsselung wegen dem Reflektor',
    borderColor: 'border-red-500',
    description:
      'Ein Buchstabe wurde NIEMALS auf sich selbst verschlüsselt. Wenn du "W" drückst, kann niemals "W" aufleuchten. Diese Eigenschaft war eine der grössten Schwächen.',
    example:
      'Wenn du "WETTER" im Klartext vermutest und im Geheimtext ein "W" siehst, kann das NICHT die Position sein!',
  },
  {
    icon: '📅',
    title: 'Tägliche Schlüssel',
    borderColor: 'border-green-500',
    description:
      'Die Einstellungen wurden täglich gewechselt, aber der ganze Tag nutzte dieselbe Konfiguration.',
    example:
      'Sobald ein Schlüssel geknackt war, konnten ALLE Nachrichten des Tages entschlüsselt werden!',
  },
];
</script>
