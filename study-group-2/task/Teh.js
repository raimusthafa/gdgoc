function buatTeh(input) {
    console.log("⏳ Sedang merebus air... (Tunggu 2 detik)");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === "Gula Batu") {
                resolve("✅ Teh Gula Batu siap dinikmati!");
            } else {
                reject("❌ Maaf, stok gula habis.");
            }
        }, 2000);
    });
}

buatTeh("Gula Batu")
    .then((hasil) => {
        console.log(hasil);
    })
    .catch((error) => {
        console.log(error);
    });
