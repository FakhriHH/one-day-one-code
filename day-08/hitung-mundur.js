const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Masukkan durasi hitung mundur (dalam detik): ", (input) => {
    let seconds = parseInt(input);
  
    if (isNaN(seconds) || seconds <= 0) {
      console.log("Input tidak valid. Masukkan angka positif.");
      readline.close();
      return;
    }
  
    console.log(`Hitung mundur dimulai: ${seconds} detik`);
  
    const timer = setInterval(() => {
      if (seconds > 0) {
        console.log(`${seconds} detik tersisa`);
        seconds--;
      } else {
        console.log("Waktu habis!");
        clearInterval(timer); 
        readline.close();
      }
    }, 1000); 
  });
  