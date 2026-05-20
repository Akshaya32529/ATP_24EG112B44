import { addTask, getAllTasks, completeTask } from './task.js';

// Add sample tasks with title, priority, and due date.
console.log(addTask("Study JavaScript", "high", "2026-04-01"));
console.log(addTask("Buy groceries", "medium", "2026-03-20"));


// Display all tasks currently stored in the task list.
console.log("\nAll Tasks:");
console.log(getAllTasks());

// Mark the task with id 1 as completed.
console.log("\nCompleting Task 1");
console.log(completeTask(1));

// Display the task list again after completing one task.
console.log("\nUpdated Tasks:");
console.log(getAllTasks());
