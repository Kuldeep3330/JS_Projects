const inputEle= document.getElementById("input")
const errorEle= document.getElementById("error")
const resultEle= document.getElementById("result")
let errorTime
let resultTime

const handleInput=()=>{
    if(inputEle.value<=0 || isNaN(inputEle.value))
    {
        errorEle.innerText="Please enter a valid number!"

        clearTimeout(errorTime)
        errorTime=setTimeout(() => {
            errorEle.innerText=" "
            inputEle.value=""
        }, 3000);
    }
    else{
        resultEle.innerText = (+inputEle.value/2.2).toFixed(2) 
        clearTimeout(resultTime)
        resultTime=setTimeout(()=>{
            resultEle.innerText=""
            inputEle.value=""
        }, 10000)
    }

    

}

inputEle.addEventListener('input', handleInput)