<template>
  <section id="simulator" class="mb-16 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <span class="text-4xl">🖥️</span>
      ENIGMA-Simulator
    </h2>

    <div class="space-y-8">
      <!-- Instructions -->
      <div
        class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500"
      >
        <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span>📖</span>
          Anleitung
        </h3>
        <ol class="space-y-2 text-gray-700">
          <li class="flex items-start gap-3">
            <span
              class="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >1</span
            >
            <span>Wähle die Rotoren und ihre Startposition</span>
          </li>
          <li class="flex items-start gap-3">
            <span
              class="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >2</span
            >
            <span>Optional: Füge Steckerbrett-Verbindungen hinzu (z.B. A↔R)</span>
          </li>
          <li class="flex items-start gap-3">
            <span
              class="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >3</span
            >
            <span>Gib deinen Text ein (verschlüsseln)</span>
          </li>
          <li class="flex items-start gap-3">
            <span
              class="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >4</span
            >
            <span
              >Zum Entschlüsseln: Stelle <strong>genau dieselbe</strong> Start Konfiguration ein und
              verschlüssle den Geheimtext</span
            >
          </li>
        </ol>
      </div>
      <!-- Links zum Simulator -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-bold text-gray-800 mb-4">🔗 ENIGMA Online Simulatoren</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://www.101computing.net/enigma/enigma.php?r=B&r1=II&r2=V&r3=III&s1=D&s2=K&s3=X&p1=Y&p2=W&p3=Y&pb=ADETFUGQHMJLNVPZ"
              class="text-blue-600 hover:underline"
              target="_blank"
              >ENIGMA-Simulator interaktiv</a
            >
          </li>
          <li>
            <a
              href="https://enigma.alextebbs.com/"
              class="text-blue-600 hover:underline"
              target="_blank"
              >ENIGMA-Simulator 3D</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
