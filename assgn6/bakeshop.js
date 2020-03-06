//Collapsible Dropdown in Product Details Page 
var acc = document.getElementsByClassName("infoDropdownButton");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Changes price when quantity is selected 
function priceCounter(){
	var price = document.getElementById("price-details");
	price.innerText=  document.getElementById("quantity").value;
}

//Number of cart items appears in top corner
function addToCartQuantityCount(){
	var quantityCount = document.getElementById("quantityCount");
	quantityCount.innerText = document.getElementById("quantity").value;
	document.getElementById("quantityCount").style.visibility = "visible";
}

//Changes bag quantity and price when quantity is selected
function priceBagQuantityCounter(){
	var bagQuantity = document.getElementById("bag-quantity");
	bagQuantity.innerText=  document.getElementById("quantity").value;
	var priceCount = document.getElementById("bag-price-details");
	priceCount.innerText=  document.getElementById("quantity").value;
}

function items(title, quantity, glazing, price){
	this.title = document.getElementsByClassName("productTitle");
	this.quantity = document.getElementById("quantity").value;
	this.glazing = document.getElementsByClassName("glazing");
	this.price = document.getElementById("quantity").value;
}

//Store
localStorage.setItem("title", "quantity", "glazing", "price");

//Retrieve
localStorage.getItem("title", "quantity", "glazing", "price")


/* IGNORE BELOW

let blackberryPurchase = new cartItems("Blackberry Cinnamon Bun", 3, "Sugar-milk", 1);


var removeCartItemButtons = document.getElementByClassName('btn-remove')
for (var i = 0; i < removeCartItemButtons.length; i++) {
	var button = removeCartItemButtons[i];
	button.addEventListener('click', removeCartItem(event))
		var buttonClicked = event.target;
		buttonClicked.parentElement.parentElement.remove()
		updateCartTotal()
}

function updateCartTotal() {
	var cartItemsContainer = document.getElementByClassName('cart-items') [0]
	var cartRows = cartItemsContainer.getElementByClassName('cart-row')
	for var i = 0; i < removeCartItemButtons.length, i++ {
		var cartRow = cartRows[i] 
		var priceElement = cartRow.getElementByClassName('cart-price')[0]
		var quantityElement = cartRow.getElementByClassName('cart-quantity-input')[0]
		console.log(priceElement, quantityElement)
	}
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
 */