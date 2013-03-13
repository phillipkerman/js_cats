var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height;

//a few more vars for the game
var boxX = 0;
var direction = 1;


setInterval(handleInterval, 10);

function handleInterval(evt){
   //redraw
   
    //clear
    ctx.clearRect(0,0,w,h);
    
    //see if we need to change direction
    if ( boxX > 200 ){
      direction = -1;
    }
    if ( boxX < 0 ){
      direction = 1;
    }

    //update boxX variable
    boxX = boxX + direction;

    //trigger drawBox function that I wrote below
    drawBox( boxX, 0, 10 );
    
}

function drawBox(x, y, width ){
    ctx.fillRect(x, y, width, width);
}


