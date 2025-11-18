import { ref, computed } from 'vue';
import {
  ALPHABET,
  GERMAN_EXAMPLE,
  ENGLISH_EXAMPLE,
  GERMAN_FREQUENCIES,
  ENGLISH_FREQUENCIES,
} from '../constants/monoalphabetic';

export type Language = 'german' | 'english';

interface LetterFrequency {
  letter: string;
  count: number;
  percentage: number;
}

interface UserKey {
  [cipherLetter: string]: string; // cipher letter -> plain letter
}

export function useFrequencyAnalysis() {
  const language = ref<Language>('german');
  const ciphertext = ref('');
  const plaintext = ref('');
  const userKey = ref<UserKey>({});
  const showHints = ref(false);

  // Get current example based on language
  const currentExample = computed(() =>
    language.value === 'german' ? GERMAN_EXAMPLE : ENGLISH_EXAMPLE
  );

  // Get reference frequencies based on language
  const referenceFrequencies = computed(() =>
    language.value === 'german' ? GERMAN_FREQUENCIES : ENGLISH_FREQUENCIES
  );

  // Load example text
  const loadExample = () => {
    ciphertext.value = currentExample.value.ciphertext;
    plaintext.value = currentExample.value.plaintext;
    userKey.value = {};
    showHints.value = false;
  };

  // Calculate letter frequencies in ciphertext
  const cipherFrequencies = computed((): LetterFrequency[] => {
    const text = ciphertext.value.toUpperCase().replace(/[^A-Z]/g, '');
    const counts: { [key: string]: number } = {};

    // Count each letter
    for (const char of text) {
      counts[char] = (counts[char] || 0) + 1;
    }

    const total = text.length;

    // Convert to array with percentages
    const frequencies: LetterFrequency[] = Object.entries(counts).map(([letter, count]) => ({
      letter,
      count,
      percentage: (count / total) * 100,
    }));

    // Sort by frequency (descending)
    return frequencies.sort((a, b) => b.percentage - a.percentage);
  });

  // Get reference frequencies as sorted array
  const referenceFrequenciesArray = computed(() => {
    return Object.entries(referenceFrequencies.value)
      .map(([letter, percentage]) => ({
        letter,
        percentage: percentage as number,
      }))
      .sort((a, b) => b.percentage - a.percentage);
  });

  // Set a key mapping (cipher letter -> plain letter)
  const setKeyMapping = (cipherLetter: string, plainLetter: string) => {
    const upper = cipherLetter.toUpperCase();
    if (plainLetter === '') {
      delete userKey.value[upper];
    } else {
      userKey.value[upper] = plainLetter.toUpperCase();
    }
  };

  // Clear all mappings
  const clearKey = () => {
    userKey.value = {};
  };

  // Decrypt text with current user key
  const decryptedText = computed(() => {
    let result = '';
    const text = ciphertext.value.toUpperCase();

    for (const char of text) {
      if (ALPHABET.includes(char)) {
        result += userKey.value[char] || '_';
      } else {
        result += char; // Keep spaces, punctuation, etc.
      }
    }

    return result;
  });

  // Check if solution is correct
  const isCorrect = computed(() => {
    const decrypted = decryptedText.value.replace(/[^A-Z]/g, '');
    const correct = plaintext.value.replace(/[^A-Z]/g, '');
    return decrypted === correct && decrypted.length > 0;
  });

  // Get completion percentage
  const completionPercentage = computed(() => {
    const totalLetters = ALPHABET.length;
    const mappedLetters = Object.keys(userKey.value).length;
    return Math.round((mappedLetters / totalLetters) * 100);
  });

  // Get hint: most frequent cipher letter should be most frequent plain letter
  const getHint = () => {
    if (cipherFrequencies.value.length === 0) return null;

    const mostFrequentCipher = cipherFrequencies.value[0].letter;
    const mostFrequentPlain = referenceFrequenciesArray.value[0].letter;

    return {
      cipherLetter: mostFrequentCipher,
      plainLetter: mostFrequentPlain,
      cipherPercentage: cipherFrequencies.value[0].percentage,
      expectedPercentage: referenceFrequenciesArray.value[0].percentage,
    };
  };

  // Auto-fill solution (for testing or giving up)
  const showSolution = () => {
    userKey.value = { ...currentExample.value.key };
  };

  // Switch language
  const switchLanguage = (newLanguage: Language) => {
    language.value = newLanguage;
    loadExample();
  };

  return {
    language,
    ciphertext,
    plaintext,
    userKey,
    showHints,
    currentExample,
    referenceFrequencies,
    cipherFrequencies,
    referenceFrequenciesArray,
    decryptedText,
    isCorrect,
    completionPercentage,
    loadExample,
    setKeyMapping,
    clearKey,
    getHint,
    showSolution,
    switchLanguage,
  };
}
