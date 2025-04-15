'use client';

import React from 'react';

/**
 * Footer component with cyberpunk styling
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-8 border-t border-green-900 dark:border-green-800 p-4 text-center font-mono text-sm relative z-10">
      <div className="container mx-auto">
        <p className="mb-2">© {currentYear} Ethical Hacking Zone | For educational purposes only</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          <span className="inline-block animate-pulse mr-1">&#9608;</span> 
          All materials are provided for ethical research and learning.
        </p>
      </div>
    </footer>
  );
};

export default Footer;