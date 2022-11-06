/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position
	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;      //512
	gameChar_y = floorPos_y;   //432

	treePos_x = width/2;       //512
	treePos_y = height/2;      //288
    
    canyon = {x_pos: 0,
	width: 100};
    collectable = {x_pos: 100, y_pos: 300, size: 50};
    mountain = {x_pos: 300, y_pos: floorPos_y};
    cloud = {x_pos: 200, y_pos: 150, width: 80, height:50};
}

function draw()
{
	background(100, 155, 255); //fill the sky blue
    
    //draw some green ground
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); 
    
    //draw cloud
    fill(100);
    ellipse(cloud.x_pos,cloud.y_pos-50,cloud.width+10,cloud.height+20);
    ellipse(cloud.x_pos-50,cloud.y_pos-50,cloud.width,cloud.height);
    ellipse(cloud.x_pos+40,cloud.y_pos-50,cloud.width,cloud.height);

	fill(80);
    ellipse(cloud.x_pos+100,cloud.y_pos-50-30,cloud.width+10,cloud.height+20);
    ellipse(cloud.x_pos-50+100,cloud.y_pos-50-30,cloud.width,cloud.height);
    ellipse(cloud.x_pos+40+100,cloud.y_pos-50-30,cloud.width,cloud.height);
    
	fill(120);
    ellipse(cloud.x_pos+180,cloud.y_pos-50-10,cloud.width+10,cloud.height+20);
    ellipse(cloud.x_pos-50+180,cloud.y_pos-50-10,cloud.width,cloud.height);
    ellipse(cloud.x_pos+40+180,cloud.y_pos-50-10,cloud.width,cloud.height);
    
	fill(80);
    ellipse(cloud.x_pos+100,cloud.y_pos-50+30,cloud.width+10,cloud.height+20);
    ellipse(cloud.x_pos-50+100,cloud.y_pos-50+30,cloud.width,cloud.height);
    ellipse(cloud.x_pos+40+100,cloud.y_pos-50+30,cloud.width,cloud.height);
    
    //draw mountain
    fill(153,76,0);
    triangle(mountain.x_pos-150, mountain.y_pos,
             mountain.x_pos, 255,
             mountain.x_pos+150, mountain.y_pos);
    triangle(mountain.x_pos, mountain.y_pos,
             mountain.x_pos+100, 135,
             mountain.x_pos+200, mountain.y_pos);
    triangle(mountain.x_pos+50, mountain.y_pos,
             mountain.x_pos+200, 215,
             mountain.x_pos+270, mountain.y_pos);
    
    //draw tree
    fill(120,100,40);
    rect(treePos_x,treePos_y,40,floorPos_y-treePos_y); //height is 432-288=144
    //draw Branches
    fill(0,155,0);
    triangle(
        treePos_x-50,
        treePos_y+60,
        treePos_x+20,
        treePos_y-60,
        treePos_x+100,
        treePos_y+60);
    triangle(treePos_x-50+10,
             treePos_y+60-50,
             treePos_x+20,
             treePos_y-60-40,
             treePos_x+100-10,
             treePos_y+60-50);
    triangle(treePos_x-50+20,
             treePos_y+60-100,
             treePos_x+20,
             treePos_y-60-60,
             treePos_x+100-20,
             treePos_y+60-100);
    
    //draw canyon
    fill('black'); rect(canyon.x_pos,floorPos_y,canyon.width+20,220);
    
    //draw collectable
    stroke('black');
    strokeWeight(5);
    fill('white');
    ellipse(collectable.x_pos,collectable.y_pos,collectable.size+20,collectable.size+20);
    stroke('black');
    strokeWeight(5);
    fill('orange');
    ellipse(collectable.x_pos,collectable.y_pos,collectable.size,collectable.size);
    stroke('black');
    strokeWeight(5);
    fill('red');
    ellipse(collectable.x_pos,collectable.y_pos,collectable.size-20,collectable.size-20);
    
    //draw the game character.
    noStroke();
    fill('black');
    ellipse(gameChar_x,gameChar_y -50,35);
    fill('red');
    rect(gameChar_x-6,gameChar_y-33,12,30);
    fill('black');
    rect(gameChar_x+2,gameChar_y-5,15,5);
    rect(gameChar_x-17,gameChar_y-5,15,5);

}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;

}
