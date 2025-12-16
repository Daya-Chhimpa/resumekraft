import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
        <Link to="/" className="text-pink-600 font-bold mb-8 block">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-slate-700">
          <section>
            <h2 className="text-xl font-bold mb-2 text-slate-900">1. Information We Collect</h2>
            <p>We do not collect personal information on our servers. All resume data is stored locally on your device via your browser's Local Storage.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2 text-slate-900">2. How We Use Information</h2>
            <p>Since we do not store your data, we do not use it for any purpose other than displaying it to you within the application.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-slate-900">3. Advertising</h2>
            <p>We use Google AdSense to serve ads. Google may use cookies to serve ads based on your prior visits to our website or other websites.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
