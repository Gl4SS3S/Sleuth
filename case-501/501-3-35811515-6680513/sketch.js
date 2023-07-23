/*

Officer: 6680513
CaseNum: 501-3-35811515-6680513

Case 501 - John Von Neuman - stage 4

This is our last chance to catch that killer kid.
Let's hope that John Von Neuman can identify the killer.
To speak to him follow Madame McCarthy’s advice below.

John was ever the keen chess player. Many an hour was spent considering his next move.
To speak to John beyond the grave you must place a chess piece in each of the dashed circles.
Use the image() and the piece variable command to place the pieces in their positions.
Do this by using two for loops in a nested pattern.
You will need to use some conditional statements in order to position each row to match the pattern.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()
 * if()

*/

y_amount = 64;
x_amount = 76;

var backgroundImg, piece;

function preload() {
    backgroundImg = loadImage("background.jpg");
    piece = loadImage("Piece.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);
    imageMode(CENTER);
}

function draw() {
    // add your for loop below

    for (let index = 0; index < 5; index++) {
        for (let j = 0; j < 8; j++) {
            if (index % 2 == 0) {
                image(piece, 577 + (j * x_amount), 388 + (index * y_amount));    
            } else {
                image(piece, 655 + (j * x_amount), 388 + (index * y_amount));
            }
        }
    }
}
