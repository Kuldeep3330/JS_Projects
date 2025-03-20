const apiKey= "#############################"
const btnEl1= document.getElementById("btn")
const jokeEle= document.getElementById('joke')
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
}

async function  getJoke(){
    // console.log('clicked');
    try {
        const res= await fetch(`https://api.api-ninjas.com/v1/dadjokes`, options)
        const data= await res.json()
        // console.log(data[0]);
        jokeEle.innerText=data[0].joke
    } catch (error) {
        console.log('data not fetched');        
    }    
}
btnEl1.addEventListener('click', getJoke)