/* Assignment 2: Student Performance Dashboard
--------------------------------------------
Scenario: Work on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];


Tasks:
  1. filter() students who passed (marks ≥ 40)
  2. map() to add a grade field
       ≥90 → A
       ≥75 → B
       ≥60 → C
       else → D
  3. reduce() to calculate average marks
  4. find() the student who scored 92
  5. findIndex() of student "Kiran"
*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 },
];

// 1. Filter only students who passed the exam (marks >= 40)
const passingStudents = students.filter(student => student.marks >= 40);
console.log('Passing students:', passingStudents);

// 2. Assign a letter grade based on each student's marks
const gradedStudents = students.map(student => {
  let grade;

  if (student.marks >= 90) {
    grade = 'A';
  } else if (student.marks >= 75) {
    grade = 'B';
  } else if (student.marks >= 60) {
    grade = 'C';
  } else {
    grade = 'D';
  }

  return { ...student, grade };
});
console.log('Students with grades:', gradedStudents);

// 3. Calculate the average marks across all students
const averageMarks = students.reduce((sum, student) => sum + student.marks, 0) / students.length;
console.log('Average marks:', averageMarks);

// 4. Find the student who scored exactly 92 marks
const student = students.find(student => student.marks === 92);
console.log('Student with 92 marks:', student);

// 5. Find the index of the student named "Kiran"
const Index = students.findIndex(student => student.name === "Kiran");
console.log('Index of Kiran:', Index);
