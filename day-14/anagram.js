const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function areAnagrams(str1, str2) {
    // Menghapus spasi dan mengubah huruf menjadi huruf kecil
    const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();
  
    // Mengurutkan huruf-huruf dalam string
    const sortedStr1 = normalize(str1).split("").sort().join("");
    const sortedStr2 = normalize(str2).split("").sort().join("");
  
    // Membandingkan string yang sudah diurutkan
    return sortedStr1 === sortedStr2;
  }
  
  readline.question("Masukkan string pertama: ", (str1) => {
    readline.question("Masukkan string kedua: ", (str2) => {
      if (areAnagrams(str1, str2)) {
        console.log(`"${str1}" dan "${str2}" adalah anagram.`);
      } else {
        console.log(`"${str1}" dan "${str2}" bukan anagram.`);
      }
      readline.close();
    });
  });
  