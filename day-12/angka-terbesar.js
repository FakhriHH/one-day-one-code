const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(
    "Masukkan angka-angka dipisahkan dengan spasi (contoh: 5 10 15 20): ",
    (input) => {
      // Mengubah input menjadi array angka
      const numbers = input.split(" ").map(Number);
  
      // Validasi input: Pastikan semua elemen adalah angka
      if (numbers.some(isNaN)) {
        console.log("Input tidak valid. Pastikan hanya memasukkan angka.");
      } else {
        // Mencari angka terbesar
        const largestNumber = Math.max(...numbers);
        console.log(`Angka terbesar adalah: ${largestNumber}`);
      }
  
      readline.close();
    }
  );
  