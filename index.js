let counterEl = document.getElementById("counter-el")
let countEl = document.getElementById("count-el")
let counterEl2 = document.getElementById("counter2-el")
let count = 0
let count1 = 0

function homeScore() {
    count = count + 1
    counterEl.textContent = count  
}

function homeScore2() {
    count = count + 2
    counterEl.textContent = count
}

function homeScore3() {
    count = count + 3
    counterEl.textContent = count 
}    

function guestScore() {
    count1 = count1 + 1
    counterEl2.textContent = count1
}

function guestScore2() {
    count1 = count1 + 2
    counterEl2.textContent = count1 
}

function guestScore3() {
    count1 = count1 + 3
    counterEl2.textContent = count1 
}