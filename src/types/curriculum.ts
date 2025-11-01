// Hierarchische Themenstruktur für Gymnasium 1 Kryptographie

export type MaterialType =
  | "pdf"
  | "powerpoint"
  | "onenote"
  | "word"
  | "text"
  | "link"
  | "video";

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

/**
 * Verschiedene Arten von Inhalten
 * - interactive: Vue-Komponente mit Interaktivität (Übungen, Quizzes, Spiele)
 * - text: Reiner Text-Inhalt (wird direkt im Topic angezeigt)
 * - mixed: Kombination aus Text und interaktiven Elementen
 */
export type ContentType = "interactive" | "text" | "mixed";

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
}

export interface Breadcrumb {
  id: string;
  title: string;
  level: number;
}

// Hierarchische Themenstruktur für GYM1
export const curriculumTree: Topic = {
  id: "root",
  title: "Start",
  icon: "🏠",
  description: "Willkommen zur Kryptographie-Lernplattform",
  level: 1,
  children: [
    {
      id: "kryptographie",
      title: "Kryptographie",
      icon: "🔐",
      description: "Lerne die Grundlagen der Verschlüsselung",
      level: 2,
      children: [
        {
          id: "verschluesselung",
          title: "Verschlüsselung",
          icon: "🔒",
          description: "Wie werden Nachrichten geheim gehalten?",
          level: 3,
          children: [
            {
              id: "symmetrisch",
              title: "Symmetrische Verschlüsselung",
              icon: "/images/lock-example.svg",
              description: "Ein Schlüssel für Ver- und Entschlüsselung",
              level: 3,
              children: [
                {
                  id: "substitution",
                  title: "Substitution",
                  icon: "↔️",
                  description: "Buchstaben werden ersetzt",
                  level: 4,
                  children: [
                    {
                      id: "monoalphabetisch",
                      title: "Monoalphabetisch",
                      icon: "📝",
                      description: "Ein Buchstabe wird immer gleich ersetzt",
                      level: 5,
                      children: [
                        {
                          id: "caesar-wheel",
                          title: "Interaktive Caesar-Scheibe",
                          icon: "🎯",
                          description:
                            "Lerne Caesar-Verschlüsselung mit einer drehbaren Scheibe",
                          level: 6,
                          content: "CaesarWheel",
                          contentType: "interactive",
                        },
                      ],
                    },
                    {
                      id: "polyalphabetisch",
                      title: "Polyalphabetisch",
                      icon: "🔄",
                      description: "Buchstaben werden unterschiedlich ersetzt",
                      level: 5,
                      // Hier kannst du eigene Übungen hinzufügen
                    },
                  ],
                },
              ],
            },
            {
              id: "asymmetrisch",
              title: "Asymmetrische Verschlüsselung",
              icon: "🔐",
              description: "Zwei Schlüssel: Öffentlich und Privat",
              level: 3,
              children: [
                {
                  id: "public-key",
                  title: "Public-Key-Kryptographie",
                  icon: "🗝️",
                  description: "Moderne Verschlüsselung mit zwei Schlüsseln",
                  level: 4,
                  // Hier kannst du eigene Übungen hinzufügen
                },
              ],
            },
          ],
        },
        {
          id: "grundlagen",
          title: "Grundbegriffe",
          icon: "📚",
          description: "Wichtige Begriffe der Kryptographie",
          level: 3,
          // Hier kannst du eigene Übungen hinzufügen
        },
      ],
    },
  ],
};
