setInterval(handleInterval, 100);

function handleInterval(){
   //redraw
}



//make a game instance
//initialize game
//while the game is running, keep updating
//when done, finish



var game = new Game();
game.init();
while ( game.running == true ) {
	game.update();
}
game.finish();





window.addEventListener("click", handleClick);
function handleCLick(evt){
   //code
 }

//one off:
var person = { first: "Phillip", 
 			   last:"Kerman"  };

//"class"
function Person( theFirstName, theLastName){
	return { first: theFirstName,
			 last: theLastName };
}
//usage:
var p1 = new Person("phillip", "kerman");
var p2 = new Person ("joe", "smith");
