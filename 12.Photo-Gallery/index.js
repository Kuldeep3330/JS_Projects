const apiKey="####################################"
const btnEle= document.getElementById("btn")
const errorMessageEle= document.getElementById("errorMessage")
const galleryEle= document.getElementById('gallery')
{/* <img src="https://tse4.mm.bing.net/th?id=OIP.Y64zo6idinAtdWb-NOktKQHaHa&pid=Api&P=0&h=180" alt="image">
             */}

const handleClick=async()=>{
    // console.log("clicked");
   try {
    btnEle.style.display="none"
    const inputValue= document.getElementById('input').value
    if(inputValue>10 || inputValue<1)
    {
        errorMessageEle.style.display="block"
        errorMessageEle.innerText="Number should be between 0 and 11🙏"
        return;
    }
    // Clear previous images
    galleryEle.innerHTML = "";
    let imgs=""


    const res= await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()*1000)}&client_id=${apiKey}`)
    const data= await res.json()

    // console.log(data);
    if (data.length === 0) throw new Error("No images found");
    // if(data)
    // {
        data.forEach((pic)=>{
            // console.log(pic.urls.small,pic.alt_description );
            const imgEl= document.createElement('img')
            imgEl.setAttribute('src',pic.urls.small )
            imgEl.setAttribute('alt', pic.alt_description || "Unsplash image")
            galleryEle.style.display="block";
            galleryEle.appendChild(imgEl)

            // imgs+=`<img src=${pic.urls.small} alt='image'/>`
            // galleryEle.style.display="block";
            // galleryEle.innerHTML=imgs
            btnEle.style.display="block"
            
        })
    // }
    errorMessageEle.style.display="none"
    
   } catch (error) {
    errorMessageEle.style.display = "block";
      errorMessageEle.innerText="Error occured try again later💔 "
      btnEle.style.display="block"
    console.log(error, "not fetched data");
    
   }



    
}

btnEle.addEventListener("click", handleClick)