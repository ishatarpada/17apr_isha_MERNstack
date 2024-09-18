import { useReducer, useRef } from "react";

const reducer = (state, action) => {
  switch (action.type.toLowerCase()) {
    case 'a':
      return { ...state, result: "apple" };
    case 'b':
      return { ...state, result: "ball" };
    case 'c':
      return { ...state, result: "cat" };
    case 'd':
      return { ...state, result: "dog" };
    default:
      return { ...state, result: "Not Found" };
  }
};

export default function Alpha() {

  const input = useRef(null);

  const [alpha, setAlpha] = useReducer(reducer, {
    type: '',
    result: ''
  });

  const check = () => {
    const value = input.current.value;
    if (value.length > 0) {
      setAlpha({ type: value });
    } else {
      alert("Input Field is Empty");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-800 min-h-screen min-w-screen font-serif">
      <div>
        <div className="shadow">
          <input className="w-96 mx-auto bg-white p-3 rounded-l-lg" placeholder="write something..." onChange={check} ref={input} />
          <button
            type="button"
            onClick={check}
            className="bg-indigo-500 py-3 px-8 text-white rounded-r-lg"
          >
            Check
          </button>
        </div>
        <h1 className="my-5 text-white text-xl font-semibold">Result :- {alpha.result} </h1>
      </div>
    </div>
  );
}
