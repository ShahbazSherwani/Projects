/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var trees_x;
var treePos_y;

var collectable;
var isFound;

var clouds;
var mountains;
var canyons;
var game_score
var flagpole;
var lives;



function setup()
    {
        createCanvas(1024, 576);
        floorPos_y = height * 3/4;


        lives = 3;

        startGame();    

    }

function startGame()
    {
        gameChar_x = width/2;
        gameChar_y = floorPos_y;

        treePos_y = height/2;

        // Variable to control the background scrolling.
        scrollPos = 0;

        // Variable to store the real position of the gameChar in the game
        // world. Needed for collision detection.
        gameChar_world_x = gameChar_x - scrollPos;

        // Boolean variables to control the movement of the game character.
        isLeft = false;
        isRight = false;
        isFalling = false;
        isPlummeting = false;

        // Initialise arrays of scenery objects.

        trees_x = [-200, -800, 200, 800, 1200, 1600, 2000];

        clouds = [
                    {x_pos: 100, y_pos: 120, width: 50, height: 50},
                    {x_pos: -600, y_pos: 200, width: 50, height: 50},
                    {x_pos: -1000, y_pos: 160, width: 50, height: 50},
                    {x_pos: 1000, y_pos: 190, width: 50, height: 50},
                    {x_pos: 1200, y_pos: 300, width: 50, height: 50},
                    {x_pos: 1900, y_pos: 60, width: 50, height: 50}
                ];


        mountains = [
                        {x_pos: -500, y_pos: 100, size: -50},
                        {x_pos: 500, y_pos: 100, size: 10},
                        {x_pos: 1200, y_pos: 100, size: 100}
                    ];

        canyons = [-150, -800, 400, 800, 1200, 1600, 2200];

        collectable = [
                        {x_pos: -1000, y_pos: floorPos_y-10, size: 50, isFound: false},
                        {x_pos: 250, y_pos: floorPos_y-10, size: 50, isFound: false},
                        {x_pos: 1000, y_pos: floorPos_y-10, size: 50, isFound: false},
                        {x_pos: 2000, y_pos: floorPos_y-10, size: 50, isFound: false},
                    ];

        game_score = 0;

        flagpole = 
            {
                isReached: false,
                x_pos: 2500
            }
    }

