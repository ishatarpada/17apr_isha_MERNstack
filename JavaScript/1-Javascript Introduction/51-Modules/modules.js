let ans = document.getElementById("demo");

// function message() {
//     return "hello , good morning";
// }


const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
};

export default message;

const name = "Ishaa";
const age = 21;

export {name, age};