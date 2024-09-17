import { useEffect, useState } from "react";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    test();
  }, [refetch])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 10)

    // clean up function
    return () => {
      clearInterval(interval);
    }
  }, [])

  const test = async () => {
    try {
      setLoader(true);
      const response = await axios.get('https://fakestoreapi.com/products?limit=10');
      const data = await response.data;
      console.log(data);
      setPhotos(data);
      setLoader(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <div className="container my-5 mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-center mb-2">useEffect Cleanup & Dependency</h1>
          <button className="btn btn-dark btn-lg fw-bold display-5 mt-3" onClick={test}>Test</button>
          <button className="btn btn-dark btn-lg fw-bold display-5 mt-3" onClick={() => setRefetch(!refetch)}>Refetch</button>
        </div>
        {count}
        <hr className="mx-auto" />
        <div className="container">
          <div className="mx-auto">
            <div className="display-1 text-info-emphasis text-center">
              {
                loader && <i className="fa fa-spinner fa-spin"></i>
              }
            </div>
          </div>
        </div>
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
