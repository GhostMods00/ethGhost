'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import GridBackground from '@/components/cyberpunk/GridBackground';
import { useTheme } from 'next-themes';

/**
 * MainLayout component wraps pages with header, navigation sidebar, and footer
 */
const MainLayout = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background effects */}
      <GridBackground />
      
      {/* Header */}
      <Header />
      
      {/* Main content area with sidebar */}
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar navigation */}
          <div className="col-span-1">
            <div className={`${isDark ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-90'} 
              border ${isDark ? 'border-green-900' : 'border-gray-300'} p-4 rounded-md sticky top-4`}>
              <Navigation />
            </div>
          </div>
          
          {/* Main content */}
          <main className={`col-span-1 md:col-span-3 ${isDark ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-90'} 
            border ${isDark ? 'border-green-900' : 'border-gray-300'} rounded-md p-4`}>
            {children}
          </main>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;