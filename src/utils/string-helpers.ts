/**
 * String-Manipulation und Validierungs-Funktionen
 */

/**
 * Normalisiert einen Text (Trimmen, Lowercase, etc.)
 */
export function normalizeText(text: string): string {
  return text.trim().toLowerCase();
}

/**
 * Prüft ob ein String nur Buchstaben enthält
 */
export function isOnlyLetters(str: string): boolean {
  return /^[a-zA-ZäöüÄÖÜß]+$/.test(str);
}

/**
 * Entfernt alle Nicht-Buchstaben aus einem String
 */
export function removeNonLetters(str: string): string {
  return str.replace(/[^a-zA-ZäöüÄÖÜß]/g, "");
}

/**
 * Konvertiert Text in Grossbuchstaben (für Verschlüsselung)
 */
export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

/**
 * Erstellt eine URL-sichere Slug aus einem String
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
