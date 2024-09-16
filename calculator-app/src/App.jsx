import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      const result = eval(input); 
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <>
      <div className="container my-5 mx-auto">
        <div className="grid grid-cols-4 gap-4 justify-center items-center my-5">
          <input
            type="text"
            className="border-2 border-lime-300 p-3 col-span-4 bg-transparent text-white focus:border-lime-300 focus:outline-lime-400"
            value={input}
            readOnly
          />
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleClear()}
          >
            C
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('()')}
          >
            ()
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('%')}
          >
            %
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('/')}
          >
            /
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('7')}
          >
            7
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('8')}
          >
            8
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('9')}
          >
            9
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('*')}
          >
            *
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() =>handleButtonClick('4')}
          >
            4
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('5')}
          >
            5
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('6')}
          >
            6
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('-')}
          >
            -
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('1')}
          >
            1
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('2')}
          >
            2
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('3')}
          >
            3
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('+')}
          >
            +
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('00')}
          >
            00
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl"
            onClick={() => handleButtonClick('.')}
          >
            .
          </button>
          <button
            type="button"
            className="border-2 border-lime-300 p-3 text-white fw-bold text-2xl bg-lime-300"
            onClick={() => handleEqual()}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
