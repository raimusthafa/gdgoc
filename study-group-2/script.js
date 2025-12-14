// 1. arrow function
const greetings = (nama) => console.log (`Halo, ${nama}, Selamat Siang.`)

// 2, spread operator
const dataNilai = {
    matkul: "Basis Data",
    nilai: 90,
    status: "Lulus",
};

// Data Tambahan
const dataTambahan = { semester: 2, aktif: true};

// Menggabungkan nilai

const dataMahasiswa = {...dataNilai, ...dataTambahan};

console.log("Data Mahasiswa: ", dataMahasiswa);

greetings("budi");