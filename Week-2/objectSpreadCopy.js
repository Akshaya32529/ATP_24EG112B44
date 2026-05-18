// Object Spread Copy
// Copies an existing object and adds a new property without changing the original.

let user = {
  name: "Ravi",
  city: "Hyderabad"
};

let updatedUser = { ...user, age: 25 };

console.log("Original User:", user);
console.log("Updated User:", updatedUser);
