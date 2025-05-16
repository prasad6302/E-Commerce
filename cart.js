
document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemList = document.querySelector('.itemlist');
    const orderSummary = document.querySelector('.ordersummary');

    // Create empty message container
    const emptyMessage = document.createElement('div');
    emptyMessage.classList.add('empty-message');
    emptyMessage.innerHTML = `
        <div  class="empty" >
            <h2 class="empty">Your Cart is Empty</h2>
            <button onclick="window.location.href='home.html'" class="continueshopping">
                <i class="fa fa-arrow-left"></i> Continue Shopping
            </button>
        </div>
    `;
    document.querySelector('.cart').appendChild(emptyMessage);

    function updateCartUI() {
        if (cartItems.length === 0) {
            itemList.style.display = 'none';
            orderSummary.style.display = 'none';
            emptyMessage.style.display = 'block';
        } else {
            itemList.style.display = 'block';
            orderSummary.style.display = 'block';
            emptyMessage.style.display = 'none';
        }
    }

    // Initial render check
    updateCartUI();

    const summaryProducts = document.querySelector('.products p:first-child');
    const summaryAmount = document.querySelector('.products p:last-child');
    const totalAmount = document.querySelector('.total p:last-child');

    let total = 0;
    itemList.innerHTML = `<div class="itemback"><p>Item List</p></div><hr>`;

    cartItems.forEach((item, index) => {
        const itemHTML = `
            <div class="details" data-index="${index}">
                <img src="${item.image}" alt="${item.title}">
                <p>${item.title}</p>
                <div class="itemquantityandrate">
                    <div class="increment">
                        <button class="minus">-</button>
                        <p class="quantity">${item.quantity}</p>
                        <button class="plus">+</button>
                    </div>
                    <div class="rate">
                        <p>${item.quantity} x $${item.price}</p>
                    </div>
                </div>
            </div>
            <hr>
        `;
        itemList.innerHTML += itemHTML;
        total += item.quantity * item.price;
    });


});

