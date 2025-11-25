<template>
  <!-- Analogie zu herkömmlichen Zertifikaten -->
  <div class="bg-purple-50 border-2 border-purple-300 rounded-lg p-5 mb-6">
    <h3 class="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
      <span>Warm-Up: Was bedeutet "Zertifikat" eigentlich (im herkömmlichen Sinn)?</span>
    </h3>
    <p class="text-purple-800 mb-4">
      Bevor wir zu <strong>digitalen Zertifikaten</strong> kommen, schauen wir uns an, was
      Zertifikate im Alltag bedeuten. Ein Zertifikat ist eine
      <strong>Bestätigung durch eine vertrauenswürdige Stelle</strong>.
    </p>

    <div class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-4">
      <p class="text-yellow-900">
        📝 Aufgabe: Ordne diese <strong>herkömmlichen Zertifikate</strong> aus dem Alltagsleben den
        <strong>vertrauenswürdigen Stellen</strong> zu:
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Bio-Label -->
      <div class="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-500">
        <div class="flex items-start gap-3 mb-3">
          <img
            src="https://www.wwf.ch/sites/default/files/styles/guide_item_image_labels/public/2023-06/logo-bio-knospe-square_c.jpg"
            alt="Bio Knospe"
            class="w-16 h-16 object-contain"
          />
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900 mb-2">Bio-Label / Knospe</h4>
            <p class="text-gray-700 text-sm mb-3">
              Wer ist die vertrauenswürdige Stelle für Bio-Produkte?
            </p>
            <select
              v-model="certificates.bio"
              class="w-full p-2 border-2 rounded text-sm"
              :class="{
                'border-green-500 bg-green-50':
                  showCertResults && certificates.bio === 'Bio Suisse',
                'border-red-500 bg-red-50':
                  showCertResults && certificates.bio && certificates.bio !== 'Bio Suisse',
                'border-gray-300': !showCertResults,
              }"
            >
              <option value="">-- Wähle eine Stelle --</option>
              <option>Bio Suisse</option>
              <option>Forest Stewardship Council</option>
              <option>EU-Kommission / Akkreditierte Labors</option>
              <option>Social Media Plattform</option>
            </select>
            <div
              v-if="showCertResults && certificates.bio === 'Bio Suisse'"
              class="mt-3 bg-green-100 rounded p-3 text-sm text-green-800"
            >
              ✅ Richtig! Ohne dieses Label könnte jeder behaupten: "Mein Produkt ist bio!"
            </div>
          </div>
        </div>
      </div>

      <!-- Energieeffizienz -->
      <div class="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500">
        <div class="flex items-start gap-3 mb-3">
          <img
            src="https://www.eon.de/adobe/dynamicmedia/deliver/dm-aid--55f27d92-651d-43a6-b6e0-516b6110cfee/cq5dam.web.768.576.jpeg?preferwebp=true&crop=0,18,1127,845&quality=70&width=768"
            alt="EU Energielabel"
            class="w-16 h-16 object-contain"
          />
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900 mb-2">Energieeffizienz-Label (A-G)</h4>
            <p class="text-gray-700 text-sm mb-3">
              Wer ist verantwortlich für die Energieeffizienz-Kennzeichnung?
            </p>
            <select
              v-model="certificates.energy"
              class="w-full p-2 border-2 rounded text-sm"
              :class="{
                'border-green-500 bg-green-50':
                  showCertResults && certificates.energy === 'EU-Kommission / Akkreditierte Labors',
                'border-red-500 bg-red-50':
                  showCertResults &&
                  certificates.energy &&
                  certificates.energy !== 'EU-Kommission / Akkreditierte Labors',
                'border-gray-300': !showCertResults,
              }"
            >
              <option value="">-- Wähle eine Stelle --</option>
              <option>Bio Suisse</option>
              <option>Forest Stewardship Council</option>
              <option>EU-Kommission / Akkreditierte Labors</option>
              <option>Social Media Plattform</option>
            </select>
            <div
              v-if="
                showCertResults && certificates.energy === 'EU-Kommission / Akkreditierte Labors'
              "
              class="mt-3 bg-green-100 rounded p-3 text-sm text-green-800"
            >
              ✅ Richtig! Ohne dieses Label könnte jeder Hersteller sein Gerät als "sparsam"
              bewerben!
            </div>
          </div>
        </div>
      </div>

      <!-- FSC Holz -->
      <div class="bg-white rounded-lg p-4 shadow-md border-l-4 border-yellow-600">
        <div class="flex items-start gap-3 mb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Forest_Stewardship_Council_Logo.svg/500px-Forest_Stewardship_Council_Logo.svg.png"
            alt="FSC Logo"
            class="w-16 h-16 object-contain"
          />
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900 mb-2">
              FSC-Siegel (Nachhaltige Forstwirtschaft)
            </h4>
            <p class="text-gray-700 text-sm mb-3">
              Wer zertifiziert, dass Holzprodukte aus nachhaltiger Forstwirtschaft stammen?
            </p>
            <select
              v-model="certificates.fsc"
              class="w-full p-2 border-2 rounded text-sm"
              :class="{
                'border-green-500 bg-green-50':
                  showCertResults && certificates.fsc === 'Forest Stewardship Council',
                'border-red-500 bg-red-50':
                  showCertResults &&
                  certificates.fsc &&
                  certificates.fsc !== 'Forest Stewardship Council',
                'border-gray-300': !showCertResults,
              }"
            >
              <option value="">-- Wähle eine Stelle --</option>
              <option>Bio Suisse</option>
              <option>Forest Stewardship Council</option>
              <option>EU-Kommission / Akkreditierte Labors</option>
              <option>Social Media Plattform</option>
            </select>
            <div
              v-if="showCertResults && certificates.fsc === 'Forest Stewardship Council'"
              class="mt-3 bg-green-100 rounded p-3 text-sm text-green-800"
            >
              ✅ Richtig! Ohne dieses Siegel wüsstest du nicht, ob das Holz aus Raubbau stammt!
            </div>
          </div>
        </div>
      </div>

      <!-- Verified Badge Social Media -->
      <div class="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-500">
        <div class="flex items-start gap-3 mb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/200px-Twitter_Verified_Badge.svg.png"
            alt="Verified Badge"
            class="w-16 h-16 object-contain"
          />
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900 mb-2">Verified Badge (Social Media)</h4>
            <p class="text-gray-700 text-sm mb-3">
              Wer verifiziert, dass ein Account wirklich zur echten Person/Organisation gehört?
            </p>
            <select
              v-model="certificates.verified"
              class="w-full p-2 border-2 rounded text-sm"
              :class="{
                'border-green-500 bg-green-50':
                  showCertResults && certificates.verified === 'Social Media Plattform',
                'border-red-500 bg-red-50':
                  showCertResults &&
                  certificates.verified &&
                  certificates.verified !== 'Social Media Plattform',
                'border-gray-300': !showCertResults,
              }"
            >
              <option value="">-- Wähle eine Stelle --</option>
              <option>Bio Suisse</option>
              <option>Forest Stewardship Council</option>
              <option>EU-Kommission / Akkreditierte Labors</option>
              <option>Social Media Plattform</option>
            </select>
            <div
              v-if="showCertResults && certificates.verified === 'Social Media Plattform'"
              class="mt-3 bg-green-100 rounded p-3 text-sm text-green-800"
            >
              ✅ Richtig! Ohne diesen Badge könnte jeder einen Fake-Account erstellen und sich als
              berühmte Person ausgeben!
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex gap-3 mt-4">
      <button
        class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        @click="checkCertificates"
      >
        ✓ Überprüfen
      </button>
      <button
        class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        @click="showCertSolution"
      >
        💡 Lösung anzeigen
      </button>
      <button
        class="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        @click="resetCertificates"
      >
        ↻ Zurücksetzen
      </button>
    </div>

    <!-- Feedback -->
    <div v-if="showCertResults" class="mt-4">
      <div
        v-if="certCorrectCount === 4"
        class="bg-green-100 border-2 border-green-500 rounded-lg p-4 flex items-start gap-3"
      >
        <span class="text-2xl">✅</span>
        <div>
          <p class="font-bold text-green-900 mb-1">Perfekt! Alle Zuordnungen sind richtig!</p>
          <p class="text-green-800 text-sm mb-2">Du verstehst das Prinzip:</p>
          <ul class="list-disc pl-6 text-green-800 space-y-1 text-sm">
            <li>
              Eine <strong>unabhängige, vertrauenswürdige Stelle</strong> prüft und bestätigt etwas
            </li>
            <li>Das Zertifikat/Label <strong>garantiert bestimmte Eigenschaften</strong></li>
            <li>Ohne Zertifikat könnte jeder <strong>falsche Behauptungen</strong> aufstellen</li>
            <li>
              Das Zertifikat schützt <strong>Verbraucher/Nutzer</strong> vor Betrug und Täuschung
            </li>
          </ul>
          <p class="text-green-900 font-semibold mt-4">
            💡 Genau so funktionieren <strong>digitale Zertifikate</strong> im Internet!
          </p>
        </div>
      </div>
      <div
        v-else
        class="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 flex items-start gap-3"
      >
        <span class="text-2xl">📝</span>
        <div>
          <p class="font-bold text-yellow-900 mb-1">
            {{ certCorrectCount }}/4 richtig – Versuch's nochmal!
          </p>
          <p class="text-yellow-800 text-sm">
            Falsche Zuordnungen sind rot markiert. Überlege: Welche Organisation ist spezialisiert
            auf welchen Bereich?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue';

interface Certificates {
  bio: string;
  energy: string;
  fsc: string;
  verified: string;
}

// Zertifikat-Zuordnungen
const certificates: Ref<Certificates> = ref({
  bio: '',
  energy: '',
  fsc: '',
  verified: '',
});

// Richtige Antworten
const correctCertAnswers: Certificates = {
  bio: 'Bio Suisse',
  energy: 'EU-Kommission / Akkreditierte Labors',
  fsc: 'Forest Stewardship Council',
  verified: 'Social Media Plattform',
};

const showCertResults = ref(false);

// Zähle korrekte Zuordnungen
const certCorrectCount = computed(() => {
  return Object.keys(correctCertAnswers).filter(
    key =>
      certificates.value[key as keyof Certificates] ===
      correctCertAnswers[key as keyof Certificates]
  ).length;
});

// Überprüfe Zuordnungen
const checkCertificates = () => {
  showCertResults.value = true;
};

// Zeige Lösung
const showCertSolution = () => {
  certificates.value = { ...correctCertAnswers };
  showCertResults.value = true;
};

// Setze zurück
const resetCertificates = () => {
  certificates.value = {
    bio: '',
    energy: '',
    fsc: '',
    verified: '',
  };
  showCertResults.value = false;
};
</script>
