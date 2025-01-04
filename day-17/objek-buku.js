function createdBook (judul, pengarang, harga) {
    return {
        judul: judul,
        pengarang: pengarang,
        harga: harga,

        getDetails: function() {
            return `judul: ${this.judul}, pengarang: ${this.pengarang}, harga: Rp${this.harga}`;
        },
    };
}

const buku1 = createdBook("Belajar Javascript", "Demian", 120000);
const buku2 = createdBook("Pemrograman Website", "Elliot", 130000);
const buku3 = createdBook("Mastering node.js", "Fakhri", 150000);

console.log(buku1.getDetails());
console.log(buku2.getDetails());
console.log(buku3.getDetails());