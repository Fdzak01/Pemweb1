function parkir(){
    //tangkap inputan user
    let masuk = document.querySelector("#masuk").value
    let keluar = document.querySelector("#keluar").value

    //hitung durasi parkir
    let durasi = keluar - masuk

    let biaya = 3000
 
    //looping durasi untuk menghitung biaya
    
    if(durasi >= 2)
        for (let i =2; i < durasi; i++){
            biaya += 1000
    }

    //tangkap elemen untuk menampilkan hasil
    let hasildurasi = document.querySelector("#hasildurasi")
    let totalbiaya = document.querySelector("#totalbiaya")

    //tampilkan hasil
    hasildurasi.innerHTML = durasi
    totalbiaya.innerHTML = biaya
}