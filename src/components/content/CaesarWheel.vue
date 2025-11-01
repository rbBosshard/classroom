<template>
  <div class="crypto-card p-4 sm:p-6 md:p-8">
    <!-- Header -->
    <div class="mb-6 sm:mb-8">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
        🏛️ Caesar-Verschlüsselung
      </h2>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 sm:mb-6 rounded-r">
        <p class="text-gray-700 mb-2">
          <strong>So funktioniert's:</strong> Julius Caesar verschlüsselte seine Nachrichten, indem er jeden Buchstaben im Alphabet um eine bestimmte Anzahl verschob.
        </p>
        <p class="text-gray-600 text-sm">
          <strong>Beispiel:</strong> Mit Verschiebung 3 wird aus <code class="bg-white px-1.5 py-0.5 rounded text-xs">A → D</code>, <code class="bg-white px-1.5 py-0.5 rounded text-xs">B → E</code>, usw.
        </p>
      </div>
    </div>

    <!-- Interactive Caesar Wheel -->
    <div class="mb-8">
      <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
        🎯 Interaktive Caesar-Scheibe
      </h3>
      
      <div class="flex flex-col lg:flex-row gap-6 items-center">
        <!-- Caesar Wheel -->
        <div class="relative flex-shrink-0">
          <div class="relative w-64 h-64 sm:w-80 sm:h-80">
            <!-- Outer Ring (Fixed) - Klartext -->
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
              <!-- Background circle -->
              <circle cx="100" cy="100" r="95" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
              
              <!-- Outer letters (Klartext) -->
              <g v-for="(letter, index) in alphabet" :key="'outer-' + index">
                <text
                  :x="100 + 75 * Math.cos((index * 360 / 26 - 90) * Math.PI / 180)"
                  :y="100 + 75 * Math.sin((index * 360 / 26 - 90) * Math.PI / 180)"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  class="text-lg font-bold fill-blue-800"
                  style="font-size: 12px;"
                >
                  {{ letter }}
                </text>
              </g>
            </svg>

            <!-- Inner Ring (Rotatable) - Geheimtext -->
            <svg 
              class="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing transition-transform"
              viewBox="0 0 200 200"
              :style="{ transform: `rotate(${rotation}deg)` }"
              @mousedown="startDrag"
              @touchstart="startDrag"
            >
              <!-- Inner circle -->
              <circle cx="100" cy="100" r="60" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
              
              <!-- Inner letters (Geheimtext) -->
              <g v-for="(letter, index) in alphabet" :key="'inner-' + index">
                <text
                  :x="100 + 45 * Math.cos((index * 360 / 26 - 90) * Math.PI / 180)"
                  :y="100 + 45 * Math.sin((index * 360 / 26 - 90) * Math.PI / 180)"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  class="text-base font-bold fill-purple-800"
                  style="font-size: 12px;"
                >
                  {{ letter }}
                </text>
              </g>

              <!-- Center dot for dragging -->
              <circle cx="100" cy="100" r="15" fill="#9333ea" opacity="0.5"/>
              <text x="100" y="105" text-anchor="middle" class="text-white text-xs" style="font-size: 10px;">
                DREHEN
              </text>
            </svg>

            <!-- Indicator Arrow -->
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div class="text-red-500 text-3xl">▼</div>
            </div>
          </div>

          <!-- Shift Display -->
          <div class="text-center mt-4">
            <div class="inline-block bg-purple-100 px-6 py-3 rounded-lg">
              <p class="text-sm text-gray-600">Verschiebung:</p>
              <p class="text-3xl font-bold text-purple-700">{{ shift }}</p>
            </div>
          </div>
        </div>

        <!-- Text Input/Output -->
        <div class="flex-1 w-full space-y-4">
          <!-- Klartext Input -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <span class="text-blue-600">📝</span>
              Klartext (Deine Nachricht):
            </label>
            <textarea
              v-model="plainText"
              @input="encrypt"
              placeholder="Schreibe hier deine geheime Nachricht..."
              class="w-full h-24 sm:h-32 p-3 sm:p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
            ></textarea>
            <p class="text-xs text-gray-500 mt-1">
              Tipp: Nur Buchstaben werden verschlüsselt
            </p>
          </div>

          <!-- Arrow -->
          <div class="text-center text-2xl text-gray-400">
            ⬇️
          </div>

          <!-- Geheimtext Output -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <span class="text-purple-600">🔒</span>
              Geheimtext (Verschlüsselt):
            </label>
            <textarea
              :value="encryptedText"
              readonly
              placeholder="Hier erscheint der verschlüsselte Text..."
              class="w-full h-24 sm:h-32 p-3 sm:p-4 bg-gray-50 border border-gray-300 rounded-lg resize-none font-mono text-base"
            ></textarea>
            <button
              v-if="encryptedText"
              @click="copyToClipboard"
              class="mt-2 text-sm text-purple-600 hover:text-purple-800 flex items-center gap-1"
            >
              📋 Text kopieren
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Alphabet Mapping Display -->
    <div class="mb-6 sm:mb-8">
      <h3 class="text-lg font-semibold text-gray-700 mb-3">
        📊 Alphabet-Zuordnung
      </h3>
      <div class="bg-gray-50 p-4 rounded-lg overflow-x-auto">
        <div class="flex gap-2 min-w-max">
          <div v-for="(letter, index) in alphabet" :key="'map-' + index" class="flex flex-col items-center">
            <div class="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded font-mono font-bold text-sm">
              {{ letter }}
            </div>
            <div class="text-gray-400 text-xs my-1">↓</div>
            <div class="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-800 rounded font-mono font-bold text-sm">
              {{ shiftedAlphabet[index] }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Challenge -->
    <div class="bg-yellow-50 border border-yellow-300 p-4 sm:p-6 rounded-lg mb-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <span class="text-2xl">🎯</span>
        Schnell-Challenge
      </h3>
      <div v-if="!challengeCompleted">
        <p class="text-gray-700 mb-4">
          <strong>Aufgabe:</strong> Verschlüssele das Wort <code class="bg-white px-2 py-1 rounded font-bold">{{ challenge.word }}</code> mit Verschiebung <strong>{{ challenge.shift }}</strong>
        </p>
        <div class="flex flex-wrap gap-3">
          <input
            v-model="userAnswer"
            @keyup.enter="checkChallenge"
            type="text"
            placeholder="Deine Antwort..."
            class="flex-1 min-w-[200px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <button
            @click="checkChallenge"
            class="crypto-button"
          >
            Überprüfen
          </button>
        </div>
        <p v-if="challengeFeedback" :class="[
          'mt-3 p-3 rounded',
          challengeFeedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        ]">
          {{ challengeFeedback.message }}
        </p>
      </div>
      <div v-else class="text-center">
        <p class="text-2xl mb-2">🎉</p>
        <p class="text-green-700 font-semibold text-lg">Perfekt! Du hast es verstanden!</p>
        <button @click="newChallenge" class="crypto-button mt-4">
          Nächste Challenge
        </button>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-wrap gap-3 sm:gap-4">
      <button 
        @click="reset" 
        class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
      >
        ↻ Zurücksetzen
      </button>
      <button 
        @click="$emit('back')" 
        class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        ← Zurück
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Emits
const emit = defineEmits<{
  complete: [result: { score: number; completed: boolean }]
  back: []
}>()

