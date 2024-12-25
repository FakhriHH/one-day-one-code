const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Masukkan rentang angka (contoh: 1-50): ", (input) => {
    const range = input.split("-"); 
    const start = parseInt(range[0]); 
    const end = parseInt(range[1]);  
  
    if (isNaN(start) || isNaN(end)) {
      console.log("Rentang tidak valid. Harap masukkan dalam format angka (contoh: 1-50).");
    } else if (start > end) {
      console.log("Rentang awal tidak boleh lebih besar dari rentang akhir.");
    } else {
      console.log(`Kelipatan 3 atau 5 dalam rentang ${start} hingga ${end}:`);
      for (let i = start; i <= end; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          console.log(i);
        }
      }
    }
  
    readline.close();
  });
  