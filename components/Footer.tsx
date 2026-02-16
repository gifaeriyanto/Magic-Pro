
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { InstagramIcon } from './icons/InstagramIcon';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full mt-12 border-t border-indigo-500/20 bg-gradient-to-r from-indigo-950/90 via-slate-950/90 to-indigo-950/90 backdrop-blur-xl shadow-[0_-10px_40px_-20px_rgba(79,70,229,0.2)] relative z-30">
      <div className="max-w-[1600px] mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright & Branding */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-sm font-medium text-slate-400">
                &copy; {new Date().getFullYear()} Magic Photo <span className="font-extrabold text-indigo-200">Studio</span>
            </p>
        </div>

        {/* Right Side: Credits & Socials */}
        <div className="flex items-center gap-6">
           <div className="text-sm text-slate-300 flex items-center gap-1 font-medium">
              <span className="opacity-80">{t('footer.createdBy')}</span>
              <a 
                href="https://www.instagram.com/growwithdedy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-white hover:text-indigo-400 transition-colors tracking-wide"
              >
                @growwithdedy
              </a>
           </div>
           
           <a 
             href="https://www.instagram.com/growwithdedy" 
             target="_blank" 
             rel="noopener noreferrer"
             className="group p-2 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/20 transition-all shadow-sm"
             aria-label="Instagram"
           >
             <InstagramIcon className="w-4 h-4 text-slate-300 group-hover:text-indigo-300 transition-colors" />
           </a>
        </div>
      </div>
    </footer>
  );
};
