# 🔐 Classroom - Interaktive Kryptographie-Lernplattform

Eine moderne, interaktive Vue.js-Lernplattform für Kryptographie-Unterricht.

## 🎯 Features

- ✨ **Interaktive Lernmodule**: Caesar, Vigenère, Skytale und mehr
- 🎨 **Responsive Design**: Funktioniert auf Desktop, Tablet und Mobile
- 🎓 **Multi-Class Support**: Verschiedene Klassen/Jahrgänge mit eigenen Curricula
- 📊 **Browser History Integration**: Vor/Zurück-Navigation funktioniert
- 🎮 **Gamification**: Challenges, Quizzes und interaktive Visualisierungen
- 🔄 **Error Handling**: Zentrales Error Management mit User-Feedback
- ⚡ **Performance**: Lazy Loading von Komponenten, optimiertes Bundle

## 🚀 Quick Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build

# Preview Production Build
npm run preview
```

## 📁 Projekt-Struktur

```
src/
├── components/          # Vue Komponenten
│   ├── content/        # Content-Komponenten (Caesar, Vigenere, etc.)
│   └── ui/             # UI-Komponenten (Buttons, Modals, etc.)
├── composables/        # Wiederverwendbare Composables
├── config/             # Konfigurationsdateien (Klassen, etc.)
├── constants/          # Konstanten und statische Daten
├── types/              # TypeScript Type Definitionen
└── utils/              # Utility-Funktionen
```

## 🛠️ Development

### Code Quality

```bash
# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Type Checking
npm run type-check

# Tests (coming soon)
npm test
npm run test:ui
npm run test:coverage
```

### Neue Klasse hinzufügen

1. Erstelle Curriculum in `src/types/curriculum-[schule]_[klasse].ts`
2. Füge Klasse in `src/config/class-config.ts` hinzu
3. URL: `?class=SCHULE_KLASSE_LEVEL`

### Neuen Content hinzufügen

1. Erstelle Vue-Komponente in `src/components/content/`
2. Registriere in `src/constants/contents.ts`
3. Verwende im Curriculum: `content: 'ComponentName'`

## 🎨 Tech Stack

- **Framework**: Vue 3 (Composition API)
- **TypeScript**: Typsicherheit
- **Styling**: TailwindCSS
- **Build**: Vite
- **Testing**: Vitest + Vue Test Utils
- **Linting**: ESLint + Prettier

## 📝 Scripts Übersicht

| Script | Beschreibung |
|--------|--------------|
| `npm run dev` | Startet Development Server |
| `npm run build` | Production Build |
| `npm run preview` | Preview Production Build |
| `npm run lint` | Code Linting |
| `npm run lint:fix` | Auto-fix Linting-Fehler |
| `npm run format` | Code Formatierung |
| `npm run type-check` | TypeScript Type Checking |
| `npm test` | Tests ausführen |

## 🔧 Konfiguration

### Class Config
Klassen und Curricula werden in `src/config/class-config.ts` konfiguriert.

### Content Components
Content-Komponenten werden lazy-loaded in `src/constants/contents.ts`.

### Error Handling
Zentrales Error-Management via `useErrorHandling()` Composable.

## 📚 Dokumentation

### Composables

- `useNavigation()` - Navigation und Routing
- `useCaesarCipher()` - Caesar-Verschlüsselung
- `useVigenereCipher()` - Vigenère-Verschlüsselung
- `useErrorHandling()` - Error Management
- Und mehr...

### Type System

Alle Types sind in `src/types/` definiert:
- `curriculum.ts` - Topic, Material, Breadcrumb
- `caesar.ts` - Caesar-spezifische Types
- `vigenere.ts` - Vigenère-spezifische Types

## 🤝 Contributing

1. Fork das Repository
2. Erstelle Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit Changes (`git commit -m 'Add AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne Pull Request

## 📄 License

Dieses Projekt ist für Bildungszwecke erstellt.

## ✨ Phase 1 Improvements (Completed)

- ✅ Error Handling System implementiert
- ✅ ESLint & Prettier konfiguriert
- ✅ Scripts für Linting/Formatting hinzugefügt
- ✅ README Dokumentation
- ✅ Bessere TypeScript Integration
- ✅ Code Quality Tools

## 🎯 Roadmap (Nächste Schritte)

### Phase 2
- [ ] Fortschritts-Tracking (LocalStorage)
- [ ] User Progress Visualisierung
- [ ] i18n Vorbereitung
- [ ] Accessibility Improvements

### Phase 3
- [ ] Gamification (Badges, Achievements)
- [ ] Pinia für State Management
- [ ] PWA Features
- [ ] Suchfunktion

---

Made with ❤️ for education
