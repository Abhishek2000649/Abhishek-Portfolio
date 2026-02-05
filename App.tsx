
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkewDivider from './components/SkewDivider';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="w-full overflow-x-hidden">
        <Hero />
        
        {/* Slanted Transition from Hero to About */}
        <SkewDivider fromColor="bg-white dark:bg-[#020617]" toColor="bg-white dark:bg-slate-950" />
        
        <About />
        
        {/* Slanted Transition from About to Skills */}
        <SkewDivider fromColor="bg-white dark:bg-slate-950" toColor="bg-slate-50 dark:bg-slate-900/20" reverse />
        
        <Skills />
        
        {/* Slanted Transition from Skills to Projects */}
        <SkewDivider fromColor="bg-slate-50 dark:bg-slate-900/20" toColor="bg-indigo-50/40 dark:bg-slate-900/50" />
        
        <Projects />
        
        {/* Slanted Transition from Projects to Education */}
        <SkewDivider fromColor="bg-indigo-50/40 dark:bg-slate-900/50" toColor="bg-slate-50 dark:bg-slate-900/20" reverse />
        
        <Education />
        
        {/* Slanted Transition from Education to Contact */}
        <SkewDivider fromColor="bg-slate-50 dark:bg-slate-900/20" toColor="bg-white dark:bg-slate-950" />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;