/* // Function to handle editing a student record
const editStudent = (index) => {
  setEditIndex(index); // Set the editIndex to the selected student's index
  setForm(student[index]); // Populate the form with the student's data
  setOpen(0); // Open the drawer for editing
};

// Function to handle saving the edited student record
const saveStudent = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Create a copy of the student array
  const updatedStudent = [...student];

  // Update the student record at the editIndex with the new form data
  updatedStudent[editIndex] = form;

  // Update the student state with the modified array
  setStudent(updatedStudent);
  setForm({
    name: "",
    class: "",
    rollNo: "",
    subjectName: "",
    date: "",
  }); // Reset the form fields
  setOpen(-500); // Close the drawer
  setEditIndex(null); // Reset editIndex
};
 */