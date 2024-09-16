import React from "react";

export default function AddItem() {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter TODO here"
            className="form-control fs-4 rounded-4 border border-light border-3"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control fs-4 rounded-4 border border-light border-3"
          />
        </div>
        <div className="col-4">
          <button className="btn btn-success btn-lg px-5 fw-bold fs-4">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
