import React,{useEffect, useState,useRef} from 'react'
import Header from './Header'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditTask() {
  const [data,setData] = useState();
    

  const taskName = useRef("");
  const description = useRef("");
  const image = useRef("");
  const date = useRef("");
  const {id}=useParams();
  const navigate = useNavigate("");


  // edit contact data
useEffect(()=>{
  axios.get(`http://localhost:8000/task/${id}`).then((response)=>{
  
  taskName.current.value=response.data.taskName; 
  image.current.value=response.data.image; 
  description.current.value= response.data.description;
  date.current.value=response.data.date;   
  })
  
  },[]);

  const AddTaskFormHandler= (e)=>{
      e.preventDefault();
      var update = {
          taskName:taskName.current.value,
          image:image.current.value,
          description:description.current.value,
          date:date.current.value
      }

      axios.put(`http://localhost:8000/task/${id}`,update)
      .then(()=>{
          Swal.fire({
              title: "Good job",
              text: "Thanks your task update   successfully",
              icon: "success"
            });

            navigate('/manage-task');
      });

      e.target.reset();
  }
  
  return (
    <>
    <Header/>
    <div> 
        <div className="container py-20 mx-auto mt-10 bg-black w-75">
            <form className="max-w-screen-md mx-auto " onSubmit={AddTaskFormHandler}>
              
              {/* task Name */}
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className="bi bi-list-task"></i>
                    </span>
                    <input type="text" ref={taskName} id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Task"/>
                </div>

                {/* description */}
                <div className="flex mt-5">
                    <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className="bi bi-list-task"></i>
                    </span>
                    <input type="text" ref={description} id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Task Description"/>
            </div>
            
            {/* image */}
            <div className="flex mt-5">
              <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <i className="bi bi-list-task"></i>
              </span>
              <input type="text" ref={image} id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Task" />
            </div>

                {/* date */}
                  <div className="flex mt-5">
                      <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <i className="bi bi-calendar-event-fill"></i>
                      </span>
                      <input type="date" ref={date} id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Task"/>
                  </div>

                  <div className='mt-10'>
                    <button type="submit" className="text-white bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">UPDATE TASK</button>

                    <button type="reset" className="text-white bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">RESET</button>
               
                 
                  </div>

                </form>
          
        </div>
    </div>
    </>
    
  )
}
