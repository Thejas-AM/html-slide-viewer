/**
 * HtmlSlideViewer - Main component for viewing HTML files as a presentation
 */

import React, { useCallback, useEffect, useState } from 'react';
import { HtmlSlideRenderer } from './HtmlSlideRenderer';
import { HtmlFilmstrip } from './HtmlFilmstrip';
import type { HtmlSlideViewerProps } from './types';
import './HtmlSlideViewer.css';

export const HtmlSlideViewer: React.FC<HtmlSlideViewerProps> = ({
    slides,
    initialSlide = 0,
    previewWidth = 960,
    previewHeight = 540,
    showFilmstrip = true,
    filmstripPosition = 'right',
    viewMode = 'single',
    scrollBehavior = 'smooth',
    sandboxIframes = true,
    onSlideChange,
    onSlideError,
    className,
}) => {
    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const slideRefs = React.useRef<(HTMLDivElement | null)[]>([]);
    const currentSlideRef = React.useRef(currentSlide);

    // Sync ref with state
    useEffect(() => {
        currentSlideRef.current = currentSlide;
    }, [currentSlide]);

    // Initialize slideRefs array
    useEffect(() => {
        slideRefs.current = slideRefs.current.slice(0, slides.length);
    }, [slides]);

    // Intersection Observer to detect current slide in scroll mode
    useEffect(() => {
        if (viewMode !== 'scroll' || !scrollContainerRef.current) return;

        const observerOptions = {
            root: scrollContainerRef.current,
            threshold: 0.6,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute('data-slide-index'));
                    if (!isNaN(index) && index !== currentSlideRef.current) {
                        setCurrentSlide(index);
                        onSlideChange?.(index, slides[index]);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const currentRefs = slideRefs.current;
        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [viewMode, slides, onSlideChange]); // Removed currentSlide

    // Clamp current slide to valid range
    useEffect(() => {
        if (slides.length === 0) {
            setCurrentSlide(0);
        } else if (currentSlide >= slides.length) {
            setCurrentSlide(slides.length - 1);
        } else if (currentSlide < 0) {
            setCurrentSlide(0);
        }
    }, [slides.length, currentSlide]);

    // Handle slide change (thumbnail click or nav buttons)
    const handleSlideChange = useCallback(
        (index: number) => {
            if (index < 0 || index >= slides.length) return;

            if (viewMode === 'scroll') {
                const targetSlide = slideRefs.current[index];
                if (targetSlide) {
                    targetSlide.scrollIntoView({
                        behavior: scrollBehavior,
                        block: 'center',
                    });
                }
            } else {
                setCurrentSlide(index);
                onSlideChange?.(index, slides[index]);
            }
        },
        [slides, onSlideChange, viewMode, scrollBehavior]
    );

    // Navigation handlers
    const goToNextSlide = useCallback(() => {
        handleSlideChange(currentSlide + 1);
    }, [currentSlide, handleSlideChange]);

    const goToPrevSlide = useCallback(() => {
        handleSlideChange(currentSlide - 1);
    }, [currentSlide, handleSlideChange]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (slides.length === 0) return;

            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                goToNextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                goToPrevSlide();
            } else if (e.key === 'Home') {
                e.preventDefault();
                handleSlideChange(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                handleSlideChange(slides.length - 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [slides.length, goToNextSlide, goToPrevSlide, handleSlideChange]);


    // Layout classes
    const layoutClass = `html-viewer-layout html-viewer-layout--${filmstripPosition}`;
    const mainClass = `html-viewer-main html-viewer-main--${viewMode}`;

    // Empty state
    if (slides.length === 0) {
        return (
            <div className={`html-viewer html-viewer--empty ${className || ''}`}>
                <div className="html-viewer-empty">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13 2v7h7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p>No slides to display</p>
                    <span>Add HTML slides to view them as a presentation</span>
                </div>
            </div>
        );
    }

    return (
        <div className={`html-viewer ${className || ''}`}>
            {/* Header with controls */}
            <div className="html-viewer-header">
                <div className="html-viewer-title" title={slides[currentSlide]?.title || `Slide ${currentSlide + 1}`}>
                    {slides[currentSlide]?.title || `Slide ${currentSlide + 1}`}
                </div>
                <div className="html-viewer-controls">
                    <button
                        className="html-viewer-btn html-viewer-btn--nav"
                        onClick={goToPrevSlide}
                        disabled={currentSlide === 0}
                        aria-label="Previous slide"
                        title="Previous slide (←)"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <span className="html-viewer-slide-counter">
                        {currentSlide + 1} / {slides.length}
                    </span>
                    <button
                        className="html-viewer-btn html-viewer-btn--nav"
                        onClick={goToNextSlide}
                        disabled={currentSlide >= slides.length - 1}
                        aria-label="Next slide"
                        title="Next slide (→)"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main area with layout */}
            <div className={layoutClass} >
                {/* Filmstrip BEFORE main area */}
                {showFilmstrip && (filmstripPosition === 'left' || filmstripPosition === 'top') && (
                    <HtmlFilmstrip
                        slides={slides}
                        currentSlide={currentSlide}
                        onSlideSelect={handleSlideChange}
                        position={filmstripPosition}
                        sandbox={sandboxIframes}
                        height={previewHeight}
                        width={previewWidth}
                    />
                )}

                {/* Main slide display */}
                <div
                    className={mainClass}
                    ref={scrollContainerRef}
                    style={{
                        height: viewMode === 'scroll' ? (previewHeight + previewHeight * 0.1 + 'px') : '100%',
                        width: previewWidth ? (previewWidth + 'px') : '100%',
                        // maxWidth: '100%',
                        // maxHeight: '100%'
                    }}
                >
                    {viewMode === 'scroll' ? (
                        slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className="html-viewer-scroll-item"
                                data-slide-index={index}
                                ref={(el) => { slideRefs.current[index] = el; }}
                            >
                                <HtmlSlideRenderer
                                    slide={slide}
                                    width={previewWidth}
                                    height={previewHeight}
                                    sandbox={sandboxIframes}
                                    onLoad={() => { }}
                                    onError={(err) => onSlideError?.(index, err)}
                                    className="html-viewer-slide"
                                />
                            </div>
                        ))
                    ) : (
                        <HtmlSlideRenderer
                            slide={slides[currentSlide]}
                            width={previewWidth}
                            height={previewHeight}
                            sandbox={sandboxIframes}
                            onLoad={() => { }}
                            onError={(err) => onSlideError?.(currentSlide, err)}
                            className="html-viewer-slide"
                        />
                    )}
                </div>

                {/* Filmstrip AFTER main area */}
                {showFilmstrip && (filmstripPosition === 'right' || filmstripPosition === 'bottom') && (
                    <HtmlFilmstrip
                        slides={slides}
                        currentSlide={currentSlide}
                        onSlideSelect={handleSlideChange}
                        position={filmstripPosition}
                        sandbox={sandboxIframes}
                        height={previewHeight}
                        width={previewWidth}
                    />
                )}
            </div>

        </div>
    );
};


export default HtmlSlideViewer;
