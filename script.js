// Create random word generator
var wordArray = [];
var randomWords = [ "awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "Dwarves", "fervid", "fishhook", "fjord", "gazebo", "gypsy", "haiku", "haphazard", "hyphen", "Ivory", "jazzy", "jiffy", "jinx", "jukebox", "kayak", "memento", "oxygen", "pajama", "Pixel", "zombie", "tomato", "shark", "elephant", "island",]

var number = Math.floor((Math.random() * 29) + 1);
var word = randomWords[number];
// Start function picks random word

function start() {
	length();
// Hides start button once clicked
	document.getElementById("button").style.visibility = "hidden";
// Calculates length of word

	function length() { 
		var printLetter = word.length;
		// Prints out number of letters
		console.log(printLetter);
		var parent = document.querySelector("ul");
		// Push each letter into an array
		for (var i = 0; i < word.length; i++) {
			wordArray.push(word[i]);
		// Visualize the letters of the words
			var h = document.createElement("li");
			h.setAttribute("id", i);              
			var t = document.createTextNode("_"); 
			h.appendChild(t);
			document.body.insertBefore(h, parent);
		}
		console.log(wordArray);
	}


}


// Receives letter input from player
var counter = 0;
var lettersGuessed = 0;

function guess(input) {
	counter++;
	var input;
	
	// Print number of guesses in counter var
		document.getElementById("numOfGuesses").innerHTML = "Guess Count: " + counter;

		// Loop if input letter is same as letters in array
		for (var j = 0; j < word.length; j++) {
			if (input == word[j]) {

				// Change appended list to show letter
				var modified = document.getElementById(j);
				modified.textContent = word[j];

				lettersGuessed++;
			} else {
				console.log("nope");
		
			}
		}
	// Detects if the player won
	if (lettersGuessed == word.length) {
		document.getElementById("numOfGuesses").innerHTML = "You won!";
	}
	console.log(input);
	console.log(counter);
	console.log(lettersGuessed);
}

function counter() {
	if (counter <= 7) {
// continue with guess()
	} else {

	}
}
