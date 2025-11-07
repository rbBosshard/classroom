/**
 * Skytale Cipher Constants
 * Central location for all Skytale-related constants
 */

// Default values
export const DEFAULT_COLUMNS = 4;
export const DEFAULT_PLAINTEXT = "DIESISTEINGEHEIMNIS";

// Column constraints
export const MIN_COLUMNS = 2;
export const MAX_COLUMNS = 10;

// Animation timing (in milliseconds)
export const ANIMATION_DELAY = 300;

// Exercise answers
export const EXERCISES = {
  EXERCISE_1: {
    question: "HALLOWELT",
    columns: 3,
    answer: "HLEAOLLWT",
  },
  EXERCISE_2: {
    question: "WASASTESENTRLNNGDEKIU",
    columns: 4,
    answer: "WERDASLESENKANNISTGUT",
  },
  EXERCISE_3: {
    question: "VVVEIINDCIII",
    columns: 4,
    answer: "VENIVIDIVICI",
  },
} as const;

// Toblerone challenge
export const TOBLERONE = {
  TEXT: "DIEPERSERKOMMEN",
  COLUMNS: 3,
  ROWS: 5,
  GRID_SIZE: 15, // 3 × 5
} as const;

// Example messages for demonstration
export const EXAMPLE_MESSAGES = [
  "THIS IS SPARTA",
  "DIESISTEINGEHEIMNIS",
  "HALLOWELT",
  "GEHEIMBOTSCHAFT",
] as const;
