interface Student {
  id: number;
  name: string;
  course: string;
}
const student1: Student = {
  id: 1,
  name: "Ahmed",
  course: "Typing Course",
};

console.log(student1.course);
