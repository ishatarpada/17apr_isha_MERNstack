import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Showdata() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/added-task`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Container>
      {data &&
        data.map((item) => (
          <div className="card text-center my-5" key={item.id}>
            <div className="card-header d-flex justify-content-between align-items-center">
              <p className="fw-semibold fs-3">{item.list_name}</p>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => {
                    Navigate(`/delete-task/${item.id}`);
                  }}
                  className="btn btn-sm btn-danger bg-danger text-white"
                >
                  <span className="bi bi-trash"></span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    Navigate(`/edit-task/${item.id}`);
                  }}
                  className="btn btn-sm btn-primary ms-3 bg-primary text-white"
                >
                  <span className="bi bi-pencil"></span>
                </button>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-start">{item.Taskstatus}</h5>
              <p className="card-text text-start">{item.details}</p>
            </div>
            <div className="card-footer text-body-secondary text-start fw-semibold fs-4">
              {item.added_date}
            </div>
          </div>
        ))}
    </Container>
  );
}
