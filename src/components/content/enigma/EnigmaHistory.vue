<template>
  <section id="history" class="mb-16 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <span class="text-4xl">📜</span>
      Geschichte der ENIGMA
    </h2>

    <div class="space-y-8">
      <!-- Timeline -->
      <div class="relative">
        <div class="absolute left-8 top-0 bottom-0 w-1 bg-red-300"></div>

        <div v-for="(event, index) in timeline" :key="index" class="relative pl-20 pb-8 last:pb-0">
          <div
            class="absolute left-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg"
          >
            {{ index + 1 }}
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">{{ event.icon }}</span>
              <h3 class="text-xl font-bold text-gray-800">{{ event.year }}</h3>
            </div>
            <h4 class="font-semibold text-gray-700 mb-2">{{ event.title }}</h4>
            <p class="text-gray-600">{{ event.description }}</p>
          </div>
        </div>
      </div>

      <!-- Impact -->
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>🌍</span>
          Bedeutung für den Krieg
        </h3>
        <p class="text-gray-700 mb-4">
          Das Knacken der ENIGMA-Verschlüsselung durch die Alliierten hatte einen
          <strong>entscheidenden Einfluss</strong> auf den Verlauf des 2. Weltkriegs:
        </p>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">🚢</span>
            <span
              ><strong>Atlantikschlacht:</strong> Konvois konnten U-Boot-Positionen umfahren</span
            >
          </li>
          <li class="flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✈️</span>
            <span><strong>Luftkrieg:</strong> Luftangriffe der Luftwaffe wurden vorhergesehen</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏱️</span>
            <span
              ><strong>Zeitgewinn:</strong> Historiker schätzen, der Krieg wurde um 2-4 Jahre
              verkürzt</span
            >
          </li>
        </ul>
      </div>

      <!-- Fun Fact -->
      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
        <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span>🎬</span>
          Film-Tipp
        </h3>
        <p class="text-gray-700">
          Der Film <strong>"The Imitation Game"</strong> (2014) mit Benedict Cumberbatch als Alan
          Turing zeigt die Geschichte des Knackens der ENIGMA-Verschlüsselung.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const timeline = [
  {
    year: '1918',
    icon: '💡',
    title: 'Erfindung',
    description:
      'Arthur Scherbius erfindet die ENIGMA-Maschine in Berlin als kommerzielle Chiffriermaschine',
  },
  {
    year: '1926',
    icon: '🎖️',
    title: 'Militärische Nutzung',
    description:
      'Die deutsche Wehrmacht übernimmt die ENIGMA und entwickelt sie weiter (M3-Version)',
  },
  {
    year: '1932',
    icon: '🇵🇱',
    title: 'Erste Kryptoanalyse Versuche',
    description: 'Polnische Mathematiker (Marian Rejewski) knacken erste ENIGMA-Versionen',
  },
  {
    year: '1939',
    icon: '🇬🇧',
    title: 'Bletchley Park',
    description:
      'Britisches Entschlüsselungszentrum wird eingerichtet im ersten Kriegsjahr. Alan Turing entwickelt die "Bombe"',
  },
  {
    year: '1941',
    icon: '⚡',
    title: 'Durchbruch',
    description: 'Die "Bombe"-Maschine kann ENIGMA-Nachrichten systematisch entschlüsseln',
  },
  {
    year: '1945',
    icon: '🔓',
    title: 'Kriegsende',
    description: 'Die Entschlüsselung bleibt bis in die 1970er Jahre geheim',
  },
];
</script>
