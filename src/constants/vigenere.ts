// ============================================
// ALPHABET & SECTIONS
// ============================================

export const VIGENERE_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const VIGENERE_SECTIONS = [
  { id: 'intro', label: 'Tabula Recta', icon: '📚' },
  { id: 'comparison', label: 'Caesar vs. Vigenère', icon: '⚖️' },
  { id: 'encrypt-decrypt', label: 'Ver- & Entschlüsseln', icon: '🔐' },
  { id: 'kasiski', label: 'Kryptoanalyse', icon: '🔬' },
  { id: 'quiz', label: 'Quiz', icon: '✍️' },
];

// ============================================
// LEARNING OBJECTIVES
// ============================================

export const VIGENERE_LEARNING_OBJECTIVES = [
  {
    icon: '✓',
    text: 'Die <strong>Tabula Recta</strong> (Vigenère-Quadrat) lesen und anwenden',
  },
  {
    icon: '✓',
    text: 'Den Unterschied zwischen <strong>monoalphabetischer</strong> (Caesar) und <strong>polyalphabetischer</strong> (Vigenère) Verschlüsselung erklären',
  },
  {
    icon: '✓',
    text: 'Texte mit einem Schlüsselwort <strong>verschlüsseln und entschlüsseln</strong>',
  },
  {
    icon: '✓',
    text: 'Die <strong>Schwachstellen</strong> der Vigenère-Verschlüsselung verstehen',
  },
];

// ============================================
// HEADER CONTENT
// ============================================

export const VIGENERE_HEADER = {
  title: 'Vigenère-Verschlüsselung',
  description:
    '<strong>Die polyalphabetische Revolution:</strong> Im 16. Jahrhundert entwickelte Blaise de Vigenère eine Verschlüsselung, die für Jahrhunderte als unknackbar galt.',
};

// ============================================
// TABULA RECTA SECTION
// ============================================

export const VIGENERE_TABULA_RECTA = {
  monoalphabeticProblems: [
    {
      icon: '⚠️',
      text: '<strong>Bei allen monoalphabetischen Verschlüsselungen:</strong> Buchstabenhäufigkeiten bleiben erhalten → <strong>Häufigkeitsanalyse</strong> verrät den Schlüssel',
    },
    {
      icon: '⚠️',
      text: '<strong>Bei Ceasar-Verschlüsselung:</strong> Nur 25 mögliche Verschiebungen → <strong>Brute-Force-Attacke</strong> in Sekunden',
    },
  ],
  polyalphabeticAdvantages: [
    {
      icon: '💡',
      text: 'Ein <strong>Schlüsselwort</strong> bestimmt, welche Verschiebung jeweils verwendet wird',
    },
    {
      icon: '✓',
      text: '<strong>Vorteil:</strong> Gleiche Buchstaben werden <strong>unterschiedlich verschlüsselt</strong> → Häufigkeitsanalyse viel schwieriger',
    },
  ],
  historicalFact:
    '📖 Historischer Fakt: Die Vigenère-Verschlüsselung galt über 300 Jahre lang als <em>"le chiffre indéchiffrable"</em> (die unknackbare Verschlüsselung) – bis Mathematiker im 19. Jahrhundert Methoden fanden, sie zu brechen.',
};

export const VIGENERE_EXAMPLE_KEY = 'OLE';
export const VIGENERE_EXAMPLE_PLAINTEXT = 'FUSSBALL';

// ============================================
// COMPARISON SECTION
// ============================================

export const VIGENERE_COMPARISON = {
  defaultText: 'HAMMER',
  defaultCaesarShift: 3,
  defaultVigenereKey: 'TOR',
  caesarProblem:
    '<strong>Monoalphabetische Tatsache:</strong> Gleiche Buchstaben werden immer mit der <em>glich</em> verschlüsselt.',
  vigenereAdvantage:
    '<strong>Polyalphabetische Tatsache:</strong> Gleiche Buchstaben werden <em>unterschiedlich</em> verschlüsselt!',
};

// ============================================
// ENCRYPT/DECRYPT SECTION
// ============================================

export const VIGENERE_ENCRYPT_DECRYPT = {
  keyLengthWarnings: {
    short: {
      threshold: 3,
      message:
        '💡 <strong>Tipp:</strong> Schlüssel mit nur 1-2 Buchstaben sind sehr unsicher! Versuche mindestens 3 Buchstaben.',
    },
    good: {
      threshold: 8,
      message:
        '✅ <strong>Sehr gut!</strong> Ein längerer Schlüssel macht die Verschlüsselung sicherer.',
    },
  },
  placeholders: {
    key: 'z.B. GEHEIM',
    plaintext: 'Gib hier deine Nachricht ein...',
    ciphertext: 'Gib hier den verschlüsselten Text ein...',
  },
};

// ============================================
// KASISKI TEST SECTION
// ============================================

