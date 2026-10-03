import { Product } from "./Product.js";

export class PhysicalProduct extends Product {
    private weight:number; //kg


    constructor(sku:string, name:string, price:number,  weight:number){
        super(sku,name,price);
        this.weight=weight;
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