

let randomBtn = document.querySelector(`#random`)

let foodArr = [`Spitz`, `Even Stevens`, `Pretty Bird`, `Salt Lake BBQ`, `Bombay House`]



const randFood = (event) => {
    const random = foodArr[Math.floor(Math.random() * foodArr.length)]
    let pTag = document.querySelector('#newFood')
    pTag.textContent = `You should try ${random}!`
}


randomBtn.addEventListener('click', randFood)