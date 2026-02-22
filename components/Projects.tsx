
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative section-padding scroll-mt-20 bg-indigo-50/40 dark:bg-slate-900/50 transition-colors duration-300 overflow-hidden">
      
      {/* Abstract Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=2000" 
          alt="bg" 
          className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.03]"
        />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Featured Projects</h2>
            <div className="w-20 h-2 bg-primary-600 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xl leading-relaxed">
              A selection of my recent works ranging from enterprise logistics to consumer service platforms.
            </p>
          </div>
          <a 
            href="https://github.com/Abhishek2000649" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border-2 border-slate-100 dark:border-slate-800 text-primary-600 font-bold hover:border-primary-600 transition-all flex items-center gap-3 shadow-sm hover:shadow-lg backdrop-blur-sm"
          >
            Explore more on GitHub
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-2 border-slate-100 dark:border-slate-800 rounded-[2.5rem] overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* <div className="h-64 bg-slate-100/50 dark:bg-slate-800/30 flex items-center justify-center p-8 relative overflow-hidden">
                 <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                 {<svg className="w-24 h-24 text-primary-600/20 group-hover:scale-110 transition-transform duration-700" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                 </svg> }
                 <div className="h-64 relative overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  />
</div>
                 <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg bg-white/90 dark:bg-slate-900/90 text-primary-600 shadow-sm">
                        {tech}
                      </span>
                    ))}
                 </div>
              </div> */}

              <div className="h-64 relative overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity group-hover:scale-110 transition-transform duration-700"
  />

  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>

  {/* Tech badges */}
  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-10">
    {project.techStack.slice(0, 3).map(tech => (
      <span
        key={tech}
        className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg bg-white/90 dark:bg-slate-900/90 text-primary-600 shadow-sm"
      >
        {tech}
      </span>
    ))}
  </div>
</div>
              
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-base mb-8 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8 space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Key Modules</p>
                  <ul className="space-y-3">
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-3">
                         <span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-transform"></span>
                         {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex items-center gap-6 border-t border-slate-50 dark:border-slate-800 pt-8">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black text-slate-900 dark:text-slate-100 hover:text-primary-600 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    Code
                  </a>
                  <a 
                    href={project.demoLink}
                    className="text-sm font-black text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2 group/btn"
                  >
                    Live Demo
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
