'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Lock, Unlock, File, Download } from 'lucide-react';

/**
 * ContentCard component for displaying tutorial or resource items
 */
const ContentCard = ({
  title,
  description,
  isPremium = false,
  type = 'tutorial', // 'tutorial', 'resource', 'tool'
  link = '#',
  contentType = 'PDF', // 'PDF', 'Video', 'Tool', etc.
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`p-4 rounded-md border transition-all duration-300 ${
        isPremium 
          ? 'border-purple-700 hover:border-purple-500 dark:border-purple-700 dark:hover:border-purple-500' 
          : 'border-blue-300 hover:border-blue-400 dark:border-green-700 dark:hover:border-green-500'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <h3 className={`font-mono text-lg tracking-wide ${isHovered ? 'text-blue-600 dark:text-green-400' : ''}`}>
          {title}
        </h3>
        {isPremium ? (
          <Lock size={18} className="text-purple-600 dark:text-purple-400" />
        ) : (
          <Unlock size={18} className="text-blue-600 dark:text-green-400" />
        )}
      </div>
      
      <p className="my-2 font-mono opacity-80 text-sm">{description}</p>
      
      <div className="flex items-center mt-4 text-sm">
        <span className={`px-2 py-1 rounded ${
          isPremium 
            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' 
            : 'bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-400'
        }`}>
          {isPremium ? 'Premium' : 'Free'}
        </span>
        
        <Link 
          href={link} 
          className={`ml-auto flex items-center hover:text-blue-700 dark:hover:text-green-300 ${
            isPremium ? 'text-purple-700 dark:text-purple-400' : 'text-blue-600 dark:text-green-400'
          }`}
        >
          <File size={14} className="mr-1" />
          {contentType}
          {!isPremium && <Download size={14} className="ml-2" />}
        </Link>
      </div>
    </div>
  );
};

export default ContentCard;