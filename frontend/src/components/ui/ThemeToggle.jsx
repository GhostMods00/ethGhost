import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

/**
 * ThemeToggle component for switching between dark and light mode
 */
const ThemeToggle = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className={`w-8 h-8 ${className}`}></div>;
  }
  
  const isDark = theme === 'dark';
  
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-md transition-colors duration-200 ${
        isDark 
          ? 'bg-green-900 hover:bg-green-800 text-green-400' 
          : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
      } ${className}`}
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;