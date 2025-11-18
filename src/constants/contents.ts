/**
 * Zentrale Verwaltung aller Content-Komponenten
 * Macht es einfach, neue Inhalte hinzuzufügen oder zu ändern
 *
 * So fügst du einen neuen Inhalt hinzu:
 * 1. Erstelle neue Vue-Komponente in src/components/content/
 * 2. Füge sie hier mit dynamischem Import hinzu
 * 3. Verwende den Namen im Curriculum (src/types/curriculum.ts)
 *
 * Content kann sein: Interaktive Übungen, Texte, Videos, Quizzes, etc.
 *
 * WICHTIG: Wir verwenden Lazy Loading (dynamische Imports) für bessere Performance!
 * - Komponenten werden nur geladen, wenn sie benötigt werden
 * - Reduziert Initial Bundle Size erheblich
 * - Verbessert Ladezeiten der App
 */

import type { Component } from 'vue';

/**
 * Lazy-loaded Content Components
 * Jede Komponente wird erst geladen, wenn sie angezeigt wird
 */
export const CONTENT_COMPONENTS: Record<string, () => Promise<Component>> = {
  // Hier deine Inhalte mit dynamischen Imports hinzufügen:
  Caesar: () => import('../components/content/Caesar.vue'),
  Vigenere: () => import('../components/content/Vigenere.vue'),
  Skytale: () => import('../components/content/Skytale.vue'),
  Enigma: () => import('../components/content/Enigma.vue'),
  TranspositionTheory: () => import('../components/content/TranspositionTheory.vue'),
  MonoalphabeticTheory: () => import('../components/content/MonoalphabeticTheory.vue'),
  ModernCryptography: () => import('../components/content/ModernCryptography.vue'),
} as const;

export type ContentName = keyof typeof CONTENT_COMPONENTS;
