import {async} from "regenerator-runtime"
import { URL_API,RES_PER_PAGE } from "./config";
import { getJson } from "./helper";
export const state={
    recipe:{},
    search:{
        query:'',
        page:1,
        result:[],
        resultPerPage:RES_PER_PAGE,
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

export const getSearchResultsPage=function (page=state.search.page){
  state.search.page=page;
  const start=(page -1) * state.search.resultPerPage;
  const end =page * state.search.resultPerPage;
  return state.search.result.slice(start,end);
}


export const updateServing=function(newServings){
state.recipe.ingredients.forEach(ing => {
  ing.quantity= (ing.quantity * newServings)/state.recipe.servings;
  state.recipe.servings=newServings;
})

}