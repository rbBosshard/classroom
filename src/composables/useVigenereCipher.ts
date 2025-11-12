import { ref, computed } from 'vue';
import { VIGENERE_ALPHABET } from '@/constants/vigenere';

export function useVigenereCipher() {
  const alphabet = VIGENERE_ALPHABET;

  // Encrypt a single character
  function encryptChar(plainChar: string, keyChar: string): string {
    const plainIndex = alphabet.indexOf(plainChar.toUpperCase());
    const keyIndex = alphabet.indexOf(keyChar.toUpperCase());
    if (plainIndex === -1 || keyIndex === -1) return plainChar;
    const cipherIndex = (plainIndex + keyIndex) % 26;
    return alphabet[cipherIndex];
  }

  // Decrypt a single character
  function decryptChar(cipherChar: string, keyChar: string): string {
    const cipherIndex = alphabet.indexOf(cipherChar.toUpperCase());
    const keyIndex = alphabet.indexOf(keyChar.toUpperCase());
    if (cipherIndex === -1 || keyIndex === -1) return cipherChar;
    const plainIndex = (cipherIndex - keyIndex + 26) % 26;
    return alphabet[plainIndex];
  }

  // Encrypt text with Vigenère cipher
  function vigenereEncrypt(plaintext: string, key: string): string {
    if (!key) return plaintext;

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i];
      if (/[A-Za-z]/.test(char)) {
        const keyChar = key[keyIndex % key.length];
        result += encryptChar(char, keyChar);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return result;
  }

  // Decrypt text with Vigenère cipher
  function vigenereDecrypt(ciphertext: string, key: string): string {
    if (!key) return ciphertext;

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i];
      if (/[A-Za-z]/.test(char)) {
        const keyChar = key[keyIndex % key.length];
        result += decryptChar(char, keyChar);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return result;
  }

  // Get character from Vigenère table
  function getVigenereChar(row: number, col: number): string {
    return alphabet[(row + col) % 26];
  }

  // Get encryption steps for visualization
  function getEncryptionSteps(plaintext: string, key: string) {
    if (!key) return [];

    const steps: Array<{
      index: number;
      plainChar: string;
      keyChar: string;
      cipherChar: string;
      plainIndex: number;
      keyIndex: number;
      cipherIndex: number;
    }> = [];

    let keyIndex = 0;

    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i];
      if (/[A-Z]/.test(char)) {
        const keyChar = key[keyIndex % key.length];
        const cipherChar = encryptChar(char, keyChar);

        steps.push({
          index: keyIndex,
          plainChar: char,
          keyChar: keyChar,
          cipherChar: cipherChar,
          plainIndex: alphabet.indexOf(char),
          keyIndex: alphabet.indexOf(keyChar),
          cipherIndex: alphabet.indexOf(cipherChar),
        });

        keyIndex++;
      }
    }

    return steps;
  }

  // Caesar encrypt for comparison
  function caesarEncrypt(text: string, shift: number): string {
    return text
      .split('')
      .map(char => {
        if (/[A-Z]/.test(char)) {
          const index = alphabet.indexOf(char);
          return alphabet[(index + shift) % 26];
        }
        return char;
      })
      .join('');
  }

  // Get color class for key visualization
  function getKeyColorClass(index: number, keyLength: number): string {
    const colors = [
      'bg-purple-200 text-purple-800',
      'bg-blue-200 text-blue-800',
      'bg-green-200 text-green-800',
      'bg-yellow-200 text-yellow-800',
      'bg-pink-200 text-pink-800',
      'bg-indigo-200 text-indigo-800',
    ];
    return colors[(index % keyLength) % colors.length];
  }

  // Get color class based on the actual letter (same letter = same color)
  // 26 unique colors for each letter A-Z
  function getColorClassByLetter(letter: string): string {
    const colors = [
      'bg-red-200 text-red-800', // A
      'bg-orange-200 text-orange-800', // B
      'bg-amber-200 text-amber-800', // C
      'bg-yellow-200 text-yellow-800', // D
      'bg-lime-200 text-lime-800', // E
      'bg-green-200 text-green-800', // F
      'bg-emerald-200 text-emerald-800', // G
      'bg-teal-200 text-teal-800', // H
      'bg-cyan-200 text-cyan-800', // I
      'bg-sky-200 text-sky-800', // J
      'bg-blue-200 text-blue-800', // K
      'bg-indigo-200 text-indigo-800', // L
      'bg-violet-200 text-violet-800', // M
      'bg-purple-200 text-purple-800', // N
      'bg-fuchsia-200 text-fuchsia-800', // O
      'bg-pink-200 text-pink-800', // P
      'bg-rose-200 text-rose-800', // Q
      'bg-red-300 text-red-900', // R
      'bg-orange-300 text-orange-900', // S
      'bg-amber-300 text-amber-900', // T
      'bg-yellow-300 text-yellow-900', // U
      'bg-lime-300 text-lime-900', // V
      'bg-green-300 text-green-900', // W
      'bg-emerald-300 text-emerald-900', // X
      'bg-teal-300 text-teal-900', // Y
      'bg-cyan-300 text-cyan-900', // Z
    ];
    const charIndex = alphabet.indexOf(letter.toUpperCase());
    return charIndex >= 0 ? colors[charIndex] : 'bg-gray-200 text-gray-800';
  }

  return {
    alphabet,
    encryptChar,
    decryptChar,
    vigenereEncrypt,
    vigenereDecrypt,
    getVigenereChar,
    getEncryptionSteps,
    caesarEncrypt,
    getKeyColorClass,
    getColorClassByLetter,
  };
}

