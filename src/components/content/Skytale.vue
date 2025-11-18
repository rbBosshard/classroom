<template>
  <div class="crypto-card p-4 sm:p-6 md:p-8">
    <!-- Header -->
    <div class="mb-6 sm:mb-8">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
        📜 Die Skytale – Das wohl älteste Verschlüsselungsverfahren der Welt
      </h2>
      <div class="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4 sm:mb-6 rounded-r">
        <p class="text-gray-700 mb-2">
          Die <strong>Skytale</strong> (griechisch: σκυτάλη, <em>skytálē</em> = «Stab») ist ein <strong>Transpositionsverfahren</strong>, das bereits vor über <strong>2500 Jahren</strong> von den Spartanern im alten Griechenland verwendet wurde, um geheime militärische Botschaften zu übermitteln.
        </p>
        <p class="text-gray-600 text-sm mt-2">
          <strong>Prinzip:</strong> Die Buchstaben werden nicht ersetzt, sondern nur in ihrer Reihenfolge vertauscht (transponiert).
        </p>
      </div>
    </div>

    <!-- Historische Geschichte -->
    <div class="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-300">
      <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
        ⚔️ So verschlüsselt ein Spartaner seine Botschaft
      </h3>
      <div class="bg-white p-4 rounded-lg mb-4 border border-amber-200">
        <p class="text-gray-700 italic mb-3">
          «Ich bin ein Bote aus Sparta. Wenn unser Heer im Krieg ist, müssen wir manchmal geheime Nachrichten an weit entfernte Truppen schicken: Befehle, Warnungen, Anweisungen.»
        </p>
      </div>
      
      <div class="space-y-3">
        <div class="flex gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
          <p class="text-gray-700 pt-1">Ich nehme einen <strong>Holzstab (Skytale)</strong> mit einem bestimmten Durchmesser.</p>
        </div>
        <div class="flex gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
          <p class="text-gray-700 pt-1">Danach wickle ich <strong>spiralförmig einen langen Lederstreifen</strong> um den Holzstab.</p>
        </div>
        <div class="flex gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
          <p class="text-gray-700 pt-1">Auf diesen gewickelten Streifen schreibe ich <strong>längs meine Nachricht</strong>, Zeile für Zeile entlang des Stabes, zum Beispiel: <code class="bg-amber-100 px-2 py-1 rounded font-bold">THIS IS SPARTA</code></p>
        </div>

        <!-- Bild: Skytale Sparta -->
        <div class="flex justify-center my-4">
          <img 
            src="/images/skytale_sparta.png" 
            alt="Skytale mit Nachricht THIS IS SPARTA" 
            class="max-w-full h-auto rounded-lg shadow-md border-2 border-amber-200"
            style="max-height: 200px;"
          />
        </div>

        <div class="flex gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
          <p class="text-gray-700 pt-1">Wenn ich fertig bin, <strong>wickle ich den Lederstreifen wieder ab</strong>. Jetzt stehen die Buchstaben kreuz und quer, völlig unlesbar oder!?</p>
        </div>

        <!-- Bild: Skytale Sparta -->
        <div class="flex justify-center my-4">
          <img 
            src="/images/this_is_sparta_geheimtext.png" 
            alt="Skytale Geiheimtext" 
            class="max-w-full h-auto rounded-lg shadow-md border-2 border-amber-200"
            style="max-height: 90px;"
          />
        </div>

        <div class="flex gap-3">
          <div class="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
          <p class="text-gray-700 pt-1">Nur jemand, der einen <strong>Stab mit dem gleichen Durchmesser</strong> hat, kann den Streifen richtig aufwickeln und damit die wahre Nachricht lesen.</p>
        </div>
      </div>

      <div class="mt-4 bg-amber-100 p-4 rounded-lg border border-amber-300">
        <p class="text-sm font-medium text-amber-900">
          ❓ <strong>Check:</strong> Was ist bei Skytale der geheime Schlüssel?
        </p>
        <details class="mt-2">
          <summary class="cursor-pointer text-sm text-amber-800 hover:text-amber-900 font-medium">Lösung anzeigen</summary>
          <p class="mt-2 text-amber-900 font-bold">Der Durchmesser des Stabes!</p>
        </details>
      </div>
    </div>

    <!-- Interactive Skytale -->
    <div class="mb-8">
      <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
        🎯 Interaktive Skytale
      </h3>
      
      <div class="flex flex-col gap-6">
        <!-- Spaltenanzahl Einstellung -->
        <div class="bg-white p-4 rounded-lg border-2 border-gray-200">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Anzahl Spalten (Durchmesser des Stabes):
          </label>
          <div class="flex items-center gap-4">
            <input
              type="range"
              v-model.number="columns"
              min="2"
              max="10"
              class="flex-1 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
            <span class="text-2xl font-bold text-purple-600 w-12 text-center">
              {{ columns }}
            </span>
          </div>
        </div>

        <!-- Input Text -->
        <div class="bg-white p-4 rounded-lg border-2 border-gray-200">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            📝 Klartext (wird ohne Leerzeichen verschlüsselt):
          </label>
          <textarea
            v-model="plaintext"
            placeholder="Gib hier deinen Text ein..."
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            rows="3"
          ></textarea>
          <p class="text-sm text-gray-500 mt-1">
            Länge: {{ plaintextClean.length }} Zeichen
          </p>
        </div>

        <!-- Visualization Grid -->
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border-2 border-purple-200">
          <h4 class="text-md font-semibold text-gray-700 mb-3">
            🔄 Transpositions-Gitter (Text wird spaltenweise um den Stab gewickelt)
          </h4>
          
          <!-- Grid -->
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full">
              <div 
                class="grid gap-1 mb-4"
                :style="{ 
                  gridTemplateColumns: `repeat(${columns}, minmax(40px, 1fr))`,
                  maxWidth: `${columns * 60}px`
                }"
              >
                <!-- Column Headers -->
                <div
                  v-for="col in columns"
                  :key="'header-' + col"
                  class="text-center font-bold text-purple-600 text-sm p-2"
                >
                  Spalte {{ col }}
                </div>
                
                <!-- Grid Cells -->
                <div
                  v-for="(char, index) in gridCells"
                  :key="'cell-' + index"
                  class="aspect-square flex items-center justify-center text-lg font-mono font-bold rounded transition-all duration-300"
                  :class="[
                    char ? 'bg-white border-2 border-purple-400 text-purple-800' : 'bg-gray-100 border border-gray-300 text-gray-400',
                    highlightedCell === index ? 'ring-4 ring-yellow-400 scale-110' : ''
                  ]"
                >
                  {{ char || '·' }}
                </div>
              </div>
            </div>
          </div>

          <!-- Leserichtung Erklärung -->
          <div class="bg-white p-3 rounded-lg border border-purple-200 mb-4">
            <p class="text-sm text-gray-700">
              <strong>Verschlüsselung:</strong> Lies die Buchstaben <span class="text-purple-600 font-bold">spaltenweise von oben nach unten</span>, Spalte für Spalte.
            </p>
            <p class="text-sm text-gray-600 mt-1">
              <strong>Entschlüsselung:</strong> Schreibe die Buchstaben wieder spaltenweise in das Gitter und lies dann <span class="text-purple-600 font-bold">zeilenweise</span>.
            </p>
          </div>

          <!-- Step-by-Step Button -->
          <button
            @click="animateEncryption"
            :disabled="isAnimating || plaintextClean.length === 0"
            class="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            {{ isAnimating ? '⏳ Animation läuft...' : '▶️ Verschlüsselung animieren' }}
          </button>
        </div>

        <!-- Output Text -->
        <div class="bg-white p-4 rounded-lg border-2 border-green-200">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            🔐 Geheimtext (verschlüsselt):
          </label>
          <div class="bg-green-50 p-3 rounded-lg font-mono text-lg break-all">
            {{ ciphertext || '...' }}
          </div>
          <button
            @click="copyCiphertext"
            :disabled="!ciphertext"
            class="mt-2 text-sm text-purple-600 hover:text-purple-700 font-medium disabled:text-gray-400"
          >
            📋 Kopieren
          </button>
        </div>
      </div>
    </div>

    <!-- Entschlüsselung Section -->
    <div class="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200">
      <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
        🔓 Entschlüsselung
      </h3>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Geheimtext eingeben:
          </label>
          <textarea
            v-model="decryptInput"
            placeholder="Gib den Geheimtext ein..."
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows="3"
          ></textarea>
          <p class="text-sm text-gray-500 mt-1">
            Länge: {{ decryptInput.length }} Zeichen
          </p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Anzahl Spalten (muss bekannt sein!):
          </label>
          <div class="flex items-center gap-4">
            <input
              type="range"
              v-model.number="decryptColumns"
              min="2"
              max="10"
              class="flex-1 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <span class="text-2xl font-bold text-blue-600 w-12 text-center">
              {{ decryptColumns }}
            </span>
          </div>
        </div>

        <div class="bg-white p-4 rounded-lg border-2 border-blue-200">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            📝 Entschlüsselter Text:
          </label>
          <div class="bg-blue-50 p-3 rounded-lg font-mono text-lg break-all">
            {{ decryptedText || '...' }}
          </div>
        </div>
      </div>
    </div>

    <!-- Erklärungen und Übungen -->
    <div class="space-y-6">
      <!-- Erklärung -->
      <div class="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
        <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
          🧮 Wie funktioniert's?
        </h3>
        <div class="space-y-3 text-gray-700">
          <p>
            <strong>Verschlüsselung:</strong>
          </p>
          <ol class="list-decimal list-inside space-y-2 ml-4">
            <li>Text wird zeilenweise in ein Gitter mit <code class="bg-white px-2 py-1 rounded">n</code> Spalten geschrieben</li>
            <li>Geheimtext entsteht durch spaltenweises Auslesen (von oben nach unten)</li>
          </ol>
          
          <p class="mt-4">
            <strong>Beispiel mit 4 Spalten:</strong>
          </p>
          <div class="bg-white p-4 rounded font-mono text-sm">
            <p>Klartext: DIESISTEINGEHEIMNIS</p>
            <p class="mt-2">Gitter:</p>
            <pre class="mt-1">D I E S
