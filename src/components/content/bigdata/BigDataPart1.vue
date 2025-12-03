<template>
  <div class="bigdata-part1 max-w-5xl mx-auto">
    <!-- Header -->
    <header
      class="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8 shadow-lg"
    >
      <h1 class="text-3xl md:text-4xl font-bold">Teil 1: Was ist Big Data?</h1>
    </header>

    <!-- Lernziele -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">🎯 Lernziele Teil 1</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li v-for="objective in learningObjectives" :key="objective">
          {{ objective }}
        </li>
      </ul>
    </div>

    <!-- Statista Datenvolumen -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h3 class="text-lg font-bold text-gray-800">Einstieg (10 min)</h3>

      <div class="p-4 rounded-r-lg mb-6">
        <div class="mb-6">
          <a
            href="https://de.statista.com/statistik/daten/studie/267974/umfrage/prognose-zum-weltweit-generierten-datenvolumen/"
            target="_blank"
            rel="noopener noreferrer"
            class="block hover:opacity-90 transition-opacity"
          >
            <img
              src="https://de.statista.com/graphic/1/267974/prognose-zum-weltweit-generierten-datenvolumen.jpg"
              alt="Volumen der jährlich generierten digitalen Datenmenge weltweit von 2010 bis 2024 und Prognose für 2029 (in Zettabyte)"
              class="w-full rounded-lg border border-gray-200 shadow-sm"
            />
            <p class="text-xs text-gray-500 mt-2 text-center">
              Quelle: Statista - Klicken zum Vergrössern
            </p>
          </a>
        </div>

        <div class="prose mb-6">
          <p>
            In der Grafik oben sehen wir, dass im Jahr 2029 voraussichtlich etwa
            <strong>527.5 Zettabyte</strong> an neuen Daten generiert werden (Prognose). Was
            bedeutet das eigentlich?
            <!-- Ausklappbares Bild zur Byte-Skala -->
          </p>

          <div class="mb-6">
            <button
              class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg transition-colors border border-blue-300"
              @click="showByteScaleImage = !showByteScaleImage"
            >
              <span class="font-medium"
                >Wie können wir uns diese riesige Datenmenge vorstellen?
              </span>
              <span
                class="text-xl transition-transform"
                :class="{ 'rotate-180': showByteScaleImage }"
              >
                ▼
              </span>
            </button>
            <div v-show="showByteScaleImage" class="mt-4 flex justify-center animate-slideDown">
              <img
                :src="byteScale"
                alt="Byte-Skala Visualisierung von Byte bis Yottabyte"
                class="w-full max-w-2xl rounded-lg border border-gray-300 shadow-md"
              />
            </div>
          </div>
        </div>

        <!-- Byte-Skala Visualisierung -->
        <div class="bg-gradient-to-br to-indigo-50 rounded-lg p-6 mb-6 border border-blue-200">
          <h4 class="text-lg font-semibold text-gray-800 mb-4 text-center">
            📏 Die Byte-Skala: Von winzig zu gigantisch
          </h4>

          <div class="space-y-1">
            <div
              class="flex items-center justify-between bg-white rounded-lg p-1 shadow-md hover:shadow-emerald-300 transition-shadow"
            >
              <span class="font-semibold text-gray-700">1 Byte (B)</span>
              <span class="text-sm text-gray-600">8 Bits</span>
              <span class="text-sm text-gray-500 font-mono">= 1 Byte</span>
            </div>
            <div
              class="flex items-center justify-between bg-white rounded-lg p-1 shadow-md hover:shadow-emerald-300 transition-shadow"
            >
              <span class="font-semibold text-gray-700">1 Kilobyte (KB)</span>
              <span class="text-sm text-gray-600">≈ 1 Seite Text</span>
              <span class="text-sm text-gray-500 font-mono">≈ 10<sup>3</sup> Bytes</span>
            </div>
            <div
              class="flex items-center justify-between bg-white rounded-lg p-1 shadow-md hover:shadow-emerald-300 transition-shadow"
            >
              <span class="font-semibold text-gray-700">1 Megabyte (MB)</span>
              <span class="text-sm text-gray-600">≈ 1 Minute MP3-Musik</span>
              <span class="text-sm text-gray-500 font-mono">≈ 10<sup>6</sup> Bytes</span>
            </div>
            <div
              class="flex items-center justify-between bg-white rounded-lg p-1 shadow-md hover:shadow-emerald-300 transition-shadow"
            >
              <span class="font-semibold text-gray-700">1 Gigabyte (GB)</span>
              <span class="text-sm text-gray-600">≈ 1 HD-Film</span>
              <span class="text-sm text-gray-500 font-mono">≈ 10<sup>9</sup> Bytes</span>
            </div>
            <div
              class="flex items-center justify-between bg-white rounded-lg p-1 shadow-md hover:shadow-emerald-300 transition-shadow"
            >
              <span class="font-semibold text-gray-700">1 Terabyte (TB)</span>
              <span class="text-sm text-gray-600">≈ 200 Filme oder 1 Laptop Festplatte</span>
              <span class="text-sm text-gray-500 font-mono">≈ 10<sup>12</sup> Bytes</span>
            </div>
            <div
              class="flex items-center justify-between bg-white rounded-lg p-1 shadow-md hover:shadow-emerald-300 transition-shadow"
            >
              <span class="font-semibold text-gray-700">1 Petabyte (PB)</span>
              <span class="text-sm text-gray-600">≈ 1000 Terabyte</span>
              <span class="text-sm text-gray-500 font-mono">≈ 10<sup>15</sup> Bytes</span>
            </div>
            <div
              class="flex items-center justify-between bg-white rounded-lg p-1 shadow-md hover:shadow-emerald-300 transition-shadow"
            >
              <span class="font-semibold text-gray-700">1 Exabyte (EB)</span>
              <span class="text-sm text-gray-600">≈ 1000 Petabyte</span>
              <span class="text-sm text-gray-500 font-mono">≈ 10<sup>18</sup> Bytes </span>
            </div>
            <div
              class="flex items-center justify-between bg-white rounded-lg p-1 shadow-md hover:shadow-emerald-300 transition-shadow"
            >
              <span class="font-semibold text-gray-700">1 Zettabyte (ZB)</span>
              <span class="text-sm text-gray-700">≈ 1000 Exabyte</span>
              <span class="text-sm text-gray-600 font-mono">≈ 10<sup>21</sup> Bytes</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-4 text-center italic">
            💡 Jede Einheit ist etwa 1000× grösser als die vorherige
          </p>
        </div>

        <div class="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
          <h5 class="font-semibold text-yellow-900 mb-3">Lösen Sie die Quizfragen:</h5>

          <!-- LearningApp -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <InteractiveContent :content="learningApp" />
          </div>

          <!-- Aufgabe 1: HD-Filme berechnen -->
          <div class="mb-6 bg-white rounded-lg p-4 border border-yellow-200">
            <p class="text-sm text-gray-700 mb-3">
              1. Wie viele HD-Filme (je 5 GB) kann man mit 1 Zettabyte speichern?
            </p>
            <div class="grid grid-cols-1 gap-2">
              <button
                v-for="option in options1"
                :key="option.value"
                :class="[
                  'p-3 text-left rounded-lg border-2 transition-all',
                  answer1 === option.value && feedback1?.correct
                    ? 'border-green-500 bg-green-50'
                    : answer1 === option.value && !feedback1?.correct
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 hover:border-yellow-300 hover:bg-gray-50',
                ]"
                @click="selectAnswer1(option.value)"
              >
                <span class="font-medium">{{ option.label }}</span>
              </button>
            </div>
            <div
              v-if="feedback1"
              :class="[
                'mt-2 p-3 rounded text-sm',
                feedback1.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
              ]"
            >
              {{ feedback1.message }}
            </div>
          </div>

          <!-- Aufgabe 2: Fotos berechnen -->
          <div class="mb-6 bg-white rounded-lg p-4 border border-yellow-200">
            <p class="text-sm text-gray-700 mb-3">
              2. Wenn Sie jeden Tag 200 Smartphone-Fotos (je 5 MB) machen - wie lange (in Jahren)
              würden Sie brauchen, um 1 Zettabyte zu füllen?
            </p>
            <div class="grid grid-cols-1 gap-2">
              <button
                v-for="option in options2"
                :key="option.value"
                :class="[
                  'p-3 text-left rounded-lg border-2 transition-all',
                  answer2 === option.value && feedback2?.correct
                    ? 'border-green-500 bg-green-50'
                    : answer2 === option.value && !feedback2?.correct
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 hover:border-yellow-300 hover:bg-gray-50',
                ]"
                @click="selectAnswer2(option.value)"
              >
                <span class="font-medium">{{ option.label }}</span>
              </button>
            </div>
            <div
              v-if="feedback2"
              :class="[
                'mt-2 p-3 rounded text-sm',
                feedback2.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
              ]"
            >
              {{ feedback2.message }}
            </div>
          </div>

          <!-- Aufgabe 3: Prozentuale Zunahme -->
          <div class="mb-6 bg-white rounded-lg p-4 border border-yellow-200">
            <p class="text-sm text-gray-700 mb-3">
              3. Um wie viel Prozent steigt voraussichtlich das Datenvolumen von 2024 bis 2029?
            </p>
            <div class="grid grid-cols-1 gap-2">
              <button
                v-for="option in options3"
                :key="option.value"
                :class="[
                  'p-3 text-left rounded-lg border-2 transition-all',
                  answer3 === option.value && feedback3?.correct
                    ? 'border-green-500 bg-green-50'
                    : answer3 === option.value && !feedback3?.correct
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 hover:border-yellow-300 hover:bg-gray-50',
                ]"
                @click="selectAnswer3(option.value)"
              >
                <span class="font-medium">{{ option.label }}</span>
              </button>
            </div>
            <div
              v-if="feedback3"
              :class="[
                'mt-2 p-3 rounded text-sm',
                feedback3.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
              ]"
            >
              {{ feedback3.message }}
            </div>
          </div>

          <!-- Aufgabe 4: Was kommt nach Zettabyte? -->
          <div class="bg-white rounded-lg p-4 border border-yellow-200">
            <p class="text-sm text-gray-700 mb-3">4. Was kommt nach Zettabyte?</p>
            <div class="grid grid-cols-1 gap-2">
              <button
                v-for="option in options4"
                :key="option.value"
                :class="[
                  'p-3 text-left rounded-lg border-2 transition-all',
                  answer4 === option.value && feedback4?.correct
                    ? 'border-green-500 bg-green-50'
                    : answer4 === option.value && !feedback4?.correct
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 hover:border-yellow-300 hover:bg-gray-50',
                ]"
                @click="selectAnswer4(option.value)"
              >
                <span class="font-medium">{{ option.label }}</span>
              </button>
            </div>
            <div
              v-if="feedback4"
              :class="[
                'mt-2 p-3 rounded text-sm',
                feedback4.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
              ]"
            >
              {{ feedback4.message }}
            </div>
          </div>

          <!-- Fortschritt -->
          <div v-if="allCorrect" class="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
            <p class="text-green-800 font-semibold text-center">
              🎉 Ausgezeichnet! Alle Aufgaben korrekt gelöst!
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- H5P Video -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">Was ist Big Data? (15 min)</h2>
      <InteractiveContent :content="h5pVideo" />
      <h5 class="text-lg font-semibold text-gray-800 mt-6 mb-4">
        Lösen Sie die folgenden interaktiven Aufgaben
      </h5>

      <InteractiveContent :content="learningApp2" />

      <InteractiveContent :content="h5pContent" />

      <InteractiveContent :content="h5pGoogleData" />
    </div>

    <!-- Was versteht man unter Data-Mining? -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 class="text-xl font-bold mb-4 text-gray-800">
        ⛏️ Was versteht man unter Data-Mining? (15 min)
      </h2>

      <div class="prose max-w-none">
        <p class="text-gray-700 mb-4">
          <strong>Data-Mining</strong> (deutsch: "Daten schürfen") ist der Prozess, aus grossen
          Datenmengen (Big Data) wertvolle Muster, Trends und Zusammenhänge zu extrahieren.
        </p>

        <div class="bg-blue-50 rounded-lg p-4">
          <p class="text-gray-800">
            💡 <strong>Metapher:</strong> Wie ein Goldgräber, der Tonnen von Gestein durchsucht, um
            wertvolle Goldnuggets zu finden, durchsucht Data-Mining riesige Datenmengen, um
            wertvolle Erkenntnisse zu gewinnen.
          </p>
        </div>
      </div>

      <!-- Ist Google dein bester Freund? -->
      <h2 class="text-xl font-bold mt-8 mb-4 text-gray-800">🔍 Ist Google dein bester Freund?</h2>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-5 mb-6 rounded-r-lg">
        <p class="text-gray-800">
          <strong>📖 Aufgabe:</strong> Klicken Sie auf den Link unten und finden Sie heraus, ob Sie
          mit Google mehr Informationen teilen, als mit Ihrem engsten Freund oder Ihrer engsten
          Freundin. Lesen Sie den Textabschnitt <strong>"GOLDGRÄBERSTIMMUNG IM NETZ"</strong>.
        </p>
      </div>

      <!-- Website Preview Link -->
      <div
        class="border border-gray-300 rounded-lg overflow-hidden mb-6 hover:shadow-lg transition-shadow"
      >
        <a
          href="https://dataselfie.jnw-sdm.ch/2018/01/22/ist-google-dein-bester-freund/"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
            <h3 class="text-white font-semibold text-lg flex items-center">
              <span class="mr-2">🌐</span>
              Dataselfie: Ist Google dein bester Freund?
              <span class="ml-auto text-xl">→</span>
            </h3>
          </div>
          <div class="bg-white p-4">
            <p class="text-md text-gray-600 mb-2">
              Eine interaktive Analyse darüber, welche Daten Google über Sie sammelt und wie viel
              Sie unbewusst teilen.
            </p>
            <span class="text-md text-blue-600 font-medium">dataselfie.jnw-sdm.ch</span>
          </div>
        </a>
      </div>
      <!-- Google Trends Aufgabe -->
      <h2 class="text-xl font-bold mb-4 text-gray-800">📈 Aktuelle Google Trends der Schweiz</h2>

      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-5 mb-6 rounded-r-lg">
        <h3 class="font-semibold text-yellow-900 mb-3">📝 Aufgabe</h3>
        <p class="text-gray-800 mb-3">
          Über die oben verlinkte Webseite <strong>Dataselfie</strong> gelangen Sie zu den aktuellen
          Google Trends der Schweiz. Alternativ können Sie direkt auf den Link unten klicken.
        </p>
        <p class="text-gray-800">
          <strong>Frage:</strong> Welche <strong>Top 3 Trends</strong> gibt es aktuell in der
          Schweiz?
        </p>
      </div>

      <!-- Google Trends Link -->
      <div
        class="border border-gray-300 rounded-lg overflow-hidden mb-6 hover:shadow-lg transition-shadow"
      >
        <a
          href="https://trends.google.de/trends/"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <div class="bg-gradient-to-r from-red-500 to-orange-500 p-4">
            <h3 class="text-white font-semibold text-lg flex items-center">
              <span class="mr-2">📊</span>
              Google Trends - Schweiz
              <span class="ml-auto text-xl">→</span>
            </h3>
          </div>
          <div class="bg-white p-4">
            <p class="text-sm text-gray-600 mb-2">
              Entdecken Sie, was die Menschen in der Schweiz aktuell bei Google suchen.
            </p>
            <span class="text-sm text-red-600 font-medium">trends.google.de</span>
          </div>
        </a>
      </div>
    </div>

    <!-- Mentimeter Umfrage -->
    <MentimeterSurvey :learning-objectives="learningObjectives" :mentimeter-url="mentimeterUrl" />

    <!-- Navigation zu Teil 2 -->
    <div class="flex justify-center mt-8">
      <button
        class="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
        @click="navigateToContent('bigdata-part2')"
      >
        <span class="text-lg">Weiter zu Teil 2: Datenspeicherung</span>
        <span class="text-2xl">→</span>
      </button>
    </div>

    <!-- Quellen -->
    <Sources :sources="sources" />
  </div>
