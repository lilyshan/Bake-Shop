//Global Variables
var localStorageCount = 0;
var cartSubtotal = 0;
var cartTax = 0;
var cartFinalTotal = 0;
var item = "";
var title = "";
var quantity = "";
var glazing = "";
var img = "";
var addItem = "";

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

//Changes bag quantity and price when quantity is selected
function priceBagQuantityCounter(){
	var bagQuantity = document.getElementById("bag-quantity");
	bagQuantity.innerText=  document.getElementById("quantity").value;
	var priceCount = document.getElementById("bag-price-details");
	priceCount.innerText=  document.getElementById("quantity").value;
}

function items(title, quantity, glazing, price, img){
	this.title = title;
	this.quantity = quantity;
	this.glazing = glazing;
	this.price = price;
	this.img = img;
}

//Add to Cart Functionality
function addToCart() {
	var quantityCount = document.getElementById("quantityCount");
	quantityCount.innerText = document.getElementById("quantity").value;
	document.getElementById("quantityCount").style.visibility = "visible";


	title = document.getElementsByClassName("productTitle");
	quantity = document.getElementById("quantity").value;
	glazing = document.getElementById("glazing").value;
	price = document.getElementById("quantity").value;
	img = "images/blackberry-bag.png"
	addItem = new items(title, quantity, glazing, price, img);

	window.localStorage.setItem(localStorageCount, JSON.stringify(addItem));
	// localStorageCount += 1;
}

//Populates shopping bag page with cart details 
function onLoad() {
	var lsc = window.localStorage.length;
	console.log("lsc: "+lsc)
	//check if storage is empty
	for (i = 0; i < lsc; i++) {
		item = JSON.parse(window.localStorage.getItem(i));
		var itemKey = window.localStorage.key(i);
		if (item === null) {
			break;
		} else {
			var quantityCount = document.getElementById("quantityCount");
			quantityCount.innerText = item.quantity;
			document.getElementById("quantityCount").style.visibility = "visible";

			document.getElementById("bagTotalItems").innerHTML += item.quantity
			document.getElementById("cartItems").innerHTML += `<div class = "cart-item">
						<img class = "cart-item-img" src = "images/blackberry-bag.png">
						<h3 class = "cart-product-title">Blackberry Cinnamon Roll</h3>
						<a id = "editButton" href = "blackberry.html">Edit</a>
						<button  class = "btn-remove" id = "removeButton" onclick = "removeItem()">Remove</button>
						<div> 
							<p class ="bagLabels">Quantity: <span id="bagItemQuantity"></span></p>
						</div>
						<div> 
							<p class = "bagLabels">Glazing: <span id = "bagItemGlazing"><span></p>
						</div>
						<p id = "bag-price-format">Price: $<span id= "bagPriceDetails"></span></p>
					</div>`;

			document.getElementById("bagItemQuantity").innerHTML += item.quantity;
			document.getElementById("bagItemGlazing").innerHTML += item.glazing;
			document.getElementById("bagPriceDetails").innerHTML += item.price;

			updateSubtotal();
			calcTax();
			calcDiscount();
			calcFinalTotal();
		}
	}
}

//Maintains cart quantity in top corner no matter what page you navigate to
function onLoadProducts() {
	var lsc = window.localStorage.length;
	for (i = 0; i < lsc; i++) {
		item = JSON.parse(window.localStorage.getItem(i));
		var itemKey = window.localStorage.key(i);
		if (item === null) {
			break;
		} else {
			var quantityCount = document.getElementById("quantityCount");
			quantityCount.innerText = item.quantity;
			document.getElementById("quantityCount").style.visibility = "visible";
		}
	}
}

//Order Summary Calculations
function updateSubtotal() {
	cartSubtotal = item.quantity;
	document.getElementById("subtotal").innerHTML = "$" + item.quantity + ".00";
}

function calcTax() {
	cartTax = (0.15*item.quantity).toFixed(2);
	document.getElementById("tax").innerHTML = "$" + cartTax;
}

function calcDiscount(){
	document.getElementById("discount").innerHTML = "$" + 0 + ".00";
}

function calcFinalTotal() {
	cartFinalTotal = document.getElementById("total").innerHTML = (parseInt(cartSubtotal) + parseFloat(cartTax)).toFixed(2);
}


//Remove Cart Items
function removeItem () {
	var parentNode = document.getElementById("cartItems");

	while (parentNode.hasChildNodes()) {
		if (parentNode.firstChild.classList.contains("cart-item")) {
			localStorage.clear();
		}
		parentNode.removeChild(parentNode.firstChild);
		window.localStorage.removeItem(addItem);
	}	

	document.getElementById("subtotal").innerHTML = "";
	document.getElementById("tax").innerHTML = "";
	document.getElementById("discount").innerHTML = "";
	document.getElementById("total").innerHTML = "";
	document.getElementById("quantityCount").innerHTML = "";
	document.getElementById("bagTotalItems").innerHTML = "";

}