I S T E
I N G E
H E I M
N I S</pre>
            <p class="mt-2">Geheimtext (spaltenweise): <span class="text-purple-600 font-bold">DIIHNISNEIETGISSEMES</span></p>
          </div>

          <p class="mt-4">
            <strong>Entschlüsselung:</strong>
          </p>
          <ol class="list-decimal list-inside space-y-2 ml-4">
            <li>Berechne Anzahl Zeilen: <code class="bg-white px-2 py-1 rounded">Zeilen = ⌈Textlänge / Spalten⌉</code></li>
            <li>Schreibe Geheimtext spaltenweise ins Gitter</li>
            <li>Lies zeilenweise aus</li>
          </ol>
        </div>
      </div>

      <!-- Sicherheit -->
      <div class="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
        <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
          🛡️ Wie sicher ist die Skytale?
        </h3>
        <div class="space-y-3 text-gray-700">
          <p>
            <strong>Nicht sehr sicher!</strong> Die Skytale hat folgende Schwächen:
          </p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li><strong>Kleiner Schlüsselraum:</strong> Nur die Anzahl der Spalten ist geheim (meist 2-10)</li>
            <li><strong>Brute-Force:</strong> Alle Möglichkeiten können schnell ausprobiert werden</li>
            <li><strong>Statistik:</strong> Buchstabenhäufigkeit bleibt erhalten</li>
          </ul>
          <p class="mt-3 text-amber-800 font-medium">
            ⚠️ Die Skytale war für ihre Zeit (ca. 500 v. Chr.) eine clevere Lösung, ist aber heute nur noch von historischem Interesse.
          </p>
        </div>
      </div>

      <!-- Toblerone-Aufgabe -->
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border-2 border-yellow-300">
        <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          🍫 Toblerone-Aufgabe
        </h3>
        <div class="bg-white p-4 rounded-lg mb-4 border border-yellow-200">
          <p class="text-gray-700 mb-3">
            <strong>Aufgabe:</strong> Wickle einen Lederstreifen gedanklich um eine <strong>Toblerone</strong> anstatt um einen Holzstab.
          </p>
          <p class="text-gray-700 mb-2">
            Übermittle folgende Nachricht: <code class="bg-yellow-100 px-2 py-1 rounded font-bold text-lg">DIE PERSER KOMMEN</code>
          </p>
          <p class="text-sm text-gray-600">
            <em>Hinweis: Entferne dabei wie im Beispiel auch zuerst die Leerzeichen. Benutze das Raster, um das Aufwickeln des Lederbandes um die Toblerone zu simulieren.</em>
          </p>
        </div>

        <!-- Interaktive Toblerone-Übung -->
        <div class="bg-white p-4 rounded-lg border-2 border-yellow-300">
          <div class="mb-4 bg-blue-50 p-3 rounded-lg border border-blue-200 flex items-center gap-4">
            <div class="flex-shrink-0">
              <!-- Toblerone Bild -->
              <img 
                src="/images/toblerone.jpg" 
                alt="Toblerone" 
                class="w-20 h-20 object-contain rounded"
              />
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-blue-900">
                ℹ️ Eine Toblerone hat <strong>3 Seiten</strong> (dreieckige Form). Fülle das 3×5 Raster aus, indem du die Nachricht <strong>zeilenweise</strong> einträgst!
              </p>
            </div>
          </div>

          <!-- Eingabefeld für Nachricht -->
          <div class="mb-4">
            <p class="text-sm font-medium text-gray-700 mb-2">
              Nachricht ohne Leerzeichen: <code class="bg-yellow-100 px-2 py-1 rounded">DIEPERSERKOMMEN</code>
            </p>
          </div>

          <!-- 3×5 Toblerone Grid - Editierbar -->
          <div class="overflow-x-auto mb-4">
            <div 
              class="grid gap-2 mb-3 mx-auto"
              style="grid-template-columns: repeat(3, minmax(60px, 70px)); max-width: 240px;"
            >
              <input
                v-for="(_cell, index) in tobleroneUserInput"
                :key="'input-' + index"
                v-model="tobleroneUserInput[index]"
                @input="validateTobleroneGrid"
                type="text"
                maxlength="1"
                class="aspect-square w-full h-16 flex items-center justify-center text-2xl font-mono font-bold rounded border-2 text-center uppercase transition-all duration-300"
                :class="[
                  tobleroneValidation[index] === null ? 'bg-white border-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200' :
                  tobleroneValidation[index] === true ? 'bg-green-100 border-green-500 text-green-800' :
                  'bg-red-50 border-red-400 text-red-800'
                ]"
                placeholder=""
              />
            </div>
          </div>

          <!-- Feedback -->
          <div v-if="tobleroneIsComplete" class="mb-4">
            <div v-if="tobleroneIsCorrect" class="bg-green-100 border-2 border-green-500 p-4 rounded-lg">
              <p class="text-green-800 font-bold text-lg flex items-center gap-2">
                <span class="text-2xl">✅</span>
                Sehr gut! Du hast das Skytale-Spalten-Transpositionsgitter richtig ausgefüllt!
              </p>
            </div>
            <div v-else class="bg-red-100 border-2 border-red-400 p-4 rounded-lg">
              <p class="text-red-800 font-medium flex items-center gap-2">
                <span class="text-2xl">❌</span>
                Noch nicht ganz richtig. Überprüfe deine Eingaben!
              </p>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex gap-3 mb-4">
            <button
              @click="checkTobleroneGrid"
              class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
            >
              🔍 Überprüfen
            </button>
            <button
              @click="resetTobleroneGrid"
              class="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg transition-colors"
            >
              ↻ Zurücksetzen
            </button>
          </div>

          <!-- Verschlüsselter Text (nur sichtbar wenn korrekt) -->
          <div v-if="tobleroneIsCorrect" class="bg-green-50 p-4 rounded-lg border-2 border-green-300">
            <p class="text-sm font-medium text-gray-700 mb-2">
              🔐 Geheimtext (spaltenweise gelesen):
            </p>
            <div class="font-mono text-lg font-bold text-green-900 break-all">
              {{ tobleroneCorrectCiphertext }}
            </div>
            <p class="text-xs text-gray-600 mt-2">
              So würde die Nachricht auf dem abgewickelten Lederstreifen aussehen!
            </p>
          </div>

          <!-- Hilfe -->
          <details class="mt-4">
            <summary class="cursor-pointer text-sm text-yellow-800 hover:text-yellow-900 font-medium">💡 Hilfe anzeigen</summary>
            <div class="mt-3 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
              <p class="text-sm text-gray-700 mb-2"><strong>Tipp:</strong></p>
              <ul class="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Schreibe die Nachricht <strong>DIEPERSERKOMMEN</strong> Buchstabe für Buchstabe</li>
                <li>Beginne <strong>links oben</strong> und gehe <strong>zeilenweise</strong> vor</li>
              </ul>
            </div>
          </details>
        </div>

        <!-- Denkfrage -->
        <div class="mt-4 bg-orange-100 p-4 rounded-lg border border-orange-300">
          <p class="text-sm font-medium text-orange-900 mb-2">
            🤔 <strong>Denkfrage:</strong> Wie könnte ein Feind den Geheimtext knacken (ohne den Schlüssel zu kennen)?
          </p>
          <details class="mt-2">
            <summary class="cursor-pointer text-sm text-orange-800 hover:text-orange-900 font-medium">Antwort anzeigen</summary>
            <div class="mt-2 text-sm text-orange-900 space-y-2">
              <p><strong>Brute-Force-Angriff:</strong></p>
              <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Es gibt nur wenige mögliche Spaltenanzahlen (z.B. 2-10)</li>
                <li>Der Feind probiert einfach alle Möglichkeiten durch</li>
                <li>Wenn ein Text sinnvoll lesbar wird, hat er den richtigen Schlüssel gefunden</li>
                <li>Das dauert nur wenige Minuten!</li>
              </ul>
              <p class="mt-2 font-medium">➜ Deshalb ist die Skytale gegen moderne Angriffe nicht sicher!</p>
            </div>
          </details>
        </div>
      </div>

      <!-- Übungen -->
      <div class="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
        <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
          📚 Übungen (entferne jeweils die Leerzeichen)
        </h3>
        <div class="space-y-4">
          <!-- Übung 1 -->
          <div class="bg-white p-4 rounded-lg border-2 transition-all duration-300" :class="exercise1Status === 'correct' ? 'border-green-400' : 'border-gray-200'">
            <p class="font-medium text-gray-800 mb-3">1. Verschlüssle "HALLOWELT" mit 3 Spalten</p>
            <div class="flex flex-wrap gap-3 items-end">
              <div class="flex-1 min-w-[200px]">
                <label class="block text-sm text-gray-600 mb-1">Deine Antwort:</label>
                <input
                  v-model="exercise1Answer"
                  @input="checkExercise1"
                  type="text"
                  placeholder="Geheimtext eingeben..."
                  class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase font-mono"
                  :class="exercise1Status === 'correct' ? 'border-green-500 bg-green-50' : exercise1Status === 'incorrect' ? 'border-red-400 bg-red-50' : 'border-gray-300'"
                />
              </div>
              <button
                @click="checkExercise1"
                class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors font-medium"
              >
                Prüfen
              </button>
            </div>
            
            <!-- Feedback -->
            <div v-if="exercise1Status === 'correct'" class="mt-3 p-3 bg-green-100 border border-green-400 rounded-lg flex items-center gap-2">
              <span class="text-xl">✅</span>
              <span class="text-green-800 font-medium">Richtig! Der Geheimtext ist "HLEAOLLWT"</span>
            </div>
            <div v-else-if="exercise1Status === 'incorrect'" class="mt-3 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
              <span class="text-xl">❌</span>
              <span class="text-red-800 font-medium">Noch nicht ganz. Tipp: Schreibe "HALLOWELT" in 3 Spalten und lies spaltenweise!</span>
            </div>
            
            <!-- Hilfe -->
            <details class="mt-3 text-sm text-gray-600">
              <summary class="cursor-pointer hover:text-indigo-600 font-medium">💡 Hilfe anzeigen</summary>
              <div class="mt-2 p-3 bg-indigo-50 rounded">
                <pre class="font-mono text-xs">H A L
