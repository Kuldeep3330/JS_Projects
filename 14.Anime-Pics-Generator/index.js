document.addEventListener("DOMContentLoaded", () => {
    const btnEle = document.getElementById("btn");
    const animeImgEle = document.getElementById("anime-img");

    const url = "https://api.nekosia.cat/api/v1/images/catgirl";

    const clickHandler = async () => {
        console.log("Fetching anime image...");

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data); // Print full API response for debugging

            if (data.image && data.image.original) {
                animeImgEle.setAttribute("src", data.image.original.url);
                animeImgEle.setAttribute("alt", "Catgirl Image");
            } else {
                console.error("API response structure is different:", data);
            }
        } catch (error) {
            console.error("Error fetching anime image:", error);
        }
    };

    btnEle.addEventListener("click", clickHandler);
});

