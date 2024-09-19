import React, { useEffect, useState } from 'react';
import 'animate.css';

export default function Drawer({ title, content, open, onClose, direction = 'right' }) {
  const [isVisible, setIsVisible] = useState(false);

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
    <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-80`}>
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
