//Convert temperature Fahrenheit to Celsius? (Conditional logic Question)

function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const temperatureF = 60; // Fahrenheit temperature
const temperatureC = convertToCelsius(temperatureF);

if (temperatureF >= -459.67 && temperatureF <= 1000) { // Valid Fahrenheit temperature range
    console.log(`${temperatureF}°F is equal to ${temperatureC.toFixed(2)}°C.`);
} else {
    console.log('Invalid temperature. Please enter a temperature within the valid range.');
}
