import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Are you sure?", 
  message = "This action cannot be undone.", 
  confirmText = "Confirm", 
  cancelText = "Cancel",
  isDestructive = false 
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${isDestructive ? 'bg-red-50 text-red-500' : 'bg-pink-50 text-pink-500'}`}>
                <AlertTriangle className="w-8 h-8" />
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">{message}</p>

              {/* Actions */}
              <div className="flex gap-4 w-full">
                <button 
                  onClick={onClose}
                  className="flex-1 py-3 px-6 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  {cancelText}
                </button>
                <button 
                  onClick={onConfirm}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${
                    isDestructive 
                      ? 'bg-gradient-to-r from-red-500 to-rose-600 hover:shadow-red-500/30' 
                      : 'bg-gradient-to-r from-pink-500 to-orange-500 hover:shadow-pink-500/30'
                  }`}
                >
                  {confirmText}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ConfirmationModal;
