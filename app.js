let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

const drawGame = () => {
    message.innerText = "Game was Draw. Play again.";
    message.style.backgroundColor = "rgb(3, 50, 50)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScoreP.innerText = userScore;
        message.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        message.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreP.innerText = compScore;
        message.innerText = `You Lost. ${compChoice} beats your ${userChoice}.`;
        message.style.backgroundColor = "red";
    }
}

//Generating computer choice
const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playGame = (userChoice) => {
    //computer choice
    const compChoice = generateCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});