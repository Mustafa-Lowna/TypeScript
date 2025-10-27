interface Product {
  name: string;
  price: number;
  description?: string;
}
const product1: Product = {
  name: "iPhone 17 Pro",
  price: 170000,
  description: "High Demanded Smart Phone",
};
const product2: Product = {
  name: "Samsung S25 Ultra",
  price: 135000,
};

console.log(product1);
