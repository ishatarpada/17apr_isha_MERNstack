/* // Initialize state for form inputs with default empty values
const [form, setForm] = useState({
  name: "",
  class: "",
  rollNo: "",
  subjectName: "",
  date: "",
});

// Initialize state for storing the list of students as an empty array
const [student, setStudent] = useState([]);
const [editIndex, setEditIndex] = useState(null);

// Function to handle input changes and update the form state
const handleInput = (e) => {
  const { value, name } = e.target; // Destructure value and name from the event target
  setForm({
    ...form,
    [name]: value,
  });
};

// Function to handle form submission and create a new student record
const createStudent = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  setStudent([...student, form]); // Add the current form data to the student array
  setForm({
    name: "",
    class: "",
    rollNo: "",
    subjectName: "",
    date: "",
  }); // Reset the form fields
  setOpen(-500); // Close the drawer
}; */