var flaLocation = [21, 15];
console.log(flaLocation);
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
var customer1 = {
  name: "Aisha",
  email: "aisha@example.com",
  cardNumber: "**** **** **** 1234",
  expiryDate: "12/26",
};
console.log(customer1);
