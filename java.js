console.log("Game Start!")

let computerSelection = computerChoice()
let playerSelection = playerChoice()

function computerChoice() {
    let number = Math.random()
    if (number < 0.33) {return "Rock"}
    else if (number < 0.67) {return "Scissors"}
    else return "Paper"
}

function playerChoice() {
   return prompt("Please type Rock, Paper or Scissors")
}

let playerScore = 0
let computerScore = 0

function playRound (computer, player) {

    let computerArranjed = String(computer).toLowerCase()
    let playerArranjed = String(player).toLowerCase()

    console.log(computerArranjed + " / " + playerArranjed)
    if (computerArranjed === playerArranjed) {
        console.log("Computer: " + computerScore + ", Player: " + playerScore)
        console.log("It's a tie!")
        return 
    } else if (computerArranjed === "rock" && playerArranjed === "scissors") {
        computerScore++
        console.log("Computer: " + computerScore + ", Player: " + playerScore)
        console.log("You lose! Rock beats Scissors")
        return 
    } else if (computerArranjed === "rock" && playerArranjed === "paper") {
        playerScore++
        console.log("Computer: " + computerScore + ", Player: " + playerScore)
        console.log("You win! Paper beats Rock")
        return 
    } else if (computerArranjed === "scissors" && playerArranjed === "rock") {
        playerScore++
        console.log("Computer: " + computerScore + ", Player: " + playerScore)
        console.log("You win! Rock beats Scissors")
        return 
    } else if (computerArranjed === "scissors" && playerArranjed === "paper") {
        computerScore++
        console.log("Computer: " + computerScore + ", Player: " + playerScore)
        console.log("You lose! Scissors beats Paper")
        return 
    } else if (computerArranjed === "paper" && playerArranjed === "rock") {
        computerScore++
        console.log("Computer: " + computerScore + ", Player: " + playerScore)
        console.log("You lose! Paper beats Rock")
        return 
    } else if (computerArranjed === "paper" && playerArranjed === "scissors") {
        playerScore++
        console.log("Computer: " + computerScore + ", Player: " + playerScore)
        console.log("You win! Scissors beats Paper")
        return 
    } 
}


function playGame() {
    console.log("Round 1!")
    computerSelection = computerChoice()
    playerSelection = playerChoice()
    playRound (computerSelection, playerSelection)

    console.log("Round 2!")
    computerSelection = computerChoice()
    playerSelection = playerChoice()
    playRound (computerSelection, playerSelection)

    console.log("Round 3!")
    computerSelection = computerChoice()
    playerSelection = playerChoice()
    playRound (computerSelection, playerSelection)

    console.log("Round 4!")
    computerSelection = computerChoice()
    playerSelection = playerChoice()
    playRound (computerSelection, playerSelection)

    console.log("Round 5!")
    computerSelection = computerChoice()
    playerSelection = playerChoice()
    playRound (computerSelection, playerSelection)
    
}

playGame()