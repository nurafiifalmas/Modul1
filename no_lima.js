class Lingkaran{
    constructor(phi, r){
        this.jari2 = r
        this.phi = phi
    }

    luas(){
        return this.phi * (this.jari2 **2)
    }

    keliling(){
        return 2 * this.phi * this.jari2
    }

}

class Bola extends Lingkaran{
    constructor(phi, r){
        super(phi, r)
    }

    volume(){
        return (4/3) * this.phi * (this.jari2**3)
    }

    LusaPermukaan(){
        return 4 * this.phi * (this.jari2 **2)
    }
}

class Kerucut extends Lingkaran{
    constructor(phi, r, t){
        super(phi, r)
        this.tinggi = t
    }

    volume(){
        return (1/3) * this.phi * (this.jari2 **2) * this.tinggi
    }

    LusaPermukaan(){
        return this.phi * this.jari2 * (this.jari2 * (Math.sqrt((this.jari2 **2) + (this.tinggi **2))))
    }

    luasSelimut(){
        return this.phi * this.jari2 * (Math.sqrt((this.jari2 **2) * (this.tinggi **2)))
    }
}


class Tabung extends Lingkaran{
    constructor(phi, r, t){
        super(phi, r)
        this.tinggi = t
    }

    volume(){
        return this.phi * (this.jari2 **2) * this.tinggi
    }

    LusaPermukaan(){
        return this.phi * this.jari2 * (this.jari2 * 2 * this.tinggi)
    }

    luasSelimut(){
        return this.phi * this.jari2 * this.tinggi
    }
}

console.log()
console.log("JAWAB : ")
console.log("----------------------------------------")
console.log("                 BOLA                   ")
let bola = new Bola (3.14, 15)
console.log()
console.log("Jari - jari    = 15 cm")
console.log("Volume         = "+bola.volume(), "cm3")
console.log("Luas Permukaan = "+bola.LusaPermukaan(), "cm2")
console.log("----------------------------------------")
console.log("             TRAFFIC CONE               ")
let traffic = new Kerucut (3.14, 10, 40)
console.log()
console.log("Jari - jari    = 10 cm")
console.log("Tinggi         = 40 cm")
console.log("Volume         = "+traffic.volume(), "cm3")
console.log("Luas Permukaan = "+traffic.LusaPermukaan(), "cm2")
console.log("Luas Selimut   = "+traffic.luasSelimut(), "cm2")
console.log("----------------------------------------")
console.log("                 GELAS                  ")
let gelas = new Tabung (3.14, 7.5, 50)
console.log()
console.log("Jari - jari    = 7.5 cm")
console.log("Tinggi         = 50 cm")
console.log("Volume         = "+gelas.volume(), "cm3")
console.log("Luas Permukaan = "+gelas.LusaPermukaan(), "cm2")
console.log("Luas Selimut   = "+gelas.luasSelimut(), "cm2")
console.log("----------------------------------------")