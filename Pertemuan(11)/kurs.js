function hitungdlr() {
    // Mendapatkan nilai input dari elemen dengan id "rupiahInput"
    var jumlahRupiah = parseFloat(document.getElementById("inputrp").value);

    // Nilai kurs dollar
    var kursDollar = 14650;

    // Menghitung nilai dollar
    var nilaiDollar = jumlahRupiah / kursDollar;

    // Menampilkan hasil pada elemen dengan id "hasil"
    document.getElementById("hasil").innerHTML = jumlahRupiah + " rupiah setara dengan " + nilaiDollar.toFixed(2) + " dollar";
}
