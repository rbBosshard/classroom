import { describe, it, expect } from 'vitest';
import { useOneTimePad } from '../useOneTimePad';

describe('useOneTimePad', () => {
  it('should initialize with default values', () => {
    const { plaintext, key, mode } = useOneTimePad();

    expect(plaintext.value).toBe('Hallo');
    expect(key.value).toBe('');
    expect(mode.value).toBe('encrypt');
  });

  it('should convert plaintext to binary', () => {
    const { plaintext, plaintextBinary } = useOneTimePad();

    plaintext.value = 'A';

    // 'A' = ASCII 65 = 01000001
    expect(plaintextBinary.value).toBe('01000001');
  });

  it('should generate a key of correct length', () => {
    const { plaintext, key, generateKey, plaintextBinary } = useOneTimePad();

    plaintext.value = 'HELLO';
    generateKey();

    // Key should be same length as binary plaintext
    expect(key.value.length).toBe(plaintextBinary.value.length);
  });

  it('should encrypt plaintext with XOR', () => {
    const { plaintext, key, encrypt, plaintextBinary } = useOneTimePad();

    plaintext.value = 'A';
    key.value = '11111111'; // All 1s will flip all bits

    const plainBinary = plaintextBinary.value; // 01000001
    const encrypted = encrypt.value; // Should be 10111110

    expect(encrypted.length).toBe(plainBinary.length);
    expect(encrypted).toBe('10111110');
  });

  it('should return empty string if key length does not match', () => {
    const { plaintext, key, encrypt } = useOneTimePad();

    plaintext.value = 'HELLO';
    key.value = '1010'; // Too short

    expect(encrypt.value).toBe('');
  });

  it('should decrypt correctly with same key', () => {
    const { plaintext, key, generateKey, encrypt, decrypt } = useOneTimePad();

    plaintext.value = 'TEST';
    generateKey();

    const encrypted = encrypt.value;
    const decrypted = decrypt(encrypted, key.value);

    expect(decrypted).toBe('TEST');
  });

  it('should handle OTP encryption/decryption symmetry', () => {
    const { plaintext, key, encrypt, decrypt } = useOneTimePad();

    plaintext.value = 'HELLO';
    key.value = '1010101010101010101010101010101010101010'; // 40 bits for 5 chars

    const encrypted = encrypt.value;
    const decrypted = decrypt(encrypted, key.value);

    expect(decrypted).toBe('HELLO');
  });

  it('should provide XOR visualization data', () => {
    const { plaintext, key, xorVisualization } = useOneTimePad();

    plaintext.value = 'A';
    key.value = '10101010'; // 8 bits for 1 char

    const viz = xorVisualization.value;

    expect(viz.length).toBe(8);
    expect(viz[0]).toHaveProperty('plainBit');
    expect(viz[0]).toHaveProperty('keyBit');
    expect(viz[0]).toHaveProperty('encryptedBit');
    expect(viz[0]).toHaveProperty('index');
  });

  it('should reset to default values', () => {
    const { plaintext, key, mode, reset } = useOneTimePad();

    plaintext.value = 'CHANGED';
    key.value = '11110000';
    mode.value = 'decrypt';

    reset();

    expect(plaintext.value).toBe('Hallo');
    expect(key.value).toBe('');
    expect(mode.value).toBe('encrypt');
  });

  it('should handle empty plaintext', () => {
    const { plaintext, plaintextBinary } = useOneTimePad();

    plaintext.value = '';

    expect(plaintextBinary.value).toBe('');
  });

  it('should demonstrate OTP perfect secrecy property', () => {
    const { plaintext, generateKey, encrypt } = useOneTimePad();

    plaintext.value = 'SECRET';
    generateKey();

    const encrypted1 = encrypt.value;

    // Different plaintext, same key length
    plaintext.value = 'PUBLIC';
    generateKey();

    const encrypted2 = encrypt.value;

    // Both encrypted texts should have same length
    expect(encrypted1.length).toBe(encrypted2.length);

    // Without the key, you cannot distinguish which plaintext was encrypted
    // (This is the "perfect secrecy" property of OTP)
  });

  it('should handle XOR bit-by-bit correctly in visualization', () => {
    const { plaintext, key, xorVisualization } = useOneTimePad();

    plaintext.value = 'A'; // 01000001
    key.value = '10101010';

    const viz = xorVisualization.value;

    // Check first bit: 0 XOR 1 = 1
    expect(viz[0].plainBit).toBe('0');
    expect(viz[0].keyBit).toBe('1');
    expect(viz[0].encryptedBit).toBe('1');

    // Check second bit: 1 XOR 0 = 1
    expect(viz[1].plainBit).toBe('1');
    expect(viz[1].keyBit).toBe('0');
    expect(viz[1].encryptedBit).toBe('1');
  });
});
