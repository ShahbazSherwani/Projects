var x = 0;

function setup(){
  drawLines();
  x += 100;
  drawLines();
  x += 100;
  drawLines();
}

function draw()
{
    drawLines();
}

function drawLines(){
  line(x, 0, x, height);
  if(x > 150){
    return;
  }
  line(x + 50, 0, x + 50, height);
}
