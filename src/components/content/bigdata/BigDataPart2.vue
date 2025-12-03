<template>
  <div class="bigdata-part2 max-w-5xl mx-auto">
    <!-- Header -->
    <header
      class="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 mb-8 shadow-lg"
    >
      <h1 class="text-3xl md:text-4xl font-bold mb-3">
        Teil 2: Wie werden Daten <i>im grossen Stil</i> gespeichert?
      </h1>
    </header>

    <!-- Lernziele -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">🎯 Lernziele Teil 2</h3>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li v-for="objective in learningObjectives" :key="objective">
          {{ objective }}
        </li>
      </ul>
    </div>

    <!-- Übersicht: Strukturierte vs. Unstrukturierte Daten -->
    <div
      class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-200"
    >
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">
        📊 Strukturierte vs. Unstrukturierte Daten
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- Strukturierte Daten -->
        <div class="bg-white rounded-lg p-5 shadow-md border-l-4 border-green-600">
          <h3 class="text-xl font-semibold mb-3 text-green-700 flex items-center">
            <span class="text-2xl mr-2">🗄️</span>
            Strukturierte Daten
          </h3>
          <p class="text-gray-700 mb-3 text-md">
            Organisiert in <strong>Tabellen mit Zeilen und Spalten</strong> – ideal für schnelle
            Abfragen und Analysen.
          </p>
          <div class="mb-3">
            <h4 class="font-semibold text-gray-800 mb-2">Beispiele:</h4>
            <ul class="list-disc list-inside space-y-1 text-md text-gray-700">
              <li>Kundendaten (Name, Adresse, Alter)</li>
              <li>Bestellungen in Online-Shops</li>
              <li>Schulnoten, Stundenplan</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded p-3 text-md text-gray-700">
            <strong>Speicherung:</strong> Relationale Datenbanken (z.B. MySQL, PostgreSQL), Data
            Warehouses
          </div>
        </div>

        <!-- Unstrukturierte Daten -->
        <div class="bg-white rounded-lg p-5 shadow-md border-l-4 border-orange-500">
          <h3 class="text-xl font-semibold mb-3 text-orange-700 flex items-center">
            <span class="text-2xl mr-2">📂</span>
            Unstrukturierte Daten
          </h3>
          <p class="text-gray-700 mb-3 text-md">
            Die <strong>Mehrheit aller neu generierten Daten</strong> (ca. 80-90%) sind
            unstrukturiert.
          </p>
          <div class="mb-3">
            <h4 class="font-semibold text-gray-800 mb-2">Beispiele:</h4>
            <ul class="list-disc list-inside space-y-1 text-md text-gray-700">
              <li>Bilder, Videos, Audiodateien</li>
              <li>E-Mails, Textdokumente</li>
              <li>Webseiten</li>
            </ul>
          </div>
          <div class="bg-orange-50 rounded p-3 text-md text-gray-700">
            <strong>Speicherung:</strong> Dateisysteme, Cloud-Speicher (z.B. Google Drive, Dropbox),
            Data Lakes
          </div>
        </div>
      </div>

      <div class="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <p class="text-blue-900 text-md">
          <strong>💡 Wichtig:</strong> Um unstrukturierte Daten analysieren zu können, müssen sie
          oft erst in eine strukturierte Form gebracht werden. Dieser Prozess nennt sich
          <strong>Datenaufbereitung</strong> oder <strong>ETL (Extract, Transform, Load)</strong>.
        </p>
      </div>
    </div>

    <!-- Excel/Spreadsheets Warnung -->
    <div class="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6 mb-8">
      <div class="flex items-start">
        <div class="text-3xl mr-4">⚠️</div>
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-red-800 mb-3">
            Warum Excel & Spreadsheets NICHT für Big Data geeignet sind
          </h3>
          <p class="text-gray-800 mb-4">
            Viele kennen Excel oder Google Sheets für Tabellen und Berechnungen. Aber für
            <strong>Big Data</strong> stossen diese Tools schnell an ihre Grenzen:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="bg-white rounded-lg p-4 border border-red-200">
              <h4 class="font-semibold text-red-700 mb-2">❌ Limitierungen</h4>
              <ul class="space-y-2 text-md text-gray-700">
                <li class="flex items-start">
                  <span class="mr-2 text-red-500">•</span>
                  <span
                    ><strong>Zeilen-Limit:</strong> Excel max. ~1 Million Zeilen (Big Data =
                    Milliarden!)</span
                  >
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-red-500">•</span>
                  <span
                    ><strong>Geschwindigkeit:</strong> Sehr langsam bei grossen Datenmengen</span
                  >
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-red-500">•</span>
                  <span><strong>Speicher:</strong> Komplette Datei muss in RAM geladen werden</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-red-500">•</span>
                  <span
                    ><strong>Keine Skalierung:</strong> Kann nicht auf mehrere Server verteilt
                    werden</span
                  >
                </li>
              </ul>
            </div>

            <div class="bg-white rounded-lg p-4 border border-red-200">
              <h4 class="font-semibold text-red-700 mb-2">🚫 Weitere Probleme</h4>
              <ul class="space-y-2 text-md text-gray-700">
                <li class="flex items-start">
                  <span class="mr-2 text-red-500">•</span>
                  <span
                    ><strong>Gleichzeitiger Zugriff:</strong> Mehrere Nutzer können nicht effizient
                    zusammenarbeiten</span
                  >
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-red-500">•</span>
                  <span><strong>Keine Echtzeitdaten:</strong> Manuelle Updates erforderlich</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-red-500">•</span>
                  <span><strong>Fehleranfällig:</strong> Formeln können leicht kaputt gehen</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-red-500">•</span>
                  <span
                    ><strong>Keine Sicherheit:</strong> Schwer zu kontrollieren, wer was ändern
                    darf</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-red-100 rounded-lg p-4">
            <p class="text-md text-red-900">
              <strong>📊 Vergleich:</strong> Excel kann ~1 Million Zeilen verarbeiten. Eine moderne
              Datenbank kann <strong>Milliarden von Zeilen</strong> in Sekunden durchsuchen! Für Big
              Data braucht man professionelle Datenbanken wie SQL, NoSQL oder Data Lakes.
            </p>
          </div>
        </div>
      </div>
    </div>

    <h4 class="text-lg font-bold mt-10 mb-6 text-gray-800">
      💡 Die wichtigsten Speichertechnologien im Überblick.
    </h4>

    <!-- Speichertechnologien Überblick -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">🗄️ Wo werden Daten gespeichert?</h2>

      <div class="space-y-4">
        <!-- Dateisystem -->
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div class="flex items-start">
            <div class="text-3xl mr-4">📁</div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                Lokales Dateisystem auf deinem Computer
              </h3>
              <p class="text-gray-700 text-md mb-2">
                Hierarchische Organisation in Ordnern und Unterordnern – wie auf deinem Laptop oder
                Smartphone. Ideal für unstrukturierte Daten.
              </p>
              <span class="inline-block bg-orange-100 text-orange-800 text-md px-2 py-1 rounded"
                >Unstrukturierte Daten</span
              >
            </div>
          </div>
        </div>

        <!-- Cloud-Speicher -->
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div class="flex items-start">
            <div class="text-3xl mr-4">☁️</div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Cloud-Speicher</h3>
              <p class="text-gray-700 text-md mb-2">
                Die meisten Menschen nutzen Cloud-Dienste von Apple (iCloud), Google (Drive) oder
                Microsoft (OneDrive) – oft ohne es zu wissen!
              </p>
              <span class="inline-block bg-blue-100 text-blue-800 text-md px-2 py-1 rounded"
                >Alltägliche Nutzung, Blob Storage</span
              >
            </div>
          </div>
        </div>

        <!-- Relationale Datenbanken (Fokus) -->
        <div class="border-4 border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div class="flex items-start">
            <div class="text-3xl mr-4">🎯</div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                Relationale Datenbanken (SQL)
                <span class="ml-2 bg-green-600 text-white text-md px-2 py-1 rounded"
                  >HEUTE IM FOKUS</span
                >
              </h3>
              <p class="text-gray-800 mb-3">
                <strong>Die wichtigste Technologie</strong> für strukturierte Daten! Daten werden in
                <strong>Tabellen</strong> gespeichert, die miteinander verknüpft sind.
              </p>

              <div class="bg-white rounded-lg p-4 mb-3 border border-green-200">
                <h4 class="font-semibold text-gray-800 mb-2">🔍 Wie funktioniert's?</h4>
                <ul class="space-y-2 text-md text-gray-700">
                  <li class="flex items-start">
                    <span class="mr-2">📋</span>
                    <span
                      ><strong>Tabellen:</strong> Jede Tabelle hat Spalten = Attribute (z.B. Name,
                      Alter, E-Mail) und Zeilen (einzelne Datensätze)</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2">🔗</span>
                    <span
                      ><strong>Beziehungen:</strong> Tabellen können miteinander verbunden werden
                      (z.B. Kunden ↔ Bestellungen)</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2">💬</span>
                    <span
                      ><strong>SQL:</strong> Mit der Sprache "SQL" können Daten abgefragt, gefiltert
                      und sortiert werden</span
                    >
                  </li>
                </ul>
              </div>

              <div class="bg-green-600 text-white rounded-lg p-3 text-md">
                <strong>Bereit für SQL?</strong> Gleich lernen Sie im
                <strong>SQL Island</strong> "Datenbank-Game", wie man mit SQL arbeitet!
              </div>
            </div>
          </div>
        </div>

        <!-- NoSQL Datenbanken -->
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div class="flex items-start">
            <div class="text-3xl mr-4">⚡</div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">NoSQL Datenbanken</h3>
              <p class="text-gray-700 text-md mb-3">
                Die <strong>flexible Alternative</strong> zu relationalen Datenbanken! NoSQL ("Not
                only SQL") verzichtet auf feste Tabellenstrukturen und ist ideal für
                <strong>sehr grosse, schnell wachsende Datenmengen</strong>.
              </p>

              <span class="inline-block bg-yellow-100 text-yellow-800 text-md px-2 py-1 rounded"
                >Flexibel & Skalierbar</span
              >
            </div>
          </div>
        </div>

        <!-- Data Warehouse -->
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div class="flex items-start">
            <div class="text-3xl mr-4">🏢</div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Data Warehouse</h3>
              <p class="text-gray-700 text-md mb-2">
                Hochoptimierter Speicher für <strong>bereinigte und strukturierte Daten</strong> aus
                vielen Quellen. Perfekt für Business Intelligence und Reporting.
              </p>
              <span class="inline-block bg-indigo-100 text-indigo-800 text-md px-2 py-1 rounded"
                >Business Analytics</span
              >
            </div>
          </div>
        </div>

        <!-- Data Lake -->
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div class="flex items-start">
            <div class="text-3xl mr-4">🌊</div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Data Lake</h3>
              <p class="text-gray-700 text-md mb-2">
                Ein riesiger Speicher für <strong>alle Arten von Rohdaten</strong> (strukturiert und
                unstrukturiert). Perfekt für Machine Learning und spätere Analysen ("Store now, use
                later").
              </p>
              <span class="inline-block bg-purple-100 text-purple-800 text-md px-2 py-1 rounded"
                >Big Data Analytics, Machine Learning & KI</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- H5P Interactive Video -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">
        🎬 Datenbanken Grundlagen - Interaktives Video
      </h2>
      <p class="text-gray-700 mb-4">
        Schauen Sie sich dieses Video an, um die Grundlagen von Datenbanken zu verstehen. Beantworte
        die Fragen während des Videos!
      </p>
      <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 540px">
        <iframe
          :src="h5pVideoUrl"
          title="SQL Grundlagen - Interaktives H5P Video"
          class="w-full h-full"
          frameborder="0"
          allow="autoplay; fullscreen; encrypted-media"
          tabindex="-1"
          loading="lazy"
        />
      </div>
    </div>

    <!-- YouTube Video -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">📺 SQL Erklärvideo</h2>
      <p class="text-gray-700 mb-4">
        Dieses Video erklärt für Beginners, wie SQL funktioniert (high-level). Überspringen Sie es,
        wenn Sie schon Erfahrung haben mit SQL.
      </p>
      <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 480px">
        <iframe
          :src="youtubeVideoUrl"
          title="SQL Erklärvideo"
          class="w-full h-full"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          tabindex="-1"
          loading="lazy"
        />
      </div>
    </div>

    <!-- SQL Island Game -->
    <div
      class="bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg p-8 mb-8 shadow-xl text-white"
    >
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold mb-3">🏝️ SQL Island - Lerne SQL spielerisch!</h2>
        <p class="text-green-100 text-lg">
          Begeben Sie sich auf ein Abenteuer und lernen Sie dabei die Grundlagen von SQL
        </p>
      </div>

      <div class="bg-white rounded-lg p-6 text-gray-800 mb-6">
        <h3 class="text-xl font-semibold mb-3 text-green-800">Was ist SQL Island?</h3>
        <p class="text-gray-700 mb-4">
          SQL Island ist ein <strong>interaktives Lernspiel</strong>, bei dem Sie auf einer
          geheimnisvollen Insel stranden. Um zu <strong>überleben</strong> und die Insel zu
          erkunden, müssen Sie <strong>SQL-Befehle</strong> verwenden, um mit den Insel-Bewohnern zu
          kommunizieren und Informationen aus der Datenbank abzufragen.
        </p>

        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p class="text-md text-gray-800">
            <strong>💡 Tipp:</strong> Nehmen Sie sich Zeit für jede Aufgabe und probieren Sie
            verschiedene SQL-Befehle aus. Das Spiel gibt Ihnen direktes Feedback und hilft Ihnen
            beim Lernen!
          </p>
        </div>
      </div>

      <div class="text-center">
        <a
          href="https://sql-island.informatik.uni-kl.de/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span class="text-2xl mr-3">🚀</span>
          SQL Island starten
          <span class="ml-2">→</span>
        </a>
      </div>
    </div>

    <!-- Mentimeter Umfrage -->
    <MentimeterSurvey :learning-objectives="learningObjectives" :mentimeter-url="mentimeterUrl" />

    <!-- Abschluss Lernziele -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">🎯 Lernziele Check</h3>
      <p class="text-gray-700 mb-4">Haben Sie alle Lernziele erreicht? Überprüfe selbst!</p>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li v-for="objective in learningObjectives" :key="objective">
          {{ objective }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MentimeterSurvey from '@/components/ui/MentimeterSurvey.vue';

const learningObjectives = [
  'Ich verstehe den Unterschied zwischen strukturierten und unstrukturierten Daten',
  'Ich kenne verschiedene Möglichkeiten, Big Data zu speichern',
  'Ich kann erklären, was relationale Datenbanken sind und wofür sie verwendet werden',
  'Ich verstehe die Grundprinzipien von SQL und Datenbank-Tabellen',
  'Ich kann einfache SQL-Befehle anwenden',
];

// Mentimeter URL (optional)
// Ersetze mit deiner Mentimeter-URL für Live-Voting
const mentimeterUrl = ref('https://ahaslides.com/EHXTN');

// H5P Interactive Video URL
const h5pVideoUrl = ref('https://h5p.zebis.digital/h5p/6682/embed'); // ERSETZEN: Deine H5P-Video-URL hier einfügen

// YouTube Video URL (Embed Format)
const youtubeVideoUrl = ref('https://www.youtube.com/embed/2goPVJOvJVY'); // ERSETZEN: Deine YouTube-Video-ID hier einfügen
</script>

<style scoped>
.prose {
  line-height: 1.7;
}
</style>
