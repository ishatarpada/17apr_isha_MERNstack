import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const [font, setFont] = useState(16);
  const [clr, setColor] = useState("#000000");
  const [count, setCount] = useState(0);

  const toggleExpand = () => {
    setShow(!show);
  };

  const theme = () => {
    setToggle(!toggle);
  };

  const darkTheme = {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    maxHeight: "screen"
  };

  const lightTheme = {
    backgroundColor: "white",
    color: "black",
    minHeight: "100vh",
    maxHeight: "screen"
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  const changeFontSize = (e) => {
    setFont(Number(e.target.value));
  };

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  const fontsize = {
    fontSize: font
  };

  const color = {
    color: clr
  };

  const increment = () => {
    setCount((count) => count + 1)
  }

  const decrement = () => {
    setCount((count) => count - 1)
  }

  return (
    <>
      <div style={toggle ? darkTheme : lightTheme} className="h-screen w-screen">
        <h1 className="text-center p-5 fw-medium">State Management React Application</h1>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-dark" onClick={theme}>
            {toggle ? "Light" : "Dark"} <i className={toggle ? "bi bi-sun mx-2" : "bi bi-moon mx-2"}></i>
          </button>
        </div>
        <hr className="w-75 mx-auto" />
        <div className="container mt-5">

          <div className="row justify-content-between align-items-center pb-4" id="blogContainer">
            {/* Blog Post 1 */}
            <div className="col-md-5 shadow p-5">
              <h1 className="text-center">Counter</h1>
              <hr className="w-100 mx-auto"></hr>

              <div className="d-flex justify-content-center align-items-center gap-2">
                <button className="btn btn-primary fw-bold text-light fs-3 px-3" onClick={increment}>+</button>
                <p className="p-0 m-0 fw-bold fs-3">{count}</p>
                <button className="btn btn-warning fw-bold text-light fs-3 px-3" onClick={decrement}>-</button>
              </div>
            </div>
            <div className="col-md-5 shadow">
              <h1 className="text-center">Font Increaser</h1>
              <hr className="w-100 mx-auto"></hr>
              <p className="m-3 text-center fw-bold" style={{ ...fontsize, ...color }}>Isha</p>
              <hr className="w-100 mx-auto"></hr>
              <div className="d-flex">
                <input type="range" className="form-range my-3 w-50 mx-auto" min="20" max="200" onChange={changeFontSize} />
              </div>
              <div className="d-flex">
                <input type="text" className="form-control my-3 w-50 mx-auto" placeholder="Enter color..." onChange={changeColor} />
              </div>
            </div>
          </div>

          <hr></hr>
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h1>Latest Blog Posts</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center my-3">
              <input type="text" className="form-control my-3 w-50 mx-auto" placeholder="write something....." onChange={changeText} />
              <h1>{text}</h1>
            </div>
          </div>
          <hr></hr>

          <div className="row justify-content-center align-items-center pb-4 my-5" id="blogContainer">
            {/* Blog Post 1 */}
            <div className="col-md-7">
              <div className="card">
                <img
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  className="card-img-top"
                  alt="Blog Image 1"
                />
                <div className="card-body">
                  <h6 className="card-title">Blog Post Title 1</h6>
                  <p className="card-text">
                    This is a short description of blog post 1. It provides an overview of the content.
                    {show && <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sunt placeat sed libero ipsa aperiam fugiat quaerat repudiandae eius vitae.</span>}
                    <button
                      className="text-decoration-none ms-1 pointer bg-transparent border-0 fw-bolder"
                      onClick={toggleExpand}
                    >
                      {show ? "Show Less" : "Show More"}
                    </button>
                  </p>
                  <p className="text-muted">Date: August 25, 2024</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