L O W
E L T</pre>
                <p class="mt-2 text-xs">Lies spaltenweise: HLE (Spalte 1), AOL (Spalte 2), LWT (Spalte 3)</p>
              </div>
            </details>
          </div>

          <!-- Übung 2 -->
          <div class="bg-white p-4 rounded-lg border-2 transition-all duration-300" :class="exercise2Status === 'correct' ? 'border-green-400' : 'border-gray-200'">
            <p class="font-medium text-gray-800 mb-3">2. Entschlüssle "WASASTESENTRLNNGDEKIU" mit 4 Spalten</p>
            <div class="flex flex-wrap gap-3 items-end">
              <div class="flex-1 min-w-[200px]">
                <label class="block text-sm text-gray-600 mb-1">Deine Antwort:</label>
                <input
                  v-model="exercise2Answer"
                  @input="checkExercise2"
                  type="text"
                  placeholder="Klartext eingeben..."
                  class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase font-mono"
                  :class="exercise2Status === 'correct' ? 'border-green-500 bg-green-50' : exercise2Status === 'incorrect' ? 'border-red-400 bg-red-50' : 'border-gray-300'"
                />
              </div>
              <button
                @click="checkExercise2"
                class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors font-medium"
              >
                Prüfen
              </button>
            </div>
            
            <!-- Feedback -->
            <div v-if="exercise2Status === 'correct'" class="mt-3 p-3 bg-green-100 border border-green-400 rounded-lg flex items-center gap-2">
              <span class="text-xl">✅</span>
              <span class="text-green-800 font-medium">Richtig! Der Klartext ist "WER DAS LESEN KANN IST GUT"</span>
            </div>
            <div v-else-if="exercise2Status === 'incorrect'" class="mt-3 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
              <span class="text-xl">❌</span>
              <span class="text-red-800 font-medium">Noch nicht ganz. Tipp: Schreibe den Geheimtext spaltenweise ins Gitter und lies zeilenweise!</span>
            </div>
            
            <!-- Hilfe -->
            <details class="mt-3 text-sm text-gray-600">
              <summary class="cursor-pointer hover:text-indigo-600 font-medium">💡 Hilfe anzeigen</summary>
              <div class="mt-2 p-3 bg-indigo-50 rounded">
                <p class="text-xs mb-2">Länge: 21 Zeichen, 4 Spalten → 5 Zeilen</p>
                <p class="text-xs mb-2">Schreibe spaltenweise: WASAST (Spalte 1), ESENT (Spalte 2), RLNNG (Spalte 3), DEKIU (Spalte 4)</p>
                <p class="mt-2 text-xs">Dann lies zeilenweise</p>
              </div>
            </details>
          </div>

          <!-- Übung 3 -->
          <div class="bg-white p-4 rounded-lg border-2 transition-all duration-300" :class="exercise3Status === 'correct' ? 'border-green-400' : 'border-gray-200'">
            <p class="font-medium text-gray-800 mb-3">3. Knacke "VVVEIINDCIII" (Tipp: 4 oder 5 Spalten)</p>
            <div class="flex flex-wrap gap-3 items-end">
              <div class="flex-1 min-w-[200px]">
                <label class="block text-sm text-gray-600 mb-1">Deine Antwort:</label>
                <input
                  v-model="exercise3Answer"
                  @input="checkExercise3"
                  type="text"
                  placeholder="Klartext eingeben..."
                  class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase font-mono"
                  :class="exercise3Status === 'correct' ? 'border-green-500 bg-green-50' : exercise3Status === 'incorrect' ? 'border-red-400 bg-red-50' : 'border-gray-300'"
                />
              </div>
              <button
                @click="checkExercise3"
                class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors font-medium"
              >
                Prüfen
              </button>
            </div>
            
            <!-- Feedback -->
            <div v-if="exercise3Status === 'correct'" class="mt-3 p-3 bg-green-100 border border-green-400 rounded-lg flex items-center gap-2">
              <span class="text-xl">✅</span>
              <span class="text-green-800 font-medium">Perfekt! Der Klartext ist "VENI VIDI VICI" (mit 4 Spalten)</span>
            </div>
            <div v-else-if="exercise3Status === 'incorrect'" class="mt-3 p-3 bg-red-100 border border-red-400 rounded-lg flex items-center gap-2">
              <span class="text-xl">❌</span>
              <span class="text-red-800 font-medium">Noch nicht ganz. Tipp: Probiere es mit 4 Spalten!</span>
            </div>
            
            <!-- Hilfe -->
            <details class="mt-3 text-sm text-gray-600">
              <summary class="cursor-pointer hover:text-indigo-600 font-medium">💡 Hilfe anzeigen</summary>
              <div class="mt-2 p-3 bg-indigo-50 rounded">
                <p class="text-xs mb-2">Mit 4 Spalten (16 Zeichen → 4 Zeilen):</p>
                <p class="text-xs mb-2">Schreibe spaltenweise</p>
                <p class="mt-2 text-xs">Lies zeilenweise</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { 
  DEFAULT_COLUMNS, 
  DEFAULT_PLAINTEXT, 
  ANIMATION_DELAY,
  EXERCISES,
  TOBLERONE 
} from '@/constants/skytale';

