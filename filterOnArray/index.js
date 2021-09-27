const books = [
  { title: "Clean Code", year: 2008, rating: 8.2 },
  { title: "Code Complete, 2nd edition", year: 1993, rating: 9.3 },
  { title: "Design Patterns", year: 1994, rating: 7.1 },
  { title: "Soft Skills", year: 2014, rating: 8.2 },
  { title: "Refactoring, 2nd edition", year: 2018, rating: 9.7 },
  { title: "The Pragmatic Programmer", year: 1999, rating: 8.4 },
  { title: "Introduction to Algorithms, 3rd edition", year: 2009, rating: 7.7 },
  { title: "Working Effectively with Legacy Code", year: 2004, rating: 6.9 },
];

filterBooks(books);

function filterBooks(books) {
  const filteredBooks = [];

  books
    .filter((book) => book.year > 2010 && book.rating > 8)
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .forEach((book) => {
      filteredBooks.push(book);
    });

  console.log(filteredBooks);
  return filteredBooks;
}
