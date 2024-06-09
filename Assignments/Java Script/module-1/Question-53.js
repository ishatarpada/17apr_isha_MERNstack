// Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,
// mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

function getCurrentDate(format) {
  const currentDate = new Date();
  let month = (currentDate.getMonth() + 1).toString();
  let day = currentDate.getDate().toString();
  const year = currentDate.getFullYear();

  switch (format) {
    case 'mm-dd-yyyy':
      return `${month}-${day}-${year}`;
    case 'mm/dd/yyyy':
      return `${month}/${day}/${year}`;
    case 'dd-mm-yyyy':
      return `${day}-${month}-${year}`;
    case 'dd/mm/yyyy':
      return `${day}/${month}/${year}`;
    default:
      return 'Invalid format';
  }
}

// Example usage:
console.log(getCurrentDate('mm-dd-yyyy')); // Output: mm-dd-yyyy format
console.log(getCurrentDate('mm/dd/yyyy')); // Output: mm/dd/yyyy format
console.log(getCurrentDate('dd-mm-yyyy')); // Output: dd-mm-yyyy format
console.log(getCurrentDate('dd/mm/yyyy')); // Output: dd/mm/yyyy format
