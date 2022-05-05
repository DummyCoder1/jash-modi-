var turn=0
function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("grey");
    fill("#404040");
    rect(0, 0, width, 50);
    textAlign(CENTER);
    fill("White");
    textSize(18);
    text("TIC TAC TOE", width / 2, 33);
    fill("Black");
}


function draw()
{

 createRow(100)
 createRow(200)
 createRow(300)  
}

function createRow(y)
{
  for (x = 500; x < 800; x=x+100)
   {
       var b1= new Box(x,y,100,100); 
       b1.appear();   
   }  
}