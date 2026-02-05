
import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Teerthanker Mahaveer University",
      location: "Moradabad, UP",
      status: "Graduated",
      result: "76%",
      period: "2021 — 2024",
      highlight: "Specialized in Web Development & Database Systems",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Higher Secondary School",
      location: "Moradabad, UP",
      status: "PCM Stream",
      result: "82%",
      period: "2019 — 2021",
      highlight: "Focus on Physics, Chemistry, and Mathematics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      degree: "High School (10th Grade)",
      institution: "Secondary School",
      location: "Moradabad, UP",
      status: "Completed",
      result: "85%",
      period: "2017 — 2019",
      highlight: "Foundation of Computer Science and Science",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section id="education" className="relative section-padding scroll-mt-20 overflow-hidden bg-slate-50 dark:bg-slate-900/20 transition-colors duration-300">
      
      {/* Abstract Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="bg" 
          className="w-full h-full object-cover opacity-[0.05] dark:opacity-[0.02]"
        />
      </div>

      {/* Background decorative blob spanning full width */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary-500/[0.03] dark:bg-primary-500/[0.01] rounded-[10rem] rotate-6 -z-10"></div>
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Academic Journey</h2>
          <div className="w-24 h-2 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            My educational background that laid the foundation for my career in software engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 dark:bg-slate-900/40 backdrop-blur-md p-10 rounded-[3rem] border-2 border-slate-100 dark:border-slate-800 hover:border-primary-500 transition-all duration-500 flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-3"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {edu.icon}
                </div>
                <div className="text-right">
                  <span className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{edu.period}</span>
                  <span className="inline-block mt-3 px-4 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-[10px] font-black uppercase rounded-lg tracking-wider">
                    {edu.status}
                  </span>
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-bold mb-6 italic text-base">
                  {edu.institution}, {edu.location}
                </p>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl mb-8 border border-slate-100 dark:border-slate-700/30 group-hover:bg-primary-50/30 dark:group-hover:bg-primary-900/10 transition-colors">
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {edu.highlight}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t-2 border-slate-50 dark:border-slate-800/50 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Overall Result</span>
                  <span className="text-3xl font-black text-slate-900 dark:text-white">{edu.result}</span>
                </div>
                <div className="w-14 h-14 rounded-full border-2 border-primary-100 dark:border-primary-900/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-50 transition-all duration-500">
                   <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block absolute top-[45%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800/50 to-transparent -z-20"></div>
      </div>
    </section>
  );
};

export default Education;
