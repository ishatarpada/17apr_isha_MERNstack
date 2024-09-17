import React, { useEffect, useState } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import Header from './Header';

export default function ManageTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/add-task')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <>
      <Header />
      <MDBContainer className="mt-5 p-5">
        <h1 className="text-center mt-5 fw-bold display-4">Manage Task</h1>
        <hr className="w-75 mx-auto" />
        <table className="table table-dark table-striped" align="center">
          <thead>
            <tr>
              <th className='fw-bold fs-3'>#</th>
              <th className='fw-bold fs-3'>Task</th>
              <th className='fw-bold fs-3'>Date</th>
              <th className='fw-bold fs-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td className='fw-bold fs-4'>{task.id}</td>
                <td className='fw-bold fs-4'>{task.taskName}</td>
                <td className='fw-bold fs-4'>{task.date}</td>
                <td className='fw-bold fs-4'>
                  <button className="btn btn-sm btn-primary text-center fs-4"><i className="bi bi-pencil-square"></i></button>
                  <button className="btn btn-sm btn-danger ms-2 text-center fs-4"><i className="bi bi-trash-fill"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </MDBContainer>
    </>
  );
}
