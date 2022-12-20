/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const oneMeter = 3.28084
const oneLiter = 0.264172
const oneKilo = 2.20462
const inputEl = document.getElementById("input-box")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    const inputValue = inputEl.value
    const values = {
        length: findLength(inputValue),
        volume: findVolume(inputValue),
        mass: findMass(inputValue)
    }
    render(values, inputValue)
})

function findLength(value) {
    const feet = (Number(value) * oneMeter).toFixed(3)
    const meters = (Number(value) / oneMeter).toFixed(3)
    return [feet, meters]
}

function findVolume(value) {
    const gallons = (Number(value) * oneLiter).toFixed(3)
    const litre = (Number(value) / oneLiter).toFixed(3)
    return [gallons, litre]  
}

function findMass(value) {
    const pounds = (Number(value) * oneKilo).toFixed(3)
    const kilos = (Number(value) / oneKilo).toFixed(3)
    return [pounds, kilos]  
}

function render(value, inputValue) {
    Leng = value["length"]
    vol = value["volume"]
    mass = value["mass"]
    lengthEl.innerHTML = `${inputValue} meters = ${Leng[0]} feet | ${inputValue} feet = ${Leng[1]} meters`
    volumeEl.innerHTML = `${inputValue} liters = ${vol[0]} gallons | ${inputValue} gallons = ${vol[1]} liters`
    massEl.innerHTML = `${inputValue} kilos = ${mass[0]} pounds | ${inputValue} pounds = ${mass[1]} kilos`
}