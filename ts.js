//array of mountains
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
//array of products
var products = [
    { name: "2080 TI", price: 1200.99 },
    { name: "i9 9900K", price: 499.99 },
    { name: "Motherboard", price: 289.99 }
];
//array of inventory
var inventory = [
    { product: { name: "2080 TI", price: 1200.99 }, quantity: 10 },
    { product: { name: "i9 9900K", price: 499.99 }, quantity: 4 },
    { product: { name: "Motherboard", price: 289.99 }, quantity: 20 }
];
//code calls
var tallestMountain = findNameOfTallestMountain(mountains);
var avgPrice = calcAverageProductPrice(products);
var totalPrice = calcInventoryValue(inventory);
console.log('The tallest mountain is' + tallestMountain);
console.log('The avergae price is' + avgPrice.toFixed(2));
console.log('TOTAL:' + totalPrice);
//functions
function calcAverageProductPrice(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var p = products_1[_i];
        total += p.price;
    }
    return total / products.length;
}
function calcInventoryValue(inventory) {
    var totalPrice = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var i = inventory_1[_i];
        totalPrice += i.quantity * i.product.price;
    }
    return totalPrice;
}
function findNameOfTallestMountain(mountains) {
    var tallestHeight = 0;
    var tallestName = "";
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var m = mountains_1[_i];
        if (m.height > tallestHeight) {
            tallestName = m.name;
            tallestHeight = m.height;
        }
    }
    return tallestName;
}
