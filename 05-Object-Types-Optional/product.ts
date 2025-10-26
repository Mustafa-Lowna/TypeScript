type Product = {
  id: number;
  title: string;
  price: number;
  description?: string;
};

let product1: Product = {
  id: 101,
  title: "Apple MacBook Air",
  price: 950000,
  description:
    "Apple 2025 MacBook Air (13-inch, Apple M4 chip with 10-core CPU and 8-core GPU, 16GB Unified Memory, 256GB) - Sky Blue",
};

let product2: Product = {
  id: 102,
  title: "Apple Magic Mouse",
  price: 9500,
};

console.log(product1, product2);
