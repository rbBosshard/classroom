/**
 * TypeScript Typen für ENIGMA-Verschlüsselung
 */

/**
 * Eine ENIGMA-Rotor mit Verdrahtung
 */
export interface EnigmaRotor {
  id: string;
  name: string;
  wiring: string; // 26 Buchstaben, die die Verdrahtung definieren
  notch: string; // Position(en) des Übertragungsnocken
  position: number; // Aktuelle Position (0-25)
  ringSetting: number; // Ringstellung (0-25)
}

/**
 * Steckerbrett-Verbindung
 */
export interface PlugboardPair {
  from: string;
  to: string;
}

/**
 * Vollständige ENIGMA-Konfiguration
 */
export interface EnigmaConfig {
  rotors: EnigmaRotor[];
  reflector: string; // Reflektor-Verdrahtung
  plugboard: PlugboardPair[];
}

/**
 * ENIGMA-Maschinentypen
 */
export type EnigmaMachineType = 'M3' | 'M4';

/**
 * Verfügbare Rotoren für Auswahl
 */
export interface AvailableRotor {
  id: string;
  name: string;
  wiring: string;
  notch: string;
  description?: string;
}

/**
 * Navigation-Abschnitte für ENIGMA-Lerninhalt
 */
export interface EnigmaSection {
  id: string;
  label: string;
  icon: string;
}

/**
 * Verschlüsselungs-Historie für Debugging
 */
export interface EncryptionStep {
  input: string;
  afterPlugboard: string;
  afterRotors: string;
  afterReflector: string;
  afterRotorsReturn: string;
  output: string;
  rotorPositions: number[];
}
