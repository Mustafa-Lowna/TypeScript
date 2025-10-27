type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type EmployeeProfile = Person & Employee;

const employee1: EmployeeProfile = {
  name: "Ali",
  age: 22,
  employeeId: "E101",
  department: "HR",
};

console.log(employee1);
