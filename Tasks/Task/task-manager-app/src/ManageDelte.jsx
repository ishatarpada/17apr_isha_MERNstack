import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ManageDelete() {
  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    axios.delete(`http://localhost:8000/added-task/${id}`).then(() => {
      Swal.fire({
        title: "Success",
        text: "Your Task successfully deleted",
        icon: "success",
      });

      Navigate("/");
    });
  }, [id, Navigate]);

  return <div></div>;
}
