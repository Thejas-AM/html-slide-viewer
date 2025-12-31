/**
 * TypeScript types for HtmlSlideViewer component
 */

/**
 * Types of HTML slide sources
 */
export type HtmlSlideSourceType = 'url' | 'html' | 'file';

/**
 * Individual HTML slide source
 */
export interface HtmlSlideSource {
    /** Unique identifier for the slide */
    id: string;
    /** Type of source */
    type: HtmlSlideSourceType;
    /** The content - URL string, raw HTML string, or File object */
    content: string | File;
    /** Optional title for the slide */
    title?: string;
}

/**
 * Filmstrip position options
 */
export type FilmstripPosition = 'left' | 'right' | 'top' | 'bottom';

/**
 * Props for the HtmlSlideViewer component
 */
export interface HtmlSlideViewerProps {
    /**
     * Array of HTML slide sources to display
     */
    slides: HtmlSlideSource[];

    /**
     * Initial slide index to display
     * @default 0
     */
    initialSlide?: number;

    /**
     * Width of the main preview area in pixels
     * @default 960
     */
    previewWidth?: number;

    /**
     * Height of the main preview area in pixels
     * @default 540
     */
    previewHeight?: number;

    /**
     * Whether to show the filmstrip thumbnails
     * @default true
     */
    showFilmstrip?: boolean;

    /**
     * Position of the filmstrip relative to the main preview
     * @default 'right'
     */
    filmstripPosition?: FilmstripPosition;

    /**
     * Whether to sandbox iframes (recommended for security)
     * @default true
     */
    sandboxIframes?: boolean;

    /**
     * Callback when the current slide changes
     */
    onSlideChange?: (index: number, slide: HtmlSlideSource) => void;

    /**
     * Callback when a slide fails to load
     */
    onSlideError?: (index: number, error: Error) => void;

    /**
     * Whether to render slides in a scrollable list or one by one
     * @default 'single'
     */
    viewMode?: 'single' | 'scroll';

    /**
     * Scroll behavior when jumping to slides
     * @default 'smooth'
     */
    scrollBehavior?: 'auto' | 'smooth';

    /**
     * Custom class name for the container
     */
    className?: string;
}

/**
 * Props for the HtmlSlideRenderer component
 */
export interface HtmlSlideRendererProps {
    /** The slide source to render */
    slide: HtmlSlideSource;
    /** Width of the iframe */
    width: number;
    /** Height of the iframe */
    height: number;
    /** Whether to sandbox the iframe */
    sandbox?: boolean;
    /** Custom class name */
    className?: string;
    /** Callback when the slide loads */
    onLoad?: () => void;
    /** Callback when the slide fails to load */
    onError?: (error: Error) => void;
}

/**
 * Props for the HtmlFilmstrip component
 */
export interface HtmlFilmstripProps {
    /** Array of slide sources */
    slides: HtmlSlideSource[];
    /** Currently active slide index */
    currentSlide: number;
    /** Callback when a slide is selected */
    onSlideSelect: (index: number) => void;
    /** Position of the filmstrip */
    position: FilmstripPosition;
    /** Whether to sandbox thumbnail iframes */
    sandbox?: boolean;
    /** Custom class name */
    className?: string;
    /** height of the filmstrip */
    height?: number;
    /** width of the filmstrip */
    width?: number;
}

/**
 * Internal state for thumbnail caching
 */
export interface ThumbnailCache {
    [slideId: string]: string; // slideId -> data URL of captured thumbnail
}
