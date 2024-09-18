import { useReducer } from "react";

export default function Home() {

  const reducer = (state , action) => {
    state = action;
    return state;
  }

  const [loader, setLoader] = useReducer(reducer, false)

  const toggle = () => {
    setLoader(!loader)
  }

  return (
    <div className="flex justify-center items-center bg-gray-800 min-h-screen min-w-screen">
      <div className="shadow">
       {
        loader &&  <i className="fa fa-spinner fa-spin text-6xl text-white text-center"></i>
       }
        <div className="my-5">
          <button
            type="button"
            onClick={toggle}
            className="bg-white p-3 text-gray-800 rounded"
          >
            Toggle Loader
          </button>
        </div>
      </div>
    </div>
  );
}
