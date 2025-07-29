import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="glass-card p-4 rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-medium">{message}</span>
          <button
            onClick={onClose}
            className="p-1 hover:bg-green-500/20 rounded transition-colors"
          >
            <X className="w-4 h-4 text-green-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;