// State
const plaintext = ref(DEFAULT_PLAINTEXT);
const columns = ref(DEFAULT_COLUMNS);
const highlightedCell = ref<number | null>(null);
const isAnimating = ref(false);

// Decrypt state
const decryptInput = ref('');
const decryptColumns = ref(DEFAULT_COLUMNS);

// Toblerone state - Neue interaktive Aufgabe
const tobleroneText = TOBLERONE.TEXT;
const tobleroneUserInput = ref<string[]>(Array(TOBLERONE.GRID_SIZE).fill(''));
const tobleroneValidation = ref<(boolean | null)[]>(Array(TOBLERONE.GRID_SIZE).fill(null));

// Exercise state
const exercise1Answer = ref('');
const exercise1Status = ref<'correct' | 'incorrect' | null>(null);
const exercise2Answer = ref('');
const exercise2Status = ref<'correct' | 'incorrect' | null>(null);
const exercise3Answer = ref('');
const exercise3Status = ref<'correct' | 'incorrect' | null>(null);

// Computed
const plaintextClean = computed(() => {
  return plaintext.value.toUpperCase().replace(/[^A-Z]/g, '');
});

const gridCells = computed(() => {
  const text = plaintextClean.value;
  const cols = columns.value;
  const rows = Math.ceil(text.length / cols);
  const cells: string[] = [];
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const index = row * cols + col;
      cells.push(text[index] || '');
    }
  }
  
  return cells;
});

