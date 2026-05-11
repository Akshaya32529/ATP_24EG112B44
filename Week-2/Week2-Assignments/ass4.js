/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/


    const cart=[
    {id:101,name:"laptop",price:60000,quantity:1,inStock:true},
    {id:102,name:"Mouse",price:800,quantity:2,inStock:true},
    {id:103,name:"Keyboard",price:1500,quantity:1,inStock: false},
    {id:104,name:"Monitor",price:12000,quantity:1,inStock:true},
];

//1
let y=cart.filter(cart=>cart.inStock);
console.log(y)

//2
let y1=cart.map(cart=>({
    name:cart.name,
    totalPrize:cart.price*cart.quantity
}))
console.log(y1)

//3
const GrandTotal=cart.reduce((total,item)=>total+(item.price*item.quantity),0);
console.log(GrandTotal)


//4
const y2=cart.find(item=>item.name==="Mouse")
console.log(y2)


//5
const y3=cart.findIndex(item=>item.name==="Keyboard");
console.log(y3)



    


