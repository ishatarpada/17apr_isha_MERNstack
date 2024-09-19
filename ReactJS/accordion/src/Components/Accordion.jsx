import { useState } from "react";

export default function Accordion({ data }) {
  const [active, setActive] = useState(-1);

  return (
    <div className="border rounded-lg border-gray-300 my-5">
      {data.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setActive(active === index ? -1 : index)}
            className={`bg-gray-800 ${index === 0 ? 'rounded-t-lg' : ''} p-2 w-full text-white text-lg font-semibold text-left border-b border-gray-400`}
          >
            {active === index ? (
              <i className="ri-arrow-down-s-line mx-2"></i>
            ) : (
              <i className="ri-arrow-right-s-line mx-2"></i>
            )}
            {item.title}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out`}
            style={{
              maxHeight: active === index ? "200px" : "0", 
              opacity: active === index ? 1 : 0,
            }}
          >
            <p className="p-4">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
