
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingBtn = document.getElementById("setting-btn");
const settings = document.getElementById("setting");
const settingsForm = document.getElementById("setting-form");
const difficultySelect = document.getElementById("difficulty");


//list of words
const words= ["apple", "steer", "eight", "drags", "loving", "japan","lovely","farcry","goa","tiger","monkey","kings","small","india","mind","quiet","vegetables","chicken","hamburger","pizza","biscuits","barbecue","cuisine"];

//init word
let randomWord;
let score = 0;
let time = 10;
let difficulty =
  localStorage.getItem("difficulty")!== null? 
  localStorage.getItem("difficulty"): "medium";
//set diff select value
difficultySelect.value = difficulty;
//focus on text
text.focus();
//start count down
const timeInterval = setInterval(updateTime, 1000);
//generate random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
//add word to dom
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
addWordToDOM();
//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "sec";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
//game over
function gameOver() {
  endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Restart</button>  
    `;
  endgameEl.style.display = "flex";
}
//event
text.addEventListener("input", (e) => {
  const insetedText = e.target.value;
  if (insetedText === randomWord) {      // checks the given word is correct 
    addWordToDOM();
    updateScore();
    //clear
    e.target.value = "";
    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 4;
    }

    updateTime();
  }
});
//setting
settingBtn.addEventListener("click", () => settings.classList.toggle("hide"));
//setting select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
