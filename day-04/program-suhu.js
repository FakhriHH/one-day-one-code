function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}
  
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
  
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
readline.question("Masukkan suhu (misalnya 25C atau 77F): ", (input) => {
const value = parseFloat(input);
const unit = input[input.length - 1].toUpperCase();
  
if (unit === "C") {
    console.log(`${value}°C adalah ${celsiusToFahrenheit(value).toFixed(2)}°F`);
} else if (unit === "F") {
    console.log(`${value}°F adalah ${fahrenheitToCelsius(value).toFixed(2)}°C`);
} else {
    console.log("Unit suhu tidak valid. Gunakan C atau F.");
}
  
readline.close();
});
  