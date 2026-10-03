📦 Inventory Tracker — TypeScript OOP Project
This project is a small inventory management system built in TypeScript.
It demonstrates object‑oriented programming concepts like inheritance, interfaces, method overriding, polymorphism, and modular architecture.
It also includes sorting utilities and a discount system for physical products.

✨ Features
🧱 Product Hierarchy
The project defines a base Product class and two subclasses:

PhysicalProduct — items with weight (e.g., Laptop, Chair)

DigitalProduct — downloadable items with file size (e.g., E‑book, Software License)

Each product type overrides certain behaviors, such as tax calculation and display formatting.

💸 Discount System
Physical products implement a DiscountableProduct interface, which adds:

applyDiscount(percent) — applies a percentage discount

getDiscountedPrice() — returns the final price after discount

applyBulkDiscount(minWeight, percent) — applies a discount only if the product meets a minimum weight requirement

This shows how interfaces enforce behavior across classes.

📊 Sorting Module
A separate utility module provides sorting functions:

sortByPrice(products) — sorts products by price (ascending)

sortByName(products) — sorts products alphabetically

This keeps sorting logic clean and reusable.

💰 Tax Calculation
A small utility function calculates tax differently depending on product type:

Physical products: 10% tax

Digital products: no tax

This demonstrates polymorphism — the same function behaves differently based on the object passed in.

🧪 What the Program Does
When you run the project:

It creates a list of physical and digital products.

It prints each product’s details and final price with tax.

It applies a discount to one physical product and prints the discounted price.

It sorts products by price and name and prints the results.

It applies a bulk discount to a qualifying physical product and prints the final price.

The console output shows each step clearly.

🛠️ Technologies Used
TypeScript

Node.js

ES Modules

OOP Principles

Modular Architecture

🚀 How to Run
bash
npm install
npx tsc
node dist/main.js
📁 Project Structure
Code
src/
 ├── models/
 │    ├── Product.ts
 │    ├── PhysicalProduct.ts
 │    └── DigitalProduct.ts
 ├── interfaces/
 │    └── DiscountableProduct.ts
 ├── utils/
 │    ├── taxCalculator.ts
 │    └── sortProducts.ts
 └── main.ts
🧠 What I Learned
How to structure a TypeScript project using modules

How interfaces enforce behavior across classes

How inheritance and method overriding work

How to apply polymorphism in real code

How to write clean, reusable utility functions

How to debug TypeScript errors and work with strict typing