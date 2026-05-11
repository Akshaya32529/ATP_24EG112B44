/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/

 const courses=["javascript","react","node","mongodb","express"]
//1
const a=courses.filter(s=>s.length>5)
console.log(a)
//2
const b=courses.map(courses=>courses.toUpperCase());
console.log(b)

//3
const str = courses.reduce((acc, course, index) => {
  return index === 0 ? course : `${acc} | ${course}`;
}, "");
console.log(str)

//4
const d=courses.find(s=>s==="react")
console.log(d)
//5
const e=courses.findIndex(s=>s==="node")
console.log(e)