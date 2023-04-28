console.log("hello world");



function handleSubmit(event) {
	event.preventDefault()
	alert('Your form is submitted!');
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit)

/*
I tried this and still the same results, nothing comes up on the screen. 
I am not sure what i'm missing here.
*/
// let form = document.querySelector('#contact');
// form.addEventListener('submit', function(evt) {
// 	evt.preventDefault()
// 	alert('Your form submitted sucessfully!')
// })




/*I liked this way better since it's short */
let picture = document.querySelector('img');

picture.addEventListener('mouseover', function() {
	alert('You look great today!');
});


/*This was my original but wanted to shorten it */
// function overImg () {
// 	alert('You look great today!')
// }

// let picture = document.querySelector('img');
// picture.addEventListener('mouseover', overImg)