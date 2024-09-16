const App = () => {

  const click = () => {
    alert("onClick event");
  }

  const dblClick = () => {
    alert("Double Click event");
  }

  const over = () => {
    alert("Mouse Over event");
  }

  const out = () => {
    alert("Mouse Out event");
  }

  return (
    <>
      <button onClick={click} style={{ margin: "10px" }}>Click Me!</button>
      <button onDoubleClick={dblClick} style={{ margin: "10px" }}>Double Click Me!</button>
      <button onMouseOver={over} style={{ margin: "10px" }}>Mouse Over Me!</button>
      <button onMouseOut={out} style={{ margin: "10px" }}>Mouse Out Me!</button>
      <br></br>
      <input onKeyDown={() => { alert("key Down") }} style={{ margin: "10px", padding: "10px" }} placeholder="key Down"></input>
      <input onKeyDownCapture={() => { alert("key Down capture") }} style={{ margin: "10px", padding: "10px" }} placeholder="key Down"></input>
      <input onKeyUpCapture={() => { alert("key Up capture") }} style={{ margin: "10px", padding: "10px" }} placeholder="key Down"></input>
      <input onKeyUp={() => { alert("key Up") }} style={{ margin: "10px", padding: "10px" }} placeholder="key Down"></input>
    </>
  )

}

export default App; 