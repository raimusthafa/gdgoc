const getDataMahasiswa = async (id) => {
    try {
        console.log("Proses ambil data dari API");

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
            throw new Error("Mahasiswa tidak ditemukan");
        }

        const dataAPI = await response.json();
        const { name, email, phone } = dataAPI;

        console.log("Data berhasil didapatkan");

        return {
            id: id,
            namaLengkap: name,
            email: email,
            kontak: phone,
        };

    } catch (error) {
        console.log("Terjadi Error:", error.message);
        return null;
    } finally {
        console.log("Request selesai\n");
    }
};

const main = async () => {
    const sukses = await getDataMahasiswa(1);
    console.log("Hasil fetch data mahasiswa:", sukses);

    const gagal = await getDataMahasiswa(999);
    console.log("Hasil fetch data mahasiswa:", gagal);
};

main();
