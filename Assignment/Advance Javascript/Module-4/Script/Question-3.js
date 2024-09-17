// Function to simulate an asynchronous operation that resolves after a delay
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      // Simulate success
      if (data) {
        resolve(data); // Resolve with data
      } else {
        reject(new Error('Data not found')); // Reject with an error
      }
    }, 2000); // Simulated delay of 2 seconds
  });
}

// Function to handle fetching data and updating the UI
function fetchDataAndUpdateUI() {
  const fetchDataBtn = document.getElementById('fetchDataBtn');
  const dataContainer = document.getElementById('dataContainer');

  fetchDataBtn.addEventListener('click', () => {
    fetchData()
      .then((data) => {
        // Update the HTML to display resolved data
        dataContainer.innerHTML = `<p>ID: ${data.id}, Name: ${data.name}</p>`;
        console.log('Data:', data);
      })
      .catch((error) => {
        // Update the HTML to display error message
        dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        console.error('Error:', error.message);
      })
      .finally(() => {
        console.log('Promise completed');
      });
  });
}

// Call the function to handle fetching data and updating the UI
fetchDataAndUpdateUI();
