const form = document.querySelector('.form');
const btnAgain = document.querySelector('.btnagain');
const guess = document.querySelector('.guess');
const container = document.querySelector('.container');
const life = document.querySelector('.life');
const input = document.querySelector('.number');

// secret number
let secret = Math.floor(Math.random() * 20 + 1);
console.log(secret, typeof secret);

// life
let lifeNumber = 5;
let gameWon = false; // Flag to track game state
let gameLost = false; // Flag to track game state

// function
function onSubmit(e) {
	// prevent from submitting
	e.preventDefault();

	// If the game is already won, return
	if (gameWon) {
		// it will make the function to stop running
		return;
	}

	if (gameLost) {
		// it will make the function to stop running
		return;
	}

	const userNumber = Number(document.querySelector('.number').value);
	// no userNumber
	if (!userNumber) {
		guess.textContent = '⛔ No Number!!';
	} else if (userNumber < 0 || userNumber > 20) {
		alert('Please keep the number between 1-20');
	} else if (userNumber === secret) {
		container.style.backgroundColor = 'rgb(105,253,3)';
		guess.textContent = '😀Correct Answer!!';
		gameWon = true; // Set the game won state to true
	} else if (userNumber > secret) {
		// life logic
		if (lifeNumber > 1) {
			guess.textContent = '📈Too High!!';
			lifeNumber--;
			life.textContent = `❤️Life: ${lifeNumber}`;
		} else {
			guess.textContent = 'You have lost the game !!';
			life.textContent = `❤️Life: 0`;
			container.style.backgroundColor = 'red';
			gameLost = true; // Set the game lost state to true
		}
	} else if (userNumber < secret) {
		if (lifeNumber > 1) {
			guess.textContent = '📉Too Low!!';
			lifeNumber--;
			life.textContent = `❤️Life: ${lifeNumber}`;
		} else {
			guess.textContent = 'You have lost the game !!';
			life.textContent = `❤️Life: 0`;
			container.style.backgroundColor = 'red';
			gameLost = true; // Set the game lost state to true
		}
	}
}

// function of reset
function onPlay() {
	guess.textContent = '🤔Start Guessing...';
	life.textContent = '❤️Life: 5';
	container.style.backgroundColor = 'white';
	input.value = '';
	// helps to reset the secretNumber
	location.reload();
	gameWon = false; // Reset the game won state
}

// addEventListener
form.addEventListener('submit', onSubmit);
btnAgain.addEventListener('click', onPlay);
