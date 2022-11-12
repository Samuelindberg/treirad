let player1turn = true;
let colors = ["#788CFC","#FFCB4C","#83B179","#FF6060","#FFB9EF"];

let playerColors = {
   colorButtons : [document.getElementById("changecolor2"),document.getElementById("changecolor2")],
   playerColor: [0,0],
 currentButtonColors: [document.getElementById("changecolor1").style.color,document.getElementById("changecolor2").style.color]
};
let currentColor =document.getElementById("changecolor1").style.color;
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
         let border="8px solid ";
         if(player1turn){
            document.getElementById("cross"+ruta).style.display="block";
            border= border + colors[playerColors.playerColor[0]-1];
            document.getElementById("box"+ruta).style.border= border;
            player1turn =false;
            board[ruta-1]=1;
          } else{document.getElementById("circle"+ruta).style.display="block";
          player1turn=true;board[ruta-1]=2} 
          border= border + colors[playerColors.playerColor[1]-1];
          document.getElementById("box"+ruta).style.border= border;
         }
    checkWin();
    if(!board.includes(0) && !winnerPerson){
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
     for(let i=1;i<=9;i++){
      document.getElementById("box"+i).style.border ="8px solid #ff81e2";
     }
}
function restartTie(){
   document.getElementById("tiescreen").style.display="none";
   winnerPerson=false;
   board = [0,0,0,0,0,0,0,0,0];
   for(let i=0; i< boardSymbols.length; i++){
      boardSymbols[i].style.display = "none";
  }
  for(let i=1;i<=9;i++){
   document.getElementById("box"+i).style.border ="8px solid #ff81e2";
  }
}

function submitName(){
   usernames = [[document.getElementById("names1").value],[document.getElementById("names2").value]];
   document.getElementById("player1-shape").style.backgroundColor="#A7F1FC";
   document.getElementById("player2-shape").style.backgroundColor="#A7F1FC";
   document.getElementById("insert-name").style.transform="translate(0,100vh)";
    let player1 = "" + usernames[0];
    let player2 = "" + usernames[1];
    document.getElementById("name1").innerText = player1.toUpperCase();
   document.getElementById("name2").innerText= player2.toUpperCase();
   return usernames;
}

playerBoxes[0].addEventListener("mouseenter",function(){
   playerBoxes[0].style.height="33.3vw";
   setTimeout(() => {
      document.getElementById("changecolor1").style.opacity="1";
   }, 150);

});
playerBoxes[0].addEventListener("mouseleave",function(){
  playerBoxes[0].style.height="100px";
  document.getElementById("changecolor1").style.opacity="0";
});
playerBoxes[1].addEventListener("mouseenter",function(){
  playerBoxes[1].style.height="33.3vw";
  setTimeout(() => {
   document.getElementById("changecolor2").style.opacity="1";
}, 150);
});
playerBoxes[1].addEventListener("mouseleave",function(){
 playerBoxes[1].style.height="100px";
 document.getElementById("changecolor2").style.opacity="0";
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

function changeColor(player){
   
      if(player==1){
         
         for(let i=1; i<=9;i++){
         document.getElementById("cross"+i).style.color=colors[playerColors.playerColor[0]];
         
         document.getElementById("changecolor2").style.transform="scale(1.06)";
         }
         document.getElementById("name1").style.color=colors[playerColors.playerColor[0]];
         document.getElementById("tic").style.color=colors[playerColors.playerColor[0]];
         if(playerColors.playerColor[0]!=colors.length-1){
            playerColors.playerColor[0]++;
         }
         else{
            playerColors.playerColor[0]=0;
         }
      
          let border= "8px solid " + colors[playerColors.playerColor[0]-1];
         for(i=0;i<board.length;i++){
            if(board[i]==1){
               document.getElementById("box"+(i+1)).style.border= border;
            }
         }
      } 
      else{
         document.getElementById("changecolor2").style.color=colors[playerColors.playerColor[1]];
         for(let i=1; i<=9;i++){
            document.getElementById("circle"+i).style.color=colors[playerColors.playerColor[1]];
            }
            document.getElementById("name2").style.color=colors[playerColors.playerColor[1]];
            document.getElementById("toe").style.color=colors[playerColors.playerColor[1]];
            if(playerColors.playerColor[1]!=colors.length-1){
               playerColors.playerColor[1]++;
            }
            else{
               playerColors.playerColor[1]=0;
            }
            let border= "8px solid " + colors[playerColors.playerColor[1]-1];
            for(i=0;i<board.length;i++){
               if(board[i]==2){
                  document.getElementById("box"+(i+1)).style.border= border;
               }
            }
      }
      let symbolColor = "";
      if(player==1){
       symbolColor = "cross1";
      }
      else{
         symbolColor = "circle1";
      }
      playerColors.currentButtonColors[player-1]=document.getElementById(symbolColor).style.color;
        document.getElementById("changecolor"+player).style.color= colors[playerColors.playerColor[player-1]];
   
}
function changeColorTitle(player,positionInside){

   if(positionInside){
      playerColors.currentButtonColors[player-1]= document.getElementById("changecolor"+player).style.color;
      document.getElementById("changecolor"+player).style.color= colors[playerColors.playerColor[player-1]];
   }
   else{
      document.getElementById("changecolor"+player).style.color= playerColors.currentButtonColors[player-1];
}}