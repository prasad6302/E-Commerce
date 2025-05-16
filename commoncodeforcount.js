 document.addEventListener('DOMContentLoaded', () => {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
                document.getElementById('cart-count').textContent = cartCount;
            });