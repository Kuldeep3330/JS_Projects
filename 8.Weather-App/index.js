const apikey="d2dc7e1c4d99dd1af625b6af15ac315f"

const weatherDataEle= document.getElementById('weather-data')

const cityInputEl= document.getElementById('city-input')
const formEle= document.querySelector('form')

const getWeatherData=async (cityVal)=>{
    try {
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apikey}&units=metric`)
        if(!response.ok)
        {
            throw new Error('net response was not ok')
        }

        const data= await response.json()
        // Check if 'main' exists in the response
        if (!data.main || !data.weather) {
            throw new Error("Invalid weather data received");
        }
        // return data;
        const temperature= Math.floor(data.main.temp || 0)
        const description= data.weather[0]?.description
        const icons= data.weather[0]?.icon||"01d"
        const details = [
            `Feels like: ${Math.round(data.main.feels_like || 0)}°C`,
            `Humidity: ${data.main.humidity || 0}%`,
            `Wind speed: ${data.wind?.speed || 0} m/s`
        ];

        weatherDataEle.querySelector('.icon').innerHTML=`<img src="http://openweathermap.org/img/wn/${icons}.png" alt="weather icon">`
        
        weatherDataEle.querySelector('.temperature').textContent=`${temperature}°C`
        weatherDataEle.querySelector('.description').textContent=`${description}`
        weatherDataEle.querySelector('.details').innerHTML= details.map((detail)=>`<div>${detail}</div>`).join("");
    } catch (error) {

        weatherDataEle.querySelector('.icon').innerHTML=""        
        weatherDataEle.querySelector('.temperature').textContent=""
        weatherDataEle.querySelector('.description').textContent=
        "An error happened , please try again later"
        weatherDataEle.querySelector('.details').innerHTML= ""        
    }
}

const getData=(e)=>{
    e.preventDefault();
    // console.log('clicked');
    const cityVal= cityInputEl.value;
    // console.log(cityVal);
    getWeatherData(cityVal)
    // console.log(getWeatherData(cityVal))
    
}
formEle.addEventListener("submit",getData)