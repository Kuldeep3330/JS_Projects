const apiKey = "#################################";
const btnEle = document.getElementById('btn');
const quoteEle= document.getElementById('quote')
const authorEle= document.getElementById('author')

const options={
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,  // Correctly passing the API Key in headers
        "Content-Type": "application/json" // Optional, but good practice
    }
}
const handleClick = async () => {
    // console.log('Clicked');

    try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", options);

        const data = await response.json(); // Convert response to JSON
        console.log(data); // Log the response to the console
        quoteEle.innerText= data[0].quote
        authorEle.innerText= "~ "+ data[0].author

    } catch (error) {
        console.error("Error fetching data:", error);
        quoteEle.innerText="error occured, try again later"
        authorEle.innerText="An erro happened"
    }
};

btnEle.addEventListener('click', handleClick);
