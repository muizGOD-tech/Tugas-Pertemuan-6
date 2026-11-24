const daftarBuku = [
  { judul: "Dasar Pemrograman Web", harga: 85000, stok: 12 },
  { judul: "Algoritma dan Logika", harga: 95000, stok: 0 },
  { judul: "Basis Data untuk Pemula", harga: 120000, stok: 5 },
  { judul: "Jaringan Komputer", harga: 110000, stok: 8 }
];

console.log("=== Daftar Buku Pustaka Mahasiswa ===");
for (let i = 0; i < daftarBuku.length; i++) {
  let buku = daftarBuku[i];
  let keterangan;
  if (buku.stok > 0) {
    keterangan = "(Tersedia)";
  } else {
    keterangan = "(Habis)";
  }
  console.log((i + 1) + ". " + buku.judul + " - Rp" + buku.harga + " - Stok: " + buku.stok + " " + keterangan);
}

function hitungTotalAset(buku) {
  let total = 0;
  for (let i = 0; i < buku.length; i++) {
    total = total + buku[i].harga * buku[i].stok;
  }
  return total;
}

console.log("Total nilai aset: Rp" + hitungTotalAset(daftarBuku));

let jumlahHabis = 0;
for (let i = 0; i < daftarBuku.length; i++) {
  if (daftarBuku[i].stok === 0) {
    jumlahHabis++;
  }
}
console.log("Jumlah buku habis: " + jumlahHabis);