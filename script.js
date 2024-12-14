// Base Class: ProductProperties
class ProductProperties {
    constructor(name, price, quantity) {
      this.name = name; // The name of the product (string)
      this.price = price; // The price of the product (number)
      this.quantity = quantity; // The quantity available in stock (number)
    }
  
    // Method to calculate the total value of the product in stock
    getTotalValue() {
      return this.price * this.quantity; // Total value = price * quantity
    }
  
    // Method to return a string representation of the product
    toString() {
      return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
  }
  
// Example usage:
const apple = new ProductProperties('Apple', 2.50, 50);
console.log(apple.toString()); // Output: "Product: Apple, Price: $2.50, Quantity: 50"
console.log('Total Value:', apple.getTotalValue()); 