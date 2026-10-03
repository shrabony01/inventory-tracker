export class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `SKU: \({this.sku}, Name:\){this.name}, Price: $${this.price.toFixed(2)}`;
  }

  getPriceWithTax(taxRate: number): number {
    return Number((this.price * (1 + taxRate)).toFixed(2));
  }
}