For next week:
=======
* Bring to class any programming terms you have heard.
* Consider defining any of the following terms (which I don't expect everyone to know)
	* strings
	* data types
	* method/function
	* parameters/arguments
	* properties
	* Canvas
	* syntax
	* pseudo-code

Links mentioned in class:
======
* easy way back to our class files: tinyurl.com/jscats
* http://voxeljs.com/

Outline for day:
=======
* talk about the course overall--what do you want to get?
* learn the console
* get the attitude of a programmer
	* humility
	* high threashold for pain
	* realize, things that are easy on first try are usually not particularly interesting. With programming, you'll be wrong a lot--that's part of the process
* follow along the first part of "JavaScript for Cats" (http://jsforcats.com/)
	* strings
	* variables
	* using functions
	* using third-party libraries (of functions)
* use my "Canvas starter code" (http://jsfiddle.net/phillipkerman/5TN4n/) to play with canvas (triggering methods and setting properties)
	* draw a rectangle (arguments for x,y,width,height):
	```
	ctx.fillRect(0,0,100,100);
	```
	* clear a rectangle (parameters for x,y,width,height):
	```
	ctx.clearRect(0,0,100,100);
	```
	* set properties:
	```
	ctx.fillStyle = '#ff0000';
	ctx.fillStyle = 'blue';
	```
* take a peek at projects we can work on during the course.
	* lines: http://jsfiddle.net/phillipkerman/Vjbah/
	* circles: http://jsfiddle.net/phillipkerman/UjRAx/4/
	* boxes: http://jsfiddle.net/phillipkerman/ebyqD/

Follow "JavaScript for Cats"
=======
Here are my notes from following along the first part of: http://jsforcats.com/


Strings/variables/built-in functions
=======
```javascript:
var dogSentence = "Our family has two dogs.";
```

```javascript:
dogSentence.replace("dogs", "cats");
```

Third party library:
=======
Underscore: http://underscorejs.org/underscore.js

```javascript:
_.first("hello");
```

Homemade functions (makeMoreExciting):
=======
```javascript:
function makeMoreExciting(string) {
  return string + '!!!!';
}
```

Homemade functions (yellIt):
=======
```javascript:
function yellIt(string) {
  string = string.toUpperCase();
  string = makeMoreExciting(string);
  console.log(string);
}
```


Loops (logANumber):
=======
```javascript:
function logANumber(someNumber) {
  console.log(someNumber);
}
_.times(10, logANumber);
```

[End of JavaScript For Cats portion--stop before Arrays]


Canvas starter code:
=======
```javascript
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
```


