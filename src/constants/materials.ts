/**
 * Zentrale Material-Konfiguration
 * Organisiert Materialien nach Klassen
 */

import type { Material } from "../types/curriculum";

/**
 * Verfügbare Klassen/Stufen
 */
export type ClassLevel = "GYM1" | "GYM2" | "shared";

/**
 * Material-Katalog für jede Klasse
 */
interface MaterialCatalog {
  [key: string]: Material;
}

/**
 * Gemeinsame/Shared Materialien für alle Klassen
 */
export const sharedMaterials: MaterialCatalog = {
  // Hier können gemeinsame Materialien definiert werden
  // Beispiel:
  // cryptoHistory: {
  //   id: "crypto-history",
  //   title: "Geschichte der Kryptographie",
  //   type: "pdf",
  //   url: "/materials/shared/Geschichte_Kryptographie.pdf",
  //   description: "Überblick über die historische Entwicklung"
  // }
};

/**
 * GYM1 - Materialien
 */
export const gym1Materials: MaterialCatalog = {
  substitutionSlides: {
    id: "gym1-substitution-slides",
    title: "Substitution - Präsentation (GYM1)",
    type: "powerpoint",
    url: "/materials/GYM1_1.pptx",
    description:
      "Umfassende PowerPoint-Präsentation zu Substitutionsverschlüsselung für GYM1",
  },

  transpositionSlides: {
    id: "gym1-transposition-slides",
    title: "Transposition - Präsentation (GYM1)",
    type: "powerpoint",
    url: "/materials/GYM1_2.pptx",
    description:
      "Umfassende PowerPoint-Präsentation zu Transpositionsverschlüsselung für GYM1",
  },

  frequencyAnalysis: {
    id: "gym1-frequency-analysis",
    title: "Auftrag Häufigkeitsanalyse",
    type: "word",
    url: "/materials/Auftrag_Haeufigkeitsanalyse.docx",
    description: "Praktische Übung zur Häufigkeitsanalyse",
  },

  skytaleAssignment: {
    id: "gym1-skytale-assignment",
    title: "Auftrag Skytale",
    type: "word",
    url: "/materials/Auftrag Skytale.docx",
    description: "Praktische Übung zur Skytale-Verschlüsselung",
  },
};

/**
 * GYM2 - Materialien
 */
export const gym2Materials: MaterialCatalog = {
  // Hier GYM2-spezifische Materialien hinzufügen
  // substitutionSlides: {
  //   id: "gym2-substitution-slides",
  //   title: "Substitution - Präsentation (GYM2)",
  //   type: "powerpoint",
  //   url: "/materials/GYM2/Substitution_GYM2.pptx",
  //   description: "Erweiterte Präsentation für GYM2"
  // }
};


/**
 * Helper-Funktion: Hole Material nach Klasse und Key
 */
export function getMaterial(
  classLevel: ClassLevel,
  materialKey: string
): Material | undefined {
  const catalogs: Record<ClassLevel, MaterialCatalog> = {
    GYM1: gym1Materials,
    GYM2: gym2Materials,
    shared: sharedMaterials,
  };

  return catalogs[classLevel]?.[materialKey];
}

/**
 * Helper-Funktion: Hole mehrere Materialien
 */
export function getMaterials(
  classLevel: ClassLevel,
  materialKeys: string[]
): Material[] {
  return materialKeys
    .map((key) => getMaterial(classLevel, key))
    .filter((m): m is Material => m !== undefined);
}

/**
 * Helper-Funktion: Kombiniere Materialien aus verschiedenen Quellen
 */
export function combineMaterials(
  ...materials: (Material | Material[] | undefined)[]
): Material[] {
  return materials
    .flat()
    .filter((m): m is Material => m !== undefined && m !== null);
}
