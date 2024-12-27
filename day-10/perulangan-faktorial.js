const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Masukkan angka untuk menghitung faktorial: ", (input) => {
    const number = parseInt(input);
  
    if (isNaN(number) || number < 0) {
      console.log("Input tidak valid. Masukkan angka non-negatif.");
      readline.close();
      return;
    }
  
    let factorial = 1; 
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
  
    console.log(`Faktorial dari ${number} adalah ${factorial}.`);
    readline.close();
  });
  