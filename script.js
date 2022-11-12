let player1turn = true;
colors = ["white","#FFB9EF","#FF4C4C"];
let Colorbuttons = [document.getElementById("changecolor2"),document.getElementById("changecolor2")]
let player1Wins = 0;
let player2Wins = 0;
let playerWinsDisplay = [document.getElementById("p1-wins"),document.getElementById("p2-wins")];
let playerWinsBigDisplay = [document.getElementById("display-symbol1"),document.getElementById("display-symbol2")];
let inputOpen = [false,false];
let board = [0,0,0,0,0,0,0,0,0];
let boardSymbols = document.getElementsByClassName("symbols");
let winnerPerson = false;
let winnerTitle = document.getElementById("winnertag");
let player1box = document.getElementById("player1-shape");
let playerBoxes = [document.getElementById("player1-shape"),document.getElementById("player2-shape")];
let usernames =[];
let playerBoxOpen = [false,false];
let boxes = document.getElementsByClassName("box");

function winScreen(winner){
    winnerTitle.innerText = winner + " vann!"; 
    winnerPerson=true;
    document.getElementById("winnerscreen").style.display="flex";

    if(winner==usernames[0]){
      player1Wins++;
      playerWinsDisplay[0].innerText="WINS:"+ player1Wins;
    } else{
      player2Wins++;
      playerWinsDisplay[1].innerText="WINS:"+ player2Wins;
    } 
}



function checkWin(){ 
    if(board[0]==1 && board[1]==1 && board[2]==1){
        winScreen(usernames[0]);
    }
    if(board[0]==2 && board[1]==2 && board[2]==2){
        winScreen(usernames[1]);
     }
     if(board[3]==1 && board[4]==1 && board[5]==1){
        winScreen(usernames[0]);
     }
     if(board[3]==2 && board[4]==2 && board[5]==2){
        winScreen(usernames[1]);
     }
     if(board[6]==1 && board[7]==1 && board[8]==1){
        winScreen(usernames[0]);
     }
     if(board[6]==2 && board[7]==2 && board[8]==2){
        winScreen(usernames[1]);
     }
     if(board[0]==1 && board[3]==1 && board[6]==1){
        winScreen(usernames[0]);
     }
     if(board[0]==2 && board[3]==2 && board[6]==2){
        winScreen(usernames[1]);
     }
     if(board[1]==1 && board[4]==1 && board[7]==1){
      winScreen(usernames[0]);
     }
     if(board[1]==2 && board[4]==2 && board[7]==2){
        winScreen(usernames[1]);
     }
     if(board[2]==1 && board[5]==1 && board[8]==1){
      winScreen(usernames[0]);
     }
     if(board[2]==2 && board[5]==2 && board[8]==2){
        winScreen(usernames[1]);
     }
     
     if(board[0]==1 && board[4]==1 && board[8]==1){
      winScreen(usernames[0]);
     }
     if(board[0]==2 && board[4]==2 && board[8]==2){
        winScreen(usernames[1]);
     }

     if(board[2]==1 && board[4]==1 && board[6]==1){
      winScreen(usernames[0]);
     }
      if(board[2]==2 && board[4]==2 && board[6]==2){
         winScreen(usernames[1]);
   }
}
function addSymbol(ruta){

  
      if(board[ruta-1]==0){
         if(player1turn){
            document.getElementById("cross"+ruta).style.display="block";
            player1turn =false;
            board[ruta-1]=1;
          } else{document.getElementById("circle"+ruta).style.display="block";player1turn=true;board[ruta-1]=2} 
      
      } else{
       // ska vara upptagen-ruta 
      }
      

    checkWin();
    if(!board.includes(0)){
      document.getElementById("tiescreen").style.display="flex";
    }
}
function restart(){
   document.getElementById("winnerscreen").style.display="none";
      winnerPerson=false;
      board = [0,0,0,0,0,0,0,0,0];
      for(var i=0; i< boardSymbols.length; i++){
         boardSymbols[i].style.display = "none";
     }
}
function restartTie(){
   document.getElementById("tiescreen").style.display="none";
   winnerPerson=false;
   board = [0,0,0,0,0,0,0,0,0];
   for(var i=0; i< boardSymbols.length; i++){
      boardSymbols[i].style.display = "none";
  }
}

function submitName(){
   usernames = [[document.getElementById("names1").value],[document.getElementById("names2").value]];
   document.getElementById("player1-shape").style.backgroundColor="#A7F1FC";
   document.getElementById("player2-shape").style.backgroundColor="#A7F1FC";
   document.getElementById("insert-name").style.transform="translate(0,100vh)";
   document.getElementById("name1").innerText= "player " + usernames[0];
   document.getElementById("name2").innerText="player " + usernames[1];
   return usernames;
}

playerBoxes[0].addEventListener("mouseenter",function(){
   playerBoxes[0].style.height="33.3vw";

   document.getElementById("display-symbol1").style.transform="scale(200%)";

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
document.getElementById("names1").addEventListener("click",function(){
   if(inputOpen[1]){
      document.getElementById("usernamelabel2").style.textShadow="none";
      document.getElementById("names2").style.transform="scale(100%)";
      inputOpen[1]=false;
   }
   document.getElementById("usernamelabel1").style.textShadow="2px 2px #f7d5ef";
   document.getElementById("names1").style.transform="scale(105%)";

   inputOpen[0]=true;

});
document.getElementById("names2").addEventListener("click",function(){
   if(inputOpen[0]){
      document.getElementById("usernamelabel1").style.textShadow="none";
      document.getElementById("names1").style.transform="scale(100%)";
      inputOpen[0]=0;
   }
   document.getElementById("usernamelabel2").style.textShadow="2px 2px #f7d5ef";
   document.getElementById("names2").style.transform="scale(105%)";
   inputOpen[1]=true;
});
// document.getElementById("play").addEventListener("mouseenter",function(){
//    const playButton = document.getElementById("play");
//    while(playButton.parentNode.matches(":hover")){
//       playButton.style.transform="scale(110%)";
//    }
//    playButton.style.backgroundColor="black";
// });
