import React from 'react';
import { useTheme } from 'next-themes';

/**
 * GridBackground component creates a cyberpunk-style grid and scanline animation
 */
const GridBackground = ({ className = '' }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${className}`}>
      {/* Grid lines */}
      <div 
        className="absolute inset-0 z-0 opacity-20 dark:opacity-30 transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(to right, ${isDark ? 'rgba(0, 255, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)'} 1px, transparent 1px), 
                            linear-gradient(to bottom, ${isDark ? 'rgba(0, 255, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)'} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Scanline animation */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div 
          className="h-px w-full absolute bg-green-500 dark:bg-green-400 opacity-30 dark:opacity-50 scanline"
          style={{
            boxShadow: `0 0 10px 1px ${isDark ? '#0f0' : '#0f8'}`,
            animation: 'scanline 6s linear infinite'
          }}
        />
      </div>
      
      {/* Vignette effect - darker at the edges */}
      <div 
        className="absolute inset-0 z-20 opacity-40 dark:opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            circle at center,
            transparent 0%,
            ${isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.2)'} 100%
          )`
        }}
      />
    </div>
  );
};

export default GridBackground;