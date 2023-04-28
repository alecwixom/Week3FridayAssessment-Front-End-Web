console.log('JS connected');

function colorChange () {
    alert('Favorite color is Blue!')
}


let colorBtn = document.querySelector('#color');
colorBtn.addEventListener('click', colorChange)