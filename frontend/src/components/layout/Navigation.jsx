'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ScrambleText from '@/components/cyberpunk/ScrambleText';

// Navigation links configuration
const navigationLinks = [
  { path: '/', label: '_Home' },
  { path: '/tutorials', label: '_Tutorials' },
  { path: '/resources', label: '_Resources' },
  { path: '/premium', label: '_Premium' },
  { path: '/about', label: '_About' },
];

/**
 * Navigation component with cyberpunk styling
 */
const Navigation = ({ className = '' }) => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);
  
  return (
    <nav className={`${className}`}>
      <h2 className="font-mono text-xl mb-4 border-b border-green-900 dark:border-green-800 pb-2 flex items-center">
        <span className="inline-block mr-2 h-3 w-3 rounded-full bg-green-800 dark:bg-green-500"></span>
        <ScrambleText text="Navigation" duration={1000} autoStart={true} />
      </h2>
      
      <ul className="space-y-2 font-mono">
        {navigationLinks.map((link) => {
          const isActive = pathname === link.path;
          
          return (
            <li key={link.path}>
              <Link 
                href={link.path}
                className={`p-2 block rounded transition-all duration-200 
                  ${isActive 
                    ? 'bg-green-900 bg-opacity-30 text-green-400 dark:bg-green-900 dark:bg-opacity-50' 
                    : 'hover:bg-green-900 hover:bg-opacity-30 dark:hover:bg-green-900 dark:hover:bg-opacity-50'
                  }`}
                onMouseEnter={() => setHoveredItem(link.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {hoveredItem === link.path ? (
                  <ScrambleText text={link.label} duration={500} autoStart={true} />
                ) : (
                  link.label
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;