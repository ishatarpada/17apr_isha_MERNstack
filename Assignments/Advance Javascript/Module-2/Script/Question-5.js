// Button click event listener to sum the properties of the salaries object
document.getElementById('btn').addEventListener('click', function () {
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
    return sum;
  }

  let totalSalaries = sumSalaries(salaries);
  document.getElementById('ans4').textContent = `Salaries: ${JSON.stringify(salaries)}\nTotal Salaries: ${totalSalaries}`;
});
