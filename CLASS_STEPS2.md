This week:
=======
* Use the following APIs to 
* Discuss terms
	* strings
	* data types
	* method/function
	* parameters/arguments
	* properties
	* Canvas
	* syntax
	* pseudo-code


Outline for day:
=======
* review console and jsfiddle
* see a typical file structure index.html/main.js (though we'll continue to use jsfiddle)
* walk through basic canvas APIs
	* help me draw some objects
	```
	ctx.fillRect(0,0,100,100);
	ctx.strokeRect(0,0,100,100);
	ctx.clearRect(0,0,100,100);
	ctx.fillStyle = '#ff0000';
	ctx.fillText("some string", 0,0);
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(100,100);
	ctx.stroke();
	```
	* nice summary of canvas APIs http://www.nihilogic.dk/labs/canvas_sheet/HTML5_Canvas_Cheat_Sheet.pdf

* work out solutions to the following bugs
	* why don't I see anything? LINK
	* why is the black box "in front of" the red box? LINK
	* why do I only see one box instead of two? LINK 
* using hexidecimal numbers to set color http://phillipkerman.com/cedaroak/hex/
* discuss events
	* see how to "listen" for mouse clicks
	* understand the typical game loop pattern

	
