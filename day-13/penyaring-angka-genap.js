const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(
    "Masukkan angka-angka dipisahkan dengan spasi (contoh: 1 2 3 4 5 6): ",
    (input) => {
      const numbers = input.split(" ").map(Number);
  
      if (numbers.some(isNaN)) {
        console.log("Input tidak valid. Pastikan hanya memasukkan angka.");
      } else {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        console.log(`Angka genap: ${evenNumbers.join(", ")}`);
      }
  
      readline.close();
    }
  );
  