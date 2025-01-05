function searchValueByKey(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return `Nilai untuk kunci "${key}" adalah "${obj[key]}" `;
  } else {
    return `Kunci "${key}" tidak ditemukan dalam objek`;
  } 
}

const buku = {
  judul: "Belajar JavaScript",
  pengarang: "Louisfer",
  harga: 120000,
  penerbit: "Tech Publisher",
};

const readline = require ("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukin kunci yang ingin dicari: ", (key) => {
  const result = searchValueByKey(buku, key);
  console.log (result);
  readline.close();
})