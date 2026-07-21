const nilai = [90, 75, 60, 45, 88];
let lulus = 0;
let tidakLulus = 0;

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] >= 75) {
        status = "lulus",
        lulus++
    } else {
        status = "tidak lulus",
        tidakLulus++
    }
    console.log(`Siswa ke-${i + 1} : ${nilai[i]} -> ${status}`);
};

console.log(`Jumlah siswa yang lulus        : ${lulus}`);
console.log(`Jumlah siswa yang tidak lulus  : ${tidakLulus}`);