const ciphertext = computed(() => {
  const text = plaintextClean.value;
  if (!text) return '';
  
  const cols = columns.value;
  const rows = Math.ceil(text.length / cols);
  let cipher = '';
  
  // Read column by column
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const index = row * cols + col;
      if (index < text.length) {
        cipher += text[index];
      }
    }
    //cipher += ' '; // Add space between columns for readability
  }
  
  return cipher.trim();
});

const decryptedText = computed(() => {
  const cipher = decryptInput.value.toUpperCase().replace(/[^A-Z]/g, '');
  if (!cipher) return '';
  
  const cols = decryptColumns.value;
  const rows = Math.ceil(cipher.length / cols);
  const grid: string[][] = Array(rows).fill(0).map(() => Array(cols).fill(''));
  
  // Calculate how many columns are completely filled
  const fullCols = cipher.length % cols || cols; // Columns that are completely filled
  
  // Fill grid column by column, but ensure rows are filled first
  let cipherIndex = 0;
  for (let col = 0; col < cols; col++) {
    const maxRowsForThisCol = (col < fullCols || fullCols === cols) ? rows : rows - 1;
    for (let row = 0; row < maxRowsForThisCol; row++) {
      if (cipherIndex < cipher.length) {
        grid[row][col] = cipher[cipherIndex++];
      }
    }
  }
  
  // Read grid row by row
  let decrypted = '';
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      decrypted += grid[row][col];
    }
  }
  
  return decrypted;
});

