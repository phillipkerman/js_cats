//makes and adds a canvas element and returns the context
var ctx = (function(){

	var 
		canvas = document.createElement('canvas'),
	    context = canvas.getContext("2d");

	    document.body.appendChild( canvas );
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerWidth;


	return context;


}).call(this);



drawOne = function (index){
	var width=30, space=3;
	ctx.fillRect(index*(width+space), 0, width, width);
}



var listOfObjects = []
update = function(){
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	var total = listOfObjects.length;
	for(var i=0; i<total; i++){
		listOfObjects[i].update();
	}
}

var obj = function(){
	this.x = Math.random()*ctx.canvas.width;
	this.y = Math.random()*ctx.canvas.height;
	this.dirX = 1-Math.random()*2;
	this.dirY = 1-Math.random()*2;
}

obj.prototype.update =function(){
		this.x += this.dirX;
		this.y += this.dirY;
		if ( this.x > ctx.canvas.width ) this.x = 0;
		if ( this.y > ctx.canvas.height ) this.y = 0;
		ctx.fillRect(this.x, this.y, 10, 10);
	}

for(var i=0; i<100; i++){
	listOfObjects.push( new obj() );
}