// ============================================
// ALPHABET & SECTIONS
// ============================================

export const VIGENERE_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const VIGENERE_SECTIONS = [
  { id: "intro", label: "Tabula Recta", icon: "📚" },
  { id: "comparison", label: "Caesar vs. Vigenère", icon: "⚖️" },
  { id: "encrypt-decrypt", label: "Ver- & Entschlüsseln", icon: "🔐" },
  { id: "kasiski", label: "Kasiski-Test", icon: "🔬" },
  { id: "quiz", label: "Quiz", icon: "✍️" },
];

// ============================================
// LEARNING OBJECTIVES
// ============================================

export const VIGENERE_LEARNING_OBJECTIVES = [
  {
    icon: "✓",
    text: "Die <strong>Tabula Recta</strong> (Vigenère-Quadrat) lesen und anwenden",
  },
  {
    icon: "✓",
    text: "Den Unterschied zwischen <strong>monoalphabetischer</strong> (Caesar) und <strong>polyalphabetischer</strong> (Vigenère) Verschlüsselung erklären",
  },
  {
    icon: "✓",
    text: "Texte mit einem Schlüsselwort <strong>verschlüsseln und entschlüsseln</strong>",
  },
  {
    icon: "✓",
    text: "Die <strong>Schwachstellen</strong> der Vigenère-Verschlüsselung verstehen",
  },
  {
    icon: "✓",
    text: "Den <strong>Kasiski-Test</strong> zur Kryptoanalyse anwenden",
  },
];

// ============================================
// HEADER CONTENT
// ============================================

export const VIGENERE_HEADER = {
  title: "Vigenère-Verschlüsselung",
  description:
    "<strong>Die polyalphabetische Revolution:</strong> Im 16. Jahrhundert entwickelte Blaise de Vigenère eine Verschlüsselung, die für Jahrhunderte als unknackbar galt.",
};

// ============================================
// TABULA RECTA SECTION
// ============================================

export const VIGENERE_TABULA_RECTA = {
  monoalphabeticProblems: [
    {
      icon: "⚠️",
      text: "<strong>Bei allen monoalphabetischen Verschlüsselungen:</strong> Buchstabenhäufigkeiten bleiben erhalten → <strong>Häufigkeitsanalyse</strong> verrät den Schlüssel",
    },
    {
      icon: "⚠️",
      text: "<strong>Bei Ceasar-Verschlüsselung:</strong> Nur 25 mögliche Verschiebungen → <strong>Brute-Force-Attacke</strong> in Sekunden",
    },
  ],
  polyalphabeticAdvantages: [
    {
      icon: "💡",
      text: 'Ein <strong>Schlüsselwort</strong> (z.B. "GEHEIM") bestimmt, welche Verschiebung jeweils verwendet wird',
    },
    {
      icon: "✓",
      text: "<strong>Vorteil:</strong> Gleiche Buchstaben werden <strong>unterschiedlich verschlüsselt</strong> → Häufigkeitsanalyse viel schwieriger",
    },
  ],
  historicalFact:
    '📖 Historischer Fakt: Die Vigenère-Verschlüsselung galt über 300 Jahre lang als <em>"le chiffre indéchiffrable"</em> (die unknackbare Verschlüsselung) – bis Mathematiker im 19. Jahrhundert Methoden fanden, sie zu brechen.',
  practiceQuestions: [
    {
      id: 1,
      plainChar: "L",
      keyChar: "A",
      correctAnswer: "L",
      options: ["A", "M", "K", "L"],
      feedbackCorrect:
        "✅ Richtig! L (Index 11) + A (Verschiebung 0) = L (Index 11)",
      feedbackWrong:
        "❌ Falsch. Finde L in der obersten Zeile und A in der linken Spalte. Der Schnittpunkt ist L.",
    },
    {
      id: 2,
      plainChar: "O",
      keyChar: "M",
      correctAnswer: "A",
      options: ["Z", "M", "A", "B"],
      feedbackCorrect:
        "✅ Richtig! O (Index 14) + M (Verschiebung 12) = A (Index 0, Überlauf: 14 + 12 = 26, 26 % 26 = 0)",
      feedbackWrong:
        "❌ Falsch. Finde A in der obersten Zeile und M in der linken Spalte.",
    },
    {
      id: 3,
      plainChar: "L",
      keyChar: "Y",
      correctAnswer: "J",
      options: ["J", "L", "K", "I"],
      feedbackCorrect:
        "✅ Perfekt! L (Index 11) + Y (Verschiebung 24) = J (Überlauf: 11 + 24 = 35, 35 % 26 = 9 = J)",
      feedbackWrong:
        "❌ Falsch. Am Ende des Alphabets geht es wieder bei A los (modulo 26).",
    },
  ],
  practiceSuccessMessage:
    '🎉 Hervorragend! Du verstehts wie man die Tabula Recta anwendet für die Vigenère-Verschlüsselung!',
};

export const VIGENERE_EXAMPLE_KEY = "OLE";
export const VIGENERE_EXAMPLE_PLAINTEXT = "FUSSBALL";

// ============================================
// COMPARISON SECTION
// ============================================

export const VIGENERE_COMPARISON = {
  defaultText: "HAMMER",
  defaultCaesarShift: 3,
  defaultVigenereKey: "ABC",
  caesarProblem:
    "⚠️ <strong>Problem:</strong> Gleiche Buchstaben werden immer <em>gleich</em> verschlüsselt.",
  vigenereAdvantage:
    "✅ <strong>Vorteil:</strong> Gleiche Buchstaben werden <em>unterschiedlich</em> verschlüsselt!",
};

// ============================================
// ENCRYPT/DECRYPT SECTION
// ============================================

