import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
        <Link to="/" className="text-pink-600 font-bold mb-8 block">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        
        <div className="space-y-6 text-slate-700">
          <p>We'd love to hear from you! Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
          
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2">Email Us</h3>
            <p className="text-slate-600">resumekraft.contact@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
