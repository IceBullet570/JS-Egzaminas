/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


let firstNumber = prompt("Pirmas skaicius?")
let secondNumber = prompt("Antras skaicius?")

function Calculator(first, second) {
    this.firstNumber = first
    this.secondNumber = second
}
const suma = function sum(){
    firstNumber + secondNumber
}
console.log(suma);