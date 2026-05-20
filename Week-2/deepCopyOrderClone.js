// Deep Copy Order Clone
// structuredClone() creates an independent copy, including nested objects and arrays.

const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};


const orderCopy = structuredClone(order);

// These changes affect only the cloned order.
orderCopy.customer.address.city = "Siddipet";
orderCopy.items[0].price = 80000;

console.log("Original Order:", order);
console.log("Deep Copy:", orderCopy);
