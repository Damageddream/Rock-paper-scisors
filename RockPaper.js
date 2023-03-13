//notes
function playerChocie() {
    let chocie = prompt('Rock, paper or scisors?')
    chocie = chocie.toLowerCase().trim()
    const rpsi = ['rock', 'paper', 'scisors']
    if (!rpsi.includes(chocie)) {
        while (true) {
            chocie = prompt('Rock, paper or scisors?')
            if (rpsi.includes(chocie)) {
                break
            }
        }
    }
    return chocie
}




function getComputerChoice() {
    const chocies = ['rock', 'paper', 'scisors']
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
        else if (computerSelection == 'scisors') {
            return (win)
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scisors') {
            return (lose)
        }
        else if (computerSelection == 'rock') {
            return (win)
        }
    }
    else if (playerSelection == 'scisors') {
        if (computerSelection == 'rock') {
            return (lose)
        }
        else if (computerSelection == 'paper') {
            return (win)
        }
    }
}

function game(){
    let playerScore = 0;
    for(let i = 0; i < 5; i++){
        const player = playerChocie()
        const computer = getComputerChoice()
        const score = playRound(player, computer)
        console.log(score)
        if(score.startsWith('You win ')){
            playerScore += 1;
        }
        
    }
    return(console.log(`Your score is ${playerScore} points`))
}

game()