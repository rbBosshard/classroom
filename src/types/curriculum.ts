// Hierarchische Themenstruktur

export type MaterialType = 'pdf' | 'powerpoint' | 'onenote' | 'word' | 'text' | 'link' | 'video';

export interface Material {
  id: string;
  title: string;
  type: MaterialType;
  url: string; // URL oder Pfad zur Datei
  description?: string;
  uploadDate?: string;
  fileSize?: string;
  icon?: string;
  canEdit?: boolean; // Für OneNote-Links: Kann der Lehrer bearbeiten?
}

export type SourceType = 'book' | 'article' | 'website' | 'video' | 'wikipedia' | 'image' | 'other';

export interface Source {
  id: string;
  title: string;
  type: SourceType;
  url?: string; // Optional: Link zur Quelle
  author?: string; // Optional: Autor(en)
  year?: string; // Optional: Erscheinungsjahr
  description?: string; // Optional: Kurze Beschreibung
  license?: string; // Optional: Lizenz (z.B. "CC BY-SA 4.0", "Public Domain", "Fair Use")
  imagePath?: string; // Optional: Pfad zum Bild (für Bildquellen)
}

/**
 * Verschiedene Arten von Inhalten
 * - interactive: Vue-Komponente mit Interaktivität (Übungen, Quizzes, Spiele)
 * - text: Reiner Text-Inhalt (wird direkt im Topic angezeigt)
 * - mixed: Kombination aus Text und interaktiven Elementen
 */
export type ContentType = 'interactive' | 'text' | 'mixed';

export interface Topic {
  id: string;
  title: string;
  icon: string;
  description: string;
  level: number; // 1 = Hauptthema, 2 = Unterthema, etc.
  children?: Topic[];

  // Content-Eigenschaften (ersetzt 'exercise')
  content?: string; // Name der Vue-Komponente für interaktive Inhalte
  contentType?: ContentType; // Art des Inhalts
  textContent?: string; // Markdown/HTML für Text-Inhalte
  materials?: Material[]; // Zugeordnete Materialien
}

export interface Breadcrumb {
  id: string;
  title: string;
  level: number;
}
