/* Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
  1. filter() marks ≥ 40 (pass marks)
  2. map() to add 5 grace marks to each student
  3. reduce() to find highest mark
  4. find() first mark below 40
  5. findIndex() of mark 92
*/

const marks = [78, 92, 35, 88, 40, 67];

// 1. Filter the list to include only passing marks (40 or above)
const passingMarks = marks.filter(mark => mark >= 40);
console.log('Passing marks:', passingMarks);

// 2. Add 5 grace marks to every student's score
const marksWithGrace = marks.map(mark => mark + 5);
console.log('Marks after grace:', marksWithGrace);

// 3. Find the highest mark using reduce()
const highestMark = marks.reduce((max, currentMark) => {
  if (max > currentMark) {
    return max;
  } else {
    return currentMark;
  }
}, 0);
console.log('Highest mark:', highestMark);

// 4. Find the first failing mark below 40
const firstFailingMark = marks.find(mark => mark < 40);
console.log('First failing mark:', firstFailingMark);


// 5. Find the array index of the mark equal to 92
const index= marks.findIndex(mark => mark === 92);
console.log('Index of mark 92:', index);
