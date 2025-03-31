const btnEle= document.getElementById('btn')

const heightEle= document.getElementById('height')
const weightEle= document.getElementById('weight')
const bmiInputEl= document.getElementById('bmi-result')
const spanEle= document.getElementById('weight-condition') 

const calculateBMI=()=>{
    // console.log("clicked");
    const heightVal=heightEle.value/100
    const weightVal=weightEle.value

    if (!heightVal || !weightVal || heightVal <= 0 || weightVal <= 0) {
        spanEle.innerText = "Please enter valid values!";
        bmiInputEl.value = "";
        return;
    }

    const bmiValue= (weightVal/ (heightVal* heightVal)).toFixed(2)
    bmiInputEl.value= bmiValue
    if (bmiValue < 18.5) {
        spanEle.innerText = "Underweight 🥦";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        spanEle.innerText = "Normal weight ✅";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
        spanEle.innerText = "Overweight ⚠️";
    } else {
        spanEle.innerText = "Obese 🚨";
    }
}

btnEle.addEventListener('click', calculateBMI)