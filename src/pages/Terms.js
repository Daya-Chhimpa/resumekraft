import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
        <Link to="/" className="text-pink-600 font-bold mb-8 block">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-slate-700">
          <section>
            <h2 className="text-xl font-bold mb-2 text-slate-900">1. Acceptance of Terms</h2>
            <p>By accessing and using ResumeKraft, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2 text-slate-900">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on ResumeKraft's website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-slate-900">3. Disclaimer</h2>
            <p>The materials on ResumeKraft's website are provided on an 'as is' basis. ResumeKraft makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
