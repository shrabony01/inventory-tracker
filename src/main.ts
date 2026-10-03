import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { sortByPrice, sortByName } from "./utils/sortProducts.js";

//creating instance

const Products=[
    new PhysicalProduct('P001','Laptop',1200,2.5),
    new PhysicalProduct('P002','Chair',150,5.2),
    new DigitalProduct('D001','E-book',20,5),
    new DigitalProduct('D002','Software License',99,0)
];
//using a loop to display each product
for (const product of Products){
    console.log(product.displayDetails());
    console.log(`Final Price (with tax):$${calculateTax(product)}`);
    console.log('---------------------');
}
(Products[0] as PhysicalProduct).applyDiscount(10);
console.log((Products[0] as PhysicalProduct).getDiscountedPrice());

console.log("Sorted by Price:");
const sortedByPrice = sortByPrice(Products);
for (const p of sortedByPrice) {
    console.log(`${p.name} - $${p.price}`);
}
console.log("---------------------");

console.log("Sorted by Name:");
const sortedByName = sortByName(Products);
for (const p of sortedByName) {
    console.log(`${p.name} - $${p.price}`);
}

console.log("---------------------");

console.log("Bulk Discount Test:");
if (Products[1] instanceof PhysicalProduct) {
    Products[1].applyBulkDiscount(5, 20); // 20% discount if weight >= 5kg
    console.log(`Bulk Discounted Price: $${Products[1].getDiscountedPrice()}`);
}
console.log("---------------------");