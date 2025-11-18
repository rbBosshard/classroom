<template>
  <div>
    <h3 class="text-lg sm:text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
      🎯 Interaktive Caesar-Scheibe
      <span class="text-sm font-normal text-gray-500">(Drehe den äusseren Ring!)</span>
    </h3>
    
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-4">
      <p class="text-sm text-gray-700">
        <strong>So funktioniert's:</strong> Der innere Ring (lila) zeigt den <strong>Geheimtext</strong> (verschlüsselt). 
        Der äussere Ring (blau) zeigt den <strong>Klartext</strong> (Original). Drehe den äusseren Ring, um die Verschiebung einzustellen.
      </p>
    </div>
    
    <div class="flex flex-col lg:flex-row gap-6 items-start">
      <!-- Caesar Wheel SVG -->
      <div class="relative flex-shrink-0 mx-auto lg:mx-0">
        <div class="relative w-80 h-80 sm:w-96 sm:h-96">
          <!-- Inner Ring (Fixed) - Geheimtext -->
          <svg class="absolute inset-0 w-full h-full" viewBox="0 0 260 260">
            <!-- Wedge segments for inner ring -->
            <g v-for="(_letter, index) in alphabet" :key="'inner-wedge-' + index">
              <path
                :d="createWedgePath(130, 130, 40, 80, (index - 0.5) * 360 / 26 - 90, (index + 0.5) * 360 / 26 - 90)"
                :fill="index % 2 === 0 ? '#f3e8ff' : '#e9d5ff'"
                stroke="#9333ea"
                stroke-width="1"
              />
            </g>
            
            <!-- Inner background circle -->
            <circle cx="130" cy="130" r="40" fill="#ddd6fe" stroke="#9333ea" stroke-width="2"/>
            
            <!-- Label for inner ring -->
            <text x="130" y="27" text-anchor="middle" class="fill-purple-900 font-bold" style="font-size: 10px;">
              GEHEIMTEXT
            </text>
            
            <!-- Inner letters (Geheimtext) -->
            <g v-for="(letter, index) in alphabet" :key="'inner-' + index">
              <text
                :x="130 + 60 * Math.cos((index * 360 / 26 - 90) * Math.PI / 180)"
                :y="130 + 60 * Math.sin((index * 360 / 26 - 90) * Math.PI / 180)"
                text-anchor="middle"
                dominant-baseline="middle"
                class="font-bold fill-purple-700"
                style="font-size: 14px"
              >
                {{ letter }}
              </text>
            </g>
          </svg>

          <!-- Outer Ring (Rotatable) - Klartext -->
          <svg 
            class="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
            viewBox="0 0 260 260"
            :style="{ 
              transform: `rotate(${snappedRotation}deg)`, 
              transformOrigin: 'center',
              transition: isDragging ? 'none' : 'transform 0.2s ease-out'
            }"
            @mousedown="startDrag"
            @touchstart.prevent="startDrag"
          >
            <!-- Wedge segments for outer ring -->
            <g v-for="(_letter, index) in alphabet" :key="'outer-wedge-' + index">
              <path
                :d="createWedgePath(130, 130, 85, 125, (index - 0.5) * 360 / 26 - 90, (index + 0.5) * 360 / 26 - 90)"
                :fill="index % 2 === 0 ? '#dbeafe' : '#bfdbfe'"
                stroke="#3b82f6"
                stroke-width="1"
              />
            </g>
            
            <!-- Outer ring border -->
            <circle cx="130" cy="130" r="125" fill="none" stroke="#3b82f6" stroke-width="3"/>
            <circle cx="130" cy="130" r="85" fill="none" stroke="#3b82f6" stroke-width="2"/>
            
            <!-- Label for outer ring -->
            <text x="130" y="10" text-anchor="middle" class="fill-blue-800 font-bold" style="font-size: 12px;">
              KLARTEXT
            </text>
            
            <!-- Outer letters (Klartext) -->
            <g v-for="(letter, index) in alphabet" :key="'outer-' + index">
              <text
                :x="130 + 105 * Math.cos((index * 360 / 26 - 90) * Math.PI / 180)"
                :y="130 + 105 * Math.sin((index * 360 / 26 - 90) * Math.PI / 180)"
                text-anchor="middle"
                dominant-baseline="middle"
                class="font-bold fill-blue-700"
                style="font-size: 14px"
              >
                {{ letter }}
              </text>
            </g>

            <!-- Center control -->
            <circle cx="130" cy="130" r="35" fill="#3b82f6" opacity="0.95" class="cursor-grab active:cursor-grabbing"/>
            
            <text x="130" y="127" text-anchor="middle" class="fill-white font-bold" style="font-size: 10px;">
              DREH
            </text>
            <text x="130" y="137" text-anchor="middle" class="fill-white font-bold" style="font-size: 10px;">
              MICH!
            </text>
          </svg>
        </div>

        <!-- Shift Controls -->
        <div class="mt-6 space-y-3">
          <!-- Current Shift Display -->
          <div class="text-center">
            <div class="inline-block bg-gradient-to-r from-purple-100 to-blue-100 px-8 py-4 rounded-xl shadow-md">
              <p class="text-sm text-gray-600 mb-1">Verschiebung (Key)</p>
              <p class="text-4xl font-bold text-purple-700">{{ shift }}</p>
              <p class="text-xs text-gray-500 mt-1">ROT{{ shift }}</p>
            </div>
          </div>
          
          <!-- Quick Shift Buttons -->
          <div class="flex flex-wrap justify-center gap-2">
            <button
              v-for="quickShift in QUICK_SHIFT_VALUES"
              :key="quickShift"
              @click="setShift(quickShift)"
              :class="[
                'px-4 py-2 rounded-lg font-semibold text-sm transition-all',
                shift === quickShift 
                  ? 'bg-purple-600 text-white shadow-lg scale-105' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              {{ quickShift }}
            </button>
          </div>
          
          <!-- Slider -->
          <div class="px-4">
            <input
              type="range"
              min="0"
              max="25"
              :value="shift"
              @input="onSliderChange"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>13</span>
              <span>25</span>
            </div>
          </div>
        </div>
      </div>
      
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QUICK_SHIFT_VALUES } from '@/constants/caesar'

