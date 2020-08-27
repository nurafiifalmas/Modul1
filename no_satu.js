let p = 20.5
let l = 30
let harga = 1500000
let ppn = 0.15

const LuasTanah = (p * l)
const TotalHarga = (LuasTanah * harga)
const Pajak = (TotalHarga * ppn)
const TotalBayar = (TotalHarga + Pajak)

console.log("---------------------------------------------------")
console.log("JAWAB : ")
console.log()
console.log("Luas tanah yang dibeli  : "+ LuasTanah + " m2")
console.log("Harga /meter            : Rp"+harga)
console.log("Harga tanah yang dibeli : Rp"+TotalHarga)
console.log("PPN Pembelian           : 15%")
console.log("Total pajak             : Rp"+Pajak)
console.log("---------------------------------------------------")
console.log("       TOTAL HARGA TANAH YANG HARUS DIBAYAR        ")
console.log()
console.log("Total Harga             : Rp"+TotalBayar)
console.log("---------------------------------------------------")