What we did mistake
=======
* We discussed class pattern: 10-15 minutes discussion (bring a snack), 30+ minutes at computer, 10 minute post mortem if needed.
* We discussed any epiphanies or ponderings.  One thing shared was that Eli discovered a language called Lua (http://www.lua.org/)
* I shared my "one game a month" entry for February: http://phillipkerman.com/rando/  (It's a little bit of a mess, but you can see the main code for that at http://phillipkerman.com/rando/js/main.js  --just look below the comments "//=======")
* We discussed some vocabulary: properties, methods, strings, concatenation
* We reviewed jsfiddle vs. console.
* I pointed to the code movie below--please watch it.
* today
	* learn to check the console for code errors, for example, this file (http://jsfiddle.net/phillipkerman/dyXs2/)  should display an error (in the console) every time you click in the "result" pane (bottom right square).  (To fix it: remove the begin comment "/*" on line 14 and end comment "*/" on line 25.)  
	* See this example (http://jsfiddle.net/phillipkerman/MB6RV/) for how to set up a listener for "clicks".  There are two parts: 
		* line 8 where you begin subscribing to clicks:
	`window.addEventListener("click", myHandler);`
		* lines 9-12 where you define the myHandler function referenced on line 8. Notice we can get details about the event that landed us in the myHandler function by accessing the single parameter which all such functions (those serving as destinations for event listeners)--named "evt" in my code.  Namely, evt.clientX tells you the x position of the mouse when they clicked.
	* You can write your own functions.  Named functions always look like this:

	![](img/basic_function.png)

	* To trigger the myFunction function above, you use: 
`myFunction();
`
	* We also discussed writing your own functions which accept 1 or more parameters.  The "signature" (that is, the form for all such functions) is:

![](img/function_with_param.png)
	* With the way the myOtherFunction function is designed, you will trigger that function AND pass values for those two parameters.  Perhaps something like this: `myOtherFunction(100,150);`  (We will return to this topic because it's tricky.) 
* coming up
	* designing data types / objects
	* arrays, loops, setInterval

code.org (movie)
=======
* 5:44 version of "What Schools Don't Teach"  http://www.youtube.com/watch?v=nKIu9yen5nc
* interesting critical blog post/review (and very diverse comments as well!) http://symbo1ics.com/blog/?p=1615


Link Reminder
======
![](link_picture.png)
