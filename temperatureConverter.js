function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(212));
console.log(fahrenheitToCelsius(70)); 

export {fahrenheitToCelsius}