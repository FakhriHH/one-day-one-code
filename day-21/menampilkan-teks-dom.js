// Ambil elemen-elemen dari DOM
const displayButton = document.getElementById('displayButton');
const userInput = document.getElementById('userInput');
const output = document.getElementById('output');

// Event listener untuk tombol yang akan menampilkan teks
displayButton.addEventListener('click', () => {
  // Ambil nilai dari input teks
  const text = userInput.value;
  
  // Menampilkan teks ke elemen <p> dengan id 'output'
  output.textContent = `Teks yang dimasukkan: ${text}`;
  
  // Kosongkan input setelah tombol ditekan
  userInput.value = '';
});
