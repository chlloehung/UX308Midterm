function calculateTotalValue(nickels, dimes, quarters, loonies, toonies) {
    // define the coin value
    const nickel = 0.05;
    const dime = 0.10;
    const quarter = 0.25;
    const loonie = 1.00;
    const toonie = 2.00;

    // total value calculation 
    return (nickels * nickel) + (dimes * dime) + (quarters * quarter) + (loonies * loonie) + (toonies * toonie);
}

console.log(calculateTotalValue(0, 0, 0, 0, 0)); 
console.log(calculateTotalValue(2, 3, 4, 1, 2)); 
console.log(calculateTotalValue(10, 10, 10, 10, 10)); 

export {calculateTotalValue}