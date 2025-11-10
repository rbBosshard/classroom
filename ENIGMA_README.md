# ENIGMA-Lernmodul

## Überblick

Das ENIGMA-Modul ist ein vollständiges, interaktives Lernmodul zur ENIGMA-Verschlüsselungsmaschine. Es führt Schüler von der polyalphabetischen Vigenère-Verschlüsselung zur mechanischen ENIGMA-Maschine und ist speziell für das Selbststudium konzipiert.

## Inhalt des Moduls

### 1. **Einführung** 🎯

- Was ist die ENIGMA?
- Grundprinzip der Maschine (Tastatur → Rotoren → Lampenfeld)
- Warum war ENIGMA so sicher?

### 2. **Geschichte** 📜

- Timeline von der Erfindung bis zum Kriegsende
- Wichtige Personen (Arthur Scherbius, Alan Turing, Marian Rejewski)
- Bedeutung für den 2. Weltkrieg

### 3. **Von Vigenère zu ENIGMA** 🔄

- Didaktische Brücke von bekanntem Wissen
- Vergleichstabelle: Vigenère vs. ENIGMA
- Das Problem mit Vigenère und ENIGMAs Lösung
- Warum mechanische Verschlüsselung?

### 4. **Rotoren-Prinzip** ⚙️

- Wie funktioniert ein Rotor?
- Die drei Rotoren und ihre Zusammenarbeit
- Übertragungsnocken (Notch-System)
- Der Reflektor und die Symmetrie

### 5. **Steckerbrett** 🔌

- Zusätzliche Verschlüsselungsebene
- Signal-Weg durch die Maschine
- Historische Nutzung und Konfiguration
- Sicherheitseffekt (≈150 Billionen Kombinationen)

### 6. **Interaktiver Simulator** 🖥️

- **Vollständig funktionsfähige ENIGMA-Simulation**
- Rotor-Auswahl und Positionierung
- Steckerbrett-Konfiguration (bis zu 10 Paare)
- Ver- und Entschlüsselung von Nachrichten
- Debug-Modus zur Nachverfolgung der Verschlüsselung
- Beispiel-Nachrichten zum Ausprobieren

### 7. **Kryptoanalyse** 🔍

- Schwachstellen der ENIGMA
  - Keine Selbst-Verschlüsselung
  - Vorhersagbare Nachrichtenanfänge (Cribs)
  - Begrenzte Rotor-Auswahl
  - Tägliche Schlüssel
- Turings "Bombe"
- Menschliche Fehler der Operatoren
- Interaktive Demonstration der Schwachstellen

### 8. **Quiz** ✅

- 5 Fragen zur Wissenskontrolle
- Sofortiges Feedback mit Erklärungen
- Bewertungssystem mit motivierenden Nachrichten
- Achievement-Badge bei perfektem Ergebnis

## Technische Implementation

### Dateien

```
src/
├── types/enigma.ts                     # TypeScript-Typen
├── constants/enigma.ts                 # Rotoren, Reflektoren, Quiz-Fragen
├── composables/useEnigmaCipher.ts      # ENIGMA-Logik
└── components/content/
    ├── Enigma.vue                      # Hauptkomponente
    └── enigma/
        ├── EnigmaHeader.vue
        ├── EnigmaLearningObjectives.vue
        ├── EnigmaIntroduction.vue
        ├── EnigmaHistory.vue
        ├── EnigmaFromVigenere.vue
        ├── EnigmaRotorPrinciple.vue
        ├── EnigmaPlugboard.vue
        ├── EnigmaSimulator.vue
        ├── EnigmaCryptanalysis.vue
        └── EnigmaQuiz.vue
```

### ENIGMA-Verschlüsselungslogik

Die `useEnigmaCipher` Composable implementiert:

- ✅ Historisch korrekte Wehrmacht ENIGMA M3
- ✅ 5 authentische Rotoren (I-V) mit korrekter Verdrahtung
- ✅ 2 Reflektoren (B und C)
- ✅ Steckerbrett mit bis zu 10 Paaren
- ✅ Korrekte Rotor-Rotation mit Nocken-System
- ✅ Double-Stepping-Mechanismus
- ✅ Ringstellungen
- ✅ Debug-Modus für Lernzwecke

## Integration ins Curriculum

### Beispiel-Eintrag im Curriculum:

