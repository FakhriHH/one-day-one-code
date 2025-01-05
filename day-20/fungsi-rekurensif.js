function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * calculateFactorial(n - 1);
}
  
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
readline.question("Masukkan angka untuk menghitung faktorial: ", (input) => {
    const number = parseInt(input, 10);
  
    if (isNaN(number) || number < 0) {
        console.log("Masukkan angka positif atau nol!");
    } else {
        const result = calculateFactorial(number);
        console.log(`Faktorial dari ${number} adalah ${result}`);
    }
  
    readline.close();
});
  