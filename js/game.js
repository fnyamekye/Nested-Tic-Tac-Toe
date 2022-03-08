// importing the class board from newBoard.js
import { Board } from "./newBoard.js";


// the class game
export  class Game {
  constructor(){
    this.turn = "X";
    this.board = [
      new Board().newBoard ,new Board().newBoard,new Board().newBoard,new Board().newBoard,new Board().newBoard,new Board().newBoard,new Board().newBoard,new Board().newBoard,new Board().newBoard
    ]

  }

  


  // next turn functions
  nextTurn(){
    this.turn === "X" ? this.turn = "O" : this.turn = "X";
    // player indicator
    let player_x = document.querySelector(".player_x");
    let player_o = document.querySelector(".player_o")
    player_x.classList.toggle("player_x_inactive");
    player_o.classList.toggle("player_o_active");
  }

  // make move function
  makeMove(boardIndex,grid_index,nextedGrid){
      
       if(this.findingWinningCombination(this.board[boardIndex])){
         return;
       }

       if(this.board[boardIndex][grid_index]){
          return;
        }
        this.board[boardIndex][grid_index] = this.turn;
      let find_win_section= this.sectionGameOver(this.board[boardIndex]);
      if(find_win_section){
        // diplaying the winning section indicator
        this.displaySectionWinIndicator(nextedGrid,this.turn);
      }else{
         this.nextTurn();

      }
     
  }

  // update board function
  updateBoard(boardIndex,nextedGrid){

    for(let i=0; i<9;i++){
      let nextedGridItem =  nextedGrid.children[i];
      nextedGridItem.innerHTML = this.board[boardIndex][i];

      // distinguish between colors of the input variables
      if(this.board[boardIndex][i]==="X"){
        nextedGridItem.style.color = "green";
          } else{
            nextedGridItem.style.color = "red";
          }
    }
   
  }

  // finding the winning combination
   findingWinningCombination(boardWithIndex){
      let array_combinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ];

     for(let combination of array_combinations){
        let [a,b,c]= combination;
        if (boardWithIndex[a]&& (boardWithIndex[a]===boardWithIndex[b]&& boardWithIndex[b]===boardWithIndex[c])) {
            return combination;
        }
     }
     return null;

   }
  
  //  sections game over function
   sectionGameOver(sec_board){
     let find_win_section = this.findingWinningCombination(sec_board);
     if(find_win_section){
       return true;
     }else{
       return false;
     }
   }

  //  section win indicator function
   displaySectionWinIndicator(win_item,playerWon){
    win_item.lastElementChild.classList.add("win_indicator_display");
    win_item.lastElementChild.innerHTML=playerWon;
   }
   

   // update the whole game function
   updateGame(){
    let tracks = document.querySelectorAll('.nested_grid');

    tracks.forEach((track)=>{
        track.lastElementChild.innerHTML="";
        track.lastElementChild.classList.remove('win_indicator_display');

        // player indicator
      let player_x = document.querySelector(".player_x");
      let player_o = document.querySelector(".player_o")
      player_x.classList.toggle("player_x_inactive");
      player_o.classList.toggle("player_o_active");

      // filling all nexted grid items with null
      let nested_tracks = track.querySelectorAll(".nested_grid-item");
         for(let i = 0; i < nested_tracks.length; i++){
              nested_tracks[i].innerHTML = this.board[0][i];
          }

    })

   }
}


