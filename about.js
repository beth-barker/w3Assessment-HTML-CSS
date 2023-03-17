console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thank you for contacting us!')
}

function mouseoverCompliment (evt) {
	evt.preventDefault()

	alert('Wow, you really like ducks!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.querySelector('img')

duck.addEventListener('mouseover', mouseoverCompliment)