var book1 = {
  title: "SUCCESS IN LIFE",
  author: "Yusuf",
  publishedYear: 2025,
};
var book2 = {
  title: "THE AL CHEMIST",
  author: "Qasim",
  publishedYear: 2025,
  summary:
    "The Alchemist explores universal themes of personal destiny, spiritual growth, and the transformative power of following one's dreams.",
};
console.log();
console.log(book1);
console.log(book2);
console.log();
function printBookDetails(book) {
  console.log("Printing Book Details");
  console.log();
  console.log("Title: ".concat(book.title));
  console.log("Author: ".concat(book.author));
  console.log("Published Year: ".concat(book.publishedYear));
  if (book.summary) {
    console.log("Summary: ".concat(book.summary));
  }
}
printBookDetails(book1);
console.log();
printBookDetails(book2);
console.log();
function displayProductId(id) {
  if (typeof id === "number") {
    console.log("Numeric ID:", id);
  } else {
    console.log("String ID:", id);
  }
}
displayProductId(111);
displayProductId("A1101");
