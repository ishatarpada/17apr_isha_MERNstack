import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeProduct } from "../Redux/Slice/product-slice";

export default function Product() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((json) => {
        console.log(json);
        setData(json); // Set the parsed JSON to state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  const viewProducts = (product) => {
    dispatch(storeProduct(product));
    navigate("/product-details")
  }

  return (
    <>
      <div className="min:h-screen min:w-screen flex justify-center items-center py-16 font-serif">
        <div className="p-8 text-center shadow rounded">
          <h1 className="text-5xl mb-2">Redux App</h1>
          <p className="text-gray-700 text-lg my-4 font-semibold">
            Click on any Product To test Your Redux App
          </p>
        </div>
      </div>

      <div className="flex container justify-center items-center flex-wrap mx-auto font-serif">
        {data.map((product) => (
          <div key={product.id} className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md mx-4 rounded">
            <a className="relative flex h-60 overflow-hidden" href="#">
              <img
                className="absolute top-0 right-0 h-full w-full object-fill"
                src={product.image}
                alt={product.title}
              />
              <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                  <i className="ri-heart-line text-2xl p-2 bg-transparent"></i>
                </button>
              </div>
            </a>
            <div className="mt-4 px-5 pb-5 bg-transparent">
              <a href="#">
                <h5 className="text-xl tracking-tight bg-transparent text-slate-900">
                  {product.title}
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between bg-white">
                <p className="bg-transparent">
                  <span className="text-3xl font-bold text-slate-900 bg-white">${product.price}</span>
                </p>
              </div>
              <button
                className="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
                onClick={() => viewProducts(product)}
              >
                <i className="ri-folder-info-fill text-white bg-gray-950 text-xl mx-2"></i>
                Show Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
