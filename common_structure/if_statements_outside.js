
var counter = 0;

document.body.addEventListener('click', handleClick);

function handleClick(evt){

	counter = counter + 1;

}


if ( counter > 10 ){
	console.log("you went over ten!");
}

