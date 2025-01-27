// Function: creates a new paragraph and appends it to the bottom of the HTML body.
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);

}
/*
1. Get references to all the buttons on the page in an array format.
2. Loop through all the buttons and add a click event listener to each one.
  
When any button is pressed, the createParagraph() function will be run.
*/
const buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);

}

//////////////////////////////////////////////////////////////////////////////////
//                      GUESSING GAME STARTS HERE!!!                            //
//////////////////////////////////////////////////////////////////////////////////

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;



