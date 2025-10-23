let myName: string = "Mustafa";
let myAge: number = 17;
let isStudent: boolean = true;

let calls: number = 150;
let bill: number;
if (calls <= 50) {
  bill = 0;
} else {
  bill = (calls - 50) * 1;
}
console.log("Number of calls :", calls);
console.log("Total Bill :", bill + "₹");

let n: number = 5;
let fact: number = 1;
for (let i: number = 1; i <= n; i++) {
  fact = fact * i;
}
console.log();
console.log("Factorial of " + n + " = " + fact);

let m: number = 8;
console.log(m % 2 == 0 ? "False" : "True");
