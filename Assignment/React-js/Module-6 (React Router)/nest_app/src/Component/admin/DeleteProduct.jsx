import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams, useNavigate } from 'react-router-dom'

export default function DeleteProduct() {

  // delete contact data api 
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    axios.delete(`http://localhost:4000/products/${id}`).then(() => {
      // pass deleted messages
      Swal.fire({
        title: "Good job!",
        text: "Your Product successfully Deleted!",
        icon: "error"
      });

      Navigate('/add-Products');
    })
  }, []);
  return (
    <div>

    </div>
  )
}
