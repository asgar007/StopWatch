// declaring variables
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;

// get all the elements
const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const stopButton  = document.getElementById('stop');
const resetButton = document.getElementById('reset');

//function to start timer
function startTimer(){
    interval = setInterval(function(){
        milliseconds +=10;
        if(milliseconds === 1000){
            milliseconds = 0;
            seconds++;
            if(seconds === 60){
                seconds = 0;
                minutes++;
            }
        }
        displayTime();
    }, 10);
}

// funtion to stop timer
function stopTimer(){
    clearInterval(interval);
}

//function to reset timer
function resetTimer(){
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTime();
}

// funtion to dispaly 
function displayTime(){
    const displayMilliSec = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
    const displaySec = seconds < 10 ? `0${seconds}` : seconds;
    const displayMin = minutes < 10 ? `0${minutes}` : minutes;
    display.innerHTML = `${displayMin} : ${displaySec} : ${displayMilliSec}`;
}

//handling all events and assign the relevent functions
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);