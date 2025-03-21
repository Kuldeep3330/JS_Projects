const buttonsEle= document.querySelectorAll("button")
const inputFieldEl= document.getElementById('result')

// console.log(buttonsEle[0].innerText);



for(let i=0; i<buttonsEle.length; i++)
{
    const handleClick=()=>{
        // console.log(buttonsEle[i].innerText);
        const btnVal=buttonsEle[i].innerText 
        if(btnVal==='C'){
            clearResult()
        }
        else if(btnVal==='=')
        {
            calculateResult()
        }
        else if(btnVal==='⬅️')
        {
            removeLast()
        }
        else{
            appendValue(btnVal)

        }
    }
    buttonsEle[i].addEventListener('click',handleClick)
}

function clearResult()
{
    inputFieldEl.value=""
}
function calculateResult()
{
    inputFieldEl.value= eval(inputFieldEl.value)
}
function appendValue(btnVal)
{
    inputFieldEl.value+=btnVal
}
function removeLast()
{
    inputFieldEl.value = inputFieldEl.value.slice(0, -1);

}
