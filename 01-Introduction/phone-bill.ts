let calls: number = 150;
let bill: number;
if (calls <= 50) {
  bill = 0;
} else {
  bill = (calls - 50) * 1;
}
console.log("Number of calls :", calls);
console.log("Total Bill :", bill + "₹");
