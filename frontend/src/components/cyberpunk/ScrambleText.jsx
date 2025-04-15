import React, { useEffect } from 'react';
import useScrambleText from '@/hooks/useScrambleText';

/**
 * ScrambleText component for creating cyberpunk text scramble animations
 */
const ScrambleText = ({ 
  text, 
  tag = 'span', 
  className = '', 
  duration = 1500, 
  autoStart = true,
  onHover = false,
  ...props 
}) => {
  const { text: scrambledText, start } = useScrambleText(text, duration, autoStart);
  const Tag = tag; // Dynamic element tag
  
  // Handle hover events if onHover is enabled
  const handleMouseEnter = () => {
    if (onHover) {
      start();
    }
  };
  
  return (
    <Tag 
      className={`font-mono ${className}`} 
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {scrambledText}
    </Tag>
  );
};

export default ScrambleText;