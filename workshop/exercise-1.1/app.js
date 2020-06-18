// Exercise 1.1
// ------------
console.log('exercise 1.1');

let pageBody = document.body;


const addH = function(event){
    let newH = document.createElement('h1');
    newH.innerText = 'You win! \n٩(^ᴗ^)۶';
    event.target.appendChild(newH)
    document.removeEventListener('click',addH)
    clearInterval(timer);
}

document.addEventListener('click',addH);

const timer = setTimeout(() => {
    let newH = document.createElement('h1');
    newH.innerText = 'You lose! \n(┛ಠ_ಠ)┛彡┻━┻';
    pageBody.appendChild(newH);
    document.removeEventListener('click',addH);
}, 5000)