var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height;
   
 context.strokeStyle = "#FF0000";


var items = 700; // CHANGE THIS
var boxWidth= 1;
var lastGoodWidth = boxWidth;
var delay = 60;

var interval = setInterval( drawBoard, delay);

function drawBoard(  ){
   
    boxWidth++;
    var x, y;
       
    //base
    context.clearRect(0,0,w,h);
     context.fillStyle = "#CCCCCC";
    context.fillRect(0,0,w,h);
    
    var counter = 0;
    
        y = 0;
        while ( (y+boxWidth) < h ){
            x = 0;
            while ( (x+boxWidth) < w ){
                drawBox(x, y, boxWidth, boxWidth);
                x += boxWidth;
                counter++;
                if ( counter >= items ){
                    lastGoodWidth = boxWidth;
                    return;
                }
            }
            y += boxWidth;
        }
  
   
    context.strokeStyle = "#0000FF";
    clearInterval(interval);
    drawAll(lastGoodWidth);

}

function drawAll(theWidth){
    
    //base
    context.clearRect(0,0,w,h);
    context.fillStyle = "#CCCCCC";
    context.fillRect(0,0,w,h);
    
    
    var x, 
        y=0;
    
    var cols = Math.floor(w/theWidth);
    var rows = Math.floor(h/theWidth);
  
   // alert( "rows " + rows + " cols "+ cols);
    var excessW = (w - (cols*theWidth))  /  cols;
    var excessH = (h - (rows*theWidth))  /  rows;
 
    
    var counter = 0;
    
        while ( (y+theWidth) < h ){
            x = 0;
            
            while ( (x+theWidth) < w ){
                if ( counter < items  ){
                    
                    drawBox(x, y, theWidth, theWidth);
                   
                    counter++;
                }
                 x += theWidth + excessW ;
            }
            y += theWidth + excessH;
        }
   // alert(counter)
}

function drawBox(x,y,width, height){
    context.moveTo(x,y);
    context.lineWidth = 1;
    //context.strokeStyle = getRandomColor();
     context.fillStyle = getRandomColor();
    //context.fill();
    context.fillRect(x,y,width,height);
}


function getRandomColor(){
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7',
               '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
        color = '#', i;
    for (i = 0; i < 6 ; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}