<template>
  <section class="mb-8">
    <h3 class="text-xl font-bold text-gray-800 mb-4">𖣯 One-Time Pad Visualisierung</h3>

    <div class="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6 rounded-r">
      <p class="text-gray-700 mb-3">
        Das One-Time-Pad lässt sich hervorragend mit
        <strong>Schwarz-Weiss-Bildern</strong> visualisieren! Dabei stellt jedes Pixel entweder eine
        <strong>0 (schwarz)</strong> oder eine <strong>1 (weiss)</strong> dar.
      </p>

      <p class="text-gray-700 mb-3">
        Wenn wir ein Original-Bild mit einem zufälligen Schlüssel-Bild per XOR verknüpfen, entsteht
        ein <strong>komplett zufälliges verschlüsseltes Bild</strong> – ohne das Original-Bild oder
        den Schlüssel kann niemand die Nachricht entschlüsseln!
      </p>
    </div>

    <!-- Interactive Image XOR -->
    <div class="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
      <h4 class="font-bold text-gray-800 mb-4">
        Beispiel: Das Original wird mit einem zufälligen One-Time Pad (OTP) verschlüsselt
      </h4>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Original Image -->
        <div>
          <h5 class="font-medium text-gray-700 mb-3 text-center">Original</h5>
          <div
            class="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-blue-300"
          >
            <canvas
              ref="originalCanvas"
              class="w-full h-full cursor-pointer"
              @click="togglePixel"
            ></canvas>
          </div>
          <p class="text-xs text-gray-500 mt-2 text-center">Klicke auf Pixel zum Zeichnen</p>
          <div class="mt-3 p-2 bg-gray-50 rounded border border-gray-200">
            <p class="text-xs font-mono text-gray-700 break-all leading-relaxed">
              {{ getBitsString(originalImage) }}
            </p>
          </div>
        </div>

        <!-- Key Image -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <h5 class="font-medium text-gray-700 text-center flex-1">Schlüssel (OTP)</h5>
            <button
              class="px-3 py-1 bg-purple-500 text-white text-xs rounded font-medium hover:bg-purple-600 transition-colors"
              @click="generateRandomKey"
            >
              🎲 Zufällig
            </button>
          </div>
          <div
            class="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-purple-300"
          >
            <canvas ref="keyCanvas" class="w-full h-full"></canvas>
          </div>
          <p class="text-xs text-gray-500 mt-2 text-center">Zufällige Pixel (0 oder 1)</p>
          <div class="mt-3 p-2 bg-purple-50 rounded border border-purple-200">
            <p class="text-xs font-mono text-gray-700 break-all leading-relaxed">
              {{ getBitsString(keyImage) }}
            </p>
          </div>
        </div>

        <!-- Encrypted Image -->
        <div>
          <h5 class="font-medium text-gray-700 mb-3 text-center">Verschlüsselt (XOR)</h5>
          <div
            class="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-orange-300"
          >
            <canvas ref="encryptedCanvas" class="w-full h-full"></canvas>
          </div>
          <p class="text-xs text-gray-500 mt-2 text-center">Original ⊕ OTP</p>
          <div class="mt-3 p-2 bg-orange-50 rounded border border-orange-200">
            <p class="text-xs font-mono text-gray-700 break-all leading-relaxed">
              {{ getBitsString(computeEncrypted()) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="mt-6 flex flex-wrap gap-3 justify-center">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors"
          @click="loadPattern('smiley')"
        >
          😊 Lade Smiley
        </button>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors"
          @click="loadPattern('text')"
        >
          🔲 Lade Schachbrett
        </button>
        <button
          class="px-4 py-2 bg-gray-500 text-white rounded font-medium hover:bg-gray-600 transition-colors"
          @click="clearCanvas"
        >
          🗑️ Leeren
        </button>
      </div>
    </div>

    <!-- Perfect Security Explanation -->
    <div
      class="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-5 mb-6"
    >
      <div class="flex items-start gap-4">
        <span class="text-3xl flex-shrink-0">👌</span>
        <div>
          <h4 class="font-bold text-gray-800 mb-2">Perfekte Sicherheit durch Zufall</h4>
          <p class="text-gray-700 leading-relaxed">
            <strong>Was siehst du im verschlüsselten Bild?</strong> Ein komplett zufälliges Muster!
            Wenn du nur den Geheimtext hast, ist
            <strong>jede mögliche Originalnachricht gleich wahrscheinlich</strong>, da der
            OTP-Schlüssel völlig zufällig ist.
          </p>
        </div>
      </div>
    </div>

    <!-- Decryption Challenge -->
    <div
      class="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg p-6"
    >
      <h4 class="font-bold text-gray-800 mb-4">🎯 Entschlüsselungs-Aufgabe</h4>

      <p class="text-gray-700 mb-4">
        Du hast ein verschlüsseltes Bild von Bob erhalten und wendest nun den One-Time-Pad Schlüssel
        an.
        <strong>Welches Bild wurde verschlüsselt?</strong> Zeichne das Original-Bild!
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-6">
        <!-- Challenge Decrypted Result -->
        <div>
          <h5 class="font-medium text-gray-700 mb-3 text-center">Deine Lösung (Original)</h5>
          <div
            class="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-blue-300"
          >
            <canvas
              ref="challengeDecryptedCanvas"
              class="w-full h-full cursor-pointer"
              @click="toggleChallengeDecrypted"
            ></canvas>
          </div>
          <p class="text-xs text-gray-500 mt-2 text-center">Klicke zum Zeichnen</p>
          <div class="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
            <p class="text-xs font-mono text-gray-700 break-all leading-relaxed">
              {{ getBitsString(challengeUserKey) }}
            </p>
          </div>
        </div>

        <!-- Challenge Key -->
        <div>
          <h5 class="font-medium text-gray-700 mb-3 text-center">OTP-Schlüssel</h5>
          <div
            class="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-purple-300"
          >
            <canvas ref="challengeKeyCanvas" class="w-full h-full"></canvas>
          </div>
          <p class="text-xs text-gray-500 mt-2 text-center">Der bekannte Schlüssel</p>
          <div class="mt-3 p-2 bg-purple-50 rounded border border-purple-200">
            <p class="text-xs font-mono text-gray-700 break-all leading-relaxed">
              {{ getBitsString(challengeKey) }}
            </p>
          </div>
        </div>

        <!-- Challenge Encrypted Image -->
        <div>
          <h5 class="font-medium text-gray-700 mb-3 text-center">Verschlüsselt</h5>
          <div
            class="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-orange-400"
          >
            <canvas ref="challengeEncryptedCanvas" class="w-full h-full"></canvas>
          </div>
          <p class="text-xs text-gray-500 mt-2 text-center">Das abgefangene Bild</p>
          <div class="mt-3 p-2 bg-orange-50 rounded border border-orange-200">
            <p class="text-xs font-mono text-gray-700 break-all leading-relaxed">
              {{ getBitsString(challengeEncrypted) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Challenge Controls -->
      <div class="flex flex-wrap gap-3 justify-center mb-4">
        <button
          class="px-4 py-2 bg-green-500 text-white rounded font-medium hover:bg-green-600 transition-colors"
          @click="checkChallengeSolution"
        >
          ✓ Lösung prüfen
        </button>
        <button
          class="px-4 py-2 bg-gray-500 text-white rounded font-medium hover:bg-gray-600 transition-colors"
          @click="resetChallenge"
        >
          🔄 Zurücksetzen
        </button>
        <button
          class="px-4 py-2 bg-yellow-500 text-white rounded font-medium hover:bg-yellow-600 transition-colors"
          @click="showHint"
        >
          💡 Hinweis
        </button>
      </div>

      <!-- Feedback -->
      <div v-if="challengeFeedback" class="mt-4">
        <div
          v-if="challengeSolved"
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
        >
          <p class="font-bold">🎉 Richtig!</p>
          <p>Du hast das Bild erfolgreich entschlüsselt!</p>
        </div>
        <div v-else class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <p class="font-bold">❌ Noch nicht ganz...</p>
          <p>{{ challengeFeedback }}</p>
        </div>
      </div>

      <!-- Hint -->
      <div v-if="showingHint" class="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p class="text-sm text-gray-700 mb-2">
          <strong>💡 Tipp:</strong> Um zu entschlüsseln, führe die XOR-Operation durch:
        </p>
        <p class="text-xs text-gray-600">
          Gehe Pixel für Pixel vor (0 = schwarz, 1 = weiss). Benutze die XOR-Tabelle: 0⊕0=0, 0⊕1=1,
          1⊕0=1, 1⊕1=0
        </p>
      </div>
    </div>

    <!-- Why OTP is impractical -->
    <div class="bg-yellow-100 border-2 border-yellow-200 rounded-lg p-6 mt-4 mb-4">
      <h4 class="font-bold text-gray-800 mb-4">
        OTP ist unknackbar - Warum wird OTP heute trotzdem nicht überall verwendet?
      </h4>

      <div class="space-y-4">
        <div class="flex items-start gap-3">
          <span class="text-3xl">📏</span>
          <div>
            <p class="font-medium text-gray-800">Schlüssellänge</p>
            <p class="text-sm text-gray-600">
              Für eine 1 GB Datei brauchst du einen 1 GB Schlüssel, den du im Voraus austauschen
              musst. Das ist unpraktisch und das Hauptproblem!
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <span class="text-3xl">⚠️</span>
          <div>
            <p class="font-medium text-gray-800">Einmalige Verwendung</p>
            <p class="text-sm text-gray-600">
              Wird ein Schlüssel zweimal verwendet, kann die Verschlüsselung gebrochen werden!
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Image why you should not use otp more than once -->
    <div class="bg-white border-2 border-gray-200 rounded-lg p-6 mt-6">
      <h4 class="font-bold text-gray-800 mb-4">
        ⚠️ Warum du ein OTP nicht mehrfach verwenden solltest
      </h4>

      <p class="text-gray-700 mb-4">
        Wenn du denselben OTP-Schlüssel für zwei verschiedene Nachrichten verwendest, können
        Angreifer die XOR-Eigenschaft ausnutzen, um beide Nachrichten zu entschlüsseln!
      </p>

      <!-- Image -->
      <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col">
        <img :src="oneTimePadFail" alt="Beispiel OTP Fail" class="w-full h-100 object-cover" />
        <p class="text-xs text-gray-500 text-center py-2 bg-gray-50">
          Beispiel: Wenn zwei Bilder mit demselben OTP-Schlüssel verschlüsselt werden, kann das XOR
          der beiden verschlüsselten Bilder das XOR der beiden Originalbilder enthüllen!
        </p>
      </div>

      <p class="text-gray-700 mt-4">
        💡 Unter diesem
        <a
          href="https://www.douglas.stebila.ca/teaching/visual-one-time-pad/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:text-blue-800 underline font-medium"
        >
          Link
        </a>
        kannst du selbst ein interaktives Beispiel ausprobieren, das zeigt, was passiert, wenn
        derselbe OTP-Schlüssel fälschlicherweise für zwei verschiedene Nachrichten verwendet wird –
        und wie ein Angreifer daraus Informationen gewinnen kann!
      </p>
    </div>

    <!-- Spacer -->
    <div class="h-8"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import oneTimePadFail from '@/assets/images/oneTimePadFail.webp';

/**
 * Image XOR Visualization Component
 */

const GRID_SIZE = 8; // 8x8 pixel grid
const originalCanvas = ref<HTMLCanvasElement | null>(null);
const keyCanvas = ref<HTMLCanvasElement | null>(null);
const encryptedCanvas = ref<HTMLCanvasElement | null>(null);

const originalImage = ref<number[][]>(
  Array(GRID_SIZE)
    .fill(0)
    .map(() => Array(GRID_SIZE).fill(0))
);
const keyImage = ref<number[][]>(
  Array(GRID_SIZE)
    .fill(0)
    .map(() => Array(GRID_SIZE).fill(0))
);

// Challenge state
const challengeEncryptedCanvas = ref<HTMLCanvasElement | null>(null);
const challengeKeyCanvas = ref<HTMLCanvasElement | null>(null);
const challengeDecryptedCanvas = ref<HTMLCanvasElement | null>(null);

const challengeOriginal = ref<number[][]>(
  Array(GRID_SIZE)
    .fill(0)
    .map(() => Array(GRID_SIZE).fill(0))
);
const challengeKey = ref<number[][]>(
  Array(GRID_SIZE)
    .fill(0)
    .map(() => Array(GRID_SIZE).fill(0))
);
const challengeUserKey = ref<number[][]>(
  Array(GRID_SIZE)
    .fill(0)
    .map(() => Array(GRID_SIZE).fill(0))
);
const challengeEncrypted = ref<number[][]>(
  Array(GRID_SIZE)
    .fill(0)
    .map(() => Array(GRID_SIZE).fill(0))
);

const challengeFeedback = ref('');
const challengeSolved = ref(false);
const showingHint = ref(false);

const drawGrid = (canvas: HTMLCanvasElement, data: number[][]) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const cellSize = canvas.width / GRID_SIZE;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw pixels
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      const value = data[y][x];

      if (value === 1) {
        // White pixel with colored border
        ctx.fillStyle = '#ffffff';
      } else {
        // Black pixel
        ctx.fillStyle = '#000000';
      }

      ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);

      // Grid lines
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
};

const computeEncrypted = () => {
  const encrypted: number[][] = Array(GRID_SIZE)
    .fill(0)
    .map(() => Array(GRID_SIZE).fill(0));

  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      encrypted[y][x] = originalImage.value[y][x] ^ keyImage.value[y][x];
    }
  }

  return encrypted;
};

