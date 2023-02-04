import icons from "url:../../img/icons.svg"
import View from "./view";


class PaginationView extends View{

_parentEl=document.querySelector('.pagination');


addHandlerRender(handler){
this._parentEl.addEventListener('click',function(e){

  const btn=e.target.closest('.btn--inline');
  if(!btn) return;
  const gotoPage=+btn.dataset.goto;
  
  handler(gotoPage);
}
)
}

_generateMarkup(){
    const currPage=this._data.page;
    const numPages=Math.ceil(this._data.result.length / this._data.resultPerPage);
      //  console.log(numPages);


// page 1 and other page

if(currPage === 1 && numPages > 1){
    return `
    <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button> 
    `;
}
// last page
if(currPage === numPages && currPage > 1){
    return `<button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currPage -1}</span>
  </button>`
}

//other page

if(currPage < numPages){
    return `
    <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currPage -1}</span>
  </button>
   
  <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
  <span>Page ${currPage + 1}</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</button> 
  `;
}
return ' ';
}
 
}
export default new PaginationView();