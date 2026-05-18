import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];

// Add new task
export function addTask(title, priority, dueDate) {

  const titleCheck = validateTitle(title);
  if (!titleCheck.valid) return titleCheck.message;

  const priorityCheck = validatePriority(priority);
  if (!priorityCheck.valid) return priorityCheck.message;

  const dateCheck = validateDueDate(dueDate);
  if (!dateCheck.valid) return dateCheck.message;

  const newTask = {
    id: tasks.length + 1,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(newTask);

  return "Task added successfully";
}

// Get all tasks
export function getAllTasks() {
  return tasks;
}

// Mark task complete
export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (!task) return "Task not found";

  task.completed = true;

  return "Task marked as complete";
}