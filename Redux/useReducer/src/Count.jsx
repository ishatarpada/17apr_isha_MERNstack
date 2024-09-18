import { useReducer } from "react"


const reducer = (state, action) => {
  if (action.type === "plus") {
    state = state + 1;
    return state;
  }
  else {
    state = state - 1;
    return state;
  }
}

export default function Count() {

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex justify-center items-center bg-gray-800 min-h-screen min-w-screen">
      <div className="shadow flex justify-center items-center gap-3">
        <button
          type="button"
          onClick={() => dispatch({ type: "plus" })}
          className="bg-white p-3 text-gray-800 rounded"
        >
          +
        </button>

        <h1 className="text-white">Count: {count}</h1>

        <button
          type="button"
          onClick={() => dispatch({ type: "minus" })}
          className="bg-white p-3 text-gray-800 rounded"
        >
          -
        </button>
      </div>
    </div>
  )
}
