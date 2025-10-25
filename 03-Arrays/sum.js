function sum(numbers) {
    var total = numbers.reduce(function (total, n) { return total + n; }, 0);
    return total;
}
var numbers = [-30, 80, -15];
var total = sum(numbers);
console.log(total);
