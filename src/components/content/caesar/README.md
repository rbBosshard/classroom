# Caesar Component Refactoring

## Übersicht

Die Caesar.vue Komponente wurde in kleinere, wartbare Komponenten und Composables aufgeteilt, um die Wartbarkeit und Testbarkeit zu verbessern.

## Struktur

### Composables (Logik)

#### `useCaesarCipher.ts`
- **Zweck**: Enthält die Caesar-Verschlüsselungslogik
- **Exports**:
  - `alphabet`: Das Alphabet als Array
  - `shift`: Reactive shift-Wert
  - `shiftedAlphabet`: Computed verschobenes Alphabet
  - `encrypt(text)`: Verschlüsselt Text
  - `decrypt(text)`: Entschlüsselt Text
  - `caesarShift(text, amount)`: Basis-Verschlüsselungsfunktion

#### `useCaesarWheel.ts`
- **Zweck**: Verwaltet die Drag-and-Drop Logik für die Caesar-Scheibe
- **Exports**:
  - `rotation`: Aktuelle Rotation in Grad
  - `isDragging`: Drag-Status
  - `shift`: Berechneter Shift aus Rotation
  - `snappedRotation`: Eingerastete Rotation
  - `setShift(value)`: Setzt einen spezifischen Shift
  - `startDrag(event)`: Startet Drag-Operation

#### `useCaesarChallenge.ts`
- **Zweck**: Verwaltet die Challenge-Logik
- **Exports**:
  - `challenge`: Aktuelles Challenge-Objekt
  - `userAnswer`: Benutzerantwort
  - `challengeCompleted`: Status
  - `challengeFeedback`: Feedback-Objekt
  - `checkChallenge(onComplete)`: Prüft Antwort
  - `newChallenge()`: Generiert neue Challenge
  - `reset()`: Setzt Challenge zurück

### UI-Komponenten

#### `CaesarWheel.vue`
- **Zweck**: Interaktive Caesar-Scheibe mit Drag-Funktionalität
- **Props**: `shift`, `snappedRotation`, `isDragging`, `alphabet`
- **Events**: `update:shift`, `startDrag`
- **Slot**: Für Text-Transform Komponente

#### `CaesarTextTransform.vue`
- **Zweck**: Verschlüsselung/Entschlüsselung UI mit Eingabefeldern
- **Props**: `mode`, `plainText`, `encryptedText`, `encryptedInput`, `decryptedText`, `shift`
- **Events**: `update:mode`, `update:plainText`, `update:encryptedInput`, `useExample`

#### `CaesarChallenge.vue`
- **Zweck**: Interaktive Challenge-Sektion
- **Props**: `challenge`, `userAnswer`, `challengeCompleted`, `challengeFeedback`
- **Events**: `update:userAnswer`, `check`, `newChallenge`

#### `AlphabetTransformation.vue`
- **Zweck**: Zeigt die Buchstaben-Transformation visuell
- **Props**: `alphabet`, `shiftedAlphabet`, `shift`

#### `CaesarHeader.vue`
- **Zweck**: Header mit Einführungstext
- **Props**: Keine

#### `CaesarHowItWorks.vue`
- **Zweck**: Erklärung wie Caesar-Verschlüsselung funktioniert
- **Props**: Keine

#### `CaesarFunFacts.vue`
- **Zweck**: Interessante Fakten zur Caesar-Verschlüsselung
- **Props**: Keine

### Hauptkomponente

#### `Caesar.vue` (refactored)
- **Zweck**: Orchestriert alle Unterkomponenten
- **Verbesserungen**:
  - Reduziert von ~865 auf ~140 Zeilen
  - Klare Trennung von Logik und UI
  - Bessere Wiederverwendbarkeit
  - Einfachere Testbarkeit
  - Verbesserte Wartbarkeit

## Vorteile des Refactorings

1. **Modularität**: Jede Komponente hat eine klare Verantwortung
2. **Wiederverwendbarkeit**: Composables können in anderen Komponenten genutzt werden
3. **Testbarkeit**: Kleinere Einheiten sind einfacher zu testen
4. **Wartbarkeit**: Änderungen sind lokalisiert und übersichtlich
5. **Performance**: Keine Änderung - gleiche Reaktivität
6. **TypeScript**: Vollständige Type-Safety

## Migration

Um die refaktorierte Version zu nutzen:

```typescript
// Alte Version
import Caesar from '@/components/content/Caesar.vue'

// Neue Version
import Caesar from '@/components/content/Caesar-refactored.vue'
```

Oder umbenennen:
```bash
mv src/components/content/Caesar.vue src/components/content/Caesar-old.vue
mv src/components/content/Caesar-refactored.vue src/components/content/Caesar.vue
```

## Tests

Beispiel für Unit-Tests:

```typescript
import { useCaesarCipher } from '@/composables/useCaesarCipher'

describe('useCaesarCipher', () => {
  it('should encrypt correctly', () => {
    const { encrypt, shift } = useCaesarCipher()
    shift.value = 3
    expect(encrypt('ABC')).toBe('DEF')
  })
  
  it('should decrypt correctly', () => {
    const { decrypt, shift } = useCaesarCipher()
    shift.value = 3
    expect(decrypt('DEF')).toBe('ABC')
  })
})
```
