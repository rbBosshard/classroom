import { ref, computed } from 'vue';
import type { EnigmaRotor, PlugboardPair, EncryptionStep } from '@/types/enigma';
import { AVAILABLE_ROTORS, REFLECTORS, ALPHABET } from '@/constants/enigma';

/**
 * Composable für ENIGMA-Verschlüsselung
 * Implementiert die historische Funktionsweise der Wehrmacht ENIGMA M3
 */
export function useEnigmaCipher() {
  // State
  const selectedRotors = ref<EnigmaRotor[]>([
    { ...AVAILABLE_ROTORS[0], position: 0, ringSetting: 0 },
    { ...AVAILABLE_ROTORS[1], position: 0, ringSetting: 0 },
    { ...AVAILABLE_ROTORS[2], position: 0, ringSetting: 0 },
  ]);

  const selectedReflector = ref<string>('B');
  const plugboardPairs = ref<PlugboardPair[]>([]);
  const inputText = ref('');
  const outputText = ref('');
  const encryptionSteps = ref<EncryptionStep[]>([]);
  const showDebugInfo = ref(false);

  /**
   * Hilfsfunktion: Finde Position eines Buchstabens im Alphabet
   */
  function charToIndex(char: string): number {
    return ALPHABET.indexOf(char.toUpperCase());
  }

  /**
   * Hilfsfunktion: Wandle Index zurück in Buchstaben
   */
  function indexToChar(index: number): string {
    return ALPHABET[((index % 26) + 26) % 26]; // Modulo mit negativen Zahlen
  }

  /**
   * Steckerbrett-Transformation
   */
  function applyPlugboard(char: string): string {
    const pair = plugboardPairs.value.find(p => p.from === char || p.to === char);
    if (!pair) return char;
    return pair.from === char ? pair.to : pair.from;
  }

  /**
   * Rotor-Transformation vorwärts
   */
  function encryptThroughRotor(char: string, rotor: EnigmaRotor): string {
    const inputIndex = charToIndex(char);
    const shift = rotor.position - rotor.ringSetting;
    const shiftedIndex = (inputIndex + shift + 26) % 26;
    const outputChar = rotor.wiring[shiftedIndex];
    const outputIndex = charToIndex(outputChar);
    const finalIndex = (outputIndex - shift + 26) % 26;
    return indexToChar(finalIndex);
  }

  /**
   * Rotor-Transformation rückwärts
   */
  function decryptThroughRotor(char: string, rotor: EnigmaRotor): string {
    const shift = rotor.position - rotor.ringSetting;
    const inputIndex = charToIndex(char);
    const shiftedIndex = (inputIndex + shift + 26) % 26;
    const outputIndex = rotor.wiring.indexOf(indexToChar(shiftedIndex));
    const finalIndex = (outputIndex - shift + 26) % 26;
    return indexToChar(finalIndex);
  }

  /**
   * Reflektor-Transformation
   */
  function applyReflector(char: string): string {
    const index = charToIndex(char);
    const reflectorWiring = REFLECTORS[selectedReflector.value];
    return reflectorWiring[index];
  }

  /**
   * Rotoren um eine Position weiterdrehen (mit Übertrag)
   */
  function rotateRotors() {
    // Double-stepping: Mittlerer Rotor dreht sich, wenn er auf Notch ist
    if (selectedRotors.value[1].position === charToIndex(selectedRotors.value[1].notch)) {
      selectedRotors.value[1].position = (selectedRotors.value[1].position + 1) % 26;
      selectedRotors.value[2].position = (selectedRotors.value[2].position + 1) % 26;
    }
    // Rechter Rotor löst mittleren aus
    else if (selectedRotors.value[0].position === charToIndex(selectedRotors.value[0].notch)) {
      selectedRotors.value[1].position = (selectedRotors.value[1].position + 1) % 26;
    }

    // Rechter Rotor dreht sich immer
    selectedRotors.value[0].position = (selectedRotors.value[0].position + 1) % 26;
  }

  /**
   * Verschlüssle einen einzelnen Buchstaben
   */
  function encryptChar(char: string): { output: string; step: EncryptionStep } {
    if (!ALPHABET.includes(char.toUpperCase())) {
      return {
        output: char,
        step: {
          input: char,
          afterPlugboard: char,
          afterRotors: char,
          afterReflector: char,
          afterRotorsReturn: char,
          output: char,
          rotorPositions: selectedRotors.value.map(r => r.position),
        },
      };
    }

    const upperChar = char.toUpperCase();
    const step: EncryptionStep = {
      input: upperChar,
      afterPlugboard: '',
      afterRotors: '',
      afterReflector: '',
      afterRotorsReturn: '',
      output: '',
      rotorPositions: [...selectedRotors.value.map(r => r.position)],
    };

    // 1. Rotoren drehen (BEVOR die Verschlüsselung passiert)
    rotateRotors();

    // 2. Steckerbrett (Eingang)
    let current = applyPlugboard(upperChar);
    step.afterPlugboard = current;

    // 3. Durch Rotoren vorwärts (rechts nach links)
    for (let i = 0; i < selectedRotors.value.length; i++) {
      current = encryptThroughRotor(current, selectedRotors.value[i]);
    }
    step.afterRotors = current;

    // 4. Reflektor
    current = applyReflector(current);
    step.afterReflector = current;

    // 5. Durch Rotoren rückwärts (links nach rechts)
    for (let i = selectedRotors.value.length - 1; i >= 0; i--) {
      current = decryptThroughRotor(current, selectedRotors.value[i]);
    }
    step.afterRotorsReturn = current;

    // 6. Steckerbrett (Ausgang)
    current = applyPlugboard(current);
    step.output = current;

    return { output: current, step };
  }

  /**
   * Verschlüssle kompletten Text
   */
  function encrypt(text: string) {
    outputText.value = '';
    encryptionSteps.value = [];

    for (const char of text) {
      const { output, step } = encryptChar(char);
      outputText.value += output;
      if (ALPHABET.includes(char.toUpperCase())) {
        encryptionSteps.value.push(step);
      }
    }
  }

  /**
   * Entschlüsselung ist identisch mit Verschlüsselung (Symmetrie der ENIGMA)
   */
  function decrypt(text: string) {
    encrypt(text);
  }

  /**
   * Setze Rotorpositionen (z.B. "AAA" oder "MCK")
   */
  function setRotorPositions(positions: string) {
    if (positions.length !== 3) return;

    for (let i = 0; i < 3; i++) {
      const char = positions[i].toUpperCase();
      if (ALPHABET.includes(char)) {
        selectedRotors.value[i].position = charToIndex(char);
      }
    }
  }

  /**
   * Setze Ringstellungen
   */
  function setRingSettings(settings: string) {
    if (settings.length !== 3) return;

    for (let i = 0; i < 3; i++) {
      const char = settings[i].toUpperCase();
      if (ALPHABET.includes(char)) {
        selectedRotors.value[i].ringSetting = charToIndex(char);
      }
    }
  }

  /**
   * Füge Steckerbrett-Verbindung hinzu
   */
  function addPlugboardPair(from: string, to: string) {
    from = from.toUpperCase();
    to = to.toUpperCase();

    // Prüfe ob Buchstaben bereits verwendet werden
    const usedChars = plugboardPairs.value.flatMap(p => [p.from, p.to]);
    if (usedChars.includes(from) || usedChars.includes(to)) {
      return false;
    }

    // Maximal 10 Paare erlaubt (historisch korrekt)
    if (plugboardPairs.value.length >= 10) {
      return false;
    }

    plugboardPairs.value.push({ from, to });
    return true;
  }

  /**
   * Entferne Steckerbrett-Verbindung
   */
  function removePlugboardPair(index: number) {
    plugboardPairs.value.splice(index, 1);
  }

  /**
   * Wechsle einen Rotor
   */
  function changeRotor(slotIndex: number, rotorId: string) {
    const availableRotor = AVAILABLE_ROTORS.find(r => r.id === rotorId);
    if (!availableRotor) return;

    selectedRotors.value[slotIndex] = {
      ...availableRotor,
      position: selectedRotors.value[slotIndex].position,
      ringSetting: selectedRotors.value[slotIndex].ringSetting,
    };
  }

  /**
   * Setze alles zurück
   */
  function reset() {
    selectedRotors.value = [
      { ...AVAILABLE_ROTORS[0], position: 0, ringSetting: 0 },
      { ...AVAILABLE_ROTORS[1], position: 0, ringSetting: 0 },
      { ...AVAILABLE_ROTORS[2], position: 0, ringSetting: 0 },
    ];
    selectedReflector.value = 'B';
    plugboardPairs.value = [];
    inputText.value = '';
    outputText.value = '';
    encryptionSteps.value = [];
  }

  /**
   * Aktuelle Rotorpositionen als String
   */
  const rotorPositionsString = computed(() => {
    return selectedRotors.value.map(r => indexToChar(r.position)).join('');
  });

  /**
   * Anzahl verwendeter Steckerbrett-Verbindungen
   */
  const plugboardCount = computed(() => plugboardPairs.value.length);

  return {
    // State
    selectedRotors,
    selectedReflector,
    plugboardPairs,
    inputText,
    outputText,
    encryptionSteps,
    showDebugInfo,

    // Computed
    rotorPositionsString,
    plugboardCount,

    // Methods
    encrypt,
    decrypt,
    setRotorPositions,
    setRingSettings,
    addPlugboardPair,
    removePlugboardPair,
    changeRotor,
    reset,

    // Constants
    AVAILABLE_ROTORS,
    REFLECTORS,
    ALPHABET,
  };
}
