// This file manages the shopping cart functionality, including adding, removing, and updating items in the cart.

let cart = [];

// Function to add an item to the cart
function addToCart(productId, quantity) {
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += quantity;
    } else {
        cart.push({ id: productId, quantity: quantity });
    }
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Function to update the quantity of an item in the cart
function updateCartItem(productId, quantity) {
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity = quantity;
    }
    updateCartDisplay();
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}

// Function to update the cart display (to be implemented)
function updateCartDisplay() {
    // Logic to update the cart UI goes here
}

// Exporting functions for use in other modules
export { addToCart, removeFromCart, updateCartItem, clearCart };