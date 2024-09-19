import { useState, useRef } from 'react';
import 'remixicon/fonts/remixicon.css';

export default function App() {

  const copyEle = useRef(null);

  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = (e) => {
    e.preventDefault();

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let pattern = lowercaseChars;
    if (includeUppercase) {
      pattern += uppercaseChars;
    }
    if (includeNumbers) {
      pattern += numberChars;
    }
    if (includeSymbols) {
      pattern += symbolChars;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * pattern.length);
      generatedPassword += pattern[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyPassword = () => {
    if (copyEle.current) {
      navigator.clipboard.writeText(copyEle.current.textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold text-white mb-6">
          Password Generator
        </h2>
        <form onSubmit={generatePassword}>
          <div className="mb-4">
            <input
              type="text"
              id="password"
              placeholder="Generated Password"
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
            />
          </div>
          {password && (
            <div className="mb-4">
              <div className="bg-rose-50 text-rose-500 p-2 rounded flex justify-between items-center">
                <span ref={copyEle}>{password}</span>
                <button onClick={copyPassword} type="button">
                  {
                    copied ?
                      <i className='ri-check-double-line text-lg'></i> :
                      <i className='ri-file-copy-line text-lg'></i>
                  }
                </button>
              </div>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="length" className="text-white block mb-2">
              Password Length:{" "}
              <span id="lengthValue" className="font-semibold">
                {length}
              </span>
            </label>
            <input
              type="range"
              id="length"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-indigo-500 rounded-lg cursor-pointer"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-6">
            <label className="text-white flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="h-4 w-4 text-indigo-500 rounded"
              />
              <span>Include Uppercase</span>
            </label>
            <label className="text-white flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="h-4 w-4 text-indigo-500 rounded"
              />
              <span>Include Numbers</span>
            </label>
            <label className="text-white flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
                className="h-4 w-4 text-indigo-500 rounded"
              />
              <span>Include Symbols</span>
            </label>
          </div>
          <button
            type="submit"
            id="generate"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded focus:outline-none"
          >
            Generate Password
          </button>
        </form>
      </div>
    </div>
  );
}
