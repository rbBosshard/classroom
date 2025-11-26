<template>
  <section class="mb-12">
    <div class="bg-purple-50 border-2 border-purple-400 rounded-lg p-6">
      <h2 class="text-3xl font-bold text-purple-900 mb-4">
        ✅ Die Lösung:
        <a
          href="https://de.wikipedia.org/wiki/Digitale_Signatur"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue-800 underline"
        >
          Digitale Signaturen
        </a>
      </h2>

      <div class="bg-white rounded-lg p-5 mb-6 shadow-md">
        <p class="text-lg text-purple-900 mb-3">
          Um das Authentifizierungsproblem zu lösen, brauchen wir einen Weg zu beweisen:
          <strong>"Diese Nachricht wurde wirklich von Alice erstellt!"</strong>
        </p>
        <p class="text-purple-800">
          Die Lösung: <strong>Digitale Signaturen</strong> – das digitale Äquivalent einer
          handschriftlichen Unterschrift, aber viel sicherer! Asymmetrische Schlüsselpaare machen es
          möglich!
        </p>
      </div>

      <!-- Wie funktioniert's? -->
      <div class="bg-white rounded-lg p-6 shadow-lg mb-6">
        <h3 class="text-2xl font-semibold text-purple-900 mb-4">
          ✍️ Wie funktioniert eine digitale Signatur?
        </h3>

        <div class="space-y-5">
          <!-- Schritt 1: Signieren (kompakt) -->
          <div
            class="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500 hover:shadow-md transition-shadow cursor-pointer"
            @click="step1Expanded = !step1Expanded"
          >
            <div class="flex items-start gap-3">
              <div class="text-2xl font-bold text-purple-700 min-w-[2rem]">1️⃣</div>
              <div class="flex-1">
                <h4 class="text-lg font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  Alice signiert
                  <span class="text-sm text-purple-600">{{ step1Expanded ? '▼' : '▶' }}</span>
                </h4>
                <p class="text-purple-800 mb-2">
                  Mit ihrem <strong>privaten Schlüssel</strong> erzeugt Alice die Signatur.
                </p>
                <div
                  class="bg-white rounded-lg p-4 mt-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div class="flex items-center gap-3 text-sm flex-wrap">
                    <span
                      class="font-mono bg-gray-100 px-3 py-2 rounded hover:bg-gray-200 transition-colors"
                      >📄 Nachricht</span
                    >
                    <span class="text-purple-600 font-bold">+</span>
                    <span
                      class="font-mono bg-purple-100 px-3 py-2 rounded hover:bg-purple-200 transition-colors"
                      >🔐 Private Key</span
                    >
                    <span class="text-purple-600 font-bold">→</span>
                    <span
                      class="font-mono bg-purple-200 px-3 py-2 rounded font-bold hover:bg-purple-300 transition-colors"
                      >✍️ Signatur</span
                    >
                  </div>
                </div>
                <div v-if="step1Expanded" class="mt-3 bg-purple-100 rounded-lg p-3 animate-fadeIn">
                  <p class="text-purple-800 text-sm">
                    💡 <strong>Technisch im Detail:</strong> Die Nachricht wird zuerst durch eine
                    Hash-Funktion (z.B. SHA-256) geschickt. Der Hash ist wie ein eindeutiger
                    "Fingerabdruck" der Nachricht. Dieser Hash wird dann mit dem privaten Schlüssel
                    verschlüsselt – das Ergebnis ist die Signatur!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Schritt 2: Übertragen (kompakt) -->
          <div
            class="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500 hover:shadow-md transition-shadow cursor-pointer"
            @click="step2Expanded = !step2Expanded"
          >
            <div class="flex items-start gap-3">
              <div class="text-2xl font-bold text-purple-700 min-w-[2rem]">2️⃣</div>
              <div class="flex-1">
                <h4 class="text-lg font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  Senden
                  <span class="text-sm text-purple-600">{{ step2Expanded ? '▼' : '▶' }}</span>
                </h4>
                <p class="text-purple-800">
                  Alice schickt <strong>Nachricht</strong> und <strong>Signatur</strong> an Bob.
                </p>
                <div
                  class="bg-white rounded-lg p-4 mt-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div class="flex items-center justify-center gap-4 text-sm flex-wrap">
                    <span class="font-semibold text-purple-900">👩‍💻 Alice</span>
                    <span class="text-2xl animate-pulse">→</span>
                    <div class="flex flex-col gap-1">
                      <span
                        class="font-mono bg-gray-100 px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors"
                        >📄 Nachricht</span
                      >
                      <span
                        class="font-mono bg-purple-200 px-2 py-1 rounded text-xs hover:bg-purple-300 transition-colors"
                        >✍️ Signatur</span
                      >
                    </div>
                    <span class="text-2xl animate-pulse">→</span>
                    <span class="font-semibold text-purple-900">🧑‍💻 Bob</span>
                  </div>
                </div>
                <div v-if="step2Expanded" class="mt-3 bg-purple-100 rounded-lg p-3 animate-fadeIn">
                  <p class="text-purple-800 text-sm">
                    🌐 <strong>Wichtig:</strong> Die Nachricht selbst ist NICHT verschlüsselt –
                    jeder kann sie lesen! Die Signatur beweist nur, dass sie von Alice kommt und
                    nicht verändert wurde. Für Vertraulichkeit bräuchte man zusätzlich
                    Verschlüsselung.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Schritt 3: Verifizieren (kompakt) -->
          <div
            class="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500 hover:shadow-md transition-shadow cursor-pointer"
            @click="step3Expanded = !step3Expanded"
          >
            <div class="flex items-start gap-3">
              <div class="text-2xl font-bold text-purple-700 min-w-[2rem]">3️⃣</div>
              <div class="flex-1">
                <h4 class="text-lg font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  Bob prüft
                  <span class="text-sm text-purple-600">{{ step3Expanded ? '▼' : '▶' }}</span>
                </h4>
                <p class="text-purple-800 mb-2">
                  Bob prüft die Signatur mit Alice’ <strong>öffentlichem Schlüssel</strong>.
                </p>
                <div
                  class="bg-white rounded-lg p-4 mt-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div class="flex items-center gap-3 text-sm flex-wrap">
                    <span
                      class="font-mono bg-purple-200 px-3 py-2 rounded hover:bg-purple-300 transition-colors"
                      >✍️ Signatur</span
                    >
                    <span class="text-purple-600 font-bold">+</span>
                    <span
                      class="font-mono bg-purple-100 px-3 py-2 rounded hover:bg-purple-200 transition-colors"
                      >🔓 Public Key</span
                    >
                    <span class="text-purple-600 font-bold">→</span>
                    <span
                      class="font-mono bg-green-100 px-3 py-2 rounded font-bold hover:bg-green-200 transition-colors"
                      >✅ Gültig / ❌ Ungültig</span
                    >
                  </div>
                </div>
                <div v-if="step3Expanded" class="mt-3 bg-purple-100 rounded-lg p-3 animate-fadeIn">
                  <p class="text-purple-800 text-sm">
                    🔍 <strong>So funktioniert's:</strong> Bob entschlüsselt die Signatur mit Alice'
                    öffentlichem Schlüssel und erhält den Hash. Dann berechnet er selbst den Hash
                    der Nachricht. Stimmen beide Hashes überein → ✅ gültig! Unterscheiden sie sich
                    → ❌ manipuliert oder falsche Absenderin!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Ergebnis -->
          <div
            class="bg-gradient-to-r from-purple-100 to-green-100 rounded-lg p-5 border-l-4 border-purple-600 shadow-md"
          >
            <div class="flex items-start gap-3">
              <div class="text-2xl min-w-[2rem]">✅</div>
              <div class="flex-1">
                <h4 class="text-lg font-semibold text-purple-900 mb-2">Ergebnis</h4>
                <p class="text-purple-800 mb-2">
                  Wenn die Signatur gültig ist und der öffentliche Schlüssel zum Verifizieren der
                  Signatur wirklich zu Alice gehört, weiss Bob:
                </p>
                <ul class="list-none space-y-2">
                  <li class="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <span class="text-green-600 font-bold">✓</span>
                    <strong class="text-purple-900">Authentizität:</strong>
                    <span class="text-purple-800">
                      Die Nachricht stammt wirklich von Alice (nur sie hat den privaten Schlüssel)
                    </span>
                  </li>
                  <li class="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <span class="text-green-600 font-bold">✓</span>
                    <strong class="text-purple-900">Integrität:</strong>
                    <span class="text-purple-800">
                      Die Nachricht wurde nicht verändert (sonst wäre die Signatur ungültig)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Was könnte schiefgehen? -->
      <div class="bg-red-50 border-2 border-red-300 rounded-lg p-5 mb-6">
        <h3 class="text-xl font-semibold text-red-900 mb-3">🤔 Was könnte schiefgehen?</h3>

        <div class="space-y-3">
          <details class="bg-white rounded-lg p-4">
            <summary class="cursor-pointer text-red-800 font-semibold hover:text-red-600">
              Könnte Mallory eine gefälschte Signatur erstellen?
            </summary>
            <p class="mt-3 text-red-700 text-sm">
              <strong>Nein!</strong> Mallory bräuchte dazu Alice' privaten Schlüssel. Ohne den kann
              Mallory zwar eine Signatur erstellen, aber sie würde nicht als "von Alice kommend"
              verifiziert werden, wenn Bob sie mit Alice' öffentlichem Schlüssel prüft.
            </p>
          </details>

          <details class="bg-white rounded-lg p-4">
            <summary class="cursor-pointer text-red-800 font-semibold hover:text-red-600">
              Könnte Mallory die Nachricht ändern?
            </summary>
            <p class="mt-3 text-red-700 text-sm">
              <strong>Ja, aber...</strong> Mallory könnte die Nachricht abfangen und ändern. ABER:
              Die Signatur würde dann nicht mehr passen! Bob würde sofort merken, dass die Nachricht
              manipuliert wurde (ungültige Verifizierung mit dem öffentlichen Schlüssel). Die
              Signatur funktioniert nur mit der originalen Nachricht.
            </p>
          </details>
        </div>
      </div>

      <!-- Verschlüsselung vs. Signatur -->

      <!-- Aufgabe: Lückentext Verschlüsselung vs. Signatur -->
      <div class="bg-blue-50 rounded-lg p-6 shadow-lg mb-6">
        <h3 class="text-xl font-semibold text-blue-900 mb-4">
          📝 Aufgabe: Asymmetrische Verschlüsselung vs. digitale Signatur
        </h3>

        <p class="text-blue-800 mb-4">
          Beide Konzepte nutzen asymmetrische Schlüsselpaare, aber auf
          <strong>umgekehrte Weise</strong>.<br />
          Wähle die passenden Begriffe aus den Optionen aus und vervollständige die Lücken:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <!-- Verschlüsselung Lückentext -->
          <div class="bg-white rounded-lg p-4 border-2 border-green-300">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-2xl">🔐</span>
              <h4 class="font-semibold text-green-900">Verschlüsselung</h4>
            </div>
            <div class="space-y-2 text-sm text-green-800">
              <p>
                <strong>Verschlüsseln:</strong> mit
                <select
                  v-model="answers.encryptKey"
                  class="bg-green-100 rounded px-2 py-1 font-mono border border-green-300"
                  :class="{
                    'border-red-500 border-2': showResult && answers.encryptKey !== 'Public Key',
                  }"
                >
                  <option value="">--Wähle--</option>
                  <option>Public Key</option>
                  <option>Private Key</option>
                </select>
                (von
                <select
                  v-model="answers.encryptPerson"
                  class="bg-green-100 rounded px-2 py-1 border border-green-300"
                  :class="{
                    'border-red-500 border-2': showResult && answers.encryptPerson !== 'Bob',
                  }"
                >
                  <option value="">--Wähle--</option>
                  <option>Bob</option>
                  <option>Alice</option>
                </select>
                )
              </p>
              <p>
                <strong>Entschlüsseln:</strong> mit
                <select
                  v-model="answers.decryptKey"
                  class="bg-green-100 rounded px-2 py-1 font-mono border border-green-300"
                  :class="{
                    'border-red-500 border-2': showResult && answers.decryptKey !== 'Private Key',
                  }"
                >
                  <option value="">--Wähle--</option>
                  <option>Public Key</option>
                  <option>Private Key</option>
                </select>
                (von
                <select
                  v-model="answers.decryptPerson"
                  class="bg-green-100 rounded px-2 py-1 border border-green-300"
                  :class="{
                    'border-red-500 border-2': showResult && answers.decryptPerson !== 'Bob',
                  }"
                >
                  <option value="">--Wähle--</option>
                  <option>Bob</option>
                  <option>Alice</option>
                </select>
                )
              </p>
              <p class="italic text-green-700 mt-2">
                → Ziel:
                <select
                  v-model="answers.encryptGoal"
                  class="bg-green-100 rounded px-2 py-1 border border-green-300"
                  :class="{
                    'border-red-500 border-2':
                      showResult && answers.encryptGoal !== 'Vertraulichkeit',
                  }"
                >
                  <option value="">--Wähle--</option>
                  <option>Vertraulichkeit</option>
                  <option>Authentizität</option>
                </select>
                (nur der Empfänger Bob kann lesen)
              </p>
            </div>
          </div>

          <!-- Signatur Lückentext -->
          <div class="bg-white rounded-lg p-4 border-2 border-purple-300">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-2xl">✍️</span>
              <h4 class="font-semibold text-purple-900">Digitale Signatur</h4>
            </div>
            <div class="space-y-2 text-sm text-purple-800">
              <p>
                <strong>Signieren:</strong> mit
                <select
                  v-model="answers.signKey"
                  class="bg-purple-100 rounded px-2 py-1 font-mono border border-purple-300"
                  :class="{
                    'border-red-500 border-2': showResult && answers.signKey !== 'Private Key',
                  }"
                >
                  <option value="">--Wähle--</option>
                  <option>Private Key</option>
                  <option>Public Key</option>
                </select>
                (von
                <select
                  v-model="answers.signPerson"
                  class="bg-purple-100 rounded px-2 py-1 border border-purple-300"
                  :class="{
                    'border-red-500 border-2': showResult && answers.signPerson !== 'Alice',
                  }"
                >
                  <option value="">--Wähle--</option>
                  <option>Alice</option>
                  <option>Bob</option>
                </select>
                )
              </p>
              <p>
                <strong>Verifizieren:</strong> mit
                <select
                  v-model="answers.verifyKey"
                  class="bg-purple-100 rounded px-2 py-1 font-mono border border-purple-300"
                  :class="{
                    'border-red-500 border-2': showResult && answers.verifyKey !== 'Public Key',
                  }"
                >
                  <option value="">--Wähle--</option>
                  <option>Public Key</option>
                  <option>Private Key</option>
                </select>
                (von
                <select
                  v-model="answers.verifyPerson"
                  class="bg-purple-100 rounded px-2 py-1 border border-purple-300"
                  :class="{
                    'border-red-500 border-2': showResult && answers.verifyPerson !== 'Alice',
                  }"
                >
                  <option value="">--Wähle--</option>
                  <option>Alice</option>
                  <option>Bob</option>
                </select>
                )
              </p>
              <p class="italic text-purple-700 mt-2">
                → Ziel:
                <select
                  v-model="answers.signGoal"
                  class="bg-purple-100 rounded px-2 py-1 border border-purple-300"
                  :class="{
                    'border-red-500 border-2': showResult && answers.signGoal !== 'Authentizität',
                  }"
                >
                  <option value="">--Wähle--</option>
                  <option>Authentizität</option>
                  <option>Vertraulichkeit</option>
                </select>
                (beweist: Nachricht von Alice)
              </p>
            </div>
          </div>
        </div>

        <!-- Buttons und Feedback -->
        <div class="flex flex-wrap gap-3 mb-4">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            @click="checkAnswers"
          >
            ✓ Überprüfen
          </button>
          <button
            class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            @click="showSolution"
          >
            💡 Lösung anzeigen
          </button>
          <button
            class="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            @click="resetAnswers"
          >
            ↻ Zurücksetzen
          </button>
        </div>

        <!-- Feedback -->
        <div v-if="showResult" class="mt-4">
          <div
            v-if="isCorrect"
            class="bg-green-100 border-2 border-green-500 rounded-lg p-4 flex items-start gap-3"
          >
            <span class="text-2xl">✅</span>
            <div>
              <p class="font-bold text-green-900 mb-1">Perfekt! Alle Antworten sind richtig!</p>
              <p class="text-green-800 text-sm">
                Du hast den Unterschied zwischen Verschlüsselung und digitaler Signatur verstanden.
                Bei der Verschlüsselung nutzt man den
                <strong>Public Key des Empfängers</strong> (Bob), bei der Signatur den
                <strong>Private Key des Absenders</strong> (Alice).
              </p>

              <div>
                <p class="mt-6 text-green-900 font-semibold mb-1">✅ Kombination:</p>
                <p class="text-green-800 text-sm">
                  In der Praxis verwendet man oft <strong>beides</strong>: Verschlüsselung für
                  Vertraulichkeit + Digitale Signatur für Authentizität. So erreicht man maximale
                  Sicherheit!
                </p>
              </div>
            </div>
          </div>
          <div
            v-else
            class="bg-red-100 border-2 border-red-500 rounded-lg p-4 flex items-start gap-3"
          >
            <span class="text-2xl">❌</span>
            <div>
              <p class="font-bold text-red-900 mb-1">
                Noch nicht ganz richtig. ({{ correctCount }}/8 korrekt)
              </p>
              <p class="text-red-800 text-sm">
                Falsche Antworten sind rot markiert. Tipp: Überlege, wer was
                verschlüsseln/entschlüsseln bzw. signieren/verifizieren kann. Nur der Besitzer des
                Private Keys kann damit arbeiten!
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Überleitung zu PKI -->
      <div
        class="bg-gradient-to-r from-purple-100 to-green-100 rounded-lg p-5 border-2 border-purple-300"
      >
        <p class="text-lg text-purple-900 font-semibold mb-2">🎯 Zwischenfazit</p>
        <p class="text-purple-800 mb-3">
          Digitale Signaturen lösen das <strong>Authentifizierungsproblem</strong> – wir können
          jetzt beweisen, wer eine Nachricht erstellt hat. Aber es bleibt noch eine Frage:
        </p>
        <div class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
          <p class="text-yellow-900 font-semibold mb-1">❓ Die letzte Herausforderung:</p>
          <p class="text-yellow-800">
            <strong
              >Wie kann sich Bob sicher sein, dass ein öffentlicher Schlüssel wirklich zu Alice
              gehört, den Bob zum Verifizieren von Alices Signatur verwendet?</strong
            >
          </p>
        </div>
        <p class="text-purple-800 mt-3">
          Die Antwort darauf liefert die <strong>Public Key Infrastructure (PKI)</strong> mit
          Zertifikaten und Certificate Authorities... (Trent lässt grüssen) 👇
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue';

