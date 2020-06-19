//define variables
let startButton = document.querySelector('#startButton');
let main = document.querySelector('#main');
let ballsNum = Math.floor(Math.random()*10);
let startTime = 5;
let generatedBalls = [];
let ballsClickedNum = 0;

// function when balls are clicked
const ballClick = function(event){
    //changes color of balls
    event.target.classList.toggle('balls-clicked');
    console.log(winningCondition);
}
//generate balls
const generateBalls = function(){
    for(let num=0;num<ballsNum;num++){
        let newBall = document.createElement('div');
        let positionX = Math.floor(Math.random()*70+5);
        let positionY = Math.floor(Math.random()*70+5);
        newBall.innerText = `${num+1}`;
        newBall.classList.add('balls')
        newBall.style.top = positionY + 'vh';
        newBall.style.left = positionX + 'vw';
        //adding click event to balls
        newBall.addEventListener('click',ballClick);
        main.appendChild(newBall);
        //adding all created balls to array
        generatedBalls.push(newBall);
    }
}
//display end message if all balls clicked

    


    //set countdown <-- Main function
const startCountdown = function(){
    startButton.removeEventListener('click',startCountdown);
    let countdown = document.querySelector('#countdown');
    //removes start button
    startButton.classList.add('clicked');
    //call function to generate balls
    generateBalls();
    //starts countdown
    const timer = setInterval(() => {
        countdown.innerText = `${startTime}`;
        startTime--;
        if(startTime < 0){
            clearInterval(timer);
        }
    }, 1000);
    
}


startButton.addEventListener('click',startCountdown);



