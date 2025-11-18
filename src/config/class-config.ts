import type { Topic } from '../types/curriculum';
import { curriculumTree_BURGDORF_29F_GYM1 } from '../types/curriculum-burgdorf_29f_gym1';

export type ClassId = string;

export interface ClassConfig {
  id: ClassId;
  school: string; // z.B. "BURGDORF"
  level: string; // z.B. "GYM1""
  year: number; // z.B. 29
  class: string; // z.B. "f"
  displayName: string; // z.B. "Burgdorf 29f GYM1"
  curriculum: Topic;
  description?: string;
  color?: string;
}

/**
 * 🎓 HIER DEINE KLASSEN KONFIGURIEREN 🎓
 */
export const classes: Record<ClassId, ClassConfig> = {
  // Gymnasium Burgdorf 29f GYM1
  BURGDORF_29F_GYM1: {
    id: 'BURGDORF_29F_GYM1',
    school: 'BURGDORF',
    level: 'GYM1',
    year: 29,
    class: 'f',
    displayName: 'Burgdorf 29f GYM1',
    curriculum: curriculumTree_BURGDORF_29F_GYM1,
    description: '',
    color: 'blue',
  },
  // Weitere Schulen können hier hinzugefügt werden:
};

/**
 * ⚠️ Default-Klasse (wenn keine URL-Parameter gesetzt sind) ⚠️
 */
export const DEFAULT_CLASS_ID: ClassId = 'BURGDORF_29F_GYM1';

/**
 * Holt die Klassen-ID aus der URL (?class=...)
 * Falls nicht vorhanden, wird DEFAULT_CLASS_ID verwendet
 */
export function getClassIdFromUrl(): ClassId {
  if (typeof window === 'undefined') {
    return DEFAULT_CLASS_ID;
  }

  const params = new URLSearchParams(window.location.search);
  const classId = params.get('class');

  // Prüfe ob die Klasse existiert
  if (classId && classes[classId]) {
    return classId;
  }

  return DEFAULT_CLASS_ID;
}

/**
 * Gibt die aktuelle Klassen-Konfiguration zurück
 */
export function getActiveClass(): ClassConfig {
  const classId = getClassIdFromUrl();
  return classes[classId] || classes[DEFAULT_CLASS_ID];
}

/**
 * Gibt das Curriculum für die aktive Klasse zurück
 */
export function getActiveCurriculum(): Topic {
  return getActiveClass().curriculum;
}

/**
 * Gibt die Konfiguration für eine bestimmte Klassen-ID zurück
 */
export function getClassConfig(classId: ClassId): ClassConfig | undefined {
  return classes[classId];
}

/**
 * Gibt alle verfügbaren Klassen zurück
 */
export function getAllClasses(): ClassConfig[] {
  return Object.values(classes);
}

/**
 * Gibt alle Klassen einer bestimmten Schule zurück
 */
export function getClassesBySchool(school: string): ClassConfig[] {
  return getAllClasses().filter(c => c.school === school);
}

/**
 * Gibt alle Klassen einer bestimmten Stufe zurück
 */
export function getClassesByLevel(level: string): ClassConfig[] {
  return getAllClasses().filter(c => c.level === level);
}

/**
 * Generiert eine URL für eine bestimmte Klasse
 */
export function getClassUrl(classId: ClassId): string {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?class=${classId}`;
}

/**
 * Wechselt zur angegebenen Klasse (ändert URL und lädt Seite neu)
 */
export function switchToClass(classId: ClassId): void {
  if (classes[classId]) {
    window.location.href = getClassUrl(classId);
  } else {
    console.error(`Klasse ${classId} existiert nicht!`);
  }
}
