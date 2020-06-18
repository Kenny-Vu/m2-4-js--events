const balloon = document.getElementById('balloon');

//delcare variables
let balloonSize = 12;
balloon.style.fontSize = `${balloonSize}px`;
const rate = 5;
const limit = 500;
//events key down - inflate
const handleKeyDown = function(event){
    if(event.key === "ArrowUp") {
        balloonSize += rate;
        balloon.style.fontSize = `${balloonSize}px`;
    }
    if(event.key === "ArrowDown") {
        balloonSize -= rate;
        balloon.style.fontSize = `${balloonSize}px`;
    }
    if(balloonSize > limit) {
        balloon.innerText = "💥";
        const explosion = setInterval(() => {
            balloonSize += 50;
            balloon.style.fontSize = `${balloonSize}px`;
            if(balloonSize = 1000){
                console.log(balloonSize);
                balloon.style.transitionDuration = '2s';
                balloon.style.opacity = 0;
                clearInterval(explosion);
            }
        }, 20);
        
        document.removeEventListener('keydown',handleKeyDown);
    }
}
document.addEventListener('keydown',handleKeyDown)
// event key up - deflate


//if ballon bigger than certain height/width - pop