</template>

Die SuS können erklären, was Big Data ist, und verschiedene Datengrössen von Byte bis Zettabyte
einordnen. Die SuS können die 5 V’s von Big Data (Volume, Velocity, Variety, Veracity, Value)
verstehen und erläutern. Die SuS können den Begriff Big Data charakterisieren und mindestens zwei
Anwendungsbeispiele nennen. Die SuS können die Grundlagen des Data-Mining beschreiben. Die SuS
können den Unterschied zwischen strukturierten und unstrukturierten Daten erklären. Die SuS können
verschiedene Möglichkeiten zur Speicherung von Big Data aufzählen und beschreiben. Die SuS können
erklären, was relationale Datenbanken sind und wofür sie genutzt werden. Die SuS können die
Grundprinzipien von SQL und den Aufbau von Datenbank-Tabellen verstehen. Die SuS können einfache
SQL-Befehle anwenden.

<script setup lang="ts">
import { ref, computed } from 'vue';
import InteractiveContent from '@/components/ui/InteractiveContent.vue';
import MentimeterSurvey from '@/components/ui/MentimeterSurvey.vue';
import Sources from '@/components/ui/Sources.vue';
import { useNavigation } from '@/composables/useNavigation';
import type { InteractiveContent as InteractiveContentType } from '@/types/bigdata';
import byteScale from '@/assets/images/bigdata/byteScale.png';

