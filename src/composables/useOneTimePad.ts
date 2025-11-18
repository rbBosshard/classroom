import { ref, computed } from 'vue';
import { useBinaryXor } from './useBinaryXor';

/**
 * Composable für One-Time-Pad Verschlüsselung
 */
export function useOneTimePad() {
  const { textToBinary, binaryToText, xorBinary, generateRandomKey } = useBinaryXor();

  const plaintext = ref('Hallo');
  const key = ref('');
  const mode = ref<'encrypt' | 'decrypt'>('encrypt');

  /**
   * Generiert einen zufälligen Schlüssel für den Plaintext
   */
  const generateKey = () => {
    const binaryPlaintext = textToBinary(plaintext.value);
    key.value = generateRandomKey(binaryPlaintext.length);
  };

  /**
   * Verschlüsselt den Plaintext mit dem Key
   */
  const encrypt = computed(() => {
    if (!plaintext.value || !key.value) return '';

    const binaryPlaintext = textToBinary(plaintext.value);

    // Key muss gleich lang sein wie Plaintext
    if (key.value.length !== binaryPlaintext.length) {
      return '';
    }

    return xorBinary(binaryPlaintext, key.value);
  });

  /**
   * Entschlüsselt den Ciphertext mit dem Key
   */
  const decrypt = (ciphertext: string, decryptKey: string): string => {
    if (!ciphertext || !decryptKey) return '';

    const decrypted = xorBinary(ciphertext, decryptKey);
    return binaryToText(decrypted);
  };

  /**
   * Zeigt Binary Representation des Plaintexts
   */
  const plaintextBinary = computed(() => {
    return textToBinary(plaintext.value);
  });

  /**
   * Konvertiert verschlüsselten Binary zu Text (zum Anzeigen)
   */
  const encryptedText = computed(() => {
    if (!encrypt.value) return '';
    return binaryToText(encrypt.value);
  });

  /**
   * Visualisierung: Bit-für-Bit XOR
   */
  const xorVisualization = computed(() => {
    const plain = plaintextBinary.value;
    const k = key.value;
    const enc = encrypt.value;

    if (!plain || !k || !enc) return [];

    const visualization = [];
    for (let i = 0; i < plain.length; i++) {
      visualization.push({
        plainBit: plain[i],
        keyBit: k[i],
        encryptedBit: enc[i],
        index: i,
      });
    }

    return visualization;
  });

  /**
   * Reset zu Default Werten
   */
  const reset = () => {
    plaintext.value = 'Hallo';
    key.value = '';
    mode.value = 'encrypt';
  };

  return {
    plaintext,
    key,
    mode,
    plaintextBinary,
    encrypt,
    encryptedText,
    decrypt,
    generateKey,
    xorVisualization,
    reset,
  };
}
