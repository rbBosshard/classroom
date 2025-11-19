/**
 * Caesar Cipher Constants
 * Central location for all Caesar-related constants
 */

import type { Source } from '@/types/curriculum';

export const CIPHER_MODE = {
  ENCRYPT: 'encrypt',
  DECRYPT: 'decrypt',
} as const;

export type CipherMode = (typeof CIPHER_MODE)[keyof typeof CIPHER_MODE];

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const ALPHABET_SIZE = 26;

export const QUICK_SHIFT_VALUES = [1, 3, 13, 25] as const;

export const EXAMPLE_MESSAGES = [
  'GEHEIME NACHRICHT',
  'CAESAR IST TOLL',
  'KRYPTOGRAFIE',
  'HALLO WELT',
] as const;

export const CHALLENGE_WORDS = [
  'GEHEIM',
  'CAESAR',
  'CODE',
  'HILFE',
  'ERFOLG',
  'SICHER',
  'KLASSE',
] as const;

export const CHALLENGE_SHIFTS = [1, 2, 3, 4, 5, 13] as const;

export const INITIAL_DEMO_TEXT = 'HALLO WELT';

export const INITIAL_SHIFT = 3;

export const WHEEL_CONFIG = {
  CENTER_X: 130,
  CENTER_Y: 130,
  INNER_RADIUS: 40,
  INNER_LETTER_RADIUS: 60,
  OUTER_INNER_RADIUS: 85,
  OUTER_LETTER_RADIUS: 105,
  OUTER_RADIUS: 125,
  ANGLE_PER_SEGMENT: 360 / ALPHABET_SIZE,
} as const;

/**
 * Quellenangaben für Caesar-Verschlüsselung
 */
export const CAESAR_SOURCES: Source[] = [
  {
    id: 'caesar-wikipedia',
    title: 'Caesar-Verschlüsselung',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/Caesar-Verschl%C3%BCsselung',
    description: 'Wikipedia',
  },
  {
    id: 'caesar-cryptool',
    title: 'cryptii - Online Verschlüsselung-Tool',
    type: 'website',
    url: 'https://cryptii.com/',
    description: 'Interaktives Lernwerkzeug für Kryptologie',
  },
  {
    id: 'caesar-cryptool',
    title: 'CrypTool - Caesar-Verschlüsselung',
    type: 'website',
    url: 'https://www.cryptool.org/de/cto/caesar/',
    description: 'Interaktives Lernwerkzeug für Kryptologie',
  },
];
