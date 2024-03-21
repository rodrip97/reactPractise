const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: false,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();

function getTotalReviewsCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

// main code ends here

/*
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);
*/
// creates a new array and returns the result of the arrow function, this case iterates each book and returns the book title
// preserving the original array
/* const titles = books.map((book) => book.title);
titles;

// for multiple returls of arrow function use following syntax
// const example = example.map((x) => ({}));
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviews: getTotalReviewsCount(book),
})); */

/* essentialData;

// again, the filter method creates a new array with only the books that meet the condition of pages > 500
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure")) // after getting the filter we map it and return the title for viewing
  .map((book) => book.title);
adventureBooks;

// reduce method

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// array sort method
const x = [3, 1, 5, 2, 8, 6, 4, 9];

const sorted = x.slice().sort((a, b) => a - b); // put slice before sort because sort works on the original array instead of making a copy and keeping the original, so
// by calling slice first we actually create a 'working copy' and leave the original alone
sorted; */
/* 
const sortedOtherWay = x.sort((a, b) => b - a);
sortedOtherWay;

//again we slice the book array to get a 'working copy' before sorting it, maintaining the original one
const sortedByPage = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPage;

// Working with immutable arrays

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

// use the spread operator the 'unpack' the existing array into the new one and add the newBook to it at the end
const booksAfterAdd = [...books, newBook]; */

/* booksAfterAdd;

//delete book from array
const bookAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete;

// update book from array
const booksAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1211 } : book
);

booksAfterUpdate; */
///
//Javascript Promises

/* fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data)); */

console.log(
  "Even tho its after the promise, it will be done first since JS has to way for API response"
);

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
