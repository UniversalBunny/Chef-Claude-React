import React from "react"
import { ClaudeRecipe } from "./ClaudeRecipe";
import { IngredientList } from "./IngredientList";

export function Main(){
    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);

    const [recipeShown, setRecipeShown] = React.useState(false)

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    function toggleRecipeShown(){
        setRecipeShown(prevCondition => !prevCondition)
    }

    return(
        <main>
            <form action={addIngredient} className="add-ingredient_form">
                <input className="ingredient_input" type="text" placeholder="e.g oregano" area-label="Add ingredient" name="ingredient"></input>
                <button className="ingredient_button" >+ Add Ingredient</button>
            </form>
            {ingredients.length !== 0 &&  <IngredientList 
            ingredients={ingredients}
            toggleRecipeShown={toggleRecipeShown} 
            />}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}