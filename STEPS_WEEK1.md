Outline:
* learn the console
* get the attitude of a programmer
	* have humility
	* high threashold for pain
	* realize, things that are easy on first try are usually not particularly interesting. With programming, you'll be wrong a lot--that's part of the process
* understand a trend in programming is to add other people's code to your projects (services/libraries)
* follow along the first part of "JavaScript for Cats" (http://jsforcats.com/)
	* strings
	* variables
	* using functions
	* using third-party libraries (of functions)
* use my "Canvas starter code" (below) to play with canvas (triggering methods and setting properties)
	* draw a rectangle (specifying x,y,width,height):
	```
	ctx.fillRect(0,0,100,100);
	```
	* clear a rectangle (specifying x,y,width,height):
	```
	ctx.clearRect(0,0,100,100);
	```
	* other methods:
	```
	ctx.fillStyle = '#ff0000';
	ctx.fillStyle = 'blue';
	ctx.
	```
* take a peek at projects we can work on during the course.
	* lines: http://jsfiddle.net/phillipkerman/Vjbah/
	* circles: http://jsfiddle.net/phillipkerman/UjRAx/4/
	* broken: http://jsbin.com/oqemaf/101/edit 




Unshamelesly, but with due respect, the content below is drawn from: http://jsforcats.com/

After going through the first part of JavaScript For Cats (up to Arrays) you should be familiar with the code snippets below.

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


