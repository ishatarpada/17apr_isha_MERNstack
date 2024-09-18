import { useState, useRef } from 'react';
import 'remixicon/fonts/remixicon.css';

export default function ColorGen() {
  const [color, setColor] = useState('#ffffff');
  const [copied, setCopied] = useState(false);
  const colorRef = useRef(null);

  // Valid hex pattern (0-9, A-F)
  const generateRandomColor = () => {
    const pattern = "0123456789ABCDEF";
    let generatedColor = '#';
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * pattern.length);
      generatedColor += pattern[index];
    }
    setColor(generatedColor);
  };

  const copyColorCode = () => {
    if (colorRef.current) {
      navigator.clipboard.writeText(colorRef.current.textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-8 min-w-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-white text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Color Generator</h2>
        <div
          className="w-full h-48 mb-4 rounded flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <span
            ref={colorRef}
            className="block text-black text-xl mt-4 text-center"
          >
            {color}
          </span>
        </div>
        <button
          onClick={generateRandomColor}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded mb-4"
        >
          Generate Color
        </button>
        <button
          onClick={copyColorCode}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded"
        >
          {copied ? (
            <i className="ri-check-double-line text-lg"></i>
          ) : (
            <i className="ri-file-copy-line text-lg"></i>
          )}
          &nbsp; Copy Color Code
        </button>
      </div>
    </div>
  );
}
