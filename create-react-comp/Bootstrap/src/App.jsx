import React from "react";
import { Container } from "react-bootstrap";
import AppName from "./AppName";
import AddItem from "./AddItem";
import Data from "./Data";

export default function App() {
  return (
    <Container fluid className="py-5 mx-0 bg-dark" style={{ height: "100vh" }}>
      <Container>
        <AppName />
        <AddItem></AddItem>
        <Data></Data>
      </Container>
    </Container>
  );
}
