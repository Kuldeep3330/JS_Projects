let buttons= document.querySelectorAll('button')
let resultEle= document.getElementById('result')
let playerScoreEle= document.getElementById('user-score')
let computerScoreEle= document.getElementById('computer-score')

let playerScore=0;
let computerScore=0;
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        console.log(`clicked me ${btn.id}`) 
        let compterOpt= computerPlay()
        let userOpt=btn.id
        if(compterOpt===userOpt)
             resultEle.innerText="it's tie"
        else if((userOpt==='rock' && compterOpt==='scissors')||
        (userOpt==='paper' && compterOpt==='rock')||
        (userOpt==='scissors' && compterOpt==='paper'))
        {
            playerScore++;
            playerScoreEle.textContent=playerScore
            
            resultEle.innerText= `You win ${userOpt} beats ${compterOpt}`
        }
        else{
            computerScore++;
            computerScoreEle.textContent=computerScore
            resultEle.innerText= `You lose ${compterOpt} beats ${userOpt} `
        }

    })
})

function computerPlay(){
    const choices=["rock", "paper", "scissors"]
    const randomChoice= Math.floor(Math.random()*choices.length)
    return choices[randomChoice]
}