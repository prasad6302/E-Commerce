
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
// Add to Cart handler using event delegation
document.getElementById('products-container').addEventListener('click', function (e) {
    if (e.target.classList.contains('addtocart')) {
        const product = {
            id: e.target.getAttribute('data-id'),
            title: e.target.getAttribute('data-title'),
            image: e.target.getAttribute('data-image'),
            price: parseFloat(e.target.getAttribute('data-price')),
            quantity: 1
        };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        // Update cart count
        document.getElementById('cart-count').textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    }
})


function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.textContent = count;
    }
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}





