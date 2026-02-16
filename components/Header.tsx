
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { MenuIcon } from './icons/MenuIcon';
import { AppLogoIcon } from './icons/AppLogoIcon';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      {/* Increased opacity from /80 to /90 for better contrast on light backgrounds */}
      <div className="max-w-[1380px] mx-auto bg-gradient-to-r from-indigo-950/90 via-slate-950/90 to-indigo-950/90 backdrop-blur-2xl border border-indigo-500/20 rounded-2xl shadow-[0_20px_50px_-12px_rgba(79,70,229,0.3)] ring-1 ring-white/10 transition-all duration-300">
        <div className="relative flex items-center h-16 px-4 sm:px-6">
          
          {/* Mobile Menu Button - Left Aligned */}
          <div className="flex-shrink-0 md:hidden z-20">
             <button
              onClick={onMenuClick}
              className="p-2 -ml-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
          
          {/* Logo - Centered on Mobile (Absolute), Left on Desktop (Static/Flex) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:left-auto md:top-auto md:flex-1 md:flex md:justify-start">
            <div className="flex items-center gap-3 group cursor-pointer select-none">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
                <AppLogoIcon className="w-6 h-6 text-white" />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20"></div>
              </div>
              <div className="flex flex-col">
                {/* Changed text-slate-100 to text-white and added drop-shadow-sm for sharpness */}
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none whitespace-nowrap drop-shadow-sm">
                  Magic Photo <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Studio</span>
                </span>
                {/* Improved contrast for subtitle */}
                <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase mt-0.5 hidden sm:block">
                  AI Product Photography
                </span>
              </div>
            </div>
          </div>

          {/* Right Actions - Right Aligned */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto z-20">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 hover:shadow-sm border border-transparent hover:border-white/10 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
