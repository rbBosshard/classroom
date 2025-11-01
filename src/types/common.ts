/**
 * Gemeinsame TypeScript Types für die gesamte App
 * Extrahiert aus verschiedenen Komponenten für bessere Wiederverwendbarkeit
 */

/**
 * View-Types für die App-Navigation
 */
export type ViewType = "navigation" | "exercise";

/**
 * Ergebnis einer abgeschlossenen Übung
 */
export interface ExerciseResult {
  score: number;
  maxScore: number;
  timeSpent?: number;
  completed: boolean;
}

/**
 * Fortschritts-Tracking für Themen
 */
export interface TopicProgress {
  topicId: string;
  completed: boolean;
  score?: number;
  lastAccessed: Date;
}