// State
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const plainText = ref('')
const encryptedText = ref('')
const rotation = ref(0)
const isDragging = ref(false)
const startAngle = ref(0)
const currentAngle = ref(0)

// Challenge state
const challenge = ref({ word: 'HALLO', shift: 3 })
const userAnswer = ref('')
const challengeCompleted = ref(false)
const challengeFeedback = ref<{ correct: boolean; message: string } | null>(null)

// Computed
const shift = computed(() => {
  const normalizedRotation = ((rotation.value % 360) + 360) % 360
  return Math.round(normalizedRotation / (360 / 26)) % 26
})

const shiftedAlphabet = computed(() => {
  return alphabet.map((_, index) => {
    const newIndex = (index + shift.value) % 26
    return alphabet[newIndex]
  })
})

// Functions
function caesarShift(text: string, shiftAmount: number): string {
  return text.split('').map(char => {
    if (char.match(/[a-zA-Z]/)) {
      const isUpperCase = char === char.toUpperCase()
      const charCode = char.toUpperCase().charCodeAt(0)
      const shifted = ((charCode - 65 + shiftAmount) % 26) + 65
      const result = String.fromCharCode(shifted)
      return isUpperCase ? result : result.toLowerCase()
    }
    return char
  }).join('')
}

function encrypt() {
  if (plainText.value) {
    encryptedText.value = caesarShift(plainText.value, shift.value)
  } else {
    encryptedText.value = ''
  }
}