export const VIGENERE_KASISKI = {
  textLengthHints: {
    tooShort: {
      threshold: 0, // Keine Warnung mehr für kurze Texte
      message:
        '⚠️ <strong>Hinweis:</strong> Dein Text ist sehr kurz ({length} Buchstaben). Der Kasiski-Test funktioniert besser mit mindestens 100 Buchstaben. Mit so wenig Text finden wir möglicherweise keine aussagekräftigen Wiederholungen.',
    },
    short: {
      thresholds: [0, 0], // Keine Info-Meldung mehr
      message:
        '💡 <strong>Tipp:</strong> Der Text könnte länger sein ({length} Buchstaben). Je länger der Text, desto zuverlässiger die Analyse. <strong>Optimal sind 100+ Buchstaben.</strong> Bei kurzen Texten können Zufallswiederholungen die Ergebnisse verfälschen.',
    },
    good: {
      threshold: 100,
      message:
        '✅ <strong>Gut!</strong> Textlänge: {length} Buchstaben. Das ist ausreichend für eine zuverlässige Kryptoanalyse. Bei dieser Länge sollten wir aussagekräftige Muster erkennen können.',
    },
  },
  
};

// ============================================
// QUIZ SECTION
// ============================================

export const VIGENERE_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Was ist der Hauptvorteil von Vigenère gegenüber der Caesar-Verschlüsselung?',
    options: [
      { text: 'Sie verwendet keine Mathematik' },
      { text: 'Sie ist schneller zu berechnen' },
      { text: 'Gleiche Buchstaben werden unterschiedlich verschlüsselt' },
      { text: 'Sie braucht keinen Schlüssel' },
    ],
    correctAnswer: 2,
    explanation:
      'Vigenère verwendet mehrere Verschiebungen (polyalphabetisch), wodurch gleiche Buchstaben unterschiedlich verschlüsselt werden können. Das macht Häufigkeitsanalysen schwieriger.',
  },
  {
    id: 2,
    question: 'Du verschlüsselst "AAAA" mit dem Schlüssel "ABCD". Was ist der Geheimtext?',
    options: [{ text: 'BBBB' }, { text: 'ABCD' }, { text: 'BCDE' }, { text: 'AAAA' }],
    correctAnswer: 1,
    explanation:
      'Jedes A wird mit dem entsprechenden Schlüsselbuchstaben verschoben: A+A=A (0+0), A+B=B (0+1), A+C=C (0+2), A+D=D (0+3). Ergebnis: ABCD.',
  },
  {
    id: 3,
    question: 'Warum sind Wiederholungen im Klartext ein Problem für die Vigenère-Verschlüsselung?',
    options: [
      { text: 'Sie machen den Text schwerer lesbar' },
      { text: 'Sie machen den Text zu lang' },
      {
        text: 'Sie können dieselbe verschlüsselte Sequenz erzeugen und die Schlüssellänge verraten',
      },
      { text: 'Sie sind verboten in der Kryptographie' },
    ],
    correctAnswer: 2,
    explanation:
      'Wenn dieselbe Wortgruppe mit demselben Schlüsselteil verschlüsselt wird, entsteht die gleiche verschlüsselte Sequenz. Der Abstand zwischen diesen Wiederholungen kann die Schlüssellänge verraten.',
  },
  {
    id: 4,
    question:
      'Im Geheimtext findest du "XYZ" an Position 5 und wieder an Position 35. Was kannst du über die Schlüssellänge vermuten?',
    options: [
      {
        text: 'Die Schlüssellänge ist wahrscheinlich ein Teiler von 30 (z.B. 2, 3, 5, 6, 10, 15, oder 30)',
      },
      { text: 'Die Schlüssellänge spielt keine Rolle' },
      { text: 'Der Schlüssel ist genau 3 Buchstaben lang' },
      { text: 'Die Schlüssellänge ist definitiv 30' },
    ],
    correctAnswer: 0,
    explanation:
      'Der Abstand beträgt 30 (35-5). Die Schlüssellänge ist wahrscheinlich ein Teiler von 30. Dies liegt daran, dass dieselbe Klartextsequenz nur dann zur gleichen Geheimtextsequenz führt, wenn sie mit demselben Schlüsselteil verschlüsselt wird.',
  },
  {
    id: 5,
    question: 'Wofür wird der Kasiski-Test verwendet?',
    options: [
      { text: 'Um den Klartext direkt zu erraten' },
      { text: 'Um neue Schlüssel zu generieren' },
      { text: 'Um Texte schneller zu verschlüsseln' },
      {
        text: 'Um die Schlüssellänge durch Analyse von Wiederholungen zu bestimmen',
      },
    ],
    correctAnswer: 3,
    explanation:
      'Der Kasiski-Test sucht Wiederholungen im Geheimtext. Die Abstände zwischen diesen Wiederholungen verraten wahrscheinliche Schlüssellängen.',
  },
  {
    id: 6,
    question:
      'Wenn du die Schlüssellänge 5 kennst, wie gehst du vor, um jeden einzelnen Schlüsselbuchstaben zu finden?',
    options: [
      { text: 'Du nutzt die Tabula Recta rückwärts' },
      {
        text: 'Du teilst den Text in 5 Gruppen (Position 1, 6, 11, ... / Position 2, 7, 12, ... usw.) und analysierst jede Gruppe einzeln wie eine Caesar-Verschlüsselung',
      },
      { text: 'Du kannst die einzelnen Buchstaben nicht herausfinden' },
      { text: 'Du probierst alle möglichen 5-Buchstaben-Kombinationen aus (Brute-Force)' },
    ],
    correctAnswer: 1,
    explanation:
      'Bei bekannter Schlüssellänge wird jede Position wie eine separate Caesar-Verschlüsselung behandelt. Durch Häufigkeitsanalyse jeder Gruppe kann man jeden Schlüsselbuchstaben einzeln bestimmen.',
  },
  {
    id: 7,
    question:
      'Warum gilt die Vigenère-Verschlüsselung mit einem zufälligen Schlüssel, der so lang wie der Text ist und nur einmal verwendet wird, als unknackbar?',
    options: [
      { text: 'Weil die Tabula Recta zu komplex wird' },
      { text: 'Weil niemand genug Zeit hat, alle Möglichkeiten auszuprobieren' },
      { text: 'Das ist falsch, auch diese Verschlüsselung kann immer geknackt werden' },
      {
        text: 'Weil es keine Wiederholungen im Schlüssel gibt und somit keine statistischen Muster erkennbar sind',
      },
    ],
    correctAnswer: 3,
    explanation:
      'Dies beschreibt das "One-Time-Pad" – die einzige nachweislich unknackbare Verschlüsselung. Ohne Wiederholungen gibt es keine statistischen Muster, und jeder mögliche Klartext ist gleich wahrscheinlich.',
  },
  {
    id: 8,
    question:
      'Bei einem Vigenère-verschlüsselten Text mit Schlüssellänge 4 findest du in jeder 4. Position (1, 5, 9, 13, ...) häufig den Buchstaben "Q". Was bedeutet das wahrscheinlich?',
    options: [
      { text: 'Das ist reiner Zufall' },
      {
        text: 'An diesen Positionen steht im Klartext wahrscheinlich oft "E" und der erste Schlüsselbuchstabe verschiebt E zu Q',
      },
      { text: 'Der Klartext enthält viele Q' },
      { text: 'Der Schlüssel beginnt mit Q' },
    ],
    correctAnswer: 1,
    explanation:
      'In deutschen/englischen Texten ist E der häufigste Buchstabe. Wenn jede 4. Position denselben Geheimtextbuchstaben zeigt, wurde wahrscheinlich E mit demselben Schlüsselbuchstaben verschlüsselt. E→Q bedeutet eine Verschiebung von 12, also ist der erste Schlüsselbuchstabe "M".',
  },
  {
    id: 9,
    question: 'Welche Aussage über die Sicherheit von Vigenère ist korrekt?',
    options: [
      { text: 'Moderne Computer können Vigenère nicht knacken' },
      { text: 'Die Länge des Geheimtexts hat keinen Einfluss auf die Sicherheit' },
      { text: 'Ein Vigenère-Schlüssel mit nur einem Buchstaben ist identisch mit Caesar' },
      { text: 'Vigenère ist immer sicherer als Caesar, unabhängig vom Schlüssel' },
    ],
    correctAnswer: 2,
    explanation:
      'Ein einbuchstabiger Vigenère-Schlüssel bedeutet, dass jeder Buchstabe mit derselben Verschiebung verschlüsselt wird – das ist exakt die Caesar-Verschlüsselung. Längere Geheimtexte erleichtern die Kryptoanalyse durch mehr statistische Daten.',
  },
];

export const VIGENERE_QUIZ_RESULTS = {
  scores: {
    perfect: {
      threshold: 9,
      emoji: '🎉',
      title: 'Perfekt!',
      message: 'Du hast alle Konzepte verstanden! Du bist ein Kryptoanalyse-Experte! 🌟',
    },
    veryGood: {
      threshold: 7,
      emoji: '👍',
      title: 'Sehr gut!',
      message: 'Fast perfekt! Schau dir die falsche(n) Antwort(en) nochmal an.',
    },
    good: {
      threshold: 5,
      emoji: '👌',
      title: 'Nicht schlecht!',
      message: 'Du bist auf dem richtigen Weg. Lies nochmal die entsprechenden Abschnitte.',
    },
    needsImprovement: {
      threshold: 0,
      emoji: '💪',
      title: 'Weiter üben!',
      message: 'Gehe die Lektion nochmal durch und versuche es erneut.',
    },
  },
};
