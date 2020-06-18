//global variables
let main = document.querySelector('#main');
let buttonAmount = 20;

// create 20 buttons
//style 20dbuttons + add personal number 
//append 20 buttons to main div
for(num=0;num<buttonAmount;num++){
    let newbutton = document.createElement('button');
    newbutton.classList.add('new-button');
    newbutton.innerText = `${num+1}`
    main.appendChild(newbutton);
}

//create functionality for buttons
function greenIsTheBestColor(event){
    event.target.style.backgroundColor = "green";
}
//add click event to buttons
let buttonArr = [...document.getElementsByClassName('new-button')];
console.log(buttonArr);
buttonArr.forEach(function(button){
    button.addEventListener('click',greenIsTheBestColor);
})