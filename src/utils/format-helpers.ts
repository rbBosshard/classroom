/**
 * Format-Funktionen für UI-Darstellung
 */

/**
 * Formatiert ein Datum in deutsches Format
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}

/**
 * Formatiert eine Dateigrösse in lesbares Format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Formatiert einen Prozentsatz
 */
export function formatPercentage(value: number, total: number): string {
  if (total === 0) return "0%";
  const percentage = Math.round((value / total) * 100);
  return `${percentage}%`;
}

/**
 * Formatiert einen Score (z.B. "8/10")
 */
export function formatScore(score: number, maxScore: number): string {
  return `${score}/${maxScore}`;
}

/**
 * Kürzt einen langen Text mit Ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}
