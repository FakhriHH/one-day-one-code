const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Masukkan sebuah angka: ", (input) => {
    const number = parseInt(input); 
  
    if (isNaN(number)) {
      console.log("Input tidak valid. Harap masukkan angka.");
    } else if (number % 2 === 0) {
      console.log(`${number} adalah angka genap.`);
    } else {
      console.log(`${number} adalah angka ganjil.`);
    }
  
    readline.close();
  });
  