function SuccessSub(event) {
    event.preventDefault();

    let namaPelanggan = document.getElementById("namaPelanggan").value;
    let email = document.getElementById("email").value;
    let jamKeberangkatan = document.getElementById("jamKeberangkatan").value;
    let tujuanKeberangkatan = document.getElementById("tujuanKeberangkatan").value;
    let jumlahTiket = document.getElementById("jumlahTiket").value;

    let resultDiv = document.getElementById("result");
    resultDiv.style.color = "#4caf50";
    resultDiv.innerHTML =
        "Nama Pelanggan: " + namaPelanggan + "<br>" +
        "Email: " + email + "<br>" +
        "Jam Keberangkatan: " + jamKeberangkatan + "<br>" +
        "Tujuan Keberangkatan: " + tujuanKeberangkatan + "<br>" +
        "Jumlah Tiket: " + jumlahTiket;
}
