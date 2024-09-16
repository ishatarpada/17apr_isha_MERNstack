import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams, useNavigate } from 'react-router-dom'

export default function DeleteBlog() {

  // delete contact data api 
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    axios.delete(`http://localhost:4000/blogs/${id}`).then(() => {
      // pass deleted messages
      Swal.fire({
        title: "Good job!",
        text: "Your  Blogs successfully Deleted!",
        icon: "error"
      });

      Navigate('/manage-blog');
    })
  }, []);
  return (
    <div>

    </div>
  )
}
