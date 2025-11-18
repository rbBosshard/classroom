import { ref, computed, type Ref, type ComputedRef } from "vue";
import { ALPHABET, ALPHABET_SIZE } from "@/constants/caesar";

interface UseCaesarCipherReturn {
  alphabet: string[];
  shift: Ref<number>;
  shiftedAlphabet: ComputedRef<string[]>;
  encrypt: (text: string) => string;
  decrypt: (text: string) => string;
  caesarShift: (text: string, shiftAmount: number) => string;
}

const CHAR_CODE_A = 65;

/**
 * Caesar Cipher Composable
 * Provides encryption/decryption functionality for Caesar cipher
 */
export function useCaesarCipher(): UseCaesarCipherReturn {
  const shift = ref(0);

  /**
   * Computed shifted alphabet based on current shift value
   */
  const shiftedAlphabet = computed(() =>
    ALPHABET.map((_, index) => {
      const newIndex = (index + shift.value) % ALPHABET_SIZE;
      return ALPHABET[newIndex];
    })
  );

  /**
   * Shifts a single character by the given amount
   * @param char - Character to shift
   * @param shiftAmount - Amount to shift (can be negative)
   * @returns Shifted character or original if not alphabetic
   */
  function shiftCharacter(char: string, shiftAmount: number): string {
    if (!char.match(/[a-zA-Z]/)) {
      return char;
    }

    const isUpperCase = char === char.toUpperCase();
    const charCode = char.toUpperCase().charCodeAt(0);
    const shifted =
      ((((charCode - CHAR_CODE_A + shiftAmount) % ALPHABET_SIZE) +
        ALPHABET_SIZE) %
        ALPHABET_SIZE) +
      CHAR_CODE_A;
    const result = String.fromCharCode(shifted);

    return isUpperCase ? result : result.toLowerCase();
  }

  /**
   * Applies Caesar shift to entire text
   * @param text - Text to shift
   * @param shiftAmount - Amount to shift
   * @returns Shifted text
   */
  function caesarShift(text: string, shiftAmount: number): string {
    return text
      .split("")
      .map((char) => shiftCharacter(char, shiftAmount))
      .join("");
  }

  /**
   * Encrypts text using current shift value
   */
  function encrypt(text: string): string {
    return caesarShift(text, shift.value);
  }

  /**
   * Decrypts text using current shift value
   */
  function decrypt(text: string): string {
    return caesarShift(text, -shift.value);
  }

  return {
    alphabet: ALPHABET,
    shift,
    shiftedAlphabet,
    encrypt,
    decrypt,
    caesarShift,
  };
}
