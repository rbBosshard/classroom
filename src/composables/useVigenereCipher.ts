import { ref, computed } from "vue";
import { VIGENERE_ALPHABET } from "@/constants/vigenere";

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

    let result = "";
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

    let result = "";
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
      .split("")
      .map((char) => {
        if (/[A-Z]/.test(char)) {
          const index = alphabet.indexOf(char);
          return alphabet[(index + shift) % 26];
        }
        return char;
      })
      .join("");
  }

  // Get color class for key visualization
  function getKeyColorClass(index: number, keyLength: number): string {
    const colors = [
      "bg-purple-200 text-purple-800",
      "bg-blue-200 text-blue-800",
      "bg-green-200 text-green-800",
      "bg-yellow-200 text-yellow-800",
      "bg-pink-200 text-pink-800",
      "bg-indigo-200 text-indigo-800",
    ];
    return colors[(index % keyLength) % colors.length];
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
  };
}

// Kasiski Test functionality
export function useKasiskiTest() {
  const crackCiphertext = ref("");
  const crackedKey = ref("");
  const crackedPlaintext = ref("");
  const frequencyResults = ref<
    Array<{ mostCommon: string; keyLetter: string }>
  >([]);

  const { vigenereDecrypt } = useVigenereCipher();
  const alphabet = VIGENERE_ALPHABET;

  const kasiskiRepeats = computed(() => {
    const text = crackCiphertext.value.toUpperCase().replace(/[^A-Z]/g, "");
    if (text.length < 6) return [];

    const sequences = new Map<string, number[]>();
    const maxLen = Math.min(8, text.length - 1);

    // 🧩 Schritt 1: alle Sequenzen aller Längen sammeln
    for (let len = 3; len <= maxLen; len++) {
      for (let i = 0; i <= text.length - len; i++) {
        const seq = text.substring(i, i + len);
        const arr = sequences.get(seq);
        if (arr) arr.push(i);
        else sequences.set(seq, [i]);
      }
    }

    const results: Array<{
      sequence: string;
      positions: number[];
      spacings: number[];
      factors: number[];
    }> = [];

    // 🧩 Schritt 2: nur Sequenzen mit mehrfachen Vorkommen behalten
    for (const [sequence, positions] of sequences.entries()) {
      if (positions.length < 2) continue;

      // Alle Distanzen zwischen allen Paaren von Positionen
      const spacings: number[] = [];
      for (let i = 0; i < positions.length - 1; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          spacings.push(positions[j] - positions[i]);
        }
      }

      // Faktoren (2–20)
      const factors = [
        ...new Set(
          spacings.flatMap((spacing) =>
            Array.from({ length: 19 }, (_, k) => k + 2).filter(
              (f) => spacing % f === 0
            )
          )
        ),
      ].sort((a, b) => a - b);

      results.push({ sequence, positions, spacings, factors });
    }

    // 🧩 Schritt 3: längere Sequenzen bevorzugen, aber alle behalten
    results.sort(
      (a, b) =>
        b.sequence.length - a.sequence.length ||
        b.positions.length - a.positions.length
    );

    // 🧩 Schritt 4: überlappende Duplikate filtern (optional)
    const uniqueResults: typeof results = [];
    const seen = new Set<string>();
    for (const res of results) {
      const key = `${res.sequence}:${res.positions.join(",")}`;
      if (!seen.has(key)) {
        uniqueResults.push(res);
        seen.add(key);
      }
    }

    return uniqueResults;
  });

  // Estimate key length from factor frequency
  const estimatedKeyLength = computed(() => {
    if (kasiskiRepeats.value.length === 0) return 0;

    const factorCounts = new Map<number, number>();

    kasiskiRepeats.value.forEach((repeat) => {
      repeat.factors.forEach((factor) => {
        factorCounts.set(factor, (factorCounts.get(factor) || 0) + 1);
      });
    });

    let mostFrequentFactor = 0;
    let maxCount = 0;

    factorCounts.forEach((count, factor) => {
      if (factor === 1) return;

      if (
        count > maxCount ||
        (count === maxCount && factor > mostFrequentFactor)
      ) {
        maxCount = count;
        mostFrequentFactor = factor;
      }
    });

    return mostFrequentFactor;
  });

  // Frequency analysis to crack the key
  function analyzeFrequencies() {
    const text = crackCiphertext.value;
    const keyLen = estimatedKeyLength.value;

    if (keyLen === 0 || text.length < keyLen * 3) {
      frequencyResults.value = [];
      return;
    }

    const results: Array<{ mostCommon: string; keyLetter: string }> = [];

    // Split into groups based on key length
    for (let offset = 0; offset < keyLen; offset++) {
      const group: string[] = [];
      for (let i = offset; i < text.length; i += keyLen) {
        if (/[A-Z]/.test(text[i])) {
          group.push(text[i]);
        }
      }

      // Count frequencies
      const freq = new Map<string, number>();
      group.forEach((char) => {
        freq.set(char, (freq.get(char) || 0) + 1);
      });

      // Find most common
      let maxCount = 0;
      let mostCommon = "A";
      freq.forEach((count, char) => {
        if (count > maxCount) {
          maxCount = count;
          mostCommon = char;
        }
      });

      // Assume most common is 'E' (most common in German/English)
      const mostCommonIndex = alphabet.indexOf(mostCommon);
      const eIndex = alphabet.indexOf("E");
      const keyLetterIndex = (mostCommonIndex - eIndex + 26) % 26;
      const keyLetter = alphabet[keyLetterIndex];

      results.push({ mostCommon, keyLetter });
    }

    frequencyResults.value = results;
    crackedKey.value = results.map((r) => r.keyLetter).join("");
  }

  function applyCrackedKey() {
    crackedPlaintext.value = vigenereDecrypt(
      crackCiphertext.value,
      crackedKey.value
    );
  }

  function loadExampleFromPublicTextFile() {
    fetch("/examples/vigenere_example.txt")
      .then((response) => response.text())
      .then((text) => {
        crackCiphertext.value = text.toUpperCase().replace(/[^A-Z]/g, "");
      })
      .catch(() => {
        alert("Fehler beim Laden des Beispiels.");
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
