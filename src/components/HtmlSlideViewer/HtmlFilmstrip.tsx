/**
 * HtmlFilmstrip - Thumbnail strip for HTML slides with lazy loading
 */

import React, { useMemo, useCallback, useRef, useEffect, useState } from 'react';
import type { HtmlFilmstripProps, HtmlSlideSource } from './types';

// Thumbnail dimensions
const THUMBNAIL_WIDTH = 160;
const THUMBNAIL_HEIGHT = 90;

/**
 * Individual thumbnail component with lazy rendering
 */
interface ThumbnailProps {
    slide: HtmlSlideSource;
    index: number;
    isActive: boolean;
    isVisible: boolean;
    onClick: () => void;
    sandbox?: boolean;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
    slide,
    index,
    isActive,
    isVisible,
    onClick,
    sandbox = true,
}) => {
    const [srcDoc, setSrcDoc] = useState<string | null>(null);
    const [srcUrl, setSrcUrl] = useState<string | null>(null);

    // Process slide source for thumbnail
    useEffect(() => {
        if (!isVisible) return;

        const processSlide = async () => {
            try {
                switch (slide.type) {
                    case 'url':
                        setSrcUrl(slide.content as string);
                        break;

                    case 'html':
                        // Wrap HTML with scaling for thumbnail
                        const html = slide.content as string;
                        const wrappedHtml = wrapForThumbnail(html);
                        setSrcDoc(wrappedHtml);
                        break;

                    case 'file':
                        // Read file content
                        const file = slide.content as File;
                        const reader = new FileReader();
                        reader.onload = () => {
                            const content = reader.result as string;
                            const wrappedContent = wrapForThumbnail(content);
                            setSrcDoc(wrappedContent);
                        };
                        reader.readAsText(file);
                        break;
                }
            } catch (e) {
                console.warn('Failed to load thumbnail:', e);
            }
        };

        processSlide();
    }, [slide, isVisible]);

    const sandboxAttrs = sandbox
        ? 'allow-same-origin'
        : undefined;

    return (
        <div
            className={`html-filmstrip-thumbnail ${isActive ? 'active' : ''}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick();
                }
            }}
            aria-label={slide.title || `Slide ${index + 1}`}
            aria-current={isActive ? 'true' : undefined}
        >
            <div className="html-filmstrip-thumbnail-inner">
                {isVisible ? (
                    <iframe
                        title={`Thumbnail ${index + 1}`}
                        width={THUMBNAIL_WIDTH}
                        height={THUMBNAIL_HEIGHT}
                        src={srcUrl || undefined}
                        srcDoc={srcDoc || undefined}
                        sandbox={sandboxAttrs}
                        className="html-filmstrip-iframe"
                        style={{
                            border: 'none',
                            pointerEvents: 'none',
                            backgroundColor: '#fff',
                        }}
                    />
                ) : (
                    <div
                        className="html-filmstrip-placeholder"
                        style={{
                            width: THUMBNAIL_WIDTH,
                            height: THUMBNAIL_HEIGHT,
                        }}
                    />
                )}
            </div>
            <span className="html-filmstrip-slide-number">{index + 1}</span>
        </div>
    );
};

/**
 * Wrap HTML content for thumbnail display with scaling
 */
function wrapForThumbnail(html: string): string {
    // Check if HTML already has doctype
    const hasDoctype = html.trim().toLowerCase().startsWith('<!doctype') ||
        html.trim().toLowerCase().startsWith('<html');

    if (hasDoctype) {
        // Inject scaling styles into existing HTML
        return html.replace(
            /<head[^>]*>/i,
            `$&
      <style>
        html { transform: scale(0.15); transform-origin: top left; }
        body { overflow: hidden !important; }
      </style>`
        );
    }

    // Wrap in basic structure with scaling
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { transform: scale(0.15); transform-origin: top left; }
    body { 
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      overflow: hidden !important;
      width: ${THUMBNAIL_WIDTH / 0.15}px;
      height: ${THUMBNAIL_HEIGHT / 0.15}px;
    }
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
}

export const HtmlFilmstrip: React.FC<HtmlFilmstripProps> = ({
    slides,
    currentSlide,
    onSlideSelect,
    position,
    sandbox = true,
    className,
    height,
    width,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 });

    const isHorizontal = position === 'top' || position === 'bottom';

    // Calculate visible slides for lazy loading
    const updateVisibleRange = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollPos = isHorizontal ? container.scrollLeft : container.scrollTop;
        const viewSize = isHorizontal ? container.clientWidth : container.clientHeight;
        const itemSize = isHorizontal ? THUMBNAIL_WIDTH + 12 : THUMBNAIL_HEIGHT + 12;

        const start = Math.max(0, Math.floor(scrollPos / itemSize) - 2);
        const end = Math.min(slides.length, Math.ceil((scrollPos + viewSize) / itemSize) + 2);

        setVisibleRange({ start, end });
    }, [isHorizontal, slides.length]);

    // Scroll to current slide
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const itemSize = isHorizontal ? THUMBNAIL_WIDTH + 12 : THUMBNAIL_HEIGHT + 12;
        const targetPos = currentSlide * itemSize;
        const viewSize = isHorizontal ? container.clientWidth : container.clientHeight;

        const scrollPos = isHorizontal ? container.scrollLeft : container.scrollTop;
        if (targetPos < scrollPos || targetPos + itemSize > scrollPos + viewSize) {
            const newPos = targetPos - viewSize / 2 + itemSize / 2;
            container.scrollTo({
                [isHorizontal ? 'left' : 'top']: Math.max(0, newPos),
                behavior: 'smooth',
            });
        }
    }, [currentSlide, isHorizontal]);

    // Set up scroll listener for lazy loading
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        updateVisibleRange();
        container.addEventListener('scroll', updateVisibleRange);
        return () => container.removeEventListener('scroll', updateVisibleRange);
    }, [updateVisibleRange]);

    // Render thumbnails
    const thumbnails = useMemo(() => {
        return slides.map((slide, index) => {
            const isVisible = index >= visibleRange.start && index <= visibleRange.end;
            const isActive = index === currentSlide;

            return (
                <Thumbnail
                    key={slide.id}
                    slide={slide}
                    index={index}
                    isActive={isActive}
                    isVisible={isVisible}
                    onClick={() => onSlideSelect(index)}
                    sandbox={sandbox}
                />
            );
        });
    }, [slides, currentSlide, visibleRange, onSlideSelect, sandbox]);

    return (
        <div
            ref={containerRef}
            className={`html-filmstrip html-filmstrip--${position} ${className || ''}`}
            style={{
                height: height && (position === 'left' || position === 'right') ? `${height + height * 0.1}px` : 'auto',
                width: width && (position === 'top' || position === 'bottom') ? `${width}px` : 'auto',
            }}
        >
            <div className={`html-filmstrip-track ${isHorizontal ? 'horizontal' : 'vertical'}`}>
                {thumbnails}
            </div>
        </div>
    );
};

export default HtmlFilmstrip;
