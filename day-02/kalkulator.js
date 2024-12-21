function tambah(a, b) {
  return a + b;
}
  
function kurang(a, b) {
  return a - b;
}
  
function kali(a, b) {
  return a * b;
}
  
function bagi(a, b) {
  if (b === 0) {
    return "Tidak bisa dibagi dengan 0";
  } else {
    return a / b;
  }
}
  
let angka1 = 10;
let angka2 = 5;
  
console.log("Penjumlahan: " + tambah(angka1, angka2)); 
console.log("Pengurangan: " + kurang(angka1, angka2)); 
console.log("Perkalian: " + kali(angka1, angka2));    
console.log("Pembagian: " + bagi(angka1, angka2));     
console.log("Pembagian dengan 0: " + bagi(angka1, 0));  
  