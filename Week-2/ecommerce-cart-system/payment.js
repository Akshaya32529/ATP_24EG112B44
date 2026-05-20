import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Allow only supported payment methods.
export function validatePaymentMethod(method) {
  return ["card", "upi", "cod"].includes(method);
}

// Generate a simple order id using the current timestamp.
function generateOrderId() {
  return 'ORD' + Date.now();
}

// Process checkout, apply an optional coupon, update stock, and clear the cart.
export function processPayment(method, couponCode = null) {

  if (!validatePaymentMethod(method)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();

  let discount = 0;
  let total = subtotal;

  // Apply coupon discount only when a coupon code is provided.
  if (couponCode) {
    const result = applyDiscount(subtotal, couponCode, items);
    discount = result.discount;
    total = result.finalTotal;
  }

  // Reduce stock for every purchased item.
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  // Clear the cart once the order is completed.
  clearCart();

  
  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount,
    total,
    paymentMethod: method,
    status: "success",
    message: "Order placed successfully"
  };
}
