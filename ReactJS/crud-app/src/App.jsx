import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(-500);

  const openDrawer = () => {
    setOpen(open === 0 ? -500 : 0);
  };

  const closeDrawer = () => {
    setOpen(-500);
  };

  const [form, setForm] = useState({
    name: "",
    class: "",
    rollNo: "",
    subjectName: "",
    date: "",
  });

  const [student, setStudent] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const createStudent = (e) => {
    e.preventDefault();
    setStudent([...student, form]);
    setForm({
      name: "",
      class: "",
      rollNo: "",
      subjectName: "",
      date: "",
    });
    setOpen(-500);
  };

  const editStudent = (index) => {
    setEditIndex(index);
    setForm(student[index]);
    setOpen(0);
  };

  const saveStudent = (e) => {
    e.preventDefault();

    const updatedStudent = [...student];

    updatedStudent[editIndex] = form;

    setStudent(updatedStudent);
    setForm({
      name: "",
      class: "",
      rollNo: "",
      subjectName: "",
      date: "",
    });
    setOpen(-500);
    setEditIndex(null);
  };

  const deleteStudent = (index) => {
    const cpyArr = [...student];
    console.log(cpyArr);
    cpyArr.slice(index, 1);
    console.log(cpyArr);
  };

  return (
    <>
      <div className="container">
        <div className="shadow px-5 py-2 z-1">
          <h1 className="text-center m-5 fw-bold">CRUD APP</h1>
          <button
            className="btn bg-dark bg-opacity-10 fw-bold text-dark-emphasis border border-dark"
            onClick={openDrawer}
          >
            <i className="bi bi-person"></i> New Student
          </button>
          <div className="container mt-5">
            <h2 className="text-center mb-4 text-uppercase fw-bolder">
              Student Information Table
            </h2>
            <table className="table table-bordered table-hover text-center">
              <thead className="thead-dark bg-dark text-light">
                <tr className="bg-dark text-light">
                  <th scope="col" className="bg-dark text-light">#</th>
                  <th scope="col" className="bg-dark text-light">Name</th>
                  <th scope="col" className="bg-dark text-light">Class</th>
                  <th scope="col" className="bg-dark text-light">Roll No</th>
                  <th scope="col" className="bg-dark text-light">Subject Name</th>
                  <th scope="col" className="bg-dark text-light">Date</th>
                  <th scope="col" className="bg-dark text-light">Actions</th>
                </tr>
              </thead>
              <tbody>
                {student.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.class}</td>
                    <td>{item.rollNo}</td>
                    <td>{item.subjectName}</td>
                    <td>{item.date}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm fw-bold me-2"
                        onClick={() => editStudent(index)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="btn btn-danger btn-sm fw-bold"
                        onClick={() => deleteStudent(index)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside
          className="position-fixed top-0 bg-dark h-100 shadow z-3"
          style={{ right: open, transition: "0.5s", width: "500px" }}
        >
          <div className="d-flex justify-content-between align-items-center p-4">
            <h2 className="text-light fw-bold mb-0">
              {editIndex === null ? "New Student" : "Edit Student"}
            </h2>
            <button
              className="btn btn-light rounded-circle fs-4"
              onClick={closeDrawer}
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
          <div className="card shadow-sm w-75 mx-auto my-4">
            <div className="card-header text-center bg-dark text-white">
              <h4>Student Information Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={editIndex === null ? createStudent : saveStudent}>
                {/* Name Field */}
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    value={form.name}
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleInput}
                    required
                  />
                </div>

                {/* Class Field */}
                <div className="mb-3">
                  <label className="form-label">Class</label>
                  <input
                    value={form.class}
                    type="text"
                    className="form-control"
                    name="class"
                    placeholder="Enter your class"
                    onChange={handleInput}
                    required
                  />
                </div>

                {/* Roll No Field */}
                <div className="mb-3">
                  <label className="form-label">Roll No</label>
                  <input
                    value={form.rollNo}
                    type="text"
                    className="form-control"
                    name="rollNo"
                    placeholder="Enter your roll no"
                    onChange={handleInput}
                    required
                  />
                </div>

                {/* Subject Name Field */}
                <div className="mb-3">
                  <label className="form-label">Subject Name</label>
                  <input
                    value={form.subjectName}
                    type="text"
                    className="form-control"
                    name="subjectName"
                    placeholder="Enter subject name"
                    onChange={handleInput}
                    required
                  />
                </div>

                {/* Date Field */}
                <div className="mb-3">
                  <label className="form-label">Date Of Birth</label>
                  <input
                    value={form.date}
                    type="date"
                    className="form-control"
                    name="date"
                    onChange={handleInput}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-dark w-100">
                  {editIndex === null ? "Submit" : "Save"}
                </button>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
