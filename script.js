var userNumber = prompt("Pick a Number Between 0 and 50");
var compNumber = Math.floor((Math.random() *50) + 1);

	console.log(userNumber);
	console.log(compNumber);
if(userNumber > compNumber){
	console.log("You're number is higher");
}
	else{
		console.log("You're number is lower");

	}