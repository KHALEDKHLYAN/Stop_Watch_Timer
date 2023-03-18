//  Variables for buttons 

 const startStopBtn = document.querySelector('#startStopBtn');
 const restBtn = document.querySelector('#resetBtn');

//  Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Leading Zeros

let LeadingSeconds = 0;
let LeadingMinutes = 0;
let LeadingHours = 0;

// Variables for set Interval & TimerStatus

let timerInterval = null;
let timerStatus = "stopped";
// Stop watch Function

const StopWatch = () => {

    seconds++

    if(seconds / 60 == 1){
        seconds = 0;
        minutes ++;

        if(minutes / 60 ==1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        LeadingSeconds = '0' + seconds.toString();
    } else{
        LeadingSeconds = seconds;
    }
    if(minutes < 10){
        LeadingMinutes = '0' + minutes.toString();
    } else{
        LeadingMinutes = minutes;
    }
    if(hours < 10){
        LeadingHours = '0' + hours.toString();
    } else{
        LeadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText =
    LeadingHours + ":" + LeadingMinutes + ":" + LeadingSeconds;
}

// 

startStopBtn.addEventListener('click', function(){

    if(timerStatus === "stopped") {
        timerInterval = window.setInterval(StopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started"
    } else {
        window.setInterval(StopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play"></i>`;
        timerStatus = "stopped";
    }

});

restBtn.addEventListener('click', function(){

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes= 0;
    hours = 0;

    document.getElementById('timer').innerHTML ="00:00:00";
    
})