var Book = /** @class */ (function () {
    function Book(ti, au, py, sum) {
        this.title = ti;
        this.author = au;
        this.publishedYear = py;
        this.summary = sum;
    }
    Book.prototype.displayDetails = function () {
        console.log("Book: ".concat(this.title, " by ").concat(this.author, " (").concat(this.publishedYear, ") Summary: ").concat(this.summary));
    };
    return Book;
}());
var myBook = new Book("Pride and Prejudice", "Jane Austen", 1813, "A brilliant romantic and social commentary on love, class, and family through the story of Elizabeth Bennet and Mr. Darcy.");
myBook.displayDetails();
var myBook2 = new Book("The Alchemist", "Paulo Coelho", 1988, "A spiritual adventure story about a shepherd named Santiago who follows his dreams and learns deep lessons about destiny and life");
myBook2.displayDetails();
console.log();
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.displayInfo = function () {
        console.log("Student: ".concat(this.name, ", Age: ").concat(this.age, ", Grade: ").concat(this.grade));
    };
    return Student;
}());
var student = new Student("Ahmed", 10, "4");
student.displayInfo();
var student2 = new Student("Mohammed", 8, "3");
student2.displayInfo();
