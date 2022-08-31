var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board = [];
var row = 9;
var cols = 9;
var score = 0;

window.onload = function(){
    startGame();
}

function randomCandy(){
    return candies[Math.floor(Math.random() * candies.length)]
}

function startGame(){
    for (let r = 0; r < row; r++){
        for (let c = 0; c < cols; c++){
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "../images/" + randomCandy() + ".png";

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row)
    }
    console.log(board)
}