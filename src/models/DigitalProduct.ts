import { Product } from "./Product.js";

export class DigitalProduct extends Product{
    private filesize:number;

    constructor(sku:string, name:string, price:number,filesize:number){
        super(sku,name,price);
        this.filesize=filesize;
    }
    get formattedFileSize():string{
        return `${this.filesize} MB`
    }
    override getPriceWithTax(): number {
        return this.price;  //no tax
    }

    //override displayDetail
    override displayDetails(): string {
        return `SKU: ${this.sku}, Name:${this.name}, Price: $${this.price}, File Size: ${this.formattedFileSize}';
    }
}