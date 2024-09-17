import store from "./Redux/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import 'remixicon/fonts/remixicon.css';

import Home from "./Components/Home"
import Product from "./Components/Product"
import ProductDetails from "./Components/ProductDetails"


export default function App() {
  return (
    <Provider store={store}>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </Router>
    </Provider>
  )
}
