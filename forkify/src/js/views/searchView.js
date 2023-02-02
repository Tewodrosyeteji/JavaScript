class SearchView {
#parentEl=document.querySelector('.search');

getSearch(){
  const query= this.#parentEl.querySelector('.search__field').value;
  this.#clearSearch();
  return query;
}

#clearSearch(){
    this.#parentEl.querySelector('.search__field').value='';
}


addHandlerSearch(handler){
    this.#parentEl.addEventListener('submit',function(e){
        e.preventDefault();
        handler();
    })
}

}

export default new SearchView();