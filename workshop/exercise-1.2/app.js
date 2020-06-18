// Exercise 1.2
// ------------
console.log('exercise 1.2');


//set global variables
let randTime = Math.floor(Math.random()*6000);
let result = document.querySelector('#result');
let timeText = document.querySelector('#time');

//setting timer text
timeText.innerHTML = `${Math.round(randTime/1000)}s`

//create function for timer
//set losing condition 


const gameTimer = setTimeout(() => {
    result.innerHTML = 'You lose! (┛ಠ_ಠ)┛彡┻━┻';
    //remove event listener
    document.removeEventListener('click',clickWin);
}, randTime);


//create function for click event
const clickWin = function(){
    result.innerHTML = 'You win! ٩(^ᴗ^)۶';
    clearTimeout(gameTimer);
    //remove event listener
    document.removeEventListener('click',clickWin);

}

//set click event for winning
document.addEventListener('click',clickWin);
