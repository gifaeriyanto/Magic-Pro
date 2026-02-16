import React from 'react';

interface StepHeaderProps {
  step: number | string;
  title: string;
  description?: string;
}

export const StepHeader: React.FC<StepHeaderProps> = ({ step, title, description }) => {
  // Remove "1. ", "2. ", etc from the start of the title if present
  const cleanTitle = title.replace(/^\d+\.\s*/, '');

  return (
    <div className="flex items-center gap-4 mb-6">
      {/* Badge */}
      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md shadow-indigo-500/20 ring-1 ring-white/20">
         {step}
      </div>
      
      {/* Text Container */}
      <div>
         <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {cleanTitle}
         </h2>
         {description && (
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                {description}
            </p>
         )}
      </div>
    </div>
  );
};