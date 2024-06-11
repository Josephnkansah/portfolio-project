	// JavaScript for the E-Commerce Website
 
// Add an item to the cart
function addToCart(product) {
    // Get the product's info
    const productInfo = {
      name: product.querySelector('h3').textContent,
      price: parseFloat(product.querySelector('p').textContent),
      image: product.querySelector('img').src
    };
   
    // Add the product to the cart
    const cart = document.querySelector('.cart ul');
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <img src="${image/sincerely-media-zw8t5aMmJQQ-unsplash.jpg}" alt="${productInfo.name}">
      <h3>${productInfo.name}</h3>
      <p>$${productInfo.price}</p>
    `;
    cart.appendChild(cartItem);
   
    // Update the cart total
    const cartTotal = document.querySelector('.cart p');
    cartTotal.textContent = `Total: $${(parseFloat(cartTotal.textContent.slice(7)) + productInfo.price).toFixed(2)}`;
  }
   
  // Get all the product elements
  const products = document.querySelectorAll('.products li');
   
  // Add an event listener for the Add to Cart button on each product
  products.forEach(product => {
    const button = product.querySelector('button');
    button.addEventListener('click', () => {
      addToCart(product);
    });
  });