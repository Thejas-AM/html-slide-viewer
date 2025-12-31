# HTML Slide Viewer Package

A professional React + TypeScript component library for rendering HTML content as a slide-based presentation.

## Features

- **Continuous Scroll Mode:** View all slides in a continuous scrollable list or one-by-one.
- **Sandboxed Rendering:** Uses iframes with sandbox attributes for safe, isolated rendering of slides.
- **Independent Layout:** Header and controls are fixed while slides and filmstrip scroll independently.
- **Intersection Sync:** Automatically highlights the currently visible slide in the filmstrip.
- **Versatile Sources:** Supports raw HTML strings, URLs, and local HTML files.
- **Interactive Filmstrip:** High-performance, lazy-loaded thumbnails for navigation.
- **Keyboard Navigation:** Full support for arrow keys, Home, and End.

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
    <div style={{ height: '100vh', width: '100vw' }}>
      <HtmlSlideViewer 
        slides={slides}
        viewMode="scroll" // Enable continuous scrolling
        scrollBehavior="smooth"
      />
    </div>
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
| `slides` | `HtmlSlideSource[]` | (Required) | Array of slide objects (`{ id, type, content, title }`). |
| `viewMode` | `'single' \| 'scroll'` | `'single'` | One-by-one or continuous vertical scrolling. |
| `scrollBehavior`| `'smooth' \| 'auto'` | `'smooth'` | Transition style when navigating to slides. |
| `initialSlide` | `number` | `0` | The slide to display initially. |
| `previewWidth` | `number` | `960` | Fixed width for slides. |
| `previewHeight` | `number` | `540` | Fixed height for slides. |
| `showFilmstrip` | `boolean` | `true` | Whether to show the thumbnail track. |
| `filmstripPosition` | `string` | `'right'` | Position: `'top' \| 'bottom' \| 'left' \| 'right'`. |
| `onSlideChange` | `(index, slide) => void` | - | Callback triggered when the slide changes. |
| `sandboxIframes` | `boolean` | `true` | Whether to sandbox slide iframes. |

## Development

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start development server (demo app): `npm run dev`
4. Build the library: `npm run build`
