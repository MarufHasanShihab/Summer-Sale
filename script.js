const selectedIteams = document.getElementById("selected-iteams");
const coponInputField = document.getElementById("copon-input-field");
const applyButton = document.getElementById("apply-btn");
const totalPrice = document.getElementById("total-price");
const total = document.getElementById("total-amount");
const discount = document.getElementById("discount-amount");
const makePurchaseBtn = document.getElementById("make-purchase-btn");
const goHomeBtn = document.getElementById("go-home-btn")
function handleClick(target) {
  const cardTitle = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = cardTitle;
  selectedIteams.appendChild(li);
  selectedIteams.removeChild(selectedIteams.childNodes[3])
  totalPrice.innerText =
    parseFloat(totalPrice.innerText) +
    parseFloat(target.childNodes[3].childNodes[5].childNodes[0].innerText);
  if (totalPrice.innerText >= 200) {
    applyButton.removeAttribute("disabled");
    applyButton.style.cursor = "pointer";
  }
  if(totalPrice.innerText > 0){
    makePurchaseBtn.removeAttribute("disabled");
    makePurchaseBtn.style.cursor = "pointer";
  }
}

applyButton.addEventListener("click", function () {
  if (coponInputField.value === "SELL200") {
    calculateDiscount();
  } else {
    alert("Your Copnon Code Is Wrong!");
  }
});

goHomeBtn.addEventListener("click", function(){
  location.reload();
})


function calculateDiscount() {
  let discountPercentage = 20;
  // Calculate discounted price
  const discountAmount = (discountPercentage / 100) * totalPrice.innerText;
  // Calculate the discounted price
  const discountedPrice = totalPrice.innerText - discountAmount;
  // Display the discounted price
  discount.innerText = discountAmount.toFixed(1);
  total.innerText = discountedPrice;
}
