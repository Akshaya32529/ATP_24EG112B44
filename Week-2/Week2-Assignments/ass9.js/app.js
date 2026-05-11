import { addTask, getAllTasks, completeTask } from './task.js';
console.log(addTask("Study JavaScript", "high", "2026-04-01"));
console.log(addTask("Buy groceries", "medium", "2026-03-20"));
console.log("\nAll Tasks:");
console.log(getAllTasks());
console.log("\nCompleting Task 1");
console.log(completeTask(1));
console.log("\nUpdated Tasks:");
console.log(getAllTasks());