# BabyReader Typora Themes

Warm, reading-first Typora themes inspired by [BabyReader](https://github.com/KingJing1/babyreader).

This repository includes two Typora themes:

- `babyreader.css` — faithful dark theme with BabyReader's warm black surface, soft text, terracotta accent, and long-form reading rhythm.
- `babyreader-light.css` — light companion theme with a white paper surface, warm gold accent, and the same restrained reading layout.

## Preview

Open the local preview files in a browser:

- `babyreader-preview.html`
- `babyreader-light-preview.html`

## Install

1. Open Typora.
2. Go to `Settings` / `Preferences` -> `Appearance`.
3. Click `Open Theme Folder`.
4. Copy these files into the theme folder:
   - `babyreader.css`
   - `babyreader-light.css`
5. Restart Typora, or switch to another theme and back.
6. Choose `Themes` -> `Babyreader` or `Themes` -> `Babyreader Light`.

## Design Notes

The dark theme stays close to BabyReader's original visual system:

- warm black background
- soft off-white body text
- terracotta accent
- Songti-first title typography
- 720px reading width
- generous line height for long Chinese and mixed-language text
- quiet blockquotes, code blocks, tables, and horizontal separators

The light theme is a companion, not a direct inversion. It keeps the same layout rhythm but uses:

- white paper reading surface
- warm off-white app background
- gold accent
- pale warm blockquote and code surfaces

Both themes include Typora-specific fixes for sidebar colors, source mode, `.md-plain` text spans, and fenced code blocks.

## Validation

Run the lightweight regression checks:

```bash
node tests/theme-regressions.test.js
node tests/light-theme-regressions.test.js
```

## Attribution

This theme is inspired by and partially adapted from BabyReader's MIT-licensed stylesheet.

- BabyReader: https://github.com/KingJing1/babyreader
- Original author: 一龙小包子

## License

MIT. See `LICENSE`.
