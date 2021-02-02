const startingMinutes = +prompt("Start your timer");
function start(){
// const startingMinutes = document.getElementById('countdownn')
}
let time = startingMinutes * 60;

const countdownEL = document.getElementById('countdown')

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 60 ? '' +seconds : seconds;
    
    countdownEL.innerHTML = `${minutes}:${seconds}`;
    time--;
}