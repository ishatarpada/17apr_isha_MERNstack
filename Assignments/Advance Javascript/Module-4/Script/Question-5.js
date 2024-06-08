document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('productList');

  fetch('https://fakestoreapi.com/products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Create a new row for every 2 cards
      data.forEach((product, index) => {
        if (index % 2 === 0) {
          const row = document.createElement('div');
          row.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'g-4');
          productList.appendChild(row);
        }

        const productCard = document.createElement('div');
        productCard.classList.add('col');

        productCard.innerHTML = `
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${product.image}" class="img-fluid rounded-start" alt="${product.title}">
              </div>
              <div class="col-md-8">
                <div class="card-header">
                  <h5 class="card-title">${product.title}</h5>
                </div>
                <div class="card-body">
                  <p class="card-text">${product.description}</p>
                </div>
                <div class="card-footer">
                  <p class="card-text"><small class="text-body-secondary">Price: $${product.price}</small></p>
                </div>
              </div>
            </div>
          </div>
        `;

        const currentRow = productList.lastElementChild;
        currentRow.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