// Drag functionality
function startDrag(event: MouseEvent | TouchEvent) {
  isDragging.value = true
  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
  const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY
  
  const target = event.currentTarget as SVGElement
  const rect = target.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  startAngle.value = Math.atan2(clientY - centerY, clientX - centerX) * 180 / Math.PI
  currentAngle.value = rotation.value
  
  event.preventDefault()
}

function onDrag(event: MouseEvent | TouchEvent) {
  if (!isDragging.value) return
  
  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
  const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY
  
  const wheelElement = document.querySelector('svg[viewBox="0 0 200 200"]')
  if (!wheelElement) return
  
  const rect = wheelElement.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  const angle = Math.atan2(clientY - centerY, clientX - centerX) * 180 / Math.PI
  const deltaAngle = angle - startAngle.value
  
  rotation.value = currentAngle.value + deltaAngle
  encrypt()
  
  event.preventDefault()
}

function stopDrag() {
  isDragging.value = false
}

function copyToClipboard() {
  navigator.clipboard.writeText(encryptedText.value)
  alert('✓ Text wurde kopiert!')
}

// Challenge functions
function checkChallenge() {
  if (!userAnswer.value) return
  
  const correctAnswer = caesarShift(challenge.value.word, challenge.value.shift)
  const isCorrect = userAnswer.value.toUpperCase() === correctAnswer.toUpperCase()
  
  if (isCorrect) {
    challengeCompleted.value = true
    challengeFeedback.value = {
      correct: true,
      message: `Richtig! ${challenge.value.word} wird zu ${correctAnswer}`
    }
    
    emit('complete', { score: 100, completed: true })
  } else {
    challengeFeedback.value = {
      correct: false,
      message: 'Nicht ganz. Tipp: Nutze die Caesar-Scheibe zur Hilfe!'
    }
  }
}

function newChallenge() {
  const words = ['GEHEIM', 'CAESAR', 'CODE', 'HILFE', 'ERFOLG']
  const shifts = [1, 2, 3, 4, 5]
  
  challenge.value = {
    word: words[Math.floor(Math.random() * words.length)],
    shift: shifts[Math.floor(Math.random() * shifts.length)]
  }
  
  userAnswer.value = ''
  challengeCompleted.value = false
  challengeFeedback.value = null
}

function reset() {
  plainText.value = ''
  encryptedText.value = ''
  rotation.value = 0
}

// Lifecycle
onMounted(() => {
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('touchmove', onDrag)
  window.addEventListener('touchend', stopDrag)
  
  // Demo text
  plainText.value = 'HALLO'
  encrypt()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('touchend', stopDrag)
})
</script>

<style scoped>
code {
  font-family: 'Courier New', monospace;
  font-weight: bold;
}

svg {
  user-select: none;
  -webkit-user-select: none;
}
</style>
