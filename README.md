# 🧗 Bouldering Lingo

Interaktive flashcards til at lære klatretermer og bouldering-lingo.

**[Prøv appen live →](https://mahope.github.io/bouldering-lingo/)**

## ✨ Features

- **74 klatretermer** fordelt på 5 kategorier
- **Dark/Light mode** med automatisk hukommelse
- **Flip-cards** med smooth animationer
- **Touch gestures** - swipe til næste/forrige kort
- **Keyboard shortcuts** for hurtig navigation
- **Streak counter** 🔥 når du får flere rigtige i træk
- **Progress bar** der viser hvor langt du er
- **Responsive design** - virker på mobil, tablet og desktop

## 🎯 Kategorier

| Kategori | Antal | Beskrivelse |
|----------|-------|-------------|
| Greb | 16 | Crimp, sloper, pinch, undercling mm. |
| Bevægelser | 20 | Dyno, heel hook, drop knee, mantle mm. |
| Kropsposition | 10 | Tension, compression, lock-off mm. |
| Gradering | 8 | V-grade, Font, sandbagged mm. |
| Generelt | 20 | Send, flash, beta, project mm. |

## ⌨️ Tastatur-genveje

| Tast | Handling |
|------|----------|
| `Space` / `Enter` | Vend kortet |
| `→` / `N` | Næste kort |
| `←` / `P` | Forrige kort |
| `K` | Vidste det! (+1 point) |
| `S` | Bland kortene |
| `R` | Start forfra |
| `T` | Skift tema |

## 📱 Touch-gestures

- **Tap** på kortet for at vende det
- **Swipe venstre** for næste kort
- **Swipe højre** for forrige kort

## 🛠️ Tech Stack

- Vanilla HTML5
- Vanilla CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Ingen frameworks eller dependencies
- LocalStorage til tema-præference

## 🚀 Kør lokalt

```bash
# Klon repo
git clone https://github.com/mahope/bouldering-lingo.git
cd bouldering-lingo

# Åbn i browser (eller brug en simpel server)
npx serve .
# eller
python -m http.server 8000
```

## 📝 Tilføj flere termer

Rediger `data.js` og tilføj nye kort til `cards` arrayet:

```javascript
{
    term: "Ny term",
    definition: "Forklaring på termet...",
    example: "\"Eksempel på brug i en sætning\"",
    category: "general"  // grip, move, body, grade, general
}
```

## 🎨 Tilpas tema

CSS custom properties i `styles.css`:

```css
[data-theme="dark"] {
    --bg-primary: #0a0a0b;
    --accent: #22c55e;
    /* ... */
}

[data-theme="light"] {
    --bg-primary: #f5f5f7;
    --accent: #16a34a;
    /* ... */
}
```

## 📄 Licens

MIT License - brug det frit!

---

Lavet med 💚 af en klatreentusiast
