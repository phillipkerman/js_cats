var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height;


//bounce off walls
//bounce off each other

var myList = [];

for( var i = 0; i < 30; i++ ){
	myList.push( { x: Math.random()*w,  
				   y: Math.random()*h,
				   xChange: (Math.random()*3) - 2,
				   yChange: (Math.random()*3) - 2,
				   color: getRandomColor(),
				   width: (Math.random()*40) + 10,
                   marked: false,
				} );
}



//kick start:  
setInterval(handleInterval, 10);

function handleInterval(evt){
    var i,j;
    //clear
    ctx.clearRect(0,0,w,h);
	var total = myList.length;

//a, b, c
   
    //a compared to others
    //b compared to others

    for(  i = 0; i < total ; i++ ){
        var theA = myList[i];

        for(  j = 0; j < total ; j++ ){
            var theB = myList[j];
            //compare theA to theB;

            //first make sure not on same index
            if ( i == j ){
                continue;
            }

            if ( getDistance(theA, theB) < 20 ){
                theA.marked = true;
                theB.marked = true;
                console.log("hit!!!")
            }


        }

    }


    //check bounds

    for( i = 0; i < total ; i++ ){
        var whichBox = myList[i];
        if ( whichBox.x + whichBox.width > w ) whichBox.xChange = whichBox.xChange*-1;
        if ( whichBox.x < 0 ) whichBox.xChange = whichBox.xChange*-1;
        if ( whichBox.y + whichBox.width > h ) whichBox.yChange = whichBox.yChange*-1;
        if ( whichBox.y < 0 ) whichBox.yChange = whichBox.yChange*-1;
    }
    for( i = 0; i < total ; i++ ){
       if ( myList[i].marked ){
            myList[i].xChange = myList[i].xChange*-1;
            myList[i].yChange = myList[i].yChange*-1;
            myList[i].marked = false;
       }
    }

	for( i = 0; i < total ; i++ ){
	    doStuffToBox( myList[i] );
	}
}
function doStuffToBox(whichBox){
	 //update location
    whichBox.x = whichBox.x + whichBox.xChange;
    whichBox.y = whichBox.y + whichBox.yChange;
    
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
function getDistance(box1, box2){
    var distance;
    var xDiff = box1.x - box2.x;
    var yDiff = box1.y - box2.y;

    distance = Math.sqrt(xDiff*xDiff  +  yDiff*yDiff )


    return distance;
}