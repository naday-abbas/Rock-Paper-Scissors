let msg = document.querySelector("#msg");
let userScr = document.querySelector("#user-score");
let compScr = document.querySelector("#comp-score");


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const playGame = (userChoice) => {
    console.log("user choice = " + userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = " + compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("User wins");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScore++;
        userScr.innerText = userScore;
    }
    else{
        console.log("Comp wins");
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
        compScore++;
        compScr.innerText = compScore;
    }
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "Brown";
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
        })
})