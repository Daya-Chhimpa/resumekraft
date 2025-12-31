import React, { useEffect } from 'react';

const GoogleAd = ({ slot, format = "auto", layout = "", style = {} }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error", e);
        }
    }, []);

    return (
        <div className="google-ad-container w-full flex justify-center my-4 overflow-hidden">
            <ins className="adsbygoogle"
                 style={{ display: 'block', minWidth: '250px', ...style }}
                 data-ad-client={process.env.REACT_APP_ADSENSE_CLIENT_ID || "ca-pub-3838982907014308"}
                 data-ad-slot={slot || "1234567890"}
                 data-ad-format={format}
                 data-full-width-responsive="true"
                 data-ad-layout={layout}
            ></ins>
        </div>
    );
};

export default GoogleAd;
