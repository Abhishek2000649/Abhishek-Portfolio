
import React, { useEffect, useState } from 'react';
import profile from "../assets/Abhishek.png";
const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const name = "Abhishek Kumar";
  const titleText = "PHP / Laravel Full Stack Developer";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const nameWords = name.split(" ");
  let charCounter = 0;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-300 scroll-mt-20">
      
      {/* Dynamic Particle Background (Stars) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-slate-400 dark:bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        {/* Subtle Nebula Glow */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary-100/40 dark:bg-primary-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className={`space-y-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-primary-600 dark:text-primary-400 font-bold text-lg sm:text-xl tracking-wide uppercase flex flex-wrap">
                {titleText.split("").map((char, index) => (
                  <span 
                    key={index} 
                    className="inline-block opacity-0 animate-letter-fade-in"
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
              
              <div className="relative">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter flex flex-wrap gap-x-[0.4em]">
                  {nameWords.map((word, wordIdx) => (
                    <span key={wordIdx} className="inline-block whitespace-nowrap">
                      {word.split("").map((char, charIdx) => {
                        const currentDelay = charCounter * 0.15;
                        charCounter++;
                        return (
                          <span 
                            key={charIdx} 
                            className="inline-block animate-text-drop-loop"
                            style={{ animationDelay: `${currentDelay}s` }}
                          >
                            {char}
                          </span>
                        );
                      })}
                    </span>
                  ))}
                </h1>
                {/* Decorative underline */}
                <div className="h-2 w-1/3 bg-primary-600 rounded-full mt-10 animate-pulse"></div>
              </div>

              <p className={`text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl font-medium transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Building scalable and high-performance web applications. Focused on Laravel architecture, 
                RESTful API development, database optimization (MySQL, PostgreSQL), 
                and modern frameworks. Proven track record in delivering complex projects.
              </p>
            </div>

            {/* Buttons */}
            <div className={`flex flex-wrap gap-5 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href="#projects" className="px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl flex items-center gap-3 transition-all shadow-lg shadow-primary-600/20">
                View Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="px-10 py-4 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                Contact Me
              </a>
            </div>

            {/* Stats Section */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-100 dark:border-slate-800 transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 dark:text-white">06+ Months</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Intern Experience</span>
              </div>
              
              <div className="group relative p-4 rounded-xl border border-primary-500/30 bg-primary-50 dark:bg-primary-500/5 flex flex-col gap-1 overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                   <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
                </div>
                <span className="text-3xl font-black text-slate-900 dark:text-white">03 Projects</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">In Portfolio</span>
                <div className="absolute bottom-0 left-0 h-1 bg-primary-500 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 dark:text-white">03+ Completed Projects</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">In Portfolio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Card Design */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 delay-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="relative max-w-[420px] mx-auto group">
              
              {/* External Glowing Frame */}
              <div className="absolute -inset-4 border-2 border-primary-500/30 dark:border-primary-500/40 rounded-[3rem] blur-[2px] pointer-events-none group-hover:border-primary-500/60 transition-colors"></div>
              <div className="absolute -inset-4 border-2 border-primary-500/10 dark:border-primary-500/20 rounded-[3rem] pointer-events-none"></div>

              {/* Main Card */}
              <div className="relative z-10 bg-white dark:bg-[#0f172a] rounded-[2.5rem] p-4 border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden">
                
                {/* Photo Area */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <img 
                    src={profile}
                    alt="Abhishek Kumar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  
                  {/* Floating Badge (Top Right) */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-primary-500/50 rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center font-black text-sm">L</div>
                    <div>
                       <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">@stack</p>
                       <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Laravel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-slate-100 dark:border-slate-800 rounded-full -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Label */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-600 to-transparent"></div>
      </div>

      {/* Sparkle Icon (Bottom Right) */}
      <div className="absolute bottom-10 right-10 animate-spin-slow">
        <svg className="w-12 h-12 text-slate-200 dark:text-slate-400/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}} />

    </section>
  );
};

export default Hero;
