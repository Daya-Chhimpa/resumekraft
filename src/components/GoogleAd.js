import React, { useEffect, useRef } from 'react';

const GoogleAd = ({ slot = "1234567890", format = "auto", layout = "", label = "Sponsored", onAdLoaded }) => {
    const adRef = useRef(null);

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error", e);
        }

        // Smart Detection: Watch for Google's "data-ad-status" attribute
        if (onAdLoaded && adRef.current) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'data-ad-status') {
                        const status = mutation.target.getAttribute('data-ad-status');
                        if (status === 'filled') {
                            onAdLoaded(true);
                        } else if (status === 'unfilled') {
                            onAdLoaded(false);
                        }
                    }
                });
            });

            // Find the ins tag inside this component
            const insElement = adRef.current.querySelector('ins.adsbygoogle');
            if (insElement) {
                observer.observe(insElement, { attributes: true });
            }

            return () => observer.disconnect();
        }
    }, [slot, onAdLoaded]);

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-8" ref={adRef}>
            <div className="relative w-full bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                
                {/* Advertisement Label */}
                {label && (
                    <div className="absolute top-0 right-0 bg-slate-200 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-bl-lg z-10 uppercase tracking-widest">
                        {label}
                    </div>
                )}

                {/* Ad Container */}
                <div className={`flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm ${format === 'rectangle' ? 'min-h-[300px]' : 'min-h-[120px]'}`}>
                    {/* Placeholder for Development (Visual only, usually blocked by adblockers locally) */}
                    <div className="text-center w-full">
                         <ins className="adsbygoogle"
                             style={{ display: 'block', width: '100%', textAlign: 'center' }}
                             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with REAL Client ID
                             data-ad-slot={slot}
                             data-ad-format={format}
                             data-full-width-responsive="true"
                             data-ad-layout={layout}
                        ></ins>
                        
                        {/* Fallback Visual (optional, shows if ad fails or no ID provided) */}
                        <div className="hidden peer-empty:flex flex-col items-center justify-center text-slate-300 py-8">
                            <span className="font-bold text-sm tracking-widest">GOOGLE ADS SPACE</span>
                            <span className="text-xs">Responsive Ad Placement</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleAd;
