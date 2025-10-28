type location = [number, number];
let flaLocation: location = [21, 15];
console.log(flaLocation);

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string;
}

const book1: Book = {
  title: "SUCCESS IN LIFE",
  author: "Yusuf",
  publishedYear: 2025,
};

const book2: Book = {
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

function printBookDetails(book: Book) {
  console.log("Printing Book Details");

  console.log();

  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Published Year: ${book.publishedYear}`);
  if (book.summary) {
    console.log(`Summary: ${book.summary}`);
  }
}
printBookDetails(book1);
console.log();
printBookDetails(book2);

type Customer = {
  name: string;
  email: string;
};
type BillingDetails = {
  cardNumber: string;
  expiryDate: string;
};

type BillingCustomer = Customer & BillingDetails;

const customer1: BillingCustomer = {
  name: "Aisha",
  email: "aisha@example.com",
  cardNumber: "**** **** **** 1234",
  expiryDate: "12/26",
};

console.log(customer1);
