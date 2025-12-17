import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

const QuickTour = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Check if user has seen the tour
    const hasSeenTour = localStorage.getItem('hasSeenDesignTour');
    if (!hasSeenTour) {
      // Show tour after a short delay
      setTimeout(() => setIsOpen(true), 1000);
    }
  }, []);

  const steps = [
    {
      title: '🎨 Welcome to Design Customization!',
      description: 'Personalize your resume with colors, fonts, and layout options. Let\'s take a quick tour!',
      highlight: 'Get started in just 3 steps'
    },
    {
      title: '🎯 Choose Color Themes',
      description: 'Click on any preset theme to instantly change your resume colors, or customize individual colors.',
      highlight: '6 beautiful presets available'
    },
    {
      title: '📐 Customize Layout',
      description: 'Switch sidebar position, drag sections to reorder them, and toggle visibility with the eye icon.',
      highlight: 'NEW! Full layout control'
    },
    {
      title: '✨ Live Preview',
      description: 'All changes apply instantly! Watch your resume transform in real-time as you customize.',
      highlight: 'No save button needed'
    }
  ];

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenDesignTour', 'true');
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  const step = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative">
            <Sparkles className="w-8 h-8 mb-2" />
            <h2 className="text-2xl font-bold mb-1">{step.title}</h2>
            <p className="text-white/90 text-sm">{step.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 text-purple-700">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold">{step.highlight}</span>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentStep
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            {currentStep > 0 && (
              <button
                onClick={handlePrev}
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Skip Button */}
          <button
            onClick={handleClose}
            className="w-full mt-3 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            Skip tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTour;
