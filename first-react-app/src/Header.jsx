import React from 'react';
import { MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <MDBContainer fluid className="bg-primary p-4 shadow">
        <MDBRow>
          <div className="col-md-8 d-flex align-items-center">
            <Link to="/">
              <span className="bi bi-grid text-white fs-1">
                <b className="ms-2 fs-1">Task Manager</b>
              </span>
            </Link>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <Link to="/add-task">
              <MDBBtn className="btn btn-lg btn-white shadow fs-5">
                TASK <span className="bi bi-grid"></span>
              </MDBBtn>
            </Link>
            <Link to="/manage-task">
              <MDBBtn className="btn btn-lg btn-white shadow ms-2 fs-5">
                Manage TASK <span className="bi bi-grid"></span>
              </MDBBtn>
            </Link>
          </div>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
