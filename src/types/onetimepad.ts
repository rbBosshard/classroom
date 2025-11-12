export interface OneTimePadState {
  plaintext: string;
  key: string;
  ciphertext: string;
  mode: 'encrypt' | 'decrypt';
}

export interface KeyGenerationOptions {
  length: number;
  useLettersOnly?: boolean;
}

export interface SecurityAnalysis {
  keyLength: number;
  messageLength: number;
  keyReused: boolean;
  perfectlySecure: boolean;
  warnings: string[];
}
