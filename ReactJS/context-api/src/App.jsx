import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import Context from "./Context"
import Product from "./Product"
import Details from "./Details"
import { useState } from "react"

export default function App() {

const [product , setProduct] = useState(null);

  return (
    <>
      <Context.Provider value={{product , setProduct}}>
        <Router>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </Router>
      </Context.Provider>
    </>
  )
}
