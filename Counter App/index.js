// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

let counter = 0
let arrToStoreValue = []

function increment() {
    counter++
    document.querySelector("#count-el").innerHTML = counter
}

function reset() {
    counter = 0
    document.querySelector("#count-el").innerHTML = counter
}

function store() {
    arrToStoreValue.push(counter)
    document.querySelector("#stored-value").innerHTML = `Stored values: ${arrToStoreValue}`
}


