/**
 * Skytale Cipher Constants
 * Central location for all Skytale-related constants
 */

import type { Source } from '@/types/curriculum';

// Default values
export const DEFAULT_COLUMNS = 4;
export const DEFAULT_PLAINTEXT = 'DIESISTEINGEHEIMNIS';

// Column constraints
export const MIN_COLUMNS = 2;
export const MAX_COLUMNS = 10;

// Animation timing (in milliseconds)
export const ANIMATION_DELAY = 300;

// Exercise answers
export const EXERCISES = {
  EXERCISE_1: {
    question: 'HALLOWELT',
    columns: 3,
    answer: 'HLEAOLLWT',
  },
  EXERCISE_2: {
    question: 'WASASTESENTRLNNGDEKIU',
    columns: 4,
    answer: 'WERDASLESENKANNISTGUT',
  },
  EXERCISE_3: {
    question: 'VVVEIINDCIII',
    columns: 4,
    answer: 'VENIVIDIVICI',
  },
} as const;

// Toblerone challenge
export const TOBLERONE = {
  TEXT: 'DIEPERSERKOMMEN',
  COLUMNS: 3,
  ROWS: 5,
  GRID_SIZE: 15, // 3 × 5
} as const;

// Example messages for demonstration
export const EXAMPLE_MESSAGES = [
  'THIS IS SPARTA',
  'DIESISTEINGEHEIMNIS',
  'HALLOWELT',
  'GEHEIMBOTSCHAFT',
] as const;

/**
 * Quellenangaben für Skytale
 */
export const SKYTALE_SOURCES: Source[] = [
  {
    id: 'skytale-wikipedia',
    title: 'Skytale',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/Skytale',
    description: 'Artikel über die antike spartanische Verschlüsselungsmethode',
  },
  {
    id: 'transposition-cipher',
    title: 'Transpositionsverfahren',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/Transposition_(Kryptographie)',
    description: 'Übersicht über verschiedene Transpositionsverschlüsselungen',
  },
  {
    id: 'image-skytale-sparta',
    title: 'Skytale Sparta Illustration',
    type: 'image',
    description: 'Illustration der Skytale-Verschlüsselung',
    license: 'Fair Use für Bildungszwecke',
    url: 'https://data.it-markt.ch/194416_19.png',
  },
  {
    id: 'image-this-is-sparta',
    title: 'THIS IS SPARTA Geheimtext',
    type: 'image',
    description: 'Visualisierung des verschlüsselten Textes',
    license: 'Eigene Erstellung / Fair Use für Bildungszwecke',
    url: 'https://data.it-markt.ch/199539_10.png',
  },
  {
    id: 'image-toblerone',
    title: 'Toblerone Skytale-Aufgabe',
    type: 'image',
    description: 'Toblerone-Verpackung für Skytale-Übung',
    license: 'Fair Use für Bildungszwecke',
    url: 'https://shop.chocolatebash.com/cdn/shop/files/33.jpg?v=1725583891&width=1946',
  },
];
