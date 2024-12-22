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
  
  const tanggalLahir = "2000-12-20";
  console.log(`Tanggal Lahir: ${tanggalLahir}`);
  console.log(`Umur: ${hitungUmur(tanggalLahir)} tahun`);