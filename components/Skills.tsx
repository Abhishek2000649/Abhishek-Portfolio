
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

  return (
    <section id="skills" className="relative section-padding scroll-mt-20 bg-slate-50 dark:bg-slate-900/20 transition-colors duration-300 overflow-hidden">
      
      {/* Abstract Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000" 
          alt="bg" 
          className="w-full h-full object-cover opacity-[0.05] dark:opacity-[0.02] mix-blend-multiply dark:mix-blend-overlay"
        />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Technical Arsenal</h2>
          <div className="w-24 h-2 bg-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            A comprehensive overview of the technologies and tools I use to build high-performance web applications.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map((cat) => (
            <div key={cat} className="space-y-10">
              <div className="flex items-center gap-6">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">
                  {cat}
                </h3>
                <div className="flex-grow h-0.5 bg-slate-200 dark:bg-slate-800"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div 
                    key={skill.name}
                    className="group relative p-8 rounded-[2rem] bg-white/80 dark:bg-slate-900/80 border-2 border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center gap-5 text-center hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-500 cursor-default shadow-sm hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-primary-500/[0.02] opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity"></div>
                    
                    <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-5xl group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-all duration-500 shadow-inner group-hover:shadow-primary-500/10">
                      <span className="group-hover:scale-110 transition-transform duration-500 transform-gpu">
                        {skill.icon}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="block text-lg font-black text-slate-800 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex justify-center">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          Expertise
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
