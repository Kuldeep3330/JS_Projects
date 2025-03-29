const btnEl= document.getElementById("btn")
const emojiNameEle= document.getElementById("emoji-name")
const apiKey="###################################"


const emoji=[]
function getEmoji(){

}
getEmoji()
const handleClick= async()=>{
    console.log('clicked');
    try {
        let res= await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`)
        let data= await res.json()
        // console.log(data);
        for( let i=0; i<1500; i++)
         {
            emoji.push({
                emojiName:data[i].character,
                emojiCode: data[i].unicodeName
        });
         }

         const randomNum= Math.floor(Math.random()*1500)
        //  console.log(randomNum);
        btnEl.innerText= emoji[randomNum].emojiName
        emojiNameEle.innerText= emoji[randomNum].emojiCode
        
    } catch (error) {
        console.log('error occured');
        
    }    
}
btnEl.addEventListener('click', handleClick)