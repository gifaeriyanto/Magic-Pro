import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icons defined locally for this component ---
const ShieldCheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);
const WarningIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
  </svg>
);

interface AgreementModalProps {
  onAgree: () => void;
}

const AgreementModal: React.FC<AgreementModalProps> = ({ onAgree }) => {
  const [canAgree, setCanAgree] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (canAgree) return;
    const content = contentRef.current;
    if (content) {
      // Tolerance of 20px
      const isScrolledToBottom = content.scrollHeight - content.scrollTop <= content.clientHeight + 20;
      if (isScrolledToBottom) {
        setCanAgree(true);
      }
    }
  };

  useEffect(() => {
    const checkScrollNeeded = () => {
        const content = contentRef.current;
        if (content && (content.scrollHeight <= content.clientHeight)) {
            setCanAgree(true);
        }
    };
    const timeoutId = setTimeout(checkScrollNeeded, 150);
    window.addEventListener('resize', checkScrollNeeded);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkScrollNeeded);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 animate-fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="bg-white dark:bg-gray-900 w-full max-w-xl max-h-[85vh] rounded-[2rem] flex flex-col overflow-hidden shadow-2xl border border-white/20 dark:border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable Content */}
        <div 
            ref={contentRef}
            onScroll={handleScroll}
            className="overflow-y-auto flex-grow custom-scrollbar"
        >
            <div className="p-8 space-y-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-5 shadow-sm transform rotate-3">
                        <ShieldCheckIcon className="w-8 h-8"/>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Selamat Datang!</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm md:text-base font-medium">Satu langkah lagi sebelum Anda mulai berkreasi.</p>
                </div>

                {/* Key Points */}
                <div className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/5">
                    <h3 className="font-bold text-slate-800 dark:text-white mb-3 text-sm uppercase tracking-wide">
                        Poin Penting:
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                            <span>Aplikasi ini adalah <strong>milik GrowWithDedy</strong>.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                            <span><strong>Dilarang keras</strong> menyalin, menjual, atau menyebarkan ulang.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                            <span>Gunakan aplikasi secara <strong>bijak dan bertanggung jawab</strong>.</span>
                        </li>
                    </ul>
                </div>

                {/* Main Terms */}
                <div className="text-slate-600 dark:text-slate-300 space-y-6 text-sm leading-relaxed">
                    <p>Dengan mengakses atau menggunakan aplikasi ini ("Perangkat Lunak"), Anda setuju untuk terikat oleh syarat dan ketentuan di bawah ini. Perangkat Lunak ini dikembangkan dan dimiliki sepenuhnya oleh <strong>GrowWithDedy</strong>.</p>
                    
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">1. Kepemilikan Intelektual</h3>
                            <p className="text-xs md:text-sm">Seluruh hak kekayaan intelektual atas Perangkat Lunak ini—termasuk konsep, desain, kode, dan alur kerja—adalah milik eksklusif <strong>GrowWithDedy</strong>. Lisensi ini tidak memberikan hak kepemilikan apa pun kepada pengguna.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">2. Batasan & Larangan Keras</h3>
                            <p className="text-xs md:text-sm">Anda dilarang keras untuk menyalin, menduplikasi, mereproduksi, menjual kembali, menyewakan, atau mendistribusikan ulang aplikasi ini tanpa izin tertulis dari <strong>GrowWithDedy</strong>.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">3. Persetujuan Anda</h3>
                            <p className="text-xs md:text-sm">Dengan melanjutkan penggunaan aplikasi, Anda mengonfirmasi bahwa Anda telah membaca, memahami, dan menyetujui seluruh isi perjanjian lisensi ini.</p>
                        </div>
                    </div>
                </div>

                {/* Stern Warning */}
                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl flex items-start gap-3 border border-red-100 dark:border-red-900/30">
                    <WarningIcon className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-bold text-red-800 dark:text-red-300 text-xs uppercase tracking-wider">Peringatan Keras</h3>
                        <p className="text-red-700 dark:text-red-400 text-xs mt-1 leading-relaxed">Penyebaran, penjualan ulang, atau kloning aplikasi ini tanpa izin adalah pelanggaran hukum dan akan ditindaklanjuti.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-white/10 text-center flex-shrink-0 bg-white dark:bg-gray-900/50 backdrop-blur-md">
            <button
                onClick={onAgree}
                disabled={!canAgree}
                className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transform active:scale-[0.98]"
            >
                Saya Mengerti dan Setuju
            </button>
            <AnimatePresence>
            {!canAgree && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center justify-center gap-2 mt-3 text-slate-400 dark:text-slate-500 text-xs font-medium"
                >
                    <svg className="w-3 h-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    <span>Gulir ke bawah untuk menyetujui</span>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default AgreementModal;