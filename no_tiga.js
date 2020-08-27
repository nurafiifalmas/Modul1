let t = 1.7 //Meter
let b = 90 //Kg

const BMI = (b / (t **2))

console.log("---------------------------------------------------")
console.log("JAWAB : ")
console.log()
console.log("Tinggi Badan Rhodey = 170 cm")
console.log("Tinggi Badan Rhodey = "+b,"kg")
console.log("---------------------------------------------------")
console.log("            STATUS BERAT BADAN RHODEY              ")
console.log()

if (BMI < 18.5){
    console.log("Kekurangan Berat Badan")
}
else if (BMI <= 24.9){
    console.log("Normal (ideal)")

}else if (BMI <= 29.9){
    console.log("Kelebihan Berat Badan")

}else {
    console.log("Kegemukan (Obesitas)")
}
console.log("---------------------------------------------------")