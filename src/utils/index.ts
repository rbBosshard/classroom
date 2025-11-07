/**
 * Zentrale Export-Datei für alle Utils
 * Ermöglicht einfache Imports: import { formatDate, isOnlyLetters } from '@/utils'
 */

// Curriculum Helpers
export {
  findTopicById,
  findParentTopicId,
  buildBreadcrumbs,
  isImageUrl,
} from "./curriculum-helpers";

// String Helpers
export {
  normalizeText,
  isOnlyLetters,
  removeNonLetters,
  toUpperCase,
  slugify,
} from "./string-helpers";

// Format Helpers
export {
  formatDate,
  formatFileSize,
  formatPercentage,
  formatScore,
  truncate,
} from "./format-helpers";

// URL Helpers
export { getBaseUrl, resolveUrl, getMaterialUrl } from "./url-helpers";
