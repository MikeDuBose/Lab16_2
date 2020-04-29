interface Mountain{
    name:string;
    height:number;
}

interface Product{
    name:string;
    price:number;
}

interface InventoryItem{
    product:Product;
    quantity:number;
}
//array of mountains
let mountains: Mountain[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];
//array of products
let products: Product[] = [
    {name: "2080 TI", price: 1200.99},
    {name: "i9 9900K", price: 499.99},
    {name: "Motherboard", price: 289.99}
];
//array of inventory
let inventory: InventoryItem[] = [
    {product: {name: "2080 TI", price: 1200.99}, quantity: 10},
    {product: {name: "i9 9900K", price: 499.99}, quantity: 4},
    {product: {name: "Motherboard", price: 289.99}, quantity: 20}

];
//code calls
let tallestMountain = findNameOfTallestMountain(mountains);
let avgPrice = calcAverageProductPrice(products);
let totalPrice = calcInventoryValue(inventory);

console.log('The tallest mountain is ' + tallestMountain);
console.log('The avergae price is ' + avgPrice.toFixed(2));
console.log('TOTAL: ' + totalPrice);

//functions
function calcAverageProductPrice(products:Product[]):number {
    let total = 0;
    for(let p of products){
        total += p.price;
    }
    return total/products.length;
}

function calcInventoryValue(inventory:InventoryItem[]):number {
    let totalPrice = 0;
    for(let i of inventory){
        totalPrice += i.quantity * i.product.price;
    }
    return totalPrice;
}

function findNameOfTallestMountain(mountains:Mountain[]):string {
    let tallestHeight = 0;
    let tallestName = "";
    for(let m of mountains){
        if(m.height > tallestHeight){
            tallestName = m.name;
            tallestHeight = m.height;
        }
    }
    return tallestName;
}