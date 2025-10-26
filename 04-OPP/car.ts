class car {
  brand: string;
  model: string;
  year: number;

  constructor(br: string, mo: string, yr: number) {
    this.brand = br;
    this.model = mo;
    this.year = yr;
  }
  displayDetails(): void {
    console.log(`This car is a ${this.brand} ${this.model} ${this.year}.`);
  }
}

let myCar = new car("Suzuki", "Fronx", 2025);

myCar.displayDetails();

let car2 = new car("Toyota", "Fortuner", 2025);
car2.displayDetails();