// Toblerone computed
const tobleroneIsComplete = computed(() => {
  return tobleroneUserInput.value.every(cell => cell.trim() !== '');
});

const tobleroneIsCorrect = computed(() => {
  if (!tobleroneIsComplete.value) return false;
  const userAnswer = tobleroneUserInput.value.map(c => c.toUpperCase()).join('');
  return userAnswer === tobleroneText;
});

const tobleroneCorrectCiphertext = computed(() => {
  // Lese spaltenweise
  let cipher = '';
  
  for (let col = 0; col < TOBLERONE.COLUMNS; col++) {
    for (let row = 0; row < TOBLERONE.ROWS; row++) {
      const index = row * TOBLERONE.COLUMNS + col;
      cipher += tobleroneText[index] || '';
    }
    cipher += ' ';
  }
  
  return cipher.trim();
});

// Methods
async function animateEncryption() {
  if (isAnimating.value || plaintextClean.value.length === 0) return;
  
  isAnimating.value = true;
  const text = plaintextClean.value;
  const cols = columns.value;
  const rows = Math.ceil(text.length / cols);
  
  // Animate column by column
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const index = row * cols + col;
      if (index < text.length) {
        highlightedCell.value = index;
        await new Promise(resolve => setTimeout(resolve, ANIMATION_DELAY));
      }
    }
  }
  
  highlightedCell.value = null;
  isAnimating.value = false;
}

