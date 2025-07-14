const { publish } = require("gh-pages");

const books=[
    // Example book objects with title, genre, and publish year
    {
        title: "Book example", genre: "Fiction", publish: "1980", price: 100.99
    },
    {
        title: "Book zero", genre: "Adventure", publish: "1990", price: 150.50
    },
    {
        title: "Book one", genre: "History", publish: "1995", price: 200.00
    },
    {
        title: "Book two", genre: "Science", publish: "2000", price: 250.75
    },
    {
        title: "Book three", genre: "Fiction", publish: "2010", price: 300.00
    },
    {
        title: "Book four", genre: "Biography", publish: "2015", price: 350.25
    },
    {
        title: "Book five", genre: "Fantasy", publish: "2020", price: 400.00
    },
    {
        title: "Book six", genre: "Mystery", publish: "2021", price: 450.50
    },
    {
        title: "Book seven", genre: "Romance", publish: "2022", price: 500.75
    },
    {
        title: "Book eight", genre: "Thriller", publish: "2023", price: 550.00
    }
]

//filter books by genre
const filteredBooks = books.filter((booksList)=>{
       return booksList.publish < "2000";
})

console.log(filteredBooks);

//map books to get titles
const bookTitles = books.map((book) => {
    return book.title; // This will return an array of book titles
});
console.log(bookTitles);

//to print the bookse
books.forEach((book) => {
    console.log(`Title: ${book.title}, Genre: ${book.genre}, Publish Year: ${book.publish}`);
});


//reduce to calculate total price
const totalPrice = books.reduce((accumulator, book) => {
    return accumulator + book.price; // This will sum up the prices of all books
}, 0); // 0 is the initial value for the accumulator
console.log(`Total Price of all books: ${totalPrice}`);