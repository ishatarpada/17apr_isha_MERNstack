import React from "react";
import Header from "./Header";
import Addtask from "./Addtask";
import Showdata from "./Showdata";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Addtask></Addtask>
      <Showdata></Showdata>
    </>
  );
}
