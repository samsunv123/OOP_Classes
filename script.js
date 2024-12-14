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
 // Static method to apply discount to all products in the array
 static applyDiscount(products, discount) {
    products.forEach(product => {
        product.price -= product.price * discount; // Apply discount
    });
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

class Store {
    constructor() {
      this.inventory = []; // Array to hold products
    }

// Method to add a product to the inventory
addProduct(product) {
    this.inventory.push(product);
  }

  // Method to calculate the total value of the inventory
  getInventoryValue() {
    let totalValue = 0;
    this.inventory.forEach(product => {
      totalValue += product.getTotalValue();
    });
    return totalValue;
  }

  findProductByName(name) {
    return this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;
  }
}
// Create a Store object
const store = new Store();
// Create instances of perishable products with sample data
const milk = new PerishableProductProperties('Milk', 1.50, 10, '2024-12-31');
const bread = new PerishableProductProperties('Bread', 2.00, 20, '2024-12-15');

// Print details of the products using the overridden toString method
console.log(milk.toString());  // Product: Milk, Price: $1.50, Quantity: 10, Expiration Date: 2024-12-31
console.log(bread.toString()); // Product: Bread, Price: $2.00, Quantity: 20, Expiration Date: 2024-12-15

// Create instances of products
const apple = new ProductProperties('Apple', 2.00, 50);
const banana = new ProductProperties('Banana', 1.50, 100);

// Store all products in an array
const products = [apple, banana, milk, bread];

// Print original prices before discount
console.log('Original Prices:');
products.forEach(product => console.log(product.toString()));

// Apply a 10% discount (0.1)
ProductProperties.applyDiscount(products, 0.1);

// Print updated prices after discount
console.log('\nAfter Applying 10% Discount:');
products.forEach(product => console.log(product.toString()));

// Create 5 products (including at least 2 PerishableProduct objects)
const cheese = new PerishableProductProperties("Cheese", 3.0, 30, "2024-11-30"); // Perishable product
const orange = new ProductProperties("Orange", 2.0, 120); // Regular product

// Add products to store inventory
store.addProduct(apple);
store.addProduct(milk);
store.addProduct(banana);
store.addProduct(cheese);
store.addProduct(orange);

// Print total inventory value before discount
console.log("Total Inventory Value Before Discount: $" + store.getInventoryValue().toFixed(2));

// Apply a 15% discount using the static method
ProductProperties.applyDiscount(store.inventory, 0.15);

// Print total inventory value after discount
console.log("Total Inventory Value After Discount: $" + store.getInventoryValue().toFixed(2));

// Find and print details of a specific product by name
const productName = "Milk";
const foundProduct = store.findProductByName(productName);
if (foundProduct) {
  console.log(`Found Product: ${foundProduct.toString()}`);
} else {
  console.log(`${productName} not found.`);
}