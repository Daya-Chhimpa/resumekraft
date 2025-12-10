import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import GoogleAd from './GoogleAd';

const AdModal = ({ isOpen, onComplete }) => {
  const [adStatus, setAdStatus] = useState('loading'); // loading, filled, failed

  useEffect(() => {
    if (!isOpen) return;
    setAdStatus('loading');

    // Failsafe: If verification takes too long (e.g. 5s), just let them pass
    const failsafeTimer = setTimeout(() => {
        if (adStatus === 'loading') {
            console.log("Ad timeout - skipping");
            onComplete();
        }
    }, 5000);

    return () => clearTimeout(failsafeTimer);
  }, [isOpen]); // Keep dependencies minimal

  const handleAdLoad = (isFilled) => {
      if (isFilled) {
          setAdStatus('filled');
      } else {
          setAdStatus('failed');
          onComplete(); // Auto-skip if Google says "unfilled"
      }
  };

  if (!isOpen || adStatus === 'failed') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
        
        {/* Loading Spinner (Minimal) */}
        {adStatus === 'loading' && (
             <div className="flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-10 h-10 animate-spin text-white" />
             </div>
        )}

        {/* Minimal Ad Container (Only shown when filled) */}
        <div className={`relative transition-opacity duration-300 ${adStatus === 'filled' ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Native-style Close Button */}
            <button 
                onClick={onComplete}
                className="absolute -top-10 right-0 text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                title="Close Ad"
            >
                <X className="w-6 h-6" />
            </button>

             <GoogleAd 
                slot="9876543210" 
                label="" // Removed "Sponsored" label inside to keep it clean, Google adds its own badge usually
                format="rectangle" 
                onAdLoaded={handleAdLoad}
             />
        </div>
    </div>
  );
};

export default AdModal;
