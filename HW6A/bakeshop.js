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

function priceCounter(){
	var price = document.getElementById("price-details").value;
	price == document.getElementById("quantity").value;
	console.log(document.getElementById("quantity").value)
}

function cartItems(title, quantity, glazing, price){
	this.title = document.getElementsByClassName("productTitle");
	this.quantity = document.getElementsByClassName("quantity").value;
	this.glazing = document.getElementsByClassName("glazing");
	this.price = document.getElementsByClassName("price").value;
}

let blackberryPurchase = new cartItems("Blackberry Cinnamon Bun", 3, "Sugar-milk", 1);
blackberryPurchase.price = function(){
	return this.price*this.quantity
};

function addToCartQuantityCount(){
	document.getElementByID()
}

//Create
localStorage.setItem("title", "quantity", "glazing", "price");

//Retrieve
localStorage.getItem("title", "quantity", "glazing", "price")

/*
function rotateArrow(x) {
  x.classList.toggle("downarrow");
}

$('input[type="submit"][value="Search"]').click(function() {
    sessionStorage.setItem('quantity', 'true');
});

var coll = document.getElementsByClassName("infodropdownbutton");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("infodropdownbutton");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


function quantitySelector() {
	document.getElementByClassName("quantity-border-click").style.display = 'block';
}

var addToCartButtons = document.getElementByClassName('add-to-cart-button');
console.log(addToCartButtons);

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