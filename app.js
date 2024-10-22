// today's forecasted temperature
const kelvin =  prompt("Enter temperature in Kelvin?");

// forecasted temperature in celsius
let celsius = kelvin - 273;

// forecasted temperature in fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// round value of fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)