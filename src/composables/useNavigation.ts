/**
 * Composable für Navigation und State-Management
 * Zentrale Verwaltung der App-Navigation mit Browser-History-Support
 */

import { ref, computed, onMounted, onUnmounted } from "vue";
import { curriculumTree } from "../types/curriculum";
import {
  findTopicById,
  findParentTopicId,
  buildBreadcrumbs,
} from "../utils/curriculum-helpers";
import { CONTENT_COMPONENTS } from "../constants/contents";
import type { Topic } from "../types/curriculum";
import type { Component } from "vue";

type ViewType = "navigation" | "content";

interface NavigationState {
  view: ViewType;
  topicId: string;
  contentName?: string;
  contentTopicId?: string;
}

export function useNavigation() {
  // State
  const currentView = ref<ViewType>("navigation");
  const currentTopicId = ref<string>("root");
  const currentContentComponent = ref<Component | null>(null);
  const currentContentTopic = ref<Topic | null>(null);

  // Flag um zu verhindern dass popstate eigene Navigation triggert
  let isNavigating = false;

  // Computed
  const currentTopic = computed(() =>
    findTopicById(curriculumTree, currentTopicId.value)
  );

  const breadcrumbs = computed(() => {
    if (currentView.value === "content" && currentContentTopic.value) {
      return buildBreadcrumbs(curriculumTree, currentContentTopic.value.id);
    }
    if (currentTopicId.value === "root") {
      return [];
    }
    return buildBreadcrumbs(curriculumTree, currentTopicId.value);
  });

  // Helper: Update Browser History
  function updateHistory(state: NavigationState, replace = false) {
    if (isNavigating) return;

    const url = new URL(window.location.href);
    url.searchParams.set("view", state.view);
    url.searchParams.set("topic", state.topicId);

    if (state.contentName) {
      url.searchParams.set("content", state.contentName);
      url.searchParams.set("contentTopic", state.contentTopicId || "");
    } else {
      url.searchParams.delete("content");
      url.searchParams.delete("contentTopic");
    }

    if (replace) {
      window.history.replaceState(state, "", url.toString());
    } else {
      window.history.pushState(state, "", url.toString());
    }
  }

  // Helper: Restore State from History
  function restoreState(state: NavigationState | null) {
    if (!state) {
      // Parse from URL if no state
      const params = new URLSearchParams(window.location.search);
      const view = (params.get("view") as ViewType) || "navigation";
      const topicId = params.get("topic") || "root";
      const contentName = params.get("content");
      const contentTopicId = params.get("contentTopic");

      state = {
        view,
        topicId,
        contentName: contentName || undefined,
        contentTopicId: contentTopicId || undefined,
      };
    }

    isNavigating = true;

    currentView.value = state.view;
    currentTopicId.value = state.topicId;

    if (state.view === "content" && state.contentName && state.contentTopicId) {
      const topic = findTopicById(curriculumTree, state.contentTopicId);
      if (topic) {
        const componentLoader = CONTENT_COMPONENTS[state.contentName];
        if (componentLoader) {
          // Lazy load component
          componentLoader()
            .then((module) => {
              currentContentComponent.value = (module as any).default || module;
              currentContentTopic.value = topic;
            })
            .catch((error) => {
              console.error(
                `Failed to load content component: ${state.contentName}`,
                error
              );
              currentContentComponent.value = null;
              currentContentTopic.value = null;
            });
        }
      }
    } else {
      currentContentComponent.value = null;
      currentContentTopic.value = null;
    }

    setTimeout(() => {
      isNavigating = false;
    }, 0);
  }

  // Handle Browser Back/Forward
  function handlePopState(event: PopStateEvent) {
    restoreState(event.state as NavigationState | null);
  }

  // Actions
  function navigateToTopic(topicId: string) {
    currentTopicId.value = topicId;
    currentView.value = "navigation";
    currentContentComponent.value = null;
    currentContentTopic.value = null;

    updateHistory({ view: "navigation", topicId });
  }

  async function showContent(contentName: string, topic: Topic) {
    const componentLoader = CONTENT_COMPONENTS[contentName];

    if (componentLoader) {
      try {
        // Lade Komponente asynchron (Lazy Loading)
        const module = await componentLoader();

        // Dynamic imports geben ein Modul zurück mit .default
        currentContentComponent.value = (module as any).default || module;
        currentContentTopic.value = topic;
        currentView.value = "content";

        updateHistory({
          view: "content",
          topicId: currentTopicId.value,
          contentName,
          contentTopicId: topic.id,
        });
      } catch (error) {
        console.error(
          `Failed to load content component: ${contentName}`,
          error
        );
        // Error wird von ErrorBoundary gefangen
        throw error;
      }
    } else {
      console.error(`Content component not found: ${contentName}`);
      throw new Error(`Content "${contentName}" nicht gefunden`);
    }
  }

  function backToNavigation() {
    currentView.value = "navigation";
    currentContentComponent.value = null;

    // Navigiere zum Parent-Topic
    if (currentContentTopic.value) {
      const parentId = findParentTopicId(
        curriculumTree,
        currentContentTopic.value.id
      );
      if (parentId) {
        currentTopicId.value = parentId;
      }
    }

    currentContentTopic.value = null;

    updateHistory({ view: "navigation", topicId: currentTopicId.value });
  }

  // Setup: Initialize from URL and listen to popstate
  onMounted(() => {
    // Initial state from URL
    const params = new URLSearchParams(window.location.search);
    if (params.has("view") || params.has("topic")) {
      restoreState(null);
    } else {
      // Set initial state
      updateHistory({ view: "navigation", topicId: "root" }, true);
    }

    // Listen to browser back/forward
    window.addEventListener("popstate", handlePopState);
  });

  onUnmounted(() => {
    window.removeEventListener("popstate", handlePopState);
  });

  function onContentComplete(result: any) {
    console.log("Content completed:", result);
    // Hier könnte man Fortschritt speichern, Analytics, etc.
  }

  function retryLoadContent() {
    // Versuche aktuellen Content erneut zu laden
    if (currentContentTopic.value?.content) {
      showContent(currentContentTopic.value.content, currentContentTopic.value);
    }
  }

  return {
    // State
    currentView,
    currentTopic,
    currentContentComponent,
    breadcrumbs,

    // Actions
    navigateToTopic,
    showContent,
    backToNavigation,
    onContentComplete,
    retryLoadContent,
  };
}
