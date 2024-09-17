
/* 1st type handle http request
const test = () => {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });

} */

/*  // 2nd type handle http request
 const test = () => {
   fetch('https://jsonplaceholder.typicode.com/photos')
     .then((response) => {
       console.log("Success", response.json())
     })
     .catch((error) => {
       console.error("Error fetching users:", error);
     }); */

/* const [photos, setPhotos] = useState([]);

useEffect(() => {
  test();
}, []) */

// 3rd type handle http request
/* const test = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/photos?limit=10');
    const response = await fetch('https://fakestoreapi.com/products?limit=10');
    const data = await response.json();
    console.log(data);
    setPhotos(data);
  } catch (error) {
    console.log("error", error);
  }
} */