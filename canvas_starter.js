//makes and adds a canvas element and returns the context
var c = (function(){

var 
	canvas = document.createElement('canvas'),
    context = canvas.getContext("2d");

    document.body.appendChild( canvas );
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;


return context;


}).call(this);

//may have more here