const { navigateToContent } = useNavigation();

const learningObjectives = [
  'Ich kann erklären, was Big Data ist und die verschiedenen Datengrössen (Byte bis Zettabyte) einordnen',
  "Ich verstehe die 5 V's von Big Data (Volume, Velocity, Variety, Veracity, Value)",
  'Ich kann den Begriff Big Data charakterisieren und mindestens zwei Beispiele nennen, wo Big Data zum Einsatz kommt',
  'Ich kenne die Grundlagen des Data-Mining',
];

// UI State
const showByteScaleImage = ref(false);

// Aufgaben-State
const answer1 = ref<number | null>(null);
const answer2 = ref<number | null>(null);
const answer3 = ref<number | null>(null);
const answer4 = ref<string | null>(null);
const feedback1 = ref<{ correct: boolean; message: string } | null>(null);
const feedback2 = ref<{ correct: boolean; message: string } | null>(null);
const feedback3 = ref<{ correct: boolean; message: string } | null>(null);
const feedback4 = ref<{ correct: boolean; message: string } | null>(null);

// Antwortmöglichkeiten für Aufgabe 1
const options1 = [
  { value: 200000, label: '200 Tausend HD-Filme' },
  { value: 200000000, label: '200 Millionen HD-Filme' },
  { value: 200000000000, label: '200 Milliarden HD-Filme' },
];

