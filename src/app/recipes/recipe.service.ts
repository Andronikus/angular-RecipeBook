import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [ 
        new Recipe('Pressure cooker chicken', 
                   'This is a simple test', 
                   'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg',
                   [
                       new Ingredient('Chichen pieces', 10),
                       new Ingredient('French fries', 50)
                   ]),
        new Recipe('Stir Fried Lo Mein', 
                   'This is a simple test', 
                   'http://www.seriouseats.com/recipes/assets_c/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-thumb-1500xauto-436988.jpg',
                   [
                       new Ingredient('Chichen pieces', 12),
                       new Ingredient('Baking soda', 1)
                   ])];

    constructor(private shoppingListService: ShoppingListService){};
                
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingLisT(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
    

}