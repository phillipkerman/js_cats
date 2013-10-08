var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

//make an empty list:
var list = [];
//set up game loop:
setInterval( gameLoop, 10);
function gameLoop(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    list.forEach( function(obj){
       drawCircle( obj.x, obj.y );
        obj.y += obj.speed * obj.direction;
        if ( obj.y > canvas.height ){
            obj.direction = -1;
        }
        if ( obj.y < 0 ){
            obj.direction = 1;
        }
        if ( obj.direction > 0 ){
            obj.speed = obj.speed*1.1
        }else{            
            obj.speed = obj.speed*0.9
        }
        if ( obj.speed < 0.1){
            obj.direction = obj.direction*-1;
            obj.speed = 0.2
        }
    });
}
//listen for clicks:
document.body.addEventListener("click", handleClick);
function handleClick(evt){
     //make a new object and add to it to the list array
    var obj = { x: evt.clientX,
               y: evt.clientY,
               direction: 1, //tracks whether to move it down or up
               speed: 5};
    list.push( obj );
}

//utilty to draw one circle
function drawCircle( x, y ){
    var circleRadius = 10;
    ctx.beginPath();
    ctx.arc(x, y, circleRadius, 0, 2*Math.PI);
    ctx.stroke();
}

