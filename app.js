//  Variables for buttons 

 const startStopBtn = document.querySelector('#startStopBtn');
 const restBtn = document.querySelector('#resetBtn');

//  Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

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

    let displayTimer = document.getElementById('timer').innerText =
    hours + ":" + minutes + ":" + seconds;
}

window.setInterval(StopWatch, 1)