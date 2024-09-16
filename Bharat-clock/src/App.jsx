import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Container>
        <h1 className="text-center fw-bold text-light bg-dark py-2 my-2">
          Bharat Clock
        </h1>
        <p className="text-center fw-bolder fs-4">
          Clock Shows the time in Bharat at all Times
        </p>
        <hr />

        <p className="p-3 fw-bold text-danger-emphasis fs-5 text-center">
          This is the Current Time :-{" "}
          <span className="p-2 bg-secondary bg-gradient text-light">
            11:39 AM , 5/19/2024
          </span>
        </p>
      </Container>
    </div>
  );
}
