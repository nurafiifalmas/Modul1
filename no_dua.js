let barang = 
[
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Telur", harga: 20000, jumlah: 2},
    {nama: "Minyak Goreng", harga: 9000, jumlah: 10},
]

let TotalHarga = 0
let TotalData = barang.length - 1

for(let a = 0; a <= TotalData; a++ ){
    let HargaPerBarang = barang[a].harga * barang[a].jumlah
    TotalHarga += HargaPerBarang
}

console.log()
console.log("                  DAFTAR BARANG                    ")
console.log("---------------------------------------------------")
console.log(barang)
console.log("---------------------------------------------------")
console.log("TOTAL BELANJA = Rp"+TotalHarga)
console.log("---------------------------------------------------")

