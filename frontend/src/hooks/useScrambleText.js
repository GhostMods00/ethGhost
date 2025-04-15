import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for creating text scramble effect
 * @param {string} finalText - The final text to display after scrambling
 * @param {number} duration - Duration of scramble effect in ms
 * @param {boolean} autoStart - Whether to start the animation immediately
 * @returns {Object} - { text, start }
 */
const useScrambleText = (finalText = '', duration = 1500, autoStart = true) => {
  const [text, setText] = useState('');
  const [isScrambling, setIsScrambling] = useState(autoStart);
  
  // Characters to use for scrambling effect
  const chars = '!<>-_\\/[]{}—=+*^?#_abcdefghijklmnopqrstuvwxyz0123456789';
  
  const scramble = useCallback(() => {
    if (!finalText) return;
    
    let iteration = 0;
    const totalIterations = 20; // Number of scramble iterations
    const interval = duration / totalIterations;
    
    // Clear any existing interval
    const timer = setInterval(() => {
      let output = '';
      
      const progress = iteration / totalIterations;
      
      for (let i = 0; i < finalText.length; i++) {
        // If the character is already set based on progress
        if (i < Math.floor(finalText.length * progress)) {
          output += finalText[i];
        } else {
          // Generate a random character
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      setText(output);
      iteration += 1;
      
      if (iteration >= totalIterations) {
        clearInterval(timer);
        setText(finalText);
        setIsScrambling(false);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [finalText, duration]);
  
  // Start scrambling effect when isScrambling becomes true
  useEffect(() => {
    if (isScrambling) {
      scramble();
    }
  }, [isScrambling, scramble]);
  
  // Start scrambling on mount if autoStart is true
  useEffect(() => {
    if (autoStart) {
      setIsScrambling(true);
    }
  }, [autoStart]);
  
  // Function to manually start the scramble effect
  const start = () => {
    setText('');
    setIsScrambling(true);
  };
  
  return { text, start };
};

export default useScrambleText;