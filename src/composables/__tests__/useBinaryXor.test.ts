import { describe, it, expect } from 'vitest';
import { useBinaryXor } from '../useBinaryXor';

describe('useBinaryXor', () => {
  it('should initialize with default values', () => {
    const { input1, input2 } = useBinaryXor();

    expect(input1.value).toBe('1010');
    expect(input2.value).toBe('1100');
  });

  it('should compute XOR correctly', () => {
    const { input1, input2, result } = useBinaryXor();

    input1.value = '1010';
    input2.value = '1100';

    expect(result.value).toBe('0110');
  });

  it('should handle different length inputs', () => {
    const { input1, input2, result } = useBinaryXor();

    input1.value = '101';
    input2.value = '11001';

    // Should pad to equal length
    expect(result.value).toBe('11100');
  });

  it('should validate binary input correctly', () => {
    const { isValidBinary } = useBinaryXor();

    expect(isValidBinary('1010')).toBe(true);
    expect(isValidBinary('0000')).toBe(true);
    expect(isValidBinary('1111')).toBe(true);
    expect(isValidBinary('1012')).toBe(false);
    expect(isValidBinary('abc')).toBe(false);
    expect(isValidBinary('')).toBe(false);
  });

  it('should convert text to binary correctly', () => {
    const { textToBinary } = useBinaryXor();

    // 'A' = ASCII 65 = 01000001
    expect(textToBinary('A')).toBe('01000001');

    // 'AB' = 01000001 01000010
    expect(textToBinary('AB')).toBe('0100000101000010');
  });

  it('should convert binary to text correctly', () => {
    const { binaryToText } = useBinaryXor();

    // 01000001 = ASCII 65 = 'A'
    expect(binaryToText('01000001')).toBe('A');

    // 01000001 01000010 = 'AB'
    expect(binaryToText('0100000101000010')).toBe('AB');
  });

  it('should return empty string for invalid binary in binaryToText', () => {
    const { binaryToText } = useBinaryXor();

    expect(binaryToText('123')).toBe('');
    expect(binaryToText('abc')).toBe('');
  });

  it('should generate random key of specified length', () => {
    const { generateRandomKey, isValidBinary } = useBinaryXor();

    const key = generateRandomKey(16);

    expect(key.length).toBe(16);
    expect(isValidBinary(key)).toBe(true);
  });

  it('should reset to default values', () => {
    const { input1, input2, reset } = useBinaryXor();

    input1.value = '111111';
    input2.value = '000000';

    reset();

    expect(input1.value).toBe('1010');
    expect(input2.value).toBe('1100');
  });

  it('should handle XOR with all zeros', () => {
    const { xorBinary } = useBinaryXor();

    expect(xorBinary('1010', '0000')).toBe('1010');
    expect(xorBinary('0000', '1111')).toBe('1111');
  });

  it('should handle XOR with all ones', () => {
    const { xorBinary } = useBinaryXor();

    expect(xorBinary('1010', '1111')).toBe('0101');
    expect(xorBinary('1111', '1111')).toBe('0000');
  });

  it('should handle XOR symmetry (A XOR B = B XOR A)', () => {
    const { xorBinary } = useBinaryXor();

    const a = '1010';
    const b = '1100';

    expect(xorBinary(a, b)).toBe(xorBinary(b, a));
  });

  it('should handle XOR reversibility (A XOR B XOR B = A)', () => {
    const { xorBinary } = useBinaryXor();

    const a = '10101010';
    const b = '11001100';

    const encrypted = xorBinary(a, b);
    const decrypted = xorBinary(encrypted, b);

    expect(decrypted).toBe(a);
  });
});
