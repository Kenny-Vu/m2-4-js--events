// Exercise 1.0
// ------------
let pageBody = document.body;

console.log('exercise-1');
const addP = function(event){
    let newP = document.createElement('p');
    newP.innerText = 'You win!';
    event.target.appendChild(newP)
}

document.addEventListener('click',addP)