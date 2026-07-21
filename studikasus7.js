const nilai = [80, 95, 70, 88, 100, 65];
let terbesar = nilai[0];
let terkecil = nilai[0];

for (let i = 1; i < nilai.length; i++) {
    if (nilai[i] > terbesar) {
        terbesar = nilai[i]
    }
};

for (let i = 1; i < nilai.length; i++) {
    if (nilai[i] < terkecil) {
        terkecil = nilai[i]
    }
};

console.log("Nilai terbesar:", terbesar);
console.log("Nilai terkecil:", terkecil);