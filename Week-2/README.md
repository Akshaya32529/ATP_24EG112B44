# Week 2 JavaScript Assignments

This repository contains Week 2 practice assignments focused on modern JavaScript fundamentals. The assignments demonstrate ES6 array methods, object and array copying, classes, and asynchronous JavaScript using timers.

## Topics Covered

- ES6 array methods: `filter()`, `map()`, `reduce()`, `find()`, and `findIndex()`
- Object and array copying with the spread operator
- Shallow copy and deep copy behavior
- Deep cloning with `structuredClone()`
- ES6 classes, constructors, and instance methods
- Asynchronous JavaScript with `setTimeout()`, `setInterval()`, and `clearInterval()`


## How to Run

Open a terminal in this folder and run any assignment file with Node.js:

```bash
node dailyTemperatureAnalyzer.js
```

Replace the file name with the assignment you want to execute.

## Assignment List

`dailyTemperatureAnalyzer.js` contains the Daily Temperature Analyzer assignment. It works with temperature values by filtering high temperatures, converting Celsius to Fahrenheit, calculating the average temperature, and finding specific values and indexes.

`courseNameProcessor.js` contains the Online Course Name Processor assignment. It prepares course names for display by filtering longer names, converting names to uppercase, building a formatted course list string, and searching for specific courses.

`studentMarksAnalyzer.js` contains the Student Marks List assignment. It analyzes exam marks by filtering passing scores, adding grace marks, finding the highest mark, and identifying failing marks.

`studentPerformanceDashboard.js` contains the Student Performance Dashboard assignment. It works with student records by filtering passed students, assigning grades, calculating average marks, and searching for specific student data.

`shoppingCartSummary.js` contains the Shopping Cart Summary assignment. It processes e-commerce cart data by filtering in-stock products, calculating product totals, finding the grand total, and searching for cart items.

`employeePayrollProcessor.js` contains the Employee Payroll Processor assignment. It processes employee data by filtering department employees, adding salary bonuses, calculating total salary payout, and finding specific employees.

`movieRecommendationSystem.js` contains the Movie Recommendation System assignment. It analyzes movie records by filtering movies by genre, formatting movie display text, calculating average ratings, and searching for movie details.

`bankTransactionAnalyzer.js` contains the Bank Transaction Analyzer assignment. It summarizes transaction records by filtering credit transactions, extracting amounts, calculating account balance, and finding specific transaction entries.

`arraySpreadCopy.js` contains the Array Spread Copy assignment. It demonstrates how to copy an array with the spread operator and add a new item without changing the original array.

`objectSpreadCopy.js` contains the Object Spread Copy assignment. It demonstrates how to copy an object with the spread operator and add a new property without changing the original object.

`shallowCopyDemo.js` contains the Shallow Copy Demo assignment. It shows that nested objects still share memory when an object is copied using the spread operator.

`deepCopyOrderClone.js` contains the Deep Copy Order Clone assignment. It uses `structuredClone()` to create an independent copy of nested order data.

`libraryBookManager.js` contains the Library Book Manager assignment. It uses an ES6 class to create book objects, borrow and return books, count long books, and list available books.

`examPortalSimulator.js` contains the Exam Portal Simulator assignment. It uses `setTimeout()` to simulate delayed exam evaluation and result display.

`otpCountdownTimer.js` contains the OTP Countdown Timer assignment. It uses `setInterval()` and `clearInterval()` to create an OTP resend countdown.

## Assignment Details

### 1. Daily Temperature Analyzer

Analyzes temperature readings recorded by a weather application.

The program:

- Filters temperatures above 35 degrees Celsius
- Converts Celsius values to Fahrenheit
- Calculates the average temperature
- Finds the first temperature above 40 degrees Celsius
- Finds the index of the temperature value 28

Run:

```bash
node dailyTemperatureAnalyzer.js
```

### 2. Online Course Name Processor

Prepares course names for display on a website.

The program:

- Filters course names with more than 5 characters
- Converts all course names to uppercase
- Creates a single formatted course list string
- Finds the course named `react`
- Finds the index of the course named `node`

Run:

```bash
node courseNameProcessor.js
```

### 3. Student Marks List

Processes marks received from an exam system.

The program:

- Filters marks greater than or equal to 40
- Adds 5 grace marks to each score
- Finds the highest mark using `reduce()`
- Finds the first failing mark
- Finds the index of the mark 92

Run:

```bash
node studentMarksAnalyzer.js
```

### 4. Student Performance Dashboard

Analyzes student performance for a college result system.

The program:

- Filters students who passed
- Adds a grade field based on marks
- Calculates average marks
- Finds the student who scored 92
- Finds the index of the student named Kiran

Run:

```bash
node studentPerformanceDashboard.js
```

### 5. Shopping Cart Summary

Builds a summary for an e-commerce shopping cart.

The program:

- Filters products that are in stock
- Creates a product summary with item totals
- Calculates the grand total cart value
- Finds details of the product named Mouse
- Finds the index of the product named Keyboard

Run:

```bash
node shoppingCartSummary.js
```

### 6. Employee Payroll Processor

Processes salary information for a company HR application.

The program:

- Filters employees from the IT department
- Adds net salary with a 10 percent bonus
- Calculates total salary payout
- Finds the employee with salary 30000
- Finds the index of the employee named Neha

Run:

```bash
node employeePayrollProcessor.js
```


### 7. Movie Recommendation System

Analyzes movie records for a streaming platform.

The program:

- Filters Sci-Fi movies
- Formats movie titles with ratings
- Calculates average movie rating
- Finds the movie named Joker
- Finds the index of the movie named Avengers


Run:

```bash
node movieRecommendationSystem.js
```

### 8. Bank Transaction Analyzer

Summarizes bank transaction records.

The program:

- Filters credit transactions
- Extracts transaction amounts
- Calculates final account balance
- Finds the first debit transaction
- Finds the index of the transaction with amount 10000

Run:

```bash
node bankTransactionAnalyzer.js
```

### 9. Spread Copy Assignments

These files demonstrate copying arrays and objects without changing the original values.

Run:

```bash
node arraySpreadCopy.js
node objectSpreadCopy.js
```

### 10. Shallow Copy and Deep Copy

These files compare shallow and deep copying.

`shallowCopyDemo.js` shows that nested objects still share memory after a spread copy. `deepCopyOrderClone.js` uses `structuredClone()` so nested objects and arrays are copied independently.

Run:

```bash
node shallowCopyDemo.js
node deepCopyOrderClone.js
```

### 11. Library Book Manager

Demonstrates object-oriented programming with an ES6 `Book` class.

The program:

- Creates book objects using a constructor
- Defines methods for borrowing and returning books
- Displays book information
- Counts long books
- Lists available books

Run:

```bash
node libraryBookManager.js
```

### 12. Asynchronous JavaScript Assignments

These files demonstrate JavaScript timer functions.

`examPortalSimulator.js` uses delayed messages to simulate exam submission, evaluation, and result display. `otpCountdownTimer.js` creates a countdown timer before allowing OTP resend.

Run:

```bash
node examPortalSimulator.js
node otpCountdownTimer.js
```