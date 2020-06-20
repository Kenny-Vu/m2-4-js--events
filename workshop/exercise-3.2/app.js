//element variables
let minutesDiv = document.getElementById('minutes');
let secondsDiv = document.getElementById('seconds');
let centisecondsDiv = document.getElementById('centiseconds');
let startButton = document.getElementById('start-btn');
let stopButton = document.getElementById('stop-btn');
let resetButton = document.getElementById('reset-btn');
stopButtonClicked = false;

let centiseconds = 0;
//function to calculate stopwatch
function start(){
    stopButtonClicked = false;
    const stopWatch = setInterval(function(){
        centiseconds++;
        let centisecondsText = centiseconds%100;
        let secondsText = (Math.floor(centiseconds/100))%60;
        let minutesText =  Math.floor((Math.floor(centiseconds/100))/60)
        centisecondsDiv.innerText = centisecondsText;
        secondsDiv.innerText = secondsText + 's';
        minutesDiv.innerText = minutesText + 'm';
        if (stopButtonClicked === true){
            clearInterval(stopWatch);
        }
    },10) 
}

function stop(){
    stopButtonClicked = true;
}
function reset(){
    stopButtonClicked = true;
    centisecondsDiv.innerText = 0;
    secondsDiv.innerText = 0 + 's';
    minutesDiv.innerText = 0 + 'm';
}

startButton.addEventListener('click',start);
stopButton.addEventListener('click',stop);
resetButton.addEventListener('click',reset);


