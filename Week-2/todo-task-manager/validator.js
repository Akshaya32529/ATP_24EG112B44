//modules (import,export) 
//1

// Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  if (!title || title.trim().length < 3) {
    return { valid: false, message: "Title must be at least 3 characters" };
  }
  return { valid: true };
}

// Validate priority
export function validatePriority(priority) {
  const allowed = ["low", "medium", "high"];
  if (!allowed.includes(priority)) {
    return { valid: false, message: "Priority must be low, medium, or high" };
  }
  return { valid: true };
}

// Validate due date (future date)
export function validateDueDate(date) {
  const today = new Date();
  const due = new Date(date);

  if (due <= today) {
    return { valid: false, message: "Due date must be in the future" };
  }
  return { valid: true };
}