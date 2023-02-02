import {async} from "regenerator-runtime"
import { URL_API } from "./config";
import { getJson } from "./helper";
export const state={
    recipe:{},
    search:{
        query:'',
        result:[]
    }
}

export const loadRecipe=async function(id){

    try{
        const data=await getJson(`${URL_API}/${id}`);

        let {recipe} =data.data;
          state.recipe={
            id:recipe.id,
            title:recipe.title,
            publisher:recipe.publisher,
            sourceUrl:recipe.source_url,
            image:recipe.image_url,
            servings:recipe.servings,
            cookingTime:recipe.cooking_time,
            ingredients:recipe.ingredients,
          }
          
    }catch (err){
   throw err;
    }
}

export const renderSearchLoad=async function(query){
       state.search.query=query;
      const data=await getJson(`${URL_API}?search=${query}`);
      state.search.result=data.data.recipes.map(rec=>{
        return {
             id:rec.id,
            title:rec.title,
            publisher:rec.publisher,
            image:rec.image_url,
        }
      })
}

