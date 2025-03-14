const rollBtn= document.getElementById('roll-button')
const rollnNum=[[1,"&#9856;"],[2,"&#9857;"], [3,"&#9858;"], [4, "&#9859;"],[5,"&#9860;"],[6,"&#9861;"]]

const divEle= document.getElementById('dice')
function addRoll(){  
    const ulEle= document.getElementById("roll-history")

    //generate a random roll number
    const randomInd= Math.floor(Math.random()*rollnNum.length)
    const rollValue= rollnNum[randomInd]

    const liEle= document.createElement('li')
    liEle.innerHTML=`Roll ${rollValue[0]} <span>${rollValue[1]}</span>`
  
    divEle.innerHTML=`${rollValue[1]}`
    // Append to roll history
    ulEle.appendChild(liEle)

    
}

rollBtn.addEventListener('click', addRoll)