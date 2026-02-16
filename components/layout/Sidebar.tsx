import React, { useState } from 'react';
import type { View } from '../../App';
import { PhotoStudioIcon } from '../icons/PhotoStudioIcon';
import { TryOnIcon } from '../icons/TryOnIcon';
import { AdCreatorIcon } from '../icons/AdCreatorIcon';
import { useLanguage } from '../../contexts/LanguageContext';
import { MergeProductIcon } from '../icons/MergeProductIcon';
import { LifestylePhotoshootIcon } from '../icons/LifestylePhotoshootIcon';
import { PovStudioIcon } from '../icons/PovStudioIcon';
import { ListingIcon } from '../icons/ListingIcon';
import { BackgroundChangerIcon } from '../icons/BackgroundChangerIcon';
import { BRollIcon } from '../icons/BRollIcon';
import { SparklesIcon } from '../icons/SparklesIcon';
import { CarouselIcon } from '../icons/CarouselIcon';
import { FashionIcon } from '../icons/FashionIcon';
import { FusionIcon } from '../icons/FusionIcon';
import { ModelIcon } from '../icons/ModelIcon';
import { PoseIcon } from '../icons/PoseIcon';
import { RestoreIcon } from '../icons/RestoreIcon';
import { FilmIcon } from '../icons/FilmIcon';
import { MagicVideoIcon } from '../icons/MagicVideoIcon';
import { VoiceIcon } from '../icons/VoiceIcon';
import { MockupIcon } from '../icons/MockupIcon';
import { MagicPhotoshootIcon } from '../icons/MagicPhotoshootIcon';
import { LicenseModal } from '../LicenseModal';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  isDisabled?: boolean;
  isNew?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick, isDisabled, isNew }) => {
  const baseClasses = "group flex items-center w-full px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-xl mb-1 relative overflow-hidden";
  const activeClasses = "bg-white/80 dark:bg-white/10 text-indigo-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm";
  const inactiveClasses = "text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-200";
  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${isDisabled ? disabledClasses : ''}`}
    >
      <span className={`mr-3 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { 
          className: `w-5 h-5 transition-colors duration-300 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'}`
        })}
      </span>
      <span className="tracking-wide truncate mr-2">{label}</span>
      
      {isNew && (
        <span className="px-1.5 py-0.5 text-[9px] font-black text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded shadow-sm">
          NEW
        </span>
      )}

      {isActive && (
        <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-indigo-50 shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]"></div>
      )}
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, isMobileOpen, onMobileClose }) => {
    const { t } = useLanguage();
    const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
    
    const menuGroups = [
      {
        title: "AI PRODUCT PHOTOGRAPHY",
        items: [
          { id: 'virtualTryOn', label: t('sidebar.virtualTryOn'), icon: <TryOnIcon /> },
          { id: 'productStudio', label: t('sidebar.productStudio'), icon: <PhotoStudioIcon /> },
          { id: 'magicPhotoshoot', label: t('sidebar.magicPhotoshoot'), icon: <MagicPhotoshootIcon />, isNew: true },
          { id: 'mockupGenerator', label: t('sidebar.mockupGenerator'), icon: <MockupIcon />, isNew: true },
          { id: 'magicModel', label: t('sidebar.magicModel'), icon: <ModelIcon /> },
          { id: 'magicFashion', label: t('sidebar.magicFashion'), icon: <FashionIcon /> },
          { id: 'magicBRoll', label: t('sidebar.magicBRoll'), icon: <BRollIcon /> },
          { id: 'povStudio', label: t('sidebar.povStudio'), icon: <PovStudioIcon />, isNew: true },
          { id: 'lifestylePhotoshoot', label: t('sidebar.lifestylePhotoshoot'), icon: <LifestylePhotoshootIcon />, isNew: true },
        ]
      },
      {
        title: "PHOTO EDITOR",
        items: [
          { id: 'magicPose', label: t('sidebar.magicPose'), icon: <PoseIcon /> },
          { id: 'magicGenEditor', label: t('sidebar.magicGenEditor'), icon: <SparklesIcon /> },
          { id: 'magicRestore', label: t('sidebar.magicRestore'), icon: <RestoreIcon /> },
          { id: 'magicFusion', label: t('sidebar.magicFusion'), icon: <FusionIcon /> },
          { id: 'mergeProduct', label: t('sidebar.mergeProduct'), icon: <MergeProductIcon /> },
          { id: 'backgroundChanger', label: t('sidebar.backgroundChanger'), icon: <BackgroundChangerIcon />, isNew: true },
        ]
      },
      {
        title: "CATALOG & MARKETING",
        items: [
          { id: 'magicCarousel', label: t('sidebar.magicCarousel'), icon: <CarouselIcon /> },
          { id: 'adCreator', label: t('sidebar.adCreator'), icon: <AdCreatorIcon /> },
          { id: 'listingStudio_marketing', targetView: 'listingStudio', label: t('sidebar.listingStudio'), icon: <ListingIcon />, isNew: true },
        ]
      },
      {
        title: "CREATIVE SUITE",
        items: [
          { id: 'magicVideo', label: t('sidebar.magicVideo'), icon: <MagicVideoIcon /> },
          { id: 'magicStoryboard', label: t('sidebar.magicStoryboard'), icon: <FilmIcon /> },
          { id: 'magicVoice', label: t('sidebar.magicVoice'), icon: <VoiceIcon /> },
        ]
      }
    ];

    const handleNavItemClick = (view: View) => {
        setActiveView(view);
        onMobileClose();
    };

    return (
        <aside className={`
            fixed top-0 left-0 z-50 h-full w-[280px] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            md:sticky md:top-24 md:h-[calc(100vh-7rem)] md:w-64 md:z-30 md:translate-x-0
            ${isMobileOpen ? 'translate-x-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200 dark:border-700' : '-translate-x-full md:bg-transparent'}
        `}>
            <div className="h-full flex flex-col bg-white/60 dark:bg-gray-900/30 md:bg-transparent backdrop-blur-xl md:backdrop-blur-0 shadow-2xl md:shadow-none">
                {isMobileOpen && (
                    <div className="flex items-center justify-between p-4 mb-2 md:hidden">
                         <span className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
                            Magic Photo <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Studio</span>
                        </span>
                        <button onClick={onMobileClose} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                )}

                <nav className="flex-1 overflow-y-auto custom-scrollbar pb-2 md:bg-white/60 md:dark:bg-gray-900/50 md:backdrop-blur-2xl md:border md:border-b-0 md:border-white/60 md:dark:border-white/5 md:rounded-t-2xl md:shadow-sm transition-all duration-300">
                    <div className="p-3 space-y-6">
                        {menuGroups.map((group, groupIndex) => (
                            <div key={groupIndex}>
                                <div className="px-3 py-2 mb-1">
                                    <h3 className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{group.title}</h3>
                                </div>
                                <ul className="space-y-0.5">
                                    {group.items.map((item) => {
                                        const viewId = (item.targetView || item.id) as View;
                                        return (
                                            <li key={item.id}>
                                                <NavItem
                                                    icon={item.icon}
                                                    label={item.label}
                                                    isActive={activeView === viewId}
                                                    onClick={() => handleNavItemClick(viewId)}
                                                    isNew={item.isNew}
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </nav>
                
                <div className="p-4 mt-auto md:bg-white/60 md:dark:bg-gray-900/50 md:backdrop-blur-2xl md:border-x md:border-b md:border-white/60 md:dark:border-white/5 md:rounded-b-2xl border-t md:border-t-0 border-gray-100 dark:border-white/5 relative z-20">
                    <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 rounded-2xl border border-white/60 dark:border-white/10 shadow-sm backdrop-blur-md overflow-hidden group">
                        <div className="p-4 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                                    App Version
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">v6.20</span>
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-indigo-600 text-white border border-indigo-500/50">
                                        PRO
                                    </span>
                                </div>
                                <p className="text-[9px] font-medium text-slate-400 dark:text-slate-500 mt-1 italic tracking-tight">
                                    last update 10 januari 2026
                                </p>
                            </div>

                            <button
                                onClick={() => setIsLicenseModalOpen(true)}
                                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/80 dark:bg-white/10 border border-200 dark:border-white/10 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-500/50 shadow-sm transition-all duration-200 group-hover:shadow-md active:scale-95"
                                aria-label="License & Info"
                                title="License & Info"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <LicenseModal isOpen={isLicenseModalOpen} onClose={() => setIsLicenseModalOpen(false)} />
        </aside>
    );
}