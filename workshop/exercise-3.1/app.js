//element variables
let clock = document.getElementById('main');
let hoursDiv = document.getElementById('hours');
let minutesDiv = document.getElementById('minutes');
let secondsDiv = document.getElementById('seconds');

const time = setInterval(function(){
    //calculate current time 
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    //write time into clock
    hoursDiv.innerText = hours;
    minutesDiv.innerText = minutes;
    secondsDiv.innerText = seconds;
    console.log('noshipo');
},1000);

