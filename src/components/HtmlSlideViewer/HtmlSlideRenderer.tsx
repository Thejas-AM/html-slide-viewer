/**
 * HtmlSlideRenderer - Renders a single HTML slide in a sandboxed iframe
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import type { HtmlSlideRendererProps } from './types';

/**
 * Convert a File to a data URL
 */
async function fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
}

/**
 * Wrap raw HTML in a basic document structure
 */
function wrapHtmlContent(html: string): string {
    // Check if HTML already has doctype or html tag
    if (html.trim().toLowerCase().startsWith('<!doctype') ||
        html.trim().toLowerCase().startsWith('<html')) {
        return html;
    }

    // Wrap in basic HTML structure
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { 
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      overflow: hidden;
    }
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
}

export const HtmlSlideRenderer: React.FC<HtmlSlideRendererProps> = ({
    slide,
    width,
    height,
    sandbox = true,
    className,
    onLoad,
    onError,
}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [srcDoc, setSrcDoc] = useState<string | null>(null);
    const [srcUrl, setSrcUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Keep callbacks in refs to avoid useEffect re-runs
    const onLoadRef = useRef(onLoad);
    const onErrorRef = useRef(onError);

    useEffect(() => {
        onLoadRef.current = onLoad;
        onErrorRef.current = onError;
    }, [onLoad, onError]);

    // Process the slide source
    useEffect(() => {
        setIsLoading(true);
        setError(null);
        setSrcDoc(null);
        setSrcUrl(null);

        const processSlide = async () => {
            try {
                switch (slide.type) {
                    case 'url':
                        setSrcUrl(slide.content as string);
                        break;
                    case 'html':
                        const wrappedHtml = wrapHtmlContent(slide.content as string);
                        setSrcDoc(wrappedHtml);
                        break;
                    case 'file':
                        const file = slide.content as File;
                        const fileContent = await fileToDataUrl(file);
                        const wrappedFileHtml = wrapHtmlContent(fileContent);
                        setSrcDoc(wrappedFileHtml);
                        break;
                    default:
                        throw new Error(`Unknown slide type: ${slide.type}`);
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'Failed to load slide';
                setError(errorMessage);
                onErrorRef.current?.(e instanceof Error ? e : new Error(errorMessage));
            }
        };

        processSlide();
    }, [slide]); // Removed onLoad, onError from dependencies

    // Handle iframe load
    const handleLoad = useCallback(() => {
        setIsLoading(false);
        onLoad?.();
    }, [onLoad]);

    // Handle iframe error
    const handleError = useCallback(() => {
        setIsLoading(false);
        const err = new Error('Failed to load slide content');
        setError(err.message);
        onError?.(err);
    }, [onError]);

    // Sandbox attributes for security
    const sandboxAttrs = sandbox
        ? 'allow-same-origin allow-scripts allow-popups allow-forms'
        : undefined;

    return (
        <div className={`html-slide-renderer ${className || ''}`}>
            {error ? (
                <div className="html-slide-error">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M12 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="12" cy="16" r="1" fill="currentColor" />
                    </svg>
                    <p>{error}</p>
                </div>
            ) : (
                <>
                    <iframe
                        ref={iframeRef}
                        title={slide.title || `Slide ${slide.id}`}
                        width={width}
                        height={height}
                        src={srcUrl || undefined}
                        srcDoc={srcDoc || undefined}
                        sandbox={sandboxAttrs}
                        onLoad={handleLoad}
                        onError={handleError}
                        className="html-slide-iframe"
                        style={{
                            border: 'none',
                            backgroundColor: '#fff',
                            opacity: isLoading ? 0 : 1,
                            transition: 'opacity 0.2s ease',
                        }}
                    />
                    {isLoading && (
                        <div className="html-slide-loading">
                            <div className="html-slide-spinner" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default HtmlSlideRenderer;
