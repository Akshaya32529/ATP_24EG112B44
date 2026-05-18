// Product database used by the shopping cart system.
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

// Find a single product using its unique id.
export function getProductById(id) {
  return products.find(p => p.id === id);
}

// Return the full product list.
export function getAllProducts() {
  return products;
}

// Filter products that belong to the selected category.
export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

// Search products by matching text in the product name.
export function searchProducts(query) {
  return products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Check whether the requested quantity is available in stock.
export function checkStock(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return false;
  return product.stock >= quantity;
}

// Reduce product stock after a successful order.
export function reduceStock(productId, quantity) {
  const product = getProductById(productId);
  if (product) {
    product.stock -= quantity;
  }
}
