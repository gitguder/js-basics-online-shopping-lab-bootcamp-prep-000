var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 +1);
  var obj = { itemName: item, itemPrice: price };
  cart.push(obj)

  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  let string = 'In your cart, you have ';
  const lastElem = cart[cart.length - 1]
  for (let element of cart) {
    if (element === lastElem) {
      string += `and ${element.itemName} at $${element.itemPrice}.`
    } else {
      string += `${element.itemName} at $${element.itemPrice}, `
    }
  }

  return string
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
