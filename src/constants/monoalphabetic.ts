/**
 * Monoalphabetic Substitution Constants
 * Includes frequency data and example texts for frequency analysis
 */

import type { Source } from '@/types/curriculum';

// German letter frequencies (based on typical German texts)
export const GERMAN_FREQUENCIES = {
  E: 17.4,
  N: 9.78,
  I: 7.55,
  S: 7.27,
  R: 7.0,
  A: 6.51,
  T: 6.15,
  D: 5.08,
  H: 4.76,
  U: 4.35,
  L: 3.44,
  C: 3.06,
  G: 3.01,
  M: 2.53,
  O: 2.51,
  B: 1.89,
  W: 1.89,
  F: 1.66,
  K: 1.21,
  Z: 1.13,
  P: 0.79,
  V: 0.67,
  J: 0.27,
  Y: 0.04,
  X: 0.03,
  Q: 0.02,
} as const;

// English letter frequencies (based on typical English texts)
export const ENGLISH_FREQUENCIES = {
  E: 12.7,
  T: 9.06,
  A: 8.17,
  O: 7.51,
  I: 6.97,
  N: 6.75,
  S: 6.33,
  H: 6.09,
  R: 5.99,
  D: 4.25,
  L: 4.03,
  C: 2.78,
  U: 2.76,
  M: 2.41,
  W: 2.36,
  F: 2.23,
  G: 2.02,
  Y: 1.97,
  P: 1.93,
  B: 1.29,
  V: 0.98,
  K: 0.77,
  J: 0.15,
  X: 0.15,
  Z: 0.07,
  Q: 0.1,
} as const;

// German example for frequency analysis
export const GERMAN_EXAMPLE = {
  ciphertext: `BAJKJK ZJAKOAJL VJAQF, NAJ PMY PAF JAYJI RMJHEAQDJAFKMYMLUKJ BJY QJRJAPFJXF JAYJI PTYTMLORMZJFAKGRJY KHZKFAFHFATY JYFVAEEJIY DMYY, NJYY QJYHQ FJXF CTIRMYBJY AKF.`,
  plaintext: `DIESES BEISPIEL ZEIGT, WIE MAN MIT EINER HAEUFIGKEITSANALYSE DEN GEHEIMTEXT EINER MONOALPHABETISCHEN SUBSTITUTION ENTZIFFERN KANN, WENN GENUG TEXT VORHANDEN IST.`,
  key: {
    A: 'I',
    B: 'D',
    C: 'V',
    D: 'K',
    E: 'F',
    F: 'T',
    G: 'C',
    H: 'U',
    I: 'R',
    J: 'E',
    K: 'S',
    L: 'L',
    M: 'A',
    N: 'W',
    O: 'P',
    P: 'M',
    Q: 'G',
    R: 'H',
    S: 'Q',
    T: 'O',
    U: 'Y',
    V: 'Z',
    W: 'J',
    X: 'X',
    Y: 'N',
    Z: 'B',
  },
} as const;

// English example for frequency analysis
export const ENGLISH_EXAMPLE = {
  ciphertext: `EOBLMT EJNEYOYJYOPW VZW NT VIZVSTC OQ EPBTPWT EYJCOTE YDT MTYYTI LZYYTIWE VZITQJMMG, NTVZJET YDT QITUJTWVG PQ MTYYTIE ZWC VPBBPW VPBNOWZYOPWE PQ MTYYTIE HOKTE ZFZG VMJTE ZNPJY YDT PIOHOWZM BTEEZHT. QPI YDOE ITZEPW, EYIPWHTI BTYDPCE JET BJMYOLMT EDOQYOWH ZMLDZNTYE YP BZST OY BJVD DZICTI YP CTYTVY LZYYTIWE ZWC NITZS YDT VOLDTI.`,
  plaintext: `SIMPLE SUBSTITUTION CAN BE CRACKED IF SOMEONE STUDIES THE LETTER PATTERNS CAREFULLY, BECAUSE THE FREQUENCY OF LETTERS AND COMMON COMBINATIONS OF LETTERS GIVES AWAY CLUES ABOUT THE ORIGINAL MESSAGE. FOR THIS REASON, STRONGER METHODS USE MULTIPLE SHIFTING ALPHABETS TO MAKE IT MUCH HARDER TO DETECT PATTERNS AND BREAK THE CIPHER.`,

  key: {
    A: 'Z',
    B: 'M',
    C: 'D',
    D: 'H',
    E: 'S',
    F: 'W',
    G: 'Y',
    H: 'G',
    I: 'R',
    J: 'U',
    K: 'V',
    L: 'P',
    M: 'L',
    N: 'B',
    O: 'I',
    P: 'O',
    Q: 'F',
    R: 'U',
    S: 'K',
    T: 'E',
    U: 'Q',
    V: 'C',
    W: 'N',
    X: 'X',
    Y: 'T',
    Z: 'A',
  },
} as const;

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Quellenangaben für monoalphabetische Substitution
 */
export const MONOALPHABETIC_SOURCES: Source[] = [
  {
    id: 'letter-frequency',
    title: 'Buchstabenhäufigkeit',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/Buchstabenh%C3%A4ufigkeit',
    description: 'Statistische Häufigkeitsverteilung von Buchstaben',
  },
  {
    id: 'frequency-analysis-wikipedia',
    title: 'Häufigkeitsanalyse',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/H%C3%A4ufigkeitsanalyse',
    description: 'Methode zur Kryptoanalyse monoalphabetischer Verschlüsselungen',
  },
  {
    id: 'substitution-cipher',
    title: 'Monoalphabetische Substitution',
    type: 'wikipedia',
    url: 'https://de.wikipedia.org/wiki/Monoalphabetische_Substitution',
    description: 'Wikipedia',
  },
];
