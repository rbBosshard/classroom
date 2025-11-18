import { ref, computed } from 'vue';

/**
 * Composable für Binary XOR Operationen
 */
export function useBinaryXor() {
  const input1 = ref('1010');
  const input2 = ref('1100');

  /**
   * Validiert Binary Input (nur 0 und 1 erlaubt)
   */
  const isValidBinary = (str: string): boolean => {
    return /^[01]+$/.test(str);
  };

  /**
   * Führt XOR Operation auf zwei Binary Strings aus
   */
  const xorBinary = (bin1: string, bin2: string): string => {
    if (!isValidBinary(bin1) || !isValidBinary(bin2)) {
      return '';
    }

    // Padding auf gleiche Länge
    const maxLength = Math.max(bin1.length, bin2.length);
    const paddedBin1 = bin1.padStart(maxLength, '0');
    const paddedBin2 = bin2.padStart(maxLength, '0');

    let result = '';
    for (let i = 0; i < maxLength; i++) {
      const bit1 = paddedBin1[i] === '1' ? 1 : 0;
      const bit2 = paddedBin2[i] === '1' ? 1 : 0;
      result += (bit1 ^ bit2).toString();
    }

    return result;
  };

  /**
   * Berechnet XOR Ergebnis
   */
  const result = computed(() => {
    return xorBinary(input1.value, input2.value);
  });

  /**
   * Konvertiert Text zu Binary
   */
  const textToBinary = (text: string): string => {
    return text
      .split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join('');
  };

  /**
   * Konvertiert Binary zu Text
   */
  const binaryToText = (binary: string): string => {
    if (!isValidBinary(binary)) return '';

    const bytes = binary.match(/.{1,8}/g) || [];
    return bytes.map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
  };

  /**
   * Generiert zufälligen Binary Key
   */
  const generateRandomKey = (length: number): string => {
    let key = '';
    for (let i = 0; i < length; i++) {
      key += Math.random() < 0.5 ? '0' : '1';
    }
    return key;
  };

  /**
   * Reset zu Default Werten
   */
  const reset = () => {
    input1.value = '1010';
    input2.value = '1100';
  };

  return {
    input1,
    input2,
    result,
    xorBinary,
    isValidBinary,
    textToBinary,
    binaryToText,
    generateRandomKey,
    reset,
  };
}