function copyCiphertext() {
  if (ciphertext.value) {
    navigator.clipboard.writeText(ciphertext.value.replace(/\s/g, ''));
  }
}

// Toblerone methods
function validateTobleroneGrid() {
  // Validate on each input change
  tobleroneUserInput.value.forEach((cell, index) => {
    if (cell.trim() === '') {
      tobleroneValidation.value[index] = null; // Not filled yet
    } else {
      const expectedChar = tobleroneText[index].toUpperCase();
      const userChar = cell.toUpperCase();
      tobleroneValidation.value[index] = userChar === expectedChar;
    }
  });
}

function checkTobleroneGrid() {
  // Force validation of all cells
  tobleroneUserInput.value.forEach((cell, index) => {
    const expectedChar = tobleroneText[index].toUpperCase();
    const userChar = cell.toUpperCase();
    tobleroneValidation.value[index] = userChar === expectedChar;
  });
}

function resetTobleroneGrid() {
  tobleroneUserInput.value = Array(15).fill('');
  tobleroneValidation.value = Array(15).fill(null);
}

// Exercise methods
function checkExercise1() {
  const userAnswer = exercise1Answer.value.toUpperCase().replace(/\s+/g, '');
  const correctAnswer = 'HLEAOLLWT'; // HALLOWELT mit 3 Spalten verschlüsselt
  exercise1Status.value = userAnswer === correctAnswer ? 'correct' : userAnswer ? 'incorrect' : null;
}