const updateCanvases = () => {
  if (originalCanvas.value) {
    drawGrid(originalCanvas.value, originalImage.value);
  }
  if (keyCanvas.value) {
    drawGrid(keyCanvas.value, keyImage.value);
  }
  if (encryptedCanvas.value) {
    const encrypted = computeEncrypted();
    drawGrid(encryptedCanvas.value, encrypted);
  }
};

const togglePixel = (event: MouseEvent) => {
  if (!originalCanvas.value) return;

  const rect = originalCanvas.value.getBoundingClientRect();
  const x = Math.floor(((event.clientX - rect.left) / rect.width) * GRID_SIZE);
  const y = Math.floor(((event.clientY - rect.top) / rect.height) * GRID_SIZE);

  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
    originalImage.value[y][x] = originalImage.value[y][x] === 1 ? 0 : 1;
    updateCanvases();
  }
};

const generateRandomKey = () => {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      keyImage.value[y][x] = Math.random() < 0.5 ? 0 : 1;
    }
  }
  updateCanvases();
};

const loadPattern = (pattern: 'text' | 'smiley') => {
  // Clear first
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      originalImage.value[y][x] = 0;
    }
  }

  if (pattern === 'smiley') {
    // Smiley face (8x8)
    const smiley = [
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [1, 1, 0, 0, 0, 0, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
    ];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        originalImage.value[y][x] = smiley[y][x];
      }
    }
  } else if (pattern === 'text') {
    // Repeating pattern - checkerboard (8x8)
    const checkerboard = [
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
    ];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        originalImage.value[y][x] = checkerboard[y][x];
      }
    }
  }

  updateCanvases();
};

