document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartContainer");
    let total = 0;
    
    if (cartItems.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }
    
    cartItems.forEach(item => {
        total += item.price * (item.quantity || 1);
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="item-info">
        <h3>${item.name}</h3>
        <p>€${item.price.toFixed(2)}</p>
        <p>quantity: ${item.quantity || 1}</p>
        </div>
    `;
        container.appendChild(itemDiv);
    });
    
    document.querySelector(".subtotal-amount").textContent = `€${total.toFixed(2)}`;
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.qty-btn.increase').forEach(btn => {
        btn.addEventListener('click', () => {
            const qtyElem = btn.previousElementSibling;
            let qty = parseInt(qtyElem.textContent);
            qtyElem.textContent = qty + 1;
            // Update localStorage / total here
        });
    });
    
    document.querySelectorAll('.qty-btn.decrease').forEach(btn => {
        btn.addEventListener('click', () => {
            const qtyElem = btn.nextElementSibling;
            let qty = parseInt(qtyElem.textContent);
            if (qty > 1) qtyElem.textContent = qty - 1;
            // Update localStorage / total here
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const cartItem = btn.closest('.cart-item');
            cartItem.remove();
            // Also remove from localStorage and update total
        });
    });
});