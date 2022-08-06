choices = ["rock", "paper", "scissor"]

function getComputerChoice() {
    
    choice = Math.floor(Math.random() * 3)

    // console.log(choice)
    // console.log(choices[choice])

    return choices[choice]
}

computerSelection = getComputerChoice()
// console.log(computerSelection)

playerSelection = prompt("Rock, Paper, Scissor?").toLocaleLowerCase()
// console.log(playerSelection)

function playRound(pS, cS) {

    // console.log(pS)
    // console.log(cS)

    if (pS === choices[0]) {
        switch (cS) {
            case choices[0]:
                return "It's a tie"
                break;

            case choices[1]:
                return `You Lose! ${cS} beat ${pS}`
                break;

            case choices[2]:
                return `You Win! ${pS} beat ${cS}`
                break;
        }
    }

    else if (pS === choices[1]) {
        switch (cS) {
            case choices[0]:
                return `You Win! ${pS} beat ${cS}`
                break;

            case choices[1]:
                return "It's a tie"
                break;

            case choices[3]:
                return `You Lose! ${cS} beat ${pS}`
                break;
        }
    }
    
    else if (pS === choices[2]) {
        switch (cS) {
            case choices[0]:
                return `You Lose! ${cS} beat ${pS}`
                break;

            case choices[1]:
                return `You Win! ${pS} beat ${cS}`
                break;

            case choices[3]:
                return "It's a tie"
                break;
        }
    }
    
    else {
        return "Invalid Input"
    }
}

console.log(playRound(playerSelection, computerSelection))