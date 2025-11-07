/**
 * Composable for centralized error handling
 * Provides error tracking, logging, and user-friendly error messages
 */

import { ref, computed } from "vue";

export interface AppError {
  id: string;
  message: string;
  context: string;
  timestamp: number;
  stack?: string;
  severity: "error" | "warning" | "info";
}

const errors = ref<AppError[]>([]);
const maxErrors = 50; // Keep only last 50 errors

export function useErrorHandling() {
  const hasErrors = computed(() => errors.value.length > 0);
  const latestError = computed(() => errors.value[errors.value.length - 1]);
  const errorCount = computed(() => errors.value.length);

  /**
   * Handle and log an error
   */
  function handleError(
    error: Error | string,
    context: string,
    severity: "error" | "warning" | "info" = "error"
  ): void {
    const errorMessage = typeof error === "string" ? error : error.message;
    const errorStack = typeof error === "string" ? undefined : error.stack;

    const appError: AppError = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      message: errorMessage,
      context,
      timestamp: Date.now(),
      stack: errorStack,
      severity,
    };

    errors.value.push(appError);

    // Keep only last N errors
    if (errors.value.length > maxErrors) {
      errors.value = errors.value.slice(-maxErrors);
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      const logMethod =
        severity === "error"
          ? console.error
          : severity === "warning"
          ? console.warn
          : console.info;

      logMethod(`[${context}]`, errorMessage, errorStack || "");
    }

    // In production, you could send to error tracking service
    // Example: Sentry.captureException(error, { tags: { context, severity } });
  }

  /**
   * Clear a specific error
   */
  function clearError(errorId: string): void {
    errors.value = errors.value.filter((e) => e.id !== errorId);
  }

  /**
   * Clear all errors
   */
  function clearAllErrors(): void {
    errors.value = [];
  }

  /**
   * Get user-friendly error message
   */
  function getUserFriendlyMessage(error: AppError): string {
    const contextMessages: Record<string, string> = {
      "content-loading":
        "Fehler beim Laden des Inhalts. Bitte versuche es erneut.",
      navigation: "Navigationsfehler. Bitte lade die Seite neu.",
      encryption: "Fehler bei der Verschlüsselung. Überprüfe deine Eingabe.",
      decryption:
        "Fehler bei der Entschlüsselung. Überprüfe den Schlüssel und Text.",
      challenge: "Fehler bei der Challenge. Bitte versuche es erneut.",
      curriculum: "Fehler beim Laden des Lehrplans.",
    };

    return (
      contextMessages[error.context] ||
      "Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut."
    );
  }

  /**
   * Get errors by context
   */
  function getErrorsByContext(context: string): AppError[] {
    return errors.value.filter((e) => e.context === context);
  }

  /**
   * Get errors by severity
   */
  function getErrorsBySeverity(
    severity: "error" | "warning" | "info"
  ): AppError[] {
    return errors.value.filter((e) => e.severity === severity);
  }

  return {
    errors: computed(() => errors.value),
    hasErrors,
    latestError,
    errorCount,
    handleError,
    clearError,
    clearAllErrors,
    getUserFriendlyMessage,
    getErrorsByContext,
    getErrorsBySeverity,
  };
}
