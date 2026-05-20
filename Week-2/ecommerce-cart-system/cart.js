import { getProductById, checkStock } from './product.js';

// Stores cart items as product id and quantity pairs.
let cartItems = [];

// Add a product to the cart after validating product existence and stock.
export function addToCart(productId, quantity) {

  const product = getProductById(productId);
  if (!product) return "Product not found";

  if (!checkStock(productId, quantity)) return "Not enough stock";

  const item = cartItems.find(i => i.productId === productId);

  // If the product already exists in the cart, increase its quantity.
  if (item) {
    item.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return "Item added to cart";
}

// Remove a product completely from the cart.
export function removeFromCart(productId) {
  cartItems = cartItems.filter(i => i.productId !== productId);
  return "Item removed";
}

// Update the quantity of an existing cart item.
export function updateQuantity(productId, newQuantity) {

  if (!checkStock(productId, newQuantity)) {
    return "Not enough stock";
  }

  const item = cartItems.find(i => i.productId === productId);

  if (!item) return "Item not in cart";

  item.quantity = newQuantity;

  return "Quantity updated";
}

// Return cart items with full product details and selected quantities.
export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity
    };
  });
}

// Calculate the total price of all items in the cart.
export function getCartTotal() {

  return cartItems.reduce((total, item) => {

    const product = getProductById(item.productId);

    return total + product.price * item.quantity;

  }, 0);
}


// Empty the cart after checkout.
export function clearCart() {
  cartItems = [];
}
