export default function App() {

  /* Array Destructing */
  const fruits = ["Mango", "Banana", "Orange"];

  const [firstFruit, secondFruit, thirdFruit] = fruits;

  console.log(firstFruit, secondFruit, thirdFruit); // "Mango" "Banana" "orange"


  /* Object Destructing */
  const person = { name: "John", age: 30, city: "New York" };
  const { name, age, city } = person;

  console.log(name, age, city); // "John" 30 new york


  /*  */

  const { A: { teacher, student }, B: { teacher: Bteacher, student: Bstudent } } = {
    A: {
      student: "50",
      teacher: "user1"
    }
    ,
    B: {
      student: "40",
      teacher: "user2"
    }
  }

  console.log(teacher, student);
  console.log(Bteacher, Bstudent);



  return (
    <>

      <h1>Hello</h1>

    </>
  )
}
