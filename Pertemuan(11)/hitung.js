function hitungJumlah() {
    // Mendapatkan nilai input dari elemen dengan id "bilangan1" dan "bilangan2"
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value) || 0;
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value) || 0;

    // Menghitung jumlah dua bilangan
    var hasilJumlah = bilangan1 + bilangan2;

    // Menampilkan hasil pada elemen dengan id "hasil"
    document.getElementById("hasil").innerHTML = hasilJumlah;
}
