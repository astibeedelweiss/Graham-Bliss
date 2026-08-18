function orderNow() {
  alert("Thank you for ordering! (˶ˆᗜˆ˵)♡ Please message 0918 529 1039");
}

let cartItems = [];
let cartCount = 0;

function addToCart(flavor) {
  cartItems.push(flavor);
  cartCount++;

  updateCartUI();

  alert(flavor + " ˚.⋆꒰১ added to cart ໒꒱⋆.˚");
}

function updateCartUI() {
  document.getElementById("cart-count").innerText = cartCount;

  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  cartItems.forEach((item, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${item}
      <button onclick="removeFromCart(${index})">❌</button>
    `;

    list.appendChild(li);
  });

  document.getElementById("cart-total").innerText =
    "Total Items: " + cartCount;
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  cartCount--;

  updateCartUI();
}

function toggleCart() {
  let panel = document.getElementById("cart-panel");

  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
