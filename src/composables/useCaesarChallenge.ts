import { ref, type Ref } from "vue";
import { CHALLENGE_WORDS, CHALLENGE_SHIFTS } from "@/constants/caesar";
import type {
  Challenge,
  ChallengeFeedback,
  ChallengeResult,
} from "@/types/caesar";

interface UseCaesarChallengeReturn {
  challenge: Ref<Challenge>;
  userAnswer: Ref<string>;
  challengeCompleted: Ref<boolean>;
  challengeFeedback: Ref<ChallengeFeedback | null>;
  checkChallenge: (onComplete: (result: ChallengeResult) => void) => void;
  newChallenge: () => void;
  reset: () => void;
}

const PERFECT_SCORE = 100;

/**
 * Caesar Challenge Composable
 * Manages the interactive challenge functionality
 */
export function useCaesarChallenge(
  caesarShift: (text: string, shift: number) => string
): UseCaesarChallengeReturn {
  const challenge = ref<Challenge>({ word: "HALLO", shift: 3 });
  const userAnswer = ref("");
  const challengeCompleted = ref(false);
  const challengeFeedback = ref<ChallengeFeedback | null>(null);

  /**
   * Get random element from array
   */
  function getRandomElement<T>(array: readonly T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Generate new random challenge
   */
  function generateChallenge(): Challenge {
    return {
      word: getRandomElement(CHALLENGE_WORDS),
      shift: getRandomElement(CHALLENGE_SHIFTS),
    };
  }

  /**
   * Compare answers (case-insensitive)
   */
  function isAnswerCorrect(userInput: string, correct: string): boolean {
    return userInput.trim().toUpperCase() === correct.trim().toUpperCase();
  }

  /**
   * Create success feedback
   */
  function createSuccessFeedback(
    word: string,
    answer: string
  ): ChallengeFeedback {
    return {
      correct: true,
      message: `🎉 Richtig! ${word} wird zu ${answer}`,
    };
  }

  /**
   * Create error feedback
   */
  function createErrorFeedback(): ChallengeFeedback {
    return {
      correct: false,
      message: "❌ Nicht ganz. Tipp: Nutze die Caesar-Scheibe zur Hilfe!",
    };
  }

  /**
   * Check user's challenge answer
   */
  function checkChallenge(onComplete: (result: ChallengeResult) => void): void {
    if (!userAnswer.value.trim()) return;

    const correctAnswer = caesarShift(
      challenge.value.word,
      challenge.value.shift
    );

    const isCorrect = isAnswerCorrect(userAnswer.value, correctAnswer);

    if (isCorrect) {
      challengeCompleted.value = true;
      challengeFeedback.value = createSuccessFeedback(
        challenge.value.word,
        correctAnswer
      );
      onComplete({ score: PERFECT_SCORE, completed: true });
    } else {
      challengeFeedback.value = createErrorFeedback();
    }
  }

  /**
   * Generate new challenge
   */
  function newChallenge(): void {
    challenge.value = generateChallenge();
    userAnswer.value = "";
    challengeCompleted.value = false;
    challengeFeedback.value = null;
  }

  /**
   * Reset challenge state
   */
  function reset(): void {
    userAnswer.value = "";
    challengeCompleted.value = false;
    challengeFeedback.value = null;
  }

  return {
    challenge,
    userAnswer,
    challengeCompleted,
    challengeFeedback,
    checkChallenge,
    newChallenge,
    reset,
  };
}