const clearCanvas = () => {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      originalImage.value[y][x] = 0;
    }
  }
  updateCanvases();
};

// Challenge functions
const initChallenge = () => {
  const CHALLENGE_SIZE = 5; // 5x5 grid for challenge

  // Swiss Cross pattern as the original (5x5)
  const swissCross = [
    [1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1],
  ];

  // Fixed OTP key (hardcoded, not random)
  const fixedKey = [
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0],
    [1, 1, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 1],
  ];

  // Initialize challenge arrays (resize to 4x4)
  challengeOriginal.value = Array(CHALLENGE_SIZE)
    .fill(0)
    .map(() => Array(CHALLENGE_SIZE).fill(0));
  challengeKey.value = Array(CHALLENGE_SIZE)
    .fill(0)
    .map(() => Array(CHALLENGE_SIZE).fill(0));
  challengeUserKey.value = Array(CHALLENGE_SIZE)
    .fill(0)
    .map(() => Array(CHALLENGE_SIZE).fill(0));
  challengeEncrypted.value = Array(CHALLENGE_SIZE)
    .fill(0)
    .map(() => Array(CHALLENGE_SIZE).fill(0));

  // Copy patterns and compute encrypted
  for (let y = 0; y < CHALLENGE_SIZE; y++) {
    for (let x = 0; x < CHALLENGE_SIZE; x++) {
      challengeOriginal.value[y][x] = swissCross[y][x];
      challengeKey.value[y][x] = fixedKey[y][x];
      challengeUserKey.value[y][x] = 0;
      challengeEncrypted.value[y][x] = swissCross[y][x] ^ fixedKey[y][x];
    }
  }

  updateChallengeCanvases();
};

