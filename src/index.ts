/**
 * @thejas/html-slide-viewer
 * Main entry point for the npm package
 */

import './components/HtmlSlideViewer/HtmlSlideViewer.css';

export { HtmlSlideViewer } from './components/HtmlSlideViewer/HtmlSlideViewer';
export { HtmlSlideRenderer } from './components/HtmlSlideViewer/HtmlSlideRenderer';
export { HtmlFilmstrip } from './components/HtmlSlideViewer/HtmlFilmstrip';

export type {
    HtmlSlideViewerProps,
    HtmlSlideSource,
    HtmlSlideSourceType,
    FilmstripPosition,
    HtmlSlideRendererProps,
    HtmlFilmstripProps,
} from './components/HtmlSlideViewer/types';
