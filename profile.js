
let favColorBtn = document.querySelector(`#color`)
let favPlaceBtn = document.querySelector(`#place`)
let favRitualBtn = document.querySelector(`#ritual`)


const favColor = ((evt) => {
    alert(`My favorite color is Blue`)
})


const favPlace = ((evt) => {
    alert(`My favorite place is Indonesia`)
})


const favRitual = ((evt) => {
    alert(`My favorite ritual is Meditation`)
})




favColorBtn.addEventListener('click', favColor)
favPlaceBtn.addEventListener('click', favPlace)
favRitualBtn.addEventListener('click', favRitual)