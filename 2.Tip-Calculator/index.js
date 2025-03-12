const btnE1= document.getElementById('calculate')
const billInput= document.getElementById('bill')
const tipInput= document.getElementById('tip')
const result= document.getElementById('total')

function calculateTip()
{    
    const billVal= billInput.value 
    //   console.log(billVal);    
    const tipVal= tipInput.value
    //   console.log(tipVal);
    const totalVal= billVal *(1 + tipVal/100)
    result.textContent=`${totalVal.toFixed(2)}Rs`;


}

btnE1.addEventListener("click", calculateTip)