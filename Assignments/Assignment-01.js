var myName = "Mustafa";
var myAge = 17;
var isStudent = true;
var calls = 150;
var bill;
if (calls <= 50) {
    bill = 0;
}
else {
    bill = (calls - 50) * 1;
}
console.log("Number of calls :", calls);
console.log("Total Bill :", bill + "₹");
var n = 5;
var fact = 1;
for (var i = 1; i <= n; i++) {
    fact = fact * i;
}
console.log();
console.log("Factorial of " + n + " = " + fact);
var m = 8;
console.log(m % 2 == 0 ? "False" : "True");
