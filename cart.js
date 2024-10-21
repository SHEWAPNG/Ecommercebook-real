<script>
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Clear previous items
        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;

                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <span>${item.title}</span>
                        <span>$${item.price.toFixed(2)}</span>
                        <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                        <span>$${itemTotal.toFixed(2)}</span>
                        <button onclick="removeFromCart(${index})">Remove</button>
                    </div>
                `;
            });
        }

        document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
        const shipping = 5.00; // Flat shipping fee
        const tax = 0.00; // Placeholder for tax
        const total = subtotal + shipping + tax;
        document.getElementById('cart-shipping').innerText = `$${shipping.toFixed(2)}`;
        document.getElementById('cart-tax').innerText = `$${tax.toFixed(2)}`;
        document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
    }

    function updateQuantity(index, quantity) {
        if (quantity < 1) {
            quantity = 1; // Ensure minimum quantity is 1
        }
        cart[index].quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart(); // Update cart display
    }

    function removeFromCart(index) {
        cart.splice(index, 1); // Remove item from cart
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart(); // Update cart display
    }

    function checkout() {
        // Placeholder for checkout logic
        alert('Proceeding to checkout...');
        // Redirect to payment page or implement payment logic
    }

    // Display the cart on page load
    window.onload = displayCart;
</script>
