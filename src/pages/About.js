import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
        <Link to="/" className="text-pink-600 font-bold mb-8 block">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        
        <div className="space-y-6 text-slate-700">
          <p>ResumeKraft is a free, professional resume builder tool designed to help job seekers create stunning, ATS-friendly resumes in minutes.</p>
          <p>Our mission is to democratize access to high-quality career tools. We believe everyone deserves a great resume, regardless of their design skills or budget.</p>
          <p>This project is built with modern web technologies to ensure speed, privacy, and ease of use.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
