let player1turn = true; 
let playerBoxes = [document.getElementById("player1-shape"),document.getElementById("player2-shape")];
let player1Wins = 0;
let player2Wins = 0;
let board = [0,0,0,0,0,0,0,0,0];
let winnerPerson = false;
let winnerTitle = document.getElementById("winnertag");
let images1 = document.querySelectorAll("img");
let images2 = document.getElementsByTagName("img");
let images3 = document.getElementsByClassName("images");
let player1box = document.getElementById("player1-shape");





function winScreen(winner){
    winnerTitle.innerHTML= winner + " vann!";
    winnerTitle.style.transform= "scale(200%)";
    winnerTitle.style.color="green"; 
    winnerPerson=true;
}
function checkWin(){ 
    if(board[0]==1 && board[3]==1 && board[6]==1){
        winScreen(player1);
        images1.style.display="none";
        images2.style.display="none";
        images3.style.display="none";
    }
    if(board[0]==2 && board[3]==2 && board[6]==2){
        winScreen(player2);
     }
     if(board[1]==1 && board[4]==1 && board[7]==1){
        winScreen(player1);
     }
     if(board[1]==2 && board[4]==2 && board[7]==2){
        winScreen(player2);
     }
     if(board[2]==1 && board[5]==1 && board[8]==1){
        winScreen(player1);
     }
     if(board[2]==2 && board[5]==2 && board[8]==2){
        winScreen(player2);
     }
     if(board[0]==1 && board[1]==1 && board[2]==1){
        winScreen(player1);
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
    if(winnerPerson){
      winnerPerson=false;
      board = [0,0,0,0,0,0,0,0,0];
      alert("funkar")
      alert(board);
      alert(images1.length);
    }
}
function miniPlayerBox(){
   sett
   player1box.style.height="100px";
}
function submitName(){
   let usernames = [[document.getElementById("names1").value],[document.getElementById("names2").value]];
   document.getElementById("name1").innerHTML = usernames[0];
   document.getElementById("name2").innerHTML = usernames[1];
   document.getElementById("insert-name").style.display ="none";

}
playerBoxes[0].addEventListener("mouseenter",function(){
    playerBoxes[0].style.height="330px";
});
playerBoxes[0].addEventListener("mouseleave",function(){
   playerBoxes[0].style.height="100px";
});
playerBoxes[1].addEventListener("mouseenter",function(){
   playerBoxes[1].style.height="330px";
});
playerBoxes[1].addEventListener("mouseleave",function(){
  playerBoxes[1].style.height="100px";
});