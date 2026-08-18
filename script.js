let selectedBundle = 0;
let selectedFlavors = [];

const flavors = ["Classic","Milky","Chocolate","Ube","Mallows","Sprinkles"];

function openPopup() {
  document.getElementById("order-popup").style.display = "flex";

  let container = document.getElementById("popup-flavors");
  container.innerHTML = "";

  selectedFlavors = [];
  selectedBundle = 0;

  document.getElementById("selection-count").innerText = "(0/0)";
  document.getElementById("confirm-btn").disabled = true;

  flavors.forEach(f => {
    let btn = document.createElement("button");
    btn.innerText = f;

   btn.onclick = () => {
  if (!selectedBundle) {
    alert("Choose a sweet box first");
    return;
  }

  if (selectedFlavors.length < selectedBundle) {
    selectedFlavors.push(f);
    btn.classList.add("selected");
  }

  updateSelection(); // KEEP THIS
};

    container.appendChild(btn);
  });
}

function closePopup() {
  document.getElementById("order-popup").style.display = "none";
}

function selectBundle(count) {
  selectedBundle = count;
  updateSelection();
}

function updateSelection() {
  document.getElementById("selection-count").innerText =
    `(${selectedFlavors.length}/${selectedBundle})`;

  let address = document.getElementById("address").value.trim();
  let payment = document.getElementById("payment").value;

  let btn = document.getElementById("confirm-btn");

  const isComplete =
    selectedBundle > 0 &&
    selectedFlavors.length === selectedBundle &&
    address.length > 0 &&
    payment !== "";

  btn.disabled = !isComplete;
}

function confirmOrder() {
  alert("Order placed! We will contact you (˶˃ ᵕ ˂˶) .ᐟ.ᐟ");

  closePopup();
}
