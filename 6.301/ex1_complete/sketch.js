var starPositionsX;
var starPositionsY;
var starDirectionsX;
var starDirectionsY

var numStars;
var maxDist;

function setup()
{
    createCanvas(800,800);
    
    starPositionsX = [];
    starPositionsY = [];
    starDirectionsX = [];
    starDirectionsY = [];
    numStars = 1000;
    
    for(var i = 0; i < numStars; i++)
        {
            starPositionsX.push(width/2);
            starPositionsY.push(height/2);
            starDirectionsX.push(random(-1,1));
            starDirectionsY.push(random(-1,1));
        }
        
        maxDist =dist(0,0,width/2, height/2);
}

function draw()
{
        background(0);
        fill(255);
        noStroke();
        
        for(var i = 0; i < numStars; i++)
            
            {
                var d = dist(width/2, height/2, starPositionsX[i], starPositionsY[i]);
                var r = d/25;
                var s = d * 20/maxDist + 0.1;
                ellipse(starPositionsX[i], starPositionsY[i], r,r);
                
                starPositionsX[i] += starDirectionsX[i] * s;
                starPositionsY[i] += starDirectionsY[i] * s;
                
                if(d > maxDist)
                {
                    starPositionsX[i] = width/2;
                    starPositionsY[i] = height/2;
                }
            }
    

}