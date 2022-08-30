// Board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//Snake
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

//Äpple
var appleX = blockSize * 10;
var appleY = blockSize * 10;


window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //För att rita på board

    update();
}

function update(){
    context.fillstyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillstyle = "green";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    context.fillstyle = "red";
    context.fillRect(appleX, appleY, blockSize, blockSize);
}