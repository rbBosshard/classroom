/**
 * Constants für asymmetrische Verschlüsselung
 */

import type { Source } from '@/types/curriculum';

/**
 * Lernziele
 */
export const ASYMMETRIC_LEARNING_OBJECTIVES = [
  {
    icon: '✓',
    text: 'Das <strong>Schlüsselaustauschproblem</strong> der symmetrischen Kryptographie verstehen und erklären können',
  },
  {
    icon: '✓',
    text: 'Das Konzept von <strong>öffentlichem und privatem Schlüssel</strong> (Public-Key-Kryptographie) verstehen',
  },
  {
    icon: '✓',
    text: 'Den Unterschied zwischen <strong>Verschlüsselung</strong> (Vertraulichkeit) und <strong>Signierung</strong> (Authentizität) erklären',
  },
  {
    icon: '✓',
    text: 'Das Prinzip <strong>digitaler Signaturen</strong> verstehen und ihre Bedeutung für die Authentifizierung erklären',
  },
  {
    icon: '✓',
    text: 'Die Funktionsweise einer <strong>Public Key Infrastructure (PKI)</strong> mit Zertifizierungsstellen beschreiben',
  },
  {
    icon: '✓',
    text: '<strong>Digitale Zertifikate</strong> untersuchen und ihre Bestandteile identifizieren können',
  },
  {
    icon: '✓',
    text: 'Die <strong>Vertrauenskette</strong> von Root-CAs über Intermediate-CAs zu End-Zertifikaten nachvollziehen',
  },
  {
    icon: '✓',
    text: 'Praktische <strong>Anwendungsfälle</strong> asymmetrischer Kryptographie kennen (HTTPS, E-Mail-Verschlüsselung, SSH)',
  },
  {
    icon: '✓',
    text: '<strong>Vor- und Nachteile</strong> asymmetrischer Verschlüsselung im Vergleich zu symmetrischen Verfahren nennen',
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
    id: 'AsymmetricCryptographyGBSL',
    title: 'Asymmetrische Kryptographie',
    type: 'website',
    url: 'https://inf.gbsl.website',
    description: 'Kryptographie Kapitel der GBSL Informatik Webseite',
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
