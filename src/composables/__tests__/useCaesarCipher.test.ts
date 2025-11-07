import { describe, it, expect, beforeEach } from "vitest";
import { useCaesarCipher } from "../useCaesarCipher";

describe("useCaesarCipher", () => {
  let cipher: ReturnType<typeof useCaesarCipher>;

  beforeEach(() => {
    cipher = useCaesarCipher();
  });

  describe("encrypt", () => {
    it("should encrypt simple text with shift 3", () => {
      cipher.shift.value = 3;
      expect(cipher.encrypt("ABC")).toBe("DEF");
    });

    it("should encrypt text with lowercase letters", () => {
      cipher.shift.value = 3;
      expect(cipher.encrypt("abc")).toBe("def");
    });

    it("should encrypt text with mixed case", () => {
      cipher.shift.value = 3;
      expect(cipher.encrypt("AbC")).toBe("DeF");
    });

    it("should handle wrap-around at end of alphabet", () => {
      cipher.shift.value = 3;
      expect(cipher.encrypt("XYZ")).toBe("ABC");
    });

    it("should preserve spaces and punctuation", () => {
      cipher.shift.value = 3;
      expect(cipher.encrypt("Hello, World!")).toBe("Khoor, Zruog!");
    });

    it("should handle shift of 0 (no change)", () => {
      cipher.shift.value = 0;
      expect(cipher.encrypt("ABC")).toBe("ABC");
    });

    it("should handle shift of 26 (full rotation)", () => {
      cipher.shift.value = 26;
      expect(cipher.encrypt("ABC")).toBe("ABC");
    });

    it("should encrypt German umlauts correctly", () => {
      cipher.shift.value = 3;
      // Non-alphabetic characters should remain unchanged
      expect(cipher.encrypt("Ä Ö Ü")).toBe("Ä Ö Ü");
    });

    it("should handle ROT13 (shift 13)", () => {
      cipher.shift.value = 13;
      expect(cipher.encrypt("HELLO")).toBe("URYYB");
    });

    it("should be reversible with decrypt", () => {
      cipher.shift.value = 7;
      const original = "TEST MESSAGE";
      const encrypted = cipher.encrypt(original);
      const decrypted = cipher.decrypt(encrypted);
      expect(decrypted).toBe(original);
    });
  });

  describe("decrypt", () => {
    it("should decrypt text correctly", () => {
      cipher.shift.value = 3;
      expect(cipher.decrypt("DEF")).toBe("ABC");
    });

    it("should handle wrap-around at beginning of alphabet", () => {
      cipher.shift.value = 3;
      expect(cipher.decrypt("ABC")).toBe("XYZ");
    });

    it("should decrypt complex message", () => {
      cipher.shift.value = 5;
      expect(cipher.decrypt("Mjqqt, Btwqi!")).toBe("Hello, World!");
    });
  });

  describe("caesarShift", () => {
    it("should shift text by positive amount", () => {
      expect(cipher.caesarShift("ABC", 5)).toBe("FGH");
    });

    it("should shift text by negative amount", () => {
      expect(cipher.caesarShift("DEF", -3)).toBe("ABC");
    });

    it("should handle empty string", () => {
      expect(cipher.caesarShift("", 5)).toBe("");
    });
  });

  describe("shiftedAlphabet", () => {
    it("should compute shifted alphabet correctly", () => {
      cipher.shift.value = 3;
      const shifted = cipher.shiftedAlphabet.value;
      expect(shifted[0]).toBe("D"); // A -> D
      expect(shifted[25]).toBe("C"); // Z -> C
    });

    it("should have correct length", () => {
      cipher.shift.value = 10;
      expect(cipher.shiftedAlphabet.value).toHaveLength(26);
    });

    it("should update reactively when shift changes", () => {
      cipher.shift.value = 1;
      const first = cipher.shiftedAlphabet.value[0];
      expect(first).toBe("B");

      cipher.shift.value = 2;
      const second = cipher.shiftedAlphabet.value[0];
      expect(second).toBe("C");
    });
  });

  describe("edge cases", () => {
    it("should handle very large shift values", () => {
      cipher.shift.value = 100; // Should wrap around
      const result = cipher.encrypt("A");
      expect(result).toMatch(/^[A-Z]$/); // Should still be a valid letter
    });

    it("should handle numbers in text", () => {
      cipher.shift.value = 5;
      expect(cipher.encrypt("Test123")).toBe("Yjxy123");
    });

    it("should handle special characters", () => {
      cipher.shift.value = 3;
      expect(cipher.encrypt("Hello@#$%")).toBe("Khoor@#$%");
    });

    it("should handle empty input", () => {
      cipher.shift.value = 5;
      expect(cipher.encrypt("")).toBe("");
      expect(cipher.decrypt("")).toBe("");
    });

    it("should handle single character", () => {
      cipher.shift.value = 1;
      expect(cipher.encrypt("A")).toBe("B");
      expect(cipher.decrypt("B")).toBe("A");
    });
  });
});
