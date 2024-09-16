import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MDBContainer } from 'mdb-react-ui-kit';
import Header from './Header';

export default function AddTask() {
  const taskName = useRef("");
  const date = useRef("");
  const navigate = useNavigate();

  // Add form handler events methods
  const AddBandFormHandler = (e) => {
    e.preventDefault();
    const insert = {
      taskName: taskName.current.value,
      date: date.current.value
    };

    axios.post(`http://localhost:3001/add-task`, insert).then(() => {
      Swal.fire({
        title: "Thanks",
        text: "Task added successfully",
        icon: "success",
      });

      navigate("/");
    });

    e.target.reset();
  };

  return (
    <>
      <Header />
      <MDBContainer className="mt-5 p-5">
        <form onSubmit={AddBandFormHandler}>
          <h1 className="text-center display-3 text-primary fw-bold">Add New Task</h1>
        <hr className="w-75 mx-auto" />
          <div className="form-group w-50 mx-auto mt-3">
            <input
              type="text"
              placeholder="Add New Task *"
              name="taskName"
              className="form-control p-3 bg-light fs-4 border border-0"
              ref={taskName}
            />
          </div>

          <div className="form-group w-50 mx-auto mt-3">
            <input
              type="date"
              placeholder="Add Date *"
              name="date"
              className="form-control p-3 bg-light fs-4 border border-0"
              ref={date}
            />
          </div>

          <div className="form-group w-50 mx-auto mt-3">
            <input
              type="submit"
              value="Add Task"
              className="btn btn-lg btn-primary shadow border border-0"
            />

            <input
              type="reset"
              value="Reset Task"
              className="btn btn-lg btn-danger shadow ms-4 border border-0"
            />
          </div>
        </form>
      </MDBContainer>
    </>
  );
}