const updateChallengeCanvases = () => {
  if (challengeEncryptedCanvas.value) {
    drawChallengeGrid(challengeEncryptedCanvas.value, challengeEncrypted.value);
  }
  if (challengeKeyCanvas.value) {
    drawChallengeGrid(challengeKeyCanvas.value, challengeKey.value);
  }
  if (challengeDecryptedCanvas.value) {
    drawChallengeGrid(challengeDecryptedCanvas.value, challengeUserKey.value);
  }
};

const drawChallengeGrid = (canvas: HTMLCanvasElement, data: number[][]) => {
  const ctx = canvas.getContext('2d');
  if (!ctx || data.length === 0) return;

  const gridSize = data.length; // 4x4
  const cellSize = canvas.width / gridSize;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw pixels
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const value = data[y][x];

      if (value === 1) {
        ctx.fillStyle = '#ffffff';
      } else {
        ctx.fillStyle = '#000000';
      }

      ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);

      // Grid lines
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;
      ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
};

const toggleChallengeDecrypted = (event: MouseEvent) => {
  if (!challengeDecryptedCanvas.value) return;

  const gridSize = challengeUserKey.value.length; // 4x4
  const rect = challengeDecryptedCanvas.value.getBoundingClientRect();
  const x = Math.floor(((event.clientX - rect.left) / rect.width) * gridSize);
  const y = Math.floor(((event.clientY - rect.top) / rect.height) * gridSize);

  if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
    challengeUserKey.value[y][x] = challengeUserKey.value[y][x] === 1 ? 0 : 1;
    updateChallengeCanvases();
    challengeFeedback.value = '';
    challengeSolved.value = false;
  }
};

