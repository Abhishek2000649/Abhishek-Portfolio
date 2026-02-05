
import React from 'react';
import { INTERNSHIP } from '../constants';

const About: React.FC = () => {
  const handleDownloadResume = () => {
    window.print();
  };

  return (
    <section id="about" className="relative section-padding scroll-mt-20 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* Abstract Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=2000" 
          alt="bg" 
          className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.02]"
        />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4">
              <span className="w-16 h-1.5 bg-primary-600 rounded-full"></span>
              About Me
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
              <p>
                I am a passionate and detail-oriented <span className="text-slate-900 dark:text-slate-100 font-bold">PHP Laravel Full Stack Developer</span>. Currently completing an intensive internship, I thrive on turning complex business requirements into elegant, functional web applications.
              </p>
              <p>
                My focus lies in building robust backend systems with <span className="text-primary-600 dark:text-primary-400 font-bold">Laravel</span> while crafting seamless user interfaces using modern tools like <span className="text-slate-900 dark:text-slate-100 font-bold">React, Angular, and Tailwind CSS</span>.
              </p>
              <p>
                Beyond coding, I am dedicated to continuous learning, aiming to master real-world software architecture and enhance my communication skills for global collaboration.
              </p>
            </div>
            
            <div className="pt-4 flex items-center gap-6">
               <button
                onClick={handleDownloadResume} 
                className="px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm border-2 border-slate-100 dark:border-slate-800 rounded-[3rem] p-10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8">Professional Experience</h3>
            <div className="mb-8">
              <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">{INTERNSHIP.role}</h4>
              <div className="flex flex-col sm:flex-row sm:justify-between text-base text-slate-500 mt-2">
                <span className="font-bold text-slate-700 dark:text-slate-300 underline decoration-primary-500/30 underline-offset-4">{INTERNSHIP.company}</span>
                <span className="font-medium">{INTERNSHIP.period}</span>
              </div>
              <p className="text-sm text-slate-400 mt-1 uppercase tracking-widest">{INTERNSHIP.location}</p>
            </div>

            <ul className="space-y-4">
              {INTERNSHIP.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  <span className="mt-2.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-600"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
