class Book {
  title: string;
  author: string;
  publishedYear: number;
  summary: string;

  constructor(ti: string, au: string, py: number, sum: string) {
    this.title = ti;
    this.author = au;
    this.publishedYear = py;
    this.summary = sum;
  }
  displayDetails(): void {
    console.log(
      `Book: ${this.title} by ${this.author} (${this.publishedYear}) Summary: ${this.summary}`
    );
  }
}

let myBook = new Book(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  "A brilliant romantic and social commentary on love, class, and family through the story of Elizabeth Bennet and Mr. Darcy."
);

myBook.displayDetails();

let myBook2 = new Book(
  "The Alchemist",
  "Paulo Coelho",
  1988,
  "A spiritual adventure story about a shepherd named Santiago who follows his dreams and learns deep lessons about destiny and life"
);

myBook2.displayDetails();

console.log();

class Student {
  name: string;
  age: number;
  grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo(): void {
    console.log(
      `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    );
  }
}

let student = new Student("Ahmed", 10, "4");
student.displayInfo();
let student2 = new Student("Mohammed", 8, "3");
student2.displayInfo();
