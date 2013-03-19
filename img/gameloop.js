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
