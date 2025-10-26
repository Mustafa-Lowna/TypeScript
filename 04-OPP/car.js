var car = /** @class */ (function () {
    function car(br, mo, yr) {
        this.brand = br;
        this.model = mo;
        this.year = yr;
    }
    car.prototype.displayDetails = function () {
        console.log("This car is a ".concat(this.brand, " ").concat(this.model, " ").concat(this.year, "."));
    };
    return car;
}());
var myCar = new car("Suzuki", "Fronx", 2025);
myCar.displayDetails();
var car2 = new car("Toyota", "Fortuner", 2025);
car2.displayDetails();
