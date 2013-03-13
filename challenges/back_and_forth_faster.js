var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height,
    speedField =  document.getElementById("speedID");


var boxX = 0;
var direction = 1;
var speed = 2;
speedField.value = "2";
setInterval(handleInterval, 10);


speedField.addEventListener("change", handleSpeedChange);
function handleSpeedChange(evt){
  if ( ! isNaN(speedField.value) ){
    speed = speedField.value;
  }
}


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
    boxX = boxX + direction * speed;

    //trigger drawBox function that I wrote below
    drawBox( boxX, 0, 10 );
    
}

function drawBox(x, y, width ){
    ctx.fillRect(x, y, width, width);
}


