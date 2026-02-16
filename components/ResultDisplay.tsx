
import React, { useState } from 'react';
import { Spinner } from './Spinner';
import { DownloadIcon } from './icons/DownloadIcon';
import { ZoomIcon } from './icons/ZoomIcon';
import { ZoomModal } from './ZoomModal';
import { useLanguage } from '../contexts/LanguageContext';
import { InfoIcon } from './icons/InfoIcon';

interface ResultDisplayProps {
  originalImage: string | null;
  generatedImages: string[] | null;
  selectedImage: string | null;
  isLoading: boolean;
  error: string | null;
  onDownload: () => void;
  onReset: () => void;
  onSelectImage: (imageUrl: string) => void;
  loadingTitleKey?: string;
  resultTitleKey?: string;
  resultDescriptionKey?: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  originalImage,
  generatedImages,
  selectedImage,
  isLoading,
  error,
  onDownload,
  onReset,
  onSelectImage,
  loadingTitleKey = 'results.loading.title',
  resultTitleKey = 'results.title',
  resultDescriptionKey = 'results.description',
}) => {
  const { t } = useLanguage();
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center text-center h-full p-8">
          <div className="relative mb-8">
             <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-2xl animate-pulse-slow"></div>
             <div className="relative bg-white dark:bg-gray-800 rounded-full p-4 shadow-xl">
                <Spinner className="h-10 w-10 text-indigo-600" />
             </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 animate-pulse">{t(loadingTitleKey)}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">{t('results.loading.subtitle')}</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center text-center h-full p-8">
          <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-red-100 dark:border-red-900/30">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('results.error.title')}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30 max-w-sm leading-relaxed">{error}</p>
          <button
            onClick={onReset}
            className="px-6 py-2.5 bg-white dark:bg-gray-800 text-slate-700 dark:text-white border border-slate-200 dark:border-gray-600 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-700 transition-all font-semibold shadow-sm hover:shadow-md"
          >
            {t('results.error.button')}
          </button>
        </div>
      );
    }

    if (!generatedImages || generatedImages.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center text-center h-full text-slate-400 dark:text-slate-500 p-8">
           <div className="w-20 h-20 bg-slate-50 dark:bg-white/5 rounded-3xl flex items-center justify-center mb-4 border border-dashed border-slate-200 dark:border-white/10 rotate-3 transition-transform hover:rotate-6">
              <svg className="w-8 h-8 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
           </div>
          <p className="text-sm font-bold opacity-70 tracking-wide">{t('results.placeholder')}</p>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full group">
        {/* Main selected image */}
        <div 
          className="w-full h-full cursor-zoom-in flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIi8+CjxwYXRoIGQ9IkQwIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZWVlIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] overflow-hidden"
          onClick={() => setIsZoomModalOpen(true)}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt={t('results.imageAlt')}
              className="max-w-full max-h-full object-contain shadow-sm"
            />
          )}
        </div>

         {/* Floating Controls (Zoom Icon) */}
         <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black/50 backdrop-blur-md p-2 rounded-full text-white">
                <ZoomIcon className="w-5 h-5" />
            </div>
         </div>

        {/* Floating Thumbnails Bar */}
        {generatedImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 max-w-[90%]">
                <div className="flex gap-2 p-2 bg-white/40 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg overflow-x-auto custom-scrollbar">
                {generatedImages.map((img, index) => (
                    <button
                    key={index}
                    onClick={(e) => {
                        e.stopPropagation(); 
                        onSelectImage(img);
                    }}
                    className={`relative w-12 h-12 rounded-lg cursor-pointer overflow-hidden transition-all duration-200 flex-shrink-0 border
                        ${selectedImage === img 
                            ? 'border-indigo-500 ring-2 ring-indigo-500/30 opacity-100 scale-105' 
                            : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'}`}
                    >
                    <img
                        src={img}
                        alt={`${t('results.variantLabel')} ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    </button>
                ))}
                </div>
            </div>
        )}
      </div>
    );
  };

  const stepNumber = resultTitleKey.includes('Editor') ? '4' : '3';

  return (
    <>
      <div className="flex flex-col h-fit sticky top-24">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl p-5 rounded-[2rem] border border-white/40 dark:border-white/5 flex flex-col shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-4 mb-5">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-full flex items-center justify-center font-bold text-slate-500 dark:text-slate-300 text-sm border border-slate-200 dark:border-white/10 shadow-sm">
                    {stepNumber}
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t(resultTitleKey).substring(3)}</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t(resultDescriptionKey)}</p>
                </div>
            </div>

            {/* Main Display Area - Fixed Height for Compactness */}
            <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/5 bg-white/50 dark:bg-black/20 shadow-inner backdrop-blur-sm relative group">
                {renderContent()}
            </div>

            {/* Action Buttons - Horizontal Layout */}
            {(generatedImages && generatedImages.length > 0) && !isLoading && !error && (
                <div className="flex items-center gap-3 mt-5 animate-slide-up">
                    <button
                        onClick={onDownload}
                        disabled={!selectedImage}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                        <DownloadIcon className="w-4 h-4" />
                        {t('results.downloadButton')}
                    </button>
                    <button
                        onClick={onReset}
                        className="px-6 py-3 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all"
                    >
                        {t('results.resetButton')}
                    </button>
                </div>
            )}

            {isLoading && (
                <div className="mt-4 text-center animate-fade-in">
                    <div className="inline-flex items-center text-left justify-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 px-4 py-2 bg-amber-50/80 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 rounded-lg backdrop-blur-sm">
                        <InfoIcon className="w-4 h-4 flex-shrink-0" />
                        <span>{t('notes.navigationWarning')}</span>
                    </div>
                </div>
            )}
        </div>
      </div>
      <ZoomModal 
        isOpen={isZoomModalOpen}
        onClose={() => setIsZoomModalOpen(false)}
        imageUrl={selectedImage || ''}
      />
    </>
  );
};