```typescript
{
  id: "enigma",
  title: "ENIGMA-Maschine",
  icon: "⚙️",
  description: "Die legendäre Verschlüsselungsmaschine des 2. Weltkriegs - von der Mechanik bis zur Kryptoanalyse",
  level: 6,
  content: "Enigma",
  materials: [
    {
      id: "enigma-video",
      title: "The Imitation Game - Trailer",
      type: "video",
      url: "/public/links/TheImitationGameTrailer.txt",
      description: "Film über Alan Turing und das Knacken der ENIGMA"
    }
  ]
}
```

### Position im Curriculum

Das ENIGMA-Modul sollte **nach** Vigenère platziert werden:

```
Kryptographie
└── Symmetrische Verschlüsselung
    └── Substitution
        └── Polyalphabetisch
            ├── Vigenère ← vorher
            └── ENIGMA  ← neu
```

## Didaktische Merkmale

### Für Selbststudium optimiert

- ✅ Klare Lernziele am Anfang
- ✅ Schritt-für-Schritt Erklärungen
- ✅ Viele visuelle Elemente und Icons
- ✅ Interaktiver Simulator zum Experimentieren
- ✅ Selbsttest mit Feedback
- ✅ Historischer Kontext für Motivation

### Progressive Komplexität

1. **Einfach**: Grundkonzept verstehen
2. **Mittel**: Technische Details (Rotoren, Steckerbrett)
3. **Fortgeschritten**: Kryptoanalyse und Schwachstellen

### Verbindung zu vorherigem Wissen

- Baut explizit auf Vigenère auf
- Zeigt Evolution von Hand- zu Maschinenver schlüsselung
- Verwendet bekannte Konzepte (Caesar-Scheibe → Rotor)

## Lernziele

Nach Abschluss des Moduls können Schüler:

1. ✅ **Verstehen**, wie ENIGMA mechanisch funktioniert
2. ✅ **Erklären**, warum ENIGMA sicherer als Vigenère war
3. ✅ **Bedienen** des ENIGMA-Simulators
4. ✅ **Nachvollziehen**, wie ENIGMA geknackt wurde
5. ✅ **Bewerten**, welche Rolle menschliche Fehler spielten
6. ✅ **Einordnen** der historischen Bedeutung

## Verwendung

### Schnellstart für Schüler

1. Navigiere zu "Kryptographie → Polyalphabetisch → ENIGMA"
2. Arbeite die Abschnitte der Reihe nach durch
3. Probiere den Simulator aus (Abschnitt 6)
4. Teste dein Wissen im Quiz (Abschnitt 8)

### Empfohlene Bearbeitungszeit

- **Minimum**: 45-60 Minuten (Durchlesen + Simulator)
- **Optimal**: 90-120 Minuten (mit Vertiefung und Experimenten)
- **Mit Diskussion**: 2-3 Lektionen

## Erweiterungsmöglichkeiten

Zukünftige Ergänzungen könnten sein:

- 📝 **Arbeitsblätter** zum Ausdrucken
- 🎮 **Challenges** (z.B. "Knacke diese ENIGMA-Nachricht")
- 📊 **Statistiken** zur Schlüsselkomplexität
- 🎬 **Video-Integration** (z.B. Computerphile)
- 🔧 **M4-Version** (4 Rotoren, U-Boot-ENIGMA)
- 🏆 **Leaderboard** für schnellste Entschlüsselung

## Technische Details

### ENIGMA M3 Spezifikationen (implementiert)

- **Rotoren**: 5 verfügbar (I-V), 3 gleichzeitig in Verwendung
- **Rotor-Positionen**: 26³ = 17.576 Möglichkeiten
- **Ringstellungen**: 26³ = 17.576 Möglichkeiten
- **Rotor-Auswahl**: 5×4×3 = 60 Kombinationen
- **Steckerbrett**: ~150 Billionen Kombinationen (10 Paare)
- **Gesamt**: ~159 Trilliarden Konfigurationen

### Historische Korrektheit

Die Implementation basiert auf:

- Originalen ENIGMA-Spezifikationen
- Historischen Dokumenten aus Bletchley Park
- Technischen Analysen von Kryptographie-Experten

## Support & Feedback

Bei Fragen oder Verbesserungsvorschlägen:

- Probiere verschiedene Rotor-Konfigurationen aus
- Nutze den Debug-Modus im Simulator
- Lies die Erklärungen im Kryptoanalyse-Abschnitt

## Lizenz & Credits

### Historische Quellen

- Alan Turing Institute
- Bletchley Park Museum
- "The Enigma" von Andrew Hodges

### Bildungsressourcen

- Computerphile YouTube-Kanal
- Khan Academy Cryptography
- Wikipedia ENIGMA-Artikel

---

**Viel Erfolg beim Lernen! 🎓🔐**
