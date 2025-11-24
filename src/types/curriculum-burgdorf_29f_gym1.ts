import type { Topic } from './curriculum';

export const curriculumTree_BURGDORF_29F_GYM1: Topic = {
  id: 'root',
  title: 'Start',
  icon: '🏠',
  description: 'Willkommen',
  level: 1,
  children: [
    {
      id: 'kryptographie',
      title: 'Kryptographie',
      icon: '🔐',
      description: 'Lerne die Grundlagen der Verschlüsselung',
      level: 2,
      children: [
        {
          id: 'verschluesselung',
          title: 'Verschlüsselung',
          icon: '🔒',
          description: 'Wie werden Nachrichten geheim gehalten?',
          level: 3,
          children: [
            {
              id: 'symmetrisch',
              title: 'Symmetrische Verschlüsselung',
              icon: '🔑',
              description: 'Ein Schlüssel für Ver- und Entschlüsselung',
              level: 3,
              children: [
                {
                  id: 'substitution',
                  title: 'Substitution',
                  icon: '🔄',
                  description:
                    'Die Position der Buchstaben bleibt gleich, nur die Buchstaben selbst werden ausgetauscht.',
                  level: 4,
                  children: [
                    {
                      id: 'monoalphabetisch',
                      title: 'Monoalphabetisch',
                      icon: '🅰️',
                      description: 'Ein Buchstabe wird immer gleich ersetzt',
                      level: 5,
                      children: [
                        {
                          id: 'caesar',
                          title: 'Caesar-Verschlüsselung',
                          icon: '➡️',
                          description: 'Lerne Caesar-Verschlüsselung mit einer drehbaren Scheibe',
                          level: 6,
                          content: 'Caesar',
                        },
                        {
                          id: 'random-monoalphabetic',
                          title: 'Zufällige monoalphabetische Substitution',
                          icon: '🎲',
                          description:
                            'Substitution mit zufälligem Alphabet - sicherer als Caesar!',
                          level: 6,
                          content: 'MonoalphabeticTheory',
                        },
                      ],
                    },
                    {
                      id: 'polyalphabetisch',
                      title: 'Polyalphabetisch',
                      icon: '🔤',
                      description: 'Buchstaben werden unterschiedlich ersetzt',
                      level: 5,
                      children: [
                        {
                          id: 'vigenere',
                          title: 'Vigenère-Verschlüsselung',
                          icon: '🗝️',
                          description:
                            'Lerne die berühmte polyalphabetische Verschlüsselung - und wie man sie knackt!',
                          level: 6,
                          content: 'Vigenere',
                        },
                        {
                          id: 'enigma',
                          title: 'ENIGMA-Maschine',
                          icon: '⚙️',
                          description:
                            'Die legendäre Verschlüsselungsmaschine des 2. Weltkriegs - von der Mechanik bis zur Kryptoanalyse',
                          level: 6,
                          content: 'Enigma',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'transposition',
                  title: 'Transposition',
                  icon: '🔀',
                  description:
                    'Die Buchstaben selbst bleiben gleich, nur ihre Position wird verändert.',
                  level: 4,
                  children: [
                    {
                      id: 'skytale',
                      title: 'Skytale',
                      icon: '📏',
                      description: 'Die antike spartanische Transpositionsverschlüsselung',
                      level: 5,
                      content: 'Skytale',
                    },
                  ],
                },
                {
                  id: 'modern-crypto',
                  title: 'Moderne Verschlüsselung',
                  icon: '🚀',
                  description: 'Symmetrische Verschlüsselung mit Bits statt Buchstaben',
                  level: 4,
                  content: 'ModernCryptography',
                },
              ],
            },
            // {
            //   id: 'asymmetrisch',
            //   title: 'Asymmetrische Verschlüsselung',
            //   icon: '🔐',
            //   description: 'Public-Key-Kryptographie: Zwei Schlüssel statt einem',
            //   level: 3,
            //   content: 'AsymmetricCryptography',
            // },
          ],
        },
      ],
    },
  ],
};
