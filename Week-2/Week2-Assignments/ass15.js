//deep copy
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

const orderCopy=structuredClone(order)
orderCopy.customer.address.city="siddipet"
orderCopy.items[0].price=80000
console.log(order)
console.log(orderCopy)