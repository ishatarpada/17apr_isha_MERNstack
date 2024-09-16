import React from "react";

export default function Data() {
  return (
    <div>
      <div className="row mt-5 mb-3">
        <div className="col-4 text-light fs-4 fw-bold">Buy Milk</div>
        <div className="col-4 text-light fs-4 fw-bold">5/10/2024</div>
        <div className="col-4">
          <button className="btn btn-danger btn-lg px-5 fw-bold fs-4">
            Delete
          </button>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-4 text-light fs-4 fw-bold">Go To Collage</div>
        <div className="col-4 text-light fs-4 fw-bold">5/1/2024</div>
        <div className="col-4">
          <button className="btn btn-danger btn-lg px-5 fw-bold fs-4">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
