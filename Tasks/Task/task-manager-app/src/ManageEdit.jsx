import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import Header from "./Header";

export default function ManageEdit() {
  // State to store form data
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const list_name = useRef("");
  const details = useRef("");
  const Taskstatus = useRef("");
  const added_date = useRef("");

  // Fetch data on mount
  useEffect(() => {
    axios.get(`http://localhost:8000/added-task/${id}`).then((response) => {
      list_name.current.value = response.data.list_name;
      details.current.value = response.data.details;
      Taskstatus.current.value = response.data.Taskstatus;
      added_date.current.value = response.data.added_date;
    });
  }, [id]);

  // Update form handler
  const updFormHandeler = (e) => {
    e.preventDefault();
    var upd = {
      list_name: list_name.current.value,
      details: details.current.value,
      Taskstatus: Taskstatus.current.value,
      added_date: added_date.current.value,
    };

    // Update data via API
    axios.put(`http://localhost:8000/added-task/${id}`, upd).then(() => {
      Swal.fire({
        title: "Success",
        text: "Your Task updated successfully",
        icon: "success",
      });

      navigate("/");
    });
  };

  return (
    <div>
      <Header />
      <Container className="p-5 mt-5">
        <Form className="mt-5" onSubmit={updFormHandeler}>
          <div className="input-group mb-3">
            <span
              className="input-group-text bi bi-pencil fw-bold"
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

          <div className="input-group mb-3">
            <span
              className="input-group-text bi bi-pencil fw-bold"
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

          <div className="input-group mb-3">
            <span
              className="input-group-text bi-calendar-check fw-bold"
              id="basic-addon1"
            ></span>
            <input
              type="date"
              name="added_date"
              ref={added_date}
              className="form-control fw-semibold fs-5 text-dark p-2"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text bi bi-menu-up fw-bold"></span>
            <select
              className="form-select fw-semibold fs-5 text-dark p-2"
              aria-label="Default select example"
              name="Taskstatus"
              ref={Taskstatus}
            >
              <option value="">Open this select menu</option>
              <option value="pending">Pending</option>
              <option value="Complete">Complete</option>
            </select>
          </div>

          <div
            className="btn-group mb-3"
            style={{ backgroundColor: "#4e54bf" }}
          >
            <span className="bi bi-send fw-bold my-3 ms-3 fw-bold text-light"></span>
            <button
              type="submit"
              className="btn btn-lg text-light fw-bold fs-4"
              style={{ backgroundColor: "#4e54bf" }}
            >
              Update task
            </button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
