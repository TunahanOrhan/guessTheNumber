let randomNumber = Math.floor(Math.random() * 20) + 1; // Generate random number between 1-20
// console.log(randomNumber);
// Getting elements
const correctness = document.querySelector("#correctness");
const randomNumberContainer = document.querySelector("#randomNumberContainer");
const score = document.querySelector("#scoreNumber");
const highscore = document.querySelector("#highscoreNumber");
// Setting score and highscore values
score.innerHTML = 20;
highscore.innerHTML = 0;

// 
const getGuessNumber = () => {
  const guessNumber = document.querySelector("#guessInput").value;
  if (!guessNumber) {
    correctness.innerHTML = "No Number!";
    document.querySelector("body").style.backgroundColor = "#EF6461";
  } else if (guessNumber > 20 || guessNumber < 1) {
    correctness.innerHTML = "Guess must be between 1 and 20";
    document.querySelector("body").style.backgroundColor = "#EF6461";
  } else if (randomNumber > guessNumber) {
    correctness.innerHTML = "🆙 Too Low!";
    score.innerHTML = score.innerHTML - 1;
    randomNumberContainer.innerHTML = guessNumber;
    document.querySelector("body").style.backgroundColor = "#E4B363";
  } else if (randomNumber < guessNumber) {
    correctness.innerHTML = "🎈 Too High!";
    score.innerHTML = score.innerHTML - 1;
    randomNumberContainer.innerHTML = guessNumber;
    document.querySelector("body").style.backgroundColor = "#E4B363";
  } else {
    correctness.innerHTML = "🎯 Correct!!";
    randomNumberContainer.innerHTML = randomNumber;
    document.querySelector("body").style.backgroundColor = "#5E7A2A";
    if (score.innerHTML > highscore.innerHTML) {
      highscore.innerHTML = score.innerHTML;
    }
  }
};

// Game reset by clicking again button
const resetGame = () => {
  randomNumber = Math.floor(Math.random() * 20) + 1; // Generate random number between 1-20
//   console.log(randomNumber);
  randomNumberContainer.innerHTML = "?";
  correctness.innerHTML = "Start Guessing..";
  score.innerHTML = 20;
  document.querySelector("#guessInput").value = "";
  document.querySelector("body").style.backgroundColor = "#313638";
};

// when click the check button calling getGuessNumber function
document
  .querySelector("#numberCheckBtn")
  .addEventListener("click", getGuessNumber);

// when click the again button calling  resetGame function
document.querySelector("#againBtn").addEventListener("click", resetGame);
