const nama = "Budi";
const umur = "20";
const hargaBarang = [12000, 15000, 8000, 5000];
let totalHarga = 0;
let status = false;

for (let i = 0; i < hargaBarang.length; i++) {
    totalHarga += hargaBarang[i]
}
console.log("Total Harga: ", totalHarga);

if (totalHarga > 30000) {
    console.log("Selamat! Anda mendapatkan diskon.")
    status = "mendapatkan diskon";
} else {
    console.log("Belanja lagi agar mendapatkan diskon.")
    status = "tidak mendapatkan diskon";
}

console.log("====================");
console.log("Nama           : ", nama);
console.log("Umur           : ", umur);
console.log("Total Harga    : ", totalHarga);
console.log("Status         : ", status);