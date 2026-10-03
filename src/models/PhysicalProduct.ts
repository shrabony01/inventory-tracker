import { Product } from "./Product.js";
import type { DiscountableProduct } from "../interfaces/DiscountableProduct.js";

export class PhysicalProduct extends Product implements DiscountableProduct {
    private weight:number; //kg
    private discount:number=0;

constructor(sku:string, name:string, price:number,  weight:number){
    super(sku,name,price);
    this.weight=weight;
    }
applyDiscount(perccent: number): void {
    this.discount=perccent;
}
getDiscountedPrice():number{
    return this.price *(1-this.discount/100);
}
applyBulkDiscount(minWeight:number,perccent:number):void{
    if(this.weight >=minWeight){
        this.discount=perccent;
    }
}
// getter for formatted weight
get formattedWeight():string{
    return `${this.weight} kg`;
}
//override tax calculation(10% tax)
override getPriceWithTax():number{
    return this.price*1.10;
}
//override displayDetail to include weight
override displayDetails():string{
    return `SKU:${this.sku}, Name:${this.name}, Price: $${this.price}, Weight:${this.formattedWeight}`;
}
}
