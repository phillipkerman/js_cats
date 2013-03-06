Plan
=======
* discuss class pattern: 10-15 minutes discussion, 30+ minutes at computer, 10 minute post mortem?
* discuss any epiphanies or ponderings
* see my 1GAM/February: http://phillipkerman.com/rando/
* vocabulary
* review jsfiddle vs. console (mention other tools)
* code movie
* remind tinyurl.com/jscats
* today
	* learn to check the console for code errors, for example, this file (http://jsfiddle.net/phillipkerman/dyXs2/)  should display an error (in the console) every time you click in the "result" pane (bottom right square).  (To fix it: remove the begin comment "/*" on line 14 and end comment "*/" on line 25.)  
	* See this example (http://jsfiddle.net/phillipkerman/MB6RV/) for how to set up a listener for "clicks".  There are two parts: 
		* line 8 where you begin subscribing to clicks:
	`window.addEventListener("click", myHandler);`
		* lines 9-12 where you define the myHandler function referenced on line 8:
`function myHandler(evt){
	//demonstrate access to two important properties of the evt parameter
	console.log("you clicked " + evt.clientX + " x " + evt.clientY + " y");
}`
	* link to canvas starter (and draw APIs) http://jsfiddle.net/phillipkerman/Abttv/
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
