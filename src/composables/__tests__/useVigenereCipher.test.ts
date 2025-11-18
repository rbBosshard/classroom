import { describe, it, expect, beforeEach } from "vitest";
import { useVigenereCipher } from "../useVigenereCipher";

describe("useVigenereCipher", () => {
  let cipher: ReturnType<typeof useVigenereCipher>;

  beforeEach(() => {
    cipher = useVigenereCipher();
  });

  describe("vigenereEncrypt", () => {
    it("should encrypt with simple key", () => {
      const result = cipher.vigenereEncrypt("HELLO", "KEY");
      expect(result).toBe("RIJVS");
    });

    it("should handle lowercase input (converts to uppercase)", () => {
      const result = cipher.vigenereEncrypt("hello", "KEY");
      expect(result).toBe("RIJVS");
    });

    it("should preserve spaces and punctuation", () => {
      const result = cipher.vigenereEncrypt("HELLO WORLD!", "KEY");
      expect(result).toBe("RIJVS UYVJN!");
    });

    it("should handle empty key", () => {
      const result = cipher.vigenereEncrypt("HELLO", "");
      expect(result).toBe("HELLO");
    });

    it("should handle single character key", () => {
      const result = cipher.vigenereEncrypt("HELLO", "A");
      expect(result).toBe("HELLO"); // Shift by 0
    });

    it("should handle classic example ATTACKATDAWN with LEMON", () => {
      const result = cipher.vigenereEncrypt("ATTACKATDAWN", "LEMON");
      expect(result).toBe("LXFOPVEFRNHR");
    });
  });

  describe("vigenereDecrypt", () => {
    it("should decrypt correctly", () => {
      const encrypted = cipher.vigenereEncrypt("HELLO", "KEY");
      const decrypted = cipher.vigenereDecrypt(encrypted, "KEY");
      expect(decrypted).toBe("HELLO");
    });

    it("should handle complex messages", () => {
      const original = "THIS IS A SECRET MESSAGE";
      const encrypted = cipher.vigenereEncrypt(original, "SECRET");
      const decrypted = cipher.vigenereDecrypt(encrypted, "SECRET");
      expect(decrypted).toBe(original);
    });

    it("should decrypt classic example", () => {
      const decrypted = cipher.vigenereDecrypt("LXFOPVEFRNHR", "LEMON");
      expect(decrypted).toBe("ATTACKATDAWN");
    });
  });

  describe("encryptChar and decryptChar", () => {
    it("should encrypt single character", () => {
      expect(cipher.encryptChar("H", "K")).toBe("R");
      expect(cipher.encryptChar("E", "E")).toBe("I");
    });

    it("should decrypt single character", () => {
      expect(cipher.decryptChar("R", "K")).toBe("H");
      expect(cipher.decryptChar("I", "E")).toBe("E");
    });

    it("should preserve non-alphabetic characters", () => {
      expect(cipher.encryptChar("!", "K")).toBe("!");
      expect(cipher.decryptChar("5", "K")).toBe("5");
    });
  });

  describe("encryption/decryption symmetry", () => {
    it("should be reversible", () => {
      const testCases = [
        { key: "KEY", text: "HELLO" },
        { key: "LEMON", text: "ATTACKATDAWN" },
        { key: "SECRET", text: "THE QUICK BROWN FOX" },
      ];

      testCases.forEach(({ key, text }) => {
        const encrypted = cipher.vigenereEncrypt(text, key);
        const decrypted = cipher.vigenereDecrypt(encrypted, key);
        expect(decrypted).toBe(text);
      });
    });
  });

  describe("edge cases", () => {
    it("should handle empty text", () => {
      expect(cipher.vigenereEncrypt("", "KEY")).toBe("");
    });

    it("should handle text with only spaces", () => {
      expect(cipher.vigenereEncrypt("   ", "KEY")).toBe("   ");
    });

    it("should handle numbers", () => {
      const result = cipher.vigenereEncrypt("HELLO123", "KEY");
      expect(result).toContain("123");
    });

    it("should handle special characters", () => {
      const result = cipher.vigenereEncrypt("HELLO@#$", "KEY");
      expect(result).toBe("RIJVS@#$");
    });
  });
});
