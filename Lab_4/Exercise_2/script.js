let countdown;
let remainingTime = 60; 

const startButton = document.getElementById('start_btn');
const finishButton = document.getElementById('finish');
const timerDisplay = document.getElementById('time_display');
const timerSection = document.getElementById('time_container');
const questionsSection = document.getElementById('table');
const submitSection = document.getElementById('submit_container');
const startSection = document.getElementById('countdown_container');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}

function startCountdown() {
    remainingTime = 60;
    startSection.style.display = 'none'; // Hide the start button
    timerSection.style.display = 'block'; // Show the timer section
    questionsSection.style.display = 'block'; // Show the questions
    timerDisplay.textContent = `The remaining time: ${formatTime(remainingTime)} [mm:ss]`;

    countdown = setInterval(function() {
        remainingTime--;
        timerDisplay.textContent = `The remaining time: ${formatTime(remainingTime)} [mm:ss]`;

        if (remainingTime <= 0) {
            clearInterval(countdown); // Stop the timer
            timerSection.style.display = 'none'; // Hide timer
            questionsSection.style.display = 'none'; // Hide questions
            submitSection.style.display = 'block'; // Show submit section
        }
    }, 1000);
}
function startAgain() {
    clearInterval(countdown);
    submit_container.style.display = 'none'; // Hide the start button
    startSection.style.display = 'block';
}

// Start button event listener
startButton.addEventListener('click', startCountdown);
finish.addEventListener('click', startAgain);