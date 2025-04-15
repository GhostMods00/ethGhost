'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HackerTerminal from '@/components/cyberpunk/HackerTerminal';
import ContentCard from '@/components/ui/ContentCard';
import ScrambleText from '@/components/cyberpunk/ScrambleText';
import Link from 'next/link';

export default function Home() {
  // Featured content for homepage
  const featuredContent = [
    {
      title: 'SQL Injection Basics',
      description: 'Learn how to identify and exploit SQL injection vulnerabilities ethically.',
      isPremium: false,
      type: 'tutorial',
      contentType: 'PDF',
      link: '/tutorials/sql-injection-basics'
    },
    {
      title: 'Advanced Penetration Testing',
      description: 'Professional techniques for comprehensive network security assessment.',
      isPremium: true,
      type: 'tutorial',
      contentType: 'Videos + PDF',
      link: '/premium/advanced-pentest'
    },
    {
      title: 'Password Strength Checker',
      description: 'Tool to evaluate password security with detailed analysis.',
      isPremium: false,
      type: 'tool',
      contentType: 'Tool',
      link: '/resources/password-checker'
    },
    {
      title: 'Network Scanner Suite',
      description: 'Complete toolkit for network vulnerability assessment.',
      isPremium: true,
      type: 'tool',
      contentType: 'Tool + Guide',
      link: '/premium/network-scanner'
    }
  ];
  
  return (
    <MainLayout>
      {/* Hero section */}
      <section className="mb-12">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-blue-700 dark:text-green-400">
            <ScrambleText text="Welcome to the Ethical Hacking Zone" duration={2500} />
          </h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Your source for <span className="text-blue-600 dark:text-green-400">ethical hacking</span> tutorials, 
            tools, and resources. Learn cybersecurity skills 
            responsibly and master the art of securing digital systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-between p-6 rounded-md border border-blue-200 dark:border-green-800 bg-blue-50 dark:bg-gray-900 dark:bg-opacity-70">
            <div>
              <h2 className="text-xl font-mono mb-4 text-blue-700 dark:text-green-400">Start Your Cybersecurity Journey</h2>
              <p className="mb-6">
                Explore our free tutorials and tools to build foundational ethical hacking skills. 
                Get hands-on experience with real-world security challenges.
              </p>
            </div>
            <Link href="/tutorials" className="btn-primary self-start">
              Browse Tutorials
            </Link>
          </div>
          
          <div className="flex flex-col justify-between p-6 rounded-md border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-gray-900 dark:bg-opacity-70">
            <div>
              <h2 className="text-xl font-mono mb-4 text-purple-700 dark:text-purple-400">
                <span className="mr-2">🔒</span>
                Unlock Premium Content
              </h2>
              <p className="mb-6">
                Access advanced training materials, specialized tools, and in-depth guides with our 
                premium membership. Take your skills to professional levels.
              </p>
            </div>
            <Link href="/premium" className="px-4 py-2 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200 font-mono self-start">
              View Premium
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured content section */}
      <section className="mb-12">
        <h2 className="font-mono text-xl mb-6 font-bold tracking-wide border-b pb-2 border-blue-200 dark:border-green-900">
          <ScrambleText text="Featured Content" duration={1000} />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredContent.map((item, index) => (
            <ContentCard 
              key={index}
              title={item.title}
              description={item.description}
              isPremium={item.isPremium}
              type={item.type}
              contentType={item.contentType}
              link={item.link}
            />
          ))}
        </div>
      </section>
      
      {/* Terminal section */}
      <section className="mb-8">
        <h2 className="font-mono text-xl mb-4 font-bold tracking-wide border-b pb-2 border-blue-200 dark:border-green-900">
          <ScrambleText text="Hacker Terminal" duration={1000} />
        </h2>
        
        <HackerTerminal 
          lines={[
            '$ Welcome to Ethical Hacking Zone',
            '$ Loading security modules...',
            '$ Initializing penetration testing tools...',
            '$ Security scan complete. System secure.',
            '$ Type \'help\' to see available commands'
          ]}
          className="terminal-box"
        />
      </section>
      
      {/* Why ethical hacking section */}
      <section>
        <h2 className="font-mono text-xl mb-4 font-bold tracking-wide border-b pb-2 border-blue-200 dark:border-green-900">
          <ScrambleText text="Why Learn Ethical Hacking?" duration={1000} />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 border border-blue-200 dark:border-green-900 rounded-md">
            <h3 className="font-mono text-lg mb-2 text-blue-700 dark:text-green-400">Protect Systems</h3>
            <p className="text-sm">Learn to identify and fix vulnerabilities before malicious hackers can exploit them.</p>
          </div>
          
          <div className="p-4 border border-blue-200 dark:border-green-900 rounded-md">
            <h3 className="font-mono text-lg mb-2 text-blue-700 dark:text-green-400">Career Opportunities</h3>
            <p className="text-sm">Cybersecurity professionals are in high demand with competitive salaries worldwide.</p>
          </div>
          
          <div className="p-4 border border-blue-200 dark:border-green-900 rounded-md">
            <h3 className="font-mono text-lg mb-2 text-blue-700 dark:text-green-400">Understand Threats</h3>
            <p className="text-sm">Gain insight into hacker methodologies and stay ahead of evolving cyber threats.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}