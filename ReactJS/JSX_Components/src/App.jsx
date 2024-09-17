function App() {
  var x = 10;
  var y = 20;
  var z = x + y;

  const style = {
    margin: "50px auto",
    textAlign: "center",
    fontSize: "25px",
    backgroundColor: "red",
    color: "white",
    padding: "20px",
  };

  return (
    <div style={style}>
      <h1>Hello</h1>
      <p>{5 + 3}</p>
      <p>{z}</p>
    </div>
  );
}

export default App;
