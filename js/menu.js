const filterButtons = document.querySelectorAll(".filter-buttons button");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.textContent;

    menuItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");

      if (category === "All" || itemCategory === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
function addToCart(name, image, price) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cartItems.find((item) => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({ name, image, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));
  toastr.success("Added to cart!");
}
