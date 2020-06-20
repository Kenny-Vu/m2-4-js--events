//element variables
let head = document.getElementById("head");
let body = document.getElementById("body");
let leftArm = document.getElementById("left-arm");
let rightArm = document.getElementById("right-arm");
let leftLeg = document.getElementById("left-leg");
let rightLeg = document.getElementById("right-leg");
let letterBox = document.getElementById("letter-box");
let answer = document.getElementById("answer");
let wordToGuess = [];
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let randomWords = [
  "banana",
  "alpaca",
  "zebra",
  "sushi",
  "water",
  "whale",
  "penguin",
  "government",
];
//logic for generating letter buttons
function generateLetters(arr) {
  for (let i = 0; i < arr.length; i++) {
    let button = document.createElement("button");
    button.classList.add("letter");
    button.setAttribute("id", `btn-${i}`);
    button.innerText = `${arr[i]}`;
    button.addEventListener("click", letterClicked);
    letterBox.appendChild(button);
  }
}

//logic for selecting random word
const choosenWord = function (arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let wordChosen = arr[randIndex];
  let lettersChosen = wordChosen.split("");
  wordToGuess = lettersChosen;
};

//logic for calculating number of characters and generating same number of tiles\
function displayWord(arr) {
  for (let i = 0; i < arr.length; i++) {
    let tile = document.createElement("div");
    let tileLetter = document.createElement("span");
    tileLetter.innerText = `${arr[i]}`;
    tileLetter.classList.add("tile");
    answer.appendChild(tile);
    tile.appendChild(tileLetter);
  }
}
//logic for removing letters after user clicked
function letterClicked(event) {
  let letterId = event.target.id;
  let letterElement = document.getElementById(letterId);
  letterElement.style.transform = "scale(0.5)";
  letterElement.style.opacity = 0;
  compareLetter(letterId, alphabet, wordToGuess);
  console.log(wordToGuess);
  letterElement.removeEventListener("click", letterClicked);
}

//logic for retrieving user letter choice
function compareLetter(id, arr1, arr2) {
  let letterIndex = id.split("-")[1];
  let answerLetters = [...document.getElementsByClassName("tile")];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[letterIndex] === arr2[i]) {
      answerLetters[i].style.opacity = 1;
      arr2[i] = true;
    }
  }
}

//function for removing body parts when user chooses wrong letter

//function to display letters on the right tiles when user chooses good letter

//function to display losing message

//function to display winning message

generateLetters(alphabet);
choosenWord(randomWords);
displayWord(wordToGuess);
