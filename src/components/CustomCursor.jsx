'use client'

import { useEffect, useRef, useState } from 'react';

// Hide the native cursor globally via a style tag
function HideNativeCursor() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = '*, *::before, *::after { cursor: none !important; }';
    style.id = 'hide-native-cursor';
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
}

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let animId;

    const moveCursor = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
      setIsVisible(true);
    };

    const animate = () => {
      ringX += (dotX - ringX) * 0.1;
      ringY += (dotY - ringY) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e) => {
      const isClickable = e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]');
      setIsHovering(!!isClickable);
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousemove', handleHoverStart);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousemove', handleHoverStart);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <HideNativeCursor />

      {/* Outer ring — lagging */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: isHovering ? 52 : 36,
          height: isHovering ? 52 : 36,
          borderRadius: '50%',
          border: isHovering ? '1.5px solid rgba(255,255,255,0.95)' : '1.5px solid rgba(255,255,255,0.75)',
          backgroundColor: isHovering ? 'rgba(255,255,255,0.18)' : 'transparent',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease, width 0.35s cubic-bezier(0.34,1.56,0.64,1), height 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s ease, background-color 0.2s ease',
          willChange: 'transform',
          mixBlendMode: 'difference',
        }}
      />

      {/* Inner dot — snappy */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: isHovering ? 6 : 8,
          height: isHovering ? 6 : 8,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease, width 0.2s ease, height 0.2s ease',
          willChange: 'transform',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
