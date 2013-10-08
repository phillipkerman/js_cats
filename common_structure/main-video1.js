var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height;


var myList = [];

for( var i = 0; i < 200; i++ ){
	myList.push( { x: Math.random()*w,  
				   y: Math.random()*h,
				   xChange: (Math.random()*10) - 5,
				   yChange: (Math.random()*10) - 5,
				   color: getRandomColor(),
				   width: (Math.random()*40) + 10
				} );
}



//kick start:  
setInterval(handleInterval, 10);

function handleInterval(evt){
    //clear
    ctx.clearRect(0,0,w,h);
	var total = myList.length;
	for( var i = 0; i < total; i++ ){
	    doStuffToBox( myList[i] );
	}
}
function doStuffToBox(whichBox){
	 //update location
    whichBox.x = whichBox.x + whichBox.xChange;
    whichBox.y = whichBox.y + whichBox.yChange;
    
    //check bounds
    if ( whichBox.x > w ) whichBox.x = 0;
    if ( whichBox.x < 0 ) whichBox.x = w;
    if ( whichBox.y > h ) whichBox.y = 0;
    if ( whichBox.y < 0 ) whichBox.y = h;
    //trigger  function that I wrote below
    drawBox( whichBox.x, whichBox.y, whichBox.width, whichBox.color );
}

function drawBox(x, y, width, color ){
	ctx.fillStyle = color
    ctx.fillRect(x, y, width, width);
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