import { ref, computed } from 'vue';
import type { OneTimePadState, KeyGenerationOptions, SecurityAnalysis } from '@/types/onetimepad';

/**
 * Composable für One-Time-Pad Verschlüsselung
 */
export function useOneTimePad() {
  const state = ref<OneTimePadState>({
    plaintext: '',
    key: '',
    ciphertext: '',
    mode: 'encrypt',
  });

  /**
   * Konvertiert einen String in Binär-String
   */
  function stringToBinary(text: string): string {
    return text
      .split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join('');
  }

  /**
   * Konvertiert Binär-String zurück zu String
   */
  function binaryToString(binary: string): string {
    const bytes = binary.match(/.{8}/g) || [];
    return bytes.map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
  }

  /**
   * XOR-Operation auf zwei Binär-Strings
   */
  function xorBinary(bin1: string, bin2: string): string {
    const length = Math.min(bin1.length, bin2.length);
    let result = '';
    for (let i = 0; i < length; i++) {
      result += bin1[i] === bin2[i] ? '0' : '1';
    }
    return result;
  }

  /**
   * Verschlüsselt einen Text mit einem Schlüssel (XOR)
   */
  function encrypt(plaintext: string, key: string): string {
    if (!plaintext || !key) return '';
    // Warnung wird im securityAnalysis computed angezeigt

    const plaintextBinary = stringToBinary(plaintext);
    const keyBinary = stringToBinary(key).slice(0, plaintextBinary.length);
    const ciphertextBinary = xorBinary(plaintextBinary, keyBinary);

    return binaryToString(ciphertextBinary);
  }

  /**
   * Entschlüsselt einen verschlüsselten Text (identisch zur Verschlüsselung bei XOR)
   */
  function decrypt(ciphertext: string, key: string): string {
    return encrypt(ciphertext, key); // XOR ist seine eigene Umkehrung
  }

  /**
   * Generiert einen zufälligen Schlüssel
   */
  function generateRandomKey(options: KeyGenerationOptions): string {
    const { length, useLettersOnly = false } = options;
    let key = '';

    if (useLettersOnly) {
      // Nur Buchstaben A-Z
      for (let i = 0; i < length; i++) {
        key += String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    } else {
      // ASCII Zeichen 32-126 (druckbare Zeichen)
      for (let i = 0; i < length; i++) {
        key += String.fromCharCode(32 + Math.floor(Math.random() * 95));
      }
    }

    return key;
  }

  /**
   * Konvertiert Text in Hex für bessere Lesbarkeit
   */
  function stringToHex(text: string): string {
    return text
      .split('')
      .map(char => char.charCodeAt(0).toString(16).padStart(2, '0').toUpperCase())
      .join(' ');
  }

  /**
   * Analysiert die Sicherheit der aktuellen Konfiguration
   */
  const securityAnalysis = computed<SecurityAnalysis>(() => {
    const keyLength = state.value.key.length;
    const messageLength = state.value.plaintext.length;
    const warnings: string[] = [];
    let perfectlySecure = true;

    if (keyLength < messageLength) {
      warnings.push('⚠️ Schlüssel ist kürzer als die Nachricht!');
      perfectlySecure = false;
    }

    if (keyLength === 0) {
      warnings.push('⚠️ Kein Schlüssel vorhanden!');
      perfectlySecure = false;
    }

    if (messageLength === 0) {
      warnings.push('⚠️ Keine Nachricht vorhanden!');
      perfectlySecure = false;
    }

    // Prüfe auf wiederholende Muster im Schlüssel (vereinfachte Prüfung)
    if (keyLength > 10) {
      const chunk = state.value.key.slice(0, Math.floor(keyLength / 2));
      if (state.value.key.includes(chunk, chunk.length)) {
        warnings.push('⚠️ Der Schlüssel enthält wiederholende Muster!');
        perfectlySecure = false;
      }
    }

    return {
      keyLength,
      messageLength,
      keyReused: false, // Diese Info müsste aus einem externen State kommen
      perfectlySecure: perfectlySecure && keyLength === messageLength,
      warnings,
    };
  });

  /**
   * Verschlüsselt den aktuellen Plaintext
   */
  function encryptCurrent() {
    if (!state.value.plaintext || !state.value.key) {
      return;
    }
    state.value.ciphertext = encrypt(state.value.plaintext, state.value.key);
    state.value.mode = 'encrypt';
  }

  /**
   * Entschlüsselt den aktuellen Ciphertext
   */
  function decryptCurrent() {
    if (!state.value.ciphertext || !state.value.key) {
      return;
    }
    state.value.plaintext = decrypt(state.value.ciphertext, state.value.key);
    state.value.mode = 'decrypt';
  }

  /**
   * Generiert einen neuen Schlüssel basierend auf der Textlänge
   */
  function generateKeyForText(useLettersOnly = false) {
    const length = Math.max(state.value.plaintext.length, 1);
    state.value.key = generateRandomKey({ length, useLettersOnly });
  }

  /**
   * Setzt den State zurück
   */
  function reset() {
    state.value = {
      plaintext: '',
      key: '',
      ciphertext: '',
      mode: 'encrypt',
    };
  }

  /**
   * Demonstriert die Wiederverwendung eines Schlüssels (Sicherheitsproblem)
   */
  function demonstrateKeyReuse(message1: string, message2: string, key: string) {
    const cipher1 = encrypt(message1, key);
    const cipher2 = encrypt(message2, key);

    // XOR der beiden Ciphertexte eliminiert den Schlüssel
    const cipher1Binary = stringToBinary(cipher1);
    const cipher2Binary = stringToBinary(cipher2);
    const xorResult = xorBinary(cipher1Binary, cipher2Binary);

    // Das Ergebnis ist: message1 XOR message2
    const message1Binary = stringToBinary(message1);
    const message2Binary = stringToBinary(message2);
    const directXor = xorBinary(message1Binary, message2Binary);

    return {
      cipher1,
      cipher2,
      cipher1Hex: stringToHex(cipher1),
      cipher2Hex: stringToHex(cipher2),
      xorOfCiphers: xorResult,
      xorOfMessages: directXor,
      areEqual: xorResult === directXor,
    };
  }

  return {
    state,
    encrypt,
    decrypt,
    encryptCurrent,
    decryptCurrent,
    generateRandomKey,
    generateKeyForText,
    stringToBinary,
    binaryToString,
    stringToHex,
    xorBinary,
    securityAnalysis,
    reset,
    demonstrateKeyReuse,
  };
}
