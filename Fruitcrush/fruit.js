var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board = [];
var row = 9;
var cols = 9;
var score = 0;

var currTile;
var otherTile;

window.onload = function(){
    startGame();

    window.setInterval(function(){
        crushFruit();
    }, 100);
}

function randomFruit(){
    return candies[Math.floor(Math.random() * candies.length)];
}

function startGame(){
    for (let r = 0; r < row; r++){
        let rows = [];
        for (let c = 0; c < cols; c++){
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "../images/" + randomFruit() + ".png";

            //Drag Function
            tile.addEventListener("dragstart", dragStart); //Click on fruit, start dragfunktion
            tile.addEventListener("dragover", dragOver); // Clicking on fruit, move mouse to drag fruit
            tile.addEventListener("dragenter", dragEnter); // dra till annan frukt
            tile.addEventListener("dragleave", dragLeave); // leave friut over another fruit
            tile.addEventListener("drop", dragDrop); // swap candies after the process
            tile.addEventListener("dragend", dragEnd); // dropping a fruit over antoher
            
            document.getElementById("board").append(tile);
            rows.push(tile);
        }
        board.push(rows)
    }
    console.log(board)
}

function dragStart(){
    currTile = this;
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    otherTile = this;
}


function dragEnd(){

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c-1 && r == r2;
    let moveRight = c2 == c+1 && r == r2;

    let moveUp = r2 == r-1 && c == c2;
    let moveDown = r2 == r+1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown

    if (isAdjacent) { 
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;
    }

}

function crushFruit() {
    crushThree();
}

function crushThree(){
    //check rows.
    for (let r = 0; r < row; r++){
        for (let c = 0; c < cols -2; c++) {
            let fruit1 = board[r][c];
            let fruit2 = board[r][c+1];
            let fruit3 = board[r][c+2];

            if (fruit1.src == fruit2.src && fruit2.src == fruit3.src && !fruit1.src.includes("blank")){
                fruit1.src = "../images/blank.png";
                fruit2.src = "../images/blank.png";
                fruit3.src = "../images/blank.png";
                console.log(fruit1.src)
            }
        }
    }

    for (let c = 0; c < cols; c++){
        for (let r = 0; r < row-2; r++) {
            let fruit1 = board[r][c];
            let fruit2 = board[r+1][c];
            let fruit3 = board[r+2][c];
            if (fruit1.src == fruit2.src && fruit2.src == fruit3.src && !fruit1.src.includes("blank")){
                fruit1.src = "../images/blank.png";
                fruit2.src = "../images/blank.png";
                fruit3.src = "../images/blank.png";
            }
        }
    }
}