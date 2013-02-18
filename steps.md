

```javascript:
//strings/variables/functions
var dogSentence = "Our family has two dogs.";

dogSentence.replace("dogs", "cats");
```

Underscore: http://underscorejs.org/underscore.js

```javascript:
_.first("hello");
```

```javascript:
function makeMoreExciting(string) {
  return string + '!!!!'
}
```

Canvas starter code:
```javascript
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
```



Reading: http://jsforcats.com/