/**
 * Caesar Wheel Component
 * Interactive visual cipher wheel for demonstrating Caesar cipher
 */

interface Props {
  shift: number
  snappedRotation: number
  isDragging: boolean
  alphabet: string[]
}

defineProps<Props>()

const emit = defineEmits<{
  'update:shift': [value: number]
  startDrag: [event: MouseEvent | TouchEvent]
}>()

interface Point {
  x: number
  y: number
}

/**
 * Convert polar coordinates to cartesian
 */
function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
): Point {
  const angleInRadians = (angleInDegrees * Math.PI) / 180
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

/**
 * Create SVG path for a wedge segment
 */
function createWedgePath(
  cx: number,
  cy: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
): string {
  const start = polarToCartesian(cx, cy, innerRadius, startAngle)
  const innerEnd = polarToCartesian(cx, cy, innerRadius, endAngle)
  const outerStart = polarToCartesian(cx, cy, outerRadius, startAngle)
  const outerEnd = polarToCartesian(cx, cy, outerRadius, endAngle)

  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0

  return [
    `M ${start.x} ${start.y}`,
    `L ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${start.x} ${start.y}`,
    'Z',
  ].join(' ')
}

/**
 * Set shift value
 */
function setShift(newShift: number): void {
  emit('update:shift', newShift)
}

/**
 * Handle slider input
 */
function onSliderChange(event: Event): void {
  const target = event.target as HTMLInputElement
  emit('update:shift', parseInt(target.value, 10))
}

/**
 * Start drag operation
 */
function startDrag(event: MouseEvent | TouchEvent): void {
  emit('startDrag', event)
}
</script>

<style scoped>
svg {
  user-select: none;
  -webkit-user-select: none;
}
</style>
