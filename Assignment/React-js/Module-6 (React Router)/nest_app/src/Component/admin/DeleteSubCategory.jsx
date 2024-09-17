import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams, useNavigate } from 'react-router-dom'

export default function DeleteSubCategory() {

  // delete contact data api 
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    axios.delete(`http://localhost:4000/sub-category/${id}`).then(() => {
      // pass deleted messages
      Swal.fire({
        title: "Good job!",
        text: "Your sub category successfully Deleted!",
        icon: "error"
      });

      Navigate('/category');
    })
  }, []);
  return (
    <div>

    </div>
  )
}
