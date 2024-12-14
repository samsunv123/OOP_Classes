// Base class for product properties
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}

// Subclass for perishable product properties
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);  // Call the parent class constructor
        this.expirationDate = expirationDate;  // Initialize the expiration date
    }

    // Override the toString method to include expiration date
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}
// Create instances of perishable products with sample data
const milk = new PerishableProductProperties('Milk', 1.50, 10, '2024-12-31');
const bread = new PerishableProductProperties('Bread', 2.00, 20, '2024-12-15');

// Print details of the products using the overridden toString method
console.log(milk.toString());  // Product: Milk, Price: $1.50, Quantity: 10, Expiration Date: 2024-12-31
console.log(bread.toString()); // Product: Bread, Price: $2.00, Quantity: 20, Expiration Date: 2024-12-15
