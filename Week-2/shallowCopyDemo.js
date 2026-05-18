// Shallow Copy Demo
// A shallow copy duplicates the outer object, but nested objects still share memory.

const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

let userCopy = { ...user };

// Changing a top-level property affects only the copied object.
userCopy.name = "Aksh";

// Changing a nested property affects both objects because preferences is shared.
userCopy.preferences.theme = "black";

console.log("Original User:", user);
console.log("Shallow Copy:", userCopy);
