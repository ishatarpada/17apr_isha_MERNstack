import React from 'react'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom';
import logo from './assets/reminder.svg'; // Adjust the path as per your folder structure

export default function Content() {
  return (
    <div>
      <MDBContainer className="mt-5 p-5">
        <MDBRow className='align-items-center'>

          <div className='col-md-5'>
            <img src={logo} alt="Logo" className="m-5" style={{ height: '400px', width: '400px' }} />
            <h2 className='text-center fs-1 fw-bold'>Welcome to Our Task</h2>
          </div>

          <div className='col-md-7'><h2 className='p-3 text-primary text-center rounded display-4'>Create Task Manage App</h2>
            <div className="list-group w-50 mx-auto">
              <Link to="/add-task">
                <a href="#" className="list-group-item list-group-item-action m-2 active fw-bold fs-4" aria-current="true">
                  <i class="bi bi-pencil-square me-2"></i>Create Task
                </a>
              </Link>
              <Link to="/manage-task">
                <a href="#" className="list-group-item list-group-item-action m-2 fw-bold fs-4"><i className="bi bi-bookmark-dash-fill me-2"></i>Read Task</a>
              </Link>
              <Link to="/edit-task">
                <a href="#" className="list-group-item list-group-item-action m-2 fw-bold fs-4"><i class="bi bi-pencil-square me-2"></i>Edit Task</a>
              </Link>
              <Link to="/manage-task">
                <a className="list-group-item list-group-item-action m-2 fw-bold fs-4"><i className="bi bi-trash-fill me-2"></i>Delete Task</a>
              </Link>
            </div>
          </div>
        </MDBRow>
      </MDBContainer>

    </div>
  )
}
