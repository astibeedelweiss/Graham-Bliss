function orderNow() {
  alert("Thank you for ordering (｡•ᴗ•｡)♡ Please message 0918 529 1039");
}

let cartItems = 0;

function addToCart(flavor) {
  cartItems++;

  document.getElementById("cart-count").innerText =
    "🛒 Items: " + cartItems;

  alert(flavor + " added to cart (｡•ᴗ-)✧");
}
