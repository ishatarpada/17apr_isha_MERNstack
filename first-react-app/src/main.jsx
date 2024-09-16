import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './assets/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import AddTask from './AddTask';
import ManageTask from './ManageTask';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<Layout />} /> 
      <Route path='/add-task' element={<AddTask />} /> 
      <Route path='/manage-task' element={<ManageTask />} /> 
    </Routes>
  </Router>


  </React.StrictMode>,
)
