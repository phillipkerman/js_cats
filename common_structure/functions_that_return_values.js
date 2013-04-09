

//trigger doSomething
doSomething();


function doSomething(){
	//code
	//code
	//code
	console.log("doing something");
}




var result = getRandomColor();
console.log("result is " + result);






function getRandomColor(){
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7',
               '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
        color = '#', i;
    for (i = 0; i < 6 ; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}