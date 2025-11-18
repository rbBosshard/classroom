<template>
    <div v-if="materials && materials.length > 0" class="bg-white rounded-2xl shadow-xl p-6 mb-6">
        <h2 class="text-xl font-bold text-primary-900 mb-4 flex items-center">
            <span class="text-2xl mr-3">📚</span>
            Zusätzliche Materialien
        </h2>
        <div class="space-y-3">
            <a v-for="material in materials" :key="material.id" :href="resolveUrl(material.url)" target="_blank"
                rel="noopener noreferrer"
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
                <svg class="w-5 h-5 text-gray-400 group-hover:text-primary-600 flex-shrink-0 transition-colors"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Material, MaterialType } from '../../types/curriculum'
import { resolveUrl } from '../../utils'

defineProps<{
    materials?: Material[]
}>()

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
