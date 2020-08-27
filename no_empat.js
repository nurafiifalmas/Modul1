class HitungDeretGeometri{
    constructor(a, r, n){
        this.sukuPertama = a
        this.rasio = r
        this.sukuKe_ = n
    }
    
    hitungJumlahRasioLebihDari1 (){
        return (this.sukuPertama * ((this.rasio ** this.sukuKe_) - 1)) / (this.rasio - 1)
    }
    
    hitungJumlahRasioKurangDari1 (){
        return(this.sukuPertama * (1 - (this.rasio**this.sukuKe_))) / (1 - this.rasio)
    }
}

let a = 4, r = 3, n = 10
let geometri = new HitungDeretGeometri(a, r, n)

console.log("---------------------------------------------------")
console.log("JAWAB : ")
console.log()
console.log("Suka Pertama = "+a)
console.log("Rasio        = "+r)
console.log("Suku ke-     = "+n)
console.log("---------------------------------------------------")

if(r > 1){
    console.log("Jumlah 10 suku pertama = "+geometri.hitungJumlahRasioLebihDari1())
}else{
    console.log("Jumlah 10 suku pertama = "+geometri.hitungJumlahRasioKurangDari1())
}

console.log("---------------------------------------------------")