import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  type Ref,
  type ComputedRef,
} from "vue";
import { ALPHABET_SIZE, WHEEL_CONFIG } from "@/constants/caesar";

interface UseCaesarWheelReturn {
  rotation: Ref<number>;
  isDragging: Ref<boolean>;
  shift: ComputedRef<number>;
  snappedRotation: ComputedRef<number>;
  setShift: (newShift: number) => void;
  startDrag: (event: MouseEvent | TouchEvent) => void;
}

interface TouchPosition {
  x: number;
  y: number;
}

/**
 * Caesar Wheel Composable
 * Manages the interactive Caesar wheel drag-and-drop functionality
 */
export function useCaesarWheel(): UseCaesarWheelReturn {
  const rotation = ref(0);
  const isDragging = ref(false);
  const startAngle = ref(0);
  const currentAngle = ref(0);

  /**
   * Calculate shift value from rotation angle
   */
  const shift = computed(() => {
    const normalizedRotation = ((rotation.value % 360) + 360) % 360;
    return (
      Math.round(normalizedRotation / WHEEL_CONFIG.ANGLE_PER_SEGMENT) %
      ALPHABET_SIZE
    );
  });

  /**
   * Calculate snapped rotation angle for smooth animation
   */
  const snappedRotation = computed(
    () => shift.value * WHEEL_CONFIG.ANGLE_PER_SEGMENT
  );

  /**
   * Extract touch/mouse coordinates from event
   */
  function getEventPosition(event: MouseEvent | TouchEvent): TouchPosition {
    if ("touches" in event) {
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    }
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }

  /**
   * Calculate angle from center to point
   */
  function calculateAngle(
    centerX: number,
    centerY: number,
    pointX: number,
    pointY: number
  ): number {
    return (Math.atan2(pointY - centerY, pointX - centerX) * 180) / Math.PI;
  }

  /**
   * Set shift value directly
   */
  function setShift(newShift: number): void {
    rotation.value = newShift * WHEEL_CONFIG.ANGLE_PER_SEGMENT;
  }

  /**
   * Start drag operation
   */
  function startDrag(event: MouseEvent | TouchEvent): void {
    isDragging.value = true;
    const position = getEventPosition(event);

    const target = event.currentTarget as SVGElement;
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    startAngle.value = calculateAngle(centerX, centerY, position.x, position.y);
    currentAngle.value = rotation.value;

    event.preventDefault();
  }

  /**
   * Handle drag movement
   */
  function onDrag(event: MouseEvent | TouchEvent): void {
    if (!isDragging.value) return;

    const position = getEventPosition(event);
    const wheelElement = document.querySelector('svg[viewBox="0 0 260 260"]');

    if (!wheelElement) return;

    const rect = wheelElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = calculateAngle(centerX, centerY, position.x, position.y);
    const deltaAngle = angle - startAngle.value;

    rotation.value = currentAngle.value + deltaAngle;

    event.preventDefault();
  }

  /**
   * Stop drag operation and snap to nearest position
   */
  function stopDrag(): void {
    if (isDragging.value) {
      rotation.value = snappedRotation.value;
    }
    isDragging.value = false;
  }

  // Setup event listeners
  onMounted(() => {
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", onDrag, { passive: false });
    window.addEventListener("touchend", stopDrag);
  });

  // Cleanup event listeners
  onUnmounted(() => {
    window.removeEventListener("mousemove", onDrag);
    window.removeEventListener("mouseup", stopDrag);
    window.removeEventListener("touchmove", onDrag);
    window.removeEventListener("touchend", stopDrag);
  });

  return {
    rotation,
    isDragging,
    shift,
    snappedRotation,
    setShift,
    startDrag,
  };
}
