
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var $window = $(window);
var $elem = $(".animation")

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animate")
    }
});

/* Checkout */
var item =0;
function nothing() {
  if (item == 0) {
    showElement("noItem");
    hideElement("has");
  } else {
   document.getElementById("noItem").style.visibility="hidden";
	 showElement("has");
   
  }
}

/* Cart Code */  
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {ready()}



function ready() {var removeCartItem = document.getElementsByClassName('remove')
console.log(removeCartItem)
for (var i = 0; i < removeCartItem.length; i++) {var button = removeCartItem[i]
button.addEventListener('click', function(event) {var buttonclicked = event.target
buttonclicked.parentElement.parentElement.remove() 
updateCartTotal() })}}

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal () {
var cartItemContainer = document.getElementsByClassName('cart-item')[0]
var cartRows = cartItemContainer.getElementsByClassName('cart-row')
for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName(cart-price)[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value  
    total = total + (price * quantity) 
    
} 
    total = Math.round(total * 100) / 100
document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total}
