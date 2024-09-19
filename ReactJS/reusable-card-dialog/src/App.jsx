import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Home'
import Layout from './Components/Layout'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Layout />} />
        </Routes>
      </Router>
      <Home />
    </>
  )
}
