// Exam Portal Simulator
// Uses setTimeout() to show delayed steps after an exam is submitted.

console.log("Exam submitted successfully");

setTimeout(() => {
  console.log("Evaluating answers...");
}, 2000);

setTimeout(() => {
  console.log("Result: Pass");
}, 4000);
