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




/* IGNORE BELOW

updateSubtotal();
	calcTax();
	calcDiscount();
	calcFinalTotal();

function removeItem(currentRow, itemKey) {
	var parentNode = document.getElementById(currentRow);

	while (parentNode.hasChildNodes()) {
		console.log("child id: "+parentNode.firstChild.id)
		if (parentNode.firstChild.classList.contains("scQnty")) {
			var price = parentNode.firstChild.firstChild.innerHTML;
			console.log("first first: "+price.substr(1,price.length-4))
			calcSubtotal(price.substr(1, price.length-4), 0);
		}
		parentNode.removeChild(parentNode.firstChild);
	}

	

	cartSubtotal = 0;
	cartTax = 0;
	cartFinalTotal = 0;
}


//Removes elements from cart and local storage

var remove = document.getElementById("removeButton");

function deleteRow(remove) {
    var i = remove.parentNode.parentNode.rowIndex;
    console.log(i);
    removeItem(i);
    document.getElementById("cartItems").deleteRow(i);
}

function removeItem(i) {
    var updatedCart = addItem.splice(i-1, 1);
    localStorage.setItem(localStorageCount, JSON.stringify(addItem));
}

function calcSubtotal(variable, operator) {
	var num = parseInt(variable);

	if (operator == 1) {
		cartSubtotal += num;
	} else {
		cartSubtotal -= num;
	}

	updateSubtotal(cartSubtotal);
}

function createNewDiv(divClass, divId, divParentId) {
	var newDiv = document.createElement("div");
	newDiv.classList.add(divClass);
	newDiv.id = divId;
	document.getElementById(divParentId).appendChild(newDiv);
	return newDiv;
}

function productImage(parentId) {
	//var newDiv = addNewDiv("itemCheckoutPreview", "itemCheckoutPreviewImg", parentId);

	//create new img element 
	var newImg = document.createElement("img");
	newImg.classList.add("cartleftImg");
	newImg.src = "imgs/p1.png";
	//add new img to parent div
	//document.getElementById(newDiv.id).appendChild(newImg);
	document.getElementById(parentId).appendChild(newImg);
}

function createProductTitle(title, parentId) {
	var newTitle = document.createElement("h3");
	newTitle.id = "cart-product-title";
	newTitle.innerText += title;
	document.getElementById(parentId).appendChild(newTitle);
}

function createQtyGlazing(quantity, glazing, parentId) {
	//var newDiv = addNewDiv("item", "cartrtxt", parentId);
	var newProductQuantity = document.createElement("p");
	newProductQuantity.className += "bagLabels";
	newProductQuantity.innerText += ("Quantity " + quantity);
	var newProductGlazing = document.createElement("p");
	newProductGlazing.className += "bagLabels";
	newProductGlazing.innerText += ("Glazing: " + glazing);
	document.getElementById(parentId).appendChild(newProductQuantity);
	document.getElementById(parentId).appendChild(newProductGlazing);
}

function addProductPrice(price, quantity, parentId) {
	var newH3 = document.createElement("h3");
	newH3.id = "productPrice";
	newH3.className += "shoppingCartPrice";
	newH3.innerText += ("$" + (parseInt(price)*parseInt(quantity)) + ".00");
	document.getElementById(parentId).appendChild(newH3);
}

var totalPrice = 0
var totalTax = 0
var finalTotal = 0

for (var key in productItems) {
	item = productItems[key]

	totalPrice += item.qty
	totalTax += 0.07*item.qty

	document.getElementById("cardItems").innerHTML += `<div class = "cart-item">
			<p id = "bagitemnumber"><span id = "bag-quantity"></span> items</p>
						<img class = "cart-item-img" src = "images/blackberry-bag.png">
						<h3 class = "cart-product-title">Blackberry Cinnamon Roll</h3>
						<button onclick = "removeItem(this.id) class = "btn-remove" id = "removeButton${key}">Remove</button>
						<div> 
							<p class ="bagLabels">Quantity</p><span>${item.qty}</span>
						</div>
						<div> 
							<p class = "bagLabels">Glazing</p><span>${item.glazing}<span>
						</div>
						<p id = "bag-price-format">Price: $<span id= "bag-price-details">${item.qty}</span></p>
					</div>`
}

finalTotal = subtotal + tax 
document.getElementById("subtotal").innerHTML = '$'+ subtotal.toFixed(2).toString()
document.getElementById("tax").innerHTML = '$'+ totalTax.toFixed(2).toString()
document.getElementById("total").innerHTML = '$'+ finalTotal.toFixed(2).toString()


function removeItem (id) {
	toRemove = document.getElementById(id).parentNode
	toRemove.parentNode.removeChild(toRemove)

	idNum = id.split("removeButton")[1]
	item = productItems[idNum]

	totalPrice -= item.qty
	totalTax -= 0.07*item.qty
	finalTotal = subtotal + tax 

	document.getElementById("subtotal").innerHTML = '$'+ Math.abs(subtotal).toFixed(2).toString()
	document.getElementById("tax").innerHTML = '$'+ Math.abs(tax).toFixed(2).toString()
	document.getElementById("total").innerHTML = '$'+ Math.abs(finalTotal).toFixed(2).toString()

	delete cartItems[idNum]
	localStorage.removeItem("userItems")
	localStorage.setItem("userItems",JSON.stringify(cartItems));
}

function removeItem (id) {
	toRemove = document.getElementById(id).parentNode
	toRemove.parentNode.removeChild(toRemove)

	idNum = id.split("removeButton")[1]
	item = productItems[idNum]

	totalPrice -= item.qty
	totalTax -= 0.07*item.qty
	finalTotal = subtotal + tax 

	document.getElementById("subtotal").innerHTML = '$'+ Math.abs(subtotal).toFixed(2).toString()
	document.getElementById("tax").innerHTML = '$'+ Math.abs(tax).toFixed(2).toString()
	document.getElementById("total").innerHTML = '$'+ Math.abs(finalTotal).toFixed(2).toString()

	delete cartItems[idNum]
	localStorage.removeItem("userItems")
	localStorage.setItem("userItems",JSON.stringify(cartItems));
}
 */