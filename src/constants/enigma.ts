import type { AvailableRotor, EnigmaSection } from '@/types/enigma';

/**
 * Historische ENIGMA-Rotoren (Wehrmacht M3)
 * Jeder Rotor hat eine eindeutige Verdrahtung und Übertragungsnocken-Position
 */
export const AVAILABLE_ROTORS: AvailableRotor[] = [
  {
    id: 'I',
    name: 'Rotor I',
    wiring: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ',
    notch: 'Q',
    description: 'Übertrag bei Q→R',
  },
  {
    id: 'II',
    name: 'Rotor II',
    wiring: 'AJDKSIRUXBLHWTMCQGZNPYFVOE',
    notch: 'E',
    description: 'Übertrag bei E→F',
  },
  {
    id: 'III',
    name: 'Rotor III',
    wiring: 'BDFHJLCPRTXVZNYEIWGAKMUSQO',
    notch: 'V',
    description: 'Übertrag bei V→W',
  },
  {
    id: 'IV',
    name: 'Rotor IV',
    wiring: 'ESOVPZJAYQUIRHXLNFTGKDCMWB',
    notch: 'J',
    description: 'Übertrag bei J→K',
  },
  {
    id: 'V',
    name: 'Rotor V',
    wiring: 'VZBRGITYUPSDNHLXAWMJQOFECK',
    notch: 'Z',
    description: 'Übertrag bei Z→A',
  },
];

/**
 * Historische ENIGMA-Reflektoren
 */
export const REFLECTORS: Record<string, string> = {
  B: 'YRUHQSLDPXNGOKMIEBFZCWVJAT',
  C: 'FVPJIAOYEDRZXWGCTKUQSBNMHL',
};

/**
 * Standard-Alphabet für Berechnungen
 */
export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Navigation-Abschnitte für die ENIGMA-Lerneinheit
 */
export const ENIGMA_SECTIONS: EnigmaSection[] = [
  {
    id: 'intro',
    label: 'Einführung',
    icon: '🎯',
  },
  {
    id: 'history',
    label: 'Geschichte',
    icon: '📜',
  },
  {
    id: 'rotors',
    label: 'Rotoren',
    icon: '⚙️',
  },
  {
    id: 'plugboard',
    label: 'Steckerbrett',
    icon: '🔌',
  },
  {
    id: 'simulator',
    label: 'ENIGMA-Simulator',
    icon: '🖥️',
  },
  {
    id: 'cryptanalysis',
    label: 'Kryptoanalyse',
    icon: '🔍',
  },
  {
    id: 'quiz',
    label: 'Quiz',
    icon: '✅',
  },
];

/**
 * Beispiel-Nachrichten für den Simulator
 */
export const EXAMPLE_MESSAGES = [
  {
    plaintext: 'HELLOWORLD',
    key: 'AAA',
    plugboard: [],
    description: 'Einfache Nachricht ohne Steckerbrett',
  },
  {
    plaintext: 'ATTACKATDAWN',
    key: 'MCK',
    plugboard: [
      { from: 'A', to: 'R' },
      { from: 'G', to: 'K' },
    ],
    description: 'Militärische Nachricht mit Steckerbrett',
  },
];

/**
 * Quiz-Fragen für die Lernkontrolle
 */
