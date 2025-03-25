const inputEle= document.getElementById("input")
const infoTextEle= document.getElementById("info-text")
const meaningContainerEle= document.getElementById('meaning-container')
const audioEle= document.getElementById('audio')

const titleEle= document.getElementById("title")
const meaningEle= document.getElementById('meaning')
{/* <div class="meaning-container" id="meaning-container">
            <p>WordTitle: <span class="title" id="title">________</span></p>
            <p>Meaning: <span class="meaning" id="meaning">________</span></p>
            <audio src="" controls id="audio"></audio>
        </div> */}

const showData=async (word) => {
    try {
        infoTextEle.style.display="block"        
        infoTextEle.textContent=`searching the meaning for ${word}`
        const res= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data= await res.json()
        // console.log(data);
        if(data.title)
        {
            titleEle.innerText= word
            meaningEle.innerText= "N/A"
            audioEle.style.display="none"
        }
        else{
        infoTextEle.style.display="none"
        meaningContainerEle.style.display="block"
        // audioEle.style.display="inline-flex"
        titleEle.innerText= data[0].word
        meaningEle.innerText= data[0].meanings[0].definitions[0].definition
        audioEle.src=data[0].phonetics[0].audio
        }

    } catch (error) {
        console.log('not fetched data');       
    }
}

const keyupHandler=(e)=>{
    // console.log(e.key);
    if(e.target.value && e.key==='Enter')
    {
        showData(e.target.value)
    }
    
}
inputEle.addEventListener("keyup",keyupHandler)