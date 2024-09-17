import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap-icons/font/bootstrap-icons.css"
import './index.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './Header.jsx'
import HomePage from './HomePage.jsx'
import AddTask from './AddTask.jsx'
import ManageTAsk from './ManageTAsk.jsx'
import DeleteTask from './DeleteTask.jsx'
import EditTask from './EditTask.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header/> */}
    {/* <HomePage/> */}
    {/* <AddTask/> */}
    {/* <ManageTAsk/> */}
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/add-task' element={<AddTask/>} />
        <Route path="/manage-task" element={<ManageTAsk/>}/>
        <Route path="/delete-task/:id" element={<DeleteTask/>}/>
        <Route path="/edit-task/:id" element={<EditTask/>}/>
      </Routes> 
   </Router>
  </React.StrictMode>,
)
