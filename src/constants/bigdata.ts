/**
 * Big Data Constants
 * Central location for all Big Data-related constants
 */

import type { Source } from '@/types/curriculum';
import type {
  DataStorageMethod,
  AnalysisMethod,
  EthicalAspect,
} from '@/types/bigdata';



// Ethical aspects
export const ETHICAL_ASPECTS: EthicalAspect[] = [
  {
    topic: 'Datenschutz',
    description: 'Schutz persönlicher Daten und Privatsphäre.',
    concerns: [
      'Unbefugte Weitergabe von Daten',
      'Tracking ohne Zustimmung',
      'Datenlecks und Hacks',
      'Profilbildung ohne Wissen',
    ],
    guidelines: [
      'DSGVO/GDPR einhalten',
      'Datenminimierung praktizieren',
      'Transparenz schaffen',
      'Anonymisierung/Pseudonymisierung nutzen',
    ],
  },
  {
    topic: 'Bias & Diskriminierung',
    description: 'Voreingenommenheit in Daten und Algorithmen.',
    concerns: [
      'Historische Diskriminierung in Trainingsdaten',
      'Unterrepräsentation von Gruppen',
      'Verstärkung von Stereotypen',
      'Unfaire Entscheidungen',
    ],
    guidelines: [
      'Diverse Datensätze verwenden',
      'Algorithmen auf Fairness testen',
      'Transparente Entscheidungskriterien',
      'Regelmässige Audits durchführen',
    ],
  },
  {
    topic: 'Transparenz',
    description: 'Nachvollziehbarkeit von Datennutzung und Algorithmen.',
    concerns: [
      'Black-Box-Algorithmen',
      'Intransparente Datennutzung',
      'Fehlende Erklärbarkeit',
      'Mangelnde Rechenschaft',
    ],
    guidelines: [
      'Explainable AI (XAI) einsetzen',
      'Dokumentation bereitstellen',
      'Betroffene informieren',
      'Kontrollmechanismen etablieren',
    ],
  },
  {
    topic: 'Verantwortung',
    description: 'Wer trägt die Verantwortung für Entscheidungen?',
    concerns: [
      'Automatisierte Entscheidungen',
      'Fehlende Haftung',
      'Unklare Zuständigkeiten',
      'Folgen für Betroffene',
    ],
    guidelines: [
      'Klare Verantwortlichkeiten definieren',
      'Human-in-the-Loop bei kritischen Entscheidungen',
      'Beschwerdemechanismen einrichten',
      'Ethik-Richtlinien etablieren',
    ],
  },
];

// Sources
export const BIG_DATA_SOURCES: Source[] = [
  {
    id: 'bigdata-source-1',
    title: 'Big Data: Definition und Grundlagen',
    type: 'website',
    url: 'https://www.ibm.com/cloud/learn/big-data',
    description: 'IBM Cloud Learning über Big Data',
  },
  {
    id: 'bigdata-source-2',
    title: 'Data Science und Big Data Analytics',
    type: 'book',
    author: 'Tom Davenport',
    description: 'Einführung in Big Data Analytics',
  },
  {
    id: 'bigdata-source-3',
    title: 'DSGVO - Datenschutz-Grundverordnung',
    type: 'website',
    url: 'https://dsgvo-gesetz.de/',
    description: 'Offizielle DSGVO-Informationen',
  },
  {
    id: 'bigdata-source-4',
    title: 'Algorithmic Bias',
    type: 'article',
    author: "Cathy O'Neil",
    description: 'Weapons of Math Destruction',
  },
];

// Learning objectives
export const LEARNING_OBJECTIVES = [
  "Die 5 V's von Big Data verstehen (Volume, Velocity, Variety, Veracity, Value)",
  'Verschiedene Speichermethoden und ihre Anwendungsfälle kennenlernen',
  'Analysemethoden für grosse Datenmengen verstehen',
  'Ethische Herausforderungen bei Big Data erkennen',
  'Datenschutzaspekte bei der Verarbeitung grosser Datenmengen beachten',
  'Kritisch über Bias in Daten und Algorithmen nachdenken',
];
