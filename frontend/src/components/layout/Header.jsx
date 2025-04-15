'use client';

import React from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';
import ScrambleText from '@/components/cyberpunk/ScrambleText';
import { useTheme } from 'next-themes';

/**
 * Header component for the cyberpunk website
 */
const Header = () => {
  const { theme } = useTheme();
  
  return (
    <header className="border-b border-green-900 dark:border-green-800 border-opacity-30 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo/brand */}
        <Link href="/" className="text-green-400 dark:text-green-500 hover:text-green-300">
          <h1 className="font-mono text-xl md:text-2xl tracking-widest flex items-center">
            <span className="inline-block mr-3 h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
            <ScrambleText text="ETHICAL_HACKING_ZONE" duration={2000} />
          </h1>
        </Link>
      </div>
      
      {/* Right side actions */}
      <div className="flex items-center space-x-4">
        {/* Login/Register links */}
        <Link 
          href="/auth/signin" 
          className="font-mono text-sm hidden md:inline-block hover:text-green-400 dark:hover:text-green-300 transition-colors"
        >
          _login
        </Link>
        <Link 
          href="/auth/signup" 
          className="font-mono text-sm hidden md:inline-block hover:text-green-400 dark:hover:text-green-300 transition-colors"
        >
          _register
        </Link>
        
        {/* Theme toggle button */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;