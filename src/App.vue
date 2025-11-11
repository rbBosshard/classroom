<template>
  <div class="min-h-screen crypto-gradient">
    <!-- Error Notification (Global) -->
    <ErrorNotification />

    <!-- Header -->
    <header class="relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-2"></div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
      <!-- Topic Navigation View -->
      <div v-if="currentView === 'navigation'">
        <TopicNavigation
          :current-topic="currentTopic"
          :breadcrumbs="breadcrumbs"
          @navigate="navigateToTopic"
          @show-content="showContent"
        />
      </div>

      <!-- Content View with Error Boundary & Suspense -->
      <div
        v-else-if="currentView === 'content' && currentContentComponent"
        class="max-w-4xl mx-auto"
      >
        <!-- Back Button -->
        <button
          @click="backToNavigation"
          class="mb-4 sm:mb-6 flex items-center text-primary-600 hover:text-primary-800 transition-colors font-medium text-sm sm:text-base"
        >
          <svg
            class="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="truncate">Zurück zur Übersicht</span>
        </button>

        <!-- Error Boundary wraps Content with Suspense -->
        <ErrorBoundary @retry="retryLoadContent" @back="backToNavigation">
          <Suspense>
            <!-- Main Content (Lazy-Loaded) -->
            <template #default>
              <component
                :is="currentContentComponent"
                :topic="currentContentTopic"
                @complete="onContentComplete"
                @back="backToNavigation"
              />
            </template>

            <!-- Loading Fallback -->
            <template #fallback>
              <LoadingSpinner text="Lade Inhalt..." size="lg" :fullScreen="true" />
            </template>
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TopicNavigation from './components/ui/TopicNavigation.vue'
import ErrorBoundary from './components/ui/ErrorBoundary.vue'
import LoadingSpinner from './components/ui/LoadingSpinner.vue'
import ErrorNotification from './components/ui/ErrorNotification.vue'
import { useNavigation } from './composables'

// Verwende Composable für gesamte Navigation-Logik
const {
  currentView,
  currentTopic,
  currentContentComponent,
  currentContentTopic,
  breadcrumbs,
  navigateToTopic,
  showContent,
  backToNavigation,
  onContentComplete,
  retryLoadContent,
} = useNavigation()

</script>
