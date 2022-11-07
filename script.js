let player1turn = true; 
// let player1 = prompt("Spelare 1 namn:");
// let player2 = prompt("Spelare 2 namn:");
let board = [0,0,0,0,0,0,0,0,0];

document.getElementById("name1").innerHTML = "player 1: " + player1;
document.getElementById("name2").innerHTML = "player 2: " + player2;

function checkWin(){ 
    if(board[0]==1 && board[3]==1 && board[6]==1){
       alert("Vinst!");
    }
    if(board[0]==2 && board[3]==2 && board[6]==2){
        alert("Vinst!");
     }
     if(board[1]==1 && board[4]==1 && board[7]==1){
        alert("Vinst!");
     }
     if(board[1]==2 && board[4]==2 && board[7]==2){
        alert("Vinst!");
     }
     if(board[2]==1 && board[5]==1 && board[8]==1){
        alert("Vinst!");
     }
     if(board[2]==2 && board[5]==2 && board[8]==2){
        alert("Vinst!");
     }
     if(board[0]==1 && board[1]==1 && board[2]==1){
        alert("Vinst!");
     }
     if(board[0]==2 && board[1]==2 && board[2]==2){
        alert("Vinst!");
     }
     if(board[3]==1 && board[4]==1 && board[5]==1){
        alert("Vinst!");
     }
     if(board[3]==2 && board[4]==2 && board[5]==2){
        alert("Vinst!");
     }
     if(board[6]==1 && board[7]==1 && board[8]==1){
        alert("Vinst!");
     }
     if(board[6]==2 && board[7]==2 && board[8]==2){
        alert("Vinst!");
     }

  
     

}
function addSymbol(ruta){
    document.getElementById("upptagen").style.visibility="hidden";
    if(board[ruta-1]==0){
        if(player1turn)
        {
            document.getElementById("cross"+ruta).style.display="block";
            player1turn =false;
            board[ruta-1]=1;
        }
       else{
        document.getElementById("circle"+ruta).style.display="block";
        player1turn =true;
        board[ruta-1] = 2;
       }
    }   
    else{
        document.getElementById("upptagen").style.visibility="visible";
    }
    checkWin();
}