// Kasiski Test functionality
export function useKasiskiTest() {
  const crackCiphertext = ref('');
  const crackedKey = ref('');
  const crackedPlaintext = ref('');
  const frequencyResults = ref<
    Array<{
      mostCommon: string;
      keyLetter: string;
      groupText: string; // Der extrahierte Text für diese Gruppe
      frequencies: { letter: string; count: number; percentage: number }[]; // Häufigkeiten für Diagramm
    }>
  >([]);

  const { vigenereDecrypt } = useVigenereCipher();
  const alphabet = VIGENERE_ALPHABET;

  const kasiskiRepeats = computed(() => {
    const text = crackCiphertext.value.toUpperCase().replace(/[^A-Z]/g, '');
    if (text.length < 3) return []; // Mindestens 3 Buchstaben für ein Trigramm

    const sequences = new Map<string, number[]>();

    // Alle Trigramme sammeln
    for (let i = 0; i <= text.length - 3; i++) {
      const trigram = text.substring(i, i + 3);
      if (!sequences.has(trigram)) {
        sequences.set(trigram, []);
      }
      sequences.get(trigram)!.push(i);
    }

    const results: Array<{
      sequence: string;
      positions: number[];
      spacings: number[];
      factors: number[];
      score: number;
    }> = [];

    // Nur Trigramme mit mindestens 2 Vorkommen
    for (const [sequence, positions] of sequences.entries()) {
      if (positions.length < 2) continue;

      // Abstände zwischen aufeinanderfolgenden Vorkommen berechnen
      const spacings: number[] = [];
      for (let i = 0; i < positions.length - 1; i++) {
        spacings.push(positions[i + 1] - positions[i]);
      }

      // Faktoren der Abstände berechnen
      const factorSet = new Set<number>();
      for (const spacing of spacings) {
        for (let f = 2; f <= text.length; f++) {
          if (spacing % f === 0) {
            factorSet.add(f);
          }
        }
      }
      const factors = Array.from(factorSet).sort((a, b) => a - b);

      // Score: mehr Vorkommen = höherer Score
      const score = positions.length * 100;

      results.push({ sequence, positions, spacings, factors, score });
    }

    // Alphabetisch sortieren
    results.sort((a, b) => a.sequence.localeCompare(b.sequence));

    return results;
  });

  // Helper: GCD (Greatest Common Divisor) berechnen
  function gcd(a: number, b: number): number {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Helper: GCD für mehrere Zahlen
  function gcdMultiple(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return numbers[0];

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      result = gcd(result, numbers[i]);
      if (result === 1) break; // Optimierung: GCD kann nicht kleiner als 1 werden
    }
    return result;
  }

  // Estimate key length from factor frequency and GCD
  const estimatedKeyLength = computed(() => {
    if (kasiskiRepeats.value.length === 0) return 0;

    // Methode 1: GCD aller Abstände (am zuverlässigsten)
    const allSpacings: number[] = [];
    kasiskiRepeats.value.slice(0, 10).forEach(repeat => {
      allSpacings.push(...repeat.spacings);
    });

    const gcdResult = gcdMultiple(allSpacings.filter(s => s > 0));

    // Methode 2: Faktorenhäufigkeit mit gewichteter Bewertung
    const factorScores = new Map<number, number>();

    kasiskiRepeats.value.forEach((repeat, index) => {
      const weight = repeat.score / (index + 1); // Höher bewertete Wiederholungen haben mehr Gewicht

      repeat.factors.forEach(factor => {
        if (factor > 1 && factor <= 30) {
          factorScores.set(factor, (factorScores.get(factor) || 0) + weight);
        }
      });
    });

    // Besten Faktor finden
    let bestFactor = 0;
    let bestScore = 0;

    factorScores.forEach((score, factor) => {
      if (score > bestScore) {
        bestScore = score;
        bestFactor = factor;
      }
    });

    // Kombiniere beide Methoden: Priorisiere GCD wenn sinnvoll, sonst Faktorenhäufigkeit
    if (gcdResult > 1 && gcdResult <= 30) {
      // Prüfe ob GCD auch ein häufiger Faktor ist
      const gcdScore = factorScores.get(gcdResult) || 0;
      if (gcdScore >= bestScore * 0.5) {
        return gcdResult;
      }
    }

    return bestFactor;
  });

  // Frequency analysis to crack the key
  function analyzeFrequencies() {
    const text = crackCiphertext.value;
    const keyLen = estimatedKeyLength.value;

    if (keyLen === 0 || text.length < keyLen * 3) {
      frequencyResults.value = [];

      alert('Text ist zu kurz oder Schlüssellänge konnte nicht geschätzt werden.');
      return;
    }

    const results: Array<{
      mostCommon: string;
      keyLetter: string;
      groupText: string;
      frequencies: { letter: string; count: number; percentage: number }[];
    }> = [];

    // Split into groups based on key length
    for (let offset = 0; offset < keyLen; offset++) {
      const group: string[] = [];
      for (let i = offset; i < text.length; i += keyLen) {
        if (/[A-Z]/.test(text[i])) {
          group.push(text[i]);
        }
      }

      const groupText = group.join('');

      // Count frequencies for all letters
      const freqMap = new Map<string, number>();
      VIGENERE_ALPHABET.forEach((letter: string) => freqMap.set(letter, 0));

      group.forEach(char => {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
      });

      const total = group.length;
      const frequencies = VIGENERE_ALPHABET.map((letter: string) => ({
        letter,
        count: freqMap.get(letter) || 0,
        percentage: total > 0 ? ((freqMap.get(letter) || 0) / total) * 100 : 0,
      }));

      // Find most common
      let maxCount = 0;
      let mostCommon = 'A';
      freqMap.forEach((count, char) => {
        if (count > maxCount) {
          maxCount = count;
          mostCommon = char;
        }
      });

      // Assume most common is 'E' (most common in German/English)
      const mostCommonIndex = alphabet.indexOf(mostCommon);
      const eIndex = alphabet.indexOf('E');
      const keyLetterIndex = (mostCommonIndex - eIndex + 26) % 26;
      const keyLetter = alphabet[keyLetterIndex];

      results.push({ mostCommon, keyLetter, groupText, frequencies });
    }

    frequencyResults.value = results;
    crackedKey.value = results.map(r => r.keyLetter).join('');

    // Automatically test the key
    applyCrackedKey();
  }

  function applyCrackedKey() {
    crackedPlaintext.value = vigenereDecrypt(crackCiphertext.value, crackedKey.value);
  }

  function loadExampleFromPublicTextFile() {
    // Use relative path - Vite will handle base URL automatically
    fetch('examples/vigenere_example.txt')
      .then(response => response.text())
      .then(text => {
        crackCiphertext.value = text.toUpperCase().replace(/[^A-Z]/g, '');
      })
      .catch(error => {
        console.error('Fehler beim Laden des Beispiels:', error);
        alert('Fehler beim Laden des Beispiels.');
      });
  }

  return {
    crackCiphertext,
    crackedKey,
    crackedPlaintext,
    frequencyResults,
    kasiskiRepeats,
    estimatedKeyLength,
    analyzeFrequencies,
    applyCrackedKey,
    loadExampleFromPublicTextFile,
  };
}
