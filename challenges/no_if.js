var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height;

//a few more vars for the game
var boxX = 0;

setInterval(handleInterval, 10);

function handleInterval(evt){
   //redraw
   
    //clear
    ctx.clearRect(0,0,w,h);
    
    
    //update boxX variable
    boxX = boxX + 5;

    //trigger drawBox function that I wrote below
    drawBox( boxX % w, 0, 10 );
    
}

function drawBox(x, y, width ){
    ctx.fillRect(x, y, width, width);
}


