# HTML Slide Viewer Package

A professional React + TypeScript component library for rendering HTML content as a slide-based presentation.

## Features

- **Sandboxed Rendering:** Uses iframes with sandbox attributes for safe, isolated rendering of slides.
- **Versatile Sources:** Supports raw HTML strings, URLs, and local HTML files.
- **Interactive Filmstrip:** High-performance, lazy-loaded thumbnails for navigation.
- **Keyboard Navigation:** Full support for arrow keys, Home, and End.
- **Distributable:** Pre-bundled with ESM and UMD support, including TypeScript type definitions.

## Installation

```bash
npm install @thejas/html-slide-viewer
```

## Usage

### 1. Import Component and Styles

```tsx
import { HtmlSlideViewer } from '@thejas/html-slide-viewer';
import '@thejas/html-slide-viewer/style.css';

const slides = [
  { id: '1', type: 'html', title: 'Welcome', content: '<h1>Slide 1</h1>' },
  { id: '2', type: 'url', title: 'External', content: 'https://example.com' }
];

function App() {
  return (
    <HtmlSlideViewer 
      slides={slides}
      previewWidth={960}
      previewHeight={540}
    />
  );
}
```

### 2. Available Components

- **`HtmlSlideViewer`**: The main presentation component with navigation and filmstrip.
- **`HtmlSlideRenderer`**: Low-level component to render a single sandboxed slide.
- **`HtmlFilmstrip`**: The visual navigation track for slides.

## API Reference

### `HtmlSlideViewer` Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `slides` | `HtmlSlideSource[]` | (Required) | Array of slide content objects. |
| `initialSlide` | `number` | `0` | The slide to display initially. |
| `previewWidth` | `number` | `960` | Width of the main preview area. |
| `previewHeight` | `number` | `540` | Height of the main preview area. |
| `showFilmstrip` | `boolean` | `true` | Whether to show the thumbnail track. |
| `filmstripPosition` | `string` | `'right'` | Position of the filmstrip (`'top' \| 'bottom' \| 'left' \| 'right'`). |
| `onSlideChange` | `(index, slide) => void` | - | Callback triggered when the slide changes. |

## Development

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start development server (demo app): `npm run dev`
4. Build the library: `npm run build`
