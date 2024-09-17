import { useState } from "react"
import { useDispatch } from "react-redux";
import { createCustomer } from "../redux/Slice/customerSlice";
import { useNavigate } from "react-router-dom";

export default function AddData() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customerName: "",
    product: "",
    price: "",
    discount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const addUser = (e) => {
    e.preventDefault();
    dispatch(createCustomer(form));
    navigate("/");
  }

  return (
    <>
      <div className="min-w-full min-h-screen bg-white shadow-lg rounded-lg flex justify-center items-start">
        <div className="min-w-96 my-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Product Form
          </h2>
          {/* Form Start */}
          <form onSubmit={addUser}>
            {/* Customer Name */}
            <div className="mb-4">
              <label
                htmlFor="customerName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Customer Name
              </label>
              <input
                type="text"
                name="customerName"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter customer name"
              />
            </div>
            {/* Product */}
            <div className="mb-4">
              <label
                htmlFor="product"
                className="block text-gray-700 font-semibold mb-2"
              >
                Product
              </label>
              <input
                type="text"
                name="product"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter product name"
              />
            </div>
            {/* Price */}
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-semibold mb-2"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter product price"
              />
            </div>
            {/* Discount */}
            <div className="mb-4">
              <label
                htmlFor="discount"
                className="block text-gray-700 font-semibold mb-2"
              >
                Discount
              </label>
              <input
                type="number"
                name="discount"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter discount"
              />
            </div>
            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
          {/* Form End */}
        </div>
      </div>
    </>
  )
}
