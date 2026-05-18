/* Assignment 2: Online Course Name Processor
------------------------------------------
Scenario: Prepare a course list for display on a website.

Tasks:
  1. filter() courses with name length > 5
  2. map() convert course names to uppercase
  3. reduce() generate a single string:
       "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
  4. find() the course "react"
  5. findIndex() of "node"
*/

const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. Filter courses whose name length is greater than 5
const longCourses = courses.filter(course => course.length > 5);
console.log('Courses with name length > 5:', longCourses);

// 2. Convert course names to uppercase
const upperCaseCourses = courses.map(course => course.toUpperCase());
console.log('Courses in uppercase:', upperCaseCourses);

// 3. Join all course names into a single string separated by " | "
const courseListString = courses.reduce((acc, course, index) => {
  return index === 0 ? course : `${acc} | ${course}`;
}, "");
console.log('Course list string:', courseListString);

// 4. Find the course named "react"
const reactCourse = courses.find(course => course === "react");
console.log('Found course:', reactCourse);

// 5. Find the index of the course "node"
const nodeIndex = courses.findIndex(course => course === "node");
console.log('Index of "node":', nodeIndex);
