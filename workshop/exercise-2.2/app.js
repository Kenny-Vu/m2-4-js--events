//set global variables
let main = document.querySelector('#main');
let buttonAmount = 20;

//create functionality to buttons
const toggleColor = function(event){
    let buttonStyle = window.getComputedStyle(event.target);
    let buttonColor = buttonStyle.getPropertyValue('background-color');
    console.log(buttonColor);
    if(buttonColor === "rgb(255, 99, 71)"){
        event.target.style.backgroundColor = "rgb(0, 128, 0)";
    } else if(buttonColor === "rgb(0, 128, 0)") {
        event.target.style.backgroundColor = "rgb(255, 99, 71)";
    }
}

//create buttons + style + give them either class or Id

const createButtons = function(){
    for (num=0;num<20;num++){
        let newButton = document.createElement('button');
        newButton.classList.add('button');
        newButton.innerText = `${num+1}`;
        main.appendChild(newButton);
    }
}

//call main function 
createButtons();

let buttonArr = [...document.querySelectorAll('.button')];

buttonArr.forEach(function(button){
    button.addEventListener('click',toggleColor);
})
