// Define the URL to fetch data from
const url = 'https://api.example.com/data';

// Make a GET request using Fetch
fetch(url)
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Do something with the parsed data
        console.log('Data:', data);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch Error:', error);
    });
