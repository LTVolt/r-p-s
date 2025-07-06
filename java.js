
let playerChoice = ""
let computerScore = 0
let playerScore = 0 

function chooseRock() {
    playerChoice = "Rock"
    console.log(playerChoice)
    let text = document.querySelector('#playerText')
    let computer = computerChoice()
    text.textContent = "You chose Rock!"
    playRound(computer, playerChoice)
}

function choosePaper() {
    playerChoice = "Paper"
    console.log(playerChoice)
    let text = document.querySelector('#playerText')
    let computer = computerChoice()
    text.textContent = "You chose Paper!"
    playRound(computer, playerChoice)
}

function chooseScissors() {
    playerChoice = "Scissors"
    console.log(playerChoice)
    let text = document.querySelector('#playerText')
    let computer = computerChoice()
    text.textContent = "You chose Scissors!"
    playRound(computer, playerChoice)
}

document.addEventListener("DOMContentLoaded", function(){
    const rockButton = document.querySelector('#rock')
    rockButton.onclick = chooseRock
})

document.addEventListener("DOMContentLoaded", function(){
    const paperButton = document.querySelector('#paper')
    paperButton.onclick = choosePaper
})

document.addEventListener("DOMContentLoaded", function(){
    const scissorsButton = document.querySelector('#scissors')
    scissorsButton.onclick = chooseScissors
})

function computerChoice() {
    let number = Math.random()
    if (number < 0.33) {return "Rock"}
    else if (number < 0.67) {return "Scissors"}
    else return "Paper"
}

function playRound (computer, player) {

    let text = document.querySelector('#computerText')
    text.textContent = "Computer chose " + computer + "!"
    let result = document.querySelector('#resultText')

    if (computer === player) {
        result.textContent = "Computer: " + computerScore + ", Player: " + playerScore
        return 
    } else if (computer === "Rock" && player === "Scissors") {
        computerScore++
        result.textContent = "Computer: " + computerScore + ", Player: " + playerScore
        return 
    } else if (computer === "Rock" && player === "Paper") {
        playerScore++
        result.textContent = "Computer: " + computerScore + ", Player: " + playerScore
        return 
    } else if (computer === "Scissors" && player === "Rock") {
        playerScore++
        result.textContent = "Computer: " + computerScore + ", Player: " + playerScore
        return 
    } else if (computer === "Scissors" && player === "Paper") {
        computerScore++
        result.textContent = "Computer: " + computerScore + ", Player: " + playerScore
        return 
    } else if (computer === "Paper" && player === "Rock") {
        computerScore++
        result.textContent = "Computer: " + computerScore + ", Player: " + playerScore
        return 
    } else if (computer === "Paper" && player === "Scissors") {
        playerScore++
        result.textContent = "Computer: " + computerScore + ", Player: " + playerScore
        return 
    } 
}


/*Old code
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

playGame() */