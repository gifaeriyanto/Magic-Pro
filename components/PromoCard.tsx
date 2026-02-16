
import React from 'react';

export const PromoCard: React.FC = () => {
  return (
    <div className="mt-12 p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-xl transform transition-all hover:scale-[1.01]">
      <div className="bg-white dark:bg-gray-900 rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
            Ingin Hasil Lebih Dahsyat? 🚀
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            Jelajahi koleksi <strong>Premium AI Tools</strong> kami lainnya. Dapatkan akses ke fitur eksklusif, template pro, dan teknologi terbaru untuk melejitkan bisnis dan konten Anda ke level berikutnya!
          </p>
        </div>
        
        <div className="relative z-10 flex-shrink-0">
            <a
              href="https://lynk.id/growwithdedy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-base font-bold rounded-2xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 group"
            >
              <span>Lihat Tools Lainnya</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 text-center font-medium uppercase tracking-wider">
                Dipercaya oleh 10.000+ Kreator
            </p>
        </div>
      </div>
    </div>
  );
};
