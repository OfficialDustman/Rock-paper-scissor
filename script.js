choices = ["rock", "paper", "scissor"]

function getComputerChoice() {
    
    choice = Math.floor(Math.random() * 3)

    // console.log(choice)
    // console.log(choices[choice])

    return choices[choice]
}

// for scoring (pP refering to player points as cP to computer points)
pP = 0
cP = 0

function playRound(pS, cS) {

    // console.log(pS)
    // console.log(cS)

    if (pS === choices[0]) {
        switch (cS) {
            case choices[0]:
                return "It's a tie"
                break;

            case choices[1]:
                cP += 1;
                return `You Lose! ${cS} beat ${pS}`
                break;

            case choices[2]:
                pP += 1;
                return `You Win! ${pS} beat ${cS}`
                break;
        }
    }

    else if (pS === choices[1]) {
        switch (cS) {
            case choices[0]:
                pP += 1;
                return `You Win! ${pS} beat ${cS}`
                break;

            case choices[1]:
                return "It's a tie"
                break;

            case choices[3]:
                cP += 1;
                return `You Lose! ${cS} beat ${pS}`
                break;
        }
    }
    
    else if (pS === choices[2]) {
        switch (cS) {
            case choices[0]:
                cP += 1;
                return `You Lose! ${cS} beat ${pS}`
                break;

            case choices[1]:
                pP += 1;
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

// console.log(playRound(playerSelection, computerSelection))

function game() {

    // playRound(playerSelection, computerSelection)

    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("Rock, Paper, Scissor?").toLocaleLowerCase()
        console.log(`You selected : ${playerSelection}`)

        computerSelection = getComputerChoice()
        console.log(`The computer selected : ${computerSelection}`)

        console.log(playRound(playerSelection, computerSelection))
        console.log(`Computer point(s) : ${cP}, Your point(s) : ${pP}`);
    }

    if (cP > pP) {
        console.log("You Lost to The Computer!");
    } else {
        console.log("You Won The Game!");
    }

}

game();