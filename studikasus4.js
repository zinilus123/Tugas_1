const stok = [12, 0, 5, 8, 0, 20];
let stokAda = 0;
let stokHabis = 0;

for (let i = 0; i < stok.length; i++) {
    if (stok[i] <= 0) {
        status = "Barang Habis",
        stokHabis++
    } else {
        status = "Stok Tersedia",
        stokAda++
    }
    console.log(`Barang ke-${i + 1} : ${stok[i]} -> ${status}`);
};

console.log("============================")
console.log("Barang yang masih tersedia: ", stokAda);
console.log("Barang yang habis: ", stokHabis);