import { useState } from "react";

function Demo() {

  const [form, setForm] = useState({
    name: "",
    subject: ""
  });
  const [student, setStudent] = useState([]);
  const [editIndex, setEditIndex] = useState(null)

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });

    console.log(form);
  }

  const addStudent = (e) => {
    e.preventDefault();
    setStudent([...student, form]);
    setForm({
      name: "",
      subject: ""
    });
  }

  const deleteStudent = (index) => {
    const cpyArr = [...student];
    cpyArr.splice(index, 1);
    setStudent(cpyArr);
  }

  const editStudent = (index) => {
    setEditIndex(index);
    setForm(student[index]);
  }

  const saveStudent = (e) => {
    e.preventDefault();
    const cpyArr = [...student];
    cpyArr[editIndex] = form;
    setStudent(cpyArr);
    setForm({
      name: "",
      subject: ""
    });
    setEditIndex(null);
  }

  return (
    <>
      <div className="container mt-5">
        <h2>Form</h2>

        <form onSubmit={editIndex === null ? addStudent : saveStudent}>
          <div className="form-group my-3">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={form.name} placeholder="Enter your name" onChange={handleInput} />
          </div>
          <div className="form-group my-3">
            <label>Subject</label>
            <input type="text" className="form-control" name="subject" value={form.subject} placeholder="Enter subject" onChange={handleInput} />
          </div>
          {
            editIndex === null ?
              <button type="submit" className="btn btn-primary">Submit</button> :
              <button type="submit" className="btn btn-primary">Save</button>
          }
        </form>
      </div>
      <hr className="w-75 mx-auto mt-5"></hr>
      <div className="container mt-5">
        <h2>Table</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.length > 0 ? (
              student.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.subject}</td>
                  <td>
                    <button className="mx-2" onClick={() => editStudent(index)}>edit</button>
                    <button className="mx-2"
                      onClick={() => deleteStudent(index)}
                    >delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">No students added yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Demo;
