var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board = [];
var row = 9;
var cols = 9;
var score = 0;

window.onload = function(){
    startGame();
}

function randomCandy(){
    return candies[Math.floor(Math.random() * candies.length)];
}

function startGame(){
    for (let r = 0; r < row; r++){
        let rows = [];
        for (let c = 0; c < cols; c++){
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "../images/" + randomCandy() + ".png";

            //Drag Function
            tile.addEventListener("dragstart", dragstart); //Click on fruit, start dragfunktion
            tile.addEventListener("dragover", dragOver); // Clicking on fruit, move mouse to drag fruit
            tile.addEventListener("dragenter", dragEnter); // dra till annan frukt
            tile.addEventListener("dragleave", dragLeave); // leave friut over another fruit
            tile.addEventListener("dragend", dragEnd); // dropping a fruit over antoher
            tile.addEventListener("drop", dragDrop); // swap candies after the process

            document.getElementById("board").append(tile);
            rows.push(tile);
        }
        board.push(rows)
    }
    console.log(board)
}