/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
    //head
    fill(234,199,157);
    rect(gameChar_x -12, gameChar_y - 70,25, 25);
    //band
    fill(255,0,0);
    rect(gameChar_x -12, gameChar_y - 68,25, 5);
    //lefteye
    fill(0);
    rect(gameChar_x -8, gameChar_y - 60,5, 5);
    //righteye
    fill(0);
    rect(gameChar_x + 3, gameChar_y - 60,5, 5);
    //mouth
    fill(255,255,255);
    rect(gameChar_x -5, gameChar_y - 52,10, 3);
    //neck
    fill(184,155,120);
    rect(gameChar_x -5 , gameChar_y - 45, 10, 10);
    //body
    fill(255,0,0);
    rect(gameChar_x - 13, gameChar_y -40, 26,26);
    //leftleg
    fill(184,155,120);
    rect(gameChar_x -10, gameChar_y -14, 8, 15);
    //rightleg
    fill(184,155,120);
    rect(gameChar_x + 2, gameChar_y -14, 8, 15);
    //rightarm
    fill(184,155,120);
    rect(gameChar_x + 13, gameChar_y -40, 8, 18);
    //leftarm
    fill(184,155,120);
    rect(gameChar_x -21, gameChar_y -40, 8, 18);


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
    //head
    fill(234,199,157);
    rect(gameChar_x -12, gameChar_y - 70,25, 25);
    //band
    fill(255,0,0);
    rect(gameChar_x -12, gameChar_y - 68,25, 5);
    //lefteye
    fill(0);
    rect(gameChar_x -8, gameChar_y - 60,5, 5);
    //righteye
    fill(0);
    rect(gameChar_x + 3, gameChar_y - 60,5, 5);
    //mouth
    fill(255,255,255);
    rect(gameChar_x -5, gameChar_y - 52,10, 10);
    //neck
    fill(184,155,120);
    rect(gameChar_x -5 , gameChar_y - 45, 10, 8);
    //body
    fill(255,0,0);
    rect(gameChar_x - 12.5, gameChar_y -40, 26,26);
    //leftleg
    fill(184,155,120);
    rect(gameChar_x -10, gameChar_y -14, 8, 15);
    //rightleg
    fill(184,155,120);
    rect(gameChar_x + 2, gameChar_y -14, 8, 15);
    //rightarm
    fill(184,155,120);
    rect(gameChar_x + 13.5, gameChar_y -55, 8, 18);
    //leftarm
    fill(184,155,120);
    rect(gameChar_x -20.5, gameChar_y -55, 8, 18);

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
    
        fill(234,199,157);
    rect(gameChar_x -12, gameChar_y - 70,25, 25);
    //band
    fill(255,0,0);
    rect(gameChar_x -12, gameChar_y - 68,25, 5);
    //ear
    fill(184,155,120);
    rect(gameChar_x -2, gameChar_y - 60,5, 10);
    //neck
    fill(234,199,157);
    rect(gameChar_x -5 , gameChar_y - 45, 10, 10);
    //body
    fill(255,0,0);
    rect(gameChar_x - 12.5, gameChar_y -40, 26,26);
    //rightlet
    fill(184,155,120);
    rect(gameChar_x -3, gameChar_y -14, 8, 15);

    //leftarm
    fill(184,155,120);
    rect(gameChar_x -4, gameChar_y -40, 8, 18);



	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
    
    //head
    fill(234,199,157);
    rect(gameChar_x -12, gameChar_y - 70,25, 25);
    //band
    fill(255,0,0);
    rect(gameChar_x -12, gameChar_y - 68,25, 5);
    //ear
    fill(184,155,120);
    rect(gameChar_x -2, gameChar_y - 60,5, 10);
    //neck
    fill(234,199,157);
    rect(gameChar_x -5 , gameChar_y - 45, 10, 10);
    //body
    fill(255,0,0);
    rect(gameChar_x - 12.5, gameChar_y -40, 26,26);
    //rightlet
    fill(184,155,120);
    rect(gameChar_x -3, gameChar_y -14, 8, 15);

    //leftarm
    fill(184,155,120);
    rect(gameChar_x -4, gameChar_y -40, 8, 18);


	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
    
    //head
    fill(234,199,157);
    rect(gameChar_x -12, gameChar_y - 70,25, 25);
    //band
    fill(255,0,0);
    rect(gameChar_x -12, gameChar_y - 68,25, 5);
    //ear
    fill(184,155,120);
    rect(gameChar_x -2, gameChar_y - 60,5, 10);
    //neck
    fill(234,199,157);
    rect(gameChar_x -5 , gameChar_y - 45, 10, 10);
    //body
    fill(255,0,0);
    rect(gameChar_x - 12.5, gameChar_y -40, 26,26);
    //rightleg
    fill(184,155,120);
    rect(gameChar_x -3, gameChar_y -14, 8, 15);

    //leftarm
    fill(184,155,120);
    rect(gameChar_x -4, gameChar_y -58, 8, 18);


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
        //head
    fill(234,199,157);
    rect(gameChar_x -12, gameChar_y - 70,25, 25);
    //band
    fill(255,0,0);
    rect(gameChar_x -12, gameChar_y - 68,25, 5);
    //ear
    fill(184,155,120);
    rect(gameChar_x -2, gameChar_y - 60,5, 10);
    //neck
    fill(234,199,157);
    rect(gameChar_x -5 , gameChar_y - 45, 10, 10);
    //body
    fill(255,0,0);
    rect(gameChar_x - 12.5, gameChar_y -40, 26,26);
    //rightlet
    fill(184,155,120);
    rect(gameChar_x -3, gameChar_y -14, 8, 15);

    //leftarm
    fill(184,155,120);
    rect(gameChar_x -4, gameChar_y -58, 8, 18);

}
