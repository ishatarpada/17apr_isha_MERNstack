import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate

export default function Layout() {
  // stored data
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("tasks");
    return savedData ? JSON.parse(savedData) : [];
  });
  const list_name = useRef("");
  const priority = useRef("");
  const added_date = useRef("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  // create a formHandler
  const addTaskHandler = (e) => {
    e.preventDefault();
    const insert = {
      list_name: list_name.current.value,
      priority: priority.current.value,
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
    <div className="bg-dark py-5" style={{ height: "100vh" }}>
      <Container>
        <h1 className="text-light text-center fs-1">Task Manager</h1>
        <form className="p-5" onSubmit={addTaskHandler}>
          <div className="row g-3 align-items-center justify-content-between">
            <div className="col-auto">
              <input
                type="text"
                name="list_name"
                ref={list_name}
                className="form-control fs-3 rounded-4 ps-5"
                placeholder="Enter Your TODO"
              />
            </div>
            <div className="col-auto">
              <select
                name="priority"
                ref={priority}
                className="form-select form-select-lg fs-3 rounded-4 text-secondary"
                aria-label="Priority"
              >
                <option value="high">High</option>
                <option value="less">Less</option>
              </select>
            </div>
            <div className="col-auto">
              <input
                type="date"
                name="added_date"
                ref={added_date}
                className="form-control fs-3 rounded-4"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn">
                <span className="text-primary bi bi-plus-circle-fill display-1"></span>
              </button>
            </div>
          </div>
        </form>

        <h1 className="text-light py-2 display-4">TODO</h1>
        <hr className="text-light" />

        <div className="my-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="fw-bold fs-4 text-center">
                  Task Name
                </th>
                <th scope="col" className="fw-bold fs-4 text-center">
                  Priority
                </th>
                <th scope="col" className="fw-bold fs-4 text-center">
                  Added Date
                </th>
                <th scope="col" className="fw-bold fs-4 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((task, index) => (
                <tr key={index}>
                  <td className="fw-medium text-secondary text-center fs-4">
                    {task.list_name}
                  </td>
                  <td className="fw-medium text-secondary text-center fs-4">
                    {task.priority}
                  </td>
                  <td className="fw-medium text-secondary text-center fs-4">
                    {task.added_date}
                  </td>
                  <td className="d-flex justify-content-center">
                    <button
                      className="btn me-2"
                      onClick={() => handleEdit(index)}
                    >
                      <span className="text-success-emphasis bg-success bg-opacity-10 px-2 rounded bi bi-pencil-square fs-4"></span>
                    </button>
                    <button className="btn">
                      <span className="text-danger-emphasis bg-danger bg-opacity-10 px-2 rounded bi bi-trash fs-4"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}
