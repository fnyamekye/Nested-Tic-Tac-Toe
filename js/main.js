// import game from game.js
import {Game} from './game.js';

let game = new Game();

window.addEventListener("DOMContentLoaded",()=>{
  let overlayGridContainer = document.querySelector(".overlayGridContainer");

  for(let i = 1; i<10; i++){
    let nestedGrid = document.createElement('div');
        nestedGrid.classList.add("grid-item" ,"nested_grid");
        nestedGrid.dataset.boardindex = `${i}`;
    let nestedGridItems = ` 
    <div class="nested_grid-item nested_grid1" data-index="0"></div>
    <div class="nested_grid-item nested_grid2" data-index="1"></div>
    <div class="nested_grid-item nested_grid3" data-index="2"></div>
    <div class="nested_grid-item nested_grid4" data-index="3"></div>
    <div class="nested_grid-item nested_grid5" data-index="4"></div>
    <div class="nested_grid-item nested_grid6" data-index="5"></div>
    <div class="nested_grid-item nested_grid7" data-index="6"></div>
    <div class="nested_grid-item nested_grid8" data-index="7"></div>
    <div class="nested_grid-item nested_grid9" data-index="8"></div>
    <div class="win_indicator"></div>`;

    nestedGrid.innerHTML = nestedGridItems;
    overlayGridContainer.appendChild(nestedGrid)
  }
    // querying over all nested grid items
    let grid_items = overlayGridContainer.querySelectorAll(".nested_grid-item");
    grid_items.forEach((gridItem)=>{
    // adding event listeners on over nested grid items
     gridItem.addEventListener('click',(e)=>{
       let grid_index = e.currentTarget.dataset.index;
        let nested_grid = e.currentTarget.parentElement;
        let boardIndex = e.currentTarget.parentElement.dataset.boardindex;
        
 
        game.makeMove([boardIndex-1],grid_index,nested_grid);
        game.updateBoard([boardIndex-1],nested_grid);
  
        
     })
  });

    // querying for new game button
    let newGame = document.querySelector('.newGame');
    // event listener to start a new game 
    newGame.addEventListener('click',()=>{
    game = new Game();
    game.updateGame();
});

});




