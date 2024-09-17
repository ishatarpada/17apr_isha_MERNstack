import { useEffect, useState } from "react";

function App() {

  /* 1st type handle http request
  const test = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

  } */

  /*  // 2nd type handle http request
   const test = () => {
     fetch('https://jsonplaceholder.typicode.com/photos')
       .then((response) => {
         console.log("Success", response.json())
       })
       .catch((error) => {
         console.error("Error fetching users:", error);
       }); */

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    test();
  }, [])

  // 3rd type handle http request
  const test = async () => {
    try {
      // const response = await fetch('https://jsonplaceholder.typicode.com/photos?limit=10');
      const response = await fetch('https://fakestoreapi.com/products?limit=10');
      const data = await response.json();
      console.log(data);
      setPhotos(data);
    } catch (error) {
      console.log("error", error);
    }
  }



  return (
    <>
      <div className="container my-5 mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-center mb-2">Async Await Try Catch</h1>
          <button className="btn btn-dark btn-lg fw-bold display-5 mt-3" onClick={test}>Test</button>
        </div>
        <hr className="mx-auto" />
        <div className="row my-5">
          {
            photos.map((photo, index) => (
              <div className="col-md-6 gap-2" key={index}>
                <div className="card text-center">
                  <div className="card-header d-flex justify-content-center align-align-items-center">
                    <img src={photo.image} alt="" style={{ width: "150px", height: "150px" }} />
                  </div>
                  <div className="card-body">
                    <h6 className="fw-bold h-50">{photo.title}</h6>
                    <p className="text-trunk">{photo.description.slice(0, 100)}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <h6 className="fw-bold">{photo.category}</h6>
                    <p className="">{photo.price}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