function checkExercise2() {
  const userAnswer = exercise2Answer.value.toUpperCase().replace(/\s+/g, '');
  const correctAnswer = 'WERDASLESENKANNISTGUT'; //  mit 4 Spalten entschlüsselt
  exercise2Status.value = userAnswer === correctAnswer ? 'correct' : userAnswer ? 'incorrect' : null;
}

function checkExercise3() {
  const userAnswer = exercise3Answer.value.toUpperCase().replace(/\s+/g, '');
  const correctAnswer = 'VENIVIDIVICI'; // VVVEIINDCIII mit 4 Spalten entschlüsselt
  exercise3Status.value = userAnswer === correctAnswer ? 'correct' : userAnswer ? 'incorrect' : null;
}

// Auto-update decrypt input when ciphertext changes
watch(ciphertext, (newCipher) => {
  if (newCipher && !decryptInput.value) {
    decryptInput.value = newCipher;
  }
});
</script>

<style scoped>
.crypto-card {
  max-width: 1200px;
  margin: 0 auto;
}

code {
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: monospace;
}

/* Custom range slider styling */
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #9333ea;
  border-radius: 9999px;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 1.5rem;
  height: 1.5rem;
  background-color: #9333ea;
  border-radius: 9999px;
  cursor: pointer;
  border: 0;
}
</style>
