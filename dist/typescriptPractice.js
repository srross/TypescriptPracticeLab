"use strict";
//* declare an array */
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function getTallestMountain(mountainArray) {
    //return variable that holds max height
    let maxHeight = 0;
    let maxName = '';
    // iterate through mountains
    for (let i = 0; i < mountainArray.length; i++) {
        // compare the height of the mountain to variable. 
        // If greater, then set it to that height. If not, continue
        if (mountainArray[i].height > maxHeight) {
            maxHeight = mountainArray[i].height;
            maxName = mountainArray[i].name;
        }
    }
    return maxName;
}
console.log(getTallestMountain(mountains));
// Declare an array called products which is an array of type Product.
let products = [
    { name: "Mr. Coffee Maker", price: 20 },
    { name: "Microwave", price: 150 },
    { name: "Teapot", price: 25 }
];
// Declare a function called calcAverageProductPrice
function calcAverageProductPrice(productArray) {
    let i = 0;
    let sum = 0;
    let itemCount = productArray.length;
    let aveProductPrice = 0;
    while (i < itemCount) {
        sum = sum + productArray[i].price;
        i++;
    }
    //for(let i = 0; i < productArray.length; i++){
    //sum = sum + productArray[i].price;
    //itemCount = itemCount + 1;
    //}
    // console.log(sum);
    // console.log(itemCount);
    aveProductPrice = sum / itemCount;
    return aveProductPrice;
}
console.log("Average product price is " + calcAverageProductPrice(products));
// Declare an array called inventory  which is an array of type Product.
let inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10, },
    { product: { name: "sensor", price: 4 }, quantity: 12.5, },
    { product: { name: "LED", price: 20 }, quantity: 10, }
];
function calcInventoryValue(productArray) {
    let inventoryTotalValue = 0;
    for (let i = 0; i < productArray.length; i++) {
        inventoryTotalValue = inventoryTotalValue + ((productArray[i].product.price * productArray[i].quantity) * productArray.length);
    }
    return inventoryTotalValue;
}
console.log(calcInventoryValue(inventory));