//variables
let main = document.querySelector('#main');
let buttonNum = 20;


//create functionality for buttons - function probably needs to exist before event can be added
const toggleColor = function(event){
    event.target.classList.toggle('alt-button')
}

//generate buttons everywhere
const generateButton = function(){
    for(let num=0;num<buttonNum;num++){
        let newButton = document.createElement('button');
        newButton.innerText = `${num+1}`;
        newButton.classList.add('button');
        newButton.style.top = Math.floor(Math.random()*90) + 'vh';
        newButton.style.left = Math.floor(Math.random()*90) + 'vw';
        main.appendChild(newButton);
        //add event to each buttons created
        newButton.addEventListener('click',toggleColor);
    }
}

generateButton();

