
const API_KEY= "8332e8bc35cf4cf8af2ceeb951ea2d61"


function displayRecipes(recipes)
{
    const recipeListEle= document.getElementById('recipe-list')
    recipeListEle.innerHTML=""

    // Check if recipes is a valid array
    if (!Array.isArray(recipes) || recipes.length === 0) {
        recipeListEle.innerHTML = "<p>No recipes available.</p>";
        return;
    }
    // Loop through each recipe
    recipes.forEach(recipe => {
        const recipeItemEle=document.createElement('li')
        
        recipeItemEle.setAttribute("class", "recipe-item")
        // Recipe Image
        const recipeImgEle=document.createElement('img')
        recipeImgEle.setAttribute("src", `${recipe.image}`) 
        recipeImgEle.setAttribute("alt", "recipe image") 

        // Recipe Name
        const recipeNameEle= document.createElement('h2')
        recipeNameEle.textContent= recipe.title        
        
        //ingredients
        const pEle= document.createElement('p')
        
        const ingredientList= recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")
        pEle.innerHTML=`<strong>Ingredients:</strong> ${ingredientList} `

        // Recipe Link
        const aEle= document.createElement('a')
        aEle.setAttribute("href", `${recipe.sourceUrl}`)
        aEle.setAttribute("target", "_blank");
        aEle.textContent='View Recipe'

        recipeItemEle.appendChild(recipeImgEle);
        recipeItemEle.appendChild(recipeNameEle)
        recipeItemEle.appendChild(pEle)
        recipeItemEle.appendChild(aEle)
        recipeListEle.appendChild(recipeItemEle);
        
    });
}

async function getRecipes()
{
    const response= await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data= await response.json()

    // console.log(data);
    return data.recipes
    
}
// getRecipes()

async function init()
{
    const recipes= await getRecipes()
    console.log(recipes);
    
    displayRecipes(recipes)
    
}

init()