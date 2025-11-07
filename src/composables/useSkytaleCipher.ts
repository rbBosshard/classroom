import { ref, computed, type Ref, type ComputedRef } from "vue";
import { DEFAULT_COLUMNS, DEFAULT_PLAINTEXT } from "@/constants/skytale";

interface UseSkytaleCipherReturn {
  columns: Ref<number>;
  plaintext: Ref<string>;
  plaintextClean: ComputedRef<string>;
  gridCells: ComputedRef<string[]>;
  ciphertext: ComputedRef<string>;
  encrypt: (text: string, cols: number) => string;
  decrypt: (cipher: string, cols: number) => string;
}

/**
 * Skytale Cipher Composable
 * Provides encryption/decryption functionality for Skytale (columnar transposition)
 *
 * The Skytale is one of the oldest known encryption methods, used by ancient Spartans.
 * It's a transposition cipher that rearranges the letters rather than substituting them.
 */
export function useSkytaleCipher(): UseSkytaleCipherReturn {
  const columns = ref(DEFAULT_COLUMNS);
  const plaintext = ref(DEFAULT_PLAINTEXT);

  /**
   * Clean text by removing spaces and non-alphabetic characters
   */
  const plaintextClean = computed(() => {
    return plaintext.value.toUpperCase().replace(/[^A-Z]/g, "");
  });

  /**
   * Generate grid cells for visualization
   * Text is written row by row into a grid with n columns
   */
  const gridCells = computed(() => {
    const text = plaintextClean.value;
    const cols = columns.value;
    const rows = Math.ceil(text.length / cols);
    const cells: string[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const index = row * cols + col;
        cells.push(text[index] || "");
      }
    }

    return cells;
  });

  /**
   * Encrypted ciphertext
   * Read column by column from the grid
   */
  const ciphertext = computed(() => {
    return encrypt(plaintextClean.value, columns.value);
  });

  /**
   * Encrypt text using Skytale method
   * @param text - Text to encrypt (should be cleaned)
   * @param cols - Number of columns
   * @returns Encrypted ciphertext
   */
  function encrypt(text: string, cols: number): string {
    if (!text) return "";

    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
    const rows = Math.ceil(cleanText.length / cols);
    let cipher = "";

    // Read column by column
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const index = row * cols + col;
        if (index < cleanText.length) {
          cipher += cleanText[index];
        }
      }
    }

    return cipher;
  }

  /**
   * Decrypt ciphertext using Skytale method
   * @param cipher - Ciphertext to decrypt
   * @param cols - Number of columns (key)
   * @returns Decrypted plaintext
   */
  function decrypt(cipher: string, cols: number): string {
    if (!cipher) return "";

    const cleanCipher = cipher.toUpperCase().replace(/[^A-Z]/g, "");
    const rows = Math.ceil(cleanCipher.length / cols);
    const grid: string[][] = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(""));

    // Calculate how many columns are completely filled
    const fullCols = cleanCipher.length % cols || cols;

    // Fill grid column by column
    let cipherIndex = 0;
    for (let col = 0; col < cols; col++) {
      const maxRowsForThisCol =
        col < fullCols || fullCols === cols ? rows : rows - 1;
      for (let row = 0; row < maxRowsForThisCol; row++) {
        if (cipherIndex < cleanCipher.length) {
          grid[row][col] = cleanCipher[cipherIndex++];
        }
      }
    }

    // Read grid row by row
    let decrypted = "";
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        decrypted += grid[row][col];
      }
    }

    return decrypted;
  }

  return {
    columns,
    plaintext,
    plaintextClean,
    gridCells,
    ciphertext,
    encrypt,
    decrypt,
  };
}
