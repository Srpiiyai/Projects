let homeCounter = 0
let guestCounter = 0

let homeDisplay = document.getElementById("home-score")
let guestDisplay = document.getElementById("guest-score")

function addOneH() {
    homeCounter += 1
    homeDisplay.textContent = homeCounter
}
function addTwoH() {
    homeCounter += 2
    homeDisplay.textContent = homeCounter
}
function addThreeH() {
    homeCounter += 3
    homeDisplay.textContent = homeCounter
}


function addOneG() {
    guestCounter += 1
    guestDisplay.textContent = guestCounter
}
function addTwoG() {
    guestCounter += 2
    guestDisplay.textContent = guestCounter
}
function addThreeG() {
    guestCounter += 3
    guestDisplay.textContent = guestCounter
}