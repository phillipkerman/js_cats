var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height;

//vars
var boxX = 0;


//think of the following code as
//window.addEventListener("one 10th of a second", handleInterval);
setInterval(handleInterval, 100);


function handleInterval(evt){
   
    //clear
    ctx.clearRect(0,0,w,h);
    //update boxX variable
    boxX = boxX + 1;
    //draw a rect
    ctx.fillRect( boxX, 0, 10, 10 );
    
}


//http://jsfiddle.net/phillipkerman/Hb5fR/

