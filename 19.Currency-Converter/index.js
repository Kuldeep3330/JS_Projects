const currencyFirstEl= document.getElementById('currency-first')
const worthFirstEle= document.getElementById('worth-first')
const currencySecondEl= document.getElementById('currency-second')
const worthSecondEle= document.getElementById('worth-second')

const exchangeRateEL= document.getElementById("exchange-rate")

async function updateRate()
{
     const curr= currencyFirstEl.value
    try {
        const res= await fetch(`https://v6.exchangerate-api.com/v6/f9a73c3c9674764fa77a8c35/latest/${curr}`)
        const data= await res.json()
        // console.log(data);
        const rate= data.conversion_rates[currencySecondEl.value]
        console.log(rate);

        const calVal= rate*worthFirstEle.value

        worthSecondEle.value= (calVal.toFixed(2))

        exchangeRateEL.innerText=`1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`
        
        
    } catch (error) {
        
    }
    
}

currencyFirstEl.addEventListener('change',updateRate)

currencySecondEl.addEventListener('change',updateRate)

worthFirstEle.addEventListener('input', updateRate)