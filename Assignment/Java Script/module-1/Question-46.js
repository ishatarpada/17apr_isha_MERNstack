function arrayToCSV(arr) {
  // Escape double quotes and add double quotes around fields containing commas or double quotes
  function escapeCSV(value) {
      if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
          return `"${value.replace(/"/g, '""')}"`; // Escape double quotes by doubling them
      }
      return value;
  }

  // Convert each row of the array to a CSV line
  let csvLines = arr.map(row => row.map(escapeCSV).join(',')).join('\n');

  return csvLines;
}

// Example array
let data = [
  ['Name', 'Age', 'Department'],
  ['Alice', 30, 'HR'],
  ['Bob', 25, 'IT'],
  ['Charlie', 35, 'Finance']
];

let csvString = arrayToCSV(data);
console.log(csvString);
