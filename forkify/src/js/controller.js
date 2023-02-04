
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";






// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////





// 1. show recipes
const showRecipes=async function(){
 try{

  const id=window.location.hash.slice(1);

  if(!id) return;
  //1 .spinning
  recipeView.renderSpinner();

  resultsView.update(model.getSearchResultsPage());

  //2.loading
  await model.loadRecipe(id);
  // console.log(id);
  recipeView.render(model.state.recipe);
   console.log(model.state.recipe);
 }catch (err){
  recipeView.renderError();
 }
 controlServing();
}


/// search results;

const renderSearchResults= async function(){
  try{

  resultsView.renderSpinner();
   const query=searchView.getSearch();
   if(!query) return;
   await model.renderSearchLoad(query);
  //  console.log(model.state.search.result);
  //  resultsView.render(model.state.search.result);
  resultsView.render(model.getSearchResultsPage());
  paginationView.render(model.state.search);

}catch (err){
   console.log(err);
}
}

const PaginationControl=function(goToPage){
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
}

   

const controlServing=function(newServings=2){
  model.updateServing(newServings);

  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);

}
const init=function(){
  recipeView.addHandlerRender(showRecipes);
  recipeView.addHandeleUpdateServing(controlServing);
  searchView.addHandlerSearch(renderSearchResults);
  paginationView.addHandlerRender(PaginationControl);
}
init();




