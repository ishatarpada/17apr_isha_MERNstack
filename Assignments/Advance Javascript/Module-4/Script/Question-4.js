function fetchDataFromAPI() {
  fetch('https://fakestoreapi.com/products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Update the HTML to display the fetched data
      const dataContainer = document.getElementById('dataContainer');
      dataContainer.innerHTML = ''; // Clear previous data
      data.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<p>ID: ${product.id}, Name: ${product.title}, Price: $${product.price}</p>`;
        dataContainer.appendChild(productElement);
      });
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const fetchDataBtn = document.getElementById('fetchDataBtn');
  fetchDataBtn.addEventListener('click', fetchDataFromAPI);
});