function draw()
    {
        background(100, 155, 255); // fill the sky blue

        noStroke();
        fill(0,155,0);
        rect(0, floorPos_y, width, height/4); // draw some green ground

        push();
        translate(scrollPos,0);

        // Draw clouds.

        drawClouds();

        // Draw mountains.

        drawMountains();

        // Draw trees.
        drawTrees();

        // Draw canyons.
        for(var i = 0; i < canyons.length; i++)
            {
                checkCanyon(canyons[i]);
                drawCanyon(canyons[i]);
            }

        // Draw collectable items.
        for(var i = 0; i < collectable.length; i++)
            {
                if(!collectable[i].isFound)
                    {
                        checkCollectable(collectable[i]);

                        drawCollectable(collectable[i]);
                    }
            }

        renderFlagpole();

        pop();

        // Draw game character.

        drawGameChar();

        checkPlayerDie();

        fill(255);
        textSize(18);
        textFont('Courier New');
        textAlign(LEFT);
        noStroke();
        text("score:" + game_score, 10, 20);


        // Draw Game Score
        if(lives == 3) 
            {
                for(var i = 3; i > 0; i--)
                    {
                        fill(185, 138, 4);
                        rect(97 + 20*i, 15, 5, 13);
                        fill(222, 166, 0);
                        ellipse(100 + 20*i, 15, 10, 10);
                        fill(222, 166, 0);
                        ellipse(100 + 20*i, 30, 10, 10);
                    }
            }

        else if(lives == 2)
            {
                for(var i = 2; i > 0; i--)
                    {
                        fill(185, 138, 4);
                        rect(97 + 20*i, 15, 5, 13);
                        fill(222, 166, 0);
                        ellipse(100 + 20*i, 15, 10, 10);
                        fill(222, 166, 0);
                        ellipse(100 + 20*i, 30, 10, 10);
                    }
            }
        else if(lives == 1)
            {
                    fill(185, 138, 4);
                    rect(117, 15, 5, 13);
                    fill(222, 166, 0);
                    ellipse(120, 15, 10, 10);
                    fill(222, 166, 0);
                    ellipse(120, 30, 10, 10);
            }


        // Game over logic
        if(lives < 1)
            {
            fill(255);
            textSize(40);
            textAlign(CENTER);
            text("GAME OVER. \n PRESS SPACE TO CONTINUE ", width / 2, height / 2);
                return;
            }

        // Level complete logic
        if(flagpole.isReached)
            {
                fill(255);
                textSize(40);
                textAlign(CENTER);
                text(" LEVEL COMPLETE. \n PRESS SPACE TO CONTINUE", width /2, height / 2);
                return;
            }

        // Logic to make the game character move or the background scroll.
        if(isLeft)
            {
                if(gameChar_x > width * 0.2)
                {
                    gameChar_x -= 5;
                }
                else
                {
                    scrollPos += 5;
                }
            }

        if(isRight)
            {
                if(gameChar_x < width * 0.8)
                {
                    gameChar_x  += 5;
                }
                else
                {
                    scrollPos -= 5; // negative for moving against the background
                }
            }

        // Logic to make the game character rise and fall.

        if(isFalling == true && floorPos_y == gameChar_y)

            {
                gameChar_y = gameChar_y -100;
            } 

        if(floorPos_y > gameChar_y)

            {
                gameChar_y += 2; 

            }

        else
            {
                isFalling = false;
            }

        if(flagpole.isReached == false)

            {
                checkFlagpole();
            }

        // Update real position of gameChar for collision detection.
        gameChar_world_x = gameChar_x - scrollPos;
    }


// ---------------------
// Key control functions
// ---------------------

function keyPressed()
    {

        console.log("press" + keyCode);
        console.log("press" + key);

        // if statements to control the animation of the character when
        // keys are pressed.


        if(keyCode == 37)
            {
                console.log("left arrow");
                isLeft = true;
            }

        else if(keyCode == 39)
            {
                console.log("right arrow");
                isRight = true;
            }

       if(keyCode == 32)
            {
                console.log("space-bar");
                isFalling = true;
            }

    }

