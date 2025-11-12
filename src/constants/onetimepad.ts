/**
 * Konstanten für One-Time-Pad Modul
 */

export const OTP_SECTIONS = [
  {
    id: 'intro',
    label: 'Einführung',
    icon: '📖',
  },
  {
    id: 'how-it-works',
    label: 'Funktionsweise',
    icon: '⚙️',
  },
  {
    id: 'interactive',
    label: 'Interaktiv',
    icon: '🎮',
  },
  {
    id: 'perfect-secrecy',
    label: 'Perfekte Sicherheit',
    icon: '🔒',
  },
  {
    id: 'problems',
    label: 'Praktische Probleme',
    icon: '⚠️',
  },
  {
    id: 'quiz',
    label: 'Quiz',
    icon: '🎯',
  },
] as const;

export const OTP_LEARNING_OBJECTIVES = [
  'Verstehen, wie One-Time-Pad funktioniert',
  'Den Unterschied zu anderen Verschlüsselungsmethoden erkennen',
  'Das Konzept der perfekten Sicherheit nachvollziehen',
  'Die praktischen Einschränkungen von OTP verstehen',
  'XOR-Operation anwenden können',
];

export const OTP_KEY_REQUIREMENTS = [
  'Der Schlüssel muss mindestens so lang sein wie die Nachricht',
  'Der Schlüssel muss vollständig zufällig sein',
  'Der Schlüssel darf nur ein einziges Mal verwendet werden',
  'Der Schlüssel muss geheim bleiben',
];

export const OTP_ADVANTAGES = [
  'Mathematisch beweisbar unknackbar',
  'Keine Muster in der verschlüsselten Nachricht',
  'Frequenzanalyse ist nutzlos',
  'Unabhängig von der Rechenleistung des Angreifers',
];

export const OTP_DISADVANTAGES = [
  'Schlüssel muss so lang sein wie die Nachricht',
  'Schlüsselverteilung ist extrem schwierig',
  'Schlüssel kann nicht wiederverwendet werden',
  'Erfordert echte Zufallszahlen (nicht pseudo-zufällig)',
];

export const OTP_QUIZ_QUESTIONS = [
  {
    id: 'q1',
    question: 'Was macht das One-Time-Pad unknackbar?',
    options: [
      'Die perfekte Zufälligkeit und einmalige Verwendung des Schlüssels',
      'Die mathematische Komplexität',
      'Die Länge des Schlüssels',
      'Die XOR-Operation',
    ],
    correctIndex: 0,
    explanation:
      'Das One-Time-Pad ist unknackbar, weil der Schlüssel vollständig zufällig ist, nur einmal verwendet wird und genauso lang ist wie die Nachricht. Dadurch ist jede Entschlüsselung gleich wahrscheinlich.',
  },
  {
    id: 'q2',
    question: 'Was passiert, wenn man denselben Schlüssel zweimal verwendet?',
    options: [
      'Die Verschlüsselung wird stärker',
      'Der Computer stürzt ab',
      'Nichts, das ist kein Problem',
      'Die Sicherheit wird kompromittiert - ein Angreifer kann Muster erkennen',
    ],
    correctIndex: 3,
    explanation:
      'Wenn derselbe Schlüssel für zwei Nachrichten verwendet wird, können Angreifer die verschlüsselten Nachrichten XOR-verknüpfen und so die Schlüssel eliminieren. Das ermöglicht Kryptoanalyse.',
  },
  {
    id: 'q3',
    question: 'Welche Operation wird beim One-Time-Pad verwendet?',
    options: ['Modulo', 'XOR (Exklusives Oder)', 'Addition', 'Multiplikation'],
    correctIndex: 1,
    explanation:
      'Die XOR-Operation (⊕) wird verwendet, weil sie ihre eigene Umkehrung ist: (M ⊕ K) ⊕ K = M. Das vereinfacht Ver- und Entschlüsselung.',
  },
  {
    id: 'q4',
    question: 'Warum wird das One-Time-Pad in der Praxis selten verwendet?',
    options: [
      'Es funktioniert nur bei kurzen Nachrichten',
      'Es ist zu langsam',
      'Die Schlüsselverteilung ist extrem aufwendig',
      'Es ist zu leicht zu knacken',
    ],
    correctIndex: 2,
    explanation:
      'Das Hauptproblem ist die Schlüsselverteilung. Man muss einen genauso langen Schlüssel wie die Nachricht sicher übertragen - wenn man das kann, könnte man genauso gut die Nachricht selbst übertragen.',
  },
  {
    id: 'q5',
    question: 'Was bedeutet "perfekte Sicherheit" beim One-Time-Pad?',
    options: [
      'Es verwendet sehr lange Passwörter',
      'Es dauert sehr lange, den Code zu knacken',
      'Es ist so sicher wie möglich, kann aber trotzdem geknackt werden',
      'Ein Angreifer erhält keine Information über die Nachricht, selbst mit unbegrenzter Rechenleistung',
    ],
    correctIndex: 3,
    explanation:
      'Perfekte Sicherheit bedeutet, dass ein Geheimtext einem Angreifer absolut keine Information über den Klartext liefert - unabhängig von der verfügbaren Rechenleistung.',
  },
];