// Antwortmöglichkeiten für Aufgabe 2
const options2 = [
  { value: 2739726, label: 'Ca. 2,7 Millionen Jahre' },
  { value: 2739726027, label: 'Ca. 2,7 Milliarden Jahre' },
  { value: 2739726027000, label: 'Ca. 2,7 Billionen Jahre' },
];

// Antwortmöglichkeiten für Aufgabe 3
const options3 = [
  { value: 104, label: 'Ca. 104% Zunahme' },
  { value: 204, label: 'Ca. 204% Zunahme' },
  { value: 304, label: 'Ca. 304% Zunahme' },
];

// Antwortmöglichkeiten für Aufgabe 4
const options4 = [
  { value: 'brontobyte', label: 'Brontobyte (BB)' },
  { value: 'hexabyte', label: 'Hexabyte (HB)' },
  { value: 'yottabyte', label: 'Yottabyte (YB)' },
];

// Auswahl-Funktionen
const selectAnswer1 = (value: number) => {
  answer1.value = value;
  checkAnswer1();
};

const selectAnswer2 = (value: number) => {
  answer2.value = value;
  checkAnswer2();
};

const selectAnswer3 = (value: number) => {
  answer3.value = value;
  checkAnswer3();
};

// Berechnung: 1 ZB = 1.000.000.000.000 GB
// 1 ZB / 5 GB = 200.000.000.000 Filme
const checkAnswer1 = () => {
  const correctAnswer = 200000000000;

  if (answer1.value === correctAnswer) {
    feedback1.value = {
      correct: true,
      message: `✅ Richtig! 1 Zettabyte = 1.000.000.000.000 GB ÷ 5 GB = 200 Milliarden HD-Filme.`,
    };
  } else {
    feedback1.value = {
      correct: false,
      message: `❌ Nicht ganz. Tipp: 1 Zettabyte = 1 Billion GB (1.000.000.000.000 GB). Teile durch 5 GB pro Film.`,
    };
  }
};

