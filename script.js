    let selectedBundle = 0;
let selectedFlavors = [];

const flavors = ["Classic","Milky","Chocolate","Ube","Mallows","Sprinkles"];

function openPopup() {
  document.getElementById("order-popup").style.display = "flex";

  let container = document.getElementById("popup-flavors");
  container.innerHTML = "";

  flavors.forEach(f => {
    let btn = document.createElement("button");
    btn.innerText = f;
    btn.onclick = () => selectFlavor(f, btn);
    container.appendChild(btn);
  });
}

function closePopup() {
  document.getElementById("order-popup").style.display = "none";
  selectedFlavors = [];
  selectedBundle = 0;
}

function selectBundle(count) {
  selectedBundle = count;
  updateSelection();
}

function selectFlavor(flavor, btn) {
  if (!selectedBundle) {
    alert("Select bundle first!");
    return;
  }

  if (selectedFlavors.length < selectedBundle) {
    selectedFlavors.push(flavor);
    btn.style.background = "#f7a8a8";
  }

  updateSelection();
}

function updateSelection() {
  document.getElementById("selection-count").innerText =
    `(${selectedFlavors.length}/${selectedBundle})`;

  let confirmBtn = document.getElementById("confirm-btn");

  if (
    selectedFlavors.length === selectedBundle &&
    document.getElementById("address").value &&
    document.getElementById("payment").value
  ) {
    confirmBtn.disabled = false;
  } else {
    confirmBtn.disabled = true;
  }
}

function confirmOrder() {
  alert("Order placed! We will contact you (˶ˆᗜˆ˵)♡");
  closePopup();
}

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
