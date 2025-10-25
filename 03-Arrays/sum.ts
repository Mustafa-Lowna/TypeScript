function sum(numbers: number[]): number {
  let total = numbers.reduce((total, n) => total + n, 0);
  return total;
}

let numbers: number[] = [-30, 80, -15];
let total: number = sum(numbers);
console.log(total);
