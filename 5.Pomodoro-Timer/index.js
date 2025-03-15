const startBtn= document.getElementById('start')
const stopBtn= document.getElementById('stop')
const resetBtn= document.getElementById('reset')

const timerEle= document.getElementById('timer')

let interval;
let timeLeft=1500

function updateTimer(){
    let minutes= Math.floor(timeLeft/60)
    let seconds= timeLeft % 60 //remainder
    let formattedTime= `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2,"0")}`
    timerEle.innerHTML=formattedTime
}

function startTimer()
{
    interval=setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft===0){
            clearInterval(interval)
            alert("Time's up!")
            timeLeft=1500
            updateTimer()
        }

    },1000)
}
function stopTimer()
{
    // console.log('stop');
    clearInterval(interval)
    

}
function resetTimer()
{
    // console.log('reset');
    clearInterval(interval)
    timeLeft=1500
    updateTimer()
    

}
startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)