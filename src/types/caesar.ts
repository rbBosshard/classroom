/**
 * Caesar Cipher Types
 */

export interface Challenge {
  word: string;
  shift: number;
}

export interface ChallengeFeedback {
  correct: boolean;
  message: string;
}

export interface ChallengeResult {
  score: number;
  completed: boolean;
}

export interface WheelState {
  rotation: number;
  isDragging: boolean;
  startAngle: number;
  currentAngle: number;
}

export interface CipherState {
  shift: number;
}
