import React , {useState} from 'react'

export default function Counter() {

  const [counter, setCounter] = useState(0);

  const increment = (counter) => {
    setCounter((counter) => counter + 1);
  }

  const decrement = (counter) => {
    setCounter((counter) => counter - 1);
  }

  return (
    <>
    
      <div>

        <h1>Counter App</h1>
        <hr></hr>

        <p>{ counter }</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      

    </>
  )
}
