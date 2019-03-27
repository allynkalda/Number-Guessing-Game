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
		// Visualize the blanks of the letters
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
var photo = 0;

function guess(input) {
	counter++;
	var input;
	var hangs = 0;
	
	
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
				hangs++;
				console.log("nope");
			}

		}

	hangMan();
	// Detects if the player won
	if (lettersGuessed == word.length) {
		document.getElementById("numOfGuesses").innerHTML = "You won!";
	}
	console.log(input);
	console.log(counter);
	console.log(lettersGuessed);
	console.log(hangs);
//




function hangMan() {




	if (hangs == word.length) {
		photo++;

		//for (var k = 0; k <= photo; k++) {
		//console.log("To the gallows!");
		var head = document.querySelector("tr");
		var visual = document.createElement("td");
		visual.setAttribute("id", photo);              
		var q = document.createTextNode("*"); 
		visual.appendChild(q);
		document.getElementById("hang").appendChild(visual);
			//visual.insertBefore(visual, head);
		
		
		//}
	}
	
}
}
