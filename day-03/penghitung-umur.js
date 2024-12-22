function hitungUmur(tanggalLahir) {

    const hariIni = new Date();
  
    const tanggalLahirObj = new Date(tanggalLahir);
  
    let umur = hariIni.getFullYear() - tanggalLahirObj.getFullYear();
  
    const bulanHariBelumLewat =
        hariIni.getMonth() < tanggalLahirObj.getMonth() ||
        (hariIni.getMonth() === tanggalLahirObj.getMonth() &&
        hariIni.getDate() < tanggalLahirObj.getDate());
  
    if (bulanHariBelumLewat) {
      umur--;
    }
  
    return umur;
}
  
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
readline.question("Masukkan tanggal lahir (YYYY-MM-DD): ", (tanggalLahir) => {
    console.log(`Umur: ${hitungUmur(tanggalLahir)} tahun`);
    readline.close();
});