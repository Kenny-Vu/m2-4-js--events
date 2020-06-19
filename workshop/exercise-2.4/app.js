//define variables
let startButton = document.querySelector('#startButton');
let main = document.querySelector('#main');
let ballsNum = Math.floor(Math.random()*10+1);
let startTime = 5;
let generatedBalls = [];
let ballsClickedNum = []; //number of balls with winning color
let endGameMessage = document.querySelector('#endGameMessage');

// function when balls are clicked
const ballClick = function(event){
    //changes color of balls
    event.target.classList.toggle('balls-clicked');
    ballsClickedNum = [...document.getElementsByClassName('balls-clicked')];
}
//generate balls
const generateBalls = function(){
    for(let num=0;num<ballsNum;num++){
        let newBall = document.createElement('div');
        let positionX = Math.floor(Math.random()*60+5);
        let positionY = Math.floor(Math.random()*60+5);
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
    const displayEnd = function(){
        endGameMessage.style.opacity = 1;
        endGameMessage.style.zIndex = 10;
        if(ballsClickedNum.length === ballsNum){
            endGameMessage.innerText = 'You win! \nᕕ( ಠ‿ಠ)ᕗ';
            endGameMessage.style.backgroundImage = "url('https://i.ytimg.com/vi/8Qvao19J7dk/maxresdefault.jpg')"
        } else {
            endGameMessage.innerText = 'You lose! \n(┛ಠ_ಠ)┛彡┻━┻';
            endGameMessage.style.backgroundImage = "url('https://img.buzzfeed.com/buzzfeed-static/static/campaign_images/webdr02/2013/5/29/12/dont-be-sad-look-at-these-baby-ducks-1-19630-1369844609-0_big.jpg')"
        }
    }

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
        if(ballsClickedNum.length === ballsNum){
            clearInterval(timer);
            displayEnd();
        }
        else if(startTime < 0){
            clearInterval(timer);
            displayEnd();
        }
    }, 1000);
    
}


startButton.addEventListener('click',startCountdown);



