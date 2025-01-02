const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Masukkan kata atau kalimat yang ingin dibalik: ", (input) => {
    // Membalikkan string
    const reversed = input.split("").reverse().join("");
    console.log(`Hasil setelah dibalik: ${reversed}`);
  
    readline.close();
  });
  