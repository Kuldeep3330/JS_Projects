const timerEle= document.getElementById('timer')
const startBtn= document.getElementById('start')
const resetBtn= document.getElementById('reset')
const stopBtn= document.getElementById('stop')


let timerInterval;
let elapsedTime=0;
let startTime=0


function startTimer()
{
    startTime=Date.now()-elapsedTime
    timerInterval= setInterval(()=>{
        elapsedTime= Date.now()-startTime
        startTime
        timerEle.textContent=formatTime(elapsedTime)
    },10)
    startBtn.disabled=true;
    stopBtn.disabled=false;
    
}

function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10); // Extract 2-digit milliseconds
    const seconds = Math.floor((elapsedTime / 1000) % 60); // Extract seconds
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60); // Extract minutes
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // Extract hours

    return (
        (hours > 9 ? hours : "0" + hours) + ":" +
        (minutes > 9 ? minutes : "0" + minutes) + ":" +
        (seconds > 9 ? seconds : "0" + seconds) + ":" +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}


function resetTimer()
{
    clearInterval(timerInterval)
    elapsedTime=0;
    timerEle.textContent="00:00:00"
    startBtn.disabled=false;
    stopBtn.disabled=false;  
}
function stopTimer()
{
    clearInterval(timerInterval)
    startBtn.disabled=false;
    stopBtn.disabled=true;
}

startBtn.addEventListener('click', startTimer)
resetBtn.addEventListener('click', resetTimer)
stopBtn.addEventListener('click', stopTimer)