interface Answers {
  encryptKey: string;
  encryptPerson: string;
  decryptKey: string;
  decryptPerson: string;
  encryptGoal: string;
  signKey: string;
  signPerson: string;
  verifyKey: string;
  verifyPerson: string;
  signGoal: string;
}

// Expandable steps state
const step1Expanded = ref(false);
const step2Expanded = ref(false);
const step3Expanded = ref(false);

// Antworten der Schüler
const answers: Ref<Answers> = ref({
  encryptKey: '',
  encryptPerson: '',
  decryptKey: '',
  decryptPerson: '',
  encryptGoal: '',
  signKey: '',
  signPerson: '',
  verifyKey: '',
  verifyPerson: '',
  signGoal: '',
});

// Richtige Antworten
const correctAnswers: Answers = {
  encryptKey: 'Public Key',
  encryptPerson: 'Bob',
  decryptKey: 'Private Key',
  decryptPerson: 'Bob',
  encryptGoal: 'Vertraulichkeit',
  signKey: 'Private Key',
  signPerson: 'Alice',
  verifyKey: 'Public Key',
  verifyPerson: 'Alice',
  signGoal: 'Authentizität',
};

const showResult = ref(false);

// Prüfe, ob alle Antworten korrekt sind
const isCorrect = computed(() => {
  return Object.keys(correctAnswers).every(
    key => answers.value[key as keyof Answers] === correctAnswers[key as keyof Answers]
  );
});

// Zähle korrekte Antworten
const correctCount = computed(() => {
  return Object.keys(correctAnswers).filter(
    key => answers.value[key as keyof Answers] === correctAnswers[key as keyof Answers]
  ).length;
});

// Überprüfe Antworten
const checkAnswers = () => {
  showResult.value = true;
};

// Zeige Lösung
const showSolution = () => {
  answers.value = { ...correctAnswers };
  showResult.value = true;
};

// Setze alles zurück
const resetAnswers = () => {
  answers.value = {
    encryptKey: '',
    encryptPerson: '',
    decryptKey: '',
    decryptPerson: '',
    encryptGoal: '',
    signKey: '',
    signPerson: '',
    verifyKey: '',
    verifyPerson: '',
    signGoal: '',
  };
  showResult.value = false;
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>
