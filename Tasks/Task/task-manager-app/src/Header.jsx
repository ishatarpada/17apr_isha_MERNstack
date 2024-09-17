import React from "react";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Container fluid className="p-4" style={{ backgroundColor: "#4e54bf" }}>
        <i className="bi bi-journal-text text-light fw-bold display-2 me-3"></i>
        <span className="text-light fw-bold display-5">Task Manger</span>
      </Container>
    </>
  );
}
