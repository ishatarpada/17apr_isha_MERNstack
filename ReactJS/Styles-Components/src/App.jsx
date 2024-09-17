function App() {
  const style = {
    color: "white",
    backgroundColor: "blue",
    padding: "5px",
    display: "flex",
    gap: "20px",
    justifyContent: "start",
    listStyle: "none"
  }

  const link = {
    color: "white",
    margin: "5px",
    textDecoration: "none"
  }

  const x = 100;
  return (
    <>
      <nav>
        <ul style={style}>
          <li><a href="#" style={link}>Home {x}</a></li>
          <li><a href="#" style={link}>Career {x + 20}</a></li>
          <li><a href="#" style={link}>Contact Us </a></li>
          <li><a href="#" style={link}>Login</a></li>
          <li><a href="#" style={link}>Signup</a></li>
        </ul>
      </nav>

      <section>
        <h1 style={{ textAlign: "center", fontSize: "50px", "textTransform": "uppercase" }}>this is section</h1>
      </section>
    </>
  )
}

export default App;