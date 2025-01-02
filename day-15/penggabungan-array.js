const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function mergeArrays(array1, array2) {
    return array1.concat(array2);
  }
  
  function parseArrayInput(input) {
    return input.split(",").map((item) => item.trim());
  }
  
  readline.question("Masukkan elemen untuk array pertama (pisahkan dengan koma): ", (input1) => {
    const array1 = parseArrayInput(input1);
  
    readline.question("Masukkan elemen untuk array kedua (pisahkan dengan koma): ", (input2) => {
      const array2 = parseArrayInput(input2);
  
      const mergedArray = mergeArrays(array1, array2);
      console.log("Array gabungan:", mergedArray);
  
      readline.close();
    });
  });
  