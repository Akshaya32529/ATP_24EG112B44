/* Assignment 1: Shopping Cart Summary
------------------------------------
Scenario: Build a shopping cart summary for an e-commerce website.

Test Data:
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
  1. Use filter() to get only in-stock products
  2. Use map() to create a new array with { name, totalPrice }
  3. Use reduce() to calculate grand total cart value
  4. Use find() to get details of "Mouse"
  5. Use findIndex() to find the position of "Keyboard"
*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true },
];

// 1. Filter the cart to include only products that are currently in stock
const inStockProducts = cart.filter(item => item.inStock);
console.log('In-stock products:', inStockProducts);

// 2. Create a new array containing product name and total price per product
const productSummary = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity,
}));
console.log('Product summary:', productSummary);

// 3. Calculate the grand total value of all cart items
const grandTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
console.log('Grand total cart value:', grandTotal);

// 4. Find the details of the product named "Mouse"
const mouseDetails = cart.find(item => item.name === "Mouse");
console.log('Details of Mouse:', mouseDetails);


// 5. Find the position of the product named "Keyboard"
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log('Index of Keyboard:', keyboardIndex);



    


