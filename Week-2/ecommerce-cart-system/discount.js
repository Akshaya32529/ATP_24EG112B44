// Available coupon rules for the shopping cart.
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};


// Validate whether a coupon can be applied to the current cart.
export function validateCoupon(code, cartTotal, cartItems) {

  const coupon = coupons[code];

  if (!coupon) {
    return { valid: false, message: "Invalid coupon" };
  }

  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: "Minimum amount not met" };
  }

  if (coupon.category) {

    // Category coupons require at least one matching item in the cart.
    const validCategory = cartItems.some(item =>
      item.category === coupon.category
    );

    if (!validCategory) {
      return { valid: false, message: "Coupon not valid for these items" };
    }
  }

  return { valid: true, message: "Coupon applied" };
}

// Calculate discount amount based on the coupon type.
export function calculateDiscount(code, cartTotal) {

  const coupon = coupons[code];

  if (coupon.type === "percentage") {
    return cartTotal * (coupon.value / 100);
  }

  return coupon.value;
}

// Apply a valid coupon and return the original total, discount, and final total.
export function applyDiscount(cartTotal, code, cartItems) {

  const validation = validateCoupon(code, cartTotal, cartItems);

  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }

  const discount = calculateDiscount(code, cartTotal);

  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: "Discount applied"
  };
}
