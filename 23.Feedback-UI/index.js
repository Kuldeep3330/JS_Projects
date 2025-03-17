const ratingEles= document.querySelectorAll('.rating')
const btnEle= document.getElementById('btn')

const containerEle= document.getElementById('container')

let selectedRating

ratingEles.forEach((ratingEle)=>{
    ratingEle.addEventListener('click',(event)=>{
        ratingEles.forEach(r => r.classList.remove("active"));

        // Add active class to selected rating
        ratingEle.classList.add("active");

        // Store feedback text
        selectedRating = ratingEle.querySelector("small").innerText;
        
        
    })
})

const handleClick=()=>{
    if(selectedRating !== "")
    {
        containerEle.innerHTML=`
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
        `
    }
    else {
        alert("Please select a rating before submitting!");
    }
}

btnEle.addEventListener('click', handleClick)