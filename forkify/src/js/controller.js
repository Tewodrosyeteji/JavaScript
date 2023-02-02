
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";




// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const renderSearchResults= async function(){
  try{

   const query=searchView.getSearch();
   if(!query) return;
   await model.renderSearchLoad(query);
   console.log(model.state.search.result);

}catch (err){
   console.log(err);
}
}



const showRecipes=async function(){
 try{

  const id=window.location.hash.slice(1);

  if(!id) return;
  //1 .spinning
  recipeView.renderSpinner();
  //2.loading
  await model.loadRecipe(id);

  recipeView.render(model.state.recipe);
   
 }catch (err){
  recipeView.renderError();
 }
}


const init=function(){
  recipeView.addHandlerRender(showRecipes);
  searchView.addHandlerSearch(renderSearchResults)
}
init();