function keyReleased()
    {

        console.log("release" + keyCode);
        console.log("release" + key);

        // if statements to control the animation of the character when
        // keys are released.

        if(keyCode == 37)
            {
                console.log("left arrow");
                isLeft = false;
            }

        else if(keyCode == 39)
            {
                console.log("right arrow");
                isRight = false;
            }

        if(keyCode == 32)
            {
                console.log("space-bar");
                isFalling = false;
            }

    }


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
    {
        //the game character
        if(isLeft && isFalling)
            {
                // add your jumping-left code
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
        else if(isRight && isFalling)
            {
                // add your jumping-right code
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


            }
        else if(isLeft)
            {
                // add your walking left code
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

            }
        else if(isRight)
            {
                // add your walking right code
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

            }
        else if(isFalling || isPlummeting)
            {
                // add your jumping facing forwards code
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


            }
        else
            {
                // add your standing front facing code
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
                }
    }

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.

function drawClouds()
    {

        for(var i = 0; i < clouds.length; i++)
            {

                fill(255);
                ellipse(clouds[i].x_pos,clouds[i].y_pos -50, clouds[i].width, clouds[i].height);
                ellipse(clouds[i].x_pos + 45, clouds[i].y_pos -50, clouds[i].width, clouds[i].height);
                ellipse(clouds[i].x_pos +23 ,clouds[i].y_pos -70, clouds[i].width, clouds[i].height);

            }
    }

// Function to draw mountains objects.

function drawMountains()
    {

        for(var i = 0; i < mountains.length; i++)
            {

            //mountain    
            fill(73,36,0);
            triangle(mountains[i].x_pos + 40, mountains[i].y_pos +333, mountains[i].x_pos +300, mountains[i].y_pos +333, mountains[i].x_pos +160, mountains[i].y_pos);

            fill(109,57,6);
            triangle(mountains[i].x_pos + 70, mountains[i].y_pos +333, mountains[i].x_pos +340, mountains[i].y_pos +333, mountains[i].x_pos +200, mountains[i].y_pos +70);

            }



    }

// Function to draw trees objects.
function drawTrees()
    {
        // Draw trees.
        for(var i = 0; i < trees_x.length; i++)
            {



            //tree trunk
            fill(165,42,42);
            rect(trees_x[i]-230,floorPos_y-150,30,150);
            fill(165,42,42);
            rect(trees_x[i]-280,floorPos_y-150,130,20);
            fill(165,42,42);
            rect(trees_x[i]-265,floorPos_y-80,100,20);

            //leaves
            fill(0,190,0);
            ellipse(trees_x[i]-285,treePos_y-10,100,100);
            ellipse(trees_x[i]-150,treePos_y-10,100,100);

            fill(0,190,0);
            ellipse(trees_x[i]-285,treePos_y+70,50,50);
            ellipse(trees_x[i]-150,treePos_y+70,50,50);


            }

    }


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
    {
                fill(5,129,206);
                rect(t_canyon,floorPos_y,80,144);
                fill(0,76,122);
                rect(t_canyon,floorPos_y,80,100);

                if (isPlummeting == true) 
                {
                    gameChar_y += 1;
                    return;
                }

    }

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
    {
        if(gameChar_y == floorPos_y && 
           gameChar_world_x > t_canyon + 5 && gameChar_world_x < t_canyon + 70)
            {
                isPlummeting = true;
                gameChar_world_x = min(t_canyon + canyons.floorPos_y, t_canyon + canyons.width) 

            }

    }

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
    {
        //dumbell
        fill(133, 100 ,4);
        ellipse(t_collectable.x_pos + 30, t_collectable.y_pos, t_collectable.size-10);
        fill(222, 166, 0);
        ellipse(t_collectable.x_pos + 30, t_collectable.y_pos, t_collectable.size-15);
        fill(185, 138, 4);
        ellipse(t_collectable.x_pos + 30, t_collectable.y_pos, t_collectable.size-20);
        fill(185, 138, 4);
        ellipse(t_collectable.x_pos + 30, t_collectable.y_pos, t_collectable.size-20);
        fill(222, 166, 0);
        rect(t_collectable.x_pos -10, t_collectable.y_pos -5, 40, 10);
        fill(133, 100 ,4);
        ellipse(t_collectable.x_pos -10, t_collectable.y_pos, t_collectable.size-10);
        fill(222, 166, 0);
        ellipse(t_collectable.x_pos -10, t_collectable.y_pos, t_collectable.size-15);
        fill(185, 138, 4);
        ellipse(t_collectable.x_pos -10, t_collectable.y_pos, t_collectable.size-20);
        fill(185, 138, 4);
        ellipse(t_collectable.x_pos -10, t_collectable.y_pos, t_collectable.size-20);
    }

// Function to check character has collected an item.

function checkCollectable(t_collectable)
    {
        if(dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos)<20)
            {
                t_collectable.isFound = true;
                game_score += 1;
            }
    }

function renderFlagpole()
    {
        push();
        strokeWeight(5);
        stroke(100);
        line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y -250);
        fill(255, 0, 255);
        noStroke();

        if(flagpole. isReached)
            {
                rect(flagpole.x_pos, floorPos_y - 250, 50, 50);
            }
        else
            {
                rect(flagpole.x_pos, floorPos_y - 50, 50, 50);
            }

        pop();
    }

function checkFlagpole()
    {
        var d = abs(gameChar_world_x - flagpole.x_pos);

        if(d < 15)
            {
                flagpole.isReached = true;
            }
    }

function checkPlayerDie()
    {
        if(lives == 0 )
            {


            }
        if(gameChar_y > height)
            {
                lives =  lives -1;
                startGame();
            }

    }