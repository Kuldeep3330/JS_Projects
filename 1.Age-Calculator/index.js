const btn1= document.getElementById("btn")
const birthday1= document.getElementById("birthdate")
const result= document.getElementById("result")
function calculateAge ()
{
    const birthdayValue= birthday1.value
   if(!birthdayValue)  
    alert("please enter your birthday")
   else{
    const age= getAge(birthdayValue)
    
    result.textContent= `Your age is: ${age} years old`
   }
   
}

function getAge(birthdayValue)
{
    const birthDate = new Date(birthdayValue);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    // Adjust age if birthday hasn’t occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }    
    return age;
}

btn1.addEventListener('click', calculateAge)