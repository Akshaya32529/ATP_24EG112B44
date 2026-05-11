/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/

    const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];


//1
const itEmployees=employees.filter(e=>e.department==="IT")
console.log(itEmployees)


//2
const a=employees.map(e=>{
    let netSalary;
    netSalary=e.salary+(e.salary*0.10)
    return {...e,netSalary}
})
console.log(a)

//3
const total=employees.reduce((sum,emp)=>sum+emp.salary,0);
console.log(total);

//4
const a2=employees.find(s=>s.salary===30000)
console.log(a2)



//5
const a3=employees.findIndex(s=>s.name==="Neha")
console.log(a3)