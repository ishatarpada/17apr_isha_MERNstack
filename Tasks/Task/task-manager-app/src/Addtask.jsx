import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

export default function Addtask() {
  // stored data
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("tasks");
    return savedData ? JSON.parse(savedData) : [];
  });
  const list_name = useRef("");
  const details = useRef("");
  const Taskstatus = useRef("");
  const added_date = useRef("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  // create a formHandler
  const addTaskHandler = (e) => {
    e.preventDefault();
    const insert = {
      list_name: list_name.current.value,
      details: details.current.value,
      Taskstatus: Taskstatus.current.value,
      added_date: added_date.current.value,
    };

    axios
      .post(`http://localhost:8000/added-task`, insert)
      .then((response) => {
        setData([...data, insert]); // Update the state with the new task
        Swal.fire({
          title: "Success",
          text: "Your task has been successfully added",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error("Error adding task:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while adding your task",
          icon: "error",
        });
      });

    e.target.reset();
  };
  return (
    <>
      <Container>
        <h1 className="my-3">Add New Task Here</h1>
        <hr />
        <Form className="mt-5" onSubmit={addTaskHandler}>
          <div class="input-group mb-3">
            <span
              class="input-group-text bi bi-pencil fw-bold"
              id="basic-addon1"
            ></span>
            <input
              type="text"
              name="list_name"
              ref={list_name}
              className="form-control fw-semibold fs-5 text-dark p-2"
              placeholder="New Task"
            />
          </div>

          <div class="input-group mb-3">
            <span
              class="input-group-text bi bi-pencil fw-bold"
              id="basic-addon1"
            ></span>
            <input
              type="text"
              name="details"
              ref={details}
              className="form-control fw-semibold fs-5 text-dark p-2"
              placeholder="Details"
            />
          </div>

          <div class="input-group mb-3">
            <span
              class="input-group-text bi-calendar-check fw-bold"
              id="basic-addon1"
            ></span>
            <input
              type="date"
              name="added_date"
              ref={added_date}
              className="form-control fw-semibold fs-5 text-dark p-2"
            />
          </div>

          <div class="input-group mb-3">
            <span className="input-group-text bi bi-menu-up fw-bold"></span>
            <select
              class="form-select fw-semibold fs-5 text-dark p-2"
              aria-label="Default select example"
              name="Taskstatus"
              ref={Taskstatus}
            >
              <option selected>Open this select menu</option>
              <option value="pending">Pending</option>
              <option value="Complete">Complete</option>
            </select>
          </div>

          <div class="btn-group mb-3" style={{ backgroundColor: "#4e54bf" }}>
            <span className="bi bi-send fw-bold my-3 ms-3 fw-bold text-light"></span>
            <button
              type="submit"
              className="btn btn-lg text-light fw-bold fs-4"
              style={{ backgroundColor: "#4e54bf" }}
            >
              Create
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
}
