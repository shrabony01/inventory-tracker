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