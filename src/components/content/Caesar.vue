<template>
  <div class="crypto-card p-4 sm:p-6 md:p-8">
    <!-- Header -->
    <CaesarHeader />

    <!-- Caesar Wheel Section -->
    <div class="mb-8">
      <CaesarWheel
        :shift="wheel.shift.value"
        :snapped-rotation="wheel.snappedRotation.value"
        :is-dragging="wheel.isDragging.value"
        :alphabet="cipher.alphabet"
        @update:shift="wheel.setShift"
        @start-drag="wheel.startDrag"
      >
        <CaesarTextTransform
          :mode="mode"
          :plain-text="plainText"
          :encrypted-text="encryptedText"
          :encrypted-input="encryptedInput"
          :decrypted-text="decryptedText"
          :shift="cipher.shift.value"
          @update:mode="mode = $event"
          @update:plain-text="handlePlainTextUpdate"
          @update:encrypted-input="handleEncryptedInputUpdate"
          @use-example="handleExampleClick"
        />
      </CaesarWheel>
    </div>

    <!-- Visual Transformation Display -->
    <div class="mb-8">
      <AlphabetTransformation
        :alphabet="cipher.alphabet"
        :shifted-alphabet="cipher.shiftedAlphabet.value"
        :shift="cipher.shift.value"
      />
    </div>

    <!-- How it Works Section -->
    <CaesarHowItWorks />

    <!-- Modulo Explanation -->
    <ModuloExplanation />

    <!-- Interactive Challenge -->
    <div class="mb-6">
      <CaesarChallenge
        :challenge="challenge.challenge.value"
        :user-answer="challenge.userAnswer.value"
        :challenge-completed="challenge.challengeCompleted.value"
        :challenge-feedback="challenge.challengeFeedback.value"
        @update:user-answer="challenge.userAnswer.value = $event"
        @check="handleChallengeCheck"
        @new-challenge="challenge.newChallenge()"
      />
    </div>

    <!-- Fun Facts -->
    <CaesarFunFacts />

    <!-- Sources -->
    <Sources :sources="CAESAR_SOURCES" />

    <!-- Action Buttons -->
    <div class="flex flex-wrap gap-3 sm:gap-4 mt-8">
      <button
        class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
        @click="reset"
      >
        ↻ Zurücksetzen
      </button>
      <button
        class="px-4 sm:px-6 py-2 sm:py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        @click="$emit('back')"
      >
        ← Zurück
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useCaesarCipher } from '@/composables/useCaesarCipher';
import { useCaesarWheel } from '@/composables/useCaesarWheel';
import { useCaesarChallenge } from '@/composables/useCaesarChallenge';
import {
  CIPHER_MODE,
  INITIAL_DEMO_TEXT,
  INITIAL_SHIFT,
  CAESAR_SOURCES,
  type CipherMode,
} from '@/constants/caesar';
import CaesarWheel from './caesar/CaesarWheel.vue';
import CaesarTextTransform from './caesar/CaesarTextTransform.vue';
import CaesarChallenge from './caesar/CaesarChallenge.vue';
import AlphabetTransformation from './caesar/AlphabetTransformation.vue';
import CaesarHeader from './caesar/CaesarHeader.vue';
import CaesarHowItWorks from './caesar/CaesarHowItWorks.vue';
import CaesarFunFacts from './caesar/CaesarFunFacts.vue';
import ModuloExplanation from '@/components/ui/ModuloExplanation.vue';
import Sources from '@/components/ui/Sources.vue';

// Emits
const emit = defineEmits<{
  complete: [result: { score: number; completed: boolean }];
  back: [];
}>();

// Composables
const cipher = useCaesarCipher();
const wheel = useCaesarWheel();
const challenge = useCaesarChallenge(cipher.caesarShift);

// State
const mode = ref<CipherMode>(CIPHER_MODE.ENCRYPT);
const plainText = ref('');
const encryptedInput = ref('');

// Computed Properties - Automatically reactive
const encryptedText = computed(() => (plainText.value ? cipher.encrypt(plainText.value) : ''));

const decryptedText = computed(() =>
  encryptedInput.value ? cipher.decrypt(encryptedInput.value) : ''
);

// Sync shift between wheel and cipher
watch(
  () => wheel.shift.value,
  newShift => {
    cipher.shift.value = newShift;
  }
);

// Event Handlers
function handlePlainTextUpdate(value: string) {
  plainText.value = value;
}

function handleEncryptedInputUpdate(value: string) {
  encryptedInput.value = value;
}

function handleExampleClick(example: string) {
  if (mode.value === CIPHER_MODE.ENCRYPT) {
    plainText.value = example;
  } else {
    // For decrypt mode, we need to encrypt the example first
    encryptedInput.value = cipher.encrypt(example);
  }
}

function handleChallengeCheck() {
  challenge.checkChallenge(result => {
    emit('complete', result);
  });
}

function reset() {
  plainText.value = '';
  encryptedInput.value = '';
  mode.value = CIPHER_MODE.ENCRYPT;
  cipher.shift.value = 0;
  wheel.setShift(0);
  challenge.reset();
}

// Lifecycle - Initialize with demo
onMounted(() => {
  plainText.value = INITIAL_DEMO_TEXT;
  wheel.setShift(INITIAL_SHIFT);
  cipher.shift.value = INITIAL_SHIFT;
});
</script>