const checkChallengeSolution = () => {
  let correct = 0;
  let total = 0;
  const gridSize = challengeOriginal.value.length;

  // Compare user's drawn image with the original
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      total++;
      if (challengeUserKey.value[y][x] === challengeOriginal.value[y][x]) {
        correct++;
      }
    }
  }

  const percentage = Math.round((correct / total) * 100);

  if (percentage === 100) {
    challengeSolved.value = true;
    challengeFeedback.value = 'Bravo! Du hast das Bild korrekt entschlüsselt.';
  } else {
    challengeSolved.value = false;
    challengeFeedback.value = `Du hast ${percentage}% der Pixel richtig. Versuche es nochmal!`;
  }
};

const resetChallenge = () => {
  const gridSize = challengeUserKey.value.length;
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      challengeUserKey.value[y][x] = 0;
    }
  }
  challengeFeedback.value = '';
  challengeSolved.value = false;
  showingHint.value = false;
  updateChallengeCanvases();
};

const showHint = () => {
  showingHint.value = !showingHint.value;
};

const getBitsString = (data: number[][]) => {
  let bits = '';
  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      bits += data[y][x];
    }
  }
  return bits;
};

onMounted(() => {
  // Set canvas sizes
  if (originalCanvas.value) {
    originalCanvas.value.width = 400;
    originalCanvas.value.height = 400;
  }
  if (keyCanvas.value) {
    keyCanvas.value.width = 400;
    keyCanvas.value.height = 400;
  }
  if (encryptedCanvas.value) {
    encryptedCanvas.value.width = 400;
    encryptedCanvas.value.height = 400;
  }

  // Set challenge canvas sizes
  if (challengeEncryptedCanvas.value) {
    challengeEncryptedCanvas.value.width = 400;
    challengeEncryptedCanvas.value.height = 400;
  }
  if (challengeKeyCanvas.value) {
    challengeKeyCanvas.value.width = 400;
    challengeKeyCanvas.value.height = 400;
  }
  if (challengeDecryptedCanvas.value) {
    challengeDecryptedCanvas.value.width = 400;
    challengeDecryptedCanvas.value.height = 400;
  }

  // Generate initial random key and load smiley pattern
  generateRandomKey();
  loadPattern('smiley');

  // Initialize challenge
  initChallenge();
});

watch(
  [originalImage, keyImage],
  () => {
    updateCanvases();
  },
  { deep: true }
);
</script>

<style scoped>
canvas {
  image-rendering: pixelated;
}
</style>
