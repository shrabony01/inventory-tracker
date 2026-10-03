import { Product } from "../models/Product.js";

export function calculateTax(Product:Product):number{
    return Product.getPriceWithTax();
}