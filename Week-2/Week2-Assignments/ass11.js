//class concept assignment
class Book {
    title;
    author;
    pages;
    isAvailable;
    
    constructor(title, author, pages, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }

    borrow() {
        this.isAvailable = false; 
    }

    returnBook() {
        this.isAvailable = true; 
    }

    getInfo() {
        return `${this.title}     by     ${this.author} (${this.pages} pages)`;
    }

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



//Display info
myLibrary.forEach(book=> console.log(book.getInfo()));

// Borrow 2 books
myLibrary[0].borrow();
myLibrary[1].borrow();
console.log(`Book: ${myLibrary[0].title} | Status: ${myLibrary[0].isAvailable}`);
console.log(`Book: ${myLibrary[1].title} | Status: ${myLibrary[1].isAvailable}`);

// Return 1 book
myLibrary[0].returnBook();
console.log(`Book: ${myLibrary[0].title} | Updated Status: ${myLibrary[0].isAvailable}`);

// Count long books
const longBooks = myLibrary.filter(book => book.isLongBook()).length;
console.log(`Total Long Books: ${longBooks}`);

//List all available books
console.log("Available Books:", myLibrary.filter(b => b.isAvailable).map(d=>d.title))