export const VIGENERE_ENCRYPT_DECRYPT = {
  keyLengthWarnings: {
    short: {
      threshold: 3,
      message:
        "💡 <strong>Tipp:</strong> Schlüssel mit nur 1-2 Buchstaben sind sehr unsicher! Versuche mindestens 3 Buchstaben.",
    },
    good: {
      threshold: 8,
      message:
        "✅ <strong>Sehr gut!</strong> Ein längerer Schlüssel macht die Verschlüsselung sicherer.",
    },
  },
  placeholders: {
    key: "z.B. GEHEIM",
    plaintext: "Gib hier deine Nachricht ein...",
    ciphertext: "Gib hier den verschlüsselten Text ein...",
  },
};

// ============================================
// KASISKI TEST SECTION
// ============================================

export const VIGENERE_KASISKI = {
  textLengthHints: {
    tooShort: {
      threshold: 30,
      message:
        "⚠️ <strong>Hinweis:</strong> Dein Text ist sehr kurz ({length} Buchstaben). Der Kasiski-Test funktioniert besser mit mindestens 100 Buchstaben.",
    },
    short: {
      thresholds: [30, 100],
      message:
        "💡 <strong>Tipp:</strong> Der Text könnte länger sein ({length} Buchstaben). Je länger der Text, desto zuverlässiger die Analyse. Optimal sind 100+ Buchstaben.",
    },
    good: {
      threshold: 100,
      message:
        "✅ <strong>Perfekt!</strong> Textlänge: {length} Buchstaben. Das ist ausreichend für eine gute Analyse.",
    },
  },
  learnings: [
    "<strong>Vigenère ist knackbar</strong> - vor allem bei kurzen Schlüsseln oder langen Texten",
    "<strong>Wiederholungen sind gefährlich</strong> - sie verraten die Struktur",
    "<strong>Häufigkeitsanalyse funktioniert immer noch</strong> - nur komplexer",
    "<strong>Je länger der Schlüssel, desto sicherer</strong> - aber auch schwerer zu merken!",
  ],
};

// ============================================
// QUIZ SECTION
// ============================================

export const VIGENERE_QUIZ_QUESTIONS = [
  {
    id: 1,
    question:
      "Was ist der Hauptvorteil von Vigenère gegenüber der Caesar-Verschlüsselung?",
    options: [
      { text: "Sie ist schneller zu berechnen" },
      { text: "Gleiche Buchstaben werden unterschiedlich verschlüsselt" },
      { text: "Sie verwendet keine Mathematik" },
      { text: "Sie braucht keinen Schlüssel" },
    ],
    correctAnswer: 1,
    explanation:
      "Vigenère verwendet mehrere Verschiebungen (polyalphabetisch), wodurch gleiche Buchstaben unterschiedlich verschlüsselt werden können. Das macht Häufigkeitsanalysen schwieriger.",
  },
  {
    id: 2,
    question:
      "Warum sind Wiederholungen im Klartext ein Problem für die Vigenère-Verschlüsselung?",
    options: [
      { text: "Sie machen den Text zu lang" },
      {
        text: "Sie können dieselbe verschlüsselte Sequenz erzeugen und die Schlüssellänge verraten",
      },
      { text: "Sie sind verboten in der Kryptographie" },
      { text: "Sie machen den Text schwerer lesbar" },
    ],
    correctAnswer: 1,
    explanation:
      "Wenn dieselbe Wortgruppe mit demselben Schlüsselteil verschlüsselt wird, entsteht die gleiche verschlüsselte Sequenz. Der Abstand zwischen diesen Wiederholungen kann die Schlüssellänge verraten.",
  },
  {
    id: 3,
    question: "Wofür wird der Kasiski-Test verwendet?",
    options: [
      { text: "Um Texte schneller zu verschlüsseln" },
      {
        text: "Um die Schlüssellänge durch Analyse von Wiederholungen zu bestimmen",
      },
      { text: "Um den Klartext direkt zu erraten" },
      { text: "Um neue Schlüssel zu generieren" },
    ],
    correctAnswer: 1,
    explanation:
      "Der Kasiski-Test sucht Wiederholungen im Geheimtext. Die Abstände zwischen diesen Wiederholungen verraten wahrscheinliche Schlüssellängen.",
  },
  {
    id: 4,
    question: "Wie macht man die Vigenère-Verschlüsselung sicherer?",
    options: [
      { text: "Einen kürzeren Schlüssel verwenden" },
      { text: "Nur Grossbuchstaben verwenden" },
      { text: "Einen längeren, zufälligen Schlüssel verwenden" },
      { text: "Den gleichen Schlüssel immer wiederverwenden" },
    ],
    correctAnswer: 2,
    explanation:
      "Je länger und zufälliger der Schlüssel, desto schwieriger ist es, ihn durch Kryptoanalyse zu knacken.",
  },
];

export const VIGENERE_QUIZ_RESULTS = {
  scores: {
    perfect: {
      threshold: 4,
      emoji: "🎉",
      title: "Perfekt!",
      message: "Du hast alle Konzepte verstanden! 🌟",
    },
    veryGood: {
      threshold: 3,
      emoji: "👍",
      title: "Sehr gut!",
      message: "Fast perfekt! Schau dir die falsche Antwort nochmal an.",
    },
    good: {
      threshold: 2,
      emoji: "👌",
      title: "Nicht schlecht!",
      message:
        "Du bist auf dem richtigen Weg. Lies nochmal die entsprechenden Abschnitte.",
    },
    needsImprovement: {
      threshold: 0,
      emoji: "💪",
      title: "Weiter üben!",
      message: "Gehe die Lektion nochmal durch und versuche es erneut.",
    },
  },
};
