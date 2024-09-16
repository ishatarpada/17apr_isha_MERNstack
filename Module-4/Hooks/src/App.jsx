import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colors, setColor] = useState("")

  return (
    <>
      <div className="container border my-5 py-5">
        <h1>My favorite color is {colors}</h1>
        
        <div className="container">
          <button type="button" onClick={() => setColor("red")} className='btn btn-lg m-3 btn-danger'>Red</button>
          <button type="button" onClick={() => setColor("blue")} className='btn btn-lg m-3 btn-primary'>Blue</button>
          <button type="button" onClick={() => setColor("yellow")} className='btn btn-lg m-3 btn-warning'>Yellow</button>
          <button type="button" onClick={() => setColor("teal")} className='btn btn-lg m-3 btn-info'>Info</button>
          <button type="button" onClick={() => setColor("black")} className='btn btn-lg m-3 btn-dark'>Black</button>
          <button type="button" onClick={() => setColor("green")} className='btn btn-lg m-3 btn-success'>Green</button>
        </div>
      </div>
    </>
  )
}

export default App
