import { useRef } from "react";

function Demo() {

  const title = useRef();

  const test = () => {
    title.current.style.color = "purple";
    title.current.style.fontSize = "95px";
  }

  return (
    <>
      <h1 ref={title}>ISHA</h1>
      <button onClick={test}>Testing</button>
    </>
  )
}

export default Demo;