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
	c.fillRect(index*(width+space), 0, width, width);
}



var listOfObjects = []
update = function(){
	c.clearRect(0, 0, c.canvas.width, c.canvas.height);
	var total = listOfObjects.length;
	for(var i=0; i<total; i++){
		listOfObjects[i].update();
	}
}

var obj = function(){
	this.x = Math.random()*c.canvas.width;
	this.y = Math.random()*c.canvas.height;
	this.dirX = 1-Math.random()*2;
	this.dirY = 1-Math.random()*2;
}

obj.prototype.update =function(){
		this.x += this.dirX;
		this.y += this.dirY;
		if ( this.x > c.canvas.width ) this.x = 0;
		if ( this.y > c.canvas.height ) this.y = 0;
		c.fillRect(this.x, this.y, 10, 10);
	}

for(var i=0; i<100; i++){
	listOfObjects.push( new obj() );
}