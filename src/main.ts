import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";

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
Products[0].applyDiscount(10);
console.log(`Discounted Price: $${Products[0].getDiscountedPrice()}`);