/**
 * Constants für moderne Verschlüsselung
 */

import type { Source } from '@/types/curriculum';

export const BINARY_XOR_EXAMPLES = [
  {
    title: 'Einfache XOR Operation',
    input1: '1010',
    input2: '1100',
    description: 'XOR vergleicht jedes Bit-Paar: gleich = 0, unterschiedlich = 1',
  },
  {
    title: 'XOR mit Schlüssel',
    input1: '11001010',
    input2: '10101111',
    description: 'XOR wird in der Kryptographie zum Verschlüsseln verwendet',
  },
];

export const OTP_FACTS = [
  'One-Time-Pad ist mathematisch beweisbar unknackbar',
  'Der Schlüssel muss genauso lang sein wie die Nachricht',
  'Jeder Schlüssel darf nur einmal verwendet werden',
  'Die Schlüssel müssen wirklich zufällig sein',
];

export const AES_FACTS = [
  {
    title: 'Block Cipher',
    description: 'AES verarbeitet Daten in Blöcken von 128 Bit',
  },
  {
    title: 'Schlüssellängen',
    description: 'AES unterstützt 128, 192 oder 256 Bit Schlüssel',
  },
  {
    title: 'Standard',
    description: 'AES ist der weltweite Standard seit 2001',
  },
  {
    title: 'Verwendung',
    description: 'HTTPS, WLAN (WPA2/WPA3), verschlüsselte Festplatten, etc.',
  },
];

/**
 * Quellenangaben für moderne Kryptographie
 */
export const MODERN_CRYPTO_SOURCES: Source[] = [
  {
    id: 'one-time-pad-wikipedia',
    title: 'One-Time-Pad',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/One-Time-Pad',
    description: 'Artikel über die unknackbare Verschlüsselungsmethode',
  },
  {
    id: 'aes-wikipedia',
    title: 'Advanced Encryption Standard',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/Advanced_Encryption_Standard',
    description: 'Umfassender Artikel zum AES-Standard',
  },
];
