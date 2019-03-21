// Generate random secret number
var random = Math.floor((Math.random() * 20) + 1);
var numGuess = 0;

function startGame() {

var userInput = document.getElementById("number").value; // Get user's guess

// Check if there is no number or too big

if (userInput == "") {
	alert("Type a number!");
} else if (userInput > 20) {
	alert("Number is too big!");
} else {
	bigOrSmall();
}

// Comparison

function bigOrSmall() {
	if (userInput == random) {
		document.getElementById("demo").innerHTML = "YOU WON! Congratulations.";
		location.reload();
	} else if (userInput < random) {
		document.getElementById("demo").innerHTML = "This is smaller than the secret number! Try again.";
		//document.getElementById("number").value = "";
		numGuess += 1;
		guessInfo();
		document.getElementById("guesses").innerHTML = "Guess Count: " + numGuess;
	} else if (userInput > random) {
		document.getElementById("demo").innerHTML = "This is bigger than the secret number! Try again.";
		//document.getElementById("number").value = "";
		numGuess += 1;
		guessInfo();
		document.getElementById("guesses").innerHTML = "Guess Count: " + numGuess;
	}

function guessInfo() {
	switch(numGuess) {
		case 5:
		document.getElementById("left").innerHTML = "You've only got 5 more guesses to go!";
		break;
		case 6:
		document.getElementById("left").style.display = "none";
		break;
		case 10:
		document.getElementById("demo").innerHTML = "You ran out of guesses! Try again.";
		break;
		case 11:
		document.getElementById("left").style.display = "none";
		document.getElementById("demo").style.display = "none";
		document.getElementById("guesses").style.display = "none";
		location.reload();
			}
		}
	}
}
console.log(random);



