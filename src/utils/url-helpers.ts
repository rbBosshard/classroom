/**
 * Utility für base-aware URLs
 * Funktioniert sowohl für localhost als auch GitHub Pages
 */

/**
 * Gibt die base URL der App zurück
 * Localhost: "/"
 * GitHub Pages: "/classroom/"
 */
export function getBaseUrl(): string {
  return import.meta.env.BASE_URL || "/";
}

/**
 * Konvertiert einen relativen Pfad zu einem base-aware absoluten Pfad
 *
 * @param path - Relativer Pfad (z.B. "/materials/file.pptx" oder "materials/file.pptx")
 * @returns Base-aware Pfad (z.B. "/classroom/materials/file.pptx" auf GitHub Pages)
 *
 * @example
 * // Localhost
 * resolveUrl("/materials/file.pptx") // => "/materials/file.pptx"
 *
 * // GitHub Pages
 * resolveUrl("/materials/file.pptx") // => "/classroom/materials/file.pptx"
 */
export function resolveUrl(path: string): string {
  // Wenn es eine externe URL ist (http/https), gib sie unverändert zurück
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const base = getBaseUrl();

  // Entferne führenden Slash wenn vorhanden
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Kombiniere base und path, entferne doppelte Slashes
  const combined = `${base}${cleanPath}`;
  return combined.replace(/\/+/g, "/");
}

/**
 * Erstellt eine Material-URL die sowohl lokal als auch auf GitHub Pages funktioniert
 *
 * @param materialPath - Pfad zum Material (z.B. "materials/file.pptx")
 * @returns Vollständiger base-aware Pfad
 */
export function getMaterialUrl(materialPath: string): string {
  return resolveUrl(materialPath);
}
