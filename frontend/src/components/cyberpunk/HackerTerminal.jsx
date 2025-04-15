import React, { useState, useEffect } from 'react';

/**
 * HackerTerminal component simulates a terminal with typing animations
 */
const HackerTerminal = ({ 
  lines = ['$ Welcome to Ethical Hacking Zone', '$ Type \'help\' to see available commands'],
  typingSpeed = 50,
  promptText = 'root@ehz:~#',
  className = '',
}) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  // Effect to handle the typing animation
  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsTyping(false);
      return;
    }
    
    if (currentChar < lines[currentLine].length) {
      // Still typing the current line
      const timer = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else {
      // Line complete, move to next line
      setDisplayedLines([...displayedLines, lines[currentLine]]);
      setCurrentLine(currentLine + 1);
      setCurrentChar(0);
      
      // Small pause between lines
      const timer = setTimeout(() => {}, typingSpeed * 3);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, lines, displayedLines, typingSpeed]);
  
  return (
    <div className={`p-4 bg-black rounded-md font-mono text-sm overflow-hidden ${className}`}>
      {/* Terminal window controls */}
      <div className="flex items-center mb-2">
        <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
        <span className="text-xs text-gray-400">Terminal</span>
      </div>
      
      {/* Terminal content */}
      <div className="text-green-400">
        {/* Completed lines */}
        {displayedLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        
        {/* Currently typing line */}
        {isTyping && currentLine < lines.length && (
          <p>{lines[currentLine].substring(0, currentChar)}</p>
        )}
        
        {/* Command prompt with blinking cursor */}
        <p className="flex items-center">
          <span className="text-green-500 mr-1">{promptText}</span>
          <span className="animate-pulse">_</span>
        </p>
      </div>
    </div>
  );
};

export default HackerTerminal;