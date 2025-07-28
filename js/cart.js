window.addEventListener("DOMContentLoaded", renderCart);
function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartContainer.innerHTML = `<p class="empty-cart">Your cart is empty!</p>`;
    document.getElementById("subtotal").textContent = "0";
    document.getElementById("total").textContent = "0";
    return;
  }

  let subtotal = 0;

  cartItems.forEach((item, index) => {
    const itemBox = document.createElement("div");
    itemBox.className = "cart-item";
    itemBox.innerHTML = `
      <img src="${item.image}" width="80" />
      <div>
        <h3>${item.name}</h3>
        <p class="items-price">$${item.price}</p>
        <div class= "items-controls-section">
          <button onclick="changeQuantity(${index}, -1)" class="items-control">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${index}, 1)" class="items-control">+</button>
        <button onclick="removeItem(${index})" class="items-remove-btn">Remove</button>
      </div>
    `;
    cartContainer.appendChild(itemBox);
    subtotal += item.price * item.quantity;
  });

  document.getElementById("subtotal").textContent = subtotal;
  document.getElementById("total").textContent = subtotal;
}

function changeQuantity(index, updatedIndex) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems[index].quantity += updatedIndex;
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCart();
}

function removeItem(index) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCart();
}

function checkout() {
  toastr.success("Your Order placed successfully!");
  localStorage.removeItem("cart");
  renderCart();
}
window.onload = renderCart;
