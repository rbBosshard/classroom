/**
 * Constants für asymmetrische Verschlüsselung
 */

import type { Source } from '@/types/curriculum';

/**
 * Probleme der symmetrischen Kryptographie
 */
export const KEY_DISTRIBUTION_SCENARIOS = [
  {
    title: 'Zwei Personen',
    users: 2,
    keys: 1,
    description: 'Alice und Bob brauchen 1 gemeinsamen Schlüssel',
  },
  {
    title: 'Drei Personen',
    users: 3,
    keys: 3,
    description: 'Alice, Bob und Charlie brauchen 3 verschiedene Schlüssel',
  },
  {
    title: 'Zehn Personen',
    users: 10,
    keys: 45,
    description: '10 Personen brauchen bereits 45 verschiedene Schlüssel!',
  },
  {
    title: '100 Personen',
    users: 100,
    keys: 4950,
    description: "100 Personen brauchen 4'950 verschiedene Schlüssel!",
  },
];

/**
 * Vorteile der asymmetrischen Kryptographie
 */
export const ASYMMETRIC_ADVANTAGES = [
  {
    id: 'key-exchange',
    title: 'Schlüsselaustauschproblem gelöst',
    description:
      'Kein gemeinsamer geheimer Schlüssel muss vorher über einen sicheren Kanal ausgetauscht werden',
    icon: '🔓',
  },
  {
    id: 'authentication',
    title: 'Authentifizierung möglich',
    description:
      'Digitale Signaturen ermöglichen es zu beweisen, wer eine Nachricht erstellt oder ein Dokument signiert hat',
    icon: '✍️',
  },
  {
    id: 'scalability',
    title: 'Bessere Skalierbarkeit',
    description:
      'Jede Person braucht nur ein Schlüsselpaar, nicht einen Schlüssel pro Kommunikationspartner',
    icon: '📈',
  },
  {
    id: 'non-repudiation',
    title: 'Nicht-Abstreitbarkeit',
    description:
      'Der Absender kann nicht abstreiten, eine Nachricht signiert zu haben (rechtliche Verbindlichkeit)',
    icon: '⚖️',
  },
];

export const PUBLIC_KEY_BENEFITS = [
  {
    title: 'Keine geheime Schlüsselübertragung',
    description: 'Der öffentliche Schlüssel kann über unsichere Kanäle verteilt werden',
    icon: '🔓',
  },
  {
    title: 'Skalierbarkeit',
    description: 'Jede Person braucht nur ein Schlüsselpaar, nicht einen Schlüssel pro Partner',
    icon: '📈',
  },
  {
    title: 'Authentizität',
    description: 'Digitale Signaturen beweisen, wer eine Nachricht erstellt hat',
    icon: '✍️',
  },
  {
    title: 'Nicht-Abstreitbarkeit',
    description: 'Der Absender kann nicht abstreiten, eine Nachricht signiert zu haben',
    icon: '⚖️',
  },
];

export const RSA_KEY_SIZES = [
  {
    bits: 1024,
    status: 'unsicher',
    description: 'Gilt seit 2010 als unsicher',
    color: 'red',
  },
  {
    bits: 2048,
    status: 'standard',
    description: 'Aktueller Mindeststandard',
    color: 'green',
  },
  {
    bits: 3072,
    status: 'empfohlen',
    description: 'Empfohlen für höhere Sicherheit',
    color: 'blue',
  },
  {
    bits: 4096,
    status: 'sehr sicher',
    description: 'Hohe Sicherheit für langfristige Anwendungen',
    color: 'purple',
  },
];

/**
 * Quellenangaben für asymmetrische Kryptographie
 */
export const ASYMMETRIC_CRYPTO_SOURCES: Source[] = [
  {
    id: 'public-key-crypto-wikipedia',
    title: 'Asymmetrisches Kryptosystem',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/Asymmetrisches_Kryptosystem',
    description: 'Überblick über Public-Key-Kryptographie',
  },
  {
    id: 'rsa-wikipedia',
    title: 'RSA-Kryptosystem',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/RSA-Kryptosystem',
    description: 'Detaillierte Erklärung des RSA-Algorithmus',
  },
  {
    id: 'digital-signature-wikipedia',
    title: 'Digitale Signatur',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/Digitale_Signatur',
    description: 'Funktionsweise digitaler Signaturen',
  },
  {
    id: 'diffie-hellman-wikipedia',
    title: 'Diffie-Hellman-Schlüsselaustausch',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/Diffie-Hellman-Schl%C3%BCsselaustausch',
    description: 'Erster Public-Key-Algorithmus zum Schlüsselaustausch',
  },
];
