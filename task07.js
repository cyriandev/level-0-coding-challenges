// Task 0.7


function toCelsius(temp) {
    const celsius = (temp - 32) * 5 / 9;
    return celsius;
}

console.log(toCelsius(32) + 'C');



function toFahrenheit(temp) {
    const fahrenheit = (temp * 9 / 5) + 32;
    return fahrenheit;
}

console.log(toFahrenheit(0) + 'F');

