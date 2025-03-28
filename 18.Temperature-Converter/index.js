const celciusEle = document.getElementById("celcius");
const farenheitEle = document.getElementById("fahrenheit");
const kelvinEle = document.getElementById("kelvin");

function computeTemp(event) {
    // console.log("change", event.target.name, event.target.value);
    const currVal = +event.target.value; // Convert to number

    switch (event.target.name) {
        case "celcius":
            kelvinEle.value = (currVal + 273.15).toFixed(2);
            farenheitEle.value = ((currVal * 9) / 5 + 32).toFixed(2);
            break;

        case "fahrenheit":
            celciusEle.value = (((currVal - 32) * 5) / 9).toFixed(2);
            kelvinEle.value = (((currVal - 32) * 5) / 9 + 273.15).toFixed(2);
            break;

        case "kelvin":
            celciusEle.value = (currVal - 273.15).toFixed(2);
            farenheitEle.value = (((currVal - 273.15) * 9) / 5 + 32).toFixed(2);
            break;

        default:
            break;
    }
}


