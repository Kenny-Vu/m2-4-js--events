//body parts of hangman
let head = document.getElementById("head");
let body = document.getElementById("body");
let leftArm = document.getElementById("left-arm");
let rightArm = document.getElementById("right-arm");
let leftLeg = document.getElementById("left-leg");
let rightLeg = document.getElementById("right-leg");
let bodyParts = [rightLeg, leftLeg, rightArm, leftArm, body, head];
//
let lives = 6;
let letterBox = document.getElementById("letter-box"); // box with letters user can choose
let answer = document.getElementById("answer");
// starting message
let startButton = document.getElementById("start-restart");
let messageBox = document.getElementById("message-box");
let title = document.getElementById("title");
//
let main = document.getElementById("main");
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
  "bacon",
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
  if (lives === 0) {
    youLose();
  } else {
    compareLetter(letterId, alphabet, wordToGuess);
    checkWin();
  }
  console.log(wordToGuess);
  letterElement.removeEventListener("click", letterClicked);
}

//logic for retrieving user letter choice && display letters on the right tiles when user chooses good letter
function compareLetter(id, arr1, arr2) {
  let letterIndex = id.split("-")[1];
  let answerLetters = [...document.getElementsByClassName("tile")];
  let choice = false;
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[letterIndex] === arr2[i]) {
      answerLetters[i].style.opacity = 1;
      choice = true;
      arr2[i] = 1;
      console.log("choice");
    }
  }
  if (choice === false) {
    let part = bodyParts[lives - 1];
    part.style.opacity = 1;
    lives--;
  }
}
//function to display losing message
function youLose() {
  messageBox.style.display = "flex";
  title.innerText = "You lose! 😔 Restart?";
}

//logic to determine if player won
function checkWin() {
  let win = function (arr) {
    return arr.every(function (element) {
      return element === 1;
    });
  };
  if (win(wordToGuess) === true) {
    messageBox.style.display = "flex";
    title.innerText = "You Win! 🤗 Restart?";
  }
}
//logic to reset
function reset() {
  lives = 6;
  answer.innerHTML = "";
  letterBox.innerHTML = "";
  bodyParts.forEach(function (element) {
    element.style.opacity = 0;
  });
}

//function for start button
function startGame() {
  reset();
  main.style.opacity = 1;
  main.style.transitionDuration = "1s";
  answer.style.opacity = 1;
  answer.style.transitionDuration = "1s";
  messageBox.style.display = "none";
  generateLetters(alphabet);
  choosenWord(randomWords);
  displayWord(wordToGuess);
}
startButton.addEventListener("click", startGame);
