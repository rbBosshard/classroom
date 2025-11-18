<template>
  <div class="space-y-4">
    <!-- Breadcrumb Navigation - Always visible -->
    <nav class="bg-white border border-gray-200 rounded-lg p-3 mb-6">
      <div class="flex items-center flex-wrap gap-2 text-sm">
        <button @click="$emit('navigate', 'root')" :class="[
          'flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 rounded-md transition-colors font-medium whitespace-nowrap',
          breadcrumbs.length === 0
            ? 'bg-primary-50 text-primary-700'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        ]">
          <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
            </path>
          </svg>
          <span class="hidden sm:inline">Start</span>
        </button>

        <template v-for="(crumb, index) in breadcrumbs" :key="crumb.id">
          <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
          <button v-if="index < breadcrumbs.length - 1" @click="$emit('navigate', crumb.id)"
            class="px-2 sm:px-3 py-1.5 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium truncate max-w-[120px] sm:max-w-none"
            :title="crumb.title">
            {{ crumb.title }}
          </button>
          <span v-else
            class="px-2 sm:px-3 py-1.5 bg-primary-50 text-primary-700 rounded-md font-medium truncate max-w-[150px] sm:max-w-none"
            :title="crumb.title">
            {{ crumb.title }}
          </span>
        </template>
      </div>
    </nav>

    <!-- Child Topics Grid (wenn es Unterthemen gibt) -->
    <div v-if="currentTopic?.children && currentTopic.children.length > 0">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="child in currentTopic.children" :key="child.id" @click="handleTopicClick(child)"
          class="crypto-card p-4 sm:p-5 cursor-pointer hover:border-primary-300 transition-all duration-200 group">
          <div class="flex items-start justify-between gap-3 mb-3">
            <!-- Icon: Emoji oder Bild -->
            <div class="flex-shrink-0">
              <img v-if="isImageUrl(child.icon)" :src="child.icon" :alt="child.title"
                class="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <span v-else class="text-3xl">{{ child.icon }}</span>
            </div>
            <!-- Badge rechts -->
            <span v-if="child.children"
              class="text-xs bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-md font-medium whitespace-nowrap">
              {{ countContents(child) }} {{ countContents(child) === 1 ? 'Inhalt' : 'Inhalte' }}
            </span>
          </div>

          <h3
            class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors break-words">
            {{ child.title }}
          </h3>

          <p class="text-gray-600 mb-3 text-sm leading-relaxed break-words">
            {{ child.description }}
          </p>

          <!-- Material Icons (if available) -->
          <div v-if="child.materials && child.materials.length > 0" class="flex flex-wrap gap-2 mt-3">
            <span v-for="material in child.materials" :key="material.id" :title="material.title"
              class="inline-flex items-center text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-md font-medium">
              {{ getMaterialIcon(material.type) }}
              <span class="ml-1">{{ getMaterialTypeName(material.type) }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Materials Section (für aktuelles Topic) -->
    <div v-if="currentTopic?.materials && currentTopic.materials.length > 0" class="mt-6">
      <div class="bg-white rounded-2xl shadow-xl p-6">
        <h2 class="text-xl font-bold text-primary-900 mb-4 flex items-center">
          <span class="text-2xl mr-3">📚</span>
          Zusätzliche Materialien
        </h2>
        <div class="space-y-3">
          <a v-for="material in currentTopic.materials" :key="material.id" :href="resolveUrl(material.url)"
            target="_blank" rel="noopener noreferrer"
            class="flex items-center justify-between p-4 bg-gray-50 hover:bg-primary-50 rounded-lg border-2 border-gray-200 hover:border-primary-300 transition-all group">
            <div class="flex items-center space-x-3 flex-1 min-w-0">
              <span class="text-3xl flex-shrink-0">{{ getMaterialIcon(material.type) }}</span>
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors truncate">
                  {{ material.title }}
                </h3>
                <p v-if="material.description" class="text-sm text-gray-600 mt-1">
                  {{ material.description }}
                </p>
                <div class="flex items-center gap-3 mt-1 text-xs text-gray-500">
                  <span>{{ getMaterialTypeName(material.type) }}</span>
                  <span v-if="material.fileSize">• {{ material.fileSize }}</span>
                  <span v-if="material.uploadDate">• {{ material.uploadDate }}</span>
                </div>
              </div>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-primary-600 flex-shrink-0 transition-colors" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- No Content Message -->
    <div v-if="currentTopic && !currentTopic.children?.length && !currentTopic.content"
      class="crypto-card p-8 text-center">
      <p class="text-gray-600 text-lg">
        🚧 Hier entsteht bald neuer Inhalt!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Topic, Breadcrumb, MaterialType } from '../../types/curriculum'
import { isImageUrl, resolveUrl } from '../../utils'

defineProps<{
  currentTopic: Topic | null
  breadcrumbs: Breadcrumb[]
}>()

const emit = defineEmits<{
  navigate: [topicId: string]
  showContent: [content: string, topic: Topic]
}>()

// Zähle rekursiv alle Inhalte in einem Thema
function countContents(topic: Topic): number {
  let count = topic.content ? 1 : 0

  if (topic.children) {
    for (const child of topic.children) {
      count += countContents(child)
    }
  }

  return count
}

function handleTopicClick(topic: Topic) {
  if (topic.content) {
    // Wenn es Inhalt gibt, zeige ihn an
    emit('showContent', topic.content, topic)
  } else {
    // Sonst navigiere zum Thema
    emit('navigate', topic.id)
  }
}

// Material helpers
function getMaterialIcon(type: MaterialType): string {
  const icons: Record<MaterialType, string> = {
    pdf: '📄',
    powerpoint: '📊',
    onenote: '📓',
    word: '📝',
    text: '📃',
    link: '🔗',
    video: '🎥'
  }
  return icons[type] || '📎'
}

function getMaterialTypeName(type: MaterialType): string {
  const names: Record<MaterialType, string> = {
    pdf: 'PDF',
    powerpoint: 'PowerPoint',
    onenote: 'OneNote',
    word: 'Word',
    text: 'Text',
    link: 'Link',
    video: 'Video'
  }
  return names[type] || type
}
</script>
