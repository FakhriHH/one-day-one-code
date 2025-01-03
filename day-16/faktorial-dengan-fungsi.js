const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
function factorial(n) {
    if (n < 0) {
        return "Faktorial tidak terdefinisi untuk angka negatif.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1); 
    }
}
  
readline.question("Masukkan bilangan untuk menghitung faktorial: ", (input) => {
    const number = parseInt(input);
  
    if (isNaN(number)) {
        console.log("Masukkan bilangan yang valid.");
    } else {
        console.log(`Faktorial dari ${number} adalah: ${factorial(number)}`);
    }
  
    readline.close();
});
  