import React, { useEffect, useState } from 'react';
import 'animate.css';

export default function offCanvas({ title, content, open, onClose, direction = 'right' }) {
  const [fade, setFade] = useState('animate__animated animate__fadeIn');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      setFade('animate__animated animate__fadeIn');
    } else {
      setFade('animate__animated animate__fadeOut');
      const timer = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!isVisible) return null;

  const drawerPosition = () => {
    switch (direction) {
      case 'top':
        return 'top-0 left-0 w-full h-[300px]';
      case 'right':
        return 'top-0 right-0 h-full w-[400px]';
      case 'bottom':
        return 'bottom-0 left-0 w-full h-[300px]';
      case 'left':
        return 'top-0 left-0 h-full w-[400px]';
      default:
        return 'top-0 right-0 h-full w-[400px]'; 
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-80 ${fade}`}>
      <div className={`bg-white fixed ${drawerPosition()} overflow-auto`}>
        <div className="p-6 flex justify-between items-center border-b border-gray-300">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <button onClick={onClose}>
            <i className="ri-close-circle-fill text-xl"></i>
          </button>
        </div>
        <div className="p-4">
          {content}
        </div>
      </div>
    </div>
  );
}
