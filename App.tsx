import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Layout } from './components/layout/Layout';
import { ProductStudio } from './pages/ProductStudio';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { VirtualTryOn } from './pages/VirtualTryOn';
import { AdCreator } from './pages/AdCreator';
import { MergeProduct } from './pages/MergeProduct';
import { LifestylePhotoshoot } from './pages/LifestylePhotoshoot';
import { DigitalImaging } from './pages/DigitalImaging';
import { PovStudio } from './pages/PovStudio';
import { MirrorSelfie } from './pages/MirrorSelfie';
import { ListingStudio } from './pages/ListingStudio';
import { PerspectiveStudio } from './pages/PerspectiveStudio';
import { BackgroundChanger } from './pages/BackgroundChanger';
import { VideoStudio as VideoStudioPage } from './pages/VideoStudio';
import MagicBRoll from './pages/MagicBRoll';
import MagicEditor from './pages/MagicEditor';
import MagicCarousel from './pages/MagicCarousel';
import MagicFashion from './pages/MagicFashion';
import MagicFusion from './pages/MagicFusion';
import MagicModel from './pages/MagicModel';
import MagicPose from './pages/MagicPose';
import MagicRestore from './pages/MagicRestore';
import MagicStoryboard from './pages/MagicStoryboard';
import MagicVideoGenerator from './pages/MagicVideoGenerator';
import MagicVoiceStudio from './pages/MagicVoiceStudio';
import { MockupGenerator } from './pages/MockupGenerator';
import { MagicPhotoshoot } from './pages/MagicPhotoshoot';
import AgreementModal from './components/AgreementModal';

export type View = 'productStudio' | 'virtualTryOn' | 'lifestylePhotoshoot' | 'mergeProduct' | 'digitalImaging' | 'adCreator' | 'povStudio' | 'mirrorStudio' | 'listingStudio' | 'perspectiveStudio' | 'backgroundChanger' | 'videoStudio' | 'magicBRoll' | 'magicGenEditor' | 'magicCarousel' | 'magicFashion' | 'magicFusion' | 'magicModel' | 'magicPose' | 'magicRestore' | 'magicStoryboard' | 'magicVideo' | 'magicVoice' | 'mockupGenerator' | 'magicPhotoshoot';

function AppContent() {
  const { t } = useLanguage();
  const [activeView, setActiveView] = useState<View>('virtualTryOn');
  
  // State untuk melacak view mana saja yang sudah pernah dibuka (lazy load)
  const [visitedViews, setVisitedViews] = useState<Set<View>>(new Set(['virtualTryOn']));

  const handleNavigate = (view: View) => {
    // Tandai view sebagai dikunjungi agar komponennya di-mount (jika belum)
    setVisitedViews(prev => {
      const next = new Set(prev);
      next.add(view);
      return next;
    });
    setActiveView(view);
  };

  // Fungsi helper untuk merender komponen berdasarkan ID
  const renderViewComponent = (viewId: View) => {
    switch (viewId) {
      case 'productStudio': return <ProductStudio onNavigate={handleNavigate} />;
      case 'virtualTryOn': return <VirtualTryOn />;
      case 'lifestylePhotoshoot': return <LifestylePhotoshoot />;
      case 'mergeProduct': return <MergeProduct />;
      case 'digitalImaging': return <DigitalImaging />;
      case 'adCreator': return <AdCreator />;
      case 'magicGenEditor': return <MagicEditor />;
      case 'videoStudio': return <VideoStudioPage />;
      case 'povStudio': return <PovStudio />;
      case 'mirrorStudio': return <MirrorSelfie />;
      case 'listingStudio': return <ListingStudio />;
      case 'perspectiveStudio': return <PerspectiveStudio />;
      case 'backgroundChanger': return <BackgroundChanger />;
      case 'magicBRoll': return <MagicBRoll onNavigate={handleNavigate} />;
      case 'magicCarousel': return <MagicCarousel />;
      case 'magicFashion': return <MagicFashion />;
      case 'magicFusion': return <MagicFusion />;
      case 'magicModel': return <MagicModel />;
      case 'magicPose': return <MagicPose />;
      case 'magicRestore': return <MagicRestore />;
      case 'magicStoryboard': return <MagicStoryboard />;
      case 'magicVideo': return <MagicVideoGenerator />;
      case 'mockupGenerator': return <MockupGenerator />;
      case 'magicPhotoshoot': return <MagicPhotoshoot />;
      case 'magicVoice': return <MagicVoiceStudio />;
      default: return null;
    }
  };

  // Daftar semua kemungkinan view agar kita bisa membuat containernya
  const allViews: View[] = [
    'productStudio', 'virtualTryOn', 'lifestylePhotoshoot', 'mergeProduct', 
    'digitalImaging', 'adCreator', 'povStudio', 'mirrorStudio', 
    'listingStudio', 'perspectiveStudio', 'backgroundChanger', 'videoStudio', 
    'magicBRoll', 'magicGenEditor', 'magicCarousel', 'magicFashion', 
    'magicFusion', 'magicModel', 'magicPose', 'magicRestore', 
    'magicStoryboard', 'magicVideo', 'magicVoice', 'mockupGenerator', 'magicPhotoshoot'
  ];

  return (
    <Layout activeView={activeView} setActiveView={handleNavigate}>
      <div className="relative w-full h-full">
        {allViews.map((viewId) => {
          // Hanya render komponen jika sudah pernah dikunjungi (lazy load)
          // Gunakan CSS 'hidden' untuk menyembunyikan yang tidak aktif agar state terjaga
          const isVisited = visitedViews.has(viewId);
          if (!isVisited) return null;

          return (
            <div 
              key={viewId} 
              className={activeView === viewId ? 'block animate-fade-in' : 'hidden'}
            >
              {renderViewComponent(viewId)}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

function App() {
  const [hasAgreed, setHasAgreed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('agreement_v1') === 'true';
    }
    return false;
  });

  const handleAgree = () => {
    localStorage.setItem('agreement_v1', 'true');
    setHasAgreed(true);
  };

  return (
    <LanguageProvider>
      {!hasAgreed && <AgreementModal onAgree={handleAgree} />}
      <div className={`transition-all duration-500 ${!hasAgreed ? 'filter blur-md pointer-events-none h-screen overflow-hidden opacity-50' : 'opacity-100'}`}>
        <AppContent />
      </div>
    </LanguageProvider>
  );
}

export default App;