// Berechnung: Pro Tag 200 Fotos × 5 MB = 1000 MB = 1 GB
// Pro Jahr: 365 GB
// 1 ZB = 1.000.000.000.000 GB
// Jahre = 1.000.000.000.000 ÷ 365 ≈ 2.739.726.027 Jahre
const checkAnswer2 = () => {
  const correctAnswer = 2739726027; // Jahre

  if (answer2.value === correctAnswer) {
    feedback2.value = {
      correct: true,
      message: `✅ Richtig! Etwa 2,7 Milliarden Jahre! Das ist mehr als die Hälfte des Alters der Erde (4,5 Mrd. Jahre).`,
    };
  } else {
    feedback2.value = {
      correct: false,
      message: `❌ Nicht ganz. Tipp: 200 Fotos × 5 MB = 1 GB pro Tag. Pro Jahr = 365 GB. Wie viele Jahre für 1 Billion GB?`,
    };
  }
};

const checkAnswer3 = () => {
  const correctAnswer = 204; // Prozent

  if (answer3.value === correctAnswer) {
    feedback3.value = {
      correct: true,
      message: `✅ Richtig! Das Datenvolumen steigt um 204%. Die Formel: (527.5 - 173.4) / 173.4 × 100 = 204%. Eine Verdreifachung in 5 Jahren!`,
    };
  } else {
    feedback3.value = {
      correct: false,
      message: `❌ Nicht ganz. Tipp: Berechne (Wert 2029 - Wert 2024) / Wert 2024 × 100. Also (527.5 - 173.4) / 173.4 × 100.`,
    };
  }
};

