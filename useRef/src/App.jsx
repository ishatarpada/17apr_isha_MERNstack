import { useRef } from "react";

function App() {

  const title = useRef();

  const test = () => {
    title.current.style.color = "purple";
    title.current.style.fontSize = "35px";
  }

  return (
    <>
      <h1 ref={title}>ISHA</h1>
      <button onClick={test}>Testing</button>
    </>
  )
}

export default App;