// Library Book Manager
// Demonstrates class creation, object methods, and array operations.

class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  // Marks the book as borrowed.
  borrow() {
    this.isAvailable = false;
  }

  // Marks the book as available again.
  returnBook() {
    this.isAvailable = true;
  }

  // Returns a readable summary of the book.
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  // A book with more than 300 pages is treated as a long book.
  isLongBook() {
    return this.pages > 300;
  }
}

const myLibrary = [
  new Book("THE KING", "Akshaya", 350),
  new Book("BETTER DIE", "Daksha", 300),
  new Book("THE GREAT FAMILY", "Harini", 700),
  new Book("RULER", "Harini", 600),
  new Book("MASTERPIECE", "Harish", 200)
];

// Display information about every book in the library.
myLibrary.forEach(book => console.log(book.getInfo()));

// Borrow two books and show their updated availability.
myLibrary[0].borrow();
myLibrary[1].borrow();
console.log(`Book: ${myLibrary[0].title} | Available: ${myLibrary[0].isAvailable}`);
console.log(`Book: ${myLibrary[1].title} | Available: ${myLibrary[1].isAvailable}`);

// Return one book and show the new status.
myLibrary[0].returnBook();
console.log(`Book: ${myLibrary[0].title} | Available: ${myLibrary[0].isAvailable}`);

// Count books with more than 300 pages.
const longBooks = myLibrary.filter(book => book.isLongBook()).length;
console.log(`Total Long Books: ${longBooks}`);

// List all books that are currently available.
const availableBooks = myLibrary
  .filter(book => book.isAvailable)
  .map(book => book.title);

console.log("Available Books:", availableBooks);
