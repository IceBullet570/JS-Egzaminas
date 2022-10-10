/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


// let firstNumber = prompt("Pirmas skaicius?")
// let secondNumber = prompt("Antras skaicius?")

function Calculator(first, second) {
    this.sum = function() {
        return +first + +second
    }
    this.substraction = function() {
        return +first - +second
    }
    this.multiplication = function() {
        return +first * +second
    }
    this.division = function() {
        return (+first / +second).toFixed(2)
    }
}

let firstNumber = prompt("Pirmas skaicius?")
let secondNumber = prompt("Antras skaicius?")

const skaiciai = new Calculator(firstNumber, secondNumber)
console.log(skaiciai.sum())
console.log(skaiciai.substraction())
console.log(skaiciai.multiplication())
console.log(skaiciai.division())