export const ENIGMA_QUIZ_QUESTIONS = [
  {
    question: 'Was ist der Hauptunterschied zwischen Vigenère und ENIGMA?',
    options: [
      'ENIGMA kann nur Zahlen verschlüsseln',
      'ENIGMA ist langsamer als Vigenère',
      'ENIGMA verwendet kein Alphabet',
      'ENIGMA verwendet mechanische Rotoren statt einem festen Schlüssel',
    ],
    correctIndex: 3,
    explanation:
      'ENIGMA verwendet mechanische Rotoren, die sich nach jedem Buchstaben weiterdrehen. Dies macht den Schlüsselzyklus unfassbar lang, während Vigenère eine feste Schlüssellänge hat.',
  },
  {
    question: 'Warum dreht sich der Rotor nach jedem Buchstaben?',
    options: [
      'Um die Verschlüsselung polyalphabetisch zu machen',
      'Das ist ein Fehler in der Maschine',
      'Um schneller zu verschlüsseln',
      'Um Strom zu sparen',
    ],
    correctIndex: 0,
    explanation:
      'Durch das Weiterdrehen ändert sich die Verschlüsselung nach jedem Buchstaben. Derselbe Buchstabe wird also immer anders verschlüsselt - das Prinzip der polyalphabetischen Substitution.',
  },
  {
    question: 'Welche Rolle spielt der Reflektor?',
    options: [
      'Er zeigt die verschlüsselten Buchstaben an',
      'Er macht die Verschlüsselung rückgängig',
      'Er ermöglicht Ver- und Entschlüsselung mit derselben Einstellung',
      'Er verstärkt das elektrische Signal',
    ],
    correctIndex: 2,
    explanation:
      'Der Reflektor sorgt dafür, dass ENIGMA symmetrisch arbeitet: Mit derselben Einstellung kann man verschlüsseln UND entschlüsseln. Das Signal läuft durch die Rotoren, wird reflektiert und läuft rückwärts wieder durch.',
  },
  {
    question: 'Was war die Schwachstelle, die zum Knacken der ENIGMA führte?',
    options: [
      'Das Steckerbrett war zu kompliziert',
      'Die Maschine war zu langsam',
      'Es gab zu wenige Rotoren',
      'Kein Buchstabe konnte auf sich selbst verschlüsselt werden',
    ],
    correctIndex: 3,
    explanation:
      'Eine fundamentale Eigenschaft der ENIGMA war, dass kein Buchstabe jemals auf sich selbst verschlüsselt werden konnte. Diese Eigenschaft half Alan Turing und seinem Team bei der Kryptoanalyse enorm.',
  },
  {
    question: 'Was ist ein "Crib" in der ENIGMA-Kryptoanalyse?',
    options: [
      'Ein bekanntes oder vermutetes Wort im Klartext',
      'Ein Code-Name für die Bombe-Maschine',
      'Ein Fehler in der ENIGMA-Maschine',
      'Eine spezielle Rotor-Einstellung',
    ],
    correctIndex: 0,
    explanation:
      'Ein "Crib" ist ein bekanntes oder vermutetes Wort im Klartext (z.B. "WETTER" in Wetterberichten). Durch Vergleich mit dem Geheimtext und unter Ausnutzung der Tatsache, dass kein Buchstabe auf sich selbst verschlüsselt werden kann, konnten Kryptoanalytiker die Einstellungen eingrenzen.',
  },
  {
    question: 'Wie funktionierte Alan Turings "Bombe"-Maschine?',
    options: [
      'Sie hackte das Steckerbrett',
      'Sie verschlüsselte Nachrichten schneller als ENIGMA',
      'Sie probierte systematisch verschiedene Rotor-Einstellungen basierend auf Cribs und Widersprüchen aus',
      'Sie sprengte die ENIGMA-Maschinen',
    ],
    correctIndex: 2,
    explanation:
      'Die Bombe testete systematisch verschiedene Rotor-Einstellungen, indem sie nach logischen Widersprüchen suchte. Wenn eine Einstellung zu einem Widerspruch führte, konnte sie ausgeschlossen werden. So wurden täglich die Einstellungen gefunden.',
  },
  {
    question: 'Wie viele mögliche Einstellungen hatte die Wehrmacht-ENIGMA (M3)?',
    options: ['Etwa 159 Trilliarden', 'Etwa 159 Millionen', '1590', 'Unendlich viele'],
    correctIndex: 0,
    explanation:
      'Die ENIGMA M3 hatte etwa 159.000.000.000.000.000.000 (159 Trilliarden) mögliche Einstellungen! Das kommt durch die Kombination von: 3 Rotoren aus 5 (60 Möglichkeiten), 26³ Rotorstellungen (17.576), 26³ Ringstellungen (17.576) und Steckerbrett (≈ 150 Billionen) Kombinationen.',
  },
  {
    question: 'Warum änderten die Deutschen täglich die ENIGMA-Einstellungen?',
    options: [
      'Weil die Maschine nach 24 Stunden automatisch neu gestartet werden musste',
      'Um die Maschine vor Überhitzung zu schützen',
      'Damit die Kommunikation schneller übertragen werden konnte',
      'Würden die Einstellungen nicht täglich geändert, könnte der Gegner einmal geknackte Schlüssel für viele Nachrichten nutzen, was viel mehr Schaden anrichten würde',
    ],
    correctIndex: 3,
    explanation:
      'Durch tägliches Ändern der Einstellungen (Tageschlüssel) wurde sichergestellt, dass selbst wenn ein Tageschlüssel geknackt wurde, nur die Nachrichten dieses einen Tages gelesen werden konnten. Am nächsten Tag musste die Kryptoanalyse von vorne beginnen.',
  },
];
