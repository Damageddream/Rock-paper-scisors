//notes
// function playerChocie() {
//     let chocie = prompt('Rock, paper or scisors?')
//     chocie = chocie.toLowerCase().trim()
//     const rpsi = ['rock', 'paper', 'scisors']
//     if (!rpsi.includes(chocie)) {
//         while (true) {
//             chocie = prompt('Rock, paper or scisors?')
//             if (rpsi.includes(chocie)) {
//                 break
//             }
//         }
//     }
//     return chocie
// }




function getComputerChoice() {
    const chocies = ['rock', 'paper', 'scissors']
    return chocies[Math.floor(Math.random() * chocies.length)]
}




function playRound(playerSelection, computerSelection) {
    const win = `You win ${playerSelection} beats ${computerSelection}`;
    const lose = `You lose ${computerSelection} beats ${playerSelection}`
    if (playerSelection === computerSelection) {
        return ('It\'s a tie')
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return (lose)
        }
        else if (computerSelection == 'scissors') {
            return (win)
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return (lose)
        }
        else if (computerSelection == 'rock') {
            return (win)
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return (lose)
        }
        else if (computerSelection == 'paper') {
            return (win)
        }
    }
}



// function game(){
//     let playerScore = 0;
//     for(let i = 0; i < 5; i++){
//         const player = playerChocie()
//         const computer = getComputerChoice()
//         const score = playRound(player, computer)
//         console.log(score)
//         if(score.startsWith('You win ')){
//             playerScore += 1;
//         }
        
//     }
//     return(console.log(`Your score is ${playerScore} points`))
// }

// game()

let YourScore = 0
let ComputerScore = 0

const playerScore = document.querySelector('#player')
const computerScore = document.querySelector('#computer')
const winner = document.querySelector('#winner')

const decideWinner = (resultat) => {


    
    if(resultat.startsWith('You win ')){
        YourScore++;
        playerScore.textContent = YourScore.toString()
    }
    else if(resultat.startsWith('You lose ')){
        ComputerScore++;
        computerScore.textContent = ComputerScore.toString()
    }
    if(YourScore === 5){
        winner.textContent = 'YOU WIN! :D'
    }
    else if(ComputerScore === 5){
        winner.textContent = 'YOU LOSE! :('
    }
    

}


const result = document.querySelector('#result')

const rockButton = document.querySelector('#rock')
let chocie;

rockButton.addEventListener('click', (e) => {
    chocie = e.target.value;
    const computer = getComputerChoice()
    const winner = playRound(chocie, computer)
    result.textContent = winner
    decideWinner(winner)

})

const paperButton = document.querySelector('#paper')

paperButton.addEventListener('click', (e) => {
    chocie = e.target.value
    const computer = getComputerChoice()
    const winner = playRound(chocie, computer)
    result.textContent = winner
    decideWinner(winner)
})

const scissorsButton = document.querySelector('#scissors')

scissorsButton.addEventListener('click', (e) => {
    chocie = e.target.value
    const computer = getComputerChoice()
    const winner = playRound(chocie, computer)
    result.textContent = winner
    decideWinner(winner)
})



