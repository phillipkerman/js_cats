Outline for day:
=======
* use Chrome (via start>internet>chrome)
* learn the console (Ctrl+Shift+i)
* see jsFiddle (http://jsfiddle.net)
* being a programmer
	* humility
	* high threashold for pain
	* being "good" on first try
* follow along the first part of "JavaScript for Cats" (http://jsforcats.com/)
	* strings
	* variables
	* using functions
	* using third-party libraries (of functions)
* play with a canvas starter file at jsfiddle: http://jsfiddle.net/phillipkerman/5gnYa/
* take a peek and modify mini projects on jsfiddle.
	* circle where you click: http://jsfiddle.net/phillipkerman/wFC2R/
	* random lines: http://jsfiddle.net/phillipkerman/Vjbah/
	* animated circles: http://jsfiddle.net/phillipkerman/UjRAx/

Link Reminder
======
![](link_picture.png)

Outside of class watch the code.org (movie)
=======
* 6 minute version of "What Schools Don't Teach"  http://www.youtube.com/watch?v=nKIu9yen5nc
* interesting critical blog post/review (and very diverse comments as well!) http://symbo1ics.com/blog/?p=1615



My notes from the first part of "JavaScript for Cats"
=======
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
