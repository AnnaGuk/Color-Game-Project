const squares = document.querySelectorAll(".square");
const colorDisplay = document.querySelector(".colorDisplay");
let messageDisplay = document.querySelector(".message");
const title = document.querySelector(".title");
const resetButton = document.querySelector(".resetBtn");
const modeButtons = document.querySelectorAll(".mode");

let numberOfSquares = 6;
let colors = [];
let pickedColor;

function init() {
	setModeBtn();
	setSquares();	
	reset();
}

function setModeBtn() {
	for(let i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
		reset();
	});
	}
}

function setSquares() {
	for(let i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		let clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			title.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}		
	});
	}
}

function generateRandomColors(num) {
	let generatedArr = [];
	for(let i = 0; i < num; i++) {
		let gen = randomColor();
		generatedArr.push(gen);
	}
	return generatedArr;
}

function randomColor () {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

function pickColor(){
	const random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function reset() {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(let i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i]
		} else squares[i].style.display = "none";
	}
	title.style.backgroundColor = "steelblue";
}

init();

resetButton.addEventListener("click", function() {
	reset();
});
