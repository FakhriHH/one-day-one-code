// Ambil elemen-elemen dari DOM
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

// Variabel untuk menghitung jumlah klik
let clickCount = 0;

// Event listener untuk menangani klik pada tombol
clickButton.addEventListener('click', () => {
  // Tambah 1 ke clickCount setiap kali tombol diklik
  clickCount++;

  // Perbarui teks pada elemen <span> dengan ID 'clickCount'
  clickCountDisplay.textContent = clickCount;
});
