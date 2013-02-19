Outline:
* learn the console
	* get the attitude of a programmer

* follow along the first part of "JavaScript for Cats"
	* strings
	* variables
	* using functions
	* using third-party libraries (of functions)
	* play with canvas (triggering methods and setting properties)

* see projects we can work on during the course.


Drawn from: http://jsforcats.com/



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

[Stop before Arrays at jsforcats.com]


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


