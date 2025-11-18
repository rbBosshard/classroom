/**
 * Types für moderne Verschlüsselung
 */

export interface BinaryXorState {
  input1: string;
  input2: string;
  result: string;
}

export interface OneTimePadState {
  plaintext: string;
  key: string;
  ciphertext: string;
}

export interface ImageXorState {
  originalImage: number[][]; // 2D Array für Schwarz-Weiss Pixel
  keyImage: number[][];
  encryptedImage: number[][];
}
