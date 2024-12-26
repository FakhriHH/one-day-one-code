const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Masukkan jumlah baris piramida: ", (input) => {
    const rows = parseInt(input);
  
    if (isNaN(rows) || rows <= 0) {
      console.log("Input tidak valid. Masukkan angka positif.");
      readline.close();
      return;
    }
  
    console.log("Piramida Angka:");
  
    for (let i = 1; i <= rows; i++) {
      let row = " ".repeat(rows - i); 
      for (let j = 1; j <= i; j++) {
        row += j + " ";
      }
      console.log(row); 
    }
  
    readline.close();
  });
  