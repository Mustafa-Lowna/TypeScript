var calls = 150;
var bill;
if (calls <= 50) {
  bill = 0;
} else {
  bill = (calls - 50) * 1;
}
console.log("Number of calls :", calls);
console.log("Total Bill :", bill + "₹");
