
    document.addEventListener('DOMContentLoaded', function () {
        let cartCount = 0;
        const cartCountElement = document.getElementById('cart-count');
        const container = document.getElementById('products-container');

        // Use event delegation to catch dynamic buttons
        container.addEventListener('click', function (e) {
            if (e.target && e.target.classList.contains('addtocart')) {
                cartCount++;
                cartCountElement.textContent = cartCount;
            }
        });
    });
    function displayProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = "";
    products.forEach(product => {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <br>
            <h3>${product.title.slice(0, 15)}...</h3>
            <p>${product.description.slice(0, 110)}...</p>
            <hr>
            <p>$${product.price}</p>
            <hr>
            <div class="addcart">
                <button class="details">Details</button>
                <button class="addtocart"
                    data-id="${product.id}"
                    data-title="${product.title}"
                    data-image="${product.image}"
                    data-price="${product.price}">Add to Cart</button>
            </div>
        `;
        container.appendChild(box);
    });
}