const selectAnswer4 = (value: string) => {
  answer4.value = value;
  checkAnswer4();
};

const checkAnswer4 = () => {
  const correctAnswer = 'yottabyte';

  if (answer4.value === correctAnswer) {
    feedback4.value = {
      correct: true,
      message: `✅ Richtig! Nach Zettabyte (10²¹) kommt Yottabyte (10²⁴)!`,
    };
  } else {
    feedback4.value = {
      correct: false,
      message: `❌ Nicht ganz. Recherchieren Sie im Internet nach der Byte-Skala.`,
    };
  }
};

const allCorrect = computed(() => {
  return (
    feedback1.value?.correct &&
    feedback2.value?.correct &&
    feedback3.value?.correct &&
    feedback4.value?.correct
  );
});

// H5P Video Konfiguration
// Ersetze die URL mit deinem H5P-Video
const h5pVideo = ref<InteractiveContentType>({
  type: 'h5p',
  url: 'https://h5p.zebis.digital/h5p/6455/embed',
  title: 'Schauen Sie das folgende Video und beantworten Sie die Fragen im Video.',
  height: '535px',
  allowFullscreen: true,
});

const h5pContent = ref<InteractiveContentType>({
  type: 'h5p',
  url: 'https://h5p.zebis.digital/h5p/6799/embed',
  title: '',
  height: '525px',
  allowFullscreen: true,
});

// LearningApp Konfiguration
// Ersetze die URL mit deiner LearningApp von learningapps.org
const learningApp = ref<InteractiveContentType>({
  type: 'iframe',
  url: 'https://learningapps.org/watch?v=pe4vs27ya25',
  title: 'Die folgende Aufgabe gibt Ihnen ein Gefühl für unterschiedliche Dateigrössen.',
  height: '500px',
  allowFullscreen: true,
});

const learningApp2 = ref<InteractiveContentType>({
  type: 'iframe',
  url: 'https://learningapps.org/tools/71/37/watch?id=p3qz8hhit22',
  title: '',
  height: '500px',
  allowFullscreen: true,
});

// H5P Google Data
const h5pGoogleData = ref<InteractiveContentType>({
  type: 'h5p',
  url: 'https://h5p.zebis.digital/h5p/8824/embed',
  title: '',
  height: '635px',
  allowFullscreen: true,
});

// Mentimeter URL (optional)
// Ersetze mit deiner Mentimeter-URL für Live-Voting
const mentimeterUrl = ref('https://www.menti.com/alaxmppxazww');

// Quellen
const sources = [
  {
    id: 1,
    title: 'Zebis Digital - Big Data Kursmaterialien',
    url: 'https://zebis.digital/start/35LSCG/',
    type: 'Webseite' as const,
    description: 'Zebis Digital - Big Data Kursmaterialien',
  },

  {
    id: 2,
    title: 'Statista - Weltweit generiertes Datenvolumen',
    url: 'https://de.statista.com/statistik/daten/studie/267974/umfrage/prognose-zum-weltweit-generierten-datenvolumen/',
    type: 'Webseite' as const,
    description: 'Prognose zum weltweit generierten Datenvolumen von 2010 bis 2029',
  },
  {
    id: 3,
    title: 'Google Trends - Schweiz',
    url: 'https://trends.google.de/trends/',
    type: 'Webseite' as const,
    description: 'Aktuelle Suchtrends in der Schweiz',
  },
];
</script>

<style scoped>
.prose {
  line-height: 1.7;
}

.prose p {
  margin-bottom: 1rem;
}

.rotate-180 {
  transform: rotate(180deg);
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
