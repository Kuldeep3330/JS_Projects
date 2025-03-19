const apiKey="####################################"
const formEle= document.querySelector('form')

const searchInputEle= document.getElementById("search-input")
const searchResults= document.querySelector(".search-results")

const showMoreImages = document.getElementById("show-more-images")

let inputData=""
let page

{/* <div class="search-result">
            <img src="https://tse4.mm.bing.net/th?id=OIP.Y64zo6idinAtdWb-NOktKQHaHa&pid=Api&P=0&h=180" alt="cat image">

            <a href="https://in.images.search.yahoo.com/search/" target="_blank">to get image</a>
        </div> */}
const searchImages=async ()=>{
    inputData=searchInputEle.value;
    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`
        );
        if(!response.ok)
            throw new Error('Response not received');

            
        const data= await response.json()
        if(page===1)
        {
            searchResults.innerHTML=""
        }
        const result= data.results
        result.map((result)=>{
            const imageWrapper= document.createElement('div')
            imageWrapper.setAttribute('class', "search-result")
            const image= document.createElement('img')
            image.setAttribute('src', result.urls.small)
            image.setAttribute('alt',result.alt_description)
            const imageLink= document.createElement('a')
            imageLink.setAttribute('href', result.links.html)
            imageLink.setAttribute('target', '_blank')
            imageLink.textContent='to get image'          

            imageWrapper.appendChild(image)
            imageWrapper.appendChild(imageLink)
    
            searchResults.appendChild(imageWrapper)
        })
        page++
        // const imageWrapper= document.createElement('div')
        // imageWrapper.setAttribute('class', "search-result")
        // const image= document.createElement('img')
        // image.setAttribute('src', ``)

        // searchResults.appendChild(imageWrapper)
       if(page>1)
       {
        showMoreImages.style.display="block"
       }
        
    } catch (error) {
        console.log('data not fetched', error);
        
    }
}
const handleSubmit=(e)=>{
    e.preventDefault()
    
    page =1;
    console.log(searchImages(page));  

    
}
formEle.addEventListener("submit", handleSubmit)

showMoreImages.addEventListener('click',()=>{
    searchImages()
})