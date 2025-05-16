let allProducts = []; // store all products for reuse

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        allProducts = await response.json(); 
        displayProducts(allProducts);
    } catch {
        console.log("error");
    }
}

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
                <button class="addtocart">Add to Cart</button>
            </div>
        `;

        container.appendChild(box);
    });
}


// Add event listeners to filter buttons
document.querySelectorAll('.btn button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        if (category === 'all') {
            displayProducts(allProducts);
        } else {
            const filtered = allProducts.filter(p => p.category.toLowerCase() === category);
            displayProducts(filtered);
        }
    });
});

fetchProducts();






























