<h1>Readme File for JavaScript Stop Watch Code</h1>

<p>This is a simple JavaScript code for creating a stopwatch that counts and displays time in hours, minutes and seconds.</p>
<p>The code contains two buttons, one for starting/stopping the stopwatch and another for resetting it.</p>

<h1>Variables</h1>

The code uses the following variables to handle buttons and time values:

startStopBtn and resetBtn: These variables are used to select the start/stop and reset buttons from the HTML page.

seconds, minutes, and hours: These variables store the current time values of the stopwatch.

LeadingSeconds, LeadingMinutes, and LeadingHours: These variables store the time values with leading zeros, which are displayed on the stopwatch.

timerInterval: This variable holds the value of setInterval function, which is used to start the stopwatch.

timerStatus: This variable keeps track of the current state of the stopwatch (stopped or started).

<h1>Functions</h1>
The code contains a function called StopWatch, which is called every second to update the time values and display them on the stopwatch.

<h1>Event Listeners</h1>
The code uses two event listeners to handle button clicks:

startStopBtn.addEventListener: This event listener starts and stops the stopwatch when the start/stop button is clicked. It uses the timerStatus variable to determine whether the stopwatch should start or stop. It also changes the icon of the button to reflect the current state of the stopwatch.

resetBtn.addEventListener: This event listener resets the stopwatch when the reset button is clicked. It clears the timerInterval value, sets the time values to zero, and updates the stopwatch display to show "00:00:00".

<h1>How to Use</h1>
To use this code, you can copy and paste it into a JavaScript file and link it to an HTML page that contains two buttons and a timer display. You can customize the appearance of the stopwatch using CSS. When the page loads, the stopwatch will be in the stopped state. Clicking the start/stop button will start the stopwatch, and clicking it again will stop it. Clicking the reset button will reset the stopwatch to zero.
