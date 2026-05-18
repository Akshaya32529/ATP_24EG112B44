/* Assignment 3: Employee Payroll Processor
-----------------------------------------
Scenario: Build a salary processing module for a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
  1. filter() employees from IT department
  2. map() to add netSalary = salary + 10% bonus
  3. reduce() to calculate total salary payout
  4. find() employee with salary 30000
  5. findIndex() of employee "Neha"
*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" },
];

// 1. Filter employees who work in the IT department
const itEmployees = employees.filter(employee => employee.department === "IT");
console.log('IT department employees:', itEmployees);

// 2. Add netSalary for each employee (salary + 10% bonus)
const employeesWithBonus = employees.map(employee => {
  const netSalary = employee.salary + employee.salary * 0.10;
  return { ...employee, netSalary };
});
console.log('Employees with net salary:', employeesWithBonus);

// 3. Calculate the total salary payout for all employees
const totalSalaryPayout = employees.reduce((total, employee) => total + employee.salary, 0);
console.log('Total salary payout:', totalSalaryPayout);

// 4. Find the employee whose salary is exactly 30000
const employeeWith30000Salary = employees.find(employee => employee.salary === 30000);
console.log('Employee with salary 30000:', employeeWith30000Salary);

// 5. Find the index of the employee named "Neha"
const nehaIndex = employees.findIndex(employee => employee.name === "Neha");
console.log('Index of Neha:', nehaIndex);
