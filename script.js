let player1turn = true; 
let playerBoxes = [document.getElementById("player1-shape"),document.getElementById("player2-shape")];
let player1Wins = 0;
let player2Wins = 0;
let board = [0,0,0,0,0,0,0,0,0];
let boardSymbols = document.getElementsByClassName("symbols");
let winnerPerson = false;
let winnerTitle = document.getElementById("winnertag");
let player1box = document.getElementById("player1-shape");
let usernames =[];

function winScreen(winner){
    winnerTitle.innerText = winner + " vann!";

    winnerTitle.style.color="#FFB9EF"; 
    winnerTitle.style.fontSize="400px";
    winnerTitle.style.transition="1000ms"
    winnerTitle.style.opacity="0";
   
    winnerPerson=true;
    document.getElementById("restart").style.display="block";
    
}
function checkWin(){ 
    if(board[0]==1 && board[1]==1 && board[2]==1){
        winScreen(usernames[0]);
    }
    if(board[0]==1 && board[2]==2 && board[3]==2){
        winScreen(player2);
     }
     if(board[4]==1 && board[5]==1 && board[6]==1){
        winScreen(usernames[0]);
     }
     if(board[1]==2 && board[4]==2 && board[7]==2){
        winScreen(player2);
     }
     if(board[2]==1 && board[5]==1 && board[8]==1){
        winScreen(usernames[0]);
     }
     if(board[2]==2 && board[5]==2 && board[8]==2){
        winScreen(player2);
     }
     if(board[0]==1 && board[1]==1 && board[2]==1){
        winScreen(usernames[0]);
     }
     if(board[0]==2 && board[1]==2 && board[2]==2){
        winScreen(player2);
     }
     if(board[3]==1 && board[4]==1 && board[5]==1){
        winScreen(player1);
     }
     if(board[3]==2 && board[4]==2 && board[5]==2){
        winScreen(player2);
     }
     if(board[6]==1 && board[7]==1 && board[8]==1){
        winScreen(player1);
     }
     if(board[6]==2 && board[7]==2 && board[8]==2){
        winScreen(player2);
     }
     if(board[0]==1 && board[4]==1 && board[8]==1){
        winScreen(player1);
     }
     if(board[0]==2 && board[4]==2 && board[8]==2){
        winScreen(player2);
     }
     if(board[2]==1 && board[4]==1 && board[6]==1){
        winScreen(player1);
     }
	
}
function addSymbol(ruta){
    document.getElementById("upptagen").style.display="hidden";
if(board[ruta-1]==0){
   if(player1turn){
      document.getElementById("cross"+ruta).style.display="block";
      player1turn =false;
      board[ruta-1]=1;
    } else{document.getElementById("circle"+ruta).style.display="block";player1turn=true;board[ruta-1]=2} 

} else{
   document.getElementById("upptagen").style.display="block";
}

    checkWin();
}
function restart(){
      winnerPerson=false;
      board = [0,0,0,0,0,0,0,0,0];
      for(var i=0; i< boardSymbols.length; i++){
         boardSymbols[i].style.display = "none";
     }
}
function miniPlayerBox(){
   sett
   player1box.style.height="100px";
}
function submitName(){
   usernames = [[document.getElementById("names1").value],[document.getElementById("names2").value]];
   document.getElementById("player1-shape").style.backgroundColor="#A7F1FC";
   document.getElementById("player2-shape").style.backgroundColor="#A7F1FC";
   document.getElementById("insert-name").style.transform="translate(0,100vh)";
   return usernames;
}

playerBoxes[0].addEventListener("mouseenter",function(){
    playerBoxes[0].style.height="33.3vw";
});
playerBoxes[0].addEventListener("mouseleave",function(){
   playerBoxes[0].style.height="100px";
});
playerBoxes[1].addEventListener("mouseenter",function(){
   playerBoxes[1].style.height="33.3vw";
});
playerBoxes[1].addEventListener("mouseleave",function(){
  playerBoxes[1].style.height="100px";
});