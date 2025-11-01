/**
 * Helper-Funktionen für Curriculum-Navigation
 * Extrahiert aus curriculum.ts für bessere Wartbarkeit
 */

import type { Topic, Breadcrumb } from "../types/curriculum";

/**
 * Findet ein Topic anhand seiner ID in der Hierarchie
 */
export function findTopicById(tree: Topic, id: string): Topic | null {
  if (tree.id === id) return tree;

  if (tree.children) {
    for (const child of tree.children) {
      const found = findTopicById(child, id);
      if (found) return found;
    }
  }

  return null;
}

/**
 * Findet die Parent-ID eines Topics
 */
export function findParentTopicId(
  tree: Topic,
  targetId: string
): string | null {
  if (tree.children) {
    for (const child of tree.children) {
      if (child.id === targetId) {
        return tree.id;
      }
      const found = findParentTopicId(child, targetId);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Baut Breadcrumb-Navigation auf
 */
export function buildBreadcrumbs(tree: Topic, targetId: string): Breadcrumb[] {
  const path: Breadcrumb[] = [];

  function findPath(node: Topic, target: string): boolean {
    if (node.id === target) {
      if (node.id !== "root") {
        path.push({
          id: node.id,
          title: node.title,
          level: node.level,
        });
      }
      return true;
    }

    if (node.children) {
      for (const child of node.children) {
        if (findPath(child, target)) {
          if (node.id !== "root") {
            path.unshift({
              id: node.id,
              title: node.title,
              level: node.level,
            });
          }
          return true;
        }
      }
    }

    return false;
  }

  findPath(tree, targetId);
  return path;
}

/**
 * Prüft, ob ein String eine Bild-URL ist
 */
export function isImageUrl(icon: string): boolean {
  return (
    icon.startsWith("/") ||
    icon.startsWith("http") ||
    icon.includes(".svg") ||
    icon.includes(".png") ||
    icon.includes(".jpg")
  );
}
