
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    subject: '',
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '',
        subject: '',
        message: '' 
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative section-padding scroll-mt-20 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* Abstract Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2000" 
          alt="bg" 
          className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.02]"
        />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Let's Connect</h2>
          <div className="w-20 h-2 bg-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Currently open for internship completion and junior full-stack developer roles. Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
             <div className="p-8 bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl border-2 border-slate-100 dark:border-slate-800 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 flex items-center justify-center text-2xl shadow-inner">
                   📧
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Email Me</p>
                  <a href="mailto:ak7714832@gmail.com" className="text-slate-900 dark:text-white text-lg font-bold hover:text-primary-600 transition-colors">ak7714832@gmail.com</a>
                </div>
             </div>

             <div className="p-8 bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl border-2 border-slate-100 dark:border-slate-800 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 flex items-center justify-center text-2xl shadow-inner">
                   📱
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Call Me</p>
                  <a href="tel:7452025601" className="text-slate-900 dark:text-white text-lg font-bold hover:text-primary-600 transition-colors">+91 7452025601</a>
                </div>
             </div>

             <div className="p-8 bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl border-2 border-slate-100 dark:border-slate-800 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 flex items-center justify-center text-2xl shadow-inner">
                   📍
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-slate-900 dark:text-white text-lg font-bold">Noida, Uttar Pradesh</p>
                </div>
             </div>
          </div>

          {/* Message Form */}
          <div className="lg:col-span-2 bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-12 rounded-[3rem] border-2 border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
            {submitted && (
              <div className="absolute inset-0 z-10 bg-white/95 dark:bg-slate-950/95 flex flex-col items-center justify-center space-y-6 animate-in fade-in zoom-in duration-500 px-8 text-center">
                 <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-4xl shadow-lg animate-bounce">✓</div>
                 <h3 className="text-3xl font-black text-slate-900 dark:text-white">Message Sent Successfully!</h3>
                 <p className="text-slate-500 dark:text-slate-400 text-lg">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                 <button onClick={() => setSubmitted(false)} className="px-8 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20">Send another message</button>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-20">
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Full Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Abhishek Kumar" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border-2 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-950 text-slate-900 dark:text-white outline-none transition-all duration-300 shadow-inner" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Email Address <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@mail.com" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border-2 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-950 text-slate-900 dark:text-white outline-none transition-all duration-300 shadow-inner" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border-2 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-950 text-slate-900 dark:text-white outline-none transition-all duration-300 shadow-inner" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry for Hire" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border-2 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-950 text-slate-900 dark:text-white outline-none transition-all duration-300 shadow-inner" 
                />
              </div>
              <div className="sm:col-span-2 space-y-3">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Message <span className="text-red-500">*</span></label>
                <textarea 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me more about your project..." 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border-2 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-950 text-slate-900 dark:text-white outline-none resize-none transition-all duration-300 shadow-inner"
                ></textarea>
              </div>
              <div className="sm:col-span-2 pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-12 py-5 ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'} text-white font-black uppercase tracking-[0.1em] rounded-2xl shadow-xl shadow-primary-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
